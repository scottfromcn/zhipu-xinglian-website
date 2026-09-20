import { Factory, Building2, ArrowUpRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteLayout, { ActionLink, SectionHeading, ContactCTA } from '@/components/SiteLayout';
import OfficeModules from '@/sections/OfficeModules';
import { platformCapabilities } from '@/data/business';

export default function Home() {
  return <SiteLayout>
    <section className="home-hero">
      <img className="hero-background" src="/images/hero-bg.jpg" alt="" />
      <div className="site-shell hero-content"><p className="eyebrow hero-kicker">智谱星连 · 面向产业的 AI 产品与解决方案</p>
        <h1>让 AI 深入<span>工业现场</span><br />走进<span>国企办公</span></h1>
        <p className="hero-description">以工业智能体平台与行业解决方案赋能产业，<br className="desktop-break" />以 OfficeAI 支撑国企办公智能化。</p>
        <div className="hero-actions"><ActionLink to="/industrial-platform">探索工业智能</ActionLink><ActionLink to="/office-ai" secondary>了解 OfficeAI</ActionLink></div>
        <div className="hero-caption"><span>工业智能体平台 + 工业 AI 解决方案</span><span>OfficeAI 国企办公解决方案</span></div>
      </div>
    </section>
    <section className="section-pad business-section"><div className="site-shell">
      <SectionHeading eyebrow="两大业务方向" title="从工业生产，到企业办公" description="围绕不同业务需求，提供可组合的产品能力与场景方案。" />
      <div className="business-grid">
        <article className="business-card industrial-card"><div className="business-card-top"><Factory size={28} /><span>01 / INDUSTRIAL AI</span></div><h3>工业智能</h3><p>以星连工业智能体平台组织 AI 供给、连接企业系统，围绕采购、运维与工程任务形成工业 AI 解决方案。</p><div className="business-tags"><span>智能体平台</span><span>工业场景</span><span>生态供给</span></div><div className="business-links"><Link to="/industrial-platform">了解平台 <ArrowUpRight size={17} /></Link><Link to="/solutions/industrial">查看解决方案 <ArrowUpRight size={17} /></Link></div></article>
        <article className="business-card office-card"><div className="business-card-top"><Building2 size={28} /><span>02 / OFFICE AI</span></div><h3>OfficeAI 国企办公</h3><p>将模型资源、企业技能、智能体管理与员工入口融为一体，支撑国企日常办公与专业业务协同。</p><div className="business-tags"><span>资源统一管理</span><span>技能共享复用</span><span>办公任务执行</span></div><div className="business-links"><Link to="/office-ai">了解 OfficeAI <ArrowUpRight size={17} /></Link></div></article>
      </div>
    </div></section>
    <section className="section-pad section-tint"><div className="site-shell industrial-overview">
      <div><SectionHeading eyebrow="星连工业智能体平台" title="把 AI 能力接入企业业务" description="连接供应商、企业组织与智能体运行环境，让发现供给、授权安装、运行使用和用量计量形成完整流程。" /><ul className="check-list"><li><Check />完整智能体应用、托管智能体、可复用组件</li><li><Check />企业授权、租户隔离与运行记录</li><li><Check />围绕企业系统、数据、知识与工具规划接入</li></ul><ActionLink to="/industrial-platform" secondary>查看平台能力</ActionLink></div>
      <div className="platform-flow" aria-label="工业智能体平台能力流程">{platformCapabilities.map((item, index) => <div className="flow-row" key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.desc}</p></div></div>)}</div>
    </div></section>
    <section className="section-pad"><div className="site-shell"><SectionHeading eyebrow="OfficeAI 国企办公解决方案" title="四个模块，一套办公协作体系" description="员工通过 OfficeAgent 发起任务，SkillHub 提供技能，TokenHub 管理模型资源，Agent Admin 负责统一治理。" /><OfficeModules /><div className="section-action"><ActionLink to="/office-ai" secondary>了解 OfficeAI 如何协同</ActionLink></div></div></section>
    <section className="section-pad section-tint"><div className="site-shell case-preview"><div><p className="eyebrow">客户实践 · 苏州轨交</p><h2>从企业业务实践出发，<br />沉淀可复用的 AI 能力</h2><p>围绕制度查询、人事服务、评标辅助与合同审查等任务，积累国企 AI 应用经验，为办公场景的持续拓展提供基础。</p><ActionLink to="/cases" secondary>查看客户实践</ActionLink></div><div className="practice-tiles"><span>制度专员<small>制度检索与问答</small></span><span>人事专员<small>人事业务辅助</small></span><span>评标专员<small>评标材料辅助处理</small></span><span>合同审查专员<small>合同条款辅助审查</small></span></div></div></section>
    <ContactCTA />
  </SiteLayout>;
}
