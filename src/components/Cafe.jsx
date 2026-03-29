import { motion } from 'framer-motion'
import { cafeHighlights, cafeGallery } from '../constants'

export default function Cafe() {
  return (
    <section id="cafe" className="py-32 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* Header */}
        <motion.div
          className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <span className="font-label text-primary text-[10px] uppercase tracking-widest font-bold mb-4 block">
              Post-Workout Fuel
            </span>
            <h2 className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic">
              VIVA <span className="text-primary">CAFE</span>
            </h2>
            <p className="text-on-surface-variant font-body text-lg">
              Where nutrition meets flavor. Crafted meals designed to complement
              your training — every plate is built for performance.
            </p>
          </div>
        </motion.div>

        {/* Content: Gallery Grid + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Image/Video Grid — 3 columns */}
          <motion.div
            className="lg:col-span-3 grid grid-cols-2 gap-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {cafeGallery.map((item, i) => (
              <motion.div
                key={i}
                className={`overflow-hidden bg-surface-container ${i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {item.type === 'video' ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src={item.src}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Highlights — right side */}
          <motion.div
            className="lg:col-span-2 lg:sticky lg:top-32"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-10">
              {cafeHighlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex gap-6 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
                >
                  <span className="w-12 h-12 rounded-sm border border-primary flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </span>
                  <div>
                    <h4 className="font-headline font-bold uppercase text-lg">
                      {item.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://wa.me/918219258833"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-block gold-gradient text-on-primary font-headline font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-sm hover:opacity-90 transition-opacity"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              Order Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
