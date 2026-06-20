import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-dark-900 text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center font-bold text-xl">易</div>
              <div className="font-bold text-lg">易玖智能</div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              专注于智能装备制造，致力于为全球客户提供高端数控机床、自动化生产线及智能制造解决方案。
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-white/50">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>400-888-0000</span>
              </div>
              <div className="flex items-center gap-3 text-white/50">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>contact@yijiu-tech.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/50">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>上海市嘉定区</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">快速链接</h3>
            <div className="space-y-3">
              {[
                { name: '关于我们', href: '/about' },
                { name: '产品中心', href: '/products' },
                { name: '客户案例', href: '/cases' },
                { name: '新闻资讯', href: '/news' },
                { name: '联系我们', href: '/contact' },
              ].map((link) => (
                <Link key={link.name} to={link.href} className="block text-white/50 hover:text-primary-400 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">产品中心</h3>
            <div className="space-y-3">
              {['五轴复合加工中心', '五轴加工中心', '车削中心', '卧式加工中心', '立式加工中心'].map((item) => (
                <Link key={item} to="/products" className="block text-white/50 hover:text-primary-400 transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">关注我们</h3>
            <p className="text-white/50 text-sm mb-4">扫描二维码关注微信公众号，获取最新资讯</p>
            <div className="w-32 h-32 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white/50 text-sm">
              二维码占位
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            2024 上海易玖智能科技有限公司 版权所有 | 沪ICP备XXXXXXXX号
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link to="/" className="hover:text-white transition-colors">隐私政策</Link>
            <Link to="/" className="hover:text-white transition-colors">使用条款</Link>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full shadow-lg hover:from-primary-600 hover:to-purple-600 transition-all hover:scale-110 flex items-center justify-center z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
