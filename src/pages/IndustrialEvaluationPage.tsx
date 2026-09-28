import SiteLayout, { PageHero, SectionHeading, ActionLink, ContactCTA } from '@/components/SiteLayout';

export default function IndustrialEvaluationPage() {
  return <SiteLayout>
    <PageHero eyebrow="工业智能 / 场景评测" title="用您的真实场景，找到更适合的 AI 方案" description="将候选模型、智能体或完整解决方案放到同一组业务任务中比较，明确效果、适配条件和落地差距，为选型与试点提供依据。"><div className="hero-actions"><ActionLink to="/support/sales?intent=evaluation">整理评测需求</ActionLink><ActionLink to="/industrial-platform" secondary>了解平台能力</ActionLink></div></PageHero>
    <section className="section-pad"><div className="site-shell"><SectionHeading eyebrow="评测输入" title="从场景和标准出发" description="可先围绕一个场景开展评测，再根据结果确定后续系统集成与部署范围。" /><div className="three-grid">{[
      ['业务任务', '明确使用者、工作流程、需要完成的任务，以及不能出错的关键业务规则。'],
      ['代表性样本', '准备授权范围内的任务、资料与参考结果，覆盖常见情况和重要异常，并确认数据使用边界。'],
      ['候选方案与标准', '明确待比较方案、可用接口与运行条件，约定质量、安全、时延、成本的验收口径。'],
    ].map(([title, desc]) => <article className="content-card" key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
    <section className="section-pad section-tint"><div className="site-shell"><SectionHeading eyebrow="同一场景 / 同一标准" title="比较业务效果，也核验数据安全" /><div className="two-grid">{[
      ['任务完成质量', '结果是否完整、准确、符合业务规则；由业务人员结合参考结果复核。'],
      ['依据与执行过程', '知识引用能否追溯，工具调用是否正确，关键步骤和异常能否解释与复查。'],
      ['时延与使用成本', '在约定环境和负载下比较响应时间、模型用量、运行资源与所需人工复核。'],
      ['数据与权限边界', '验证授权访问、知识可见范围、模型调用的数据流向及操作记录，识别越权与泄露风险。'],
    ].map(([title, desc], index) => <article className="content-card" key={title}><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
    <section className="section-pad"><div className="site-shell industrial-overview"><div><SectionHeading eyebrow="评测交付" title="让选型有依据，让试点有边界" description="围绕约定样本与标准形成对比结果，明确推荐条件、尚未解决的问题及后续接入要求。" /><p className="muted">评测结论对应具体样本、方案版本和测试环境。连接器、知识或模型配置变化后，应针对受影响的任务复测。</p></div><div className="platform-flow">{[
      ['方案对比', '各候选方案在相同任务与标准下的表现及证据'],
      ['适配建议', '适合的场景、依赖条件和选型建议'],
      ['差距清单', '需要补齐的连接器、知识、模型配置与安全控制'],
      ['试点依据', '建议的试点范围、验收标准和复测条件'],
    ].map(([title, desc], index) => <div className="flow-row" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{desc}</p></div></div>)}</div></div></section>
    <section className="section-pad section-tint"><div className="site-shell"><SectionHeading eyebrow="评测之后" title="连接 → 运行 → 持续验证" description="结合评测结果接入既有系统、适配智能体运行时和模型服务；在真实业务中验证任务质量与数据安全，随场景、知识和版本变化持续复测。" /><ActionLink to="/solutions/industrial" secondary>查看工业场景方案</ActionLink></div></section>
    <ContactCTA />
  </SiteLayout>;
}
