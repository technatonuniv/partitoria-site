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

## Release retention — owner decision, 2026-11-07

After a successful deployment and public verification, retain the active site
release and **only its immediately previous working release** on the VPS.
Older complete site releases and temporary upload archives should not accumulate.
Before removing them, verify the active and rollback paths, check for mounts,
symlinks, open files and external references, and identify any unique historical
assets or evidence. Preserve unique material outside the VPS and verify its
hashes before retiring the exact, reviewed paths. Keep the small deployment
receipts; move historical full-size receipt archives off the VPS before removal.

Keep `/var/www/partitoria-site/shared` and its immutable assets: cached pages may
still require them. This retention decision concerns the website's release and
upload copies only; it does not authorize deleting other services, certificates,
ACME data, user data or unrelated backups.

HTML responses use `Cache-Control: no-cache` so browsers revalidate them.
Versioned assets use a year of immutable caching. The Russian facts edition has
its own `/ru/facts` HTML and `/ru/facts.txt` vinext payload. Deploy these together
with the narrow exception in the existing HTTPS vhost. Compare the active vhost
with the rule in this repository before changing it. Run `nginx -t`, verify
the HTML and payload hashes over HTTPS, and check that `/ru/facts/?x=1`
redirects to `/ru/facts?x=1`. Roll back the vhost and the release together if
public checks fail. Other Russian `/ru/...` aliases still redirect to their short
URLs, including the guide linked by old APKs.
Regression checks must include a previous release's CSS URL as well as the
current page's assets: an HTML-only 200 check cannot detect this failure.

## Android 1.11.1 screenshots · 25 November 2026

