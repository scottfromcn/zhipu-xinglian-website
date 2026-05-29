import { Link } from 'react-router-dom';
import { Database, Factory, Train, Building2, FileText, HelpCircle, Receipt, Users, Mail, Phone } from 'lucide-react';

const footerLinks = {
  products: {
    title: '产品',
    links: [
      { label: '专属 TokenHub', href: '/solutions/tokenhub', icon: <Database className="w-3.5 h-3.5" /> },
      { label: '制造业数字员工', href: '/solutions/manufacturing', icon: <Factory className="w-3.5 h-3.5" /> },
      { label: '大交通数字员工', href: '/solutions/transit', icon: <Train className="w-3.5 h-3.5" /> },
      { label: '政务数字员工', href: '/solutions/government', icon: <Building2 className="w-3.5 h-3.5" /> },
    ],
  },
  docs: {
    title: '文档',
    links: [
      { label: '快速开始', href: '/docs/quickstart', icon: <FileText className="w-3.5 h-3.5" /> },
      { label: 'API 文档', href: '/docs/api', icon: <FileText className="w-3.5 h-3.5" /> },
      { label: '开发指南', href: '/docs/guide', icon: <FileText className="w-3.5 h-3.5" /> },
      { label: '常见问题', href: '/docs/faq', icon: <HelpCircle className="w-3.5 h-3.5" /> },
    ],
  },
  pricing: {
    title: '定价',
    links: [
      { label: 'TokenHub 计费', href: '/pricing/tokenhub', icon: <Receipt className="w-3.5 h-3.5" /> },
      { label: '数字员工订阅', href: '/pricing/employees', icon: <Users className="w-3.5 h-3.5" /> },
      { label: '特惠专区', href: '/pricing/special', icon: <Receipt className="w-3.5 h-3.5" /> },
    ],
  },
  company: {
    title: '公司',
    links: [
      { label: '关于我们', href: '/about', icon: <Users className="w-3.5 h-3.5" /> },
      { label: 'TAC 理念', href: '/about#tac', icon: <FileText className="w-3.5 h-3.5" /> },
      { label: '新闻动态', href: '/news', icon: <FileText className="w-3.5 h-3.5" /> },
      { label: '加入我们', href: '/careers', icon: <Users className="w-3.5 h-3.5" /> },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <div>
                <span className="font-bold text-white text-lg">智谱星连</span>
                <span className="text-xs text-gray-500 ml-2">BigModel</span>
              </div>
            </Link>
            <p className="text-sm text-gray-500 mb-6 max-w-xs">
              智谱 × 苏州地铁 × 新建元数科 三方联合打造，践行 TAC 理念，驱动产业智能化升级。
            </p>
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-gray-600" />
                <span>400-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-gray-600" />
                <span>contact@zhipu-xinglian.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            Copyright &copy; {new Date().getFullYear()} 江苏智谱星连科技有限公司. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <Link to="/terms" className="hover:text-gray-400 transition-colors">服务条款</Link>
            <Link to="/privacy" className="hover:text-gray-400 transition-colors">隐私政策</Link>
            <span>京ICP备XXXXXXXX号</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
