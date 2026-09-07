# Zhovten Games Website Founding Profile

Status: project candidate pending human ratification.

Document identifier: `zg-site-profile-001`.

Revision: `0.2.0-candidate`.

Candidate date: 2026-09-07.

Constitution source: `.constitution/` pinned to
`220dc9c286ae06f8b6ed60cdda75112eed0408ed`.

This Profile customizes the Code Constitution for the public Zhovten Games
studio website. It records the intended order of the repository and creates no
independent authority until the named human founders ratify a frozen revision.

## P01. Identity and Scope

The project is the public Zhovten Games studio website and its source
repository. Scope includes the multilingual site, editorial archive, project
and author records, SEO metadata, sitemap outputs, build configuration, tests,
deployment evidence, governance documents, and the two pinned policy
submodules.

The intended public origin is `https://zhovten.games`. The Sites repository is
the canonical editable source and deployment origin. The `site/` subtree of
`Zhovten-Games/zhovten-games.github.io` is its authorized public source
projection. Project identifiers use the `zg-site-*` namespace.

## P02. External Order

Applicable law, platform terms, privacy duties, employment or client ownership,
and third-party licences retain force in their own scope. This Profile does not
claim ownership of external portfolio products or external research hosts.

Licensing follows `.licensing-policy/` at
`6e4c2627717c079827ed4aa9044a5346b3ea3ddb`. Original editorial material is
CC BY-SA 4.0; original code, tests, schemas, configuration, and reusable
templates are MIT; brand identity is reserved; third-party material retains
its upstream terms. `LICENSE.md` is the repository declaration. No project
override is currently adopted.

## P03. Sources of Intent

Recognized sources are Oksana Dubinetska and Sam Starling as studio founders;
the supplied LinkedIn publication history as the editorial source record; the
existing Zhovten Games site as a design and adaptation source; the InterDeadIT
repository as the sitemap architecture reference; and binding external order.

Compatible decisions prioritize factual accuracy, preserved authorship and
dates, complete locale parity, accessibility, reproducibility, and a stable
public archive.

## P04. Official Corpus

One attested Git commit is the canonical repository state. Editable sources
include `app/`, `public/`, `governance/`, `LICENSE.md`, `.gitmodules`, build
configuration, and tests. `dist/` and remote deployments are derivative build
outputs. The public `site/` projection in
`Zhovten-Games/zhovten-games.github.io` preserves source files, executable
modes, and pinned submodule gitlinks while excluding build outputs, installed
dependencies, local state, and credentials. Its Git commit is release evidence
and does not replace the canonical Sites commit.

English is the canonical editorial source for this first publication.
Ukrainian, Russian, and Japanese are complete derivative editions. All four
editions share slugs, authorship, source dates, publication types, and external
references. A semantic change to English updates every derivative edition in
the same change or records the exact editions as stale.

## P05. Founding Roles

Oksana Dubinetska is founder, lead game designer, narrative game designer, and
editorial authority for her authored materials and external portfolio credits.
Sam Starling is co-founder, web engineer, gameplay-systems and technical-design
lead, and technical maintainer. Studio-wide publication and governance changes
require their joint human approval unless a later ratified revision delegates a
narrower domain.

Automated systems and language models prepare candidates, run checks, and
produce evidence. They do not ratify this Profile or acquire founding authority.

## P06. Norm-Making

The founders are the intended joint norm-maker. A proposed norm identifies its
basis, affected files and locales, consequences, checks, transition, and any
objection. Until human ratification, this Profile and the Development
Regulation remain candidate acts and serve as a reviewable implementation
proposal.

Ordinary technical choices within an adopted regulation may be executed by the
technical maintainer. Changes to identity, licensing, protected publication
rules, authority, or the Constitution require express joint approval.

## P07. Execution

The technical maintainer may implement approved site changes, run verification,
form a checkpoint, publish an approved deployment, and restore the latest
verified version. Editorial content is released only after the applicable
editorial review. The instruction of 2026-09-07 expressly authorizes publishing
this source revision to the `site/` subtree of
`Zhovten-Games/zhovten-games.github.io`; it grants no broader repository-write
authority.

## P08. Dispute Resolution

A dispute record identifies the challenged statement or action, source
evidence, affected rights or project interests, urgency, and requested remedy.
Factual content disputes are reviewed against the source history and external
publication. Technical disputes are reviewed against reproducible tests and
build evidence. A dispute involving one founder requires the other founder's
review where practicable. Irreversible publication remains suspended while a
material dispute is unresolved.

## P09. Jurisdictions

The project begins as one repository jurisdiction with subordinate domains for
editorial content, localization, projects and authors, site software, SEO and
discovery, deployment, governance, licensing, and external portfolio records.
External products, DOI records, itch.io, LinkedIn, IRON CREED, and InterDead
services remain independent jurisdictions connected by links and attribution.
The public `site/` source projection is a subordinate release surface within the
independent `Zhovten-Games/zhovten-games.github.io` repository.

## P10. Initial Ratification

