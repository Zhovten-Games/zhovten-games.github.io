# Author project cards and proportionate verification

Release: `v0.4.2`.

## Requested scope

Both author pages have a peer-level Project experience section with the same
localized cards and section-heading rules used by the project catalogue.
Oksana's selection includes the five GrandMA credits, InterDead, and the
unannounced comic; Sam's includes InterDead, the comic, and both tools.
The project records, their attribution, and the project catalogue are unchanged.
The explicit editorial instruction authorizes the profile selections without
inventing a new role or modifying a project-level author record.

Education follows Oksana's project section. Both profiles retain the identical
Languages block and finish with Public profiles. Sam's separate detailed-map
paragraph is removed; his GitHub public-profile link remains. EN/UK/RU/JA use
the same selected project slugs and shared renderer. Profile Sync Records
track the revised order and scope; Master CV facts are unchanged.

## Classification and focused governance review

This release changes a presentation template, its types and heading selectors,
so it uses the existing implementation gates, not the new content-only shortcut.
ZG-R02a defines that shortcut for later small content/documentation changes.
Its own adoption is explicitly excluded from the shortcut. The amendment was
compared with Profile P11–P12 and P15–P16: protected attribution, localization,
licensing, source boundaries, pins, and publication evidence remain required.
The acts remain candidates; publication does not claim human ratification.

No licence, public legal policy, dependency resolution, runtime, route, build
configuration, or submodule revision changes. The Constitution remains at
`220dc9c286ae06f8b6ed60cdda75112eed0408ed`, licensing policy at
`6e4c2627717c079827ed4aa9044a5346b3ea3ddb`. The same-pin Constitution evidence
and dependency review from the preceding release remain applicable. That
dependency review recorded zero production vulnerabilities and four moderate
development-only findings in the drizzle-kit / esbuild-kit / esbuild chain.
No current audit or upstream test rerun is claimed.

WARDEN remains `N/A`: no standalone WARDEN command is adopted for this site.

## Verification

The existing author-page check is updated for peer heading order, exact
catalogue-card reuse and profile selection, locale-correct links, and removal
of Sam's separate GitHub paragraph. Required commands are `npm run typecheck`,
`npm run lint`, and `npm test` (one production build and the existing suite).
The release record records their actual results and final publication IDs.
