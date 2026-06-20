import PageHeader from '../components/PageHeader'
import AnimatedSection from '../components/AnimatedSection'
import { Heart, Target, Users, Rocket } from 'lucide-react'

const values = [
  {
    id: '01',
    title: '以人为本',
    titleEn: 'People Oriented',
    icon: Heart,
    points: ['改变客户的生产环境', '提供好的服务', '为客户创造价值'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: '02',
    title: '以客为尊',
    titleEn: 'Customer-oriented',
    icon: Target,
    points: ['顾客是上帝', '质量是根本', '服务是生命线'],
    color: 'from-primary-500 to-primary-600',
  },
  {
    id: '03',
    title: '团结友爱',
    titleEn: 'Unity and Friendship',
    icon: Users,
    points: ['产品应用于诸多行业', '提供好的售后服务', '满足客户需求'],
    color: 'from-teal-500 to-teal-600',
  },
  {
    id: '04',
    title: '共同进步',
    titleEn: 'Progress Together',
    icon: Rocket,
    points: ['公司团队强大', '拥有好的技术和多年实践经验', '研发创造新产品'],
    color: 'from-accent-500 to-accent-600',
  },
]

export default function Culture() {
  return (
    <div>
      <PageHeader 
        title="企业文化" 
        subtitle="传承企业精神，凝聚团队力量，共创美好未来"
        breadcrumbs={['首页', '关于我们', '企业文化']}
      />

      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white" />
        <div className="section-container relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">核心价值观</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">企业文化的核心是我们的价值观，它指引着我们的行为，塑造着我们的未来</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.id} delay={index * 0.15}>
                <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <div className={`h-2 bg-gradient-to-r ${value.color}`} />
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="text-5xl font-bold text-gray-100 mb-2">{value.id}</div>
                        <h3 className="text-2xl font-bold">{value.title}</h3>
                        <div className="text-sm text-gray-500 mt-1">{value.titleEn}</div>
                      </div>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}>
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {value.points.map((point, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-600">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${value.color}`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-dark-900 text-white">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">企业精神</h2>
            <p className="text-white/70 max-w-2xl mx-auto">以卓越的品质、创新的技术、优质的服务，成就客户的梦想</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '创新精神', desc: '勇于突破，持续创新，引领行业技术发展' },
              { title: '工匠精神', desc: '精益求精，追求卓越，打造一流产品品质' },
              { title: '服务精神', desc: '客户至上，用心服务，建立长期合作伙伴关系' },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="glass-card p-8 text-center h-full">
                  <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl font-bold">{['创', '匠', '服'][index]}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
