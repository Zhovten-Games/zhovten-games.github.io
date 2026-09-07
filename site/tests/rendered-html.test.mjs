import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const assets = {
  fetch: async () => new Response("Not found", { status: 404 }),
};

async function request(path, accept = "text/html") {
  let response = await worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept } }),
    { ASSETS: assets },
    { waitUntil() {}, passThroughOnException() {} },
  );
  if ([301, 302, 307, 308].includes(response.status)) {
    const location = response.headers.get("location");
    assert.ok(location, `${path} redirect should have a location`);
    const redirectPath = new URL(location, "http://localhost");
    response = await worker.fetch(
      new Request(redirectPath, { headers: { accept } }),
      { ASSETS: assets },
      { waitUntil() {}, passThroughOnException() {} },
    );
  }
  return response;
}

async function text(path, accept) {
  const response = await request(path, accept);
  assert.equal(response.status, 200, `${path} should return 200`);
  return response.text();
}

const editions = [
  { locale: "en", prefix: "", title: "Zhovten Games" },
  { locale: "uk", prefix: "/uk", title: "Zhovten Games" },
  { locale: "ru", prefix: "/ru", title: "Zhovten Games" },
  { locale: "ja", prefix: "/ja", title: "Zhovten Games" },
];

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

function assertClosedDocument(html, path) {
  const trimmed = html.trimEnd();
  const lower = trimmed.toLowerCase();
  const bodyClose = lower.lastIndexOf("</body>");
  const htmlClose = lower.lastIndexOf("</html>");

  assert.ok(bodyClose >= 0, `${path} should close body`);
  assert.ok(htmlClose > bodyClose, `${path} should close html after body`);
  assert.equal(htmlClose + "</html>".length, trimmed.length, `${path} should end at </html>`);
  assert.doesNotMatch(
    trimmed.slice(bodyClose + "</body>".length, htmlClose),
    /<script\b/i,
    `${path} should keep scripts inside body`,
  );
}

test("renders the development preview marker", async () => {
  const html = await text("/");
  assert.match(html, developmentPreviewMeta);
});

test("renders four locale roots with correct language and discovery metadata", async () => {
  for (const edition of editions) {
    const path = edition.prefix ? `${edition.prefix}/` : "/";
    const html = await text(path);
    assert.match(html, new RegExp(`<html[^>]+lang=["']${edition.locale}["']`, "i"));
    assert.match(html, /<title>Zhovten Games<\/title>/i);
    const canonical = edition.prefix
      ? `https://zhovten.games${edition.prefix}/`
      : "https://zhovten.games/";
    assert.ok(html.includes(`rel="canonical" href="${canonical}"`));
    assert.match(html, /hrefLang="en"/i);
    assert.match(html, /hrefLang="uk"/i);
    assert.match(html, /hrefLang="ru"/i);
    assert.match(html, /hrefLang="ja"/i);
    assert.match(html, /hrefLang="x-default" href="https:\/\/zhovten\.games\/uk\/"/i);
    assert.ok(html.includes('property="og:image" content="https://zhovten.games/og.png"'));
    assert.ok(html.includes('name="twitter:card" content="summary_large_image"'));
  }
});

test("keeps every rendered script inside body and closes the HTML document cleanly", async () => {
  const representativePaths = [
    "/",
    "/uk/",
    "/ru/blog/",
    "/ja/projects/",
    "/projects/interdead/",
    "/authors/oksana-dubinetska/",
    "/governance/",
  ];

  for (const path of representativePaths) {
    assertClosedDocument(await text(path), path);
  }
});

