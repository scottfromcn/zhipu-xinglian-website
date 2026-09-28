import { Factory, Building2 } from 'lucide-react';
import SiteLayout, { ActionLink, SectionHeading, ContactCTA } from '@/components/SiteLayout';
import TrustSection from '@/sections/TrustSection';

export default function Home() {
  return <SiteLayout>
    <section className="home-hero"><div className="site-shell hero-content">
      <p className="eyebrow hero-kicker">智谱星连 · 业务可信 × 数据安全可信</p>
      <h1><span>工业智能</span>，深入生产现场<br /><span>办公智能</span>，融入日常工作</h1>
      <p className="hero-description">两条独立业务方向，各自围绕客户场景，<br className="desktop-break" />提供专业的 AI 产品与解决方案。</p>
      <div className="hero-actions"><ActionLink to="/industrial-ai">进入工业智能</ActionLink><ActionLink to="/office-ai">进入办公智能</ActionLink></div>
    </div></section>
    <section className="section-pad business-section"><div className="site-shell">
      <SectionHeading eyebrow="选择您的业务方向" title="工业智能与办公智能" />
      <div className="business-grid">
        <article className="business-card industrial-card"><div className="business-card-top"><Factory size={28} aria-hidden="true" /><span>INDUSTRIAL INTELLIGENCE</span></div><h3>工业智能</h3><p>面向工业现场，以场景评测找到合适的 AI 方案，通过连接器、运行时和模型服务支撑落地。</p><div className="business-tags"><span>场景评测</span><span>工业智能体平台</span><span>工业 AI 解决方案</span></div><p className="business-delivery">交付方式：SaaS / 私有化一体机</p><ActionLink to="/industrial-ai">进入工业智能</ActionLink></article>
        <article className="business-card office-card"><div className="business-card-top"><Building2 size={28} aria-hidden="true" /><span>OFFICE INTELLIGENCE</span></div><h3>办公智能</h3><p>面向国企与政务办公，以 OfficeAI 连接优质模型、已有系统和组织知识，让信息化投入持续发挥价值。</p><div className="business-tags"><span>OfficeAI 产品</span><span>系统连接</span><span>知识建设</span></div><p className="business-delivery">交付方式：全部私有化</p><ActionLink to="/office-ai">进入办公智能</ActionLink></article>
      </div>
    </div></section>
    <TrustSection /><ContactCTA />
  </SiteLayout>;
}
