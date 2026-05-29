import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Train, Activity, FileText, ClipboardCheck, Clock,
  Check, Shield, AlertTriangle, ShieldCheck, Headphones, Gavel, ChevronRight, BarChart3,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const employees = [
  {
    id: 'system-watch',
    icon: <Activity className="w-7 h-7" />,
    title: '系统值守员',
    badge: '核心',
    slogan: '替您看监控、写报告、备检查',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    id: 'safety-watch',
    icon: <ShieldCheck className="w-7 h-7" />,
    title: '安全值守员',
    badge: '扩展',
    slogan: '重要时刻不出事，出了事有据可查',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600',
  },
  {
    id: 'customer-service',
    icon: <Headphones className="w-7 h-7" />,
    title: '客服数字员工',
    badge: '扩展',
    slogan: '7×24 小时智能客服，覆盖乘客咨询与投诉处理',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
  },
  {
    id: 'operations',
    icon: <BarChart3 className="w-7 h-7" />,
    title: '运营数字员工',
    badge: '扩展',
    slogan: '客流分析、调度优化、运营报表自动化',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
  {
    id: 'bidding',
    icon: <Gavel className="w-7 h-7" />,
    title: '招投标数字员工',
    badge: '远期',
    slogan: '招投标文件智能解析与合规审查',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-600',
  },
];

export default function TransitPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50 to-white" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-indigo-200/20 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
              <Train className="w-4 h-4" />
              大交通
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              大交通数字员工
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              覆盖轨道交通、公共交通等领域，从系统值守切入，逐步扩展安全、客服、运营、招投标全场景。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Employee Overview Cards */}
      <section className="relative z-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">{emp.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{emp.slogan}</p>
                <a href={`#${emp.id}`} className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                  查看详情 <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Employee 1: 系统值守员 ===== */}
      <section id="system-watch" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Activity className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">系统值守员</h2>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">核心</span>
            </div>
            <p className="text-lg text-gray-500 mb-10">替您看监控、写报告、备检查——不做新监控，只做已有监控数据的"最后一公里"</p>
          </motion.div>

          {/* Three capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: '主动报告',
                subtitle: '替人看',
                desc: '每日运维简报、实时异常快报、每周周报、重大活动保障专报',
                details: ['每天 9:00 推送日报', '异常发生即推手机', '例会材料直接用'],
              },
              {
                title: '全程留痕',
                subtitle: '替人记',
                desc: '每一条告警、每一次变更、每一次巡检——自动关联记录',
                details: ['告警处置全程追踪', '变更审批自动归档', '交接不靠口头记忆'],
              },
              {
                title: '一键审计',
                subtitle: '替人查',
                desc: '等保检查、内审外审、向上汇报——一键导出标准审计材料',
                details: ['等保合规材料自动生成', '按条件筛选一键导出', '省 1-2 周人力'],
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
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-900">{cap.title}</h4>
                  <span className="text-xs text-blue-600 font-medium">{cap.subtitle}</span>
                </div>
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

          {/* Scenarios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              { icon: <Clock className="w-4 h-4" />, title: '节假日/夜间无人值守', value: '异常实时推送手机，避免数小时停机损失' },
              { icon: <Shield className="w-4 h-4" />, title: '等保/审计迎检', value: '一键导出标准审计报告，省 1-2 周人力' },
              { icon: <FileText className="w-4 h-4" />, title: '运维例会', value: '每周一自动推送周报，省 2 小时/周' },
              { icon: <AlertTriangle className="w-4 h-4" />, title: '故障复盘', value: '自动还原完整故障链路，复盘从 2 天到 2 小时' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                  {s.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{s.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: '标准版', price: '3-5万', note: '/年' },
              { name: '合规版', price: '8-15万', note: '/年' },
              { name: '保障版', price: '15-20万', note: '/年' },
              { name: '单次保障', price: '1-3万', note: '/次' },
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 text-center">
                <div className="text-sm text-gray-500 mb-1">{p.name}</div>
                <div className="text-xl font-bold text-gray-900">{p.price}<span className="text-xs font-normal text-gray-400 ml-0.5">{p.note}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Employee 2: 安全值守员 ===== */}
      <section id="safety-watch" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">安全值守员</h2>
            </div>
            <p className="text-lg text-gray-500 mb-10">重要时刻不出事，出了事有据可查——0 容错 + 监管合规</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 border border-gray-100"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-3">监控范围</h4>
              <ul className="space-y-2">
                {['信号 / 轨道 / 弓网', '站台门 / 客流', '供电 / 通信系统'].map((m, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 border border-gray-100"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-3">核心场景</h4>
              <ul className="space-y-2">
                {['天窗期维保监控', '极端天气应急响应', '节假日大客流保障'].map((s, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-violet-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="bg-slate-50 rounded-xl p-5 border border-gray-100 max-w-md">
            <div className="text-sm text-gray-500 mb-1">参考定价</div>
            <div className="text-2xl font-bold text-gray-900">50-200万<span className="text-sm font-normal text-gray-400">/年</span></div>
            <div className="text-xs text-gray-400 mt-1">拿下一个城市地铁，50+ 城市可复制</div>
          </div>
        </div>
      </section>

      {/* ===== Employee 3: 客服数字员工 ===== */}
      <section id="customer-service" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                <Headphones className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">客服数字员工</h2>
            </div>
            <p className="text-lg text-gray-500 mb-10">7×24 小时智能客服，覆盖乘客咨询、投诉处理、失物招领等场景</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '智能应答',
                desc: '多轮对话理解乘客意图，精准推送乘车方案、票价查询、换乘指引',
              },
              {
                title: '投诉处理',
                desc: '自动分类投诉类型、生成处理工单、追踪处理进度、汇总投诉报表',
              },
              {
                title: '失物招领',
                desc: '乘客描述遗失物品，AI 匹配站点上报信息，提升找回率',
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

      {/* ===== Employee 4: 运营数字员工 ===== */}
      <section id="operations" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">运营数字员工</h2>
            </div>
            <p className="text-lg text-gray-500 mb-10">客流分析、调度优化、运营报表自动化——让运营决策有据可依</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '客流智能分析',
                desc: '实时监控各站点客流密度，预测高峰时段，辅助调度决策',
              },
              {
                title: '调度优化建议',
                desc: '基于历史数据和实时客流，AI 生成发车间隔和运力调配建议',
              },
              {
                title: '运营报表自动化',
                desc: '日报/周报/月报自动生成，关键指标可视化，省去手工统计时间',
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

      {/* ===== Employee 5: 招投标数字员工 ===== */}
      <section id="bidding" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
                <Gavel className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">招投标数字员工</h2>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">远期规划</span>
            </div>
            <p className="text-lg text-gray-500 mb-10">招投标文件智能解析与合规审查——减少人工审阅成本，降低废标风险</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '招标文件解析',
                desc: '自动提取招标文件中的技术要求、资质条件、评分标准等关键信息',
              },
              {
                title: '合规性审查',
                desc: 'AI 检查投标文件是否满足所有硬性要求，提前发现废标风险点',
              },
              {
                title: '历史标书分析',
                desc: '汇总历史中标/废标数据，分析中标规律，优化投标策略',
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-violet-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            1-2 天完成对接，现有系统零改动
          </h2>
          <p className="text-indigo-100 mb-6 text-sm">
            从系统值守员切入，逐步扩展安全、客服、运营、招投标全场景
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/support/sales"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-gray-900 font-medium hover:bg-gray-50 transition-all text-sm"
            >
              预约演示 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/support/sales"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-all text-sm"
            >
              申请免费保障
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
