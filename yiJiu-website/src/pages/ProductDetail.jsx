import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Phone, Mail, CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import AnimatedSection from '../components/AnimatedSection'

const productData = {
  'bhr500': {
    name: 'BHR500V',
    category: '五轴复合加工中心',
    intro: 'BHR500V卧式车铣复合加工中心采用卧式对列双主轴布局，上刀架为回转B轴，下刀架（选配）为卧式伺服刀架，具有4轴（选配5轴）联动功能、车铣复合、高速高精度等特点。',
    application: '设备用于对复杂轴类零件等精密车、铣复合加工，广泛应用于船舶、汽车、模具等制造业，特别适合能源、油气、挤出机螺杆、塑料机械、曲轴及通用加工领域，为用户提供客户化的加工方案。',
    features: [
      '通过有限元分析设计，保证整机结构紧凑、刚性高',
      'C1/C2/B轴均采用内装直驱电机，具有精度高、响应快等特点',
      '采用正交设计结构，最大化Y轴加工范围',
      '主轴箱采用双电机主从模式，连接齿轮箱，双档变速',
      'X、Y、Z、C各轴均配置双电机，传递扭矩大，移动速度快',
      '五轴全闭环控制，加工精度高',
      '一次装夹完成多道工序加工，装夹误差少，生产效率高',
      '采用仓储式刀库，配备KUKA机器人实现刀具及附件头的快速更换',
    ],
    industries: [
      '能源领域：汽轮机及水电方面的轴类工件',
      '大型船用柴油机领域：凸轮轴、曲轴等',
      '齿轮箱：风电齿轮箱的传动零件和矿山机械的齿轮箱传动零件等',
      '汽车领域：发动机曲轴、凸轮轴、传动轴等',
      '模具行业：复杂曲面模具加工',
    ],
  },
  'bhr700': {
    name: 'BHR700V',
    category: '五轴复合加工中心',
    intro: 'BHR700V系列卧式车铣复合加工中心，机床配置有X、Y、Z、B、C五轴，可实现各种车、铣、镗、钻、铣齿、磨等复合加工。',
    application: '尤其适用于直线度、圆柱度、平行度、跳动要求小的高精加工、深孔加工及重型零件的加工。公司致力于复杂零件加工要求的分析，开发相关附件为每个用户提供可定制的有效的整体解决方案。',
    features: [
      '主轴箱采用双电机主从模式，连接齿轮箱，双档变速',
      'X、Y、Z、C各轴均配置双电机，传递扭矩大，移动速度快',
      '五轴全闭环控制，加工精度高',
      '一次装夹完成多道工序加工，装夹误差少，生产效率高',
      '采用仓储式刀库，配备KUKA机器人实现刀具及附件头的快速更换',
      '刀具更换快，刀库容量扩充方便',
      '擅长于深孔加工，最大加工孔深可达1500mm',
    ],
    industries: [
      '能源领域：汽轮机及水电方面的轴类工件',
      '大型船用柴油机领域：凸轮轴、曲轴等',
      '齿轮箱：风电齿轮箱的传动零件和矿山机械的齿轮箱传动零件等',
    ],
  },
}

const defaultProduct = {
  name: '产品名称',
  category: '产品分类',
  intro: '产品介绍内容待填写...',
  application: '适用行业内容待填写...',
  features: ['特点1', '特点2', '特点3', '特点4'],
  industries: ['行业1', '行业2', '行业3'],
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = productData[id] || defaultProduct

  return (
    <div>
      <PageHeader 
        title={product.name} 
        subtitle={product.category}
        breadcrumbs={['首页', '产品中心', product.name]}
      />

      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl aspect-square flex items-center justify-center">
                <div className="text-white/50 text-2xl font-bold">{product.name}</div>
              </div>
            </AnimatedSection>

            {/* Product Info */}
            <AnimatedSection delay={0.2}>
              <div className="text-sm text-primary-400 font-semibold mb-2">{product.category}</div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-6">{product.name}</h1>
              
              <div className="mb-8">
                <h3 className="text-lg font-bold text-primary-400 mb-3">产品介绍：</h3>
                <p className="text-white/70 leading-relaxed">{product.intro}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-primary-400 mb-3">产品特点：</h3>
                <ul className="space-y-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/70">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-primary-400 mb-3">适用行业：</h3>
                <ul className="space-y-2">
                  {product.industries.map((ind, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/70">
                      <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-primary-400 mb-3">应用领域：</h3>
                <p className="text-white/70 leading-relaxed">{product.application}</p>
              </div>

              <div className="flex gap-4">
                <Link to="/contact" className="btn-primary">
                  立即订购 <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to="/products" className="btn-outline !border-white/20 !text-white/80 hover:!bg-white/10">
                  <ArrowLeft className="w-4 h-4 mr-2" /> 返回列表
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0a1628] via-[#1e1b4b] to-[#0f172a] text-white">
        <div className="section-container">
          <AnimatedSection className="text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">需要了解更多产品信息？</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">欢迎联系我们的专业团队，我们将为您提供详细的产品资料和解决方案</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-white/60">咨询热线</div>
                  <div className="font-bold">400-888-0000</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-white/60">电子邮箱</div>
                  <div className="font-bold">contact@yijiu-tech.com</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
