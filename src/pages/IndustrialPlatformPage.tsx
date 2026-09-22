import SiteLayout, { PageHero, SectionHeading, ActionLink, ContactCTA } from '@/components/SiteLayout';
import { platformCapabilities } from '@/data/business';
import TrustSection from '@/sections/TrustSection';

export default function IndustrialPlatformPage() {
  return <SiteLayout>
    <PageHero eyebrow="工业智能 / 平台产品" title="星连工业智能体平台" description="提供 SaaS 与私有化一体机两种交付形式，将可信数据、可信 Agent 与整套可信运行环境结合，让工业 AI 有据可依、有序运行。"><div className="hero-actions"><ActionLink to="/solutions/industrial">探索工业 AI 场景</ActionLink><ActionLink to="/support/sales?business=industrial" secondary>预约平台演示</ActionLink></div></PageHero>
    <section className="section-pad" id="deployment"><div className="site-shell">
      <SectionHeading eyebrow="交付形式" title="SaaS 与私有化一体机，按企业需求选择" description="两种形式都以整套可信环境为基础，差异在于部署位置与运营分工。" />
      <div className="two-grid">
        <article className="content-card"><p className="eyebrow">SaaS</p><h3>可信云环境中的平台服务</h3><p>通过平台提供的可信云环境使用工业智能体能力，在企业授权空间内管理供给、数据接入与 Agent 使用。</p><ul className="feature-list"><li>平台统一部署和运营运行环境</li><li>企业空间隔离，按授权使用数据与 Agent</li><li>明确云端数据范围、访问权限与运营责任</li></ul></article>
        <article className="content-card"><p className="eyebrow">私有化一体机</p><h3>部署在企业侧的整套可信环境</h3><p>以软硬一体形式交付，将模型服务、数据与知识服务、Agent 运行及管理组件部署在企业指定的可信环境中。</p><ul className="feature-list"><li>一体机承载平台与运行组件</li><li>按企业网络、身份与数据边界配置</li><li>统一明确运维授权、升级与审计要求</li></ul></article>
      </div>
    </div></section>
    <TrustSection />
    <section className="section-pad"><div className="site-shell"><SectionHeading eyebrow="供给体系" title="三类供给，连接不同形态的 AI 能力" description="既连接成熟的完整应用，也支持托管智能体和可复用组件。" /><div className="three-grid">{[
      ['完整智能体应用', 'FullStackAgent', '保留供应商独立产品体验，通过企业授权与应用入口连接成熟的智能体产品。'],
      ['托管智能体', 'HostedAgent', '企业安装后建立独立运行实例，由平台组织启动、使用、停止和用量记录。'],
      ['可复用组件', 'Component', '将可组合的能力纳入目录，为智能体与场景应用提供组件供给。'],
    ].map(([title, tag, desc]) => <article className="content-card" key={tag}><p className="eyebrow">{tag}</p><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
    <section className="section-pad section-tint"><div className="site-shell"><SectionHeading eyebrow="平台基础能力" title="从供给发布到运行计量" description="以下基础流程已在现有平台演示环境中完成验证，实际交付范围按项目确认。" /><div className="four-grid">{platformCapabilities.map((item, index) => <article className="content-card" key={item.title}><span className="step-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div></div></section>
    <section className="section-pad"><div className="site-shell industrial-overview"><div><SectionHeading eyebrow="产品架构" title="连接模型，也连接企业现场" description="以智谱 GLM 为模型能力基础，将资源治理、Agent 运行与企业连接器纳入整套可信环境，在 SaaS 与私有化一体机两种形式中落实部署边界。" /><p className="muted">双运行时与企业连接器作为产品架构方向，具体适配与接口接入按企业环境逐项验证。模型、系统与设备的支持范围以交付方案为准。</p></div><div className="architecture-stack">{[
      ['05', '工业智能体与应用', '面向采购、运维、研发等具体业务任务'],
      ['04', '企业 Connectors', '接入企业身份、系统、数据、知识、工具与设备'],
      ['03', 'Agent Runtime', '智谱 Harness / 企业自带 Agent Harness'],
      ['02', '企业级 TokenHub', '模型调用、资源配额与用量治理'],
      ['01', '智谱 GLM 模型能力', '推理、编码、多模态与知识理解'],
    ].map(([number, title, desc]) => <div key={number}><span>{number}</span><section><h3>{title}</h3><p>{desc}</p></section></div>)}</div></div></section>
    <ContactCTA />
  </SiteLayout>;
}
