import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';
import TokenHubPage from './pages/solutions/TokenHubPage';
import ManufacturingPage from './pages/solutions/ManufacturingPage';
import TransitPage from './pages/solutions/TransitPage';
import GovernmentPage from './pages/solutions/GovernmentPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Solutions */}
      <Route path="/solutions/tokenhub" element={<TokenHubPage />} />
      <Route path="/solutions/manufacturing" element={<ManufacturingPage />} />
      <Route path="/solutions/transit" element={<TransitPage />} />
      <Route path="/solutions/government" element={<GovernmentPage />} />
      {/* Capabilities */}
      <Route path="/capabilities/models" element={<PlaceholderPage title="模型底座" />} />
      <Route path="/capabilities/agent" element={<PlaceholderPage title="智能体平台" />} />
      <Route path="/capabilities/tokenhub" element={<PlaceholderPage title="TokenHub 控制台" />} />
      <Route path="/capabilities/knowledge" element={<PlaceholderPage title="企业知识库" />} />
      {/* Docs */}
      <Route path="/docs/quickstart" element={<PlaceholderPage title="快速开始" />} />
      <Route path="/docs/api" element={<PlaceholderPage title="API 文档" />} />
      <Route path="/docs/guide" element={<PlaceholderPage title="开发指南" />} />
      <Route path="/docs/faq" element={<PlaceholderPage title="常见问题" />} />
      {/* Cases */}
      <Route path="/cases" element={<PlaceholderPage title="客户案例" />} />
      {/* Pricing */}
      <Route path="/pricing/tokenhub" element={<PlaceholderPage title="TokenHub 计费" />} />
      <Route path="/pricing/employees" element={<PlaceholderPage title="数字员工订阅" />} />
      <Route path="/pricing/special" element={<PlaceholderPage title="特惠专区" />} />
      {/* Support */}
      <Route path="/support/faq" element={<PlaceholderPage title="常见问题" />} />
      <Route path="/support/ticket" element={<PlaceholderPage title="提交工单" />} />
      <Route path="/support/sales" element={<PlaceholderPage title="联系销售" />} />
      {/* About */}
      <Route path="/about" element={<PlaceholderPage title="关于我们" />} />
      <Route path="/news" element={<PlaceholderPage title="新闻动态" />} />
      <Route path="/careers" element={<PlaceholderPage title="加入我们" />} />
      {/* Console & Auth */}
      <Route path="/console" element={<PlaceholderPage title="控制台" />} />
      <Route path="/login" element={<PlaceholderPage title="登录 / 注册" />} />
      {/* Legal */}
      <Route path="/terms" element={<PlaceholderPage title="服务条款" />} />
      <Route path="/privacy" element={<PlaceholderPage title="隐私政策" />} />
    </Routes>
  );
}
