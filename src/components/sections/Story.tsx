'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { WEDDING } from '@/lib/constants'
import { fadeInLeft, fadeInRight } from '@/lib/animations'

export default function Story() {
  return (
    <section id="histoire" className="py-24 md:py-32 lg:py-40 bg-[#FDFCFA] relative overflow-hidden">

      {/* Colombe déco arrière-plan */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none select-none">
        <span className="font-cinzel text-[#1A2744] text-[200px] leading-none">✝</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <SectionTitle
          pretitle="Deux vies, une seule histoire"
          title="Notre Histoire"
          subtitle="Le chemin que Dieu a tracé pour nous"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Fil vertical central (desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#8a6a08]/30 to-transparent" />

          <div className="space-y-16 md:space-y-24">
            {WEDDING.story.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={step.id}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image */}
                  <ScrollReveal
                    variants={isEven ? fadeInLeft : fadeInRight}
                    className="w-full lg:w-1/2"
                  >
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                      <Image
                        src={step.imageSrc}
                        alt={step.imageAlt}
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Numéro flottant*/}
                      <div className="absolute top-4 left-4 font-cinzel text-white/20 text-8xl font-bold leading-none select-none pointer-events-none">
                        {String(step.id).padStart(2, '0')}
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Texte */}
                  <ScrollReveal
                    variants={isEven ? fadeInRight : fadeInLeft}
                    className="w-full lg:w-1/2"
                  >
                    <div className="relative">
                      {/* Numéro arrière-plan */}
                      <span className="absolute -top-8 -left-4 font-cinzel text-[#1A2744]/[0.04] text-[120px] font-bold leading-none select-none pointer-events-none hidden lg:block">
                        {String(step.id).padStart(2, '0')}
                      </span>

                      <p className="font-cinzel text-[#8a6a08] text-sm uppercase tracking-[0.3em] mb-2">
                        {step.year}
                      </p>
                      <h3 className="font-cinzel text-[#1A2744] text-2xl md:text-3xl font-bold mb-4">
                        {step.title}
                      </h3>
                      <div className="w-12 h-px bg-[#8a6a08] mb-4" />
                      <p className="font-inter text-[#4A5568] leading-[1.9] text-base md:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Point sur le fil (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#8a6a08] border-2 border-white shadow-md" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}