import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Factory, Train, Building2 } from 'lucide-react';

const businesses = [
  {
    id: 'tokenhub',
    title: '专属 TokenHub',
    desc: '企业级大模型算力与 API 资源中枢，统一管理 Token 配额、模型路由与用量监控',
    icon: <Database className="w-6 h-6" />,
    image: '/images/tokenhub-card.jpg',
    href: '/solutions/tokenhub',
    tag: '核心基础设施',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'manufacturing',
    title: '制造业数字员工',
    desc: '采购AI切入，覆盖呆滞库存治理、价格监控、智能询价，逐步扩展系统值守与安全值守',
    icon: <Factory className="w-6 h-6" />,
    image: '/images/manufacturing-card.jpg',
    href: '/solutions/manufacturing',
    tag: '制造业',
    color: 'from-cyan-600 to-blue-600',
  },
  {
    id: 'transit',
    title: '大交通数字员工',
    desc: '系统值守员为核心，主动报告、全程留痕、一键审计，赋能轨交与公共交通运维',
    icon: <Train className="w-6 h-6" />,
    image: '/images/transit-card.jpg',
    href: '/solutions/transit',
    tag: '大交通',
    color: 'from-indigo-600 to-violet-600',
  },
  {
    id: 'government',
    title: '政务数字员工',
    desc: '对外智能客服、对内办公助手，公文处理、政策解读、窗口服务全覆盖',
    icon: <Building2 className="w-6 h-6" />,
    image: '/images/government-card.jpg',
    href: '/solutions/government',
    tag: '数字政务',
    color: 'from-violet-600 to-purple-600',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BusinessCards() {
  return (
    <section className="relative z-10 -mt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            核心业务，覆盖产业全场景
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            基于智谱 GLM 大模型技术底座，为企业打造专属 AI 基础设施与行业数字员工
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Featured Card - TokenHub */}
          <motion.div variants={item} className="md:col-span-2">
            <Link
              to={businesses[0].href}
              className="group relative block rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 sm:h-72">
                <img
                  src={businesses[0].image}
                  alt={businesses[0].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${businesses[0].color} opacity-80`} />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm">
                      {businesses[0].tag}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                        {businesses[0].icon}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">{businesses[0].title}</h3>
                    </div>
                    <p className="text-white/80 max-w-xl mb-4">{businesses[0].desc}</p>
                    <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                      立即了解 <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Other Business Cards */}
          {businesses.slice(1).map((biz) => (
            <motion.div key={biz.id} variants={item}>
              <Link
                to={biz.href}
                className="group block rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="relative h-48">
                  <img
                    src={biz.image}
                    alt={biz.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${biz.color} text-white text-xs font-medium`}>
                      {biz.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white mb-2">
                      {biz.icon}
                      <h3 className="text-xl font-bold">{biz.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{biz.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:gap-3 transition-all">
                    了解详情 <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
