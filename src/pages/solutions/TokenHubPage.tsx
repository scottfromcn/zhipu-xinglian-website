import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, BarChart3, Route, Bell, Shield, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const features = [
  {
    icon: <Database className="w-6 h-6" />,
    title: '统一 Token 配额管理',
    desc: '集中管理多个大模型服务的 Token 配额，支持按部门、项目、应用灵活分配与回收',
  },
  {
    icon: <Route className="w-6 h-6" />,
    title: '多模型智能路由',
    desc: '根据任务类型、成本预算、响应延迟自动选择最优模型，兼顾效果与成本',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: '实时用量监控',
    desc: '可视化仪表盘实时展示 Token 消耗趋势、成本分布、异常波动，支持自定义告警',
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: '智能告警与预算控制',
    desc: '预设预算阈值，超支自动预警，防止 Token 消耗失控导致的意外账单',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: '安全与合规',
    desc: 'API Key 统一托管、访问权限分级、操作审计日志，满足企业安全合规要求',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: '成本优化建议',
    desc: 'AI 自动分析用量模式，识别浪费与优化空间，提供可执行的降本建议',
  },
];

const stats = [
  { value: '99.9%', label: '服务可用性' },
  { value: '< 50ms', label: '路由延迟' },
  { value: '30%+', label: '平均成本优化' },
  { value: '100+', label: '企业客户' },
];

export default function TokenHubPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <Database className="w-4 h-4" />
              核心基础设施
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              专属 TokenHub
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                企业级大模型算力与 API 资源中枢
              </span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mb-8 leading-relaxed">
              统一管理 Token 配额、模型路由与用量监控，让企业 AI 资源使用透明可控，每一分钱都花在刀刃上。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/support/sales"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all"
              >
                预约演示 <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/docs/quickstart"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-all"
              >
                查看文档
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">核心能力</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">从配额管理到成本优化，覆盖企业 AI 资源管理的全生命周期</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">工作流程</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">三步完成企业 AI 资源统一管理</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: '接入模型服务', desc: '通过 API Key 统一托管，一键接入智谱 GLM 及其他主流大模型服务' },
              { step: '02', title: '配置配额策略', desc: '按部门、项目设置 Token 配额与路由规则，设定预算上限与告警阈值' },
              { step: '03', title: '监控与优化', desc: '实时监控用量与成本，AI 自动识别优化空间，持续降低单位调用成本' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-gray-100 mb-4">{s.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">开始使用 TokenHub</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            立即开通专属 TokenHub，让企业 AI 资源使用透明可控
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/support/sales"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-gray-900 font-medium hover:bg-gray-50 transition-all"
            >
              预约演示 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/docs/quickstart"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-all"
            >
              查看快速开始文档
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
