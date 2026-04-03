'use client'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { WEDDING } from '@/lib/constants'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import type { Venue as VenueType } from '@/types'

const venueIcons: Record<string, string> = {
  'Mariage Civil':             '⚖️',
  'Rassemblement familial':    '🕊️',
  'Cérémonie Religieuse':      '✝️',
  'Réception':                 '🥂',
}

function getIcon(role: string): string {
  for (const [key, val] of Object.entries(venueIcons)) {
    if (role.includes(key)) return val
  }
  return '📍'
}

export default function Venue() {
  return (
    <section id="lieux" className="py-24 md:py-32 lg:py-40 section-gradient">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <SectionTitle
          pretitle="Retrouvez-nous"
          title="Les Lieux"
          subtitle="Chaque lieu, une étape de notre journée bénie"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {WEDDING.venues.map((venue, index) => (
            <motion.div
              key={venue.name}
              variants={fadeInUp}
              transition={{ delay: index * 0.12 }}
              className="glass-card rounded-2xl p-6 md:p-8 border border-[#8a6a08]/10 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(138,106,8,0.2)] transition-all duration-300"
            >
              {/* Numéro décoratif */}
              <span className="absolute top-2 right-4 font-cinzel text-[#8a6a08]/15 text-7xl font-bold leading-none select-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="relative z-10">
                <div className="text-4xl mb-4">{getIcon(venue.role)}</div>
                <h3 className="font-cinzel text-[#1A2744] text-xl md:text-2xl font-bold mb-1">
                  {venue.name}
                </h3>
                <p className="font-cormorant italic text-[#8a6a08] text-lg mb-3">
                  {venue.role}
                </p>
                <p className="font-inter text-[#718096] text-sm mb-5">
                  {venue.address}
                </p>
                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-[#8a6a08] border border-[#8a6a08]/40 rounded-full px-5 py-2.5 hover:bg-[#8a6a08] hover:text-white transition-all duration-300"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Voir sur Google Maps
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}