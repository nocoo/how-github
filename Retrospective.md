# Retrospective

## 2026-11-09 — Preserve evidence scope in presentation copy

The first presentation draft compressed several research qualifications too aggressively: total Copilot users could be read as non-paying users; Cloud-specific entitlements were mixed with Server; and search-summary evidence was described simply as financial transcripts. Independent review caught these issues before delivery. Pricing notes were also expanded to retain public-resource exceptions and private-repository review compute charges.

For future research presentations, carry the population, date, billing boundary, and evidence quality alongside each headline number. A general disclaimer does not replace a qualification at the claim itself.

## 2026-11-09 — Wait for browser preference events

The first browser check asserted reduced-motion state immediately after changing the emulated media preference. The browser dispatches the preference change asynchronously, so the assertion raced the application event handler. The test now waits for the observable document state before checking controls and active animations.

For future browser tests, synchronize with the resulting DOM or browser state rather than assuming an emulation command has already dispatched all related events.

## 2026-11-09 — Check the quiet text, not just headings

An automated accessibility check found the muted text token just below the 4.5:1 contrast threshold on the paper background, and source links distinguished only by color. Darkening the shared token and restoring underlines fixed the issues throughout the presentation.

A follow-up mobile check also found that horizontally overflowing pricing tables lacked keyboard focus. The scroll containers now have an accessible region name and a tab stop; the browser suite verifies arrow-key scrolling.

Validate shared text tokens against every surface, including tinted cards, keep a non-color cue for links inside prose, and make overflow containers keyboard-operable.

## 2026-11-09 — Responsive means height as well as width

The second review reproduced unreachable lower chapter links in short desktop viewports because the fixed sidebar could not scroll vertically. The sidebar now has vertical overflow handling, and browser checks cover both 400- and 500-pixel viewport heights.

Test fixed navigation against constrained viewport height, not only mobile widths.

## 2026-11-09 — Keep deployment tooling portable

The first deployment instructions assumed a globally installed `cf`, although only project tooling was listed as a prerequisite. Review caught this before publication; standalone commands now use `bun run cf`, while package scripts resolve local binaries normally.

The approved package mirror also emitted machine-specific tarball URLs into the newly generated Bun lockfile. Those generated URLs were normalized to registry-relative entries while preserving versions and integrity hashes; a frozen installation then completed without changes. Do not publish machine-specific registry URLs or assume a clean checkout inherits the author's global CLI.
