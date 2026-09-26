# Partitoria website deployment

Build with `npm ci && npm run build`. Package only `dist/client` and unpack it
as a new, immutable directory under `/var/www/partitoria-site/releases/` on the
VPS. Point `/var/www/partitoria-site/current` to that release, test Nginx with
`sudo nginx -t`, and reload it. Keep the previous release for rollback by
repointing `current` and reloading Nginx.

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
