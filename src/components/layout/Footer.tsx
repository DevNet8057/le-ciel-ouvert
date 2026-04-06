"use client";
import DecorativeCross from "@/components/ui/DecorativeCross";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { fadeInUp } from "@/lib/animations";

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
          <div className="gold-divider mb-8" />

          {/* Citation */}
          <p className="font-cormorant italic text-white/60 text-lg md:text-xl leading-relaxed mb-3">
            "Ce que Dieu a uni, que l'homme ne le sépare pas."
          </p>

          {/* Date */}
          <p className="font-inter text-white/40 text-xs uppercase tracking-[0.3em] mb-8">
            16 Mai 2026 — Yaoundé, Cameroun
          </p>

          {/* Ligne finale */}
          <div className="gold-divider mb-8" />

          <p className="font-inter text-white/30 text-xs tracking-widest mb-12">
            Avec amour ✦ Ange Esther & Elvis Dirane
          </p>

          {/* Équipe de Développement */}
          <div className="mb-12 pb-8 border-b border-white/10">
            <h4 className="font-inter text-white/50 text-xs uppercase tracking-widest mb-3">
              Équipe de Développement
            </h4>
            <p className="font-inter text-white/40 text-xs">
              Conception et développement: @NKBV
            </p>
          </div>

          {/* Contact Section - Petit texte en bas */}
          <div className="text-center">
            <h4 className="font-inter text-white/40 text-xs uppercase tracking-widest mb-3">
              Nous Contacter
            </h4>
            <div className="font-inter text-white/50 text-xs space-y-1.5 leading-relaxed">
              <p className="text-white/60">Benilde NJEUTCHOU</p>

              {/* Email */}
              <a
                href="mailto:devnet8057@gmail.com"
                className="block hover:text-[#D4AF37] transition-colors"
              >
                📧 devnet8057@gmail.com
              </a>

              {/* WhatsApp & Téléphone */}
              <a
                href="https://wa.me/237680154116"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#D4AF37] transition-colors"
              >
                💬 WhatsApp: +237 680 154 116
              </a>
              <p>📞 Appel: +237 657 546 880</p>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@benildenjeutchou"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#D4AF37] transition-colors"
              >
                🎵 TikTok: @earningrun
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
