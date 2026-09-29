# OfficeAI 架构图 v3：智谱 UI 与调用关系

- 用户要求修正连线，并学习智谱 UI。参考 https://bigmodel.cn/glm-coding 及其官方样式文件 https://static.bigmodel.cn/wd-paas-front/css/app.82877c80.css 。内置浏览器加载超时，已读取官网 HTML/CSS，使用 MiSans/苹方风格、近黑正文、浅灰白界面、少量 #134cff 蓝色。
- 图稿由内置 imagegen 生成与精修；输出 `officeai-components-token-2026-09-29-v3.png`。旧版保留，仅本图作为本轮交付。
- v2 的技能、系统和知识连线指向 OfficeAgent，含义与调用方→被调用方不一致；本版统一箭头语义，响应返回省略。
- 共六条调用线：OfficeAgent→SkillHub、OfficeAgent→Connectors、OfficeAgent→知识库、OfficeAgent→TokenHub、TokenHub→内部模型、TokenHub→外部 API。
- Agent Admin 作为独立管理层，不串入请求链路。内部模型在私有化环境内；外部 API 在边界外，需允许外发且已授权。支持仅内部模型运行。
- 目视检查六条线的起点、终点及箭头方向、边界、标签和中文文字；修正小字生成问题。保留组件职责、模型依赖及双层可信内容。未修改官网或部署。

## 最终生成提示词

