import CustomerPractices from '@/sections/CustomerPractices';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SiteLayout, { PageHero, SectionHeading, ActionLink, ContactCTA } from '@/components/SiteLayout';

export function CasesPage() {
  return <SiteLayout><PageHero eyebrow="办公智能 / OfficeAI 客户实践" title="让已有信息化投入，持续产生价值" description="从苏州地铁、苏州交通到苏州发改委及政府侧，OfficeAI 已积累三个客户项目的实践经验。围绕各自业务，连接系统、组织知识，推进私有化智能办公。" />
    <section className="section-pad"><div className="site-shell"><SectionHeading eyebrow="三个项目 / 共同的落地课题" title="已有系统如何被 AI 用起来" description="客户拥有不同的系统与资料，项目都需要围绕模型能力、系统连接和知识沉淀展开，结合实际环境确定实施范围。" /><CustomerPractices /></div></section>
    <section className="section-pad section-tint"><div className="site-shell"><SectionHeading eyebrow="苏州地铁 / 既有办公应用" title="从具体任务，积累组织能力" description="既有办公实践涵盖制度查询、人事服务、评标辅助与合同审查，关键结论由业务人员复核。" /><div className="four-grid">{[['制度专员', '辅助查询企业制度与业务规则。'], ['人事专员', '辅助人事业务咨询与资料处理。'], ['评标专员', '围绕评标资料开展辅助处理。'], ['合同审查专员', '辅助分析合同条款，供专业人员复核。']].map(([title, desc]) => <article className="content-card" key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
    <section className="section-pad"><div className="site-shell"><SectionHeading eyebrow="项目方法" title="从已有资产，到可验证的任务成果" description="以同一条实施路径梳理不同项目，按客户实际范围确认连接、知识与交付内容。" /><div className="four-grid">{[
      ['梳理已有资产', '盘点业务系统、资料、知识和组织权限，确认可用范围。'],
      ['连接与沉淀', '适配系统连接器，整理知识来源与版本，将成熟方法沉淀为技能。'],
      ['配置办公任务', '围绕任务选择模型，配置 Agent、工具调用与业务复核流程。'],
      ['双层可信验收', '核验任务质量、引用与执行记录，同时检查数据流向、权限和安全边界。'],
    ].map(([title, desc], index) => <article className="content-card" key={title}><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{desc}</p></article>)}</div><div className="section-action"><ActionLink to="/office-ai">了解 OfficeAI 产品与方案</ActionLink></div></div></section><ContactCTA /></SiteLayout>;
}

export function AboutPage() {
  return <SiteLayout><PageHero eyebrow="关于智谱星连" title="连接 AI 能力与企业实际业务" description="江苏智谱星连以业务可信与数据安全可信为共同基础，提供评测先行的工业智能平台与解决方案，以及连接已有系统、沉淀组织知识的 OfficeAI 私有化办公方案。" />
    <section className="section-pad"><div className="site-shell"><SectionHeading title="两条业务主线，面向明确需求" /><div className="two-grid"><article className="content-card"><p className="eyebrow">工业智能</p><h3>平台与场景协同</h3><p>以场景评测、企业连接器、智能体运行时和模型服务支撑工业 AI 落地，提供 SaaS 与私有化一体机两种形式。</p><ActionLink to="/industrial-ai" secondary>了解工业智能</ActionLink></article><article className="content-card"><p className="eyebrow">国企办公</p><h3>办公智能 · OfficeAI</h3><p>以优质模型、系统连接和知识沉淀支撑国企与政务办公。标准产品结合连接器建设、知识治理与场景实施，全部私有化交付。</p><ActionLink to="/office-ai" secondary>了解 OfficeAI</ActionLink></article></div></div></section>
    <section className="section-pad section-tint" id="tac"><div className="site-shell"><SectionHeading eyebrow="支撑理念 / TAC" title="让 AI 投入转化为业务价值" description="从资源使用、能力质量与业务效果三个方面评估 AI 应用，让产品建设始终围绕实际任务与可验证成果展开。" /><div className="three-grid">{[['资源使用', '关注模型调用、资源配额与使用成本。'], ['能力质量', '关注任务完成质量、知识适配与工具协作。'], ['业务价值', '关注员工采用、流程效率与可复用成果。']].map(([title, desc]) => <article className="content-card" key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section><ContactCTA /></SiteLayout>;
}

export function SalesPage() {
  const [params] = useSearchParams();
  const [business, setBusiness] = useState(params.get('business') === 'office' ? 'OfficeAI 国企与政务办公' : '工业智能体平台与工业 AI 解决方案');
  const [scenario, setScenario] = useState(params.get('intent') === 'evaluation' ? '希望开展工业 AI 场景评测：比较候选方案的任务质量、数据安全、时延与成本。' : '');
  const [brief, setBrief] = useState('');
  const deployment = business === 'OfficeAI 国企与政务办公' ? 'OfficeAI：全部私有化部署' : business === '两条业务线均希望了解' ? '工业平台：SaaS 或私有化一体机；OfficeAI：全部私有化部署' : '工业平台：SaaS 或私有化一体机';
  const generateBrief = () => {
    const content = `智谱星连｜方案演示需求清单\n\n关注方向：${business}\n交付形式：${deployment}\n双层可信要求：业务可信（评测、依据与复核）；数据安全可信（权限、数据边界与审计）\n业务场景：${scenario.trim() || '待沟通'}\n\n建议沟通事项：\n1. 使用部门与具体任务\n2. 现有系统、连接器需求、知识资料与更新方式\n3. 部署环境、权限、数据流向与模型调用边界\n4. 候选方案、模型质量、评测样本与验收标准\n\n本清单仅保存在本地，尚未发送或预约。请交给现有业务对接人。\n`;
    setBrief(content);
  };
  return <SiteLayout><PageHero eyebrow="方案沟通 / 演示准备" title="从您的业务需求开始" description="选择关注的方向，整理希望演示的任务与场景，便于与智谱星连业务对接人沟通。" /><section className="section-pad"><div className="site-shell sales-grid"><div><SectionHeading title="演示可以围绕哪些内容展开" /><ul className="feature-list"><li>工业平台：场景评测、企业连接器、运行时与模型服务；SaaS 或私有化一体机。</li><li>工业 AI：围绕采购、运维或研发任务，比较候选方案的质量、安全、时延与成本。</li><li>OfficeAI：优质模型、既有系统连接与知识沉淀；标准产品结合实施服务，全部私有化。</li></ul><p className="contact-notice">在线预约通道暂未开放。您可以生成并保存需求清单，通过现有业务对接人安排演示；此页面不会发送您的信息。</p></div><form className="sales-form" onSubmit={(event) => { event.preventDefault(); generateBrief(); }}><label htmlFor="business">关注方向</label><select id="business" value={business} onChange={(event) => { setBusiness(event.target.value); setBrief(''); }}><option>工业智能体平台与工业 AI 解决方案</option><option>OfficeAI 国企与政务办公</option><option>两条业务线均希望了解</option></select><p className="deployment-notice">{deployment}。共同要求：业务可信与数据安全可信，整套可信环境部署。</p><label htmlFor="scenario">希望演示的业务场景（选填）</label><textarea id="scenario" rows={5} maxLength={2000} value={scenario} onChange={(event) => { setScenario(event.target.value); setBrief(''); }} placeholder="例如：根据企业制度回答员工问题，并辅助整理办公材料。" /><button type="submit" className="action-link">生成演示需求清单</button><p role="status">{brief ? '清单已生成，可在下方预览、复制或下载。尚未发送或预约。' : '内容仅用于生成本地清单。'}</p>{brief && <div className="brief-result"><label htmlFor="brief">需求清单预览（可选中复制）</label><textarea id="brief" rows={12} readOnly value={brief} /><a className="action-link secondary" href={`data:text/plain;charset=utf-8,${encodeURIComponent(brief)}`} download="智谱星连-演示需求清单.txt">下载文本文件</a></div>}</form></div></section></SiteLayout>;
}
