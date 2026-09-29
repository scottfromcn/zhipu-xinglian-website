# 工业智能体 v2：三种方案形态与两种部署方式

用户确认三种方案形态为专业模型、工业智能体、完整业务应用。本版将方案形态、模型供给、平台部署方式分开表达，采用内置 imagegen，沿用智谱 UI 风格。参考图为本目录的工业智能体初版；原图保留。

## 已确认的表达方案

| 方案形态 | 内容 | 评测通过后的接入方式 |
| --- | --- | --- |
| 专业模型 | 行业推理、识别、预测等能力 | TokenHub 统一模型服务入口；非生成式模型保留相应接口与计量方式 |
| 工业智能体 | 面向业务任务的 Agent | Agent Runtime 运行适配、任务编排、执行监控 |
| 完整业务应用 | 自带界面、流程和业务逻辑 | 应用入口、API 或 Connector 集成，不强制放入 Agent Runtime |

解决方案厂商示例：圆木智能、炽橙科技、同元软件、浩辰科技等。厂商不与某一种形态绑定，名称不代表已合作或接入。

三个形态共同经过基于真实任务的评测，比较效果、安全、时延、成本及部署适配，再分别接入对应入口。连接器、知识库及平台治理作为共用基础能力展示。

## 模型供给与部署方式

- 内部 Token：部署环境内自有或专属模型，依赖算力、模型质量和内部额度。
- 外部 Token：经授权的模型 API，依赖网络、授权及供应商额度，按任务与数据策略开放。
- Token 表示模型推理用量；非生成式专业模型的接口和计量方式须单独适配。
- SaaS：平台运营的可信云环境，明确租户隔离、系统连接授权、上云数据范围与运营责任。
- 私有化一体机：客户侧可信环境，按配置部署模型与运行组件，支持仅内部模型，可关闭外部调用通道。
- 两个环境框均展示模型接入、Agent 运行、应用集成、Connectors、知识库、平台治理，表示同一套平台能力的两类交付环境。具体厂商方案支持哪种部署，应以评测和适配结果为准。
- SaaS 平台与外部模型 API 属于两个独立维度；私有化平台也可按策略使用外部模型。

## 验收标准

- 三种形态各有独立接入路径，不全部指向 Agent Runtime。
- 六条灰色虚线表示评测与接入，三条蓝色实线表示调用请求；图例区分语义。
- Runtime 调用 TokenHub；TokenHub 调用内部或外部模型。蓝色箭头指向被调用方。
- 两个独立环境框含平台组件，避免仅用角标表示部署。
- 保留双层可信、厂商示例、模型依赖与部署适配限定。
- 本轮为图稿交付，不涉及官网代码或部署。

## 验收结果

已目视逐项核验并通过：三个形态、厂商示例、六条接入虚线、三条调用实线及其箭头方向；两个部署环境的组件和说明；内部与外部 Token 的依赖；双层可信、部署适配限定及中文文字。图稿文件为 `industrial-agent-components-token-2026-09-29-v2.png`。

## 生成提示词（内置 imagegen）

