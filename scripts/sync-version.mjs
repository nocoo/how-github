import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";

const manifest = new URL("../package.json", import.meta.url);
const page = new URL("../index.html", import.meta.url);
const { version } = JSON.parse(readFileSync(manifest, "utf8"));
assert(/^\d+\.\d+\.\d+$/.test(version), "Expected a stable X.Y.Z package version");
const html = readFileSync(page, "utf8");
assert(html.includes("data-version>"), "Missing version display");
const updated = html.replace(/(data-version>)[^<]*(<\/span>)/g, `$1v${version}$2`);
if (updated !== html) writeFileSync(page, updated);
