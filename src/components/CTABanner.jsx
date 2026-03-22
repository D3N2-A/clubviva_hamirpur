import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section className="py-32 px-8">
      <motion.div
        className="max-w-screen-2xl mx-auto gold-gradient p-16 md:p-32 text-center flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-headline text-5xl md:text-8xl font-black text-on-primary leading-[0.9] tracking-tighter mb-12 uppercase italic">
          READY TO START <br /> YOUR JOURNEY?
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <a
            href="https://wa.me/918219258833"
            className="bg-on-primary text-primary-container px-12 py-5 font-headline font-black text-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform uppercase tracking-tighter"
          >
            <span className="material-symbols-outlined">message</span> WhatsApp
          </a>
          <a
            href="tel:+918219258833"
            className="border-2 border-on-primary text-on-primary px-12 py-5 font-headline font-black text-xl flex items-center justify-center gap-3 hover:bg-on-primary hover:text-primary transition-colors uppercase tracking-tighter"
          >
            <span className="material-symbols-outlined">call</span> Call Now
          </a>
        </div>
        <p className="mt-8 font-label text-on-primary/60 uppercase tracking-widest text-xs font-bold">
          +91 82192 58833 | HAMIRPUR, HP
        </p>
      </motion.div>
    </section>
  )
}
