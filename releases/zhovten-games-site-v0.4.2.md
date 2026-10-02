# Zhovten Games site v0.4.2

Published: 2026-10-02.

## Result

- Canonical source: `d0fa9175182e182b7bd4cca66b29650fe17f90b3`.
- Public source projection: `4952f13899d68dc6b73dd402d234727c11cdebb8`.
- Sites version: 11, `appgprj_6a8737574df881918093fd9ba49b0e1f~appgver_0c9d69637f448191908ca913b5851d20`.
- Deployment: `appgdep_6abf8d9c312c8191a57f1e59f2034f0f`; native status: `succeeded`.
- Canonical public URL: https://zhovten.games
- Native deployment URL: https://zhovten-games.ironcreed.chatgpt.site
- Archive: `sha256:9b8581dcdc29e80e5c88410423485f64f86dbbab9448d95ee2c8335a7444b716`.

## Requested changes

Both authors now have a peer-level Project experience section. The existing
catalogue cards are reused without duplicating project copy: Oksana has five
GrandMA credits, InterDead, and the comic in development; Sam has InterDead,
the comic, PsyFramework, and Safe / Blind Zones — Live Tester.
Section headings reuse the catalogue underline in EN, UK, RU, and JA.
Oksana's Education follows Project experience. Languages and Public profiles
remain aligned. Sam's separate detailed-map paragraph is removed; his GitHub
link remains in Public profiles.

The catalogue itself, project facts, authorship records, dates, and external
ownership statements are unchanged. The user explicitly selected the comic
for Sam's profile without supplying a new role; no new project-level role
or author attribution was invented.

## Verification

- `npm run typecheck`: passed for browser and Worker targets.
- `npm run lint`: passed.
- `npm test`: one production build; 17/17 existing rendered-output checks passed,
  none failed, skipped, or cancelled.
- The author check verifies peer heading order, exact card parity with the
  catalogue, locale-correct links, the selected cards, shared languages, and
  removal of Sam's standalone GitHub paragraph.
- Source transfer: all 15 changed blobs match their canonical Git SHA.
- Published source tree: 77 canonical objects, including submodule gitlinks.
- Existing repository content outside `site/` and this release record is retained.

## Proportionate review

Development Regulation ZG-R02a now defines a small content/documentation path:
inspect the scoped diff and attribution, verify affected locales and links,
build once for publication, and run relevant existing rendered-output checks.
It does not reopen unchanged Constitution or legislation reviews.
Licences, public policies, governance rules, protected provisions, authority,
access controls, submodule pins, and system files are excluded.

This release changes the presentation template and the regulation itself,
so it uses the implementation gates and a focused review of the amendment.
See `site/governance/reviews/2026-10-02-profile-project-cards.md`.
Candidate acts remain pending human ratification.

Constitution pin: `220dc9c286ae06f8b6ed60cdda75112eed0408ed`.
Licensing policy pin: `6e4c2627717c079827ed4aa9044a5346b3ea3ddb`.
No licences, dependency resolutions, runtime, build configuration, or pins changed.
Same-pin Constitution evidence and the dependency audit from 2026-09-28 are
retained: zero production vulnerabilities; four moderate development-only
findings in the drizzle-kit / esbuild-kit / esbuild chain.
No new audit or upstream test run is claimed.

WARDEN: N/A — the site has no adopted standalone WARDEN command.
