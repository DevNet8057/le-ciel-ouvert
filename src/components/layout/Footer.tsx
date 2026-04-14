"use client";
import DecorativeCross from "@/components/ui/DecorativeCross";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";

interface ContactLink {
  id: string;
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}

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
              Conception et développement: Benilde NJEUTCHOU
            </p>
          </div>

          {/* Contact Section - Icônes Animées */}
          <div className="text-center">
            <h4 className="font-inter text-white/50 text-xs uppercase tracking-widest mb-8">
              Nous Contacter Pour Vos Travaux
            </h4>

            {/* Icônes de Contact */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 md:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Email - Développeur */}
              <motion.a
                href="mailto:devnet8057@gmail.com"
                variants={fadeInUp}
                whileHover={{ scale: 1.15, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex flex-col items-center gap-2"
                title="Contacter le développeur"
              >
                {/* Icône Email */}
                <motion.div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#8a6a08]/20 to-[#8a6a08]/5 border border-[#8a6a08]/30 group-hover:border-[#8a6a08]/60 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-[#8a6a08] group-hover:text-[#D4AF37] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </motion.div>
                {/* Label hover */}
                <span className="text-xs font-inter text-white/50 group-hover:text-[#8a6a08] transition-colors opacity-0 group-hover:opacity-100">
                  Email
                </span>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/237680154116"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ scale: 1.15, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex flex-col items-center gap-2"
                title="Contacter sur WhatsApp"
              >
                {/* Icône WhatsApp */}
                <motion.div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#25D366]/20 to-[#25D366]/5 border border-[#25D366]/30 group-hover:border-[#25D366]/60 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-[#25D366] group-hover:text-[#25D366] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.859 1.273c-1.531.86-2.771 2.047-3.623 3.443-1.686 2.772.677 6.396 3.508 7.978 1.439.733 2.989 1.039 4.574.976 1.486-.058 2.871-.42 4.038-1.078 1.701-1.035 2.981-2.626 3.74-4.605.759-1.979.938-4.143.547-6.378-.41-2.303-1.737-4.303-3.74-5.574-2.016-1.28-4.583-1.598-6.985-1.035z" />
                  </svg>
                </motion.div>
                {/* Label hover */}
                <span className="text-xs font-inter text-white/50 group-hover:text-[#25D366] transition-colors opacity-0 group-hover:opacity-100">
                  WhatsApp
                </span>
              </motion.a>

              {/* Téléphone */}
              <motion.a
                href="tel:+237657546880"
                variants={fadeInUp}
                whileHover={{ scale: 1.15, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex flex-col items-center gap-2"
                title="Appeler directement"
              >
                {/* Icône Téléphone */}
                <motion.div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#8a6a08]/20 to-[#8a6a08]/5 border border-[#8a6a08]/30 group-hover:border-[#8a6a08]/60 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-[#8a6a08] group-hover:text-[#D4AF37] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.707 12.293l-5.293-5.293a1 1 0 00-1.414 1.414L15.586 12l-4.586 4.586a1 1 0 001.414 1.414l5.293-5.293a1 1 0 000-1.414zM6.707 12.293l5.293-5.293a1 1 0 011.414 1.414L8.414 12l4.586 4.586a1 1 0 01-1.414 1.414l-5.293-5.293a1 1 0 010-1.414z" />
                  </svg>
                </motion.div>
                {/* Label hover */}
                <span className="text-xs font-inter text-white/50 group-hover:text-[#8a6a08] transition-colors opacity-0 group-hover:opacity-100">
                  Appel
                </span>
              </motion.a>

              {/* TikTok */}
              <motion.a
                href="https://www.tiktok.com/@earningrun"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ scale: 1.15, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex flex-col items-center gap-2"
                title="Suivre sur TikTok"
              >
                {/* Icône TikTok */}
                <motion.div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#000000]/20 to-[#25F4EE]/5 border border-[#25F4EE]/30 group-hover:border-[#25F4EE]/60 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-[#25F4EE] group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.321 5.562a5.122 5.122 0 01-2.922 2.922v9.075a3.745 3.745 0 01-7.419.553 3.75 3.75 0 013.75-3.75c.141 0 .281.01.416.025v2.893a1.26 1.26 0 01-.416-.066 1.875 1.875 0 10.016 3.75 1.875 1.875 0 001.875-1.875V8.484a3.747 3.747 0 003.75 3.75 3.75 3.75 0 00.5-7.48v.008z" />
                  </svg>
                </motion.div>
                {/* Label hover */}
                <span className="text-xs font-inter text-white/50 group-hover:text-[#25F4EE] transition-colors opacity-0 group-hover:opacity-100">
                  TikTok
                </span>
              </motion.a>
            </motion.div>

            {/* Texte contact optionnel */}
            <p className="font-inter text-white/40 text-xs mt-8">
              N'hésitez pas à nous contacter pour toute question 💌
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
