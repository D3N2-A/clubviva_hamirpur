import { motion } from 'framer-motion'
import { galleryItems } from '../constants'

export default function Gallery() {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="px-8 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16 relative">
          <h2 className="font-headline text-6xl md:text-8xl font-black uppercase italic tracking-tighter opacity-10">
            GALLERY
          </h2>
          <motion.h3
            className="font-headline text-3xl font-bold -mt-8 md:-ml-12 z-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            VIVA IN MOTION
          </motion.h3>
        </div>

        <div className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden ${item.aspect || ''} break-inside-avoid`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
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
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
