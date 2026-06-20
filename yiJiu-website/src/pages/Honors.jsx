import PageHeader from '../components/PageHeader'
import AnimatedSection from '../components/AnimatedSection'
import { Award, Trophy, Medal, Star } from 'lucide-react'

const certificates = [
  { name: '高新技术企业证书', org: '科技部', year: '2019' },
  { name: 'ISO9001质量管理体系认证', org: 'SGS', year: '2017' },
  { name: 'ISO14001环境管理体系认证', org: 'SGS', year: '2018' },
  { name: 'IATF16949汽车行业质量管理体系', org: 'TÜV', year: '2020' },
  { name: 'CE欧盟认证', org: 'TÜV', year: '2018' },
  { name: '知识产权管理体系认证', org: '国家知识产权局', year: '2021' },
  { name: '国家火炬计划项目', org: '科技部', year: '2020' },
  { name: '省级工程技术研究中心', org: '省科技厅', year: '2022' },
  { name: '专精特新小巨人企业', org: '工信部', year: '2023' },
  { name: '中国驰名商标', org: '国家商标局', year: '2021' },
  { name: '行业十大影响力品牌', org: '行业协会', year: '2022' },
  { name: '绿色工厂示范企业', org: '工信部', year: '2023' },
]

const awards = [
  { icon: Trophy, title: '行业十大影响力品牌', year: '2022' },
  { icon: Medal, title: '技术创新奖一等奖', year: '2021' },
  { icon: Star, title: '客户满意度金奖', year: '2023' },
  { icon: Award, title: '优秀供应商奖', year: '2022' },
]

export default function Honors() {
  return (
    <div>
      <PageHeader 
        title="荣誉资质" 
        subtitle="权威认证，品质保障，值得信赖的合作伙伴"
        breadcrumbs={['首页', '关于我们', '荣誉资质']}
      />

      {/* Awards Summary */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0a1628] via-[#1e1b4b] to-[#0f172a] text-white">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                    <award.icon className="w-10 h-10 text-amber-400" />
                  </div>
                  <div className="text-lg font-bold mb-1">{award.title}</div>
                  <div className="text-white/60 text-sm">{award.year}年</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-sm text-primary-400 font-semibold mb-2">CERTIFICATES</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">资质认证</h2>
            <p className="text-white/70 max-w-2xl mx-auto">资质齐全，权威认证，按需定制，厂家直销，品质之选</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="group bg-white/5 rounded-2xl border border-white/10 hover:border-primary-400/30 hover:shadow-xl transition-all overflow-hidden">
                  <div className="aspect-[3/4] bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:from-primary-500/10 group-hover:to-primary-500/20 transition-colors">
                    <div className="text-center">
                      <Award className="w-12 h-12 text-white/30 group-hover:text-primary-400 mx-auto mb-3 transition-colors" />
                      <div className="text-white/50 text-sm">{cert.name}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-sm mb-1">{cert.name}</div>
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span>{cert.org}</span>
                      <span>{cert.year}年</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
