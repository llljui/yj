import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Play, Award, Users, Factory, TrendingUp } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const banners = [
  {
    id: 1,
    title: '智能制造 引领未来',
    subtitle: '易玖智能专注于高端数控装备研发制造，为全球客户提供智能制造整体解决方案',
    bg: 'bg-gradient-to-br from-primary-900 via-primary-800 to-dark-900',
  },
  {
    id: 2,
    title: '精密加工 品质之选',
    subtitle: '多工位复合加工，让生产效率与精度达到全新高度',
    bg: 'bg-gradient-to-br from-dark-900 via-primary-900 to-primary-800',
  },
  {
    id: 3,
    title: '五轴联动 卓越性能',
    subtitle: '专注复杂零件加工，赋能航空航天、新能源汽车、模具制造等领域',
    bg: 'bg-gradient-to-br from-primary-800 via-dark-900 to-primary-900',
  },
]

const stats = [
  { icon: Factory, value: '60+', label: '年行业沉淀' },
  { icon: Users, value: '160+', label: '专业团队' },
  { icon: Award, value: '30+', label: '专利认证' },
  { icon: TrendingUp, value: '5万+', label: '㎡占地面积' },
]

const products = [
  { id: 'bc3751', name: 'BC3751-HY', category: '车削中心', desc: '高性能多功能车削中心，机床具有C轴和铣削功能' },
  { id: 'bl20', name: 'BL20-HSY', category: '车铣复合', desc: '高速高精型车铣中心，配备双电主轴、十二工位伺服' },
  { id: 'bmc500', name: 'BMC-500TV', category: '五轴复合', desc: '高档铣车复合制造装备，机床五轴五联动' },
  { id: 'brx', name: 'BRX系列柔性加工单元', category: '柔性单元', desc: '采用数控车床或车削中心组成柔性生产线' },
]

const clients = [
  '恒力集团', 'CSSC', '中建国际', '中远海运', '招商局集团', 'DINBULI', 'SANY', '长虹',
  'ZGL', 'WEIHUA', '欧柯奇', '建西集团', '西鼎', '立中集团', 'KIA', 'XCMG',
  'ANSTEEL', '中国华能集团', '天润曲轴', '东风汽车', '长城汽车', '华翔集团',
]

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextBanner = () => setCurrentBanner((prev) => (prev + 1) % banners.length)
  const prevBanner = () => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        {banners.map((banner, index) => (
          <motion.div
            key={banner.id}
            initial={false}
            animate={{
              opacity: index === currentBanner ? 1 : 0,
              scale: index === currentBanner ? 1 : 1.1,
            }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 ${banner.bg}`}
          >
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="section-container h-full flex items-center relative z-10">
              <div className="max-w-3xl">
                <motion.div
                  key={`text-${banner.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: index === currentBanner ? 1 : 0, y: index === currentBanner ? 0 : 30 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    {banner.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
                    {banner.subtitle}
                  </p>
                  <div className="flex gap-4">
                    <Link to="/products" className="btn-primary">
                      了解产品 <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link to="/about" className="btn-outline">
                      关于我们
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Banner Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
          <button onClick={prevBanner} className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentBanner ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
          <button onClick={nextBanner} className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl overflow-hidden flex items-center justify-center">
                  <div className="text-primary-300 text-6xl font-bold">工厂图片</div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white rounded-xl shadow-2xl p-4 hidden lg:flex items-center justify-center">
                  <div className="text-center text-gray-400 text-sm">企业视频<br/>播放按钮</div>
                </div>
                <div className="absolute top-4 left-4 glass-card px-4 py-2">
                  <span className="text-white font-semibold">2008年成立</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-sm text-primary-600 font-semibold mb-2">关于易玖</div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                专注智能装备制造<br/><span className="text-gradient">引领行业创新</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                上海易玖智能科技有限公司坐落于上海市，是一家专业从事数控机床、自动化装备及智能制造解决方案研发、生产、销售于一体的高新技术企业。
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                公司秉承"以人为本、以客为尊"的经营理念，致力于为全球用户提供金属成形装备解决方案。产品广泛应用于3C消费电子、新能源汽车、航空航天、模具制造等领域。
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary">
                了解更多 <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-sm text-primary-600 font-semibold mb-2">PRODUCTS</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">产品中心</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">专注于高端数控装备研发制造，为全球客户提供智能制造整体解决方案</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.1}>
                <Link to={`/products/${product.id}`} className="block group">
                  <div className="bg-white rounded-2xl overflow-hidden card-hover border border-gray-100">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center group-hover:from-primary-50 group-hover:to-primary-100 transition-colors">
                      <div className="text-gray-400 text-sm font-medium">{product.name} 产品图</div>
                    </div>
                    <div className="p-6">
                      <div className="text-xs text-primary-600 font-semibold mb-2">{product.category}</div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">{product.name}</h3>
                      <p className="text-gray-500 text-sm line-clamp-2">{product.desc}</p>
                      <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
                        查看更多 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              查看全部产品 <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-dark-900" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="section-container relative z-10">
          <AnimatedSection className="text-center mb-16">
            <div className="text-sm text-primary-300 font-semibold mb-2">REASON</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">选择我们的理由</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '精益化的生产管理', desc: '公司进行了6大类57项精益化管理，确保最大限度提高作业效率、提高成品率、减少浪费' },
              { title: '严格稳定的质量体系', desc: '0不良产品流出是我们为之奋斗的质量目标，严格遵循IATF16949体系要求' },
              { title: '顾问式的市场服务', desc: '从开发设计到交付的一站式解决方案，成为客户的热管理顾问和好伙伴' },
              { title: '帮助客户成功的使命', desc: '以客户为中心，帮助客户成功，实现我们的价值，取得可持续发展的动力' },
              { title: '坚持绿色发展理念', desc: '绿色发展不仅是口号，更是长期坚持的行动战略，实现全面可持续发展' },
              { title: '高校联合研发中心', desc: '与高校联合，弥补研发理论体系的不足，实现良性循环，体现科学价值' },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="glass-card p-8 h-full hover:bg-white/20 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                    <span className="text-primary-400 group-hover:text-white font-bold text-lg transition-colors">0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-sm text-primary-600 font-semibold mb-2">CLIENTS</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">服务客户</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">与众多知名企业建立长期合作关系，共同推动智能制造发展</p>
          </AnimatedSection>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="aspect-[3/2] bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all group">
                  <span className="text-gray-400 text-xs font-medium group-hover:text-primary-600 transition-colors">{client}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
