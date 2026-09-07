# Zhovten Games

Public studio site and multilingual publication archive for Zhovten Games.

Current release line: `v0.2.0`.

Public source projection: [Zhovten-Games/zhovten-games.github.io/site](https://github.com/Zhovten-Games/zhovten-games.github.io/tree/main/site).

The first publication restores the verified LinkedIn history, preserves source
dates and authorship, classifies durable materials as announcements, notes,
research notes, development logs, cases, or external articles, and publishes
complete English, Ukrainian, Russian, and Japanese editions.

## Site structure

- English: `/`
- Ukrainian: `/uk/`
- Russian: `/ru/`
- Japanese: `/ja/`
- sitemap index: `/sitemap.xml`
- locale maps: `/sitemaps/{en|uk|ru|ja}.xml`
- governance summary: `/{locale}/governance/`

English is the canonical editorial source for this revision. Ukrainian is the
`x-default` public edition. Every published item has the same slug, source date,
authorship, and external-reference identity across all four locales.

## Content inventory

The archive contains 13 publications, 9 project records, and 2 author records.
The two recovered external wrappers preserve the Canon Horror DOI corpus and
Oksana Dubinetska's Inrium article. The temporary January postponement notice is
kept in the source history and deliberately excluded from the public archive.
The recovered “Unannounced External Studio Project” remains unpublished because
its source is an explicit draft with unresolved attribution and no public URL.
The decision and all publication dates are recorded in
`governance/content-publication-register.json`.

## Governance

The Code Constitution is connected at `.constitution/` and pinned to
`220dc9c286ae06f8b6ed60cdda75112eed0408ed`.

The shared repository licensing policy is connected at `.licensing-policy/`
and pinned to `6e4c2627717c079827ed4aa9044a5346b3ea3ddb` (`v1.0.0`).

Project-specific candidate acts:

- `governance/PROFILE.md` — completed P01–P18 Founding Profile;
- `governance/legislation/DEVELOPMENT.md` — optimized website development and
  publication regulation;
- `governance/acts.json` — candidate act registry;
- `LICENSE.md` — scoped licensing declaration.

These acts remain candidates until the named human founders ratify a frozen
revision. Automated creation, successful tests, and publication do not replace
human ratification.

## Development

Requirements: Node.js 22.13 or later and npm.

```bash
git submodule update --init --recursive
npm ci
npm test
```

`npm test` builds the Vinext site and verifies rendered routes, locale parity,
SEO and sitemap isolation, valid HTML document boundaries, public-source build
identity, content decisions, licensing, and submodule pins. `npm run lint`
provides the separate lint gate. The Zhovten Games site has no adopted WARDEN
command; its procedural status is recorded as `N/A`, and the complete local
suite is the applicable verification contract.

## Licensing

The repository uses a scoped licensing map:

- original editorial materials and non-brand documentation: CC BY-SA 4.0;
- original code, tests, schemas, configuration, and reusable templates: MIT;
- names, logos, trademarks, and visual identity: all rights reserved;
- third-party materials: their upstream terms.

See `LICENSE.md` and the pinned `.licensing-policy/` submodule.
