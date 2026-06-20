import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const navLinks = [
  { name: '首页', href: '/' },
  {
    name: '关于我们',
    href: '/about',
    children: [
      { name: '公司介绍', href: '/about' },
      { name: '企业文化', href: '/culture' },
      { name: '发展历程', href: '/history' },
      { name: '荣誉资质', href: '/honors' },
    ]
  },
  { name: '产品中心', href: '/products' },
  { name: '客户案例', href: '/cases' },
  { name: '新闻资讯', href: '/news' },
  { name: '联系我们', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDrop, setActiveDrop] = useState(null)
  const { pathname } = useLocation()

  // 统一风格：所有页面都用半透明深色毛玻璃 + 白色文字
  const navBg = 'bg-[#0a1628]/80 backdrop-blur-md border-b border-white/10'
  const navText = 'text-white'
  const logoBox = 'bg-white text-[#0a1628]'
  const logoText = 'text-white'
  const linkHover = 'hover:text-white/70'
  const activeLink = 'text-primary-400'
  const btnClass = 'bg-white/15 text-white border border-white/30 hover:bg-white/25'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${navText}`}>
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl ${logoBox}`}>
                易
              </div>
              <div className={`font-bold text-lg leading-tight ${logoText}`}>
                <div>易玖智能</div>
                <div className="text-[10px] font-normal opacity-70 tracking-wider uppercase">YIJIU INTELLIGENCE</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href ||
                  (link.children && link.children.some(c => c.href === pathname))
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => link.children && setActiveDrop(link.name)}
                    onMouseLeave={() => setActiveDrop(null)}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center gap-1 py-2 text-[15px] font-medium transition-colors ${linkHover} ${isActive ? activeLink : ''}`}
                    >
                      {link.name}
                      {link.children && <ChevronDown className="w-4 h-4 opacity-70" />}
                    </Link>

                    <AnimatePresence>
                      {link.children && activeDrop === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                        >
                          <div className="bg-[#0f172a]/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 py-2 min-w-[200px] overflow-hidden">
                            {link.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.href}
                                className="block px-5 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-primary-400 transition-colors"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:4008880000" className={`flex items-center gap-2 text-sm font-medium transition-colors ${linkHover}`}>
                <Phone className="w-4 h-4" />
                <span>400-888-0000</span>
              </a>
              <Link to="/contact" className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${btnClass}`}>
                在线咨询
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0f172a]/95 backdrop-blur-md border-t border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="section-container py-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href ||
                    (link.children && link.children.some(c => c.href === pathname))
                  return (
                    <div key={link.name}>
                      <Link
                        to={link.href}
                        className={`block py-3 px-4 rounded-lg font-medium text-sm ${isActive ? 'bg-white/10 text-primary-400' : 'text-white/80 hover:bg-white/5 hover:text-white'}`}
                      >
                        {link.name}
                      </Link>
                      {link.children && (
                        <div className="pl-4 space-y-1">
                          {link.children.map((child) => (
                            <Link key={child.name} to={child.href} className="block py-2 px-4 text-sm text-white/60 hover:text-primary-400">
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
                <div className="pt-4 border-t border-white/10 mt-4">
                  <Link to="/contact" className="block w-full text-center py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-lg font-medium">
                    在线咨询
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="h-20" />
    </>
  )
}
