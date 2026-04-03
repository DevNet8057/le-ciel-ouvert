'use client'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { WEDDING } from '@/lib/constants'
import { scaleIn, staggerContainer } from '@/lib/animations'
import type { WeddingEvent } from '@/types'

function EventCard({ event, delay = 0 }: { event: WeddingEvent; delay?: number }) {
  return (
    <motion.div
      variants={scaleIn}
      transition={{ delay }}
      className="glass-card rounded-2xl p-6 md:p-8 border border-[#8a6a08]/15 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(138,106,8,0.25)] transition-all duration-300 relative overflow-hidden"
    >
      {/* Icône grande en arrière-plan */}
      <div className="absolute top-3 right-4 text-7xl opacity-10 select-none pointer-events-none">
        {event.icon}
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{event.icon}</span>
          <div>
            <p className="font-cinzel text-[#8a6a08] text-xs uppercase tracking-[0.25em]">{event.date}</p>
            <p className="font-inter text-[#718096] text-xs">{event.day}</p>
          </div>
        </div>

        <h3 className="font-cinzel text-[#1A2744] text-xl md:text-2xl font-bold mb-1">
          {event.title}
        </h3>
        <p className="font-cormorant italic text-[#5BAEE8] text-lg mb-3">
          {event.location}
        </p>
        <p className="font-inter text-[#718096] text-sm mb-1">{event.address}</p>
        <p className="font-inter text-[#4A5568] text-sm mb-5">{event.description}</p>

        <a
          href={event.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-[#8a6a08] border border-[#8a6a08]/40 rounded-full px-4 py-2 hover:bg-[#8a6a08] hover:text-white transition-all duration-300"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          Voir sur Maps
        </a>
      </div>
    </motion.div>
  )
}

export default function Program() {
  const civil      = WEDDING.events.filter(e => e.id === 'civil')
  const weddingDay = WEDDING.events.filter(e => e.id !== 'civil')

  return (
    <section id="programme" className="py-24 md:py-32 lg:py-40 section-gradient">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <SectionTitle
          pretitle="Marquez vos agendas"
          title="Le Programme"
          subtitle="Les temps forts de notre célébration"
        />

        {/* Jour 1 */}
        <ScrollReveal className="mb-12">
          <h3 className="font-cinzel text-[#1A2744] text-xl font-bold text-center mb-2">
            Jeudi <span className="text-[#8a6a08]">14 Mai 2026</span>
          </h3>
          <p className="font-cormorant italic text-[#718096] text-center text-lg mb-8">
            Mariage Civil
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-1 max-w-lg mx-auto"
          >
            {civil.map((e, i) => <EventCard key={e.id} event={e} delay={i * 0.1} />)}
          </motion.div>
        </ScrollReveal>

        {/* Séparateur */}
        <div className="flex items-center gap-4 my-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#8a6a08]/30" />
          <span className="text-[#8a6a08] text-xl">✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#8a6a08]/30" />
        </div>

        {/* Jour 2 */}
        <ScrollReveal>
          <h3 className="font-cinzel text-[#1A2744] text-xl font-bold text-center mb-2">
            Samedi <span className="text-[#8a6a08]">16 Mai 2026</span>
          </h3>
          <p className="font-cormorant italic text-[#718096] text-center text-lg mb-8">
            Le Grand Jour
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {weddingDay.map((e, i) => <EventCard key={e.id} event={e} delay={i * 0.12} />)}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}