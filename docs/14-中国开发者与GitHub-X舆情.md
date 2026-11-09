# 14 · 中国开发者与 GitHub：X 舆情与使用观察

> 更新：2026-11-09（北京时间）｜ 第二期补充（独立中国专题）｜ 标注规则同 [README](README.md)，【X】= X 公开帖子，互动为抓取时快照（❤点赞 / 👁浏览）。

## 0. 方法与代表性边界（先读）

- **数据**：X 官方全量检索（search_posts_all，按相关性排序），中英文关键词约 65 组查询，时间跨度 2023–2026-11，重点 2025–2026；人工阅读、去重后保留有信息量的帖子。
- **偏差**：
  1. X 在中国大陆需翻墙才能访问，**样本天然偏向“能翻墙、关注海外工具、偏技术/偏自由派”的中文用户**，以及海外华人、台港用户；不代表全部中国开发者（V2EX、知乎、掘金、B 站、微信公众号均未覆盖）。
  2. 中文技术 KOL 帖子多为“工具推荐/搬运”，互动高但观点少；带情绪的帖子往往互动低。
  3. 相关性排序不是随机抽样，**下文的情绪分布是“代表帖的定性归类”，不是统计意义上的比例**。
- **结论强度**：适合判断“有哪些主流叙事、哪些叙事声量最大”，不适合推断“百分之多少的中国开发者如何看 GitHub”。

## 1. 一页结论

| # | 观察 | 证据强度 |
|---|---|---|
| 1 | **GitHub 是中国开发者“离不开但够不着”的基础设施**：访问慢/被墙是持续痛点，但没有人认真讨论“放弃 GitHub”——讨论的是怎么更顺畅地访问它 | 强 |
| 2 | **相比 Claude、ChatGPT，GitHub/Copilot 被视为“对中国人最友好的美国 AI 入口”**：不封号、国内 Visa 卡可付、学生包可用学信网认证 | 强 |
| 3 | **中国开源 AI 把 GitHub 当“全球发布台”**：DeepSeek star 超 OpenAI、FlashMLA 一天 8.2k star 等事件成为民族自豪叙事 | 强 |
| 4 | “**中国卷开源、美国卷闭源**”是高频叙事，但同时存在“开源退潮/反蒸馏”的反向声音 | 中 |
| 5 | 对 GitHub 的担忧集中在**制裁/封号的不确定性**，2025-04 的 19 小时“误封”是一次集体应激 | 强 |
| 6 | 对国产平台（Gitee、GitCode）的口碑明显负面：审核、搬运、下线、泄露 | 强 |
| 7 | 社区内部有自省：刷 star、“KPI 开源”、照抄开源项目 | 中 |

## 2. 情绪分类（代表帖）

### 2.1 正面：GitHub 是“精神家园”与“性价比 AI 入口”

