import { motion } from 'framer-motion';
import { TrendingUp, Layers, DollarSign, Cpu, BarChart3, Shield } from 'lucide-react';

const tacItems = [
  {
    letter: 'T',
    title: 'Token 消耗',
    subtitle: 'Token Consumption',
    desc: '精细化管控每一次模型调用，优化推理链路，实现 Token 资源的高效利用与成本可控',
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    letter: 'A',
    title: 'Token 质量',
    subtitle: 'Token Architecture',
    desc: '基于智谱 GLM 旗舰大模型，确保输出质量与推理能力，让每一份 Token 都产生高质量结果',
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600',
  },
  {
    letter: 'C',
    title: '经济价值',
    subtitle: 'Capability Value',
    desc: '量化 AI 能力的业务价值转化，从成本中心到价值引擎，实现 AI 投入的商业回报最大化',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
  },
];

const features = [
  { icon: <Layers className="w-5 h-5" />, text: '多层架构设计' },
  { icon: <Shield className="w-5 h-5" />, text: '企业级安全' },
  { icon: <DollarSign className="w-5 h-5" />, text: '成本透明可控' },
];

export default function TACSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            <Cpu className="w-4 h-4" />
            核心理念
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            TAC 价值驱动模型
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            <span className="font-semibold text-gray-700">Token Architecture Capability</span>
            {' '}—— 让 Token 消耗 × Token 质量 × 经济价值形成飞轮效应
          </p>
        </motion.div>

        {/* TAC Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tacItems.map((item, index) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative rounded-2xl border border-gray-100 bg-white p-8 hover:shadow-lg transition-shadow">
                {/* Letter Badge */}
                <div className={`absolute -top-4 left-8 w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-xl">{item.letter}</span>
                </div>

                <div className="mt-6">
                  <div className={`inline-flex items-center gap-2 ${item.bgColor} ${item.textColor} px-3 py-1.5 rounded-lg mb-4`}>
                    {item.icon}
                    <span className="text-xs font-semibold">{item.subtitle}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>

                {/* Connector Arrow (hidden on mobile, shown on md+) */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400 font-bold text-sm">×</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {features.map((f) => (
            <div key={f.text} className="flex items-center gap-2 text-gray-500">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-600">
                {f.icon}
              </div>
              <span className="text-sm font-medium">{f.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
