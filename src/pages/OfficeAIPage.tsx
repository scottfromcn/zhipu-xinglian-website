import SiteLayout, { PageHero, SectionHeading, ActionLink, ContactCTA } from '@/components/SiteLayout';
import OfficeModules from '@/sections/OfficeModules';
import TrustSection from '@/sections/TrustSection';

export default function OfficeAIPage() {
  return <SiteLayout><PageHero eyebrow="OfficeAI / 全部私有化交付" title="让企业技能成为每位员工的办公能力" description="面向国企办公，全部采用私有化形式。将 TokenHub、SkillHub、Agent Admin 与 OfficeAgent 整体部署于企业可信环境，让数据可信、Agent 可信、办公过程可追溯。"><div className="hero-actions"><ActionLink to="/support/sales?business=office">预约 OfficeAI 演示</ActionLink><ActionLink to="/cases" secondary>查看国企实践</ActionLink></div></PageHero>
    <section className="section-pad section-tint" id="deployment"><div className="site-shell">
      <SectionHeading eyebrow="部署方式 / 私有化" title="整套 OfficeAI，部署在企业可信环境中" description="模型服务、数据与知识服务、办公技能、Agent 运行和管理组件纳入统一的私有化部署边界，贯穿员工使用与企业管理。" />
      <div className="three-grid">
        <article className="content-card"><h3>整套环境部署</h3><p>围绕企业指定环境部署四模块及其运行依赖，统一规划计算、存储、网络与模型服务。</p></article>
        <article className="content-card"><h3>企业自主治理</h3><p>数据与知识接入、技能发布、Agent 使用和运维访问纳入企业身份与权限管理。</p></article>
        <article className="content-card"><h3>边界可核验</h3><p>交付时确认数据流向、模型与工具调用、运行记录及运维责任，外部系统连接须明确授权范围。</p></article>
      </div>
    </div></section>
    <TrustSection />
    <section className="section-pad"><div className="site-shell"><SectionHeading eyebrow="产品组成" title="四个模块，各司其职" description="从底层资源到员工入口，四模块统一私有化部署，在企业可信环境中协同承接国企办公需求。" /><OfficeModules detailed /></div></section>
    <section className="section-pad section-tint"><div className="site-shell"><SectionHeading eyebrow="协作流程" title="一次任务，如何走向可用结果" description="以办公材料准备为例：员工提出任务，调用企业技能与授权模型，形成可复核的成果，管理规则贯穿全过程。" /><div className="office-workflow"><div className="governance-bar"><strong>Agent Admin</strong><span>组织权限 · 智能体发布 · 运行审计</span></div><div className="four-grid">{[['OfficeAgent', '员工提出任务', '说明目标、提供资料，确认任务范围。'], ['SkillHub', '调用企业技能', '复用材料整理、制度检索等办公技能。'], ['TokenHub', '使用模型资源', '按授权与额度调用模型，记录用量。'], ['人工确认', '审核业务成果', '检查内容与依据，再进入后续业务流程。']].map(([label, title, desc], index) => <article key={label}><span className="step-number">0{index + 1}</span><p className="eyebrow">{label}</p><h3>{title}</h3><p>{desc}</p></article>)}</div></div></div></section>
    <section className="section-pad"><div className="site-shell"><SectionHeading eyebrow="办公应用场景" title="覆盖通用办公，延伸专业业务" description="按企业实际流程配置技能，逐项确定使用范围与验收口径。" /><div className="three-grid">{[['文档与材料', '辅助起草、整理、摘要与报告编制，让员工更快形成可复核的工作材料。'], ['制度与知识', '围绕企业制度、人事规则与业务知识，提供检索、问答与资料定位。'], ['专业业务辅助', '围绕合同审查、评标材料、审计准备等任务，配置专业规则与人工复核流程。']].map(([title, desc]) => <article className="content-card" key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
    <section className="section-pad section-tint"><div className="site-shell"><SectionHeading eyebrow="国企落地要求" title="使用便利，管理有序" /><div className="three-grid">{[['私有化部署边界', '全部采用私有化交付，数据、模型、技能与 Agent 运行纳入企业可信环境，明确系统集成与访问范围。'], ['组织与权限', '将模型、技能和智能体使用纳入企业组织权限，明确管理员与员工职责。'], ['结果与责任', 'AI 提供业务辅助，关键操作和专业结论由授权人员复核确认。']].map(([title, desc]) => <article className="content-card" key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section><ContactCTA /></SiteLayout>;
}
