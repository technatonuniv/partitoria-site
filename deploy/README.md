# Partitoria website deployment

Build with `npm ci && npm run build`. Package only `dist/client` and unpack it
as a new, immutable directory under `/var/www/partitoria-site/releases/` on the
VPS. Before switching, run `python3 retain_assets.py RELEASE /var/www/partitoria-site/shared`
for the new release. On first installation, run it for every retained release.
It preserves hashed CSS/JS for previously cached HTML and rejects name collisions;
do not prune this shared directory as part of a normal deployment.
Point `/var/www/partitoria-site/current` to that release, test Nginx with
`sudo nginx -t`, and reload it. Keep the previous release for rollback by
repointing `current` and reloading Nginx.

HTML responses use `Cache-Control: no-cache` so browsers revalidate them.
Versioned assets use a year of immutable caching. Russian `/ru/...` aliases
redirect to their canonical short URLs, including the guide linked by old APKs.
Regression checks must include a previous release's CSS URL as well as the
current page's assets: an HTML-only 200 check cannot detect this failure.

## 2026-10-01 live commercial-preparation website

The executor switched `current` to immutable release
`/var/www/partitoria-site/releases/20261001-commercial-10768-8706226`.
Published source is `8706226b1fbe7d7ef47db00322d2eaf5790a379e`, tree
`64107cf9695123d5eb106e6eed97df7406f2eee5`. The local static export was actually
built from `d1124797669d40dd494de78c042a3526200ac855`; its Git tree is identical to
the merged source. The [exact merged-source CI](https://github.com/technatonuniv/partitoria-site/actions/runs/36893783380)
passed. Documentation-only commits following this record do not change the
published runtime or imply another deployment.

The deterministic package was 38,549,917 bytes, SHA-256
`d3b85715d09c3d5fbd9bc6d944fbe24f0e67d039ab5881833182d58095a66da7`.
Independent package verification and a second serialization passed. The
executor verified all **1,009** extracted file hashes against its manifest;
all **84** previous shared assets remain byte-identical, and **ten** new hashed
assets were copied without pruning. The earlier release
`/var/www/partitoria-site/releases/20260930-free-10764-privacy` and historical
GitHub Pages release remain available for rollback.

The executor checked all nine HTTPS locale homes, retained stylesheet
`/_next/static/css/index.Dofa3idG.css` and the verifier's HTTPS health (200).
Independent local-PC public HTTP evidence on 2026-10-01:

- At 17:22:27 UTC, all **43** current PNGs returned 200 `image/png`, with exact
  manifest SHA-256 and 1200×1920 dimensions under normal TLS validation.
- At 17:23:05 UTC, all **18** localized Privacy/Terms pages returned 200 with
  bytes matching the built export, correct language, Studio credit and one h1.
- IPv4 and IPv6 each passed the English home (200), `www` to apex redirect
  (301), apex and redirected `www` missing-page response (404), and the retained
  stylesheet (200), with successful normal TLS verification.

The [current screenshot manifest](../public/guide/localized-captures.json)
records public 1.8.0/10768 source/input/APK identity and paid activation false.
Its 36 localized and seven shared English captures are current. All 47 prior
PNGs and original receipt remain archived; four historical fallback URLs remain.
[The screenshot inventory](../docs/COMMERCIAL_SCREENSHOTS.md) distinguishes
current, historical and Google-purchase evidence.

The executor's live English desktop browser check passed current-10768 image
loading, zoom, Escape, focus return and horizontal overflow. Mobile checks at
390×844 passed all nine home pages and all 18 Privacy/Terms pages: correct
document language, visible headings/policy text and no horizontal overflow.
English home-image loading passed. The other home images were lazy and not
loaded in their initial viewport; this does not establish all-home browser
image loading. **Literal English/Polish mobile screenshots and broader
interaction checks remain pending.** HTTP and static checks are recorded
separately from these rendered-browser results. The public pages retain honest
launch-in-preparation wording; this website deployment does not prove Google
Play publication, store signing or real purchases.

Use the isolated website/current/shared deployment contract and preserve
unrelated DNS, certificate and Nginx/service configurations. Earlier network/
browser limitations below are historical receipts, not a verdict on this current
release. Preserve all historical releases and shared assets.

## 2026-09-27 cached Android entry regression

The tablet retained the earlier 28-article HTML at `/ru/guide`. Its stylesheet
`/_next/static/css/index.Dofa3idG.css` returned 404 after the current symlink
changed, while navigation through `/` loaded the current 31-article guide.
Retained assets, canonical Russian redirects and HTML revalidation are now
installed. Nginx validation/reload passed. All nine public guide routes and
their referenced CSS/JS passed. A later public check confirmed the legacy CSS
returned 200 `text/css` with `cf-cache-status: EXPIRED`, after the cached 404
expired. All 64 retained CSS/JS assets also returned 200 with their correct types
through the public domain. The initial origin-only limitation is therefore closed.
Standard Wrangler refresh restored the existing OAuth session; its permissions
did not authorize a single-file purge (401), so no purge or permission change
was made. The Android fix opens canonical `/guide`. No cookies or user storage
were cleared.

`python3 -m unittest discover -s deploy -p 'test_*.py' -v` verifies preservation
across switch/rollback and rejects same-URL content replacement. Static site
verification passed. Chrome extension tab acquisition still timed out; these
HTTP checks do not claim rendered-browser acceptance.

`partitoria.app.conf` is the isolated HTTP/HTTPS origin configuration. The
earlier `partitoria.app.http.conf` remains as a staging rollback reference.
Neither file edits the verifier, account or other service blocks. Test the
origin with normal TLS validation against the intended hostname:

```sh
curl --resolve partitoria.app:443:135.125.131.73 https://partitoria.app/guide
```

Check every locale, images, the `www` redirect and a missing-page 404 after
each release. The current Let's Encrypt certificate covers the apex and
`www`, expires **2026-12-25 22:05 UTC**, and keeps its private key on the VPS.

The public `partitoria.app` and `www` records were changed on 2026-09-26:
apex A and AAAA point to the VPS, and `www` is a CNAME to the apex. All three
were initially proxied by Cloudflare. On 2026-09-27 the owner switched them to
DNS-only to restore access from affected Russian networks. Keep that setting;
TLS is served by the VPS and its existing Certbot renewal. Public IPv4 and IPv6 HTTPS, direct-origin TLS, nine
guide locales, guide images, the `www` redirect and a missing-page 404 passed.
Keep the GitHub Pages release available for rollback. Do not infer a future
DNS cutover from an origin-only `curl --resolve` check.

Initial certificate issuance used a manual HTTP-01 challenge served through
the existing Pages site. After cutover, the same `partitoria.app` lineage was
reissued using Certbot's `webroot` authenticator at
`/var/www/partitoria-site/acme`. The enabled `certbot.timer` and
`certbot renew --dry-run --cert-name partitoria.app
--no-random-sleep-on-renew` passed. A root-owned deploy hook at
`/etc/letsencrypt/renewal-hooks/deploy/99-nginx-reload` validates and reloads
Nginx after certificate renewal. Its syntax and manual execution passed.

`hooks.partitoria.app` remains a DNS-only AAAA pointing to this VPS for the
separate Resend webhook at HTTPS port 9447. Cloudflare flags this because the
record reveals the shared origin IPv6 address. The warning does not block
traffic. Do not enable the standard Cloudflare proxy on this record while the
webhook uses 9447: [Cloudflare's supported HTTPS ports](https://developers.cloudflare.com/fundamentals/reference/network-ports/)
do not include it. The endpoint uses a separate TLS vhost and signed webhook
validation. Hiding the shared address would require moving the webhook to a
supported proxied port or a separate origin.

## 2026-09-28 language and portrait release

Published `20260928-language-portrait-10739` on the VPS. Nginx validation and
reload passed; 10 additional hashed assets were retained without pruning old
ones. The preceding `cdf4cf64fa4d2a17dbfe6f981725fc636492e745` release remains
available for rollback. Public-domain HTTPS checks from the VPS passed for
12 page requests, 12 current/legacy assets and exact hashes of 39 files
(language script, capture manifest and 37 screenshots). All 36 localized
captures plus English search use emulator build 10739 and the synthetic library.
The four English fallback images were refreshed as well.

The local PC received a valid 200 HEAD but full GETs timed out during this
verification. This is a separate network limitation; server-side checks do not
prove availability from every client network. Chrome visual QA remains blocked
by request-header-policy initialization. No DNS/proxy change was made here.
