import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import AnimatedSection from '../components/AnimatedSection'

const categories = [
  { id: 'all', name: '全部产品' },
  { id: 'five-axis-composite', name: '五轴复合加工中心' },
  { id: 'five-axis', name: '五轴加工中心' },
  { id: 'turning', name: '车削中心' },
  { id: 'horizontal', name: '卧式加工中心' },
  { id: 'vertical', name: '立式加工中心' },
  { id: 'gantry', name: '龙门加工中心' },
  { id: 'lathe', name: '数控车床' },
]

const products = [
  { id: 'bhr500', name: 'BHR500V', category: 'five-axis-composite', desc: '卧式车铣复合加工中心，采用卧式对列双主轴布局' },
  { id: 'bhr700', name: 'BHR700V', category: 'five-axis-composite', desc: '卧式车铣复合加工中心，X、Y、Z、B、C五轴联动' },
  { id: 'bhr800', name: 'BHR800V', category: 'five-axis-composite', desc: '具有五轴五联动功能的卧式车铣复合加工中心' },
  { id: 'bhr1000', name: 'BHR1000V', category: 'five-axis-composite', desc: '大型卧式车铣复合加工中心，适用于重型零件加工' },
  { id: 'bmc500', name: 'BMC-500TV', category: 'five-axis-composite', desc: '铣车复合加工中心，高档铣车复合制造装备' },
  { id: 'bmc500t', name: 'BMC-500T', category: 'five-axis-composite', desc: '车铣复合加工中心，配备双电主轴' },
  { id: 'tv320', name: '立式五轴加工中心T-V320UA', category: 'five-axis', desc: '小型立式五轴加工中心，适用于精密零件' },
  { id: 't500u', name: '五轴钻铣加工中心T-500U', category: 'five-axis', desc: '五轴钻铣复合加工中心，高效精密' },
  { id: 'v855', name: '立式加工中心T-V855S', category: 'vertical', desc: '高速立式加工中心，适用于模具加工' },
  { id: 'th8', name: '卧式加工中心T-H8', category: 'horizontal', desc: '高精度卧式加工中心，适用于箱体零件' },
  { id: 'bc3751', name: 'BC3751-HY', category: 'turning', desc: '高性能多功能车削中心，具有C轴和铣削功能' },
  { id: 'bl20', name: 'BL20-HSY', category: 'turning', desc: '高速高精型车铣中心，配备双电主轴' },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const filtered = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <div>
      <PageHeader 
        title="产品中心" 
        subtitle="专注高端数控装备研发制造，为全球客户提供智能制造整体解决方案"
        breadcrumbs={['首页', '产品中心']}
      />

      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <AnimatedSection>
                <div className="bg-white/5 rounded-2xl p-6 lg:sticky lg:top-28">
                  <h3 className="font-bold text-lg mb-4 px-2">产品分类</h3>
                  <div className="space-y-1">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm transition-all ${
                          activeCategory === cat.id
                            ? 'bg-primary-500 text-white shadow-lg'
                            : 'hover:bg-white/10 hover:shadow-sm text-white/80'
                        }`}
                      >
                        {cat.name}
                        <ChevronRight className={`w-4 h-4 transition-transform ${
                          activeCategory === cat.id ? 'rotate-90' : ''
                        }`} />
                      </button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product, index) => (
                  <AnimatedSection key={product.id} delay={index * 0.05}>
                    <Link to={`/products/${product.id}`} className="block group">
                      <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary-400/30 hover:shadow-2xl transition-all duration-500">
                        <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:from-primary-500/10 group-hover:to-primary-500/20 transition-colors">
                          <div className="text-white/50 text-sm font-medium">{product.name}</div>
                        </div>
                        <div className="p-6">
                          <h3 className="font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors">{product.name}</h3>
                          <p className="text-white/60 text-sm line-clamp-2 mb-4">{product.desc}</p>
                          <div className="flex items-center text-primary-400 text-sm font-medium">
                            查看详情 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
