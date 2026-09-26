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
`www`, expires **2026-12-25**, and keeps its private key on the VPS.

The public `partitoria.app` address remains on GitHub Pages until Cloudflare
DNS is changed. Confirm Cloudflare can validate the VPS origin, update the
apex and `www` records, verify IPv4/IPv6 and all key routes over HTTPS, and
only then retire GitHub Pages. Do not infer DNS cutover from an origin-only
`curl --resolve` check.

Initial certificate issuance used a manual HTTP-01 challenge served through
the existing Pages site. **That lineage cannot renew automatically.** Once
public DNS points to the VPS, use the HTTP ACME webroot configured at
`/var/www/partitoria-site/acme` to reissue the same lineage with Certbot's
webroot authenticator, then verify `certbot renew --dry-run`. Keep Pages and
the old release available until the cutover and renewal checks pass.
