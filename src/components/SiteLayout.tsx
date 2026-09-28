import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import BusinessNav from './BusinessNav';
import { businessDirection } from '@/data/business';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="corporate-site"><a className="skip-link" href="#main-content">跳至正文</a><Navbar /><main id="main-content"><BusinessNav />{children}</main><Footer /></div>;
}

export function PageHero({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children?: ReactNode }) {
  return <section className="page-hero"><div className="site-shell"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="hero-description">{description}</p>{children}</div></section>;
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <div className="section-heading">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export function ActionLink({ to, children, secondary = false }: { to: string; children: ReactNode; secondary?: boolean }) {
  return <Link to={to} className={`action-link${secondary ? ' secondary' : ''}`}>{children}<ArrowRight size={17} aria-hidden="true" /></Link>;
}

export function ContactCTA() {
  const { pathname } = useLocation();
  const direction = businessDirection(pathname);
  const content = direction === 'industrial'
    ? { eyebrow: '工业智能 / 从场景评测开始', title: '为您的工业场景，找到合适的 AI 方案', desc: '围绕业务任务、候选方案和现有系统，明确评测、连接、运行与模型服务的交付范围。', to: '/support/sales?business=industrial', action: '沟通工业智能需求' }
    : direction === 'office'
      ? { eyebrow: '办公智能 / OfficeAI 私有化方案', title: '让已有系统与知识，服务日常办公', desc: '围绕办公任务，梳理模型需求、系统连接和知识建设，规划私有化部署与双层可信验收。', to: '/support/sales?business=office', action: '沟通办公智能需求' }
      : { eyebrow: '智谱星连 / 业务沟通', title: '从您的业务需求开始', desc: '选择工业智能或办公智能，与我们沟通对应的产品、解决方案和交付方式。', to: '/support/sales', action: '沟通业务需求' };
  return <section className="contact-cta"><div className="site-shell cta-inner"><div><p className="eyebrow">{content.eyebrow}</p><h2>{content.title}</h2><p>{content.desc}</p></div><ActionLink to={content.to}>{content.action}</ActionLink></div></section>;
}
