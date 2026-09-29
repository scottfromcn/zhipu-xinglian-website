import { Link, useLocation } from 'react-router-dom';
import { businessDirection } from '@/data/business';

const links = {
  industrial: [
    ['业务概览', '/industrial-ai'], ['场景评测', '/industrial-evaluation'],
    ['智能体平台', '/industrial-platform'], ['平台架构', '/industrial-platform#architecture'], ['工业解决方案', '/solutions/industrial'],
  ],
  office: [
    ['OfficeAI 方案', '/office-ai'], ['核心能力', '/office-ai#models'],
    ['产品组成', '/office-ai#products'], ['方案架构', '/office-ai#architecture'], ['私有化交付', '/office-ai#deployment'], ['客户实践', '/cases'],
  ],
};

export default function BusinessNav() {
  const { pathname, hash } = useLocation();
  const direction = businessDirection(pathname);
  if (!direction) return null;
  return <div className="business-nav"><div className="site-shell business-nav-inner">
    <span className="business-nav-title">{direction === 'industrial' ? '工业智能' : '办公智能'}</span>
    <nav aria-label={direction === 'industrial' ? '工业智能业务导航' : '办公智能业务导航'}>{links[direction].map(([label, to]) => <Link key={to} to={to} aria-current={pathname + hash === to ? 'page' : undefined}>{label}</Link>)}</nav>
  </div></div>;
}
