# OfficeAI 架构图：视觉重设计 v2

用户确认内容，仅要求重新设计视觉，不沿用最初参考图风格。

- 最终图稿：`officeai-components-token-2026-09-29-v2.png`，使用内置 imagegen 生成并精修，原图保留。
- 调整：紫灰配色、字体层级、白色卡片、组件图标、治理横栏、内外部资源分区与直角连线。
- 内容：保留四核心组件、连接器、知识库、内部与可选外部 Token 供给、统一模型入口和双层可信。
- 验收：已目视确认文字、知识库独立连线、私有化边界、外部调用条件与组件关系。移除生成时额外出现的合规承诺文案。
- 未修改官网代码或部署。

## 生成提示词

```text
Redesign this OfficeAI architecture graphic into an exceptionally beautiful, professional product architecture infographic for an executive presentation. The attached image is ONLY a source of APPROVED CONTENT AND RELATIONSHIPS. Its visual style was explicitly rejected by the user. REPLACE THE ENTIRE DESIGN: typography, hierarchy, layout, grouping, background, card style, line style, proportions. Do NOT imitate its blue/green outlined flowchart, giant dashed frame, crowded bold Chinese labels, gradients, or zigzag arrows.

Art direction: premium contemporary enterprise software brand, sophisticated editorial design with Swiss grid discipline. Think an excellent Figma product architecture board. Landscape, generous margins, high-resolution 2560x1600. Almost-white warm gray background #F8F9FC; near-black navy typography #182033; muted supporting text #657184; restrained violet #6557D9 and just a tiny amount of amber for external resources. Beautiful Chinese sans-serif (PingFang SC / Source Han Sans) with regular-weight explanatory text, medium-weight Chinese role titles, very crisp large English product names. Nothing cartoonish, neon, 3D or futuristic. Fine tasteful one-line component icons in small violet-tinted square icon holders. White cards, subtle 1px cool-gray dividers, medium rounded corners, almost imperceptible shadows. No thick bright colored card outlines. No colored text everywhere. Align all text left except concise connector labels. Consistent vertical rhythm. Strong visual hierarchy. Spacious yet information-rich.

Header: left aligned large "OfficeAI" with smaller Chinese "办公智能架构" alongside; subtitle "组件协同 · 可信治理 · 内外部 Token 供给". Top right small discreet "ARCHITECTURE / 01". No unnecessary new claims.

Content architecture:
A main PRIVATE environment enclosure covers left ~74% of the diagram with extremely subtle pale lavender-gray fill, thin solid border, softly rounded corners. Small lock symbol with label "客户私有化可信环境" on top left of its header. The right ~22% is a separate optional external resource area, clearly outside this enclosure. Do NOT use dashed enclosure.
Inside private zone:
- A refined slim top governance band spanning all private components:
"Agent Admin" prominent, followed by "智能体管理"
"身份权限 · 发布审批 · 执行审计" and small right side pill "治理覆盖全部组件".
It is a management band, not a step in the model flow.
- Below, organize a LEFT support column of THREE beautifully aligned small cards, and CENTER execution column.
Left cards:
"SkillHub" / "企业技能中心"
"工作方法 · 技能版本 · 共享复用"
"Connectors" / "系统连接器"
"连接 OA、ERP 等已有系统"
"按权限查询与执行业务操作"
"知识库" / "组织知识"
"制度文档 · 检索引用 · 持续更新"
Center top visually dominant OfficeAgent card with deep midnight-violet surface and white text, sophisticated and restrained:
"OfficeAgent"
"员工入口与任务执行"
"理解任务 · 调用技能与工具 · 形成成果"
Connect each left support card to OfficeAgent via meticulous thin orthogonal line routing with very small arrowheads. Each is an INDEPENDENT association, not serial between support nodes. Labels "使用技能", "调用系统", "检索知识". Keep labels in their own whitespace, avoid crossing.
Center middle TokenHub card, white surface with violet icon accent, equally central:
"TokenHub"
"统一模型入口与资源治理"
"模型选择 · 路由 · 配额 · 计量 · 调用审计"
OfficeAgent points down to TokenHub on a thin violet spine, label "模型调用". Nearby small note "所有模型请求统一经 TokenHub".
Center bottom internal model supply card INSIDE private enclosure:
small discreet green indicator and eyebrow "内部 Token"
main label "私有模型服务"
"客户自有 / 专属算力部署"
"数据在内部处理 · 内部额度与用量核算"
Downward connection TokenHub to internal model card labelled "敏感任务按策略仅走内部".
The last two cards' spacing must leave connector labels legible.

Outside the private environment on RIGHT, vertically aligned with TokenHub, a refined external supply card with subtle amber icon/pill, not a garish orange outline:
small eyebrow "外部 Token"
main title "SaaS 模型 API"
"经授权的外部模型服务"
"外部额度 / 按调用计费"
pill "可选启用".
One clean amber connector from TokenHub crosses the private boundary horizontally into external card, labelled "允许外发 + 已授权". Only TokenHub can have this link; OfficeAgent must not bypass it.
Below external card, carefully typeset small policy block:
"调用边界"
"按策略检查与必要脱敏后调用"
"关闭外部通道，可仅用内部模型"
External provider must stay outside private frame; internal model within. External optional resource does NOT change OfficeAI deployment location.

Below architecture, add a refined full-width assurance footer divided into two equal calm columns, not two big bright bordered cards:
"业务可信" — "质量评测 · 引用溯源 · 人工复核"
"数据安全可信" — "最小权限 · 数据边界 · 安全审计"
Small restrained notes at bottom, clearly legible:
"Token 指模型推理用量；API Key 是访问凭据，由 TokenHub 统一管理。"
"模型质量与稳定性按任务评测；内部依赖算力，外部依赖授权与额度。"

Preserve all content and topology above. Render accurate simplified Chinese and exact English capitalization. Strong spacing, professional typographic scale, restrained color, thin precise connectors, no overlapping labels, no fake charts, no brand logos, no watermark. Make this a visibly substantial aesthetic redesign, not a recoloring of the reference.
```

## 精修提示词

```text
Edit this diagram with surgical precision. Preserve the attractive existing design, colors, typography, layout, icons, all card positions, and all approved content. Make ONLY two corrections:
1. The purple connector labelled "检索知识" incorrectly begins on the right side of the Connectors card at y~606. Remove that entire mistaken connector. Draw a clean thin purple orthogonal connector beginning at the RIGHT EDGE MIDPOINT of the bottom-left "知识库 / 组织知识" card, approximately x380,y704 on the provided 1586x992 reference, going right in the empty corridor, then UP in that empty corridor, then entering the BOTTOM LEFT of the OfficeAgent card with a small arrowhead. The corridor is x400-530. It must not touch the Connectors card, TokenHub card, internal model card, or any text. Put the "检索知识" label alongside the new vertical line in empty space; no label overlap. Knowledge now visibly supports OfficeAgent. The existing SkillHub and Connectors links to OfficeAgent remain.
2. Under "客户私有化可信环境", replace the entire subtitle "数据与业务在本地 · 安全可控 · 符合企业合规要求" with EXACTLY "组件私有化部署 · 模型调用统一治理". Do not add other compliance/local-data guarantees.
Preserve everything else pixel-faithfully where possible, especially external Token gating, governance band, all component descriptions, two trust principles and footnotes.
```
