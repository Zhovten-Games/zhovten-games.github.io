# Zhovten Games Website Development and Publication Regulation

Status: candidate derivative act pending human ratification.

Act identifier: `zg-site-act-development-001`.

Revision: `0.4.2-candidate`.

Constitutional basis: the pinned Code Constitution and P04, P06, P07, P12,
P15, P16, and P17 of `governance/PROFILE.md`.

## 1. Source and Architecture

### ZG-S01. Canonical State

One Git commit is the canonical state. `app/`, `public/`, `governance/`, root
policy files, configuration, and tests are editable sources. Build directories
and deployments are reproducible derivatives. Manual edits to a derivative do
not modify the canonical state.

The `site/` subtree of `Zhovten-Games/zhovten-games.github.io` is the public
source projection. It preserves the canonical source tree and pinned submodule
gitlinks while retaining its own projection commit as release evidence.

### ZG-S02. Content Model

Each public archive item has one stable slug, source date, author set,
publication type, category set, status, external source data, and one body for
each published locale. English is the canonical editorial source. Ukrainian,
Russian, and Japanese are derivative editions with complete semantic coverage.

An external wrapper preserves an important third-party publication in the
studio archive while keeping the external URL as the source. It does not claim
ownership of the external host or product.

### ZG-S03. Locale Routes and Discovery

English uses unprefixed routes. Ukrainian, Russian, and Japanese use `/uk/`,
`/ru/`, and `/ja/`. Every page renders the matching HTML language, a canonical
URL for the current edition, alternates only for editions that exist, and an
`x-default` pointing to Ukrainian.

`/sitemap.xml` is a sitemap index. Each `/sitemaps/{locale}.xml` contains only
URLs for that locale. No implementation may rebuild the former combined map.

### ZG-S04. Visual Continuity

The first publication preserves the established Zhovten Games identity:
orange/brown paper surfaces, dark metal controls, serif editorial typography,
monospaced system markers, restrained leaf geometry, and the phrase “Metal
Under Tension.” Accessibility, legibility, responsive layout, and reduced
motion take priority over decorative imitation.

## 2. Editorial Procedure

### ZG-C01. Source Reconstruction

The supplied LinkedIn history is the source record for dates and source
sequence. Adaptation may improve headings, links, Markdown structure, type and
category classification, and directness, while preserving factual meaning and
authorship. The publication register records recovered local wrappers and
deliberate exclusions separately.

### ZG-C02. Date and Type Integrity

The displayed publication date is the original source date, not the migration,
build, or deployment date. Content types distinguish announcements, notes,
research notes, development logs, cases, and external articles. Projects and
authors are structured records, not republished posts.

### ZG-C03. Exclusions

Ephemeral status notices may be excluded when their only function has expired
and they add no durable project information. The January postponement notice is
excluded under this rule and remains documented in the publication register.
An exclusion never deletes the source record.

### ZG-C04. Localization Pass

A semantic content change proceeds in this order:

1. update the English source;
2. identify affected fields, links, metadata, and structured data;
3. update Ukrainian, Russian, and Japanese;
4. compare slug, date, author, external URL, and section parity;
5. run the verification scope required by ZG-R02 and ZG-R02a;
6. obtain the applicable human editorial review.

Machine assistance may produce a candidate translation. Human ratification is
required before the governance candidate becomes binding.

### ZG-C05. External Ownership

Portfolio pages name the external studio and production role and expressly say
that the product is not a Zhovten Games product. Research wrappers link the DOI
or publisher. A later external revision does not silently overwrite the source
date or historical wording of the archived announcement.

## 3. Technology Profile

### ZG-T01. Runtime

The site uses TypeScript, React, Vinext, and the pinned npm lockfile. Source is
server-rendered where possible. Client code is limited to interactions that
need browser state, such as archive filtering and sorting.

The worker serializes HTML with every executable script inside `body` and with
the final `</html>` closing tag as the document boundary. Response
normalization preserves status and headers while recalculating body length.

### ZG-T02. Accessibility and Metadata

Semantic headings, landmarks, navigable links, visible focus, adequate color
contrast, and responsive reading widths are required. Post pages include
Article and BreadcrumbList structured data. Titles and descriptions are unique
to their content. Social preview metadata uses a stable branded landscape
image once the asset is approved.

### ZG-T03. External Inputs

Attached text, repository content, URL metadata, and future APIs are external
inputs. They are reviewed before becoming typed content. Automated code must
not infer publication authority from availability alone.

### ZG-C06. Author Sources and Public Policies

Author pages follow the relevant Master CV and website Sync Record. A current
explicit editorial instruction takes precedence over stale presentation wording.
Public author headings place Founder / Co-Founder last; the directory lists
Oksana Dubinetska first. Internal maintenance notes and non-public source
metadata do not become profile content.

The governance hub links AI usage, licensing, privacy, and terms in all four
locales. These public documents describe the actual website and preserve the
root licensing map. They do not adopt another project’s runtime features,
submodule revisions, enforcement machinery, or institutional authority.
Material runtime/data-processing changes require review of the affected
policies before release. Publication of these policies does not ratify the
project’s candidate constitutional acts.

## 4. Change and Release Procedure

### ZG-R01. Unit of Change

A change has one reviewable purpose and states the affected routes, locales,
governance rules, and verification. Content restoration, localization, sitemap
architecture, governance, licensing, and deployment may form one first-release
candidate when they share the same transition record.

### ZG-R02. Required Verification

