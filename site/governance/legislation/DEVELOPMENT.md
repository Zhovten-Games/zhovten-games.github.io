# Zhovten Games Website Development and Publication Regulation

Status: candidate derivative act pending human ratification.

Act identifier: `zg-site-act-development-001`.

Revision: `0.2.0-candidate`.

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
5. run the complete verification suite;
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

## 4. Change and Release Procedure

### ZG-R01. Unit of Change

A change has one reviewable purpose and states the affected routes, locales,
governance rules, and verification. Content restoration, localization, sitemap
architecture, governance, licensing, and deployment may form one first-release
candidate when they share the same transition record.

### ZG-R02. Required Verification

Before checkpoint publication, run `npm test`. The checks must establish:

- a successful production build;
- all four locale routes render;
- every locale has the same 13 post slugs, 9 project slugs, and 2 author slugs;
- source dates and author identifiers are invariant across locales;
- the research announcement points to DOI `10.5281/zenodo.19773963`, while the
  separate v0.2 wrapper points to `10.5281/zenodo.20037828`;
- the postponement notice has no public route;
- canonical, alternate, HTML-language, and sitemap behavior is locale-correct;
- every rendered script remains inside `body`, and no content follows the final
  `</html>` boundary;
- reciprocal IT-track links, public team profiles, the personal Telegram link,
  and the InterDead resource map resolve to the declared targets;
- the footer and governance route identify `v0.2.0` and the authorized public
  source projection;
- the Constitution and licensing-policy gitlinks match their recorded SHAs;
- `LICENSE.md` declares the scoped licensing map.

`npm run lint` is an additional release gate. The repository has no adopted
standalone WARDEN command. Its result is recorded as `N/A` according to the
studio procedure, while `npm test`, lint, governance checks, and post-deploy
observations provide the applicable evidence.

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
