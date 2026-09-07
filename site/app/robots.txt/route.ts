import { SITE_ORIGIN } from "../site-page";

export async function GET() {
  return new Response(
    "User-agent: *\nAllow: /\nSitemap: " + SITE_ORIGIN + "/sitemap.xml\n",
    { headers: { "content-type": "text/plain; charset=utf-8" } },
  );
}
