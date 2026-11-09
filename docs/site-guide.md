# GitHub Business Atlas

## Open

Open `../index.html` directly in a modern browser. Keep the `assets/` and `docs/` directories beside it. There is no build step, runtime package dependency, CDN, analytics, or server requirement.

The page includes ten chapters, a business relationship diagram, a historical timeline, twelve filterable product capabilities, four pricing views, financial evidence, an AI delivery sequence, Microsoft ecosystem relationships, competition, risks, and source links.

## Interaction

- Use the chapter navigation or scroll through the presentation.
- Select timeline years and pricing categories. Arrow keys, Home, and End work when a tab has focus.
- Filter the product map by business category.
- Replay the relationship diagram and AI delivery sequence.
- Use the header control to disable animation. The page respects the operating system's reduced-motion preference.
- With JavaScript disabled, all timeline and pricing panels remain readable, while enhanced controls are hidden where appropriate.

## Research boundaries

The ten original research files were moved into this directory without changing their contents. Their snapshot date is November 9, 2026. `README.md` is the original research index; `sources.md` preserves source URLs, dates, and retrieval limitations.

The presentation is an independent synthesis of those files, not an official GitHub publication or a new fact-check. Historical run-rate is not current annual revenue, total users are not paying users, and financial growth signals do not establish standalone profitability. Consult current primary sources before purchasing products or relying on organizational or legal details.

## Files

- `../index.html`: all presentation content and accessible markup.
- `../assets/styles.css`: layout, design tokens, responsive styles, and animations.
- `../assets/app.js`: tabs, product filters, animation controls, navigation, and reading progress.
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

The browser suite requires an existing `playwright` module and its Chromium headless browser. It opens the local `file://` page and checks tabs, keyboard navigation, filters, replay, animation controls, reduced motion, risk disclosures, chapter links, no-JavaScript reading, overflow at 320, 390, 768, 1024, and 1440 pixels, and directory access in 400/500-pixel-tall desktop viewports. Screenshots are written to a new temporary directory printed by the test.

No Git repository was present when this presentation was created. No repository was initialized and no deployment was performed.
