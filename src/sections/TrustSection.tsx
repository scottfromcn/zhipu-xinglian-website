import { useLocation } from 'react-router-dom';
import { businessDirection } from '@/data/business';
import { ClipboardCheck, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/SiteLayout';

const trustLayers = [
  { title: '业务可信', summary: '有依据，能验证，可复核', icon: ClipboardCheck,
    description: '数据与知识有来源，模型与 Agent 围绕真实任务评测。保留引用依据、执行过程和工具调用记录，让结果可核验，关键结论与操作由授权人员复核。',
    details: ['数据来源与知识版本可追溯', '任务质量与业务规则可评测', 'Agent 执行留痕，关键操作可复核'], evidence: '验收依据：场景样本、评测报告、引用与执行记录。' },
  { title: '数据安全可信', summary: '权限可控，边界清晰，全程可审计', icon: ShieldCheck,
    description: '将数据、知识、模型服务、连接器与 Agent 运行纳入整套可信环境。按身份和最小权限开放访问，明确数据存储、传输、模型调用与运维边界。',
    details: ['按组织与角色控制数据、知识和工具访问', '明确环境隔离、数据保护与模型调用范围', '系统连接与运维操作授权，安全审计留痕'], evidence: '验收依据：数据流向、权限配置、隔离与访问验证、审计记录。' },
];

export default function TrustSection() {
  const { pathname } = useLocation();
  const direction = businessDirection(pathname);
  const note = direction === 'industrial'
    ? '工业 SaaS 明确云端数据范围与租户边界；私有化一体机明确企业侧部署边界。安全控制与验收项结合实际环境逐项确认。'
    : direction === 'office'
      ? 'OfficeAI 全部私有化交付，明确客户侧的数据、系统连接、模型调用与运维边界，逐项确认安全控制和验收证据。'
      : '工业智能与办公智能分别建设产品与解决方案，共同以业务效果和数据安全作为交付要求。';
  return <section className="section-pad trust-section" id="trust"><div className="site-shell">
    <SectionHeading eyebrow="双层可信 / 共同的交付原则" title="业务可信，数据安全可信" description="既关注 AI 能否把任务做好，也关注数据是否始终处于受控边界。两层可信贯穿评测、接入、部署和持续运行。" />
    <div className="two-grid">{trustLayers.map(({ title, summary, icon: Icon, description, details, evidence }, index) => <article className="content-card trust-card" key={title}>
      <div className="module-top"><Icon size={26} aria-hidden="true" /><span>TRUST / 0{index + 1}</span></div><h3>{title}</h3><p className="trust-summary">{summary}</p><p>{description}</p>
      <ul className="feature-list">{details.map(detail => <li key={detail}>{detail}</li>)}</ul><p className="trust-details">{evidence}</p>
    </article>)}</div>
    <p className="section-note">{note}</p>
  </div></section>;
}
