import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigation } from '@/data/business';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header" onKeyDown={(event) => { if (event.key === 'Escape') setOpen(false); }}>
      <div className="site-shell header-inner">
        <Link to="/" className="brand" aria-label="智谱星连首页" onClick={() => setOpen(false)}>
          <span className="brand-mark">Z</span><span>智谱星连<small>工业智能 · 国企办公</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="主导航">
          {navigation.map((item) => <NavLink key={item.href} to={item.href} className={({ isActive }) => isActive ? 'active' : ''}>{item.label}</NavLink>)}
        </nav>
        <Link className="header-cta" to="/support/sales">预约演示 <ArrowUpRight size={15} /></Link>
        <button className="mobile-toggle" aria-label={open ? '关闭导航' : '打开导航'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav site-shell" aria-label="手机导航">
        {navigation.map((item) => <NavLink key={item.href} to={item.href} onClick={() => setOpen(false)}>{item.label}</NavLink>)}
        <Link to="/support/sales" onClick={() => setOpen(false)}>预约演示 ↗</Link>
      </nav>}
    </header>
  );
}
