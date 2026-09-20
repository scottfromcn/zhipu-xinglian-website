import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="corporate-site"><a className="skip-link" href="#main-content">跳至正文</a><Navbar /><main id="main-content">{children}</main><Footer /></div>;
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
  return <section className="contact-cta"><div className="site-shell cta-inner"><div><p className="eyebrow">从一个具体场景开始</p><h2>找到适合您的 AI 落地路径</h2><p>围绕工业场景或国企办公需求，明确产品组合、接入范围与验收目标。</p></div><ActionLink to="/support/sales">预约方案演示</ActionLink></div></section>;
}
