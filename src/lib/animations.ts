import type { Variants } from 'framer-motion'

/* Fade in depuis le bas */
export const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

/* Fade in depuis la gauche */
export const fadeInLeft: Variants = {
  hidden:  { opacity: 0, x: -50 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

/* Fade in depuis la droite */
export const fadeInRight: Variants = {
  hidden:  { opacity: 0, x: 50 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

/* Scale in (cartes, boutons) */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

/* Blur in (effet flou → net) */
export const blurIn: Variants = {
  hidden:  { opacity: 0, filter: 'blur(12px)', scale: 1.02 },
  visible: {
    opacity: 1, filter: 'blur(0px)', scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
}

/* Slide depuis le haut */
export const slideInFromTop: Variants = {
  hidden:  { opacity: 0, y: -30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

/* Rotation + apparition */
export const rotateIn: Variants = {
  hidden:  { opacity: 0, rotate: -8, scale: 0.95 },
  visible: {
    opacity: 1, rotate: 0, scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

/* Container pour stagger des enfants */
export const staggerContainer: Variants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

/* Stagger lent pour les galeries */
export const staggerSlow: Variants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

/* Révéler texte (overflow hidden sur le parent) */
export const textReveal: Variants = {
  hidden:  { opacity: 0, y: '100%' },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

/* Ligne décorative qui grandit */
export const lineGrow: Variants = {
  hidden:  { scaleX: 0, originX: '0%' },
  visible: {
    scaleX: 1,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
}