| 日期 | 账号（粉丝） | 互动 | 要点 | 链接 |
|---|---|---|---|---|
| 2023-05-17 | @v3tianyi | ❤73 👁2.2 万 | 引 2019 年文章 *People Die, but Long Live GitHub*，谈 GitHub 对中文互联网的意义 | https://x.com/v3tianyi/status/1658870074315526144 |
| 2026-01-22 | @real_kai42（3.9 万） | ❤345 👁7.8 万 | “领了永久免费的 github pro，因为开源项目的贡献有免费的 github copilot 🤠 舒服了” | https://x.com/real_kai42/status/2014202339205562783 |
| 2026-08-27 | @huoshan007（11.6 万） | ❤427 👁6.3 万 | 学信网《学籍在线验证报告》可以申请 GitHub 学生包 | https://x.com/huoshan007/status/2092878264289165486 |
| 2026-08-29 | @Suu766（6.4 万） | ❤229 👁3.4 万 | 同上，国内大学生认证学生包攻略 | https://x.com/Suu766/status/2093637771076194662 |
| 2026-04-24 | @Harold_W_Chen | ❤2 | GitHub Education 重新申请成功，有效期 2 年 | https://x.com/Harold_W_Chen/status/2047513570578173980 |
| 2026-04-22 | @Suke_Meu | ❤1 👁2.7k | “claude封号, codex需要海外信用卡… 遇到复杂的问题用github copilot来调用opus” | https://x.com/Suke_Meu/status/2046840341576441909 |
| 2026-04-15 | @VinceZcrikl | ❤7 👁1 万 | Claude 要身份验证后，“GitHub Copilot 是一个不错的选择，主流模型都有” | https://x.com/VinceZcrikl/status/2044345299452530906 |
| 2026-04-14 | @sharkingrok | ❤4 | 学生包免费用，Copilot Pro 每月 10 美元“最具性价比” | https://x.com/sharkingrok/status/2044019545879523619 |
| 2025-10-29 | @FradSer（1.1 万） | ❤8 | Copilot 新的 agent web 控制台“目前最好用并且最好看”，Pro 10 刀开始有性价比 | https://x.com/FradSer/status/1983385498140979374 |
| 2026-10-26 | @LangRuo404 | ❤10 | “Github、X、ChatGPT都能长期使用且不封号”，对比 Anthropic | https://x.com/LangRuo404/status/2114537816621555967 |
| 2026-10-11 | @Linkc | ❤4 | Claude 封号后推荐 Cursor 等替代 | https://x.com/Linkc/status/2109286994589446447 |
| 2025-11-10 | @mitking | ❤9 👁8.5k | 用国内 Visa/Mastercard 经 Google Play 订阅海外 AI | https://x.com/mitking/status/1987713514572820823 |

### 2.2 负面：墙、封号、制裁与计费变化

| 日期 | 账号（粉丝） | 互动 | 要点 | 链接 |
|---|---|---|---|---|
| 2024-02-21 | @h5LPyKL7TP6jjop（39.6 万） | ❤644 👁10.3 万 | “正在引领全球变革的AI工具，中国一个都用不了… 微软的Copilot，用不了” | https://x.com/h5LPyKL7TP6jjop/status/1760140229074407436 |
| 2023-04-19 | @xinwendiaocha（64.1 万） | ❤76 👁4.2 万 | 新闻联播播报“我国开源软件开发者数量突破800万”时，画面里 GitHub clone 失败、pip 因防火墙安装失败 | https://x.com/xinwendiaocha/status/1648561825313693696 |
| 2026-02-24 | @gkxspace（6.1 万） | ❤1,007 👁35.3 万 | 用 X、Claude、ChatGPT、GitHub“都需要”正确的代理分流规则，否则容易被封 | https://x.com/gkxspace/status/2026271966609518713 |
| 2026-06-11 | @vanivani1145 | ❤493 👁3.3 万 | 罗列国内访问 GitHub 的各种翻墙办法 | https://x.com/vanivani1145/status/2064937848491606247 |
| 2026-10-23 | @auspiceshirley | ❤234 👁2.5 万 | PCL（Minecraft 启动器）作者 GitHub 账号被封；提及 GKD“GitHub 开源，禁止国内宣传”、李跳跳等先例 | https://x.com/auspiceshirley/status/2113711645470179366 |
| 2026-01-02 | @Michael47313603 | ❤2 | 骂了一个“反华账号”后被立即封号，几个月才申诉回来，质疑 GitHub 双标 | https://x.com/Michael47313603/status/2007033282014372244 |
| 2024-10-24 | @BeiyanNa3AlF6 | ❤23 | GitHub 因美国出口管制制裁伊朗，“世界应该是这个样子吗” | https://x.com/BeiyanNa3AlF6/status/1849265255123390685 |
| 2024-10-24 | @Kotomin96211022 | ❤5 | “国内github被墙也根本没法出声” | https://x.com/Kotomin96211022/status/1849526817763491988 |
| 2026-05-01 | @qinbafrank（16.5 万） | ❤31 👁4.8 万 | Copilot 2026-06-01 起转按量计费，“实质性涨价” | https://x.com/qinbafrank/status/2050024785707680125 |
| 2026-05-31 | @cat88tw | ❤30 | “再會了 copilot！謝謝你過去兩年帶來的不限量吃到飽” | https://x.com/cat88tw/status/2060962596925448570 |
| 2026-10-04 | @noahduck283（2.5 万） | ❤13 | 新手体验：全英文界面、连不上仓库、图片裂开 | https://x.com/noahduck283/status/2106749691845357771 |

