import { Download, Maximize2 } from 'lucide-react';
import { SectionHeading } from '@/components/SiteLayout';

const diagrams = {
  office: {
    title: 'OfficeAI 组件与模型供给',
    description: '在客户私有化可信环境中，连接员工入口、企业技能、业务系统和组织知识，由 TokenHub 统一管理模型调用。',
    image: '/architecture/officeai.svg',
    width: 1600,
    height: 1200,
    alt: 'OfficeAI 架构图：OfficeAgent 调用 SkillHub、Connectors、知识库和 TokenHub；TokenHub 按策略调用内部模型或可选外部 API，Agent Admin 覆盖权限与审计。',
    points: [
      ['组件协同', 'OfficeAgent 执行任务，SkillHub 提供技能，Connectors 连接已有系统，知识库提供可追溯的依据。'],
      ['模型供给', '内部模型依赖客户算力与额度；外部模型依赖授权、网络与供应商额度。所有模型调用统一经 TokenHub。'],
      ['私有化与双层可信', '组件整体私有化部署，支持仅用内部模型；同时验证业务质量、数据边界和调用审计。'],
    ],
    caption: '箭头表示调用请求，响应返回省略。外部模型服务可选，调用前执行策略检查与必要脱敏。',
  },
  industrial: {
    title: '工业智能体平台架构',
    description: '专业模型、工业智能体与完整业务应用，先用真实任务评测，再按形态接入；平台支持 SaaS 与私有化一体机两种交付方式。',
    image: '/architecture/industrial-agent.svg',
    width: 1600,
    height: 1200,
    alt: '工业智能体平台架构图：专业模型、工业智能体、完整业务应用经场景评测后，分别接入 TokenHub、Agent Runtime 和应用集成；模型供给与 SaaS、私有化一体机部署方式独立。',
    points: [
      ['专业模型', '通过 TokenHub 接入模型服务，统一路由与用量管理；非生成式模型按自身接口和计量方式适配。'],
      ['工业智能体', '通过 Agent Runtime 适配运行环境，按权限调用现有系统、检索知识，并经 TokenHub 使用模型服务。'],
      ['完整业务应用', '保留原有界面、流程和业务逻辑，通过应用入口、API 或 Connector 集成。'],
    ],
    caption: 'SaaS 平台与外部模型 API 是独立维度；私有化也可按策略使用外部模型。实际接入与部署支持以评测、适配结果为准。',
  },
} as const;

export default function ArchitectureDiagram({ business }: { business: keyof typeof diagrams }) {
  const diagram = diagrams[business];
  return <section className="section-pad section-tint architecture-section" id="architecture" aria-labelledby="architecture-heading">
    <div className="site-shell">
      <div className="architecture-header">
        <div id="architecture-heading"><SectionHeading eyebrow="架构总览" title={diagram.title} description={diagram.description} /></div>
        <div className="architecture-actions">
          <a href={diagram.image} target="_blank" rel="noopener noreferrer" className="action-link secondary"><Maximize2 size={17} aria-hidden="true" />查看大图<span className="sr-only">（新窗口）</span></a>
          <a href={diagram.image} download className="action-link secondary"><Download size={17} aria-hidden="true" />下载 SVG</a>
          <a href="/downloads/officeai-industrial-architecture-2026-09-29-v2.pptx" download className="action-link secondary"><Download size={17} aria-hidden="true" />下载架构 PPT</a>
        </div>
      </div>
      <figure className="architecture-figure">
        <a href={diagram.image} target="_blank" rel="noopener noreferrer" aria-label={`查看${diagram.title}大图（新窗口）`}>
          <img src={diagram.image} alt={diagram.alt} width={diagram.width} height={diagram.height} loading="lazy" decoding="async" />
        </a>
        <figcaption>{diagram.caption}</figcaption>
      </figure>
      <div className="architecture-summary">
        {diagram.points.map(([title, description]) => <div key={title}><h3>{title}</h3><p>{description}</p></div>)}
      </div>
    </div>
  </section>;
}