test("restores the modal menu, post previews, motion hooks, and journal route", async () => {
  const previewLabels = {
    en: "WINDOW",
    uk: "У ВІКНІ",
    ru: "В ОКНЕ",
    ja: "ウィンドウ",
  };

  for (const edition of editions) {
    const path = edition.prefix ? `${edition.prefix}/` : "/";
    const html = await text(path);
    const blogPath = `${edition.prefix}/blog/`;
    assert.ok(!html.includes("IN FOEDERE CUM MUTATIONE"));
    assert.ok(html.includes('data-modal-open="menu"'));
    assert.ok(html.includes('data-modal-open="post"'));
    assert.ok(html.includes('data-type-target="short"'));
    assert.ok(html.includes('data-reveal-card="true"'));
    assert.ok(html.includes('data-modal-root="true"'));
    assert.ok(html.includes(`href="${blogPath}"`));
    assert.ok(html.includes(previewLabels[edition.locale]));

    const post = await text(`${edition.prefix}/blog/why-canon-contract-interdead/`);
    assert.ok(post.includes('data-post-content="true"'));
    assert.ok(post.includes('data-rich-content="true"'));
  }
});

test("publishes founder histories, organization links, social networks, and the logo favicon", async () => {
  for (const edition of editions) {
    const rootPath = edition.prefix ? `${edition.prefix}/` : "/";
    const rootHtml = await text(rootPath);
    const aboutPath = `${edition.prefix}/about/`;
    const authorsPath = `${edition.prefix}/authors/`;
    const aboutIndex = rootHtml.indexOf(aboutPath);
    const authorsIndex = rootHtml.indexOf(authorsPath);

    assert.ok(aboutIndex >= 0);
    assert.ok(authorsIndex > aboutIndex);
    assert.ok(rootHtml.includes("https://www.linkedin.com/company/zhovten-games/"));
    assert.ok(rootHtml.includes("https://github.com/Zhovten-Games"));
    assert.ok(rootHtml.includes("https://zhovten-games.itch.io/"));
    assert.ok(rootHtml.includes("https://discord.gg/vAWYg3jFEp"));
    assert.ok(rootHtml.includes("/favicon.png"));
    assert.ok(rootHtml.includes("/favicon.ico"));

    const about = await text(aboutPath);
    assert.ok(about.includes("https://github.com/FOP-Oksana-Dubinetska"));
    assert.ok(about.includes("https://github.com/Zhovten-Games"));
    assert.ok(about.includes("https://github.com/IRONCREED"));

    const sam = await text(`${edition.prefix}/authors/sam-starling/`);
    assert.ok(sam.includes("https://github.com/pan-canon"));
    assert.ok(sam.includes("https://www.linkedin.com/in/pan-canon/"));
    assert.ok(sam.includes("https://orcid.org/0009-0009-2621-6372"));
    assert.ok(sam.includes("Full-Stack Web Engineer"));

    const oksana = await text(`${edition.prefix}/authors/oksana-dubinetska/`);
    assert.ok(oksana.includes("https://www.linkedin.com/in/oksanadubinetska/"));
    assert.ok(oksana.includes("https://orcid.org/0009-0003-8777-8412"));
    assert.ok(oksana.includes("https://github.com/FOP-Oksana-Dubinetska"));
    assert.ok(oksana.includes("https://t.me/gamedevoksana"));
    assert.ok(oksana.includes("GrandMA Studios"));
    assert.ok(oksana.includes("Clockwork Magick"));
    assert.ok(oksana.includes("Rocketslides"));
    assert.ok(oksana.includes("SM Banking Club"));
    assert.ok(oksana.includes("The Dalimar Legacy"));
  }

  const root = new URL("..", import.meta.url);
  const favicon = await readFile(new URL("public/favicon.png", root));
  const legacyIcon = await readFile(new URL("public/favicon.ico", root));
  assert.equal(favicon.readUInt32BE(16), 512);
  assert.equal(favicon.readUInt32BE(20), 512);
  assert.ok(legacyIcon.byteLength > 0);
});