```text
Create a fully redesigned, accurate OfficeAI architecture infographic. User approves content but rejects previous arrows and purple UI; now match actual Zhipu BigModel UI visual language. Attached image is SEMANTIC CONTENT ONLY, never a layout or color reference.

STYLE: Zhipu BigModel official UI: MiSans / PingFang SC-like clean Chinese sans-serif; near-black #131212 text, gray #5e5e66 supporting text, background #f7f8fa and white cards, thin #e7e7ed borders, consistent small 8-12px radii, very restrained #134cff blue accent. Generous whitespace, elegant regular/medium font weights, precise flat product UI. NO violet, NO colorful card backgrounds, NO large chunky icons, NO gradient, NO 3D, NO oversized bold rounded type, NO dashed environment rectangle. Small monochrome linear icons only if helpful. High resolution landscape 2400x1600 or larger same aspect ratio. Balanced professional executive diagram.

Title aligned left: "OfficeAI 办公智能"
Subtitle: "组件协同与内外部 Token 供给"
The graph has EXACTLY SIX directed arrows described below. Every arrow means CALL REQUEST, goes FROM CALLER TO CALLEE, one arrowhead only, never double-ended. Return responses omitted. Avoid crossing connectors. Use highly legible Chinese label placement.

NEW LAYOUT, follow strictly:
- Private deployment boundary large very subtle gray solid enclosure left 72% of image; external resources separate right 24% with open whitespace. This is a real visible boundary, but elegant and thin.
- Boundary heading "客户私有化可信环境" and smaller "组件私有化部署 · 模型调用统一治理".
- At TOP inside private area a full-width management band:
"Agent Admin｜智能体管理"
"身份权限 · 发布审批 · 执行审计"
small right label "治理覆盖全部组件"
This has ZERO arrows. It is governance, not an intermediary in request flow.
- Below management band, three equal-size supporting cards in ONE HORIZONTAL ROW inside private boundary:
LEFT: "SkillHub" / "企业技能中心" / "工作方法 · 技能版本 · 共享复用"
MIDDLE: "Connectors" / "系统连接器" / "连接 OA、ERP 等已有系统" / "按权限查询与执行业务操作"
RIGHT: "知识库" / "组织知识" / "制度文档 · 检索引用 · 持续更新"
- BELOW all three cards a WIDE horizontal primary white card spanning their total width:
"OfficeAgent｜员工入口与任务执行"
"理解任务 · 调用技能与工具 · 形成成果"
Make OfficeAgent typographically prominent with tiny blue accent, not a purple fill.
ARROWS 1,2,3: THREE INDEPENDENT PARALLEL VERTICAL UPWARD arrows, each STARTING on the TOP EDGE of the wide OfficeAgent card and ENDING with its arrowhead on the BOTTOM EDGE of respectively SkillHub, Connectors, and 知识库. Arrowheads point UP toward those supporting cards. Labels in the gaps beside each shaft: "使用技能", "调用系统", "检索知识". All three originate from OfficeAgent. No horizontal bus and no connections between supporting cards.
- BELOW OfficeAgent at CENTER-RIGHT inside private boundary, a TokenHub card:
"TokenHub｜统一模型入口"
"模型选择 · 路由 · 配额 · 计量 · 调用审计"
small annotation "所有模型请求统一经 TokenHub"
ARROW 4: Straight VERTICAL DOWN arrow from OfficeAgent BOTTOM to TokenHub TOP, labelled "模型调用". Arrowhead at TokenHub only.
- On SAME HORIZONTAL ROW as TokenHub, to its LEFT inside private boundary, place internal model card:
eyebrow "内部 Token"
title "私有模型服务"
"客户自有 / 专属算力部署"
"数据内部处理 · 内部额度核算"
ARROW 5: HORIZONTAL LEFT-POINTING arrow FROM TokenHub LEFT EDGE TO internal model card RIGHT EDGE. Arrowhead at internal model card. Label above the short shaft "敏感任务仅内部". Ensure enough line length for the label. Internal model card entirely inside private boundary.
- On SAME HORIZONTAL ROW as TokenHub, to its RIGHT and OUTSIDE private boundary, external model card:
eyebrow "外部 Token · 可选"
title "SaaS 模型 API"
"经授权的外部模型服务"
"外部额度 / 按调用计费"
ARROW 6: HORIZONTAL RIGHT-POINTING arrow FROM TokenHub RIGHT EDGE, crosses private enclosure boundary, TO external card LEFT EDGE. Arrowhead at external model only. Label above this line "允许外发 + 已授权".
- Under external card, small restrained policy text:
"按策略检查与必要脱敏后调用"
"关闭外部通道，可仅用内部模型"
- Ensure bottom row INTERNAL / TOKENHUB / EXTERNAL is well-aligned across image. Keep internal and TokenHub inside boundary and external outside.
- Do not add any additional arrow or wire. No direct OfficeAgent-to-external connection. No connector-to-knowledge connection. No upward arrow from models to TokenHub.

Bottom full-width footer divided into two unboxed columns:
"业务可信" / "质量评测 · 引用溯源 · 人工复核"
"数据安全可信" / "最小权限 · 数据边界 · 安全审计"
Small readable notes:
"箭头表示调用请求方向，响应返回省略。"
"Token 是模型推理用量；API Key 是访问凭据，由 TokenHub 统一管理。"
"模型质量与稳定性按任务评测；内部依赖算力，外部依赖授权与额度。"

Accuracy is paramount: 3 UP arrows from OfficeAgent into 3 support nodes, 1 DOWN arrow into TokenHub, 1 LEFT arrow into internal model, 1 RIGHT arrow into external model. SIX arrows total. Label each at unobstructed whitespace, not on text or box edges. Everything left-aligned within cards with ample padding. Accurate Chinese. No arbitrary certification or claims. Premium Zhipu-inspired UI feel, clear typography, disciplined grid, no decorative clutter.
```

## 最终精修提示词

```text
Make only these exact small text cleanup edits to the supplied diagram. Preserve the entire design, every box, all SIX arrows with their correct directions, all other text and positions.
1. DELETE the small gray subtitle line directly beneath "客户私有化可信环境". Do not replace it with anything. Leave that line's space blank. Keep the large heading untouched.
2. Below the rightmost SaaS model API card, replace BOTH existing small gray lines with exactly these two simpler Chinese lines:
"调用前检查策略与必要脱敏"
"支持仅使用内部模型"
Use clean readable Chinese sans-serif; no typos. Preserve all other image content exactly. No new content.
```