### 2.3 矛盾/务实：依赖与对冲并存

| 日期 | 账号 | 互动 | 要点 | 链接 |
|---|---|---|---|---|
| 2025-10-22 | @leirenwangz | ❤6 | “如果真的可以限制开源，美国把GitHub关掉就足够威慑了” | https://x.com/leirenwangz/status/1980954706936750407 |
| 2026-01-25 | @jianglibo（3.8 万） | ❤1 | 用 ansible 替代 Actions，“GitHub倒闭也好，收费也好，我不受任何影响” | https://x.com/jianglibo/status/2015356140683706557 |
| 2026-01-02 | @hulitw | ❤24 | 设想用 GitHub + Actions 做“半永续的免费部落格平台吧，GitHub 不倒的话” | https://x.com/hulitw/status/2007047776518160821 |
| 2026-04-04 | @vonmyhaha | ❤21 | 2FA 都搞不定就别用 GitHub，“国内有替代站Gitee，用手机号短信验证就行了” | https://x.com/vonmyhaha/status/2040261607155253745 |
| 2025-11-23 | @Goupenguin（6.7 万） | ❤16 👁1.8 万 | “Github上的老外说，中国的开发者特别注重隐私，他们从来不用真实ip地址登录github🤣” | https://x.com/Goupenguin/status/1992476677285576895 |

**定性归类**【推断】：在本次精读的约 60 条中文代表帖中，“访问与工具”类（中性偏负）最多，“Copilot/学生包福利”类（正面）互动最高，“封号/制裁担忧”类（负面）情绪最强；**几乎没有“应当离开 GitHub”的主张**。这与英文圈形成鲜明对比——英文圈的高互动负面帖是“离开 GitHub”（Ghostty ❤16.5k、Zig、Gentoo），中文圈的负面是“够不着 GitHub”。

## 3. 关键事件：2025-04-12/13 “GitHub 封中国 IP”

| 时间（北京时间） | 事件 | 来源 |
|---|---|---|
| 2025-04-13 凌晨起 | 大陆用户无法访问，传言 GitHub 主动封锁中国 IP | 【X】@williamlong（37.5 万粉丝）❤816 👁57.6 万：“Github把中国地区的IP封了… 中国开发者（含香港）在GitHub全球用户数量规模排名第三，且当前活跃率居全球第一” https://x.com/williamlong/status/1911316560922235004 |
| 同日 | “双向断联” 叙事 | 【X】@ProjectHekaton ❤9 👁1.2 万 https://x.com/ProjectHekaton/status/1911351713920860578 |
| 同日 | GitHub status：一项配置变更造成意外影响，**未登录**的中国用户暂时无法访问，已登录用户不受影响；影响自 2025-04-12 20:01 UTC 至 04-13 14:55 UTC（北京时间 04-13 04:01–22:55），已回滚 | 【X】@geekbb ❤90 👁5.2 万 https://x.com/geekbb/status/1911561644666462571 、@BG7ZDQ ❤36 👁3 万 https://x.com/BG7ZDQ/status/1911451024495124810 |
| 04-14 | “纯属Bug… 不少人紧急搬运项目回国” | 【X】@gefei55 https://x.com/gefei55/status/1911572433896915250 ；@Blind___Gamer（14.3 万）“乌龙一场” https://x.com/Blind___Gamer/status/1911688932649292202 |

