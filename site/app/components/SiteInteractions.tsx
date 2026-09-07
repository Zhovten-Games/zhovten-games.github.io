"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type NavigationItem = {
  href: string;
  label: string;
};

export type InteractionLabels = {
  close: string;
  loadError: string;
  loading: string;
  menu: string;
  openFullPage: string;
  primaryNavigation: string;
};

type ModalState =
  | { kind: "closed" }
  | { kind: "menu"; title: string }
  | {
      bodyHtml: string;
      error: boolean;
      href: string;
      kind: "post";
      loading: boolean;
      title: string;
    };

type BackgroundState = {
  ariaHidden: string | null;
  element: HTMLElement;
  inert: boolean;
};

function elementsWithin(root: ParentNode, selector: string): HTMLElement[] {
  const elements = Array.from(root.querySelectorAll<HTMLElement>(selector));
  if (root instanceof HTMLElement && root.matches(selector)) {
    elements.unshift(root);
  }
  return elements;
}

function installMotion(root: ParentNode) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (
    reducedMotion ||
    typeof IntersectionObserver === "undefined" ||
    typeof Element.prototype.animate !== "function"
  ) {
    return () => {};
  }

  const runningAnimations = new Set<Animation>();
  const runningFrames = new Set<number>();
  const observed = new WeakSet<Element>();
  const animatedLeaves: HTMLElement[] = [];

  const track = (animation: Animation) => {
    runningAnimations.add(animation);
    animation.finished.catch(() => {}).finally(() => runningAnimations.delete(animation));
    return animation;
  };

  elementsWithin(root, ".zg-leaf").forEach((leaf, index) => {
    if (leaf.dataset.motionBound) return;
    leaf.dataset.motionBound = "leaf";
    animatedLeaves.push(leaf);
    const computed = window.getComputedStyle(leaf);
    const baseTransform = computed.transform === "none" ? "" : computed.transform;
    const baseOpacity = Number(computed.opacity) || 1;
    const entrance = track(
      leaf.animate(
        [
          {
            opacity: 0,
            transform: `${baseTransform} translate(${18 + index * 8}px, -10px) rotate(${12 + index * 5}deg)`,
          },
          { opacity: baseOpacity, transform: baseTransform },
        ],
        { duration: 850, easing: "cubic-bezier(.2,.75,.25,1)", fill: "both" },
      ),
    );
    entrance.finished
      .then(() => {
        track(
          leaf.animate(
            [
              { transform: baseTransform },
              { transform: `${baseTransform} translateY(5px) rotate(1.5deg)` },
            ],
            {
              direction: "alternate",
              duration: 5000 + index * 900,
              easing: "ease-in-out",
              iterations: Infinity,
            },
          ),
        );
      })
      .catch(() => {});
  });

  const scheduleFrame = (callback: FrameRequestCallback) => {
    const frameId = requestAnimationFrame((now) => {
      runningFrames.delete(frameId);
      callback(now);
    });
    runningFrames.add(frameId);
  };

  const typeNode = (node: HTMLElement) => {
    const source = node.textContent ?? "";
    if (!source.trim()) return;
    const characters = Array.from(source);
    const duration = Math.max(550, Math.min(2200, characters.length * 20));
    const startedAt = performance.now();
    node.textContent = "";
    node.classList.add("is-typing");

    const frame = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      node.textContent = characters.slice(0, Math.floor(characters.length * progress)).join("");
      if (progress < 1) {
        scheduleFrame(frame);
        return;
      }
      node.textContent = source;
      node.classList.remove("is-typing");
      node.classList.add("is-typed");
    };

    scheduleFrame(frame);
  };

  const revealNode = (node: HTMLElement) => {
    node.classList.add("is-revealed");
    track(
      node.animate(
        [
          { opacity: 0, transform: "translateY(10px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: node.hasAttribute("data-reveal-card") ? 220 : 320,
          easing: "cubic-bezier(.2,.75,.25,1)",
        },
      ),
    );
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => {
          const relation = left.target.compareDocumentPosition(right.target);
          return relation & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        })
        .forEach((entry) => {
          observer.unobserve(entry.target);
          const node = entry.target as HTMLElement;
          if (node.hasAttribute("data-type-target")) typeNode(node);
          else revealNode(node);
        });
    },
    { rootMargin: "0px 0px -5% 0px", threshold: 0.01 },
  );

  const register = (scope: ParentNode) => {
    elementsWithin(
      scope,
      "[data-type-target], [data-reveal-target], [data-reveal-group], [data-reveal-card]",
    ).forEach((node) => {
      if (observed.has(node)) return;
      observed.add(node);
      observer.observe(node);
    });

    elementsWithin(scope, "[data-rich-content]").forEach((container) => {
      container
        .querySelectorAll<HTMLElement>("p, li, blockquote, h2, h3")
        .forEach((node) => {
          if (observed.has(node)) return;
          observed.add(node);
          observer.observe(node);
        });
    });
  };

  register(root);
  const mutations = new MutationObserver((records) => {
    records.forEach((record) => {
      record.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) register(node);
      });
    });
  });
  mutations.observe(document.body, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    mutations.disconnect();
    runningAnimations.forEach((animation) => animation.cancel());
    runningFrames.forEach((frame) => cancelAnimationFrame(frame));
    animatedLeaves.forEach((leaf) => delete leaf.dataset.motionBound);
  };
}

