# Changelog

## v1.0.1 — 2026-11-10

### Security

- Pin transitive dependencies via Bun overrides: `sharp` 0.35.5, `undici` 7.30.1, `zod` 4.6.6+.

## v1.0.0 — 2026-11-09

First versioned release; the earlier site was deployed without a package version, Git tag, or GitHub Release. Website integration is compared with research commit `02a7690`; the preceding website baseline is `cd6b895`.

### Added

- Integrate research chapters 09–15 into a fifteen-section presentation, with all seventeen research documents linked from the source library.
- Add developer-account history, regional comparisons, and explicit boundaries between accounts, activity, paid subscriptions, and financial outcomes.
- Present GitHub's six platform roles with evidence and counterarguments.
- Expand the international landscape across hosting, agents, application generation, and AI assets; distinguish Origin beta and internal Pando from generally available hosting products.
- Add Chinese platform comparisons and a separate X-discussion view with sampling limitations and source links.
- Add an interactive Jevons arithmetic example, three explicitly subjective industry scenarios, and six groups of follow-up indicators.
- Establish `package.json` as the authoritative version and generate the offline-compatible header label through `npm run sync:version` and asset builds.

### Validation

- Extend source, chapter-order, version, browser interaction, calculator, mobile, no-JavaScript, and publication-boundary checks.
- Preserve the supplied research documents unchanged; this release does not independently verify their external claims.