test("publishes all registered items in every locale sitemap", async () => {
  const register = JSON.parse(
    await readFile(new URL("../governance/content-publication-register.json", import.meta.url)),
  );
  assert.equal(register.publications.length, 13);
  assert.equal(register.exclusions.length, 1);
  assert.equal(register.projectDecisions.published.length, 9);
  assert.equal(register.projectDecisions.excluded.length, 0);
  assert.equal(register.projectDecisions.resolved.length, 1);

  const index = await text("/sitemap.xml", "application/xml");
  for (const edition of editions) {
    assert.ok(index.includes(`https://zhovten.games/sitemaps/${edition.locale}.xml`));
    const sitemap = await text(`/sitemaps/${edition.locale}.xml`, "application/xml");
    const urls = [...sitemap.matchAll(/<url>/g)];
    assert.equal(urls.length, 31, `${edition.locale} sitemap URL count`);

    for (const publication of register.publications) {
      const prefix = edition.prefix;
      assert.ok(
        sitemap.includes(`https://zhovten.games${prefix}/blog/${publication.slug}/`),
        `${edition.locale} missing ${publication.slug}`,
      );
      assert.ok(sitemap.includes(`<lastmod>${publication.date}</lastmod>`));
    }

    for (const other of editions) {
      if (other.locale !== edition.locale && other.prefix) {
        assert.ok(
          !sitemap.includes(`https://zhovten.games${other.prefix}/`),
          `${edition.locale} sitemap leaked ${other.locale} routes`,
        );
      }
    }
  }
});

test("groups project credits, development work, and tools with localized metadata", async () => {
  const sectionLabels = {
    en: ["Released games · GrandMA Studios", "Games in development", "Tools"],
    uk: ["Випущені ігри · GrandMA Studios", "Ігри в розробці", "Інструменти"],
    ru: ["Выпущенные игры · GrandMA Studios", "Игры в разработке", "Инструменты"],
    ja: ["リリース済みゲーム · GrandMA Studios", "開発中のゲーム", "ツール"],
  };

  for (const edition of editions) {
    const html = await text(`${edition.prefix}/projects/`);
    const [released, development, tools] = sectionLabels[edition.locale];
    assert.ok(html.includes(released));
    assert.ok(html.includes(development));
    assert.ok(html.includes(tools));
    assert.ok(html.indexOf('id="projects-released"') < html.indexOf('id="projects-development"'));
    assert.ok(html.indexOf('id="projects-development"') < html.indexOf('id="projects-tool"'));
    assert.ok(html.indexOf("Mystery Case Files 28") < html.indexOf("InterDead"));
    assert.ok(html.includes("https://i.ytimg.com/vi/vCQ_1Rlirm8/hqdefault.jpg"));
    assert.ok(html.includes("Game Design"));
    assert.ok(html.includes("Narrative"));
    assert.ok(html.includes(
      edition.locale === "uk"
        ? "https://web.zhovten.games/uk/pages/about"
        : "https://web.zhovten.games/en/pages/about",
    ));

    const credit = await text(`${edition.prefix}/projects/mcf-28-house-that-love-built/`);
    assert.ok(credit.includes('property="og:image" content="https://i.ytimg.com/vi/vCQ_1Rlirm8/hqdefault.jpg"'));
    assert.ok(credit.includes("Mystery Case Files 28: House That Love Built"));

    const comic = await text(`${edition.prefix}/projects/untitled-science-fiction-comic/`);
    assert.ok(comic.includes("Unity"));
    assert.ok(comic.includes("Game Designer"));
    assert.ok(!comic.includes("youtube.com/watch"));
    assert.ok(!comic.includes('property="og:image"'));
  }
});

test("publishes the complete localized InterDead project map", async () => {
  const externalReferences = [
    "https://interdead.phantom-draft.com/",
    "https://interdead.phantom-draft.com/about/",
    "https://noir.phantom-draft.com/",
    "https://interdead.fandom.com/wiki/InterDead_Wiki",
    "https://github.com/Zhovten-Games/InterDeadIT",
    "https://github.com/Zhovten-Games/InterDeadProto",
    "https://github.com/Zhovten-Games/InterDeadCore",
    "https://github.com/Zhovten-Games/InterDeadReferenceLibrary/tree/main/research",
    "https://github.com/Zhovten-Games/literate-programming",
    "https://t.me/inter_dead",
    "https://www.youtube.com/@inter_dead",
    "https://www.instagram.com/zhovtengames/",
    "https://interdead.phantom-draft.com/pages/terms-of-use/",
    "https://interdead.phantom-draft.com/pages/privacy-policy/",
    "https://interdead.phantom-draft.com/pages/ai-policy/",
  ];

  for (const edition of editions) {
    const html = await text(`${edition.prefix}/projects/interdead/`);
    for (let section = 0; section <= 8; section += 1) {
      assert.ok(html.includes(`${String(section).padStart(2, "0")}.`));
    }
    for (const reference of externalReferences) {
      assert.ok(html.includes(reference), `${edition.locale} missing ${reference}`);
    }
    assert.ok(html.includes(`${edition.prefix}/blog/why-canon-contract-interdead/`));
    assert.ok(html.includes(`${edition.prefix}/blog/niro-communication-architecture/`));
    assert.ok(html.includes(`${edition.prefix}/blog/video-artifact-pipeline-interdead/`));
  }
});