【推断】这次事件的舆情价值在于：**一条乌龙就能在一天内触发近 60 万浏览的恐慌**，说明中国开发者对“GitHub 断供”的风险定价很高，但真正的迁移行为很少（事件后没有观察到持续的迁移讨论）。

## 4. AI 时代：中国开源把 GitHub 当“全球舞台”

| 日期 | 事件 | 来源 |
|---|---|---|
| 2025-02-07 | DeepSeek-V3 star 7.82 万，超过 OpenAI 最热项目 Whisper（7.58 万）；DeepSeek-R1 紧随其后 | 【媒体】澎湃、IT之家 |
| 2025-02-25 | “FlashMLA… GitHub Star一天破8.2k… DeepEP，1小时1000+星，AI圈炸了” | 【X】@manateelazycat ❤216 👁4.5 万 https://x.com/manateelazycat/status/1894336251668697276 |
| 2025-04-28 | Qwen3 同时在 GitHub、Hugging Face、ModelScope 上线 | 【X】@oran_ge（18.9 万）❤72 https://x.com/oran_ge/status/1916976213111017963 |
| 2025-12-19 | “我们自己的中国人疯狂卷开源，而反观海外疯狂卷闭源！”（Qwen-Image-Layered） | 【X】@berryxia ❤80 👁1.1 万 https://x.com/berryxia/status/2002060720700338595 |
| 2026-03 | 学生项目 BettaFish 2 万 star 上 trending，获陈天桥投资 | 【X】@CryptoDoggyCN ❤117 https://x.com/CryptoDoggyCN/status/2030818268295102943 |
| 2026-07-28 | “HuggingFace 全球模型趋势榜前两名全是中国开源项目”（Kimi K3 权重、百度 Unlimited OCR） | 【X】@Pluvio9yte ❤67 👁8.9 万 https://x.com/Pluvio9yte/status/2082104586580746283 ；@zstmfhy ❤36 👁4.2 万 https://x.com/zstmfhy/status/2082029466193441024 |
| 2026-09 | OpenMAIC 半年 3.1 万 star | 【X】@Ryrenz ❤48 https://x.com/Ryrenz/status/2095929892047057221 |
| 2026-09-24 | qwen-image-2.1 本地部署教程 | 【X】@Pluvio9yte ❤4.5k 👁54.5 万 https://x.com/Pluvio9yte/status/2103147283290427900 （本次中文样本中互动最高的 AI 开源帖之一） |
| 2026-10/11 | DeepSeek 开源 DeepInfer，迅速突破 1.2 万 star（作者同时质疑其实用价值） | 【X】@AISuperDomain ❤16 https://x.com/AISuperDomain/status/2112762187940757992 ；@wfg8888 https://x.com/wfg8888/status/2118109786671624250 |

第三方数据佐证“中国开源模型崛起”：
- 【媒体/研究】ATOM Report（arXiv 2604.07190）：基于 HF 下载、衍生模型、推理市场份额等，中国开源模型在 2025 年中超过美国。
- 【研究】Zenodo 报告：2025 年底中国开源权重模型占 HF 下载 17%，美国 15.8%。
- 【媒体】MIT Technology Review 韩国版：Qwen 系列 2025、2026 年为 HF 下载最多的模型，累计下载超过 Llama。
- 【X】@lianyanshe（8.2 万）❤41：2026-04 第一周中国大模型周调用 12.96 万亿 token，是美国 3.03 万亿的 4.27 倍（**第三方数据，口径待核实**）https://x.com/lianyanshe/status/2044570162544951601

**推论**【推断】：中国 AI 公司的开源策略需要一个**全球中立、默认可信**的分发渠道。代码与推理框架选 GitHub，权重选 HF + 魔搭。这让“中国开源”在 AI 时代**比以往任何时候都更依赖 GitHub 的全球网络效应**——这是用户提出的“中国走向开源这条线，天然对 GitHub 更紧密”的最有力证据。

