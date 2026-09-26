# Partitoria website deployment

Build with `npm ci && npm run build`. Package only `dist/client` and unpack it
as a new, immutable directory under `/var/www/partitoria-site/releases/` on the
VPS. Point `/var/www/partitoria-site/current` to that release, test Nginx with
`sudo nginx -t`, and reload it. Keep the previous release for rollback by
repointing `current` and reloading Nginx.

`partitoria.app.http.conf` is the isolated port-80 origin configuration used
while the site is staged. It does not edit the existing verifier, account or
other service blocks. Test the origin against the intended host with
`curl --resolve partitoria.app:80:135.125.131.73 http://partitoria.app/guide`.
Check every locale, images and a missing-page 404 after each release.

The public `partitoria.app` address remains on GitHub Pages until Cloudflare
DNS is changed. The VPS needs a valid origin certificate and an HTTPS Nginx
block before cutover. Confirm Cloudflare can validate the origin, then update
the apex and `www` records, verify IPv4/IPv6 and all key routes over HTTPS,
and only then retire GitHub Pages. Do not infer DNS cutover from an origin-only
`curl --resolve` check.