Initial ratification requires one express consent from each founder for one
frozen commit containing this Profile, the Development Regulation, the
licensing declaration, exact submodule pins, the content publication register,
and successful verification evidence. The candidate becomes binding only when
an attributable attestation record names the commit, date, consents, and any
reserved conditions.

## P11. Amendment

Either founder may propose an amendment. A constitutional amendment contains a
comparison, affected IDs, consequence assessment, locale and publishing impact,
transition plan, and new attestation. Obvious non-semantic corrections may use
an abbreviated review, but the classification and evidence remain recorded.

## P12. Protected Provisions

Protected conditions are:

- truthful authorship, role, ownership, and external-product attribution;
- preservation of original publication dates and source references;
- one canonical English source with traceable derivative editions;
- four-locale parity for every public archive item;
- locale-specific canonical URLs, valid language alternates, Ukrainian
  `x-default`, and locale-scoped sitemaps;
- publication to user-owned repositories only within an exact, expressly
  authorized target and scope;
- exact, reviewed Constitution and licensing-policy submodule pins;
- the licensing map and reserved status of brand assets;
- preservation of the latest verified public version when a build fails.

Changing a protected condition requires express joint human approval and a new
attestation.

## P13. Resources and Obligations

Common resources include the repository, domains, deployment project, Git
history, project emails, analytics and search-console access when configured,
brand assets, build credentials, and attested releases. Transfer, deletion,
history rewrite, licence changes, administrative-access grants, and domain
changes require exact-target verification and joint approval.

No financial obligation is created by this Profile.

## P14. Emergency Order

Grounds include credential compromise, publication of confidential or
third-party-restricted material, false ownership attribution, a broken or
misdirecting deployment, loss of canonical data, or a material legal or safety
risk. The technical maintainer may temporarily disable the affected route,
revoke a credential, or restore the latest verified deployment. The action is
limited to the affected scope, logged, reviewed by the founders, and followed
by an ordinary restoration or amendment decision.

## P15. Evidence and Registries

Official evidence includes canonical and public-projection Git commits and
submodule SHAs; the publication register; source-file provenance; content
parity checks; build and rendered HTML tests; route and sitemap checks;
checkpoint and deployment identifiers; review decisions; exceptions; and
incident records. Publication dates in content are source dates, while build
and deployment timestamps describe technical events.

## P16. Technical Enforcement

The stable check interface is `npm test`, which builds the Vinext site and runs
rendered-output and policy tests. Required checks cover route rendering,
development-preview metadata, four-locale content parity, correct HTML
language, canonical and alternate URLs, sitemap isolation, clean body and HTML
boundaries, public profile and InterDead-map links, build identity, exclusion
records, licensing declarations, and exact submodule pins. `npm run lint` is the
separate lint gate. No distinct WARDEN command is adopted for this repository;
the official procedure records it as `N/A` and uses the full applicable suite.
CI and build systems report results but do not rewrite editorial sources.

## P17. Transition and Restoration

The initial transition is:

1. preserve the existing visual language and project records;
2. reconstruct the source publication archive with original dates and types;
3. complete English, Ukrainian, Russian, and Japanese editions;
4. replace the combined sitemap with a sitemap index and locale-scoped maps;
5. connect and pin the Constitution and licensing policy;
6. adopt the project Profile, Development Regulation, licence declaration, and
   publication register as candidates for human ratification;
7. build, test, checkpoint, and publish the Sites version;
8. publish the authorized source projection to
   `Zhovten-Games/zhovten-games.github.io/site` and record its commit;
9. preserve all other user-owned repositories outside this transition.

A failed build or semantic review preserves the latest verified deployment.
Restoration uses a known checkpoint and records the reason.

## P18. Unwritten Order

No binding unwritten norm is presumed. A repeated practice is evidence for a
possible rule after three repetitions, a dispute, or its first material
consequence. Publication gates, licensing exceptions, authority limits, and
locale rules must be written before they are enforced.

## Candidate Derivative Acts

| Act ID | Name | Status |
| --- | --- | --- |
| `zg-site-act-development-001` | Website development and publication regulation | `0.2.0-candidate` |
| `zg-site-register-publications-001` | Content publication register | Candidate evidence |

## Project Specification Map

| Constitutional term | Project value |
| --- | --- |
| Founding subjects | Oksana Dubinetska and Sam Starling |
| Editorial source of truth | English LinkedIn history and verified adaptations |
| Canonical repository state | One attested Git commit |
| Canonical editorial locale | English |
| Derivative locales | Ukrainian, Russian, Japanese |
| Executive role | Technical maintainer under approved scope |
| Public derivative | Sites deployment and later authorized releases |
| Project namespace | `zg-site-*` |

## Revision History

| Revision | Date | Change |
| --- | --- | --- |
| `0.1.0-candidate` | 2026-08-20 | Initial project-specific P01–P18 profile |
| `0.2.0-candidate` | 2026-09-07 | Authorized the scoped public source projection, build identity, expanded release evidence, and clean HTML boundary checks |
