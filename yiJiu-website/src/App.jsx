import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Culture from './pages/Culture'
import History from './pages/History'
import Honors from './pages/Honors'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cases from './pages/Cases'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/history" element={<History />} />
          <Route path="/honors" element={<Honors />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
