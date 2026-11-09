import { defineWranglerConfig } from "wrangler/experimental-config";

export default defineWranglerConfig({
  assetsDirectory: "./dist",
  build: {
    command: "node scripts/prepare-assets.mjs",
    watchDir: ["index.html", "README.md", "assets", "docs"],
  },
  types: { generate: false },
});
