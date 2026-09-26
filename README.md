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
[deployment notes](deploy/README.md) record the origin checks and remaining
domain cutover. The VPS has verified HTTPS; GitHub Pages remains the public
delivery path until Cloudflare DNS points to the VPS.

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
The guide has 28 searchable articles in six categories; ten central workflows
have four concrete steps in every language. The eleven current captures are
`add.png`, `import.png`, `review.png`, `library.png`, `collections.png`,
`search.png`, `viewer.png`, `backup.png`, `settings.png`, `tools.png` and
`inbox.png`. Their PDF notes are
demonstration material, while the app screens are genuine emulator captures.
The concert-hall banner is a decorative generated site image, separate from
application screenshots. Neither the site nor the guide is a public install
or subscription offer during the closed pilot.
The banner uses a 94 KB WebP with the PNG as browser fallback.

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
