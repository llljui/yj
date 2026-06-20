import { motion } from 'framer-motion'
import { ArrowRight, Play, Award, Users, Factory, TrendingUp, Globe, Lightbulb, Shield, HeartHandshake } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import AnimatedSection from '../components/AnimatedSection'

const stats = [
  { icon: Factory, value: '60+', label: '年行业沉淀', suffix: '年' },
  { icon: Users, value: '160+', label: '专业团队', suffix: '人' },
  { icon: Award, value: '30+', label: '专利认证', suffix: '项' },
  { icon: TrendingUp, value: '5万+', label: '占地面积', suffix: 'm²' },
]

const reasons = [
  { icon: Lightbulb, title: '精益化的生产管理', desc: '公司进行了6大类57项精益化管理，确保最大限度提高作业效率、提高成品率、减少浪费' },
  { icon: Shield, title: '严格稳定的质量体系', desc: '0不良产品流出是我们为之奋斗的质量目标，严格遵循IATF16949体系要求进行作业' },
  { icon: HeartHandshake, title: '顾问式的市场服务', desc: '为用户提供从开发设计到交付的一站式解决方案，成为客户的热管理顾问和好伙伴' },
  { icon: Globe, title: '帮助客户成功的使命', desc: '以客户为中心，帮助客户成功，才能实现我们的价值，并取得可持续发展的动力' },
  { icon: Lightbulb, title: '坚持绿色发展理念', desc: '绿色发展不仅仅是一句口号，更是我们愿意长期坚持的行动战略' },
  { icon: Users, title: '高校联合研发中心', desc: '与高校联合，弥补研发理论体系的不足，使研发实践有理论指导' },
]

export default function About() {
  return (
    <div>
      <PageHeader 
        title="关于易玖" 
        subtitle="专注智能装备制造，引领行业创新发展"
        breadcrumbs={['首页', '关于我们', '公司介绍']}
      />

      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-500/20 to-primary-500/10 rounded-2xl overflow-hidden flex items-center justify-center">
                  <div className="text-primary-400/50 text-4xl font-bold">企业实景图片</div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white/10 rounded-xl shadow-2xl p-4 hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-white ml-1" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">企业宣传片</div>
                      <div className="text-xs text-white/60">观看视频了解我们</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                上海易玖智能科技有限公司
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  上海易玖智能科技有限公司坐落于上海市，是一家专业从事数控机床、自动化装备、高端装备研发、生产、销售于一体的高新技术企业。
                </p>
                <p>
                  公司致力于为全球用户提供金属成形装备解决方案。产品广泛应用于3C消费电子、新能源汽车、航空航天、模具制造、人形机器人、无人机等领域。
                </p>
                <p>
                  历经多年发展，公司已在华夏大地构筑完整的产业版图：双擎驱动的现代化生产基地配备国际优异生产线，两大研发中心持续输出创新解决方案，中心实验室与智能管控中心构筑技术护城河。
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#1e1b4b] to-[#0f172a] text-white">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-20 lg:py-28 bg-white/5">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <div className="text-sm text-primary-400 font-semibold mb-2">REASON</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">选择我们的理由</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white/5 rounded-2xl p-8 h-full border border-white/10 hover:border-primary-400/30 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-500 transition-colors">
                    <item.icon className="w-7 h-7 text-primary-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
