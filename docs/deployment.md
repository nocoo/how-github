# Deployment

## Targets

- Repository: `nocoo/how-github` (public)
- Worker: `how-github`
- Custom domain: `github.hexly.ai`
- Platform: Cloudflare Workers Static Assets, without a user Worker script

The production domain is declared in `cloudflare.config.ts`. `workers.dev` and version preview URLs are disabled. Cloudflare manages the custom-domain DNS binding and TLS certificate as part of deployment.

## Build and publish

Use Node.js 22.18+, Bun 1.4.4, Python 3, and an authorized Cloudflare account:

```bash
bun install --frozen-lockfile
npm test
npm run build
bun run cf deploy --prebuilt --dry-run
bun run cf deploy --prebuilt --message "Describe the release"
```

Alternatively, `npm run deploy` runs checks, builds, and deploys. `cf` invokes the pinned Wrangler build implementation; do not deploy independently with Wrangler or add a legacy `wrangler.jsonc` configuration.

`wrangler.config.ts` calls `scripts/prepare-assets.mjs` and uses `dist/` as its assets directory. The script publishes only `index.html`, `README.md`, `assets/`, and `docs/`. Build output is written to `.cloudflare/output/v0/`. Neither generated directory is committed.

The site has no client-side routes requiring a catch-all. Unknown paths must return 404 rather than the homepage. Git metadata, local credentials, build configuration, tests, and dependencies are outside the static asset boundary.

## Authentication

Authenticate with `bun run cf auth login`, use the existing `cf` login/profile or a scoped `CLOUDFLARE_API_TOKEN`. Credentials are never stored in repository files or GitHub Actions for the initial manual deployment. Do not copy the CLI account cache into Git.

The CI workflow runs checks and a build dry run only. It does not publish to Cloudflare and needs no deployment credentials.

## Verify after publishing

- Confirm the remote `main` SHA matches the local published commit.
- Confirm CI completes successfully for that exact SHA.
- Check the custom domain over HTTPS and compare its HTML, CSS, JavaScript, and linked research files with the local source.
- Check unknown paths and repository-internal paths return 404.
- Open the production site in a browser and exercise navigation, a pricing tab, and product filtering.

Research content is a dated snapshot. Publishing does not constitute a new fact-check or a license grant.
