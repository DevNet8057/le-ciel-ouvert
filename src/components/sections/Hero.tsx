"use client";
import Countdown from "@/components/ui/Countdown";
import DecorativeCross from "@/components/ui/DecorativeCross";
import GoldButton from "@/components/ui/GoldButton";
import GoldenParticles from "@/components/ui/GoldenParticles";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { WEDDING } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const cloudsY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const decorY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section
      ref={ref}
      id="accueil"
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      {/* Fond image avec parallax */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <Image
          src="/images/couple/Images mariage/ED--2.JPG"
          alt="Ange Esther & Elvis Dirane"
          fill
          priority
          className="object-cover object-center"
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
      </motion.div>

      {/* Rayons de lumière */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[15, 35, 55, 72, 88].map((left, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-px origin-top"
            style={{
              left: `${left}%`,
              height: "60%",
              background:
                "linear-gradient(180deg, rgba(138,106,8,0.15) 0%, transparent 100%)",
              transform: `rotate(${(i % 3) * 3 - 3}deg)`,
            }}
            animate={{ opacity: [0, 0.12, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, delay: i * 1.5 }}
          />
        ))}
      </div>

      {/* Nuages SVG */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: cloudsY }}
      >
        <svg
          className="absolute top-8 left-8 opacity-10 w-48"
          viewBox="0 0 200 80"
          fill="white"
        >
          <ellipse cx="100" cy="50" rx="90" ry="30" />
          <ellipse cx="70" cy="40" rx="55" ry="25" />
          <ellipse cx="140" cy="45" rx="45" ry="20" />
        </svg>
        <svg
          className="absolute top-16 right-12 opacity-8 w-36"
          viewBox="0 0 200 80"
          fill="white"
        >
          <ellipse cx="100" cy="50" rx="80" ry="28" />
          <ellipse cx="65" cy="38" rx="50" ry="22" />
        </svg>
      </motion.div>

      {/* Particules dorées */}
      <GoldenParticles />

      {/* Éléments décoratifs flottants */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: decorY }}
      >
        <div className="absolute top-24 left-12 opacity-20">
          <DecorativeCross size={24} color="#8a6a08" />
        </div>
        <div className="absolute bottom-32 right-16 opacity-20">
          <DecorativeCross size={20} color="#A5D6FF" />
        </div>
      </motion.div>

      {/* Contenu centré */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        style={{ y: textY }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Croix animée */}
        <motion.div variants={fadeInUp} className="mb-6">
          <DecorativeCross size={36} color="#8a6a08" opacity={0.9} animated />
        </motion.div>

        {/* Pré-titre */}
        <motion.p
          variants={fadeInUp}
          className="font-inter text-sky-light text-xs md:text-sm uppercase tracking-[0.3em] mb-5"
        >
          Nous vous invitons à célébrer
        </motion.p>

        {/* Nom de la mariée */}
        <motion.h1
          variants={fadeInUp}
          className="font-cinzel text-white font-bold tracking-[0.08em] text-4xl md:text-6xl lg:text-7xl leading-tight"
        >
          Ange Esther
        </motion.h1>

        {/* Séparateur & */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-4 my-2"
        >
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[#8a6a08]" />
          <span className="font-cormorant text-[#8a6a08] text-2xl md:text-3xl italic">
            &
          </span>
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[#8a6a08]" />
        </motion.div>

        {/* Nom du marié */}
        <motion.h1
          variants={fadeInUp}
          className="font-cinzel text-white font-bold tracking-[0.08em] text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          Elvis Dirane
        </motion.h1>

        {/* Thème */}
        <motion.p
          variants={fadeInUp}
          className="font-cormorant text-sky-light text-2xl md:text-3xl italic mb-5"
        >
          "{WEDDING.theme}"
        </motion.p>

        {/* Citation biblique */}
        <motion.blockquote
          variants={fadeInUp}
          className="font-cormorant text-white/70 text-lg italic mb-8 max-w-md"
        >
          {WEDDING.bibleVerse}
          <footer className="block font-inter text-[#8a6a08] text-xs mt-2 not-italic tracking-widest">
            — {WEDDING.bibleRef}
          </footer>
        </motion.blockquote>

        {/* Compte à rebours */}
        <motion.div variants={fadeInUp} className="mb-10">
          <Countdown targetDate={WEDDING.dates.wedding} />
        </motion.div>

        {/* Bouton CTA */}
        <motion.div variants={fadeInUp}>
          <GoldButton href="#rsvp" size="md">
            Confirmer ma présence
          </GoldButton>
        </motion.div>

        {/* Date */}
        <motion.p
          variants={fadeInUp}
          className="font-inter text-white/50 text-xs uppercase tracking-[0.3em] mt-6"
        >
          16 Mai 2026 — Yaoundé, Cameroun
        </motion.p>
      </motion.div>

      {/* Chevron scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 9L12 15L18 9"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
