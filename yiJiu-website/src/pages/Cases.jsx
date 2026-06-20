import PageHeader from '../components/PageHeader'
import AnimatedSection from '../components/AnimatedSection'
import { Factory, Wrench, Zap, Globe, Shield, TrendingUp, Award, Star, CheckCircle } from 'lucide-react'

const clients = [
  '恒力集团', 'CSSC中国船舶', '中建国际', '中远海运', '招商局集团', 'DINBULI',
  'SANY三一重工', '长虹', 'ZGL', 'WEIHUA', '欧柯奇', '建西集团',
  '西鼎', '立中集团', 'KIA', 'XCMG徐工', 'ANSTEEL', '中国华能集团',
  '天润曲轴', '东风汽车', '长城汽车', '华翔集团', '波音', '空中客车',
  '丰田汽车', '中国中车', '上海电气', '中信集团', '北方重工', '长江润发',
]

const caseIcons = [Factory, Wrench, Zap, Globe, Shield, TrendingUp]

const cases = [
  { client: '某新能源汽车企业', industry: '新能源汽车', product: 'BHR500V五轴复合加工中心', result: '生产效率提升40%，加工精度达到微米级' },
  { client: '某航空航天企业', industry: '航空航天', product: 'BHR800V大型复合加工中心', result: '实现复杂零件一次装夹完成全部加工' },
  { client: '某模具制造企业', industry: '模具制造', product: 'T-V855S立式加工中心', result: '模具加工周期缩短30%，表面质量显著提升' },
  { client: '某船舶制造企业', industry: '船舶制造', product: 'BHR700V复合加工中心', result: '大型曲轴加工效率提升50%' },
  { client: '某3C电子企业', industry: '3C消费电子', product: 'T-500U五轴钻铣中心', result: '手机金属外壳加工精度达到0.005mm' },
  { client: '某风电企业', industry: '新能源', product: 'BL20-HSY车铣中心', result: '风电齿轮箱零件加工效率翻倍' },
]

export default function Cases() {
  return (
    <div>
      <PageHeader 
        title="客户案例" 
        subtitle="与众多知名企业建立长期合作关系，共同推动智能制造发展"
        breadcrumbs={['首页', '客户案例']}
      />

      {/* Case Studies */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1e1b4b] to-[#0f172a]" />
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        {/* 装饰图标 */}
        <div className="absolute top-20 left-10 text-white/5">
          <Factory className="w-64 h-64" />
        </div>
        <div className="absolute bottom-20 right-10 text-white/5">
          <Wrench className="w-48 h-48" />
        </div>
        <div className="absolute top-1/2 left-1/3 text-white/5">
          <Zap className="w-32 h-32" />
        </div>
        <div className="absolute top-40 right-1/4 text-white/5">
          <Globe className="w-40 h-40" />
        </div>

        <div className="section-container relative z-10">
          <AnimatedSection className="text-center mb-16">
            <div className="text-sm text-primary-400 font-semibold mb-2 tracking-wider uppercase">Case Studies</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">成功案例</h2>
            <p className="text-white/60 max-w-2xl mx-auto">以卓越的产品品质和服务，助力客户实现智能制造升级</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((item, index) => {
              const Icon = caseIcons[index % caseIcons.length]
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-primary-400/30 hover:shadow-2xl hover:shadow-primary-400/10 transition-all p-8 h-full group relative overflow-hidden">
                    {/* 卡片背景图标 */}
                    <div className="absolute -right-4 -bottom-4 text-white/5 group-hover:text-primary-400/10 transition-colors">
                      <Icon className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary-400" />
                        </div>
                        <span className="text-xs text-primary-400 font-semibold">{item.industry}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">{item.client}</h3>
                      <div className="space-y-3 mb-4">
                        <div className="text-sm">
                          <span className="text-white/50">使用产品：</span>
                          <span className="text-white/80">{item.product}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-white/50">应用成果：</span>
                          <span className="text-primary-400 font-medium">{item.result}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-white/40">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>项目已交付</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a1628]" />
        {/* 装饰图标 */}
        <div className="absolute top-10 left-1/4 text-white/[0.03]">
          <Star className="w-64 h-64" />
        </div>
        <div className="absolute bottom-10 right-1/4 text-white/[0.03]">
          <Award className="w-56 h-56" />
        </div>
        <div className="absolute top-1/2 left-10 text-white/[0.03]">
          <Shield className="w-40 h-40" />
        </div>
        <div className="absolute top-1/3 right-10 text-white/[0.03]">
          <TrendingUp className="w-48 h-48" />
        </div>
        {/* 点阵装饰 */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="section-container relative z-10">
          <AnimatedSection className="text-center mb-16">
            <div className="text-sm text-primary-400 font-semibold mb-2 tracking-wider uppercase">Partners</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">合作客户</h2>
            <p className="text-white/60 max-w-2xl mx-auto">携手世界500强企业及行业龙头，共创智能制造美好未来</p>
          </AnimatedSection>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {clients.map((client, index) => (
              <AnimatedSection key={index} delay={index * 0.02}>
                <div className="aspect-[3/2] bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 hover:border-primary-400/30 hover:shadow-lg hover:shadow-primary-400/10 transition-all group">
                  <span className="text-white/40 text-xs font-medium text-center px-2 group-hover:text-white/70 transition-colors">{client}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* 底部装饰数据 */}
          <AnimatedSection className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: '服务客户', value: '300+' },
                { label: '行业覆盖', value: '20+' },
                { label: '客户满意度', value: '99%' },
                { label: '复购率', value: '85%' },
              ].map((stat, i) => (
                <div key={i} className="text-center bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
