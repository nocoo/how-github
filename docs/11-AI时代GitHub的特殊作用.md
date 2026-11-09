# 11 · AI 时代 GitHub 的特殊作用

> 更新：2026-11-09（北京时间）｜ 第二期补充 ｜ 标注规则同 [README](README.md)，【X】= X 公开帖子。
> 核心命题：**“所有人都在用 AI，AI 写的代码需要个地方存。”** 本章检验这个命题，并把 GitHub 在 AI 时代扮演的角色拆成六个，逐一给证据和反证。

## 1. 六种角色一览

| # | 角色 | 一句话 | 关键证据 | 强度【推断】 |
|---|---|---|---|---|
| R1 | **代码落盘点（system of record）** | AI 产出的代码最终要 commit、push、merge 到某处 | 2026 年 push 179 亿次，超过 2024+2025 之和；6 月起约 55% 的 commit 来自全新仓库 | 强 |
| R2 | **代理的工作台与控制面** | 代理在 issue/PR/Actions 里领任务、跑测试、等审查 | 2026-09 超过 40% 的 PR 由代理起草；Agent HQ 接入 Claude、Codex | 强，但被 Cursor/OpenAI 争夺 |
| R3 | **训练语料与评测基准** | 模型从 GitHub 学写代码，也用 GitHub issue 考试 | SWE-bench 的 2,294 道题来自 12 个 GitHub 仓库的真实 issue/PR；Doe v. GitHub 诉讼 | 强（历史资产），但不直接变现 |
| R4 | **分发与声誉层** | star、trending、贡献图是 AI 项目“出圈”的度量衡 | DeepSeek-V3 两个月 star 超过 OpenAI 最热项目；FlashMLA 一天 8.2k star | 强，但被刷 star 侵蚀 |
| R5 | **审查与信任层** | 人类在 PR 里决定“合不合” | 代理 PR 合并率 2026-09 达 90%（对照组约 86%）；审查成为瓶颈 | 正在变成核心 |
| R6 | **安全与治理层** | 秘密扫描、依赖、代码扫描给 AI 代码兜底 | GHAS 收入同比 +50% 以上（FY27 Q1） | 变现最清晰 |

## 2. 命题检验：“AI 写的代码需要个地方存”

### 2.1 支持证据

| 证据 | 数字 | 来源 |
|---|---|---|
| 新仓库爆发 | 2025 年新增 1.21 亿仓库，总数 6.3 亿 | 【官方/媒体】Octoverse 2025 |
| 新仓库贡献大部分 commit | 2026-06 起约 55% 的 commit 来自全新仓库 | 【官方】Octoverse 2026 |
| 带代理配置的仓库更“能写” | 2026 年新建仓库中，有代理配置文件的平均 commit 数是没有的 **8 倍** | 【官方】Octoverse 2026 |
| 写入量 | 12 个月 push 179 亿次；commit（公开+私有）343 亿个，是两年前的 3 倍以上；合并 PR 13 亿个，增长 3 倍以上 | 【官方】Octoverse 2026 |
| 单仓库压力 | 最繁忙仓库单月约 10 亿次请求，GitHub 正解耦计算与存储重建存储层 | 【X】@kdaigle ❤661 👁13.6 万 https://x.com/kdaigle/status/2107626308351979597 |
| 面向代理的存储 | 新架构内部测试：单仓库 5,000 个并发代理、每秒 7,200 次 push | 【官方】github.blog “Inside GitHub's new Git storage architecture”；【X】@github ❤1.1k https://x.com/github/status/2118830274431873379 |
| LLM SDK 渗透 | 2025 年约 110 万公开仓库使用 LLM SDK，同比 +178% | 【媒体】Octoverse 2025 转述 |
| 社区直觉 | “2025年GitHub新增1.21亿个代码仓库，App Store提交量暴涨84%” | 【X】@fankaishuoai ❤136 https://x.com/fankaishuoai/status/2051473797673553947 |

中文社区里，“让 AI 直接发布到 GitHub”已经成了日常操作：
- @vista8（13.8 万粉丝）❤87：“把某某 skill，用Github cli发布到github…等一会儿，Github就地址就有了。” https://x.com/vista8/status/2009678331281838245
- @kevinma_dev_zh：告诉代理连接 GitHub，它会自动安装 gh CLI 并引导授权 https://x.com/kevinma_dev_zh/status/2015307780241117371
- @chrysanthemumXX ❤876：一个同时支持 Qwen Code、Kimi Code、Trae 等的 Skill 仓库 https://x.com/chrysanthemumXX/status/2115646509312356851

### 2.2 反证与限制

| 反方论点 | 说明 | 来源 |
|---|---|---|
| **存储本身是商品** | Git 是分布式的，任何人都能托管；Cursor Origin 带“GitHub 实时同步”，迁移成本在下降 | 【官方】Cursor changelog；【推断】 |
| **AI 代码很多是一次性的** | 大量 vibe coding 产物从不 push，或 push 后再无人维护；仓库数增长 ≠ 价值增长 | 【推断】 |
| **增长指标被代理“灌水”** | 13 亿个合并 PR、343 亿个 commit 中有多少是代理反复提交、自动化格式化，GitHub 未披露 | 【推断】 |
| **AI 资产不在 GitHub** | 模型权重和数据集在 Hugging Face（300 万+ 模型）和魔搭（17 万模型） | 【媒体】 |
| **代理可能不需要 GitHub 的人类界面** | “GitHub is excellent for human developers. But when it comes to AI agents, the experience becomes awkward.” | 【X】@UseGitHud https://x.com/UseGitHud/status/2082718177700770028 |
| **可靠性跟不上** | Actions 2026-05 一个月三次重大故障；Ghostty、Zig、Gentoo 出走 | 【X】@LinuxHandbook ❤63 https://x.com/LinuxHandbook/status/2059315578477920586 ；@mitchellh ❤16.5k |
| **一部分社区拒收 AI 代码** | Codeberg 2026-07-22 投票禁止主要由 AI 生成的项目 | 【X】@AlternativeTo |
| **模型可能改变存储形态** | Entire 主张把代理会话上下文（Checkpoints）随 commit 存档——“仓库”本身在扩容为“代码 + 上下文” | 【官方】entire.com；【X】@ashtom |

