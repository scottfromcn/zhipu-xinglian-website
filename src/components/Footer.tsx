import { Link } from 'react-router-dom';
import { officeModules } from '@/data/business';

export default function Footer() {
  return <footer className="site-footer"><div className="site-shell">
    <div className="footer-grid">
      <div><Link to="/" className="brand"><img className="brand-mark" src="/brand/zhipu-symbol.svg" width="36" height="36" alt="" /><span>智谱星连</span></Link><p>让可信 AI 深入工业现场，走进国企办公。</p><p className="footer-note">数据可信 · Agent 可信 · 环境可信<br />工业平台：SaaS / 私有化一体机<br />OfficeAI：全部私有化部署</p></div>
      <div><h2>工业智能</h2><Link to="/industrial-platform">工业智能体平台</Link><Link to="/solutions/industrial">工业 AI 解决方案</Link><Link to="/solutions/industrial#engineering">工业研发与工程</Link></div>
      <div><h2>OfficeAI 国企办公</h2>{officeModules.map((item) => <Link key={item.id} to={`/office-ai#${item.id}`}>{item.name}</Link>)}</div>
      <div><h2>了解星连</h2><Link to="/cases">客户案例</Link><Link to="/about">关于我们</Link><Link to="/about#tac">TAC 价值理念</Link><Link to="/support/sales">预约演示</Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} 江苏智谱星连科技有限公司</span><span>工业智能体平台 / OfficeAI</span></div>
  </div></footer>;
}