## 5. “中国开源 vs 美国闭源”：叙事与反叙事

| 立场 | 代表观点 | 来源 |
|---|---|---|
| 支持 | “中国人疯狂卷开源，海外疯狂卷闭源” | 【X】@berryxia |
| 支持（海外） | “PREDICTION - OPEN SOURCE AI WILL DOMINATE IN 2027… All the Chinese labs are collecting tons of high-quality agentic traces” | 【X】@bindureddy（39.4 万）❤193 https://x.com/bindureddy/status/2084839055586726272 |
| 支持（海外） | 中国开源权重模型削弱美国实验室的掌控力 | 【X】@Nicolas_Colin https://x.com/Nicolas_Colin/status/2104325376809820174 |
| 支持（海外） | “China is leading open-source AI in 2026”（蚂蚁 Ling-2.6-1T，MIT 协议） | 【X】@luqman_talks ❤51 https://x.com/luqman_talks/status/2089711514202915134 |
| 反对/修正 | “开源退潮、反蒸馏铁幕、卡脖子2.0的阵痛”——作者认为中国 AI 并未因此“凉” | 【X】@lianyanshe |
| 反讽 | “中国 AI 蒸馏美国 AI… 开源社区支持中国 AI… 中国开源AI转向闭源…” | 【X】@SydneyDaddy1（12.2 万）❤108 https://x.com/SydneyDaddy1/status/2073812826242916550 |
| 风险 | “美国把GitHub关掉就足够威慑了” | 【X】@leirenwangz |

**判断**【推断】：
1. “中国开源、美国闭源”**在模型权重层面基本成立**（Qwen/DeepSeek/Kimi/GLM 大量开源权重，OpenAI/Anthropic 前沿模型闭源），但**在代码与工具层面不成立**——美国依然是 GitHub 上开源工具与基础设施的最大贡献者（美国 3,830 万开发者，Octoverse 2026），OpenAI Codex CLI 等代理工具本身也是开源的。
2. 中国的开源更多是**商业与地缘策略**（以开源换生态、换全球采用），因此一旦出现“反蒸馏”、出口管制或商业化压力，开源力度可能回调（@lianyanshe 所谓“开源退潮”）。
3. 无论哪种走向，**GitHub 都是赢家**：开源越多，GitHub 上的中国项目越多；开源退潮时，GitHub 上的工具链与 agent 框架仍需全球协作。

## 6. 社区文化与自省

| 主题 | 代表帖 |
|---|---|
| 对中文仓库的不信任 | @seclink（3.2 万）❤334 👁11.5 万：看到中文名作者会先警惕“kpi产物，过时…” https://x.com/seclink/status/1851960563682939157 |
| 信息差与项目推荐 | @seclink ❤561 👁5.7 万：按“影响力和信息差”排序的开源项目清单 https://x.com/seclink/status/2059976049476124866 ；@bi_9527zx ❤623 👁6.2 万：46.2 万星的免费 API 仓库 https://x.com/bi_9527zx/status/2089212045845766521 |
| 国内外社区礼仪差异 | @manateelazycat ❤108 👁4.4 万：国外 issue/PR 一般以“Thank you”开头… https://x.com/manateelazycat/status/1920018066978832827 |
| 照抄与专利 | @WestZeroooo ❤23：“都等着别人开源然后抄然后在国内申请专利” https://x.com/WestZeroooo/status/2112875211204997464 |
| 刷 star | @manateelazycat：“居然连 Github 上的 Star 都有代刷”（引 2019–2024 年 600 万+ 假 star 研究）https://x.com/manateelazycat/status/2052308994346369366 ；@LuoSays https://x.com/LuoSays/status/1874968983884935418 |
| “中国特色”仓库 | ChinaTextbook 7.87 万 star（@_luckyj888 ❤85 https://x.com/_luckyj888/status/2087050974703898825 ）；中国软著申请模板（@ElliotChen ❤370 https://x.com/ElliotChen/status/1930101294871785822 ）；中国区 GitHub 用户排行榜（@HiTw93 ❤69 https://x.com/HiTw93/status/1961967630484754751 ）；程序员英语指南 1.6 万 star（@fhwofjow51260 ❤48 https://x.com/fhwofjow51260/status/2080269081899606225 ） |
| AI 一人公司 | @ilovek8s ❤829 👁8.7 万：“AI 一人公司技术栈” https://x.com/ilovek8s/status/1994954775725764837 |

