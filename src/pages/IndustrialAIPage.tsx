import SiteLayout, { PageHero, SectionHeading, ActionLink, ContactCTA } from '@/components/SiteLayout';
import TrustSection from '@/sections/TrustSection';
import { platformCapabilities } from '@/data/business';

export default function IndustrialAIPage() {
  return <SiteLayout>
    <PageHero eyebrow="工业智能 / 独立业务方向" title="以评测选对方案，让 AI 落到工业现场" description="围绕工业生产与运营中的真实任务，提供场景评测、工业智能体平台与工业 AI 解决方案。连接已有系统，适配运行时与模型服务，逐步验证业务效果与数据安全。"><div className="hero-actions"><ActionLink to="/industrial-evaluation">从场景评测开始</ActionLink><ActionLink to="/solutions/industrial" secondary>了解工业解决方案</ActionLink></div></PageHero>
    <section className="section-pad"><div className="site-shell"><SectionHeading eyebrow="产品与解决方案" title="从选型依据，到业务落地" /><div className="three-grid">{[
      ['场景评测', '一个场景，多种方案，哪个更适合？以统一样本和标准，对比质量、安全、时延与成本，形成选型和试点依据。', '/industrial-evaluation', '了解场景评测'],
      ['工业智能体平台', '围绕评测、连接器、运行时与模型服务组织平台能力，管理系统接入、任务执行和资源使用。', '/industrial-platform', '了解工业平台'],
      ['工业 AI 解决方案', '围绕采购与供应链、设备与系统运维、工业研发与工程，结合企业数据和业务规则推进场景实施。', '/solutions/industrial', '查看工业场景'],
    ].map(([title, desc, to, action]) => <article className="content-card" key={title}><h3>{title}</h3><p>{desc}</p><ActionLink to={to} secondary>{action}</ActionLink></article>)}</div></div></section>
    <section className="section-pad section-tint"><div className="site-shell"><SectionHeading eyebrow="落地路径" title="评测 → 连接 → 运行 → 模型服务" description="先验证场景适配，再明确系统接入、运行环境与模型配置，让每一步有具体交付和验收依据。" /><div className="four-grid">{platformCapabilities.map((item, index) => <article className="content-card" key={item.title}><span className="step-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div></div></section>
    <section className="section-pad"><div className="site-shell"><SectionHeading eyebrow="工业智能 / 两种交付形式" title="按企业环境选择部署方式" /><div className="two-grid"><article className="content-card"><h3>SaaS</h3><p>在可信云环境中使用平台，明确企业授权空间、云端数据范围与运营责任。</p></article><article className="content-card"><h3>私有化一体机</h3><p>以软硬一体形式部署到企业指定环境，适配企业系统、网络、身份与数据边界。</p></article></div></div></section>
    <TrustSection /><ContactCTA />
  </SiteLayout>;
}
