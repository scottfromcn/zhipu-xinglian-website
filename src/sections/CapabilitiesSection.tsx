import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, Database, BookOpen, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    id: 'models',
    label: '模型底座',
    icon: <Cpu className="w-5 h-5" />,
    title: '智谱 GLM 旗舰大模型',
    desc: '基于智谱最新一代 GLM-5.1 与 GLM-5V-Turbo 大模型，为企业提供强大的文本理解、生成与多模态处理能力',
    features: [
      'GLM-5.1：长程任务执行，可持续工作 8 小时',
      'GLM-5V-Turbo：多模态视觉理解，200K 上下文',
      'GLM-Image：文字渲染 SOTA，图文混合生成',
      'GLM-OCR：轻量专业文档解析',
    ],
    cta: '查看全部模型',
    href: '/capabilities/models',
  },
  {
    id: 'agent',
    label: '智能体平台',
    icon: <Zap className="w-5 h-5" />,
    title: 'Agent 编排与 MCP 服务',
    desc: '可视化智能体工作流编排，一键接入 MCP 工具市场，让 AI 真正具备自主规划与执行能力',
    features: [
      '可视化 Agent 工作流编排',
      'MCP 工具市场一键接入',
      '多轮对话与上下文管理',
      '工具调用与外部系统集成',
    ],
    cta: '了解智能体平台',
    href: '/capabilities/agent',
  },
  {
    id: 'tokenhub',
    label: 'TokenHub',
    icon: <Database className="w-5 h-5" />,
    title: '企业级 Token 资源管理',
    desc: '统一的 Token 配额管理、模型路由、用量监控与成本优化，让企业 AI 资源使用透明可控',
    features: [
      'Token 配额管理与分配',
      '多模型智能路由',
      '实时用量监控与告警',
      '成本分析与优化建议',
    ],
    cta: '探索 TokenHub',
    href: '/capabilities/tokenhub',
  },
  {
    id: 'knowledge',
    label: '企业知识库',
    icon: <BookOpen className="w-5 h-5" />,
    title: 'RAG 驱动的知识引擎',
    desc: '基于 GLM-OCR 与 RAG 技术，实现企业知识的高效接入、智能检索与精准问答',
    features: [
      '多格式文档智能解析（PDF/Word/扫描件）',
      '向量化知识存储与检索',
      '精准问答与引用溯源',
      '知识自动更新与同步',
    ],
    cta: '了解知识库',
    href: '/capabilities/knowledge',
  },
];

export default function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState('models');
  const active = capabilities.find((c) => c.id === activeTab)!;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            从模型到应用，一站式能力支撑
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            覆盖大模型底座、智能体平台、资源管理、知识引擎的全栈技术能力
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {capabilities.map((cap) => (
            <button
              key={cap.id}
              onClick={() => setActiveTab(cap.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === cap.id
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {cap.icon}
              {cap.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left: Info */}
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-semibold mb-5">
                  {active.icon}
                  {active.label}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {active.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {active.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {active.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-600 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={active.href}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all w-fit"
                >
                  {active.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right: Visual */}
              <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 min-h-[320px] flex items-center justify-center">
                <div className="relative">
                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl" />
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-violet-200/30 rounded-full blur-2xl" />

                  {/* Center Icon */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-xl"
                  >
                    <div className="text-white">
                      {active.icon}
                    </div>
                    {/* Orbiting dots */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                      className="absolute inset-0"
                    >
                      <div className="absolute -top-1 left-1/2 w-3 h-3 bg-white rounded-full shadow" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                      className="absolute inset-[-12px]"
                    >
                      <div className="absolute top-0 right-0 w-2 h-2 bg-blue-300 rounded-full" />
                    </motion.div>
                  </motion.div>

                  {/* Floating cards */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute -top-4 -right-16 bg-white rounded-xl p-3 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="text-xs">
                        <div className="font-medium text-gray-900">服务就绪</div>
                        <div className="text-gray-400">99.9% SLA</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                    className="absolute -bottom-4 -left-16 bg-white rounded-xl p-3 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Database className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="text-xs">
                        <div className="font-medium text-gray-900">Token 管理</div>
                        <div className="text-gray-400">实时监控</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
