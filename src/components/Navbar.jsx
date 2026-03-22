import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../constants'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        <div className="text-2xl font-black tracking-tighter text-primary font-headline uppercase">
          CLUB VIVA
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-on-background hover:text-primary transition-colors font-headline tracking-tight text-sm font-bold uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/918219258833"
            className="gold-gradient text-on-primary font-headline tracking-tight text-sm font-bold uppercase px-6 py-2.5 rounded-sm hover:opacity-80 transition-all duration-300 active:scale-95"
          >
            JOIN NOW
          </a>
          <button
            className="md:hidden text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-surface-container"
          >
            <div className="flex flex-col px-8 py-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-on-background hover:text-primary transition-colors font-headline tracking-tight text-lg font-bold uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
