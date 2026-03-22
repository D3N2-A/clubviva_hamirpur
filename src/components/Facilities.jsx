import { motion } from 'framer-motion'
import { facilities } from '../constants'

export default function Facilities() {
  return (
    <section id="facilities" className="py-32 px-8 max-w-screen-2xl mx-auto">
      <motion.div
        className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-2xl">
          <h2 className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic">
            The <span className="text-primary">Ecosystem</span>
          </h2>
          <p className="text-on-surface-variant font-body text-lg">
            Every corner is designed for performance, comfort, and results. A
            dedicated space for every goal.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[900px]">
        {facilities.map((facility, i) => (
          <motion.div
            key={facility.title}
            className={`${facility.span} group relative overflow-hidden bg-surface-container`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <img
              src={facility.image}
              alt={facility.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              loading="lazy"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent ${facility.padding} flex flex-col justify-end`}
            >
              <h3
                className={`font-headline ${facility.titleSize} font-bold uppercase mb-2`}
              >
                {facility.title}
              </h3>
              <p className="text-on-surface-variant text-sm max-w-md">
                {facility.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