test("identifies the public source and versioned build", async () => {
  for (const edition of editions) {
    const html = await text(edition.prefix ? `${edition.prefix}/` : "/");
    assert.ok(html.includes(
      "https://github.com/Zhovten-Games/zhovten-games.github.io/tree/main/site",
    ));
    assert.match(html, /v0\.2\.0(?: · [0-9a-f]{8})?/);
  }

  const governance = await text("/governance/");
  assert.ok(governance.includes("v0.2.0"));
});

test("keeps the original research snapshot distinct from the later DOI wrapper", async () => {
  for (const edition of editions) {
    const research = await text(
      `${edition.prefix}/blog/canon-horror-series-language-as-infection/`,
    );
    const wrapper = await text(`${edition.prefix}/blog/canon-horror-series-doi/`);
    assert.ok(research.includes("https://doi.org/10.5281/zenodo.19773963"));
    assert.ok(!research.includes('href="https://doi.org/10.5281/zenodo.20037828"'));
    assert.ok(wrapper.includes("https://doi.org/10.5281/zenodo.20037828"));
  }
});

test("does not publish the expired January postponement notice", async () => {
  const response = await request("/blog/january-updates-postponed/");
  assert.equal(response.status, 404);
  const archive = await text("/blog/");
  assert.ok(!archive.includes("major January updates are postponed"));
});

test("renders structured data and translated archive controls", async () => {
  const post = await text("/ja/blog/why-canon-contract-interdead/");
  assert.ok(post.includes('"@type":"Article"'));
  assert.ok(post.includes('"@type":"BreadcrumbList"'));
  const archive = await text("/uk/blog/");
  assert.ok(archive.includes("Сортування"));
  assert.ok(archive.includes("Категорія"));
});

test("pins governance and applies the scoped licensing map", async () => {
  const root = new URL("..", import.meta.url);
  const modules = await readFile(new URL(".gitmodules", root), "utf8");
  const lock = await readFile(new URL("governance/SUBMODULES.lock", root), "utf8");
  const license = await readFile(new URL("LICENSE.md", root), "utf8");
  const profile = await readFile(new URL("governance/PROFILE.md", root), "utf8");
  const socialPreview = await readFile(new URL("public/og.png", root));

  assert.ok(modules.includes("FOP-Oksana-Dubinetska/code-constitution.git"));
  assert.ok(modules.includes("FOP-Oksana-Dubinetska/repository-licensing-policy.git"));
  assert.ok(lock.includes("220dc9c286ae06f8b6ed60cdda75112eed0408ed"));
  assert.ok(lock.includes("6e4c2627717c079827ed4aa9044a5346b3ea3ddb"));
  assert.ok(license.includes("CC-BY-SA-4.0"));
  assert.ok(license.includes("MIT"));
  assert.ok(license.includes("all rights reserved"));
  assert.equal(socialPreview.readUInt32BE(16), 1200);
  assert.equal(socialPreview.readUInt32BE(20), 630);
  for (let field = 1; field <= 18; field += 1) {
    assert.ok(profile.includes(`## P${String(field).padStart(2, "0")}.`));
  }

  const staged = execFileSync("git", ["ls-files", "-s", ".constitution", ".licensing-policy"], {
    cwd: root,
    encoding: "utf8",
  });
  assert.ok(staged.includes("160000 220dc9c286ae06f8b6ed60cdda75112eed0408ed"));
  assert.ok(staged.includes("160000 6e4c2627717c079827ed4aa9044a5346b3ea3ddb"));
});
