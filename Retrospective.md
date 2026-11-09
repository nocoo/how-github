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

## 2026-11-09 — Distinguish edge transformations from source drift

The first production browser byte comparison found an additional Cloudflare Web Analytics script, although a curl response matched the uploaded HTML. The existing zone configuration injects the beacon for browser responses. Verification now identifies that exact Cloudflare script separately and compares the remaining authored HTML without changing zone-wide settings. Static files are still compared byte for byte. The zone WAF also returns 403 for probes such as `/.git/config`; production boundary checks must accept explicit edge denial as well as an asset 404, without treating either as published content.

The local resolver also retained an NXDOMAIN result from the pre-deployment check. Authoritative DNS and public DNS-over-HTTPS already resolved the new domain. An isolated browser used the verified public IP while the local negative cache expired; no system DNS, certificate, or trust settings were modified.

## 2026-11-09 — Keep synthesis as precise as its calculations

Review of the second research integration caught two compressed statements: both Chinese account and active-developer figures referred to GitHub, not different platform coverage; and a usage percentage increase cannot be compared directly with a unit-cost percentage decrease to establish spending rebound. The text now states the distinct dates and active definitions and uses the exact product threshold. A 50% unit-cost / 1.5× usage browser regression case confirms spending remains below baseline.

The review also restored historical trade-control context alongside the correction of a temporary access incident. Distinguish documented policy risk, operational incidents, and sample sentiment instead of collapsing them into one category.

## 2026-11-10 — Test expanded content inside narrative grids

Moving the China platform table into a native disclosure exposed a mobile grid minimum-size issue: the story body expanded to the table's intrinsic width instead of letting the inner table scroll. Setting the grid item's `min-width: 0` keeps overflow within the existing scroll region. Browser checks now expand all three disclosures at every supported width, exercise keyboard scrolling, and also open them without JavaScript.

The review also found that replacing tabs with closed disclosures hid material in print. The print stylesheet now makes native details content visible without opening it on screen or requiring JavaScript, and browser checks cover both media states.

When moving a working component into a new layout, test its expanded state, every ancestor's minimum sizing, and existing alternate views such as print; preserving the inner overflow rule alone is not sufficient.
