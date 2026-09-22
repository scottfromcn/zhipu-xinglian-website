export const navigation = [
  { label: '工业智能体平台', href: '/industrial-platform' },
  { label: '工业 AI 解决方案', href: '/solutions/industrial' },
  { label: 'OfficeAI', href: '/office-ai' },
  { label: '客户案例', href: '/cases' },
  { label: '关于我们', href: '/about' },
];

export const officeModules = [
  { id: 'tokenhub', name: 'TokenHub', role: '模型资源中枢', desc: '统一模型接入、额度分配、用量统计与成本管理，在私有化环境中明确模型服务与调用边界，让资源使用有据。', features: ['模型统一接入', '部门与项目配额', '用量与成本管理'] },
  { id: 'skillhub', name: 'SkillHub', role: '企业技能中心', desc: '将办公流程、专业规则与业务经验沉淀为可复用的技能，明确技能来源与版本，支撑可信共享和持续完善。', features: ['办公技能沉淀', '技能版本管理', '组织内共享复用'] },
  { id: 'agent-admin', name: 'Agent Admin', role: '智能体管理中心', desc: '统一管理智能体、组织权限、发布与运行审计，明确 Agent 身份与执行边界，让行为可控、过程可追溯。', features: ['智能体配置与发布', '组织与权限管理', '运行记录与审计'] },
  { id: 'officeagent', name: 'OfficeAgent', role: '员工办公入口', desc: '员工从具体任务出发，调用企业授权的模型、技能与工具，基于可信数据完成办公任务，保留结果依据与人工复核环节。', features: ['统一任务入口', '调用技能与工具', '结果交付与人工确认'] },
];

export const industrialScenarios = [
  { id: 'procurement', title: '采购与供应链', status: '场景方案', desc: '从询价、比价和库存分析切入，协助业务人员整理信息、识别异常、形成采购建议。', input: '物料、采购记录与供应商资料', output: '询比价材料、库存分析与处理建议', boundary: '以企业数据质量与业务规则为基础，采购决策由授权人员确认。' },
  { id: 'operations', title: '设备与系统运维', status: '场景方案', desc: '连接已有监控、工单和运维知识，辅助异常分析、值守报告与处置知识检索。', input: '监控告警、历史工单与操作规程', output: '值守简报、异常摘要与处置参考', boundary: '系统接入范围与权限按项目约定，涉及设备操作须保留人工授权。' },
  { id: 'engineering', title: '工业研发与工程', status: '拓展方向', desc: '围绕工业仿真编程、设计编程与控制编程，探索模型与专业工具协同的工程辅助能力。', input: '工程需求、技术资料与工具接口', output: '辅助代码、技术分析与验证材料', boundary: '按具体工程任务验证可行性；代码与结果经专业人员审查后使用。' },
];

export const platformCapabilities = [
  { title: '供给目录与发布', desc: '汇集完整智能体应用、托管智能体与可复用组件，通过审核与版本管理组织供给。' },
  { title: '企业授权与安装', desc: '企业管理员选择已发布供给，在租户边界内完成安装、启用与停用。' },
  { title: '托管运行与使用', desc: '为企业安装项建立独立运行实例，员工从授权工作空间进入智能体。' },
  { title: '用量计量与审计', desc: '记录模型使用量与关键操作，支持配额管理和可追踪的运行记录。' },
];
