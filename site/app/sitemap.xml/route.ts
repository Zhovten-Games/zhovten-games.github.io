import { SITE_ORIGIN } from "../site-page";
import { getPublishedLocales } from "../site-content";

export async function GET() {
  const now = "2026-08-21";
  const entries = getPublishedLocales()
    .map(
      (locale) =>
        "  <sitemap><loc>" + SITE_ORIGIN + "/sitemaps/" + locale +
        ".xml</loc><lastmod>" + now + "</lastmod></sitemap>",
    )
    .join("\n");
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries +
    "\n</sitemapindex>\n";
  return new Response(body, {
    headers: { "content-type": "application/xml; charset=utf-8" },
  });
}
