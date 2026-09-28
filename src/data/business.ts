export const navigation = [
  { label: '工业智能', href: '/industrial-ai' },
  { label: '办公智能', href: '/office-ai' },
  { label: '关于我们', href: '/about' },
];

export function businessDirection(pathname: string): 'industrial' | 'office' | undefined {
  if (['/industrial-ai', '/industrial-platform', '/industrial-evaluation', '/solutions/industrial'].includes(pathname)) return 'industrial';
  if (['/office-ai', '/cases'].includes(pathname)) return 'office';
  return undefined;
}

export const officeModules = [
  { id: 'tokenhub', name: 'TokenHub', role: '模型能力与资源中枢', desc: '围绕任务质量、稳定性与成本选择模型，统一接入、授权、额度和用量管理，在私有化环境中明确模型服务与调用边界。', features: ['模型统一接入', '部门与项目配额', '用量与成本管理'] },
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
  { title: '场景评测', desc: '用真实业务样本与统一标准比较候选方案，明确适配条件、质量差距与使用成本。' },
  { title: '企业连接器', desc: '将现有系统、数据和工具的授权能力开放给 Agent，保留既有系统与业务规则。' },
  { title: '智能体运行时', desc: '按任务与企业环境适配运行时，承接部署、任务执行、运行监控与持续维护。' },
  { title: 'Token 与模型服务', desc: '围绕任务选择合适的模型能力，统筹质量、稳定性、调用配额与成本。' },
];

export const officeValues = [
  { id: 'models', tag: 'MODEL / 模型能力', title: '好模型，支撑好结果', desc: '围绕具体办公任务选择模型，关注结果质量、稳定性和成本。TokenHub 统一管理模型接入、授权、额度与用量。', detail: '让每类任务用上合适的模型能力' },
  { id: 'connectors', tag: 'CONNECTOR / 系统连接', title: '让已有系统用得起来', desc: '通过连接器开放既有系统的查询、数据与业务操作，在原有权限和规则下供 Agent 调用，让信息化投入持续发挥价值。', detail: '按系统梳理接口、权限与业务流程' },
  { id: 'knowledge', tag: 'KNOWLEDGE / 知识沉淀', title: '让组织经验积累下来', desc: '将制度、文档与业务经验整理为有来源、可更新的知识；将成熟做法沉淀为 SkillHub 中可复用的技能。', detail: '知识提供依据，技能组织做事方法' },
];

export const officePractices = [
  { name: '苏州地铁', sector: '轨道交通', desc: '围绕企业办公任务，积累智能体应用与组织能力建设经验。' },
  { name: '苏州交通', sector: '交通领域', desc: '在交通领域开展 OfficeAI 项目实践，推动 AI 与既有信息化体系衔接。' },
  { name: '苏州发改委', sector: '政务办公', desc: '在政务办公领域开展 OfficeAI 项目实践，探索组织知识与办公任务协同。' },
];
