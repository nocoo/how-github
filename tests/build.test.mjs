import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));

test("package only public files without changing their bytes", () => {
  execFileSync(process.execPath, [join(root, "scripts/prepare-assets.mjs")]);
  const output = join(root, "dist");
  assert.deepEqual(readdirSync(output).sort(), ["README.md", "assets", "docs", "index.html"]);
  for (const name of readdirSync(output, { recursive: true })) {
    if (!statSync(join(output, name)).isFile()) continue;
    assert.deepEqual(readFileSync(join(output, name)), readFileSync(join(root, name)), name);
  }
  const { version } = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
  const html = readFileSync(join(output, "index.html"), "utf8");
  assert.deepEqual([...html.matchAll(/data-version>([^<]+)<\/span>/g)].map(match => match[1]), [`v${version}`]);
  for (const name of [".git", ".cloudflare", ".env", "node_modules", "tests", "scripts", "package.json", "cloudflare.config.ts", "CHANGELOG.md"]) {
    assert(!readdirSync(output).includes(name), `${name} must not be published`);
  }
});
