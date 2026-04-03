'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

const navLinks = [
  { href: '#accueil',   label: 'Accueil' },
  { href: '#histoire',  label: 'Notre Histoire' },
  { href: '#programme', label: 'Programme' },
  { href: '#galerie',   label: 'Galerie' },
  { href: '#dresscode', label: 'Dress Code' },
  { href: '#lieux',     label: 'Lieux' },
  { href: '#rsvp',      label: 'RSVP' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Barre de progression dorée */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#b8930e] to-[#8a6a08]"
          style={{ width: progressWidth }}
        />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo initiales */}
          <a
            href="#accueil"
            className={`font-cinzel font-bold tracking-widest text-lg transition-colors ${
              scrolled ? 'text-[#1A2744]' : 'text-white'
            }`}
          >
            AE <span className="text-[#8a6a08]">&</span> ED
          </a>

          {/* Liens desktop */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.slice(1, -1).map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`font-inter text-xs uppercase tracking-widest transition-colors hover:text-[#8a6a08] ${
                  scrolled ? 'text-[#4A5568]' : 'text-white/80'
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA RSVP desktop */}
          <a
            href="#rsvp"
            className="hidden lg:inline-block btn-gold font-inter text-white text-xs uppercase tracking-[0.2em] px-6 py-2.5 rounded-full"
          >
            RSVP
          </a>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden flex flex-col gap-1.5 p-2 ${
              scrolled ? 'text-[#1A2744]' : 'text-white'
            }`}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Menu mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg"
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-4 px-8 font-inter text-sm uppercase tracking-widest text-[#4A5568] hover:text-[#8a6a08] border-b border-[#A5D6FF]/15 transition-colors"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}