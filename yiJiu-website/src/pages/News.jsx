import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Eye } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import AnimatedSection from '../components/AnimatedSection'

const tabs = [
  { id: 'company', name: '公司新闻' },
  { id: 'industry', name: '行业新闻' },
]

const newsData = [
  {
    id: 1,
    type: 'company',
    title: '易玖智能成功研发新一代五轴复合加工中心',
    summary: '经过三年技术攻关，公司成功研发出新一代BHR系列五轴复合加工中心，加工精度达到国际领先水平...',
    date: '2024-03-15',
    views: 1234,
  },
  {
    id: 2,
    type: 'company',
    title: '易玖智能荣获2023年度智能制造示范企业',
    summary: '凭借在智能制造领域的突出贡献，公司被工信部评为2023年度智能制造示范企业...',
    date: '2024-02-28',
    views: 987,
  },
  {
    id: 3,
    type: 'company',
    title: '公司成功举办2024年供应商大会',
    summary: '来自全国各地的200余家供应商代表齐聚一堂，共商发展大计...',
    date: '2024-01-20',
    views: 856,
  },
  {
    id: 4,
    type: 'company',
    title: '易玖智能与某高校签署产学研合作协议',
    summary: '双方将在数控机床关键技术、智能制造系统等领域开展深度合作...',
    date: '2024-01-10',
    views: 765,
  },
  {
    id: 5,
    type: 'industry',
    title: '2024年中国数控机床行业发展趋势分析',
    summary: '随着制造业转型升级加速，数控机床行业迎来新的发展机遇，五轴加工中心需求持续增长...',
    date: '2024-03-10',
    views: 2345,
  },
  {
    id: 6,
    type: 'industry',
    title: '新能源汽车制造对机床行业的影响',
    summary: '新能源汽车的快速发展带动了大型压铸设备、精密加工设备的需求增长...',
    date: '2024-02-20',
    views: 1876,
  },
  {
    id: 7,
    type: 'industry',
    title: '五轴加工中心技术发展趋势',
    summary: '复合加工、智能化、绿色制造成为五轴加工中心发展的主要方向...',
    date: '2024-02-05',
    views: 1567,
  },
  {
    id: 8,
    type: 'industry',
    title: '工业机器人与数控机床的融合发展',
    summary: '机器人与机床的深度融合正在改变传统制造模式，柔性制造成为新趋势...',
    date: '2024-01-15',
    views: 1432,
  },
]

export default function News() {
  const [activeTab, setActiveTab] = useState('company')
  const filtered = newsData.filter(n => n.type === activeTab)

  return (
    <div>
      <PageHeader 
        title="新闻资讯" 
        subtitle="了解易玖智能最新动态与行业前沿资讯"
        breadcrumbs={['首页', '新闻资讯']}
      />

      <section className="py-20 lg:py-28">
        <div className="section-container">
          {/* Tabs */}
          <AnimatedSection className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-xl p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* News List */}
          <div className="space-y-6">
            {filtered.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.05}>
                <Link to={`/news/${item.id}`} className="block group">
                  <div className="bg-white rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            item.type === 'company' ? 'bg-primary-100 text-primary-600' : 'bg-accent-100 text-accent-600'
                          }`}>
                            {item.type === 'company' ? '公司新闻' : '行业新闻'}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                        <p className="text-gray-500 text-sm line-clamp-2">{item.summary}</p>
                      </div>
                      <div className="flex lg:flex-col items-center lg:items-end gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{item.views}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform hidden lg:block" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
