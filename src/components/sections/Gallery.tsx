"use client";
import Lightbox from "@/components/ui/Lightbox";
import SectionTitle from "@/components/ui/SectionTitle";
import { scaleIn, staggerSlow } from "@/lib/animations";
import { WEDDING } from "@/lib/constants";
import { shuffleArray } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

/*
  Layout masonry en 4 colonnes :
  Chaque image a un ratio différent pour créer un effet naturel.
  Sur mobile → 2 colonnes, sur tablette → 3, sur desktop → 4.
*/
const aspectRatios: Record<number, string> = {
  0: "aspect-[3/4]" /* Portrait */,
  1: "aspect-square",
  2: "aspect-[4/5]",
  3: "aspect-[3/4]",
  4: "aspect-[4/3]" /* Paysage */,
  5: "aspect-[3/4]",
  6: "aspect-square",
  7: "aspect-[4/5]",
  8: "aspect-[3/4]",
  9: "aspect-[4/3]",
  10: "aspect-[3/4]",
  11: "aspect-square",
  12: "aspect-[4/5]",
  13: "aspect-[3/4]",
  14: "aspect-[4/3]",
  15: "aspect-[3/4]",
  16: "aspect-square",
  17: "aspect-[4/5]",
};

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  // Mélanger les images avec une seed pour cohérence entre rechargements
  const images = shuffleArray([...WEDDING.gallery], 12345);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : 0));
  const prevImage = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + images.length) % images.length : 0,
    );

  /* Répartir les 18 images dans 4 colonnes */
  const columns = [
    images.filter((_, i) => i % 4 === 0) /* col 1 : 0,4,8,12,16   */,
    images.filter((_, i) => i % 4 === 1) /* col 2 : 1,5,9,13,17   */,
    images.filter((_, i) => i % 4 === 2) /* col 3 : 2,6,10,14     */,
    images.filter((_, i) => i % 4 === 3) /* col 4 : 3,7,11,15     */,
  ];

  /* Retrouver l'index global depuis colonne + row */
  const globalIndex = (col: number, row: number) => col + row * 4;

  return (
    <section id="galerie" className="py-24 md:py-32 lg:py-40 bg-[#F9F4EC]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <SectionTitle
          pretitle="Nos moments ensemble"
          title="Galerie"
          subtitle="Des instants précieux capturés pour l'éternité"
        />

        {/* ── Masonry 4 colonnes ── */}
        <motion.div
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-3 md:gap-4">
              {col.map((img, rowIdx) => {
                const gi = globalIndex(colIdx, rowIdx);
                const ratio = aspectRatios[gi] ?? "aspect-square";
                return (
                  <motion.div
                    key={gi}
                    variants={scaleIn}
                    custom={gi}
                    className={`relative rounded-xl overflow-hidden cursor-pointer group shadow-card
                      hover:shadow-gold-sm transition-all duration-500 ${ratio}`}
                    onClick={() => openLightbox(gi)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Voir ${img.alt}`}
                    onKeyDown={(e) => e.key === "Enter" && openLightbox(gi)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />

                    {/* Overlay dégradé bas permanent (léger) */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#152038]/30 to-transparent pointer-events-none" />

                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-[#2D8FE0]/0 group-hover:bg-[#2D8FE0]/18 transition-all duration-500 flex items-center justify-center">
                      <motion.div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                        <div className="bg-white/25 backdrop-blur-sm rounded-full p-3 border border-white/40">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <circle
                              cx="11"
                              cy="11"
                              r="7"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M16.5 16.5L21 21"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M8 11H14M11 8V14"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </motion.div>
                    </div>

                    {/* Numéro discret */}
                    <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-cinzel text-white/70 text-[10px] tracking-widest bg-black/20 backdrop-blur-sm rounded px-1.5 py-0.5">
                        {String(gi + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </motion.div>

        {/* Séparateur */}
        <div className="mt-14 mb-4">
          <div className="section-sep" />
        </div>

        {/* Note */}
        <div className="text-center mt-6">
          <p className="font-cormorant italic text-[#6B7E99] text-lg">
            D'autres souvenirs à créer ensemble le 16 Mai 2026
          </p>
          <span className="text-[#8a6a08] text-sm">✦</span>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
}