## 7. 中文圈对 GitHub 竞品的反应

| 事件 | 代表帖 |
|---|---|
| Cursor Origin | @AYi_AInotes（8.1 万）❤79 👁2.1 万：“Cursor刚被SpaceX收购3天，就朝github的心脏捅了一刀” https://x.com/AYi_AInotes/status/2089521336095740032 ；@BirdTechVision ❤27 https://x.com/BirdTechVision/status/2089711412130234599 ；@indie_maker_fox 实测“其实不然” |
| Ghostty 出走 | @dotey ❤158 👁7.7 万 https://x.com/dotey/status/2049219569445732851 |
| 英伟达收购 HF | @Guomin184935 ❤37 👁1.9 万 https://x.com/Guomin184935/status/2095490893776318536 ；@ChainBeautyFaye https://x.com/ChainBeautyFaye/status/2095324540335427664 |
| GitHub 新存储架构 | 【媒体】IT之家、腾讯新闻 2026-11-08 报道“单个代码仓库支持 5000 个智能体同时协作” |

## 8. Octoverse 里的中国：数字与口径

| 指标 | 数值 | 来源 |
|---|---|---|
| 中国 GitHub 开发者（2026-09） | **1,240 万**，全球第三 | 【官方】Octoverse 2026 |
| 巴西（2026-09） | 1,020 万（新增 328 万），正在逼近中国 | 【官方】Octoverse 2026；【媒体】UOL：“Brasil encosta na China” |
| 印度（2026-09） | 3,200 万（新增约 1,000 万） | 【官方/媒体】 |
| 中国活跃开发者（《2025 中国开源年度报告》） | 210 万+，全球第三；含国产平台超过 350 万、全球第二 | 【媒体】转引 |
| “超过一千万、活跃率第一” | 引《2024中国开源发展现状》 | 【X】@williamlong（未核实原报告） |

【推断】中国在 GitHub 上的**绝对量仍大、相对份额下降**：印度、巴西靠 AI 时代的新人涌入快速追赶，而中国的新增受访问障碍、国产平台分流和人口结构影响。值得注意的是，**中国开发者在“高影响力 AI 开源项目”上的权重远高于其人数占比**（DeepSeek、Qwen、Kimi 等），这在 Octoverse 的人数口径里体现不出来。

## 9. 与美国开发者的对比【推断】

| 维度 | 中国（X 中文圈） | 美国/英文圈（X） |
|---|---|---|
| 主要痛点 | 访问（墙）、封号、支付 | 可靠性（故障）、AI 垃圾 PR、训练数据政策 |
| 高互动负面帖 | “够不着 GitHub” | “离开 GitHub”（Ghostty ❤16.5k） |
| 对 Copilot 的态度 | **性价比之选**（学生包、国内卡可付、不封号） | 被 Claude Code/Cursor 超越的“老牌” |
| 替代平台 | Gitee/GitCode 口碑差，几乎不被视为替代 | Codeberg、Cursor Origin、自托管被认真讨论 |
| 开源角色 | 开源模型与 AI 应用的**出海发布** | 开源工具与基础设施的**主要维护者** |
| 与 GitHub 的关系 | **单向依赖，但越来越紧密** | 有选择权，开始“用脚投票” |
