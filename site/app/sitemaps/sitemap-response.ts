import { getContent } from "../site-content";
import { localePath, SITE_ORIGIN } from "../site-page";
import type { Locale } from "../site-types";
import { policySlugs, POLICY_DATE } from "../data/policies";

function xml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function localeSitemap(locale: Locale) {
  const content = getContent(locale);
  const paths = [
    "/",
    "/blog/",
    ...content.posts.map((post) => "/blog/" + post.slug + "/"),
    "/projects/",
    ...content.projects.map((project) => "/projects/" + project.slug + "/"),
    "/authors/",
    ...content.authors.map((author) => "/authors/" + author.slug + "/"),
    "/about/",
    "/contact/",
    "/governance/",
    ...policySlugs.map((slug) => "/governance/" + slug + "/"),
  ];
  const lastmodByPath: Record<string, string> = {
    ...Object.fromEntries(
      content.posts.map((post) => ["/blog/" + post.slug + "/", post.modifiedDate ?? post.date]),
    ),
    "/": "2026-09-13",
    "/blog/": "2026-09-13",
    "/authors/": "2026-09-28",
    "/authors/sam-starling/": "2026-09-28",
    "/authors/oksana-dubinetska/": "2026-10-05",
    "/about/": "2026-09-28",
    "/governance/": POLICY_DATE,
    ...Object.fromEntries(policySlugs.map((slug) => ["/governance/" + slug + "/", POLICY_DATE])),
    "/contact/": "2026-09-13",
    "/projects/interdead/": "2026-09-13",
    "/projects/": "2026-10-05",
    "/projects/quokka-consulting/": "2026-10-05",
  };
  const rows = paths
    .map((path) => {
      const loc = new URL(localePath(locale, path), SITE_ORIGIN).toString();
      const lastmod = lastmodByPath[path] ?? "2026-08-21";
      return (
        "  <url><loc>" + xml(loc) + "</loc><lastmod>" + lastmod +
        "</lastmod></url>"
      );
    })
    .join("\n");
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    rows +
    "\n</urlset>\n";
  return new Response(body, {
    headers: { "content-type": "application/xml; charset=utf-8" },
  });
}
