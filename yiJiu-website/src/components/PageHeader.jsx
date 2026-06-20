import { motion } from 'framer-motion'

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  return (
    <div className="page-header">
      <div className="section-container relative z-10">
        {breadcrumbs.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-white/70 mb-4"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2">/</span>}
                <span className={i === breadcrumbs.length - 1 ? 'text-white' : ''}>{crumb}</span>
              </span>
            ))}
          </motion.div>
        )}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}
