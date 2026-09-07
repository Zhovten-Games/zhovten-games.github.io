import { localeSitemap } from "../sitemap-response";

export async function GET() {
  return localeSitemap("ja");
}
