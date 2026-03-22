import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { heroSlides } from '../constants'

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const videoRef = useRef(null)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  // Force-play videos on mobile after they mount
  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {})
      }
    }
  }, [current])

  return (
    <section className="relative h-screen w-full flex items-end sm:items-center justify-start overflow-hidden px-5 sm:px-8 md:px-24 pb-24 sm:pb-0">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-black/50 absolute inset-0 z-10 pointer-events-none" />
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {heroSlides[current].type === 'video' ? (
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                src={heroSlides[current].src}
              />
            ) : (
              <img
                src={heroSlides[current].src}
                alt={heroSlides[current].alt}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <motion.div
        className="relative z-20 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
          <span className="w-8 sm:w-12 h-[1px] bg-primary" />
          <span className="font-label text-primary uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold">
            Hamirpur's Premier Sanctuary
          </span>
        </div>
        <h1 className="font-headline text-3xl sm:text-5xl md:text-8xl font-black text-on-background leading-[0.9] tracking-tighter mb-4 sm:mb-8 uppercase italic">
          HIMACHAL'S LARGEST <br />
          <span className="text-primary text-glow">FITNESS DESTINATION</span>
        </h1>
        <p className="font-body text-base sm:text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-8 sm:mb-12 font-light leading-relaxed">
          7,000 Sq Ft of Elite Training, Recovery &amp; Wellness. Experience
          fitness redefined in the heart of the mountains.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a
            href="https://wa.me/918219258833"
            className="gold-gradient text-on-primary px-8 sm:px-12 py-4 sm:py-5 font-headline font-bold text-base sm:text-lg rounded-sm tracking-tight hover:scale-105 transition-transform text-center"
          >
            JOIN NOW
          </a>
          <a
            href="#facilities"
            className="border border-outline-variant/30 bg-surface-container/20 backdrop-blur-sm text-on-surface px-8 sm:px-12 py-4 sm:py-5 font-headline font-bold text-base sm:text-lg rounded-sm tracking-tight hover:bg-surface-container transition-colors text-center"
          >
            EXPLORE TOUR
          </a>
        </div>
      </motion.div>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 sm:bottom-10 left-5 sm:left-8 md:left-24 z-30 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-8 sm:w-12 h-1 transition-all duration-300 ${
              i === current ? 'bg-primary' : 'bg-primary/20'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