### 2.3 结论【推断】

“AI 写的代码需要个地方存”**作为方向是对的，但作为护城河是不够的**：
- 需求端确定性高：写入量 2 年 3 倍，代理 PR 占比半年从 17% 到 40%。
- 但“存”这件事的价值在被稀释——**Git 的分布式本质 + 同步工具**让存储迁移变容易。
- GitHub 真正的不可替代性来自**“存在这里的代码被谁看见、被谁审查、被谁信任”**：R4（分发声誉）+ R5（审查）+ R6（安全）。也就是说，AI 时代 GitHub 的价值从“仓库”迁移到了“仓库周围的社会与治理网络”。

## 3. R2 细看：代理的工作台

- 【X/官方】@mariorod1（GitHub 产品负责人）2025-10-28：“GitHub is your favorite coding agent's favorite platform” https://x.com/mariorod1/status/1983213355470070060
- 【X】@burkeholland ❤78：Universe 2025 上 Mike Krieger（Anthropic）称“Claude is now a native collaborator with Agent HQ” https://x.com/burkeholland/status/1983207737845600573
- 【X/官方】@kdaigle 2026-02-04：Claude Code 与 Codex 在 Pro+/Enterprise 中通过 Agent HQ 提供 https://x.com/kdaigle/status/2019101467119087905
- 【X】@svenfly8：“github-mcp-server… turns GitHub itself into something AI agents can actually use” https://x.com/svenfly8/status/2041442083911942301
- 【官方】Octoverse 2026：Copilot cloud agent 同比 +230%（agent chat +85%）；Copilot 月活中 55% 使用代理功能（一年前 35%）。

【推断】GitHub 的策略是“**做代理的机场，而不是只做一家航空公司**”。只要 Claude Code、Codex、Devin 的产出仍然以 PR 形式落在 GitHub，L2 输掉一部分份额并不致命；真正的危险是 Cursor Origin / OpenAI 平台把“机场”也一起建了。

## 4. R4 细看：声誉与分发

- 【媒体】澎湃/IT之家 2025-02-07：DeepSeek-V3 star 7.82 万，超过 OpenAI 最热项目 Whisper（7.58 万）。
- 【X】@manateelazycat（5.4 万粉丝）❤216 👁4.5 万：“FlashMLA… GitHub Star一天破8.2k… DeepEP，1小时1000+星，AI圈炸了。” https://x.com/manateelazycat/status/1894336251668697276
- 【X】@vista8 ❤112：“对真正的程序员高手来说，Github的Star激励太强了” https://x.com/vista8/status/2011468462913462599
- 【X】@CryptoDoggyCN ❤117：学生项目 BettaFish 冲上 trending、2 万 star 后获陈天桥投资 https://x.com/CryptoDoggyCN/status/2030818268295102943
- **侵蚀**：
  - 【X】@TechFlowPost ❤15：引 CMU ICSE 2026 论文称 GitHub 上约 600 万颗可疑假 star、涉及 1.86 万个仓库，AI/LLM 项目是最大的非恶意刷星类别，78 个曾上 trending（**论文数字待核实**）https://x.com/TechFlowPost/status/2046433245164957754
  - 【X】@LuoSays：“凡是有排行榜的地方，就一定有灰色产业” https://x.com/LuoSays/status/1874968983884935418
  - 【X】@dabit3 ❤506：Fabricate 可伪造 GitHub 人设与提交历史 https://x.com/dabit3/status/1995316855896986075
  - 【X】@seclink ❤334：对中文名仓库“KPI 产品”的不信任 https://x.com/seclink/status/1851960563682939157

【推断】star 是 AI 时代的“注意力货币”，GitHub 是唯一的“央行”。货币超发（刷 star、AI 生成的提交历史）是 GitHub 必须治理的系统性风险。

## 5. R5 细看：审查成为新瓶颈

- 【官方】Octoverse 2026：2 月代理参与的 PR 两周内合并率 83%（对照约 86%），9 月代理 PR 达 90%（对照约 86%）；代理 PR 约 87% 改动多个文件（对照 79%）。
- 【X】@siyaaaamak：“GitHub saw 43M PRs merged per month last year, and over 1M were authored by AI agents… reviewer time and incentives have not changed.” https://x.com/siyaaaamak/status/2024394376349208962
- 【X】@kelvin_sznx：“AI agents are generating code faster than engineering teams can review it.” https://x.com/kelvin_sznx/status/2099930468023967785
- 【X】@peaklabs_dev（Coolify 维护者）❤237：发布“Anti Slop” GitHub Action 自动关闭垃圾 PR https://x.com/peaklabs_dev/status/2022787697073381852
- 【X】@kondoyuko：Universe 2026 闭幕主题演讲讨论 AI slop 与维护者保护 https://x.com/kondoyuko/status/2116110645427126443

【推断】**审查是 AI 时代唯一不随算力线性扩张的环节**，谁掌握审查工作流（PR、code review、合并门禁、审计记录），谁就掌握“AI 代码进入生产”的海关。这是 GitHub 相对 IDE 型对手最大的结构性优势。
