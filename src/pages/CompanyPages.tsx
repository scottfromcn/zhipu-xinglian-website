import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SiteLayout, { PageHero, SectionHeading, ActionLink, ContactCTA } from '@/components/SiteLayout';

export function CasesPage() {
  return <SiteLayout><PageHero eyebrow="客户案例 / 企业 AI 实践" title="从真实业务中积累落地经验" description="以苏州轨交的企业 AI 实践为基础，将场景经验、平台能力与组织协作逐步沉淀为可复用的解决方案。" />
    <section className="section-pad"><div className="site-shell"><SectionHeading eyebrow="苏州轨交 · 国企办公实践" title="从单点专员，到企业级能力沉淀" description="既有项目中已落地的办公类应用包括评标专员、人事专员、合同审查专员与制度专员，为 OfficeAI 的场景设计与技能沉淀提供实践基础。" /><div className="four-grid">{[['评标专员', '围绕评标资料开展辅助处理。'], ['人事专员', '辅助员工人事业务咨询与资料处理。'], ['合同审查专员', '辅助分析合同条款，供专业人员复核。'], ['制度专员', '辅助查询企业制度与业务规则。']].map(([title, desc]) => <article className="content-card" key={title}><span className="status-tag">既有项目实践</span><h3>{title}</h3><p>{desc}</p></article>)}</div><p className="section-note">既有案例体现业务实践基础，不代表 OfficeAI 四模块已在客户侧完整交付。</p></div></section>
    <section className="section-pad section-tint"><div className="site-shell"><SectionHeading eyebrow="后续拓展" title="办公与运维，按场景持续推进" /><div className="two-grid"><article className="content-card"><span className="status-tag">推进中</span><h3>审计专员</h3><p>围绕审计业务进一步梳理需求、专业规则与资料处理流程，纳入国企办公场景拓展。</p></article><article className="content-card"><span className="status-tag">推进中</span><h3>IT 运维专员</h3><p>围绕企业系统值守与运维辅助推进场景建设，与工业 AI 运维方向衔接。</p></article></div><p className="section-note">案例状态依据既有项目阶段记录，具体进度以项目沟通为准。</p><div className="section-action"><ActionLink to="/office-ai">了解 OfficeAI</ActionLink></div></div></section><ContactCTA /></SiteLayout>;
}

export function AboutPage() {
  return <SiteLayout><PageHero eyebrow="关于智谱星连" title="连接 AI 能力与企业实际业务" description="江苏智谱星连以数据可信、Agent 可信、环境可信为共同基础，提供工业平台 SaaS 与私有化一体机，以及全部私有化交付的 OfficeAI 国企办公方案。" />
    <section className="section-pad"><div className="site-shell"><SectionHeading title="两条业务主线，面向明确需求" /><div className="two-grid"><article className="content-card"><p className="eyebrow">工业智能</p><h3>平台与场景协同</h3><p>工业智能体平台提供 SaaS 与私有化一体机两种形式，在整套可信环境中组织供给、运行与治理，支撑工业 AI 解决方案。</p><ActionLink to="/industrial-platform" secondary>了解工业平台</ActionLink></article><article className="content-card"><p className="eyebrow">国企办公</p><h3>OfficeAI 产品组合</h3><p>TokenHub、SkillHub、Agent Admin 和 OfficeAgent 组成完整办公方案，全部私有化部署于企业可信环境，连接员工使用与企业管理。</p><ActionLink to="/office-ai" secondary>了解 OfficeAI</ActionLink></article></div></div></section>
    <section className="section-pad section-tint" id="tac"><div className="site-shell"><SectionHeading eyebrow="支撑理念 / TAC" title="让 AI 投入转化为业务价值" description="从资源使用、能力质量与业务效果三个方面评估 AI 应用，让产品建设始终围绕实际任务与可验证成果展开。" /><div className="three-grid">{[['资源使用', '关注模型调用、资源配额与使用成本。'], ['能力质量', '关注任务完成质量、知识适配与工具协作。'], ['业务价值', '关注员工采用、流程效率与可复用成果。']].map(([title, desc]) => <article className="content-card" key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section><ContactCTA /></SiteLayout>;
}

export function SalesPage() {
  const [params] = useSearchParams();
  const [business, setBusiness] = useState(params.get('business') === 'office' ? 'OfficeAI 国企办公' : '工业智能体平台与工业 AI 解决方案');
  const [scenario, setScenario] = useState('');
  const [brief, setBrief] = useState('');
  const deployment = business === 'OfficeAI 国企办公' ? 'OfficeAI：全部私有化部署' : business === '两条业务线均希望了解' ? '工业平台：SaaS 或私有化一体机；OfficeAI：全部私有化部署' : '工业平台：SaaS 或私有化一体机';
  const generateBrief = () => {
    const content = `智谱星连｜方案演示需求清单\n\n关注方向：${business}\n交付形式：${deployment}\n可信要求：数据可信、Agent 可信、整套可信环境部署\n业务场景：${scenario.trim() || '待沟通'}\n\n建议沟通事项：\n1. 使用部门与具体任务\n2. 现有系统、资料与接入范围\n3. 部署环境、权限与数据要求\n4. 试点范围、交付成果与验收标准\n\n本清单仅保存在本地，尚未发送或预约。请交给现有业务对接人。\n`;
    setBrief(content);
  };
  return <SiteLayout><PageHero eyebrow="方案沟通 / 演示准备" title="从您的业务需求开始" description="选择关注的方向，整理希望演示的任务与场景，便于与智谱星连业务对接人沟通。" /><section className="section-pad"><div className="site-shell sales-grid"><div><SectionHeading title="演示可以围绕哪些内容展开" /><ul className="feature-list"><li>工业平台：SaaS 与私有化一体机的部署形式、可信环境及运行管理。</li><li>工业 AI：采购、运维或工业研发中的具体任务。</li><li>OfficeAI：全部私有化部署、四模块协同与可信办公应用。</li></ul><p className="contact-notice">在线预约通道暂未开放。您可以生成并保存需求清单，通过现有业务对接人安排演示；此页面不会发送您的信息。</p></div><form className="sales-form" onSubmit={(event) => { event.preventDefault(); generateBrief(); }}><label htmlFor="business">关注方向</label><select id="business" value={business} onChange={(event) => { setBusiness(event.target.value); setBrief(''); }}><option>工业智能体平台与工业 AI 解决方案</option><option>OfficeAI 国企办公</option><option>两条业务线均希望了解</option></select><p className="deployment-notice">{deployment}。共同要求：数据可信、Agent 可信、整套可信环境部署。</p><label htmlFor="scenario">希望演示的业务场景（选填）</label><textarea id="scenario" rows={5} maxLength={2000} value={scenario} onChange={(event) => { setScenario(event.target.value); setBrief(''); }} placeholder="例如：根据企业制度回答员工问题，并辅助整理办公材料。" /><button type="submit" className="action-link">生成演示需求清单</button><p role="status">{brief ? '清单已生成，可在下方预览、复制或下载。尚未发送或预约。' : '内容仅用于生成本地清单。'}</p>{brief && <div className="brief-result"><label htmlFor="brief">需求清单预览（可选中复制）</label><textarea id="brief" rows={12} readOnly value={brief} /><a className="action-link secondary" href={`data:text/plain;charset=utf-8,${encodeURIComponent(brief)}`} download="智谱星连-演示需求清单.txt">下载文本文件</a></div>}</form></div></section></SiteLayout>;
}
