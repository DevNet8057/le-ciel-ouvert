'use client'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import ScrollReveal from '@/components/ui/ScrollReveal'
import DecorativeCross from '@/components/ui/DecorativeCross'

export default function Footer() {
  return (
    <footer className="bg-[#1A2744] py-16 md:py-24 text-center relative overflow-hidden">

      {/* Particules dorées subtiles */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#8a6a08]"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <ScrollReveal variants={fadeInUp}>
          {/* Croix */}
          <div className="flex justify-center mb-6">
            <DecorativeCross size={48} color="#8a6a08" opacity={0.8} animated />
          </div>

          {/* Monogramme */}
          <h3 className="font-cinzel text-[#8a6a08] text-4xl md:text-5xl font-bold tracking-widest mb-6">
            AE <span className="text-white/40">&</span> ED
          </h3>

          {/* Ligne dorée */}
          <div className="gold-divider mb-6" />

          {/* Citation */}
          <p className="font-cormorant italic text-white/60 text-lg md:text-xl leading-relaxed mb-3">
            "Ce que Dieu a uni, que l'homme ne le sépare pas."
          </p>

          {/* Date */}
          <p className="font-inter text-white/40 text-xs uppercase tracking-[0.3em] mb-8">
            16 Mai 2026 — Yaoundé, Cameroun
          </p>

          {/* Ligne finale */}
          <div className="gold-divider mb-6" />

          <p className="font-inter text-white/30 text-xs tracking-widest">
            Avec amour ✦ Ange Esther & Elvis Dirane
          </p>
        </ScrollReveal>
      </div>
    </footer>
  )
}