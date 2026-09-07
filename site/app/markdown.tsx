import type { ReactNode } from "react";
import type { Locale } from "./site-types";

function localizedHref(href: string, locale: Locale): string {
  if (locale === "en" || !href.startsWith("/")) {
    return href;
  }

  if (/^\/(blog|projects|authors|about|contact|governance)(\/|$)/.test(href)) {
    return "/" + locale + href;
  }

  return href;
}

function inline(text: string, locale: Locale): ReactNode[] {
  const pattern =
    /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*|\x60[^\x60]+\x60)/g;
  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > cursor) {
      nodes.push(text.slice(cursor, index));
    }

    const token = match[0];
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const href = localizedHref(link[2], locale);
      const external = /^https?:\/\//.test(href);
      nodes.push(
        <a
          href={href}
          key={index + "-link"}
          rel={external ? "noopener noreferrer" : undefined}
          target={external ? "_blank" : undefined}
        >
          {link[1]}
        </a>,
      );
    } else if (token.startsWith("**")) {
      nodes.push(<strong key={index + "-strong"}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("*")) {
      nodes.push(<em key={index + "-em"}>{token.slice(1, -1)}</em>);
    } else {
      nodes.push(<code key={index + "-code"}>{token.slice(1, -1)}</code>);
    }

    cursor = index + token.length;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return nodes;
}

function headingId(text: string): string {
  return text
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-|-$/g, "");
}

export function Markdown({
  children,
  locale,
}: {
  children: string;
  locale: Locale;
}) {
  const lines = children.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const text = heading[2];
      const props = { id: headingId(text), children: inline(text, locale) };
      blocks.push(
        level === 2 ? (
          <h2 key={index} {...props} />
        ) : level === 3 ? (
          <h3 key={index} {...props} />
        ) : (
          <h4 key={index} {...props} />
        ),
      );
      index += 1;
      continue;
    }

    if (/^\x60{3}/.test(line)) {
      const code: string[] = [];
      index += 1;
      while (index < lines.length && !/^\x60{3}/.test(lines[index])) {
        code.push(lines[index]);
        index += 1;
      }
      index += 1;
      blocks.push(
        <pre key={"code-" + index}>
          <code>{code.join("\n")}</code>
        </pre>,
      );
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quote: string[] = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) {
        quote.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }
      blocks.push(
        <blockquote key={"quote-" + index}>
          {quote.map((item, quoteIndex) => (
            <p key={quoteIndex}>{inline(item.replace(/\s{2}$/, ""), locale)}</p>
          ))}
        </blockquote>,
      );
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^[-*]\s+/, ""));
        index += 1;
      }
      blocks.push(
        <ul key={"ul-" + index}>
          {items.map((item, itemIndex) => (
            <li key={itemIndex}>{inline(item, locale)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    if (/^\d+[.)]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+[.)]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+[.)]\s+/, ""));
        index += 1;
      }
      blocks.push(
        <ol key={"ol-" + index}>
          {items.map((item, itemIndex) => (
            <li key={itemIndex}>{inline(item, locale)}</li>
          ))}
        </ol>,
      );
      continue;
    }

    const paragraph: string[] = [line];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(#{2,4})\s+|^\x60{3}|^>\s?|^[-*]\s+|^\d+[.)]\s+/.test(lines[index])
    ) {
      paragraph.push(lines[index]);
      index += 1;
    }
    blocks.push(
      <p key={"p-" + index}>{inline(paragraph.join(" "), locale)}</p>,
    );
  }

  return <div className="zg-rich-content" data-rich-content>{blocks}</div>;
}