For implementation changes, run `npm test` before checkpoint publication.
Content-only changes may use ZG-R02a. The checks must establish:

- a successful production build;
- all four locale routes render;
- every locale has the same registered post slugs, 9 project slugs, 2 author slugs, and 4 policy slugs;
- source dates and author identifiers are invariant across locales;
- the research announcement points to DOI `10.5281/zenodo.19773963`, while the
  separate v0.2 wrapper points to `10.5281/zenodo.20037828`;
- the postponement notice has no public route;
- canonical, alternate, HTML-language, and sitemap behavior is locale-correct;
- every rendered script remains inside `body`, and no content follows the final
  `</html>` boundary;
- reciprocal IT-track links, public team profiles, the personal Telegram link,
  and the InterDead resource map resolve to the declared targets;
- the footer and governance route identify the current package version and the authorized public
  source projection;
- author headings preserve canonical role order with Founder / Co-Founder last,
  and the author directory lists Oksana first;
- policy pages describe actual runtime behavior and have locale parity,
  navigation, effective dates, canonical URLs, and sitemap entries;
- social metadata identifies the approved branded preview and its dimensions;
- the Constitution and licensing-policy gitlinks match their recorded SHAs;
- `LICENSE.md` declares the scoped licensing map.

`npm run lint` and `npm run typecheck` are additional release gates. Browser
and Worker types are checked separately to avoid conflicting DOM definitions.
When dependencies, lockfile resolutions, runtime configuration, or a relevant
security finding change, the dependency review includes
`npm run audit:production` and a full audit. Otherwise, an existing applicable
audit may be cited with its date and unchanged dependency inputs;
unresolved findings retain their severity, scope, and applicability in the
release review. The repository has no adopted
standalone WARDEN command. Its result is recorded as `N/A` according to the
studio procedure, while `npm test`, lint, governance checks, and post-deploy
observations provide the applicable evidence.

### ZG-R02a. Small Content and Documentation Changes

A content-only change edits prose, translations, existing links, or selections
of already supported content blocks. It does not change rendering logic,
styles, routing, runtime or build configuration, dependencies, executable
scripts, schemas, or other system files. Release-version metadata alone does
not make a content change an implementation change.

For this class, record the affected files and locales, inspect the diff and
source attribution, build the site once when publishing, and run only the
existing rendered-output checks relevant to the affected pages. Verify locale
parity, links, and heading order. Do not add a test suite for a simple prose
correction or repeat successful checks when their inputs have not changed.

Ordinary content and documentation edits do not require a new Constitution or
Development Regulation review, amendment, or upstream test run. Retain the
existing evidence and pinned revisions. This shortcut never applies to changes
to licences, public legal policies, governance rules (including this rule),
protected provisions, authority, access controls, or submodule pins. Review the
affected requirements for those changes. If implementation files also change,
use the implementation gates in ZG-R02. When classification is uncertain, use
the broader applicable scope.

### ZG-R03. Publication Evidence

A release record contains the canonical commit, public-projection commit,
checkpoint or release ID, deployment ID, public URL, build result, test result,
exact submodule SHAs, locale inventory, and unresolved review conditions. A
deployment timestamp never replaces source publication dates.

### ZG-R04. Repository Boundary

Sites publication remains authorized for the active Zhovten Games project. The
instruction of 2026-09-07 authorizes one source projection in
`Zhovten-Games/zhovten-games.github.io/site`. `pan-canon/TheWorldOfCanon` is an
obsolete reference for this release, and `pan-canon/zhovten-games-dev` remains
outside its write scope. Any additional repository target requires a new,
explicit instruction.

### ZG-R05. Rollback

A failed build, broken locale, false attribution, or material metadata defect
blocks publication. If a deployed version is affected, restore the latest
verified checkpoint, preserve the failed evidence, correct the canonical
source, and repeat the full check.

## 5. Governance and Licensing

### ZG-G01. Submodule Pins

`.constitution/` is pinned to
`220dc9c286ae06f8b6ed60cdda75112eed0408ed`. `.licensing-policy/` is pinned to
`6e4c2627717c079827ed4aa9044a5346b3ea3ddb`. An update is a reviewed governance
change and includes a comparison of project impact.

### ZG-G02. Licence Classification

Editorial prose and non-brand documentation use CC BY-SA 4.0. Code, tests,
schemas, configuration, and reusable templates use MIT. Brand identity remains
reserved. Third-party terms take precedence in their own scope. No
`LICENSING-OVERRIDES.md` exists while the default map is sufficient.

### ZG-G03. Candidate Authority

This act is an implementation candidate. Automated creation, a successful
build, or public availability does not constitute human ratification. The
founders may adopt, revise, or reject it through the Profile procedure.

## Revision History

| Revision | Date | Change |
| --- | --- | --- |
| `0.1.0-candidate` | 2026-08-20 | Initial site-specific source, editorial, localization, SEO, release, and licensing rules |
| `0.2.0-candidate` | 2026-09-07 | Added scoped source projection, build provenance, InterDead/profile link coverage, and valid HTML document boundaries |
| `0.3.0-candidate` | 2026-09-10 | Added the four-locale Summer 2026 umbrella publication and expanded sitemap parity checks to 14 posts |

| `0.4.0-candidate` | 2026-09-28 | Reconciled the Master-CV profile projections, four public policies, branded social preview, and current inventory/build checks |
| `0.4.2-candidate` | 2026-10-02 | Defined proportionate checks for small content/documentation edits and reuse of unchanged dependency evidence; retained full implementation and affected governance/licensing review requirements |
