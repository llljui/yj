import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Briefcase, Users, ChevronRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import AnimatedSection from '../components/AnimatedSection'

const contactInfo = [
  { icon: User, title: '联系人', content: '曹先生' },
  { icon: Phone, title: '电话', content: '400-888-0000' },
  { icon: Mail, title: '邮箱', content: 'contact@yijiu-tech.com' },
  { icon: MapPin, title: '地址', content: '上海市嘉定区嘉松北路980号' },
]

const inquiryTypes = [
  { id: 'quote', name: '报价咨询' },
  { id: 'product', name: '产品咨询' },
  { id: 'cooperation', name: '合作咨询' },
  { id: 'aftersales', name: '售后咨询' },
  { id: 'other', name: '其他' },
]

const subPages = [
  { icon: MessageSquare, name: '咨询留言', desc: '有任何问题都可以给我们留言', href: '/contact' },
  { icon: Briefcase, name: '招商加盟', desc: '诚邀全国各地合作伙伴加盟', href: '/contact' },
  { icon: Users, name: '加入我们', desc: '期待优秀的你加入易玖团队', href: '/contact' },
  { icon: MapPin, name: '阳光进链', desc: '了解我们的供应链体系', href: '/contact' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    type: 'quote',
    name: '',
    phone: '',
    email: '',
    city: '',
    company: '',
    position: '',
    content: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('感谢您的留言，我们会尽快与您联系！')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <PageHeader 
        title="联系我们" 
        subtitle="我们随时为您服务，请留下您的信息"
        breadcrumbs={['首页', '联系我们']}
      />

      {/* Sub Pages */}
      <section className="py-12 bg-white/5">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {subPages.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <Link to={item.href} className="block group">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-primary-400/30 hover:shadow-lg transition-all text-center">
                    <div className="w-12 h-12 mx-auto bg-primary-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary-500 transition-colors">
                      <item.icon className="w-6 h-6 text-primary-400 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold mb-1">{item.name}</h3>
                    <p className="text-xs text-white/60">{item.desc}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <AnimatedSection>
                <div className="bg-gradient-to-br from-[#0a1628] via-[#1e1b4b] to-[#0f172a] rounded-2xl p-8 text-white h-full">
                  <h2 className="text-2xl font-bold mb-6">联系信息</h2>
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary-400" />
                        </div>
                        <div>
                          <div className="text-sm text-white/60 mb-1">{item.title}</div>
                          <div className="font-medium">{item.content}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/10">
                    <h3 className="font-bold mb-4">快速链接</h3>
                    <div className="space-y-3">
                      {['产品中心', '新闻资讯', '客户案例', '关于我们'].map((link) => (
                        <Link key={link} to={`/${link === '关于我们' ? 'about' : link === '产品中心' ? 'products' : link === '新闻资讯' ? 'news' : 'cases'}`} className="flex items-center justify-between text-white/70 hover:text-white transition-colors">
                          <span>{link}</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/10">
                    <div className="w-32 h-32 bg-white/10 rounded-lg mx-auto flex items-center justify-center text-white/50 text-sm">
                      微信公众号<br/>二维码
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="bg-white/5 rounded-2xl border border-white/10 p-8 lg:p-10">
                  <h2 className="text-2xl font-bold mb-2">咨询留言</h2>
                  <p className="text-white/60 text-sm mb-8">请填写以下信息，我们会在收到您留言的一个工作日内给您回复。</p>

                  <form onSubmit={handleSubmit}>
                    {/* Inquiry Type */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-white/80 mb-3">咨询类型</label>
                      <div className="flex flex-wrap gap-3">
                        {inquiryTypes.map((type) => (
                          <label
                            key={type.id}
                            className={`cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                              formData.type === type.id
                                ? 'bg-primary-500 text-white'
                                : 'bg-white/10 text-white/70 hover:bg-white/20'
                            }`}
                          >
                            <input
                              type="radio"
                              name="type"
                              value={type.id}
                              checked={formData.type === type.id}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            {type.name}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Form Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          您的姓名 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-white/20 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/30 outline-none transition-all"
                          placeholder="请输入姓名"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          您的电话 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-white/20 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/30 outline-none transition-all"
                          placeholder="请输入手机号码"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">邮箱</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-white/20 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/30 outline-none transition-all"
                          placeholder="请输入邮箱"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">所在城市</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-white/20 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/30 outline-none transition-all"
                          placeholder="请输入城市"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">公司</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-white/20 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/30 outline-none transition-all"
                          placeholder="请输入公司名称"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">任职岗位</label>
                        <input
                          type="text"
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-white/20 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/30 outline-none transition-all"
                          placeholder="请输入岗位"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        留言内容 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-white/20 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/30 outline-none transition-all resize-none"
                        placeholder="请输入留言内容"
                      />
                    </div>

                    <div className="flex items-center gap-2 mb-8">
                      <input type="checkbox" id="agree" required className="w-4 h-4 text-primary-400 rounded" />
                      <label htmlFor="agree" className="text-sm text-white/70">
                        我已阅读并同意 <span className="text-primary-400">隐私政策</span>
                      </label>
                    </div>

                    <button type="submit" className="btn-primary w-full md:w-auto">
                      <Send className="w-4 h-4 mr-2" /> 提交留言
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
