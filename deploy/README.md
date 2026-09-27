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
are proxied by Cloudflare. Public IPv4 and IPv6 HTTPS, direct-origin TLS, nine
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
