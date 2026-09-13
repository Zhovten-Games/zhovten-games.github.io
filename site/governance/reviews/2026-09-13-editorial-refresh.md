# Editorial refresh — 2026-09-13

Release line: `v0.3.1`.

## Scope and source review

The user authorized consistent umbrella-update titles in EN/UK/RU/JA, Sam
Starling's supplied professional biography and role, removal of his three
profile lists, a GitHub documentation note, the studio LinkedIn contact link,
publication-date reconciliation, and a professional contest log entry.

The active Sites source was `b735d8f0` (version 7). Its public GitHub projection
was still at the preceding `v0.2.0` source; the new projection includes the
already published summer update as well as this refresh. Existing URLs remain
stable. The new contest entry has one shared slug in all four editions.

The exact current LinkedIn registry was read on 2026-09-13. Twelve existing
posts matched its publication identities: eleven dates were already correct;
the summer update changes from 2026-09-10 to 2026-09-12. Two external wrappers
have no corresponding entry in that registry. Their own source metadata
establishes 2026-02-10 for the Inrium article and 2026-05-05 for the later Canon
Horror DOI record. Per-item evidence is stored in the publication register.

LinkedIn publishing-author metadata identifies the sender of a studio post.
It does not independently establish the authorship of the expanded website
article; existing editorial author sets are preserved.

The contest organizer confirms the story title, finalist status and 19th place.
The retrospective log uses 2024-06-01, the date the final concluded, as its
historical event date. The user confirms this was Oksana's first literary
contest. The entry omits family relationships, personal wishes and the A24
comparison. It links to the original story and final results without copying
the story's text.

## Implementation and verification

- Four full profile translations; the requested professional role is retained
  as a common English title.
- Paragraphs and link-label blocks preserved, including explicit hard breaks;
  long URLs wrap within the existing content width.
- Empty profile groups are omitted; Oksana's populated groups remain visible.
- Source dates, Article and Open Graph dates, archive ordering and locale
  sitemaps use the same content records. Modification dates remain separate.
- Fifteen published entries and 33 routes in each locale sitemap.
- Production build and 15 rendered-output checks passed at candidate review;
  lint passed. The committed source is rebuilt and checked before publication.
- Governance and licensing: reviewed against the pinned sources and project
  Profile/Development Regulation; no normative or licensing change required.
- Constitution and licensing gitlinks are unchanged. Their upstream test suites
  are not rerun for this editorial change.
- WARDEN: N/A under the existing Zhovten Games procedure.

## Work estimate and remaining conditions

Scope comprised four content editions, shared profile/Markdown rendering,
date metadata and sitemaps, the publication register, release identity and
rendered-output checks. No new dependency, data store, paid service, licensing
override or infrastructure component is introduced.

The canonical release commit is the commit containing this record. The public
projection commit and deployment identifiers belong in the external release
evidence after publication. Existing governance acts retain their candidate
status pending the founders' ratification; this release does not ratify them.
