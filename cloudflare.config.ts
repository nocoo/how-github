import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "how-github",
    compatibilityDate: "2026-11-09",
    domains: ["github.hexly.ai"],
    workersDev: false,
    previewUrls: false,
    assets: { notFoundHandling: "none" },
  },
});
