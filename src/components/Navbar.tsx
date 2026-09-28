import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigation, businessDirection } from '@/data/business';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const direction = businessDirection(pathname);
  const salesLink = direction ? `/support/sales?business=${direction}` : '/support/sales';
  const isActive = (href: string) => href === '/industrial-ai' ? direction === 'industrial' : href === '/office-ai' ? direction === 'office' : pathname === href;
  return (
    <header className="site-header" onKeyDown={(event) => { if (event.key === 'Escape') setOpen(false); }}>
      <div className="site-shell header-inner">
        <Link to="/" className="brand" aria-label="智谱星连首页" onClick={() => setOpen(false)}>
          <img className="brand-mark" src="/brand/zhipu-symbol.svg" width="36" height="36" alt="" /><span>智谱星连<small>工业智能 · 办公智能</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="主导航">
          {navigation.map((item) => <Link key={item.href} to={item.href} className={isActive(item.href) ? 'active' : ''} aria-current={isActive(item.href) ? 'page' : undefined}>{item.label}</Link>)}
        </nav>
        <Link className="header-cta" to={salesLink}>预约演示 <ArrowUpRight size={15} /></Link>
        <button className="mobile-toggle" aria-label={open ? '关闭导航' : '打开导航'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav site-shell" aria-label="手机导航">
        {navigation.map((item) => <Link key={item.href} to={item.href} className={isActive(item.href) ? 'active' : ''} aria-current={isActive(item.href) ? 'page' : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <Link to={salesLink} onClick={() => setOpen(false)}>预约演示 ↗</Link>
      </nav>}
    </header>
  );
}
