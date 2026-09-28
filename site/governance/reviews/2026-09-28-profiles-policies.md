# Profiles, public policies, and branded preview — review

Date: 2026-09-28. Release line: v0.4.0.

## Authority and source reconciliation

The user expressly requested profile alignment, Founder / Co-Founder last in
headings, Oksana first in the author directory, a logo-based social preview,
four public policies, governance/security verification, source push, and public
deployment. This is publication authority for this change, not ratification of
the candidate constitutional acts.

The opened canonical Sites source was
`e77d32d0bfceb8e8195bcd1801902ef9a77a71db`. The studio repository had advanced to
`6ef41dc937c7cffb17bc4bf63d0e3e9020290b31`. Its only differing `site/` objects
were the four locale data files. Those changes were read, compared with the
current Master CVs and website Sync Records, and integrated before editing.
This preserves the newer biographies and the October 2025 studio start date.

Private source documents remain in Drive. Their maintenance notes, account
metadata, and private document bodies are not published as release evidence.
The public Sync Record projection supplies the selected career material.
The latest user instruction overrides the older Co-Founder-first Sam headline.
Oksana's formal IRONCREED entry begins August 2026 as explicitly prescribed by
her website Sync Record; her Master separately records the earlier freelance
track from December 2025. Her complete skill groups and language proficiency
were restored from the Master instead of retaining the older abbreviated lists.

## Public policies and runtime review

The editorial models are the studio's IRONCREED pages, read on 2026-09-28:

- <https://web.zhovten.games/uk/pages/ai-policy>
- <https://web.zhovten.games/uk/pages/licensing>
- <https://web.zhovten.games/uk/pages/privacy-policy>
- <https://web.zhovten.games/uk/pages/terms-of-use>

The adapted English source and complete UK/RU/JA editions are in
`app/data/policies.ts`. The hub and four child routes retain the existing
visual structure and have reciprocal navigation and footer links. Each locale
sitemap contains 37 URLs, including all four policy routes. Original journal
publication dates, slugs, credits, and post bodies are unchanged.

The runtime review found no application account, visitor database, analytics,
contact form, AI input, application cookies, localStorage, or sessionStorage.
Archive controls use temporary React state and same-origin page requests.
YouTube image thumbnails do make third-party requests on portfolio pages;
the privacy policy expressly describes this. Infrastructure logs and provider
mechanisms are distinguished from the application. IRONCREED's companion,
audio, local-storage preferences, corpus index, VOX publication boundary,
submodule revisions, and WARDEN are not claimed for this website.

The social card uses the supplied studio logo as its reference and was composed
with AI assistance. It replaces `public/og.png`, is 1733 × 907 pixels, and uses
a versioned metadata URL to distinguish it from cached previews. It remains a
reserved brand asset under the existing licensing map.

## Constitutional and legislative review

Reviewed against the pinned Constitution's source/intent and execution
boundaries, recognition of other jurisdictions, evidence limits, amendment
classification, and ratification distinction; project Profile P02–P07,
P12, P15–P17; and Development Regulation ZG-S01–S04, ZG-C01–C06,
ZG-T01–T03, ZG-R01–R05, ZG-G01–G03.

The Development Regulation is updated as `0.4.0-candidate` to record the author
source contract, public-policy scope, current inventory/version assertions,
and policy/preview verification. Its registry and Profile reference agree.
No constitutional source, foundational authority, ownership, default license,
or submodule pin is changed. The project acts remain candidates.

Pins checked:

- Constitution: `220dc9c286ae06f8b6ed60cdda75112eed0408ed`.
- Repository Licensing Policy: `6e4c2627717c079827ed4aa9044a5346b3ea3ddb`.

The root `LICENSE.md`, public licensing policy, pinned reference texts,
reserved brand status, third-party precedence, and absence of overrides agree.

## Verification evidence

The pinned Constitution was checked in an isolated checkout at the exact SHA:
formatting, ESLint, Markdown lint, TypeScript, and 12 suites / 37 tests passed.
The `tsx` CLI's IPC listener is unavailable in this execution environment;
the final unchanged validation entrypoint was run with
`node --import tsx src/constitution-cli/main.ts validate` instead. It validated
334 provisions, 5 technical regulators, and source SHA-256
`864bf72a9072d394d77d09de40089f8f0f3ecc0ff8f77c41ef173f0852adf2ee`.
No upstream source was changed to make the check pass.

WARDEN: N/A. The current studio procedure explicitly has no adopted standalone
WARDEN for Zhovten Games. Evidence comes from the actual site, licensing,
dependency, and Constitution checks; a WARDEN run is not simulated.

Site verification passed: production build, 17 rendered-HTML tests, lint, and
TypeScript checks for browser and Worker targets. Coverage includes all four
locales, canonical/hreflang, Ukrainian x-default, 37 URLs per sitemap, all 16
policy pages, effective dates, localized links, profile facts and headline
order, author-directory order, metadata, HTML boundaries, and submodule pins.
The publishing workflow repeats the build and rendered checks against the
frozen release commit.

The external release record binds the final canonical commit, exact public
projection, saved version, and deployment without a self-referential commit.

### Dependency security review

The initial full npm audit reported 24 affected package entries: 1 critical,
16 high, 6 moderate, and 1 low. Same-major updates were applied to Next.js
16.3.6, React / React DOM / React Server DOM 19.2.8, Vite 8.3.1, Cloudflare
Vite plugin 1.61.0, and Wrangler 4.142.0; matching ESLint configuration and
compatible transitive fixes were included. Vinext stays at 0.0.50 with its
image-size dependency explicitly overridden to the patched 2.0.4. Cloudflare
type declarations and separate browser/Worker typecheck targets make the
previously implicit environment contract checkable.

The resulting production audit reports zero vulnerabilities. The full audit
has no critical, high, or low entries; four moderate package entries describe
one development-only chain: drizzle-kit → @esbuild-kit/esm-loader →
@esbuild-kit/core-utils → esbuild. Advisory GHSA-67mh-4wv8-2f99 concerns the
esbuild development server. This site has no D1 binding, does not invoke that
legacy server, and the chain is not part of the deployed Worker. It remains
in the development lockfile: this is an explicit residual finding, not a
claim of a zero-finding full audit. npm proposes a breaking downgrade of
drizzle-kit as its automated fix; no forced downgrade or dependency pruning
was performed. Reassess before enabling database tooling or that server.

Audited advisories include GHSA-2xp9-vwfh-vxw4, GHSA-wx67-qw84-cm4g, and
GHSA-5p2g-fcmc-qvqq. Security updates were rebuilt and all 17 site tests passed.

## Work accounting

Five bounded work packages: source reconciliation; profile/locale alignment;
four localized policies and discovery; branded preview; verification and
release. No financial charge or external purchase is implied by this record.
