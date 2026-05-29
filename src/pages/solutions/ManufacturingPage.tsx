import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Factory, PackageSearch, TrendingDown, BarChart3,
  Activity, ShieldCheck, Check, Zap, Clock, ChevronRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const employees = [
  {
    id: 'procurement',
    icon: <PackageSearch className="w-7 h-7" />,
    title: '采购AI',
    badge: '首发切入',
    slogan: '帮老板把采购的每一分钱花在刀刃上',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
  },
  {
    id: 'system-watch',
    icon: <Activity className="w-7 h-7" />,
    title: '系统值守员',
    badge: '扩展',
    slogan: '替您看监控、写报告、备检查',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    id: 'safety-watch',
    icon: <ShieldCheck className="w-7 h-7" />,
    title: '安全值守员',
    badge: '远期',
    slogan: '重要时刻不出事，出了事有据可查',
    color: 'from-indigo-500 to-violet-500',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
];

const procurementSteps = [
  {
    icon: <PackageSearch className="w-6 h-6" />,
    tag: '切入点',
    title: '呆滞库存治理',
    desc: '只要 ERP 导出库存数据，1 天接入，第 2 天告诉老板"你的 87 万被这 23 个物料占着"',
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    tag: 'Day 7',
    title: '原材料价格监控',
    desc: '每日自动抓取大宗商品价格，"铜价本周跌 3.2%，建议锁定下月用量"——养成使用习惯',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    tag: 'Day 30',
    title: '智能询价比价',
    desc: '自动生成询价单 → 群发供应商 → 收集报价 → 生成比价表，采购员从"两天比三家"变成"半小时比十家"',
  },
];

const procurementPricing = [
  { name: '呆滞库存治理', price: '免费', note: '获客工具' },
  { name: '价格监控 + 询价比价', price: '2-5万', note: '/年/模块' },
  { name: '完整采购AI套件', price: '8-15万', note: '/年' },
];

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-white" />
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-cyan-200/20 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-6">
              <Factory className="w-4 h-4" />
              制造业
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              制造业数字员工
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed mb-4">
              帮老板<span className="text-gray-900 font-medium">省钱</span>、<span className="text-gray-900 font-medium">不丢钱</span>、<span className="text-gray-900 font-medium">睡安稳觉</span>——三个数字员工，覆盖采购、运维、安全全场景。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Employee Overview Cards */}
      <section className="relative z-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {employees.map((emp, i) => (
              <motion.div
                key={emp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
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

      {/* ===== Employee 1: 采购AI ===== */}
      <section id="procurement" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                <PackageSearch className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">采购AI</h2>
            </div>
            <p className="text-lg text-gray-500 mb-10">帮老板把采购的每一分钱花在刀刃上</p>
          </motion.div>

          {/* Pain points */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: '15-25%', label: '制造业库存积压率' },
              { value: '数百万', label: '中型工厂呆滞库存' },
              { value: '60-70%', label: '原材料占成本比例' },
              { value: '1天', label: '完成接入部署' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-5 text-center border border-gray-100"
              >
                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Three steps */}
          <div className="space-y-4">
            {procurementSteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col sm:flex-row items-start gap-5"
              >
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
                    {s.icon}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-cyan-600">{s.tag}</span>
                    <h4 className="text-lg font-bold text-gray-900 leading-tight">{s.title}</h4>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mini pricing */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {procurementPricing.map((p, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 text-center">
                <div className="text-sm text-gray-500 mb-1">{p.name}</div>
                <div className="text-2xl font-bold text-gray-900">{p.price}<span className="text-sm font-normal text-gray-400 ml-1">{p.note}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Employee 2: 系统值守员 ===== */}
      <section id="system-watch" className="py-20 bg-white scroll-mt-20">
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
            </div>
            <p className="text-lg text-gray-500 mb-10">替您看监控、写报告、备检查——采购AI跑通后的自然延伸</p>
          </motion.div>

          {/* Three capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: '主动报告',
                subtitle: '替人看',
                desc: '每日运维简报、实时异常快报、每周周报、保障专报',
                details: ['老板 2 分钟了解全局', '异常秒级推送手机', '例会材料直接用'],
              },
              {
                title: '全程留痕',
                subtitle: '替人记',
                desc: '每一条告警、每一次变更、每一次巡检——自动关联记录',
                details: ['告警处置全程追踪', '变更记录自动归档', '知识不随人走'],
              },
              {
                title: '一键审计',
                subtitle: '替人查',
                desc: '等保检查、内审外审、向上汇报——一键导出标准材料',
                details: ['等保合规材料自动生成', '按条件筛选导出', '省 1-2 周人力'],
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

          {/* Access */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">1-2 天完成对接</div>
              <div className="text-xs text-gray-500">Webhook/API/日志文件接入，不动现有系统，只是"接一根数据管子进来"</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Employee 3: 安全值守员 ===== */}
      <section id="safety-watch" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">安全值守员</h2>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">远期规划</span>
            </div>
            <p className="text-lg text-gray-500 mb-10">重要时刻不出事，出了事有据可查——前两个产品跑通后再扩展</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-3">监控范围</h4>
              <ul className="space-y-2">
                {['温度 / 压力 / 液位', '振动 / 气体浓度', '设备运行状态'].map((m, j) => (
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
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-3">核心场景</h4>
              <ul className="space-y-2">
                {['春节停复工安全检查', '防台风预警与监控', '设备大修期安全值守'].map((s, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-indigo-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100 max-w-md">
            <div className="text-sm text-gray-500 mb-1">参考定价</div>
            <div className="text-2xl font-bold text-gray-900">5-10万<span className="text-sm font-normal text-gray-400">/年</span></div>
            <div className="text-xs text-gray-400 mt-1">单次重要节点保障可免费体验</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            1 天接入，第 2 天看到省钱效果
          </h2>
          <p className="text-cyan-100 mb-6 text-sm">
            从采购AI免费切入，逐步扩展系统值守与安全值守
          </p>
          <Link
            to="/support/sales"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-gray-900 font-medium hover:bg-gray-50 transition-all text-sm"
          >
            免费体验 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
