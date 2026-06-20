import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Eye, Share2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import AnimatedSection from '../components/AnimatedSection'

const newsDetails = {
  '1': {
    title: '易玖智能成功研发新一代五轴复合加工中心',
    type: 'company',
    date: '2024-03-15',
    views: 1234,
    content: `
      <p>经过三年技术攻关，公司成功研发出新一代BHR系列五轴复合加工中心，加工精度达到国际领先水平。</p>
      <p>该系列产品采用卧式对列双主轴布局，上刀架为回转B轴，下刀架（选配）为卧式伺服刀架，具有4轴（选配5轴）联动功能、车铣复合、高速高精度等特点。</p>
      <p>设备用于对复杂轴类零件等精密车、铣复合加工，广泛应用于船舶、汽车、模具等制造业，特别适合能源、油气、挤出机螺杆、塑料机械、曲轴及通用加工领域。</p>
      <p>此次技术突破标志着公司在高端数控装备领域迈出了重要一步，将进一步提升国产数控机床的国际竞争力。</p>
    `,
  },
  '5': {
    title: '2024年中国数控机床行业发展趋势分析',
    type: 'industry',
    date: '2024-03-10',
    views: 2345,
    content: `
      <p>随着制造业转型升级加速，数控机床行业迎来新的发展机遇，五轴加工中心需求持续增长。</p>
      <p>据中国机床工具工业协会数据显示，2023年中国机床行业总产值同比增长8.5%，其中高端数控机床增速超过15%。</p>
      <p>五轴联动加工中心作为高端数控机床的代表，在航空航天、新能源汽车、医疗器械等领域的应用越来越广泛。</p>
      <p>预计2024年，随着国产高端数控机床技术的不断突破，进口替代进程将进一步加速。</p>
    `,
  },
}

const defaultNews = {
  title: '新闻标题',
  type: 'company',
  date: '2024-01-01',
  views: 0,
  content: '<p>新闻内容待填写...</p>',
}

export default function NewsDetail() {
  const { id } = useParams()
  const news = newsDetails[id] || defaultNews

  return (
    <div>
      <PageHeader 
        title={news.type === 'company' ? '公司新闻' : '行业新闻'} 
        subtitle=""
        breadcrumbs={['首页', '新闻资讯', news.title]}
      />

      <section className="py-20 lg:py-28">
        <div className="section-container max-w-4xl">
          <AnimatedSection>
            <Link to="/news" className="inline-flex items-center text-white/60 hover:text-primary-400 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" /> 返回列表
            </Link>

            <div className="bg-white/5 rounded-2xl border border-white/10 p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6 text-sm text-white/50">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  news.type === 'company' ? 'bg-primary-500/20 text-primary-400' : 'bg-amber-500/20 text-amber-400'
                }`}>
                  {news.type === 'company' ? '公司新闻' : '行业新闻'}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{news.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{news.views} 阅读</span>
                </div>
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold mb-8">{news.title}</h1>

              <div className="prose prose-gray max-w-none">
                <div dangerouslySetInnerHTML={{ __html: news.content }} />
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white/60">分享到：</div>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary-500/20 flex items-center justify-center transition-colors">
                      <Share2 className="w-4 h-4 text-white/70" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
