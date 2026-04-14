"use client";
import type { GalleryImage } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const [dragStart, setDragStart] = useState(0);
  const image = images[currentIndex];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNext, onPrev]);

  const handleDragEnd = (info: any) => {
    const distance = info.offset.x;
    if (distance < -50) {
      onNext();
    } else if (distance > 50) {
      onPrev();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95"
        onClick={onClose}
      >
        {/* Image fullscreen container */}
        <motion.div
          key={`image-${currentIndex}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          drag="x"
          dragElastic={0.2}
          dragConstraints={{ left: -50, right: 50 }}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 w-screen h-screen cursor-grab active:cursor-grabbing flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-contain object-center select-none pointer-events-none"
            priority
            quality={95}
          />
        </motion.div>

        {/* Bouton fermer */}
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed top-6 right-6 text-white/80 hover:text-white text-5xl font-light transition-colors z-10"
          aria-label="Fermer"
        >
          ✕
        </motion.button>

        {/* Navigation précédent */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          whileHover={{ scale: 1.1, color: "#D4AF37" }}
          whileTap={{ scale: 0.95 }}
          className="fixed left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-[#D4AF37] transition-colors z-10 p-3 rounded-full hover:bg-white/10"
          aria-label="Photo précédente"
        >
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <path
              d="M24 8L12 20L24 32"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>

        {/* Navigation suivant */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          whileHover={{ scale: 1.1, color: "#D4AF37" }}
          whileTap={{ scale: 0.95 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-[#D4AF37] transition-colors z-10 p-3 rounded-full hover:bg-white/10"
          aria-label="Photo suivante"
        >
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <path
              d="M16 8L28 20L16 32"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>

        {/* Compteur et infos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="font-inter text-white/80 text-sm">
            <span className="font-semibold">{currentIndex + 1}</span>
            <span className="text-white/50"> / {images.length}</span>
          </div>
          <div className="text-white/60 text-xs tracking-widest uppercase">
            {image.alt}
          </div>
          <div className="text-white/40 text-xs mt-2">
            Glissez ou utilisez ◀ ▶
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
