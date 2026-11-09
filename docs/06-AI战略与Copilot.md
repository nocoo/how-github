# 06 · AI 战略与 GitHub Copilot

> 更新：2026-11-09（北京时间）｜ 标注规则同 [README](README.md)

## 1. 战略演进的四个阶段

| 阶段 | 时间 | 形态 | 标志 |
|---|---|---|---|
| ① 补全助手 | 2021–2023 | 编辑器内代码补全（OpenAI Codex 模型） | 2022 年起收费 $10/月 |
| ② Chat + 多模型 | 2024 | Copilot Chat；接入 Anthropic、Google 等模型；推出 Free 档 | 2024 年 Copilot 体量超过收购时的 GitHub |
| ③ 代理 + 平台 | 2025 | Agent mode、coding agent（指派 issue 后自动开 PR）、Agent HQ 接入第三方代理 | Universe 2025 |
| ④ 代理化交付系统 | 2026 | Copilot app、Fusion 多模型编排、projects 跨仓库、automations 自学习、code review Max、按量计费 | Universe 2026：“完成的工作才是产出，而不是更多的代码” |

## 2. 关键使用指标（官方）

| 指标 | 数值 | 时间 | 来源 |
|---|---|---|---|
| Copilot 用户 | 2,000 万 → 2,600 万 → **5,000 万** | 2025-07 → 2025-10 → 2026-07 | 微软电话会 |
| 月活用户中使用代理功能的比例 | **55%**（一年前 35%） | 2026 | Octoverse 2026 |
| Copilot 云端代理增长 | 同比 **+230%**（代理聊天 +85%） | 2026 | Octoverse 2026 |
| 代理发起的 PR | 9 月 1.1 亿个，占比 40%+（3 月 17%） | 2026-09 | Octoverse 2026 |
| 代理 PR 两周内合并率 | 90%（无代理参与的 PR 约 86%） | 2026-09 | Octoverse 2026 |
| 付费用户使用的模型数 | 5 月 29 个 → 9 月 47 个；单一模型请求占比不超过 25% | 2026 | Octoverse 2026 |
| 同时使用多个模型的用户 | 61% | 2026-09 | Octoverse 2026 |
| 使用过自动选模型的付费用户 | 63% | 2026-09 | Octoverse 2026 |
| 代理类 credit 消耗 | 按量计费上线后翻了一倍多 | 2026-10 | FY27 Q1 电话会 |
| MAI-Code-Flash 用户 | 300 万（上月） | 2026-10 | FY27 Q1 电话会 |
| Copilot 工作负载吞吐 | 年初以来提升 4 倍 | 2026-07 | FY26 Q4 电话会 |

> 口径差异：FY26 Q4 说“1/3 的 PR 涉及代理”，FY27 Q1 说“代理生成的 PR 占 1/3 以上”，Octoverse 说“40% 以上的 PR 以代理初稿开始”。三者口径不同（涉及/生成/发起，以及月份不同），**不可直接比较**。

## 3. 战略支柱

1. **多模型中立**：同时接入 Anthropic（Opus/Sonnet/Haiku/Fable）、OpenAI（GPT-5.x/6.x、Codex）、Google（Gemini）、xAI（Grok）、Moonshot（Kimi K3）和微软自研 MAI【官方，定价页模型列表】。这样可以压低对单一供应商的依赖，并通过 **Fusion** 路由控制成本。
2. **平台化（Agent HQ）**：不强求开发者用 Copilot 代理，第三方代理也在 GitHub 上运行，GitHub 赚的是平台、计算和审查环节的钱。
3. **闭环控制点**：Issue → 代理 → PR → **代码审查（Copilot code review）** → 安全扫描（GHAS）→ 合并 → Actions。2026 年官方反复强调“质量”和“审查”，因为 AI 让代码产出变得廉价，审查和验证变得稀缺。
4. **成本与定价**：2026-06 转向 token 计价，2026-10 推出席位 $0 的 Copilot access，把 Copilot 变成“GitHub 平台上的 AI 用量”，而不是一个独立订阅。
5. **数据**：从 2026-04-24 起，Free/Pro/Pro+ 的交互数据默认用于训练，用户可以关闭；Business/Enterprise 不受影响【官方】。这是为了获取真实交互数据来提升模型，但引发了信任争议（见 07）。

## 4. 产品形态对比（2026-11）

| 入口 | 能力 |
|---|---|
| IDE（VS Code、Visual Studio、JetBrains、Xcode、Eclipse、Vim/Neovim、Zed） | 补全、NES、Chat、Agent mode、MCP |
| github.com / Mobile | Chat、指派 issue 给 Copilot、代理面板、PR 审查 |
| Copilot CLI | 终端代理，支持程序化模式，Free 档也可用 |
| Copilot app（桌面） | 代理优先的统一工作台，支持 projects 和会话接续 |
| Slack / Teams | 在聊天工具里调用 |
| 第三方代理 | Claude、Codex 等（Pro+/Max 及企业档） |

## 5. 结论

- GitHub 的 AI 战略核心是“**做代理时代的操作系统和收费站**”，不靠在“谁的模型最强”上取胜。Copilot 同时扮演三种角色：自营代理（与 Cursor、Claude Code 正面竞争）、模型路由器（Fusion）、平台收费入口（credits）。
- 风险在于自营代理的竞争力。社区和媒体普遍认为 Copilot 在 2025–2026 年被 Cursor、Claude Code、Codex 抢走了心智（见 07），GitHub 的应对是“打不过就请进来”，并压低价格。
