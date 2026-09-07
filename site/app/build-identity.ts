import packageManifest from "../package.json";

declare const __ZHOVTEN_BUILD_REVISION__: string;

export const PUBLIC_SOURCE_URL =
  "https://github.com/Zhovten-Games/zhovten-games.github.io/tree/main/site";

export type BuildIdentity = {
  version: string;
  revision: string | null;
  label: string;
};

function resolveRevision(): string | null {
  return __ZHOVTEN_BUILD_REVISION__ || null;
}

export function getBuildIdentity(): BuildIdentity {
  const version = packageManifest.version;
  const revision = resolveRevision();

  return {
    version,
    revision,
    label: revision ? `v${version} · ${revision}` : `v${version}`,
  };
}
