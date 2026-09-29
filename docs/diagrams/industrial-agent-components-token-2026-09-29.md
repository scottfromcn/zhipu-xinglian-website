# 工业智能体架构图

采用已确认的 OfficeAI v3 智谱 UI 视觉语言，由内置 imagegen 生成。参考图：`officeai-components-token-2026-09-29-v3.png`。本图为建议架构，未修改官网代码或发布。

## 组件与依赖

- 业务场景提供真实任务和验收标准；评测中心在同场景比较效果、安全、时延和成本。
- 解决方案厂商示例：圆木智能、炽橙科技、同元软件、浩辰科技等。名称为用户指定候选示例，不代表已合作、适配或完成接入。
- 已选方案通过接入与部署进入 Agent Runtime，承担任务编排、运行时适配、执行监控和异常处理。
- Connectors 沿用企业已有 ERP、MES、PLM 等系统和设备接口，按既有权限调用。知识库沉淀工艺、规则和历史经验，检索依据可追溯。
- TokenHub 统一模型选择、路由、额度、计量及审计。内部 Token 依赖部署环境内的自有或专属模型、算力、质量与额度；外部 Token 依赖网络、授权及供应商额度，并受外发策略约束。
- 支持 SaaS 或私有化一体机。私有化可仅使用内部模型；外部调用需策略检查与必要脱敏。Token 是推理用量，访问凭据是另一概念，由 TokenHub 统一管理。
- 平台治理覆盖全部组件；双层可信分别为业务质量与可追溯、可信环境及数据安全。

## 验收

已目视检查名称、中文文字、模型依赖和部署方式。共八条独立箭头，无交叉或穿越文字：

1. 业务场景 → 评测中心（任务与标准，虚线）。
2. 厂商候选方案 → 评测中心（候选方案，虚线）。
3. 评测中心 → Agent Runtime（选型建议、接入部署，虚线）。
4. Agent Runtime → Connectors（调用系统，实线）。
5. Agent Runtime → 知识库（检索知识，实线）。
6. Agent Runtime → TokenHub（模型调用，实线）。
7. TokenHub → 内部模型（内部路由，实线）。
8. TokenHub → 外部模型（策略允许外发，实线）。

实线统一表示调用方到被调用方；响应返回省略。治理横层不串入调用链路。

## 生成提示词

```text
Create a polished Chinese industrial-agent architecture infographic, using the attached OfficeAI diagram ONLY as a visual style reference. This is a NEW diagram with the exact content and layout below. Professional Zhipu BigModel UI style: MiSans/PingFang clean sans-serif, white and very pale gray backgrounds, near-black headings, muted gray body, thin gray borders, small 8px card corners, restrained #134cff blue accents, tiny line icons, no gradients, no purple, no thick colored boxes. Wide landscape 2400x1700 or similar, crisp readable Chinese, ample spacing. All text listed below must be spelled correctly. Make labels fit without overlapping arrows.

Title: "工业智能体"
Subtitle: "评测先行，让合适的解决方案进入真实业务"
Top-right pill: "SaaS / 私有化一体机"

THREE ROWS with exactly EIGHT single-direction arrows. Gray dashed arrows = selection/deployment process, blue solid arrows = runtime call requests. Include small legend for this.

ROW 1 — selection, full width three columns:
LEFT white card:
"业务场景"
"真实任务 · 验收标准"
"生产 · 研发 · 运维 · 管理"
CENTER white card:
"评测中心"
"同场景比较，按任务选方案"
"效果 · 安全 · 时延 · 成本"
RIGHT white card slightly wider:
"解决方案厂商（示例）"
"圆木智能 · 炽橙科技"
"同元软件 · 浩辰科技 · 等"
ARROW 1 gray dashed points RIGHT from business scenario right edge INTO evaluation left edge; label "任务与标准".
ARROW 2 gray dashed points LEFT from vendors left edge INTO evaluation right edge; label "候选方案".
Absolutely no arrow from evaluation into vendor card.

ROW 2 — runtime, aligned with row 1 columns, leave a generous gap from row1:
LEFT white card:
"Connectors"
"系统与工具连接"
"ERP / MES / PLM / 设备接口"
"沿用已有系统与权限"
CENTER prominent white card with subtle blue top rule:
"Agent Runtime"
"已选方案的运行与编排"
"多运行时适配 · 任务执行"
"监控 · 异常处理"
RIGHT white card:
"知识库"
"工业知识沉淀"
"工艺文档 · 业务规则 · 历史经验"
"按权限检索 · 依据可追溯"
ARROW 3 gray dashed vertical DOWN from evaluation center BOTTOM to Runtime TOP, label "选型建议 → 接入部署".
ARROW 4 blue solid horizontal LEFT from Runtime LEFT to Connectors RIGHT; label "调用系统".
ARROW 5 blue solid horizontal RIGHT from Runtime RIGHT to knowledge LEFT; label "检索知识".
Ensure ALL Runtime lateral arrows originate from Runtime, not from supporting cards.

ROW 3 — tokens, aligned same three columns with generous vertical gap:
LEFT model resource card:
eyebrow "内部 Token"
title "部署环境内模型"
"自有 / 专属模型服务"
"依赖算力 · 模型质量 · 内部额度"
CENTER white card:
"TokenHub"
"统一模型入口"
"模型选择 · 路由 · 配额"
"用量计量 · 调用审计"
RIGHT model resource card:
eyebrow "外部 Token · 可选"
title "外部模型 API"
"经授权的模型服务"
"依赖网络 · 授权 · 供应商额度"
ARROW 6 solid blue vertical DOWN from Runtime BOTTOM to TokenHub TOP; label "模型调用".
ARROW 7 solid blue horizontal LEFT from TokenHub LEFT to internal model RIGHT; label "内部路由".
ARROW 8 solid blue horizontal RIGHT from TokenHub RIGHT to external model LEFT; label "策略允许外发".
Under model row add two precise understated notes:
"私有化支持仅使用内部模型；外部调用需策略检查与必要脱敏。"
"Token 指模型推理用量；访问凭据由 TokenHub 统一管理。"

Under the main graph a restrained light-gray governance band, NO arrows:
"平台治理" small blue icon then "身份权限 · 接入审批 · 发布管理 · 全链路审计"
Below it two equal unboxed footer columns:
LEFT "业务可信" / "场景评测 · 依据溯源 · 人工复核"
RIGHT "数据安全可信" / "可信环境 · 最小权限 · 数据边界"
Bottom small legible note:
"虚线：评测与接入流程   实线：运行时调用方向（响应省略）"
"厂商仅为候选示例，不表示已完成合作或接入。"

No extra arrows. Exactly 8: scenario→evaluation, vendors→evaluation, evaluation↓runtime, runtime←left connector (arrow head at connector), runtime→right knowledge (head at knowledge), runtime↓TokenHub, TokenHub←internal (head at internal), TokenHub→external (head at external). No runtime direct model connections. No governance arrows. Align cards to a precise grid, leave enough horizontal gaps for arrow labels (70-110 px), maintain readable typography. Do not imply all deployment is private: SaaS OR private appliance. No claimed certification, vendor logos or invented vendor capabilities. This is a suggested architecture with a calm premium Zhipu UI aesthetic.
```

