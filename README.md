# Partitoria website

Official public website for **Partitoria**, an offline-first personal sheet-music library for Android.

The site is intentionally static: it has no website accounts, cookies, analytics,
advertising, forms, or runtime third-party assets. It includes the public privacy
policy, support and closed-pilot account-deletion request details, copyright
notice, terms of use, and the current external-source policy. The Android app's
invitation-only OWNER pilot is separate from this static website.

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

The static export is written to `dist/client`. It is deployed as an immutable
release under `/var/www/partitoria-site/releases/` on the Partitoria VPS, with
`/var/www/partitoria-site/current` pointing to the active release. The
[deployment notes](deploy/README.md) record the origin, DNS and certificate
checks. Since 2026-09-26, Cloudflare serves the public domain from the VPS.
GitHub Pages remains available as a rollback copy.

The VPS revalidates HTML and preserves versioned CSS/JS across releases. This
prevents a cached guide opened from Android from losing its styling after a
deployment. Russian `/ru/guide` redirects to `/guide`; all Russian aliases use
the same canonical rule. See the asset-retention step in the deployment notes.

## Content and routes

The home page, searchable guide, support and public information pages have
versions in the app's nine languages: Russian, English, German, Italian,
Spanish, Portuguese, Ukrainian, French and Polish. Russian also keeps its
short canonical URLs (`/`, `/guide`, `/support`, `/privacy`, `/terms`,
`/copyright`, `/sources`). Locale URLs use `/{locale}` and
`/{locale}/{section}`. The original detailed Russian pages and their English
sections remain available at the canonical legal URLs.

The guide text describes working app features and separates Free ownership
from gated new Pro actions. Screenshots in `public/guide/` must be genuine
portrait Android emulator captures with a synthetic library. The guide hides
an unavailable image; generated art must never be substituted for app UI.
The guide has 31 searchable articles in six categories. Its overview, category
pages and individual articles are separate static routes. A compact expandable
contents list accompanies articles; mobile readers open it on demand. Search
covers the selected language's titles, introductions and instructions, tolerates
accents and Russian ё/е, and keeps the query in the URL for browser Back.
Old `/guide#article-id` links redirect to the corresponding article.

The eleven original English captures are
`add.png`, `import.png`, `review.png`, `library.png`, `collections.png`,
`search.png`, `viewer.png`, `backup.png`, `settings.png`, `tools.png` and
`inbox.png`. They are complemented by **36 localized portrait captures**:
library, Add, Tools and Settings in each of the nine languages. Their capture
manifest is `public/guide/localized-captures.json`. The source app is
1.7.0 (10739), with an eight-score synthetic library at 1200×1920 and 260 dpi.
The four localized screens follow the reader's language; other illustrations
are explicitly captioned as English. Their PDF notes are
demonstration material, while the app screens are genuine emulator captures.
The concert-hall banner is a decorative generated site image, separate from
application screenshots. Neither the site nor the guide is a public install
or subscription offer during invitation-only testing.
The banner uses a 94 KB WebP with the PNG as browser fallback.

Screenshots open in a native modal dialog on the current page, with zoom,
Escape/Close, backdrop dismissal and focus restoration. The homepage uses the
same viewer for its real application preview. The image itself is not edited
or generated. The modal and responsive layouts still require live browser QA:
the local Chrome extension's request-header-policy initialization error has
prevented that check in this session.

Language detection, persistence, consent and reset are documented in
[language and privacy](docs/LANGUAGE_AND_PRIVACY.md). Run
`node --test scripts/test-language.mjs` after changing that behavior.

After changes run `npm run sitemap`, `npx tsc --noEmit`, `npm run lint`,
`npm run build` and `npm run verify`. Verification checks every canonical
page, localized article content, local references, portrait-image hashes and
sitemap coverage. These checks also run in GitHub Actions. They verify the
static export, not browser interactions. See [the UX review](docs/UX_REVIEW.md).

## Visual accessibility review (2026-09-26)

Color combinations were checked against [WCAG 2.2](https://www.w3.org/TR/WCAG22/):
normal text at least 4.5:1, large text at least 3:1, and essential UI
boundaries/focus at least 3:1. Calculated sRGB contrast ratios for the design:

| Foreground | Background | Ratio | Use |
| --- | --- | ---: | --- |
| `#221c1a` | `#f8f5ee` | 15.44:1 | body text |
| `#514944` | `#f8f5ee` | 8.08:1 | secondary text |
| `#651c2a` | `#f8f5ee` | 11.00:1 | links and labels |
| `#fffaf2` | `#4a1421` | 14.30:1 | dark panel text |
| `#9a897b` | `#f8f5ee` | 3.09:1 | input/control border |

Decorative separators use a lighter line and carry no state alone. Text over
photography sits on a dark overlay; the main site also uses visible keyboard
focus, reduced-motion support and a 320 CSS-pixel reflow layout. Verify the
rendered site and 200% text zoom again after deployment.
