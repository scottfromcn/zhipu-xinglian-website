import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';
import IndustrialPlatformPage from './pages/IndustrialPlatformPage';
import IndustrialSolutionsPage from './pages/IndustrialSolutionsPage';
import OfficeAIPage from './pages/OfficeAIPage';
import { AboutPage, CasesPage, SalesPage } from './pages/CompanyPages';
import './site.css';

const titles: Record<string, string> = {
  '/': '工业智能与 OfficeAI 国企办公', '/industrial-platform': '工业智能体平台',
  '/solutions/industrial': '工业 AI 解决方案', '/office-ai': 'OfficeAI 国企办公',
  '/cases': '客户案例', '/about': '关于我们', '/support/sales': '预约方案演示',
};
const redirects: Record<string, string> = {
  '/solutions/tokenhub': '/office-ai#tokenhub', '/solutions/manufacturing': '/solutions/industrial#procurement',
  '/solutions/transit': '/solutions/industrial#operations', '/solutions/government': '/office-ai',
  '/capabilities/models': '/industrial-platform', '/capabilities/agent': '/industrial-platform',
  '/capabilities/tokenhub': '/office-ai#tokenhub', '/capabilities/knowledge': '/office-ai#skillhub',
  '/pricing/tokenhub': '/office-ai#tokenhub', '/pricing/employees': '/office-ai',
};

export default function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = `${titles[pathname] || '产品与服务'} | 智谱星连`;
    const frame = requestAnimationFrame(() => {
      const target = hash && document.getElementById(hash.slice(1));
      if (target) target.scrollIntoView();
      else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/industrial-platform" element={<IndustrialPlatformPage />} />
    <Route path="/solutions/industrial" element={<IndustrialSolutionsPage />} />
    <Route path="/office-ai" element={<OfficeAIPage />} />
    <Route path="/cases" element={<CasesPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/support/sales" element={<SalesPage />} />
    {Object.entries(redirects).map(([from, to]) => <Route key={from} path={from} element={<Navigate to={to} replace />} />)}
    <Route path="/docs/:page" element={<PlaceholderPage title="产品文档" />} />
    <Route path="/support/:page" element={<PlaceholderPage title="产品支持" />} />
    <Route path="/pricing/special" element={<PlaceholderPage title="商务方案" />} />
    <Route path="/console" element={<PlaceholderPage title="产品控制台" />} />
    <Route path="/login" element={<PlaceholderPage title="产品登录" />} />
    <Route path="/terms" element={<PlaceholderPage title="服务条款" />} />
    <Route path="/privacy" element={<PlaceholderPage title="隐私政策" />} />
    <Route path="/news" element={<PlaceholderPage title="新闻动态" />} />
    <Route path="/careers" element={<PlaceholderPage title="加入我们" />} />
    <Route path="*" element={<PlaceholderPage title="页面暂不可用" />} />
  </Routes>;
}
