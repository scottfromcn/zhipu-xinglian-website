import { Factory, Building2, ArrowUpRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteLayout, { ActionLink, SectionHeading, ContactCTA } from '@/components/SiteLayout';
import OfficeValues from '@/sections/OfficeValues';
import CustomerPractices from '@/sections/CustomerPractices';
import TrustSection from '@/sections/TrustSection';
import { platformCapabilities } from '@/data/business';

export default function Home() {
  return <SiteLayout>
    <section className="home-hero"><div className="site-shell hero-content">
      <p className="eyebrow hero-kicker">智谱星连 · 业务可信 × 数据安全可信</p>
      <h1>让可信 AI 深入<span>工业现场</span><br />走进<span>企业与政务办公</span></h1>
      <p className="hero-description">以场景评测找到适合的工业 AI 方案，<br className="desktop-break" />以优质模型、系统连接与知识沉淀，让 OfficeAI 融入日常工作。</p>
      <div className="hero-actions"><ActionLink to="/industrial-evaluation">从场景评测开始</ActionLink><ActionLink to="/office-ai" secondary>了解 OfficeAI</ActionLink></div>
      <div className="hero-caption"><span>工业智能 · SaaS / 私有化一体机</span><span>OfficeAI · 全部私有化</span></div>
    </div></section>
    <section className="section-pad business-section"><div className="site-shell">
      <SectionHeading eyebrow="两大业务方向" title="围绕真实任务，让 AI 产生业务价值" description="连接已有的信息化资产，提供适合场景的模型与智能体能力。" />
      <div className="business-grid">
        <article className="business-card industrial-card"><div className="business-card-top"><Factory size={28} aria-hidden="true" /><span>01 / INDUSTRIAL AI</span></div><h3>工业智能 · 评测先行</h3><p>面对一个场景、多种 AI 方案，先评测哪个更适合。再连接现有系统，适配运行时与模型服务，把经过验证的方案落到工业现场。</p><div className="business-tags"><span>场景评测</span><span>企业连接器</span><span>运行时</span><span>Token</span></div><div className="business-links"><Link to="/industrial-platform">了解平台 <ArrowUpRight size={17} /></Link><Link to="/solutions/industrial">查看场景方案 <ArrowUpRight size={17} /></Link></div></article>
        <article className="business-card office-card"><div className="business-card-top"><Building2 size={28} aria-hidden="true" /><span>02 / OFFICE AI</span></div><h3>OfficeAI · 激活已有资产</h3><p>为国企与政务办公提供私有化 AI 方案。用优质模型连接现有系统，沉淀组织知识与技能，让多年信息化投入持续发挥价值。</p><div className="business-tags"><span>优质模型</span><span>系统连接</span><span>知识沉淀</span></div><div className="business-links"><Link to="/office-ai">了解 OfficeAI <ArrowUpRight size={17} /></Link></div></article>
      </div>
    </div></section>
    <section className="section-pad section-tint"><div className="site-shell industrial-overview">
      <div><SectionHeading eyebrow="星连工业智能体平台" title="先选对方案，再让它持续运行" description="以场景评测为起点，将企业连接器、智能体运行时、Token 与模型服务纳入统一的落地路径。" /><ul className="check-list"><li><Check />同一场景、同一标准，对比候选方案</li><li><Check />连接现有系统与工具，适配企业运行环境</li><li><Check />SaaS 与私有化一体机，按需求选择</li></ul><ActionLink to="/industrial-evaluation" secondary>了解场景评测</ActionLink></div>
      <div className="platform-flow" aria-label="工业智能四项产品能力">{platformCapabilities.map((item, index) => <div className="flow-row" key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.desc}</p></div></div>)}</div>
    </div></section>
    <section className="section-pad"><div className="site-shell"><SectionHeading eyebrow="OfficeAI / 私有化办公解决方案" title="好模型接进来，老系统用起来，知识留下来" description="标准产品提供共同基础，解决方案完成连接器建设、知识治理和场景适配，让 Agent 基于真实业务信息完成办公任务。" /><OfficeValues /><div className="section-action"><ActionLink to="/office-ai" secondary>了解产品与实施方案</ActionLink></div></div></section>
    <TrustSection />
    <section className="section-pad"><div className="site-shell"><SectionHeading eyebrow="OfficeAI / 客户实践" title="从轨道交通到政务办公" description="在苏州地铁、苏州交通、苏州发改委及政府侧的项目实践中，积累系统连接、组织知识与智能办公的落地经验。" /><CustomerPractices /><div className="section-action"><ActionLink to="/cases" secondary>了解客户实践</ActionLink></div></div></section>
    <ContactCTA />
  </SiteLayout>;
}
