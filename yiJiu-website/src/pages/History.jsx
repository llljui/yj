import PageHeader from '../components/PageHeader'
import AnimatedSection from '../components/AnimatedSection'

const milestones = [
  { year: '2006', title: '公司成立', desc: '公司注册成立，开启智能制造征程' },
  { year: '2008', title: '首台机床下线', desc: '自主研发的首台数控机床成功下线' },
  { year: '2009', title: '批量生产启动', desc: '开始批量生产数控机床，进入规模化发展阶段' },
  { year: '2012', title: '技术突破', desc: '成功研发五轴联动加工中心，技术实力大幅提升' },
  { year: '2013', title: '产学研合作', desc: '与多所高校建立产学研合作关系，加速技术创新' },
  { year: '2014', title: '市场拓展', desc: '产品出口至东南亚、欧洲等海外市场' },
  { year: '2015', title: '产业升级', desc: '引进国际先进生产线，产能大幅提升' },
  { year: '2016', title: '智能制造', desc: '启动智能制造项目，打造数字化工厂' },
  { year: '2017', title: '资质认证', desc: '通过ISO9001质量管理体系认证' },
  { year: '2018', title: '行业领先', desc: '成为行业领先的数控机床制造商之一' },
  { year: '2019', title: '荣誉加身', desc: '获评高新技术企业，多项技术获行业大奖' },
  { year: '2020', title: '逆势增长', desc: '面对疫情挑战，实现逆势增长，营收创新高' },
  { year: '2021', title: '技术革新', desc: '成功研发新一代智能控制系统，技术水平行业领先' },
  { year: '2022', title: '品牌升级', desc: '完成品牌升级，开启国际化战略新篇章' },
  { year: '2023', title: '智能工厂', desc: '智能工厂全面建成，生产效率提升300%' },
  { year: '2024', title: '全球化布局', desc: '设立海外研发中心，加速全球化布局' },
]

export default function History() {
  return (
    <div>
      <PageHeader 
        title="发展历程" 
        subtitle="一步一个脚印，书写易玖智能的成长故事"
        breadcrumbs={['首页', '关于我们', '发展历程']}
      />

      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400/50 to-primary-500/20 md:-translate-x-px" />
            
            <div className="space-y-12">
              {milestones.map((item, index) => (
                <AnimatedSection key={item.year} delay={index * 0.05}>
                  <div className={`relative flex items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white/20 shadow-lg md:-translate-x-2 z-10 mt-2 md:mt-0" />
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}>
                      <div className={`bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary-400/30 hover:shadow-xl transition-all inline-block ${
                        index % 2 === 0 ? 'md:text-right' : ''
                      }`}>
                        <div className="text-3xl font-bold text-gradient mb-2">{item.year}</div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-white/60 text-sm">{item.desc}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
