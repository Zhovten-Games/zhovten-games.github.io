# Zhovten Games Site v0.2.0 — Release Evidence

Status: published.

Release date: 2026-09-07.

## Identity

- Public site: https://zhovten.games
- Sites provider URL: https://zhovten-games.ironcreed.chatgpt.site
- Release: `v0.2.0`
- Canonical Sites source commit: `eafedfec6a7243c645e1585b24ec3ac0723233b8`
- Public source projection commit: `05327cdbe7b6d9e1f9c1277ec4feb239a28549b3`
- Public source: https://github.com/Zhovten-Games/zhovten-games.github.io/tree/main/site
- Sites version: `6`
- Sites version ID: `appgprj_6a8737574df881918093fd9ba49b0e1f~appgver_15088e20b6208191b8f5d54864016ccb`
- Deployment ID: `appgdep_6a9f05c7f0e08191afaea2689cb14027`

The Sites repository is the canonical editable source. The `site/` subtree is an exact public projection of its tracked source state, including executable modes and pinned submodule gitlinks. Build output, installed dependencies, local state, and credentials are excluded.

## Published scope

The release contains the reciprocal IRONCREED reference on the projects page, public team-profile links, Oksana Dubinetska’s public Telegram channel, the expanded InterDead resource map, build/source identity in the footer and governance view, and normalized HTML document boundaries. Existing public materials under `publications/` remain unchanged.

## Verification

- `npm test`: passed; production build and 13/13 rendered-output and policy checks.
- `npm run lint`: passed.
- Representative production routes verified: root, projects, InterDead, both author profiles, Ukrainian projects, Russian journal, and Japanese author profile.
- Every inspected HTML document terminates at `</html>`; no scripts occur after `</body>`.
- Locale-specific reciprocal links, author links, InterDead-map links, source identity, sitemaps, canonical URLs, and language alternates passed the release suite.
- Public footer identity: `v0.2.0 · eafedfec`.

## Governance and policy

- Code Constitution: `220dc9c286ae06f8b6ed60cdda75112eed0408ed`.
- Repository licensing policy: `6e4c2627717c079827ed4aa9044a5346b3ea3ddb` (`v1.0.0`).
- Constitution verification: formatting, Markdown/ESLint, type checking, and 12/12 suites with 37/37 tests passed in an isolated checkout.
- Constitution data validation: 334 provisions; source SHA-256 `864bf72a9072d394d77d09de40089f8f0f3ecc0ff8f77c41ef173f0852adf2ee`; five technical regulators.
- The standard `tsx` launcher could not create its sandbox IPC socket. The same validator entry point passed through `node --import tsx`; the limitation concerns the launcher transport rather than validation.
- WARDEN: `N/A`. The project has no adopted standalone WARDEN command; `npm test` and `npm run lint` are the applicable verification contract.
- `governance/PROFILE.md` and `governance/legislation/DEVELOPMENT.md` remain candidate acts pending human ratification.
