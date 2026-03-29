import { footerLinks } from '../constants'

export default function Footer() {
  return (
    <footer className="bg-[#1C1B1B] w-full py-16 px-8 mt-24">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 max-w-screen-2xl mx-auto">
        <div className="max-w-md">
          <div className="text-xl font-bold text-primary font-headline mb-4 uppercase">
            CLUB VIVA
          </div>
          <p className="font-body text-sm text-on-background/60 leading-relaxed">
            The pinnacle of fitness and lifestyle in Himachal Pradesh. Combining
            high-performance training with elite recovery and artisanal cafe
            culture.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-label text-primary text-[10px] uppercase tracking-widest font-bold">
              Follow Us
            </span>
            {footerLinks.followUs.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-on-background/60 hover:text-primary transition-colors font-body text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label text-primary text-[10px] uppercase tracking-widest font-bold">
              Explore
            </span>
            {footerLinks.explore.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-on-background/60 hover:text-primary transition-colors font-body text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label text-primary text-[10px] uppercase tracking-widest font-bold">
              Legal
            </span>
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-on-background/60 hover:text-primary transition-colors font-body text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto mt-24 pt-8 border-t border-outline-variant/10">
        <p className="font-body text-sm text-on-background/60 text-center md:text-left">
          &copy; 2024 Club Viva Luxury Gym &amp; Cafe. Gandhi Chowk, Gurukul
          Mall, Hamirpur. +91 82192 58833
        </p>
      </div>

      {/* Crafted by banner */}
      <div className="mt-8 pt-6 border-t border-[#333] relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          <span className="font-label text-[10px] uppercase tracking-[0.3em] text-on-background/30 font-bold">
            Designed &amp; Built by
          </span>
          <a
            href="https://github.com/D3N2-A"
            target="_blank"
            rel="noopener noreferrer"
            className="font-headline text-sm font-bold uppercase tracking-tight text-on-background/70 hover:text-primary transition-colors duration-300 group"
          >
            Anmol Sharma
            <span className="block h-[1px] w-0 group-hover:w-full bg-primary transition-all duration-500" />
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/D3N2-A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-background/40 hover:text-on-background transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/anmol37/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-background/40 hover:text-[#0A66C2] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
