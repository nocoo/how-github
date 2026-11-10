# How GitHub

## Project

- Public repository: `nocoo/how-github`.
- Production target: `https://github.hexly.ai`, Cloudflare Worker `how-github`.
- Chinese static research presentation, with no application backend or runtime dependencies.
- Keep root `index.html` readable through `file://`; do not introduce module imports, fetch-based content loading, CDNs, or a framework without a concrete requirement.
- The seventeen research files in `docs/` (01–15 plus the research index and sources) are a dated snapshot. Keep their source limitations and do not silently rewrite them while editing the presentation.
- The site has fifteen sections. Preserve cohort/date distinctions, X sampling limitations, and the difference between subjective scenarios and measured probabilities.
- `README.md` and `docs/README.en.md` describe the repository. `docs/README.md` remains the original research index.

## Commands

- Install tooling: `bun install --frozen-lockfile` (Node.js 26+, Bun 1.4.4).
- Checks: `npm test`.
- Browser checks: `NODE_PATH=/path/to/existing/node_modules npm run test:browser`; requires Playwright and its Chromium browser.
- Development: `npm run dev`.
- Version display: `npm run sync:version`, derived only from root `package.json`. Builds also generate the header label; tests reject stale labels.
- Build: `npm run build`.
- Deployment validation: `bun run cf deploy --prebuilt --dry-run` after a successful build.
- Authorized production deployment: `npm run deploy`.

## Deployment boundary

Use `cf`, not standalone Wrangler commands. `cloudflare.config.ts` defines the Worker and domain. `wrangler.config.ts` is the build implementation configuration consumed by `cf`.

Only `index.html`, `README.md`, `assets/`, and `docs/` belong in `dist/`. Never publish the repository root as the assets directory. Git metadata, tests, local credentials, and `.cloudflare` caches must remain outside the upload.

Release notes live in root `CHANGELOG.md`. Publish matching `vX.Y.Z` Git tags and GitHub Releases at the verified release commit when authorized. There is no `/api/live` backend; do not introduce one solely for version display.

The CI workflow checks and builds without credentials; it does not deploy. Do not claim CI, production, full accessibility, security, or research verification from narrower local checks. Deployment and implementation retrospectives belong in root `Retrospective.md`.
