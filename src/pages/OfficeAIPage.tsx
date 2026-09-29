import SiteLayout, { PageHero, SectionHeading, ActionLink, ContactCTA } from '@/components/SiteLayout';
import OfficeModules from '@/sections/OfficeModules';
import OfficeValues from '@/sections/OfficeValues';
import CustomerPractices from '@/sections/CustomerPractices';
import TrustSection from '@/sections/TrustSection';
import ArchitectureDiagram from '@/sections/ArchitectureDiagram';

export default function OfficeAIPage() {
  return <SiteLayout>
    <PageHero eyebrow="办公智能 / OfficeAI · 国企与政务办公" title="让已有系统与知识，成为 AI 办公能力" description="在客户私有化可信环境中，提供优质模型服务，连接现有业务系统，沉淀组织知识与技能，让 Agent 基于真实业务信息完成任务，让信息化投入持续发挥价值。"><div className="hero-actions"><ActionLink to="/support/sales?business=office">沟通办公场景</ActionLink><ActionLink to="/cases" secondary>查看客户实践</ActionLink></div></PageHero>
    <section className="section-pad"><div className="site-shell"><SectionHeading eyebrow="核心能力" title="模型质量、系统连接、知识沉淀" description="从任务出发选择和配置 Agent，持续建设支撑任务完成的模型、连接与知识能力。" /><OfficeValues detailed /></div></section>
    <section className="section-pad section-tint"><div className="site-shell"><SectionHeading eyebrow="产品 + 解决方案" title="共同的产品基础，贴合业务的实施服务" description="从软件部署到业务可用，需要把客户已有的系统、资料和工作方式连接起来。" /><div className="two-grid">
      <article className="content-card"><p className="eyebrow">标准产品</p><h3>四模块协同，承接使用与管理</h3><p>TokenHub 管理模型服务，SkillHub 复用企业技能，Agent Admin 管理权限与运行，OfficeAgent 提供员工入口。</p><ul className="feature-list"><li>提供模型、技能、Agent 的共同管理基础</li><li>围绕客户可信环境整体私有化部署</li><li>按任务配置能力与使用入口</li></ul></article>
      <article className="content-card"><p className="eyebrow">实施服务</p><h3>把已有资产接入实际办公任务</h3><p>梳理系统接口与权限，建设连接器；整理知识来源、版本和更新机制；结合业务规则配置技能与复核流程。</p><ul className="feature-list"><li>系统连接：接口适配、授权与调用验证</li><li>知识建设：资料整理、检索与引用验证</li><li>场景交付：任务配置、业务评测与验收</li></ul></article>
    </div></div></section>
    <section className="section-pad" id="products"><div className="site-shell"><SectionHeading eyebrow="产品组成" title="从模型服务到员工入口" description="知识库提供事实与依据，SkillHub 沉淀做事方法；两者通过授权的连接与调用共同服务办公任务。" /><OfficeModules detailed /></div></section>
    <section className="section-pad section-tint"><div className="site-shell"><SectionHeading eyebrow="一次任务如何完成" title="从员工需求，到有依据的业务成果" description="以办公材料准备为例，模型、系统与知识在同一个授权任务中协同。" /><div className="office-workflow"><div className="governance-bar"><strong>Agent Admin · 全程管理</strong><span>身份权限 · 数据边界 · 调用审计</span></div><div className="four-grid">{[
      ['OfficeAgent', '提出任务', '员工说明目标，确认可使用的资料和操作范围。'],
      ['Connector + 知识库', '获取业务依据', '在授权范围内查询现有系统，检索制度与文档，保留来源。'],
      ['TokenHub + SkillHub', '组织任务执行', '使用匹配任务的模型能力，按企业技能与业务规则完成处理。'],
      ['人工复核', '形成可用成果', '检查内容、引用与执行记录，关键结论或写入操作经授权确认。'],
    ].map(([label, title, desc], index) => <article key={label}><span className="step-number">0{index + 1}</span><p className="eyebrow">{label}</p><h3>{title}</h3><p>{desc}</p></article>)}</div></div></div></section>
    <ArchitectureDiagram business="office" />
    <TrustSection />
    <section className="section-pad" id="deployment"><div className="site-shell"><SectionHeading eyebrow="部署方式 / 全部私有化" title="整套部署到客户可信环境" description="模型服务、连接器、知识服务、技能、Agent 运行与管理组件统一规划部署；逐项确认数据流向、访问权限、模型调用与运维责任。" /><div className="three-grid">{[
      ['部署边界', '围绕客户指定的计算、存储和网络环境部署，明确数据存储、传输与模型服务位置。'],
      ['系统连接', '沿用并落实组织权限，按最小权限接入系统，分别确认查询与写入操作范围。'],
      ['持续治理', '明确知识更新、模型与技能版本、审计记录及运维授权，持续核验质量和安全要求。'],
    ].map(([title, desc]) => <article className="content-card" key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
    <section className="section-pad section-tint"><div className="site-shell"><SectionHeading eyebrow="客户实践" title="在真实组织中积累落地经验" /><CustomerPractices /><div className="section-action"><ActionLink to="/cases" secondary>了解客户实践</ActionLink></div></div></section>
    <ContactCTA />
  </SiteLayout>;
}
