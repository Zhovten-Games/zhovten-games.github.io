# Author profile scope and public links — review

Date: 2026-09-28. Release line: v0.4.1.

## Authorized scope

The user requested concise author pages, matching Google Docs Sync Records,
the single-word IRONCREED name, specified social-link ordering, removal of the
InterDead publication section, verification, source publication, and deployment.
The opened Sites source was `f0fc282a3b96467306cb368c7cb9203ad38d5667`.

Sam's standalone project-experience and public-reference blocks are removed.
Oksana's Skills and Professional development blocks are removed. Her project
experience remains within Experience, followed by Education. Both profiles use
the same localized Languages component and finish with Public team profiles.
Their career chronology, retained descriptions, headline order, and profile
destinations are preserved. The two website Sync Records define this selection;
the Master CVs retain detailed source material. The Master project heading uses
the common Project experience label. The requested brand spelling is synchronized
in the website source, the Sync Records, and the two referenced Master CVs.

The footer starts with itch.io, followed by Facebook, LinkedIn, GitHub, and
Discord. The InterDead map places itch.io first among external platforms and
the supplied InterDead Facebook link before LinkedIn. The map's publication
section is removed and the remaining sections are numbered continuously.

## Governance and licensing review

Reviewed under Profile P02–P07, P12, P15–P17 and Development Regulation
ZG-S01–S04, ZG-C04, ZG-C06, ZG-R01–R05, and ZG-G01–G03. The change applies the
existing author-source rule and current explicit editorial authority. It creates
no new governance authority or ratification. The scoped license map and pins
remain unchanged:

- Constitution: `220dc9c286ae06f8b6ed60cdda75112eed0408ed`.
- Licensing Policy: `6e4c2627717c079827ed4aa9044a5346b3ea3ddb`.

The unchanged Constitution validation passed: 334 provisions, 5 technical
regulators, source SHA-256
`864bf72a9072d394d77d09de40089f8f0f3ecc0ff8f77c41ef173f0852adf2ee`.
The same-pin 12-suite / 37-test result is retained from the preceding review.
WARDEN remains N/A under ZG-R02; the site has no adopted standalone command.

## Verification and release gates

Google Docs readback confirmed the section contracts, shared language data,
common project label, and IRONCREED spelling. Browser and Worker typechecks and
lint passed. Production dependency audit reports zero vulnerabilities. The full
audit retains the same four moderate development-only entries in the
drizzle-kit / esbuild chain; no package dependency or runtime setting changed.
Only release-version fields changed in the package manifests.

The publishing workflow must pass the production build and the complete
rendered-HTML suite, including profile section order, identical language blocks,
social order, map exclusions, locale coverage, metadata, sitemap, licensing,
submodule pins, and HTML boundaries. The external release record binds the
actual results to the final source commit, GitHub projection, saved version,
deployment, and public URL.

Outside the named profile/link changes, content edits are limited to the
requested IRONCREED spelling. Post dates, slugs, author attribution, project
facts, policy meaning, styling, assets, dependency versions, and runtime behavior
retain their prior values.
