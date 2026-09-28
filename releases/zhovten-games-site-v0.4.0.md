# Zhovten Games site v0.4.0

Date: 2026-09-28

This release projects the verified Zhovten Games Sites source into the
`site/` subtree. The canonical Sites source commit is
`f0fc282a3b96467306cb368c7cb9203ad38d5667`.
The GitHub source projection commit is
`c6241356859385ad522b3b17ce8b93b6ea6bdfcc`.

## Published scope

- Master-CV-aligned Sam Starling and Oksana Dubinetska profiles in EN, UK, RU,
  and JA.
- Founder / Co-Founder at the end of public role headings; Oksana first in the
  author directory.
- Four public policy routes in every locale: AI Usage, Licensing, Privacy, and
  Terms of Use, with a governance hub, effective dates, reciprocal links, and
  locale-scoped sitemap entries.
- Branded social preview composed from the supplied Zhovten Games logo.
- Current package line `v0.4.0` and updated dependency lockfile.

## Verification

- Production build: passed.
- Rendered HTML contract: 17/17 tests passed.
- Lint: passed.
- Browser and Worker TypeScript checks: passed.
- Constitution: pinned `220dc9c286ae06f8b6ed60cdda75112eed0408ed`; 12 suites,
  37 tests passed.
- Constitution data validation: 334 provisions and 5 technical regulators
  validated; source SHA-256
  `864bf72a9072d394d77d09de40089f8f0f3ecc0ff8f77c41ef173f0852adf2ee`.
- Licensing policy: pinned
  `6e4c2627717c079827ed4aa9044a5346b3ea3ddb`; licensing contract passed.
- Production dependency audit: zero vulnerabilities after compatible updates.
- Full dependency audit: four moderate development-only findings remain in the
  `drizzle-kit` → `@esbuild-kit` → `esbuild` chain; no critical, high, or low
  findings remain. The chain is not part of the deployed static/Worker path.
- WARDEN: N/A. Zhovten Games has no adopted standalone WARDEN command; the
  project procedure records the applicable protection layer as the complete
  test, lint, governance, licensing, and production verification suite.

## Sites publication

- Saved version: `appgprj_6a8737574df881918093fd9ba49b0e1f~appgver_784e89379c008191ba06ef017359d0f0`
- Deployment: `appgdep_6abaace6516881918db2025c8cacbb1e`
- Public URL: <https://zhovten.games>

The project remains public. The canonical Sites source remains authoritative;
this GitHub subtree is its reviewed public projection.
