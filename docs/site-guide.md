# GitHub Business Atlas

## Open

Open `../index.html` directly in a modern browser. Keep the `assets/` and `docs/` directories beside it. Offline reading needs no build step, runtime package dependency, analytics, or server. Cloudflare deployment uses the separate build tooling described in [deployment.md](deployment.md).

The page includes fifteen chapters. Alongside the original business overview, it now presents account and activity growth, six platform roles, expanded international competition, Chinese developers and global collaboration, an interactive Jevons example, and conditional industry scenarios.

## Interaction

- Use the chapter navigation or scroll through the presentation.
- Select timeline years and pricing categories. Arrow keys, Home, and End work when a tab has focus.
- Read the China chapter as a continuous five-part narrative. Its platform comparison, historical policy context, and sampling methods expand through native disclosures, including without JavaScript.
- Adjust the Jevons sliders to compare a hypothetical spending index against a baseline of 100. This is arithmetic, not measured GitHub performance or a revenue forecast.
- Filter the product map by business category.
- Replay the relationship diagram and AI delivery sequence.
- Use the header control to disable animation. The page respects the operating system's reduced-motion preference.
- With JavaScript disabled, all timeline and pricing panels and the China narrative remain readable, and the Jevons example keeps its static 50% unit-cost / 3× usage illustration.

## Research boundaries

Seventeen research files cover the two research phases: chapters 01–15, `README.md`, and `sources.md`. The research snapshot date is November 9, 2026. Website integration preserves these supplied files unchanged, including the second phase's additions to the index and sources.

The presentation is an independent synthesis of those files, not an official GitHub publication or a new fact-check. Historical run-rate is not current annual revenue, total users are not paying users, and financial growth signals do not establish standalone profitability. Consult current primary sources before purchasing products or relying on organizational or legal details. The second phase uses selected X posts, not representative polling. It also mixes historical metric scopes and subjective scenario weights; the site retains these limitations and does not infer a 100× PR increase, paid conversion from different months, completed disputed acquisitions, or Jevons causality from activity growth alone.

## Files

- `../index.html`: all presentation content and accessible markup.
- `../assets/styles.css`: layout, design tokens, responsive styles, and animations.
- `../assets/app.js`: tabs, product filters, the Jevons calculator, animation controls, navigation, and reading progress.
- `../package.json`: authoritative release version.
- `../scripts/sync-version.mjs`: generates the version label in the root HTML without a runtime fetch.
- `../assets/favicon.svg`: local branch mark, not an official GitHub logo.
- `../tests/verify.py`: dependency-free document, link, anchor, and ARIA checks.
- `../tests/browser.cjs`: browser smoke checks using an existing Playwright installation.

## Verify

Run from the project root:

```bash
python3 tests/verify.py
node --check assets/app.js
NODE_PATH=/path/to/existing/node_modules node tests/browser.cjs
```

The browser suite requires an existing `playwright` module and its Chromium headless browser. It opens the local `file://` page and checks tabs, keyboard navigation, filters, replay, animation controls, reduced motion, risk disclosures, chapter links, no-JavaScript reading, overflow at 320, 390, 768, 1024, and 1440 pixels, directory access in 400/500-pixel-tall desktop viewports, and Jevons calculations at increased, unchanged, reduced, fractional, and limit values. Screenshots are written to a new temporary directory printed by the test.

The source is tracked in the public `nocoo/how-github` repository. The production target is `https://github.hexly.ai`, served with Cloudflare Workers Static Assets. See [deployment.md](deployment.md) for tooling, the static publication boundary, and verification steps.
