# Zhovten Games site v0.3.1

Published: 2026-09-13.

- Canonical source: `e77d32d0bfceb8e8195bcd1801902ef9a77a71db`.
- Public source projection: `4768da2e13b1126c968124b1ebe3008fd90988fd`.
- Saved Sites version: 8, `appgprj_6a8737574df881918093fd9ba49b0e1f~appgver_4ac74655638081919247d51c5f60a2ca`.
- Deployment: `appgdep_6aa5fc8030ac81919d7e113926b4833b`, succeeded.
- Primary domain: https://zhovten.games/
- Deployment URL: https://zhovten-games.ironcreed.chatgpt.site
- Deployment archive: `sha256:acfa6fe7f6d962e55326decc13cfdf94df048d714816fd2a8255f286c6038acb`.

## Changes

All four locales (EN/UK/RU/JA) now share the February 2026 / Summer 2026 umbrella
naming pattern. Existing publication URLs are preserved. Sam Starling's page
uses the supplied professional biography and Senior Full-Stack Web Engineer ·
Systems Designer role, with a localized GitHub documentation note and without
his Skills, Languages and Tools lists. The contact page includes the studio's
LinkedIn URL. A short retrospective entry records Oksana Dubinetska's first
literary contest, finalist status and 19th place, with links to the organizer.

## Date review

| Publication | Previous date | Verified source date |
| --- | --- | --- |
| Summer 2026 — Umbrella Update | 2026-09-10 | 2026-09-12 |
| Inrium: emotional investigation tempo | 2026-05-01 | 2026-02-10 |
| Canon Horror Series DOI wrapper | 2026-05-01 | 2026-05-05 |

Eleven other existing publication dates already matched the current LinkedIn
registry. The two external wrappers were checked against their own metadata
because they have no corresponding LinkedIn registry entry. The contest log
uses 2024-06-01, the historical date the final concluded, and records the
2026-09-13 addition separately as its modification date. Per-item provenance is
in `site/governance/content-publication-register.json`.

## Verification

- Production build: passed from the committed canonical source.
- Lint: passed.
- Rendered-output suite: 15/15 passed; covers every registered post in each
  locale, source-date visibility and structured data, canonical/hreflang,
  sitemaps, profiles, contest entry, existing UI and HTML boundaries.
- Primary-domain verification: 23/23 HTTP/content checks passed across four
  author pages, four contest pages, four contact pages, four February updates,
  four locale sitemaps and the three corrected publication dates. All checked
  HTML pages identify `v0.3.1 · e77d32d0`.
- Archive: 15 posts, 33 URLs per locale sitemap.
- Public projection: 71/71 source objects match SHA, type and mode; existing
  `publications/` tree preserved exactly.
- Constitution: `220dc9c286ae06f8b6ed60cdda75112eed0408ed`.
- Licensing policy: `6e4c2627717c079827ed4aa9044a5346b3ea3ddb`.
- Governance/licensing: reviewed-no-change; unchanged upstream test suites
  were not rerun. Existing governance candidates still await human ratification.
- WARDEN: N/A under the existing Zhovten Games procedure.

No dependency versions, infrastructure or access mode changed.
