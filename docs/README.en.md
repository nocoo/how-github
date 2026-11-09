<p align="center"><img src="../assets/favicon.svg" width="72" alt="How GitHub branch mark" /></p>
<h1 align="center">How GitHub</h1>
<p align="center">An interactive business atlas explaining how GitHub connects developers, enterprises, AI, and software delivery.</p>
<p align="center"><a href="https://github.hexly.ai">Website</a> · <a href="../README.md">简体中文</a></p>

## What it does

A Chinese-language static research presentation based on a local research snapshot dated **November 9, 2026**. Read it offline without installation or deploy it with Cloudflare Workers Static Assets.

This is independent research, not an official GitHub or Microsoft publication. Sources were not individually reverified online during page production. Historical revenue run-rate is not current annual revenue, total users are not paying users, and growth signals do not establish standalone profitability.

## Features

- Fifteen chapters extending the business overview with growth definitions, six platform roles, Chinese platforms and community, Jevons effects, and industry scenarios.
- Animated business connections, section entrances, charts, and delivery stages, with replay and animation controls.
- An interactive timeline, four pricing categories, two China-topic views, twelve filterable product capabilities, and a Jevons example with adjustable unit cost and usage.
- Responsive navigation, keyboard controls, reduced-motion support, and readable core content without JavaScript.
- Seventeen preserved research documents: fifteen numbered chapters, the overview, and the source index. X discussions are selected examples, and scenario weights are subjective judgments.

## Usage

Clone the repository and open the root `index.html` in your browser. Keep `assets/` and `docs/` beside it. Offline reading requires no Node.js, package installation, or development server.

## Development

Building and deployment require Node.js **22.18+**, Bun **1.4.4**, and Python 3.

```bash
bun install --frozen-lockfile
npm run dev
npm run build
```

`package.json` is the authoritative version. After changing it, run `npm run sync:version` to update the offline-compatible header label. Builds also synchronize it, and tests reject stale labels.

Deployment uses `cf`. `wrangler.config.ts` only configures the static asset builder invoked by `cf`. Builds copy only the presentation, assets, and documentation, not Git metadata, tests, dependencies, or local credentials. There is no application backend, database, or runtime framework dependency.

```bash
npm run deploy
```

Authenticate with `bun run cf auth login`, or provide a Cloudflare API Token in a controlled environment. The configured targets are the `how-github` Worker and `github.hexly.ai`. Never commit tokens. See the [deployment guide](deployment.md).

## Tests

```bash
npm test
```

Checks cover research and links, chapter ordering, version synchronization, JavaScript syntax, and the static publication boundary. Browser tests additionally require an existing Playwright installation and Chromium:

```bash
NODE_PATH=/path/to/existing/node_modules npm run test:browser
```

Browser checks cover offline reading, tabs, filters, Jevons calculations and boundaries, keyboard operation, animation controls, mobile layouts, and short desktop navigation. They do not verify the truth of the underlying research.

## Stack

HTML, CSS, vanilla JavaScript, and SVG; Python / Node.js checks; Cloudflare `cf` CLI and Workers Static Assets.

## Documentation

- [Research overview](README.md)
- [Source index](sources.md)
- [Presentation guide](site-guide.md)
- [Deployment guide](deployment.md)

## License

No open-source license has been selected. Public source visibility does not grant general redistribution or relicensing rights. Third-party trademarks and quoted material remain with their respective owners.
