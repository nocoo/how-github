import { cpSync, mkdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = join(root, "dist");
rmSync(output, { recursive: true, force: true });
mkdirSync(output);
for (const name of ["index.html", "README.md", "assets", "docs"]) {
  cpSync(join(root, name), join(output, name), { recursive: true });
}
console.log("已准备公开网页、资源和文档；不包含仓库配置、测试或凭据。");
