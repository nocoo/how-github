<p align="center"><img src="assets/favicon.svg" width="72" alt="How GitHub branch mark" /></p>
<h1 align="center">How GitHub</h1>
<p align="center">用一份可交互的商业图谱，理解 GitHub 如何连接开发者、企业、AI 和软件交付。</p>
<p align="center"><a href="https://github.hexly.ai">在线展示</a> · <a href="docs/README.en.md">English</a></p>

## 这是什么

一份中文静态研究展示，基于截至 **2026 年 11 月 9 日**的本地资料整理。无需安装即可离线阅读，也可部署为 Cloudflare Workers Static Assets 站点。

这是独立研究，不是 GitHub 或 Microsoft 官方页面。资料没有在网页制作期间逐项重新联网核验；历史年化营收不等于最新全年收入，总用户数不等于付费人数，增长信号不证明独立盈利。

## 功能

- 十五个章节：覆盖原有商业全景，并加入增长口径、六种平台角色、中国平台与社区、杰文斯悖论、行业情景。
- 商业关系连线、章节入场、图表与交付流程动画，支持重播和暂停。
- 可切换时间轴、四类定价和中国专题，十二项产品按业务类型筛选；杰文斯示例可调节单位成本与用量。
- 响应式目录、键盘操作、减少动态效果偏好；关闭 JavaScript 后仍可阅读主要内容。
- 十五篇研究章节加总览与来源索引，共十七份研究资料完整保留在 `docs/`。X 讨论仅呈现代表帖，行业情景权重为主观判断。

## 使用

克隆仓库，直接在浏览器打开根目录 `index.html`。请保持 `assets/` 和 `docs/` 与它相邻。本地阅读不需要 Node.js、包安装或开发服务器。

## 开发

构建和部署需要 Node.js **22.18+**、Bun **1.4.4** 和 Python 3。

```bash
bun install --frozen-lockfile
npm run dev
npm run build
```

版本以 `package.json` 为唯一来源，修改后运行 `npm run sync:version` 更新可离线显示的页首版本；构建也会同步，测试拒绝过期显示。

部署使用 `cf`，`wrangler.config.ts` 只是它调用的静态资源构建器配置。构建仅复制网页、资源和文档，不上传 `.git`、测试、依赖或本机凭据。没有应用后端、数据库或运行时框架依赖。

```bash
npm run deploy
```

部署前需通过 `bun run cf auth login` 登录，或在受控环境提供 Cloudflare API Token。配置中的发布目标为 `how-github` Worker 和 `github.hexly.ai`；请勿把 Token 提交到仓库。详见[部署说明](docs/deployment.md)。

## 测试

```bash
npm test
```

包含资料与链接校验、章节顺序与版本同步检查、JavaScript 语法检查和静态发布文件边界检查。浏览器测试另需可用的 Playwright 安装及 Chromium：

```bash
NODE_PATH=/path/to/existing/node_modules npm run test:browser
```

浏览器测试覆盖离线阅读、标签页、筛选、杰文斯计算与边界、键盘操作、动画控制、手机布局和矮屏目录。它不负责核实原始研究的真实性。

## 技术栈

HTML、CSS、原生 JavaScript、SVG；Python / Node.js 检查；Cloudflare `cf` CLI 与 Workers Static Assets。

## 文档

- [研究总览](docs/README.md)
- [来源清单](docs/sources.md)
- [页面使用说明](docs/site-guide.md)
- [部署说明](docs/deployment.md)

## 许可证

尚未指定开源许可证。公开源码不等于授予通用再分发或再许可权限；第三方商标和引用材料仍归各自权利人所有。
