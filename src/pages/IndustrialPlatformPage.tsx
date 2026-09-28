import SiteLayout, { PageHero, SectionHeading, ActionLink, ContactCTA } from '@/components/SiteLayout';
import { platformCapabilities } from '@/data/business';
import TrustSection from '@/sections/TrustSection';

export default function IndustrialPlatformPage() {
  return <SiteLayout>
    <PageHero eyebrow="工业智能 / 星连工业智能体平台" title="先选对方案，再让它在工业现场运行" description="以场景评测为起点，通过企业连接器打通现有系统，适配智能体运行时与优质模型服务。提供 SaaS 与私有化一体机两种形式，让 AI 的业务效果与数据安全都可验证。"><div className="hero-actions"><ActionLink to="/industrial-evaluation">了解场景评测</ActionLink><ActionLink to="/solutions/industrial" secondary>探索工业 AI 场景</ActionLink></div></PageHero>
    <section className="section-pad"><div className="site-shell"><SectionHeading eyebrow="四项产品能力" title="评测、连接、运行、模型服务" description="围绕具体业务场景组织能力，明确每一步的输入、实施范围与验收结果。" /><div className="four-grid">{platformCapabilities.map((item, index) => <article className="content-card" key={item.title}><span className="step-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div></div></section>
    <section className="section-pad section-tint" id="evaluation"><div className="site-shell industrial-overview"><div><SectionHeading eyebrow="第一步 / 场景评测" title="一个场景，多种方案，哪个更适合？" description="从客户真实任务和数据样本出发，在同一标准下比较候选方案。先明确适配条件与差距，再决定选型、集成和部署。" /><ActionLink to="/industrial-evaluation" secondary>查看评测产品</ActionLink></div><div className="platform-flow">{[
      ['评测输入', '业务场景、代表性样本、候选方案与验收标准'],
      ['对比维度', '任务质量、依据与规则、时延、成本及数据安全边界'],
      ['评测交付', '方案对比、适配建议、差距清单与试点验收依据'],
    ].map(([title, desc], index) => <div className="flow-row" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{desc}</p></div></div>)}</div></div></section>
    <section className="section-pad"><div className="site-shell"><SectionHeading eyebrow="从选型到运行" title="接入已有业务，持续完成任务" /><div className="three-grid">{[
      ['企业连接器', '连接系统，保留既有投入', '围绕现有业务系统、数据、知识、工具与设备梳理接口，将授权的查询和操作能力开放给智能体。接入前明确权限、数据流向与业务规则。'],
      ['智能体运行时', '适配任务，管理执行过程', '按方案所需的框架、工具和运行依赖适配运行时，规划任务执行、监控、异常处置与版本维护；具体适配范围结合企业环境验证。'],
      ['Token 与模型服务', '关注质量，也管理使用成本', '以任务效果选择模型，结合质量、稳定性、时延与成本确定服务配置，通过 TokenHub 统一管理调用授权、额度和用量。'],
    ].map(([tag, title, desc]) => <article className="content-card" key={tag}><p className="eyebrow">{tag}</p><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
    <TrustSection />
    <section className="section-pad" id="deployment"><div className="site-shell"><SectionHeading eyebrow="交付形式" title="SaaS 与私有化一体机，按企业需求选择" description="两种形式都以业务可信与数据安全可信为交付要求，分别明确部署位置、数据范围与运营分工。" /><div className="two-grid">
      <article className="content-card"><p className="eyebrow">SaaS</p><h3>可信云环境中的平台服务</h3><p>在企业授权空间内使用平台，结合场景需要选择评测、系统连接与智能体运行能力。</p><ul className="feature-list"><li>平台统一部署与运营运行环境</li><li>明确云端数据范围、租户隔离与访问权限</li><li>按接口和数据条件确认企业系统连接方式</li></ul></article>
      <article className="content-card"><p className="eyebrow">私有化一体机</p><h3>部署在企业侧的整套可信环境</h3><p>以软硬一体形式交付，在企业指定环境中部署模型、连接器、知识服务及 Agent 运行与管理组件。</p><ul className="feature-list"><li>按企业计算、网络、身份与数据边界配置</li><li>验证系统接入、运行依赖与模型服务适配</li><li>明确升级、运维授权、审计和验收责任</li></ul></article>
    </div></div></section>
    <ContactCTA />
  </SiteLayout>;
}
