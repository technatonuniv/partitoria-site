# Website and guide review — 2026-09-27

## Current screenshot refresh — 2026-10-07

The published website uses public **1.8.0/10814** screenshots: 30 ordinary
screens in all nine app UI languages, covering all 31 Guide articles and Home.
All **270 original PNGs** were individually reviewed and integrated unchanged.
Captures use an API 37 portrait tablet emulator, 1200×1920, density 260,
font scale 1.0 and invented lawful scores; no QA grants or fake purchases.

**CAPTURES, LOCAL STATIC, FINAL-SOURCE CI, DEPLOYMENT AND LIVE HTTP PASS.**
The published runtime source is
`a0bb4cfaa56561f03c14ef4cb8c9ad5e8ad5cbd5`;
[exact-source CI](https://github.com/technatonuniv/partitoria-site/actions/runs/37606407283)
passed. Deployment03 activated immutable release
`20261007-ux-ui-10814-a0bb4cfaa565-03` on 2026-10-07 at 10:30:15 UTC,
verifying all 1,280 extracted file hashes on the VPS. All 270 public PNG
hashes passed through normal TLS. Live HTML
verification at 10:31:16 UTC passed **288/288** exact-export responses,
with zero limited or failed results. All 98 previous Guide files and 94 shared
assets remain byte-identical; the previous release is retained for rollback.
Later documentation commits do not change this published runtime.

Supported rendered-browser verification remains **BLOCKED** by the missing
Browser-plugin `browser/scripts/browser-service.mjs` payload after one bounded
reset. HTTP/static checks retain their separate scopes. Original 10768 URLs,
the root manifest, 10739 archives and earlier browser results retain their
dated historical identities and scope.

[Current artifact identity and capture policy](COMMERCIAL_SCREENSHOTS.md).

## Historical review — 2026-09-27

The previous guide placed categories, all article summaries and the selected
article side by side. The longest list controlled the page height, while a
short article left most of the page empty. Three competing navigation levels
also reduced the width available for instructions and screenshots.

## Delivered structure

- `/guide`: a six-section directory and prominent search.
- `/guide/section/{category}`: the complete article list for that section.
- `/guide/{article}`: one article, breadcrumbs, a compact expandable contents
  list and previous/next links. The mobile contents list opens on demand.
- Each route has the same structure in all nine app languages. Switching
  language preserves the selected article or category.
- Searches use the current language, normalize accents and ё/е, and retain
  their query in the URL. Existing fragment links remain usable.
- Screenshot buttons open a native modal with enlargement, keyboard closing,
  backdrop dismissal and focus return. Full-size images remain on the page.

The home page combines the existing concert-hall artwork with a real localized
library screen. Guide and information pages use a warm paper background, dark
body text, restrained burgundy links and serif headings. There are no fake app
mockups, testimonials, download buttons or public subscription offers.

## Research applied

[USWDS side navigation](https://designsystem.digital.gov/components/side-navigation/)
supports a small, clear hierarchy with a visible current location. The guide
therefore exposes the current section's articles rather than a permanent
second list of every article on the site.

[WCAG multiple ways](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html)
informs the complementary category directory, search, breadcrumbs and direct
article links. [WCAG target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
informs touch targets and spacing; primary controls use 44–52 CSS pixels.

[WCAG contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
requires 4.5:1 for ordinary text and 3:1 for large text. The existing palette's
calculated ratios are 15.44:1 for body text, 8.08:1 for secondary text and
11.00:1 for burgundy links against the paper background. Focus has an outline;
the current article has a border and weight change as well as color.

## Content coverage and evidence

| Section | Workflows |
| --- | --- |
| Getting started | Navigation, files and images, folder import, import queue/retry, online sources |
| Library | Search/filter/sort, metadata/covers, collections/batch actions, smart collections, health, practice history |
| Reading | Reader, presentation profiles, annotations/layers |
| Rehearsal | Programmes, difficult passages, metronome, revision transfer/exchange, concert PDF, keys/pedals/MIDI, audio, annotation versions/lessons, transfer between parts/editions, paper marks |
| Files | Portable backup/restore, original export/recovery, on-device copies |
| Settings | Earlier searches, appearance/language/Help/account, Pro, online privacy |

31 articles have instructions in nine languages. Specialist additions were
checked against `LibraryShell`, `RehearsalDialog`, `MetronomeDialog`, semantic
transfer and paper-extraction source at Android commit
`9ba5bd1480033cdf7e84bcac728ba862de1ff69e`. This source review is not a claim
that every Pro workflow was exercised in this website task.

The 36 new captures come directly from the portrait Android emulator and the
unmodified 1.7.0 (10733) application. Only synthetic library metadata and sample
PDFs were used. The repeatable capture helper rejects physical device serials.
Original English captures are retained for additional workflows, with a visible
language caption when needed. Advanced workflow articles use the actual Tools
entry screen rather than an invented picture of the feature.

## Verification boundary

Type checking, lint, build, static-route/link checks and image-hash validation
are reproducible through the README commands and CI. Live browser interaction
checks at desktop, tablet, 320/390-pixel phone widths and 200% zoom remain open:
Chrome is installed and its extension is enabled, but Codex fails to load its
browser request-header policy. No policy was disabled or bypassed. Browser
Back, modal focus/zoom, touch layout and console checks must be verified through
the supported browser connection before claiming complete visual acceptance.

## 2026-09-28 requested refinement

Website credit is Partitoria Studio. Public invitation wording replaces internal
pilot terminology. The privacy page uses the same localized implementation as
other languages; detailed mail-processing facts are available on demand.
Language selection carries a clear 180-day storage notice and a reset action.
Automatic negotiation uses the primary browser language, defaulting to English
when unsupported; explicit translated links remain stable.

App portrait navigation moved to the bottom. The localized Library/Add/Tools/
Settings screenshots and English search illustration are recaptured from the
synthetic emulator library at 1200×1920, without image editing. W90 evidence is
kept in the Android repository and never used for public screenshots.

Type checking, lint, production build, four language tests and two retained-asset
tests pass. Static export covers 396 canonical pages and 31 articles in nine
languages. Browser rendering and interaction acceptance remain blocked by the
request-header-policy error described above; no fallback browser transport was used.
