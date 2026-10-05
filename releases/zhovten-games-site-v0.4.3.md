# Zhovten Games site v0.4.3

Publication date: 2026-10-05.

## Published scope

- Added the unchanged IRONCREED logo and localized website-development credit in the shared footer.
- Standardized that block in the existing studio branding document.
- Added QUOKKA / ADDUCATES as completed external contract work in a new completed-contract section and in Oksana's project cards, in EN/UK/RU/JA.
- Retained the NDA boundary, broad game/product role, spring 2026 period and external ownership.
- Preserved all nine previous project records, Sam's project selection and the other profile text. Gambling/iGaming writing remains outside this portfolio.
- Added an independent, bounded Zhovten Games selection in the separately authorized mother registry. It preserves the unnamed comic as a site-only supplement rather than inventing a mother identity.

## Provenance

| Item | Value |
| --- | --- |
| Canonical Sites source | `2c502c92d5ddd32f03fb9d60af95de92aba84a44` |
| Prior canonical source | `d0fa9175182e182b7bd4cca66b29650fe17f90b3` |
| GitHub source projection | `dd9e0c417771eb8a3e239963f26d077ece71da2a` |
| Mother projection revision | `1.0.0` |
| Mother projection commit | `5f50e1482252bfcde8c9a6fb7c2edf12d022238c` |
| Site project | `appgprj_6a8737574df881918093fd9ba49b0e1f` |
| Saved version | `appgprj_6a8737574df881918093fd9ba49b0e1f~appgver_787ae791969c8191ac630d67b6eb1a66` |
| Sites version number | 12 |
| Deployment | `appgdep_6ac30a20beb88191a14ff5d97f3075b5` |
| Deployment status | `succeeded` |
| Native deployed URL | https://zhovten-games.ironcreed.chatgpt.site |
| Canonical domain | https://zhovten.games |
| Build identity | `v0.4.3 · 2c502c92` |
| Archive SHA-256 | `sha256:caef7912728d481251e309239caff30c12154dcadd6447b565b6db82da6eaaec` |
| IRONCREED logo Git blob | `467e2b997dee8a2be6c18aa601c3a916482556b7` |

The logo matches the engineering practice's existing tracked favicon byte for byte.
Its name, logo and visual identity remain reserved under the existing licensing map.

## Verification

- `npm run typecheck`: passed. The final follow-up changed only an explanatory lint comment and a test assertion, with no typed implementation change.
- `npm run lint`: passed with zero errors and zero warnings on the final source.
- Production build through the Sites build helper: passed.
- `node --test tests/rendered-html.test.mjs`: 17/17 passed. Together with the production build these are the two commands of the existing `npm test` gate.
- An initial new assertion incorrectly expected a profile hyperlink in the existing project template. It was corrected to verify the actual author attribution; the final full suite passed.
- Four locale catalogues and QUOKKA routes, footer logo/captions/destinations, exact author-card reuse, exclusions, sitemap entries, metadata and HTML boundaries verified.
- Inventory: 15 posts, 10 projects, 2 authors and 4 policies; each locale sitemap has 38 URLs.
- Mother config resolves nine selected canonical IDs and one preserved site-only supplement. Exact catalogue/section order and both author selections match the site.
- All previous English project objects, posts and non-selection author content compare unchanged against the previous source; locale diffs contain only the new QUOKKA entries.
- All 79 source objects in `site/` match the canonical tree by Git SHA, type and mode, including both gitlinks. No existing objects outside `site/` are changed by the source projection.
- Google Docs branding text, native heading structure, four captions and target links were read back after the targeted insertion; existing tabs remain intact.
- Native Sites deployment returned `succeeded`. No additional production request is represented as a deployment check.
- Managed browser preview was unavailable; visual browser QA is not claimed.

## Governance and retained evidence

The focused review is in
`site/governance/reviews/2026-10-05-engineering-credit-and-quokka.md`.
The Development Regulation inventory is ten projects; its verification rules
and candidate authority remain unchanged.

- Constitution gitlink: `220dc9c286ae06f8b6ed60cdda75112eed0408ed`.
- Licensing-policy gitlink: `6e4c2627717c079827ed4aa9044a5346b3ea3ddb`.
- WARDEN: `N/A`; no standalone command is adopted for Zhovten Games.
- Dependency resolutions, runtime configuration and public legal policies are unchanged. Applicable 2026-09-28 evidence remains zero production vulnerabilities and four moderate development-only findings in the drizzle-kit / esbuild-kit / esbuild chain. No fresh audit or upstream test run is claimed.

This record is outside the exact `site/` source projection.
