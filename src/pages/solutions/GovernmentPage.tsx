import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Building2, Headphones, FileText, Check,
  BookOpen, ClipboardList, ChevronRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const employees = [
  {
    id: 'customer-service',
    icon: <Headphones className="w-7 h-7" />,
    title: '智能客服',
    badge: '核心',
    slogan: '7×24 小时面向公众的智能应答服务',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    id: 'office-assistant',
    icon: <FileText className="w-7 h-7" />,
    title: '办公助手',
    badge: '核心',
    slogan: '公文处理、政策解读、会议纪要，对内提效',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600',
  },
  {
    id: 'window-service',
    icon: <ClipboardList className="w-7 h-7" />,
    title: '窗口服务助手',
    badge: '扩展',
    slogan: '材料预审、办事引导、一次办结率提升',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
  },
  {
    id: 'policy-analyst',
    icon: <BookOpen className="w-7 h-7" />,
    title: '政策分析师',
    badge: '扩展',
    slogan: '政策文件智能解读与匹配推送',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
];

export default function GovernmentPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-white" />
        <div className="absolute top-20 left-1/3 w-[400px] h-[400px] bg-violet-200/20 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              数字政务
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              政务数字员工
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              对外服务群众、对内赋能办公——覆盖智能客服、办公助手、窗口服务、政策分析全场景。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Employee Overview Cards */}
      <section className="relative z-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {employees.map((emp, i) => (
              <motion.div
                key={emp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${emp.bgColor} flex items-center justify-center ${emp.textColor}`}>
                    {emp.icon}
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${emp.bgColor} ${emp.textColor}`}>
                    {emp.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{emp.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{emp.slogan}</p>
                <a href={`#${emp.id}`} className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                  查看详情 <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Employee 1: 智能客服 ===== */}
      <section id="customer-service" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Headphones className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">智能客服</h2>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">核心</span>
            </div>
            <p className="text-lg text-gray-500 mb-10">7×24 小时面向公众的智能应答——减少窗口排队压力，提升群众满意度</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { title: '多轮对话理解', desc: '精准理解群众意图，不局限于关键词匹配' },
              { title: '办事指南推送', desc: '根据需求精准推送办理流程、所需材料' },
              { title: '业务状态查询', desc: '实时查询办理进度，减少电话咨询量' },
              { title: '智能转人工', desc: '复杂问题无缝转接人工坐席，上下文不丢失' },
            ].map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-5 border border-gray-100"
              >
                <h4 className="text-sm font-bold text-gray-900 mb-2">{cap.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-5 flex items-center gap-6">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">60%+</div>
              <div className="text-xs text-gray-500">重复咨询由 AI 自动应答</div>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">7×24</div>
              <div className="text-xs text-gray-500">全天候在线服务</div>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">80%+</div>
              <div className="text-xs text-gray-500">首次响应满意度</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Employee 2: 办公助手 ===== */}
      <section id="office-assistant" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">办公助手</h2>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-violet-50 text-violet-600">核心</span>
            </div>
            <p className="text-lg text-gray-500 mb-10">公文处理、政策解读、会议纪要——让工作人员聚焦决策，而非案牍劳形</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '公文智能处理',
                desc: '格式校验、智能拟稿、流转审批追踪',
                details: ['自动校验公文格式合规性', '根据历史公文辅助拟稿', '流转节点自动提醒'],
              },
              {
                title: '政策文件解读',
                desc: '快速理解政策要点，辅助政策落地执行',
                details: ['长文政策一键摘要', '跨文件关联分析', '政策变更自动追踪'],
              },
              {
                title: '会议与报告',
                desc: '会议纪要自动生成，工作汇报材料整理',
                details: ['会议录音转写 + 纪要生成', '周报/月报自动汇总', '数据报表可视化'],
              },
            ].map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-gray-100"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h4>
                <p className="text-sm text-gray-500 mb-4">{cap.desc}</p>
                <ul className="space-y-2">
                  {cap.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 mt-0.5 text-green-500 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Employee 3: 窗口服务助手 ===== */}
      <section id="window-service" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                <ClipboardList className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">窗口服务助手</h2>
            </div>
            <p className="text-lg text-gray-500 mb-10">材料预审、办事引导——提升一次办结率，减少群众跑腿次数</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '材料智能预审',
                desc: '群众提交材料前，AI 预检是否齐全合规，提前发现缺失项',
              },
              {
                title: '办事流程引导',
                desc: '根据业务类型，智能引导群众完成每个办理步骤',
              },
              {
                title: '窗口智能分流',
                desc: '根据业务复杂度自动分流，简单业务自助办理，复杂业务转窗口',
              },
            ].map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Employee 4: 政策分析师 ===== */}
      <section id="policy-analyst" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">政策分析师</h2>
            </div>
            <p className="text-lg text-gray-500 mb-10">政策文件智能解读与匹配推送——让政策找对人、落好地</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '政策智能解读',
                desc: '长篇政策文件自动摘要，提取适用对象、申报条件、截止时间等关键信息',
              },
              {
                title: '政策精准推送',
                desc: '根据企业/个人画像，匹配适用的政策并主动推送，实现"政策找人"',
              },
              {
                title: '政策对比分析',
                desc: '新旧政策对比、跨地区政策对比，辅助决策者研判政策影响',
              },
            ].map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-gray-100"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            让政务服务更智能、更高效
          </h2>
          <p className="text-violet-100 mb-6 text-sm">
            从智能客服到办公助手，政务数字员工全方位提升服务效能与群众满意度
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/support/sales"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-gray-900 font-medium hover:bg-gray-50 transition-all text-sm"
            >
              预约演示 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/docs/quickstart"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-all text-sm"
            >
              了解接入方式
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
