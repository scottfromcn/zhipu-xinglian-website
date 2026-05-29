import { motion } from 'framer-motion';

// Client logos as styled text (placeholder for actual logos)
const clients = [
  { name: '苏州地铁', category: '轨道交通' },
  { name: '新建元数科', category: '智慧城市' },
  { name: '中国中车', category: '制造业' },
  { name: '苏高新集团', category: '政务' },
  { name: '江苏省政务办', category: '政务' },
  { name: '南京地铁', category: '轨道交通' },
  { name: '亨通集团', category: '制造业' },
  { name: '苏州工业园区', category: '政务' },
  { name: '徐工集团', category: '制造业' },
  { name: '无锡地铁', category: '轨道交通' },
  { name: '江苏省国资委', category: '政务' },
  { name: '协鑫集团', category: '制造业' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function ClientLogos() {
  return (
    <section className="py-20 bg-white">
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
            与产业龙头同行
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            深耕制造业、轨道交通、政务服务三大领域，助力企业智能化转型
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              variants={item}
              className="group flex flex-col items-center justify-center p-6 rounded-xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-2 text-center">
                {client.name}
              </div>
              <div className="text-xs text-gray-400">
                {client.category}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '50+', label: '企业客户' },
            { value: '3', label: '核心行业' },
            { value: '99.9%', label: '服务可用性' },
            { value: '10亿+', label: '日均 Token 处理量' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
