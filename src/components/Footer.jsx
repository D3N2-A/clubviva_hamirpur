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
    </footer>
  )
}
