'use client'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import ScrollReveal from '@/components/ui/ScrollReveal'
import DecorativeCross from '@/components/ui/DecorativeCross'
import { WEDDING } from '@/lib/constants'
import { scaleIn, staggerContainer } from '@/lib/animations'

export default function DressCode() {
  return (
    <section id="dresscode" className="py-24 md:py-32 lg:py-40 bg-[#FDFCFA] relative overflow-hidden">

      {/* Texte décoratif arrière-plan */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-cinzel text-[#1A2744]/[0.025] text-[80px] md:text-[120px] lg:text-[160px] font-bold whitespace-nowrap">
          ÉLÉGANCE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <SectionTitle
          pretitle="Venez parés de grâce"
          title="Dress Code"
          subtitle={WEDDING.dressCode.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Colonne gauche — texte */}
          <ScrollReveal className="space-y-6">
            <p className="font-cormorant text-[#4A5568] text-xl md:text-2xl leading-[1.9]">
              {WEDDING.dressCode.description}
            </p>
            <p className="font-inter italic text-[#718096] text-sm border-l-2 border-[#8a6a08] pl-4">
              {WEDDING.dressCode.note}
            </p>
            <div className="flex justify-start pt-2">
              <DecorativeCross size={36} color="#8a6a08" opacity={0.4} />
            </div>
          </ScrollReveal>

          {/* Colonne droite — moodboard couleurs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {WEDDING.dressCode.colors.map((color) => (
              <motion.div
                key={color.name}
                variants={scaleIn}
                className="flex flex-col items-center gap-3 group cursor-default"
              >
                <motion.div
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg border-1 border-black transition-transform duration-300"
                  style={{
                    backgroundColor: color.hex,
                    boxShadow: `0 8px 30px ${color.hex}100`,
                  }}
                  whileHover={{ scale: 1.08 }}
                />
                <div className="text-center">
                  <p className="font-cinzel text-[#1A2744] text-sm font-semibold tracking-wide">
                    {color.name}
                  </p>
                  <p className="font-inter text-[#718096] text-xs uppercase tracking-widest">
                    {color.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}