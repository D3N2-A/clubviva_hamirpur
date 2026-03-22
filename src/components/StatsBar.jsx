import { motion } from 'framer-motion'
import { stats } from '../constants'

export default function StatsBar() {
  return (
    <section className="bg-surface-container-low py-12 px-8">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center md:items-start border-l border-primary/20 pl-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="text-primary font-headline text-4xl font-black mb-1">
              {stat.value}
            </span>
            <span className="font-label text-on-surface-variant text-xs uppercase tracking-widest">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
