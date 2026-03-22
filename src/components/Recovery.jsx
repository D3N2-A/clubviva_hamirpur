import { motion } from 'framer-motion'
import { recoveryFeatures } from '../constants'

export default function Recovery() {
  return (
    <section id="recovery" className="py-32 bg-surface">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-8">
        {/* Staggered Images */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="/assets/gym-floor-weights.jpg"
              alt="Steam Room"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden mt-12">
            <img
              src="/assets/gym-floor-cardio.jpg"
              alt="Sauna Interior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="font-headline text-4xl md:text-6xl font-black uppercase italic mb-8">
            RECOVERY IS <br />
            <span className="text-tertiary">PERFORMANCE</span>
          </h2>
          <p className="text-on-surface-variant font-body text-lg mb-12 leading-relaxed">
            In our Recovery Zone, we treat rest as a discipline. Harness the
            power of contrast therapy with our artisanal saunas and world-class
            ice baths, designed to flush toxins and reset your nervous system.
          </p>
          <div className="space-y-8">
            {recoveryFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
              >
                <span className="w-12 h-12 rounded-full border border-tertiary flex items-center justify-center text-tertiary shrink-0">
                  <span className="material-symbols-outlined">
                    {feature.icon}
                  </span>
                </span>
                <div>
                  <h4 className="font-headline font-bold uppercase text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
