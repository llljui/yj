import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    // HashRouter 下不需要 scrollRestoration，直接 scrollTo
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
