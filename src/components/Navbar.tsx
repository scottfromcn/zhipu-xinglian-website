import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Menu,
  X,
  LayoutDashboard,
  LogIn,
  Cpu,
  Factory,
  Train,
  Building2,
  Database,
  BookOpen,
  Code2,
  FileText,
  HelpCircle,
  MessageSquare,
  Receipt,
  Zap,
  Users
} from 'lucide-react';

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; icon: React.ReactNode; desc?: string }[];
}

const navItems: NavItem[] = [
  {
    label: '解决方案',
    children: [
      { label: '专属 TokenHub', href: '/solutions/tokenhub', icon: <Database className="w-4 h-4" />, desc: '企业级大模型算力与 API 资源中枢' },
      { label: '制造业数字员工', href: '/solutions/manufacturing', icon: <Factory className="w-4 h-4" />, desc: '采购AI切入，逐步扩展系统值守与安全值守' },
      { label: '大交通数字员工', href: '/solutions/transit', icon: <Train className="w-4 h-4" />, desc: '系统值守为核心，赋能轨交与公共交通' },
      { label: '政务数字员工', href: '/solutions/government', icon: <Building2 className="w-4 h-4" />, desc: '对外智能客服，对内办公助手' },
    ],
  },
  {
    label: '产品能力',
    children: [
      { label: '模型底座', href: '/capabilities/models', icon: <Cpu className="w-4 h-4" />, desc: 'GLM 系列大模型能力' },
      { label: '智能体平台', href: '/capabilities/agent', icon: <Zap className="w-4 h-4" />, desc: 'Agent 编排与 MCP 服务' },
      { label: 'TokenHub 控制台', href: '/capabilities/tokenhub', icon: <Database className="w-4 h-4" />, desc: '资源管理与用量监控' },
      { label: '企业知识库', href: '/capabilities/knowledge', icon: <BookOpen className="w-4 h-4" />, desc: '企业级 Wiki 文档协作与知识管理' },
    ],
  },
  {
    label: '文档',
    children: [
      { label: '快速开始', href: '/docs/quickstart', icon: <Zap className="w-4 h-4" /> },
      { label: 'API 文档', href: '/docs/api', icon: <Code2 className="w-4 h-4" /> },
      { label: '开发指南', href: '/docs/guide', icon: <FileText className="w-4 h-4" /> },
      { label: '常见问题', href: '/docs/faq', icon: <HelpCircle className="w-4 h-4" /> },
    ],
  },
  {
    label: '客户案例',
    href: '/cases',
  },
  {
    label: '定价',
    children: [
      { label: 'TokenHub 计费', href: '/pricing/tokenhub', icon: <Receipt className="w-4 h-4" /> },
      { label: '数字员工订阅', href: '/pricing/employees', icon: <Users className="w-4 h-4" /> },
      { label: '特惠专区', href: '/pricing/special', icon: <Zap className="w-4 h-4" /> },
    ],
  },
  {
    label: '支持',
    children: [
      { label: '常见问题', href: '/support/faq', icon: <HelpCircle className="w-4 h-4" /> },
      { label: '提交工单', href: '/support/ticket', icon: <MessageSquare className="w-4 h-4" /> },
      { label: '联系销售', href: '/support/sales', icon: <Users className="w-4 h-4" /> },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg text-gray-900">智谱星连</span>
              <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${scrolled ? 'bg-gray-100 text-gray-500' : 'bg-white/20 text-gray-600'}`}>
                BigModel
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      scrolled
                        ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      scrolled
                        ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-white/10'
                    } ${activeDropdown === item.label ? (scrolled ? 'bg-gray-50' : 'bg-white/10') : ''}`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <div className="mt-0.5 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                            {child.icon}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{child.label}</div>
                            {child.desc && <div className="text-xs text-gray-500 mt-0.5">{child.desc}</div>}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/console"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white/10'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              控制台
            </Link>
            <Link
              to="/login"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              登录 / 注册
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {item.label}
                    </div>
                  )}
                  {item.children?.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {child.icon}
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100 flex gap-3">
                <Link
                  to="/console"
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium border border-gray-200 text-gray-700 hover:bg-gray-50"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  控制台
                </Link>
                <Link
                  to="/login"
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium bg-gray-900 text-white"
                >
                  <LogIn className="w-4 h-4" />
                  登录
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
