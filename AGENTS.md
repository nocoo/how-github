# How GitHub

## Project

- Public repository: `nocoo/how-github`.
- Production target: `https://github.hexly.ai`, Cloudflare Worker `how-github`.
- Chinese static research presentation, with no application backend or runtime dependencies.
- Keep root `index.html` readable through `file://`; do not introduce module imports, fetch-based content loading, CDNs, or a framework without a concrete requirement.
- The ten original research files in `docs/` are a dated snapshot. Keep their source limitations and do not silently rewrite them while editing the presentation.
- `README.md` and `docs/README.en.md` describe the repository. `docs/README.md` remains the original research index.

## Commands

- Install tooling: `bun install --frozen-lockfile` (Node.js 22.18+, Bun 1.4.4).
- Checks: `npm test`.
- Browser checks: `NODE_PATH=/path/to/existing/node_modules npm run test:browser`; requires Playwright and its Chromium browser.
- Development: `npm run dev`.
- Build: `npm run build`.
- Deployment validation: `bun run cf deploy --prebuilt --dry-run` after a successful build.
- Authorized production deployment: `npm run deploy`.

## Deployment boundary

Use `cf`, not standalone Wrangler commands. `cloudflare.config.ts` defines the Worker and domain. `wrangler.config.ts` is the build implementation configuration consumed by `cf`.

Only `index.html`, `README.md`, `assets/`, and `docs/` belong in `dist/`. Never publish the repository root as the assets directory. Git metadata, tests, local credentials, and `.cloudflare` caches must remain outside the upload.

The CI workflow checks and builds without credentials; it does not deploy. Do not claim CI, production, full accessibility, security, or research verification from narrower local checks. Deployment and implementation retrospectives belong in root `Retrospective.md`.
