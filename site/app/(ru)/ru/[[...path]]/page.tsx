import type { Metadata } from "next";
import { buildMetadata, SitePage } from "../../../site-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ path?: string[] }>;
}): Promise<Metadata> {
  const { path = [] } = await params;
  return buildMetadata("ru", path);
}

export default async function RussianPage({
  params,
}: {
  params: Promise<{ path?: string[] }>;
}) {
  const { path = [] } = await params;
  return <SitePage locale="ru" segments={path} />;
}
