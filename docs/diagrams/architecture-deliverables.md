# 架构图交付

## PPT

`public/downloads/officeai-industrial-architecture-2026-09-29.pptx`：两页，分别为 OfficeAI、工业智能体平台；文字、组件框和连线均为原生可编辑对象。4:3 画布适配完整架构图，不额外添加封面。

内容来自已确认的 OfficeAI v3、工业智能体 v2 图稿。字体为 Arial Unicode MS，采用白灰底、细边框、智谱蓝色连线。三种工业方案形态分别接入，平台部署和模型来源独立表达。

生成脚本位于 `scripts/build-architecture-deck.mjs`，使用 Codex 捆绑的 `@oai/artifact-tool`。运行时需设置 `RUNTIME_NODE_MODULES`、`PRESENTATIONS_SKILL_DIR` 和 `RUNTIME_PYTHON` 为工作区依赖工具返回的路径；重新生成修订版应更新输出文件名及验收回执名，避免覆盖已交付文件。构建中间文件在被 Git 忽略的 `.codex-build/architecture-deck`。

## 网页

- OfficeAI：`/office-ai#architecture`
- 工业智能体平台：`/industrial-platform#architecture`
- 两页 PPT 下载：`/downloads/officeai-industrial-architecture-2026-09-29.pptx`
- 网页图稿：`public/architecture/officeai.webp`、`public/architecture/industrial-agent.webp`，分别由确认的 PNG 压缩转换，保留原始尺寸。

网页使用确认过的完整图稿，并提供大图链接及独立文字说明。调整内容时，应同步修订 PNG/网页图稿、PPT 生成脚本和网页文字。
