import { motion } from 'framer-motion'
import { pricingTiers } from '../constants'

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-8 max-w-screen-2xl mx-auto">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-label text-primary uppercase tracking-widest font-bold text-xs mb-4 block">
          Membership Tiers
        </span>
        <h2 className="font-headline text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          CHOOSE YOUR ACCESS
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            className={`p-10 flex flex-col ${
              tier.highlighted
                ? 'bg-surface-container-highest relative scale-100 md:scale-105 border-2 border-primary shadow-2xl z-10'
                : 'bg-surface-container border border-outline-variant/10'
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            {tier.badge && (
              <div className="absolute top-0 right-0 gold-gradient text-on-primary font-label text-[10px] font-black px-4 py-1 uppercase tracking-widest -translate-y-1/2">
                {tier.badge}
              </div>
            )}
            <h3 className="font-headline text-xl font-bold uppercase mb-2">
              {tier.name}
            </h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-headline font-black text-primary">
                {tier.price}
              </span>
              <span className="text-on-surface-variant text-sm">
                {tier.period}
              </span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow font-body text-sm text-on-surface-variant">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/918219258833"
              className={`w-full py-4 font-headline font-bold uppercase tracking-widest text-center block ${
                tier.highlighted
                  ? 'gold-gradient text-on-primary hover:opacity-90 transition-opacity'
                  : 'border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors'
              }`}
            >
              {tier.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