export function SiteInteractions({
  labels,
  navigation,
}: {
  labels: InteractionLabels;
  navigation: NavigationItem[];
}) {
  const [modal, setModal] = useState<ModalState>({ kind: "closed" });
  const dialogRef = useRef<HTMLElement>(null);
  const modalOpenRef = useRef(false);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const previousUrl = useRef<string | null>(null);
  const modalUrl = useRef<string | null>(null);
  const requestSequence = useRef(0);
  const backgroundState = useRef<BackgroundState[]>([]);

  const isolateBackground = useCallback(() => {
    backgroundState.current = Array.from(
      document.querySelectorAll<HTMLElement>("header, main, footer"),
    ).map((element) => ({
      ariaHidden: element.getAttribute("aria-hidden"),
      element,
      inert: element.inert,
    }));

    backgroundState.current.forEach(({ element }) => {
      element.inert = true;
      element.setAttribute("aria-hidden", "true");
    });
    document.body.classList.add("is-modal-open");
  }, []);

  const restoreBackground = useCallback(() => {
    backgroundState.current.forEach(({ ariaHidden, element, inert }) => {
      element.inert = inert;
      if (ariaHidden === null) element.removeAttribute("aria-hidden");
      else element.setAttribute("aria-hidden", ariaHidden);
    });
    backgroundState.current = [];
    document.body.classList.remove("is-modal-open");
  }, []);

  const focusDialog = useCallback(() => {
    requestAnimationFrame(() => dialogRef.current?.focus());
  }, []);

  const beginOpen = useCallback(() => {
    if (!modalOpenRef.current) {
      previousActiveElement.current =
        document.activeElement instanceof HTMLElement ? document.activeElement : null;
      previousUrl.current = window.location.href;
      modalOpenRef.current = true;
      isolateBackground();
    }
    focusDialog();
  }, [focusDialog, isolateBackground]);

  const close = useCallback(
    (fromPopstate = false) => {
      if (!modalOpenRef.current) return;
      requestSequence.current += 1;
      modalOpenRef.current = false;
      setModal({ kind: "closed" });
      restoreBackground();

      if (
        !fromPopstate &&
        modalUrl.current &&
        previousUrl.current &&
        window.location.href !== previousUrl.current
      ) {
        window.history.replaceState(null, "", previousUrl.current);
      }

      modalUrl.current = null;
      previousActiveElement.current?.focus();
    },
    [restoreBackground],
  );

  const openMenu = useCallback(() => {
    modalUrl.current = null;
    setModal({ kind: "menu", title: labels.menu });
    beginOpen();
  }, [beginOpen, labels.menu]);

  const openPost = useCallback(
    async (trigger: HTMLElement) => {
      const title = trigger.dataset.postTitle || labels.openFullPage;
      const rawUrl = trigger.dataset.postUrl || "#";
      const parsedUrl = new URL(rawUrl, window.location.origin);
      const currentRequest = requestSequence.current + 1;
      requestSequence.current = currentRequest;

      if (parsedUrl.origin !== window.location.origin) {
        modalUrl.current = null;
        setModal({
          bodyHtml: "",
          error: true,
          href: parsedUrl.toString(),
          kind: "post",
          loading: false,
          title,
        });
        beginOpen();
        return;
      }

      const safeUrl = parsedUrl.toString();
      modalUrl.current = safeUrl;
      setModal({
        bodyHtml: "",
        error: false,
        href: safeUrl,
        kind: "post",
        loading: true,
        title,
      });
      beginOpen();
      window.history.pushState({ modal: "post", url: safeUrl }, "", safeUrl);

      try {
        const response = await fetch(safeUrl, {
          credentials: "same-origin",
          headers: { Accept: "text/html" },
        });
        if (!response.ok) throw new Error("Post preview request failed");
        const html = await response.text();
        const documentPreview = new DOMParser().parseFromString(html, "text/html");
        const content = documentPreview.querySelector<HTMLElement>("[data-post-content]");
        if (!content) throw new Error("Post content selector is missing");
        content.querySelectorAll("script").forEach((script) => script.remove());
        if (requestSequence.current !== currentRequest || !modalOpenRef.current) return;
        setModal({
          bodyHtml: content.innerHTML,
          error: false,
          href: safeUrl,
          kind: "post",
          loading: false,
          title,
        });
      } catch {
        if (requestSequence.current !== currentRequest || !modalOpenRef.current) return;
        setModal({
          bodyHtml: "",
          error: true,
          href: safeUrl,
          kind: "post",
          loading: false,
          title,
        });
      }
    },
    [beginOpen, labels.openFullPage],
  );

  useEffect(() => {
    document.documentElement.classList.add("has-js");
    const removeMotion = installMotion(document);

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const trigger = event.target.closest<HTMLElement>("[data-modal-open]");
      if (!trigger) return;
      event.preventDefault();
      if (trigger.dataset.modalOpen === "menu") openMenu();
      if (trigger.dataset.modalOpen === "post") void openPost(trigger);
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (!modalOpenRef.current || !dialogRef.current) return;
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hidden && element.getAttribute("aria-hidden") !== "true");
      if (!focusable.length) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const handlePopstate = () => close(true);
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeydown);
    window.addEventListener("popstate", handlePopstate);

    return () => {
      removeMotion();
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("popstate", handlePopstate);
      restoreBackground();
      document.documentElement.classList.remove("has-js");
    };
  }, [close, openMenu, openPost, restoreBackground]);

  const isOpen = modal.kind !== "closed";
  const title = isOpen ? modal.title : labels.menu;

  return (
    <div
      aria-hidden={isOpen ? undefined : "true"}
      className="zg-modal"
      data-modal-root
      hidden={!isOpen}
      id="zg-modal-root"
    >
      <button
        aria-label={labels.close}
        className="zg-modal__backdrop"
        data-modal-close
        onClick={() => close()}
        tabIndex={-1}
        type="button"
      />
      <section
        aria-labelledby="zg-modal-title"
        aria-modal="true"
        className="zg-modal__dialog"
        data-modal-dialog
        ref={dialogRef}
        role="dialog"
        tabIndex={-1}
      >
        <button
          className="zg-modal__close"
          data-modal-close
          onClick={() => close()}
          type="button"
        >
          {labels.close}
        </button>
        <h2 data-modal-title id="zg-modal-title">{title}</h2>
        <div
          aria-busy={modal.kind === "post" && modal.loading ? "true" : undefined}
          className="zg-modal__body"
          data-modal-body
        >
          {modal.kind === "menu" && (
            <nav aria-label={labels.primaryNavigation} className="zg-modal__menu">
              <ul>
                {navigation.map((item) => (
                  <li key={item.href}><a href={item.href}>{item.label}</a></li>
                ))}
              </ul>
            </nav>
          )}
          {modal.kind === "post" && modal.loading && <p>{labels.loading}</p>}
          {modal.kind === "post" && modal.error && (
            <>
              <p>{labels.loadError}</p>
              <p><a href={modal.href}>{labels.openFullPage}</a></p>
            </>
          )}
          {modal.kind === "post" && !modal.loading && !modal.error && (
            <div dangerouslySetInnerHTML={{ __html: modal.bodyHtml }} />
          )}
        </div>
      </section>
    </div>
  );
}