```text
Use case: infographic-diagram.
Create a substantially revised Chinese industrial AI architecture infographic. Attached image is STYLE REFERENCE only; change structure to clearly distinguish THREE SOLUTION FORMS from TWO DEPLOYMENT MODES. Zhipu BigModel UI aesthetic: crisp MiSans/PingFang typography, #131212 headings, #5e5e66 secondary text, white cards, #f7f8fa background, subtle #e7e7ed borders, small corners, tiny restrained #134cff blue icons. No purple, gradients, 3D, heavy shadows, or chunky type. Premium restrained product architecture, generous spacing. Near-square landscape canvas, high resolution ideally 2560x2304. Exact readable Chinese. All contents must fit.

TITLE: "工业智能体"
SUBTITLE: "三种方案形态 · 统一评测接入 · 两种部署方式"

TOP thin full-width ecosystem strip:
"解决方案生态（厂商示例）" then "圆木智能 · 炽橙科技 · 同元软件 · 浩辰科技 · 等"
Do not map any vendor to one exclusive solution type.

SECTION 01 heading: "方案形态与接入"
Three parallel equal columns.
Top row THREE white form cards:
LEFT "专业模型" / "行业推理 · 识别 · 预测"
CENTER "工业智能体" / "面向特定业务任务的 Agent"
RIGHT "完整业务应用" / "自带界面 · 流程 · 业务逻辑"

Below three form cards a single wide pale gray evaluation band spanning all three columns:
"场景评测" prominent, then "真实任务与验收标准" and "效果 · 安全 · 时延 · 成本 · 部署适配"
THREE independent short dashed GRAY DOWN arrows from bottom center of EACH form card to top edge of evaluation band. Enough gap for arrows. All three forms must enter evaluation first.

Below evaluation band THREE entry cards aligned with form columns:
LEFT "TokenHub" / "模型服务接入与统一路由" / "模型选择 · 配额 · 计量 · 审计"
CENTER "Agent Runtime" / "智能体接入与运行适配" / "任务编排 · 执行监控 · 异常处理"
RIGHT "应用集成" / "应用入口 / API / Connector" / "保留原有界面与业务流程"
THREE separate short dashed GRAY DOWN arrows from evaluation band bottom edge to the TOP EDGE of each corresponding entry card; caption in left side margin or near band "评测通过后，按形态接入".
Do NOT make all forms point into Agent Runtime.
Leave generous horizontal spacing between entry cards. ONE short BLUE SOLID LEFT arrow from Agent Runtime LEFT EDGE to TokenHub RIGHT EDGE, arrowhead at TokenHub, label "模型调用". No arrow between Runtime and 应用集成.

Directly below entry cards a wide shared foundation band with three tidy unconnected segments:
"Connectors｜连接已有系统与设备"
"知识库｜工艺、规则与经验沉淀"
"平台治理｜身份权限、发布与审计"
Caption "运行时按权限调用系统与检索知识；完整应用按接口条件集成。"
Do not draw arrows from knowledge to Runtime; this band is a capability inventory, not a sequential call chain.

SECTION 02 heading: "模型供给｜独立于平台部署方式"
A compact THREE NODE HORIZONTAL ROUTING ROW, no vertical connecting lines to section01:
LEFT card "内部 Token" / "环境内自有或专属模型" / "依赖算力 · 模型质量 · 内部额度"
CENTER small white card "TokenHub" / "按任务与数据策略路由"
RIGHT card "外部 Token · 可选" / "经授权的外部模型 API" / "依赖网络 · 授权 · 供应商额度"
Blue solid arrow LEFT from center TokenHub into internal left card, label "内部路由".
Blue solid arrow RIGHT from center TokenHub into external right card, label "允许外发".
Tiny clear note: "Token 为模型推理用量；非生成式专业模型按其接口与计量方式接入。"

SECTION 03 heading: "部署方式｜同一套平台能力，按方案确认适配"
TWO large equal ENVIRONMENT PANELS side-by-side, visibly containing mini component chips to convey actual deployment boundary. No connecting arrows. SaaS panel and private panel visually equally weighted.
LEFT panel:
blue tiny cloud icon, title "SaaS"
subtitle "平台运营的可信云环境"
inside three chips "模型接入" "Agent 运行" "应用集成"
inside three chips "Connectors" "知识库" "平台治理"
body "租户隔离 · 按授权连接企业系统"
body "明确上云数据范围与运营责任"
RIGHT panel:
blue tiny server icon, title "私有化一体机"
subtitle "客户侧可信环境"
inside SAME three chips "模型接入" "Agent 运行" "应用集成"
inside SAME three chips "Connectors" "知识库" "平台治理"
body "按配置部署模型与运行组件"
body "支持仅内部模型，外部通道可关闭"
Below BOTH panels one unboxed shared note:
"平台 SaaS ≠ 外部模型 API；私有化也可按策略使用外部模型。"
"各方案的部署支持与资源需求，以评测和适配结果为准。"

BOTTOM dual trust footer in two unboxed columns:
"业务可信" / "场景评测 · 依据溯源 · 人工复核"
"数据安全可信" / "可信环境 · 最小权限 · 数据边界"
Small bottom line "虚线：评测与接入流程   蓝色实线：调用请求方向（响应省略）"
Tiny bottom line "厂商仅为候选示例，不表示已合作或接入。"

ACCURACY: Exactly SIX gray dashed vertical downward onboarding arrows (3 into evaluation, 3 from evaluation to distinct entry cards). Exactly THREE blue call arrows (Runtime left to TokenHub in section01; central TokenHub left/right into models in section02). No extra wires. Sections02 and03 are separated conceptual views, not successive execution stages. Deployment panels do not represent automatic support of every vendor product. No typography overlap or tiny illegible text. No claims of certification. Preserve elegant Zhipu UI, improve hierarchy, make three forms and two environments immediately legible.
```