The active website release is `20261125-guide-11032-ae52a4c`. It serves the 225 approved screenshots from Android build 11032 and 27 responsive reader previews. [Screenshot inventory](../docs/COMMERCIAL_SCREENSHOTS.md) · [Tested source](https://github.com/technatonuniv/partitoria-site/commit/ae52a4ce05b517b68925f861eed8032110161eef) · [Verify website](https://github.com/technatonuniv/partitoria-site/actions/runs/45613244031)

The archive contained 1,800 files. Every extracted file matched its manifest. Archive SHA-256 `84dda0ccff502866a0c0ae118f1a776882b072b0a341072e996e6739d7952daf`. The new release preserved 557 previously published assets, and the shared directory retained ten new immutable build assets.

The origin and a separate HTTPS check from the workstation each matched 713 public responses, covering all 432 canonical pages, the new screenshots and all home image sizes. Each check also verified four redirects and error responses. In Codex’s in-app browser, the English home loaded the new reader at desktop and mobile widths, the Pro annotations dialog opened the 1200 × 1920 original, and the French MusicXML page displayed its localized preview.

The rollback release is `20261125-ru-facts-c125b91`. The retired release `20261125-search-5b64950` matched all 1,543 members of its off-host archive before removal. The upload directory was removed. Activation, external verification and retention receipts are stored under `/var/www/partitoria-site/deployment-receipts/20261125-guide-11032-ae52a4c/`.

## Stable Russian facts URL · 25 November 2026

Release `20261125-ru-facts-c125b91` used commit `c125b91`.
[Verify website passed](https://github.com/technatonuniv/partitoria-site/actions/runs/45600127233).
The package contained 1,545 verified files. SHA-256
`3e23c38ae6dba5e2a69217456e5caff07fbdd8eae658cad0877bfb03f80a0064`.
The server passed 14 isolated nginx routing cases, nginx configuration checks,
74 public byte comparisons and five redirect/error checks. All 545 earlier
guide and store-review assets matched. The new canonical is `/ru/facts`.
Google's live test rendered the Russian title, Russian document language and
the self-canonical. IndexNow accepted that one URL with HTTP 200.

For rollback, recover the previous vhost and release `20261125-search-5b64950`
together. The root-only receipt directory
`/var/www/partitoria-site/deployment-receipts/20261125-ru-facts-c125b91/`
holds the original vhost, activation journal and recovery helper. The retired
16 November release was verified against its 1,484-file off-host archive.

## Search discovery release · 25 November 2026

Active release `20261125-search-5b64950` uses source
`5b64950e1e0f0e0ce345a00165ec8b34dd1a8aaa`. Both approved commits reached
GitHub main and [Verify website passed](https://github.com/technatonuniv/partitoria-site/actions/runs/45586808402).
All 1,543 extracted files matched the approved export. Package SHA-256
`b074534668b8790f6ed13803f3c0860c73021d7b71d0486c7e41c823bbad7164`.
All 545 earlier guide and store-review assets matched. The server retained 11
new immutable assets and verified the old stylesheet, Russian and www redirects,
missing-page 404, and 100 public HTTPS responses against the release bytes.

An independent external check matched the bytes at all 44 changed URLs,
the sitemap and the public key. Eight search User-Agents each received three
matching HTTP 200 responses. Public Russian and English facts and the MusicXML
example were opened in Codex's in-app browser. IndexNow received 44 URLs at
09:39 UTC with HTTP 202, pending key validation.

Rollback release `20261116-promotion-01` remains on the VPS. The former
12 November rollback was archived off-host and all 1,484 files were checked
before retirement. Archive SHA-256
`c14c84e30170d291b763d1dfdb8cfca485c1467813229285882f948d8b91f730`.
Deployment, retirement and IndexNow receipts are in
`/var/www/partitoria-site/deployment-receipts/20261125-search-5b64950/`.

## 2026-11-16 organic promotion release — PASS

Active release `20261116-promotion-01`, built from the tested local website
changes over `e054e7da60108f8728940fb30950b0670fb685eb`. The exported package
contains 1,484 files. Package SHA-256
`3f6ac037d9c7aadb92526ef3346ea2c317464e9c03a765a40ae7953ee390bcd2`.
Each extracted file matched the manifest. The prior 545 Guide assets and
store-review files matched byte for byte. The retention script added 11
immutable assets. Nginx validation and reload passed.

The ordinary public HTTPS endpoint returned 32 byte-identical responses
covering all nine homepage locales, the English offline PDF guide, screenshots,
and current CSS/JS. The old stylesheet, canonical redirects, missing-page
404 and verifier health also passed. Browser checks confirmed desktop English,
390 px English/German/French and the tagged link leading to Partitoria in
Google Play.

Rollback release `20261112-every-format-0fb7a3f-01` remains on the VPS.
The earlier `20261107-no-prices-04e9e129cd9c-01` was archived off-host
and all 1,384 files were rechecked against the deployed copy before retirement.
Archive SHA-256
`6dcc2fabeaeeb7f1bce3c76da0cb3adbbd2b39c61efd03e34c50910d22fc7ecc`.
The two expected release directories were confirmed after upload cleanup.
The activation receipt is under
`/var/www/partitoria-site/deployment-receipts/20261116-promotion-01/receipt.json`.

## 2026-11-12 every-format release — PASS

Active release `/var/www/partitoria-site/releases/20261112-every-format-0fb7a3f-01` (source `0fb7a3f`,
1,484 files, 11 new shared assets retained), `nginx -t` and reload passed. Live checks: home pages en/ru/de and
guide 200, new "every format" hero and formats section served without Finale, Pro guide screenshot
`/guide/11012/ru/annotations.png` 200. Rollback: `20261107-no-prices-04e9e129cd9c-01`; the older
`20261107-price-align-9919527ef93b-01` release and upload copies were removed per the retention rule.

## 2026-10-07 current screenshot release — PASS

Deployment03 activated immutable release
`/var/www/partitoria-site/releases/20261007-ux-ui-10814-a0bb4cfaa565-03`
on 2026-10-07 at **10:30:15 UTC**, with actual executor exit 0.
Published runtime source is
`a0bb4cfaa56561f03c14ef4cb8c9ad5e8ad5cbd5`, merged through
[website PR2](https://github.com/technatonuniv/partitoria-site/pull/2).
The final-source local build/static checks and
[exact-source CI](https://github.com/technatonuniv/partitoria-site/actions/runs/37606407283)
passed. Later documentation commits do not change this published runtime or
imply a further deployment.

The final package02 archive `partitoria-site-10814-a0bb4cfaa565.tar.gz`
contains **1,280 files**, 127,658,171 uncompressed file bytes. The archive is
**81,876,498 bytes**, SHA-256
`bb7b420bd44ac70a882a8c9843e95b3c7706ed8dc6626e05199133c3445787da`.
The file manifest SHA-256 is
`fa1eef328a849c7a329605553598a16092580b515600d83a98d1249d9d84a804`;
deployment readiness SHA-256 is
`285cfd520438fd1b3aa30267a0071553d5fde5f065fbf0f63eef9ea33cabac02`.
Independent package verification and deterministic second serialization passed.

The executor verified every extracted file and all **270 current PNGs** against
the package/capture manifests, with normal public HTTPS/TLS verification.
All **98 previous Guide files** and **94 previous shared assets** remain
byte-identical, including original 10768 URLs/root manifest, 10739 archives and
cached CSS/JS. The previous immutable release
`/var/www/partitoria-site/releases/20261001-commercial-10768-8706226`
is retained for rollback. Deployment receipt `website-deployment-10814-03.json`
has SHA-256
`4fe7f2d8a10e77ba6c28e2e5d9c19d42fc4804c1717e55700133bb435d4b3cf5`.

Independent live HTML verification completed on 2026-10-07 at **10:31:16 UTC**,
actual executor exit 0: **288/288 exact-export responses PASS**, zero limited and
zero failed. Receipt `website-live-guide-10814-01/live-html-verification.json`
has SHA-256
`f9c2531cc117062c8f8745d27e37a82ac666c1b03d89c0318a6f5886e0842d7d`.
This verifies ordinary canonical HTTPS HTML; rendered browser interaction and
functional acceptance remain separate.

The [10814 screenshot manifest](../public/guide/10814/localized-captures.json)
binds **30 ordinary screens × nine languages = 270 unchanged raw PNGs**,
covering all 31 Guide articles and Home, to public app **1.8.0/10814**,
Android source `695c2200e529218c26ec2e94857c7ae17dedd022`, prepared input
`947cb2851b03ab89947aab3179cc5f3faef40e260823d5983b8e71145a8091f8`
and APK SHA-256
`eac2b3f8c4515556c4ab48392f9217a55727a5f0e459c2f73da540b39bd15b29`.
All originals were individually viewed. Captures use the API 37 portrait
tablet emulator at 1200×1920, density 260 and font scale 1.0; no physical-device, QA-grant or
fake-purchase screenshots were used.

Attempts01 and02 both ended **FAILED_BEFORE_SWITCH**; the old 10768 release
remained active. The operational repairs concerned generated Next Flight route
companions and the CRLF representation of two historical JSON receipts.
The final package preserves the verified production/Git-blob bytes; these
repairs changed no Android runtime inputs. Both failed receipts remain retained.

Supported rendered-browser verification is **BLOCKED** by the missing installed
Browser-plugin `browser/scripts/browser-service.mjs` payload after one bounded
reset. No alternative browser transport or policy bypass was used. This website
publication does not prove Google Play availability, store signing acceptance or
real purchases. The records below retain their original dates and release scope.

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
