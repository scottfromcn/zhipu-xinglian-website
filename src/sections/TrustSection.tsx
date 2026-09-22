import { Database, Bot, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/SiteLayout';

const trustLayers = [
  {
    title: '数据可信',
    summary: '来源有据，使用有界',
    description: '以经过确认的企业数据与知识为依据，明确来源、版本与访问权限，让 Agent 使用的信息可核验、引用可追溯。',
    details: '数据来源与版本 · 授权访问 · 引用溯源',
    icon: Database,
  },
  {
    title: 'Agent 可信',
    summary: '身份明确，行为可控',
    description: '明确 Agent 的身份、技能来源与执行权限，记录任务过程和工具调用；输出有依据、结果可复核，关键操作由授权人员确认。',
    details: '身份与技能管理 · 权限约束 · 执行留痕',
    icon: Bot,
  },
  {
    title: '环境可信',
    summary: '整套部署，统一治理',
    description: '将模型服务、数据与知识服务、Agent 运行和管理组件纳入整套可信环境，明确网络、访问与运维边界，贯穿部署和持续运行。',
    details: '运行环境隔离 · 访问控制 · 运维审计',
    icon: ShieldCheck,
  },
];

export default function TrustSection() {
  return (
    <section className="section-pad trust-section" id="trust">
      <div className="site-shell">
        <SectionHeading
          eyebrow="共同的产品基石 / 可信 AI"
          title="数据可信，Agent 可信，环境可信"
          description="从数据依据到任务执行，再到整套环境部署，以可核验、可控制、可追溯作为工业智能与国企办公共同的交付要求。"
        />
        <div className="three-grid">
          {trustLayers.map(({ title, summary, description, details, icon: Icon }) => (
            <article className="content-card trust-card" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p className="trust-summary">{summary}</p>
              <p>{description}</p>
              <p className="trust-details">{details}</p>
            </article>
          ))}
        </div>
        <p className="section-note">围绕数据、Agent 与环境逐项确认配置和验收证据，让“可信”落实到可检查的交付内容。</p>
      </div>
    </section>
  );
}
