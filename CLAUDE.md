# CLAUDE.md — Site de Mariage "Le Ciel Ouvert"
## Ange Esther & Elvis Dirane — 16 Mai 2026

> **Ce fichier est le guide de référence absolu pour Claude Code.**
> Toujours lire ce fichier en entier avant de générer ou modifier du code.
> Toute décision technique ou design doit respecter les spécifications ci-dessous.

---

## 🎯 Vision du Projet

Site de mariage **one-page** chrétien, élégant et émotionnel pour **Ange Esther & Elvis Dirane**.
Thème : **"Le Ciel Ouvert"** — lumière divine, ciel dégagé, amour béni.
Public : invités du mariage (mobile-first, partage réseaux sociaux).

---

## 🛠️ Stack Technique Obligatoire

| Technologie | Version | Usage |
|---|---|---|
| Next.js | 15 (App Router) | Framework principal |
| TypeScript | 5+ | Typage strict |
| Tailwind CSS | 4+ | Styles utilitaires |
| Framer Motion | 11+ | Toutes les animations |
| Lenis | 1.x | Smooth scroll |
| React Hook Form | 7+ | Formulaire RSVP |
| Zod | 3+ | Validation formulaire |

### Polices Google Fonts (obligatoires)
```ts
// Dans layout.tsx
import { Cinzel, Cormorant_Garamond, Inter } from 'next/font/google'

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '600', '700'] })
// Titres principaux (majestueux, sacré)

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '600'], style: ['normal', 'italic'] })
// Sous-titres, citations bibliques, noms des mariés

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500'] })
// Corps du texte, UI, formulaires
```

---

## 🎨 Design System Complet

### Palette de Couleurs
```css
/* globals.css — variables CSS obligatoires */
:root {
  /* Primaires */
  --sky-light:     #A5D6FF;   /* Bleu ciel clair */
  --sky-main:      #81C4FF;   /* Bleu ciel principal */
  --sky-deep:      #5BAEE8;   /* Bleu ciel profond */

  /* Accent doré */
  --gold-bright:   #E8B923;   /* Or vif */
  --gold-main:     #D4AF37;   /* Or classique */
  --gold-muted:    #C9A227;   /* Or sombre */

  /* Fonds */
  --bg-white:      #FDFCFA;   /* Blanc cassé chaud */
  --bg-cream:      #F8F5F0;   /* Crème */
  --bg-sky-wash:   #F0F8FF;   /* Lavis bleu très pâle */

  /* Texte */
  --text-dark:     #1A2744;   /* Bleu nuit (titres) */
  --text-body:     #4A5568;   /* Gris foncé (corps) */
  --text-muted:    #718096;   /* Gris moyen (légendes) */
  --text-gold:     #D4AF37;   /* Or (accents texte) */

  /* Dégradés */
  --gradient-hero: linear-gradient(180deg, rgba(129,196,255,0.35) 0%, rgba(253,252,250,0) 100%);
  --gradient-section: linear-gradient(180deg, #FDFCFA 0%, #F0F8FF 50%, #FDFCFA 100%);
  --gradient-gold: linear-gradient(135deg, #E8B923 0%, #D4AF37 50%, #C9A227 100%);
}
```

### Typographie — Hiérarchie Stricte
```
H1 (Noms des mariés) : Cinzel 700, 4xl–7xl, letter-spacing: 0.08em, color: --text-dark
H2 (Titres sections) : Cinzel 600, 3xl–5xl, letter-spacing: 0.06em, color: --text-dark
H3 (Sous-titres)    : Cormorant Garamond Italic 600, 2xl–3xl, color: --sky-deep
Citation biblique    : Cormorant Garamond Italic 300, xl–2xl, color: --text-muted
Corps du texte       : Inter 400, base–lg, line-height: 1.8, color: --text-body
Labels/UI           : Inter 500, sm, letter-spacing: 0.05em, UPPERCASE
```

### Spacing & Layout
- **Container** : max-w-7xl, padding: px-6 md:px-12 lg:px-20
- **Section padding** : py-24 md:py-32 lg:py-40
- **Gap inter-éléments** : gap-8 md:gap-12 lg:gap-16
- **Border radius** : rounded-2xl (cartes), rounded-full (boutons pill)

---

## 📁 Structure des Fichiers (à créer exactement)

```
wedding-site/
├── CLAUDE.md                          ← Ce fichier
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
│
├── public/
│   ├── images/
│   │   ├── couple/                    ← Photos du couple (à remplacer)
│   │   │   ├── hero-bg.jpg            ← Photo hero (paysage, haute résolution)
│   │   │   ├── story-1.jpg            ← Photo histoire 1
│   │   │   ├── story-2.jpg            ← Photo histoire 2
│   │   │   ├── story-3.jpg            ← Photo histoire 3
│   │   │   └── story-4.jpg            ← Photo histoire 4
│   │   └── gallery/                   ← Photos galerie (gallery-1.jpg à gallery-9.jpg)
│   ├── icons/
│   │   ├── cross.svg                  ← Croix décorative SVG
│   │   ├── dove.svg                   ← Colombe SVG
│   │   └── ring.svg                   ← Alliance SVG
│   └── fonts/                         ← Si fonts locales nécessaires
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                 ← Root layout + metadata SEO
│   │   ├── page.tsx                   ← Page principale (assemblage sections)
│   │   ├── globals.css                ← Variables CSS + styles globaux
│   │   └── api/
│   │       └── rsvp/
│   │           └── route.ts           ← API Route pour RSVP (optionnel)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx         ← Navbar sticky avec smooth scroll
│   │   │   ├── LenisProvider.tsx      ← Wrapper pour initialiser Lenis
│   │   │   └── Footer.tsx             ← Pied de page
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx               ← Section 1 : Hero plein écran
│   │   │   ├── Story.tsx              ← Section 2 : Notre Histoire
│   │   │   ├── Venue.tsx              ← Section 3 : Lieux & Horaires
│   │   │   ├── Gallery.tsx            ← Section 4 : Galerie photos
│   │   │   ├── DressCode.tsx          ← Section 5 : Dress Code
│   │   │   └── RSVP.tsx               ← Section 6 : Formulaire RSVP
│   │   │
│   │   └── ui/
│   │       ├── Countdown.tsx          ← Compte à rebours animé
│   │       ├── ParallaxImage.tsx      ← Wrapper image avec parallax
│   │       ├── ScrollReveal.tsx       ← Wrapper animation au scroll
│   │       ├── GoldButton.tsx         ← Bouton doré réutilisable
│   │       ├── SectionTitle.tsx       ← Titre de section animé
│   │       ├── Lightbox.tsx           ← Visionneuse photos galerie fullscreen
│   │       ├── DecorativeCross.tsx    ← Croix décorative SVG animée
│   │       ├── GoldenParticles.tsx    ← Particules dorées flottantes
│   │       └── ConfettiCelebration.tsx← Confettis & particules de célébration
│   │
│   ├── hooks/
│   │   ├── useLenis.ts                ← Hook pour smooth scroll Lenis
│   │   ├── useParallax.ts             ← Hook useScroll + useTransform
│   │   └── useScrollReveal.ts         ← Hook pour animations au scroll
│   │
│   ├── lib/
│   │   ├── animations.ts              ← Variants Framer Motion réutilisables
│   │   ├── constants.ts               ← Données du mariage (dates, lieux, etc.)
│   │   ├── placeholders.ts            ← URLs images temporaires (Unsplash)
│   │   └── utils.ts                   ← Fonctions utilitaires (cn, shuffleArray, etc.)
│   │
│   └── types/
│       └── index.ts                   ← Types TypeScript globaux
```

---

## 📋 Données du Mariage (constants.ts)

```typescript
// src/lib/constants.ts

export const WEDDING = {
  groomFirstName: 'Elvis',
  groomLastName: 'Dirane',
  brideFirstName: 'Ange Esther',
  brideLastName: '',  // À compléter
  coupleNames: 'Ange Esther & Elvis Dirane',
  theme: 'Le Ciel Ouvert',
  bibleVerse: '« La femme n\'est pas sans l\'homme, ni l\'homme sans la femme, dans le Seigneur. »',
  bibleRef: '1 Corinthiens 11:11',

  dates: {
    wedding: new Date('2026-05-16T10:00:00'),  // Jour J
    civil: new Date('2026-05-14'),               // Mariage civil
  },

  events: [
    {
      id: 'civil',
      date: '14 Mai 2026',
      day: 'Jeudi',
      title: 'Mariage Civil',
      time: 'À préciser',
      location: 'Mairie de Mewoulou',
      address: 'Mewoulou, Yaoundé',
      mapsUrl: 'https://maps.google.com/?q=Mewoulou+Yaounde',
      icon: '⚖️',
      description: 'Union civile devant les autorités'
    },
    {
      id: 'religious',
      date: '16 Mai 2026',
      day: 'Samedi',
      title: 'Cérémonie Religieuse',
      time: 'À préciser',
      location: 'EEC Melen',
      address: 'Melen, Yaoundé',
      mapsUrl: 'https://maps.google.com/?q=EEC+Melen+Yaounde',
      icon: '✝️',
      description: 'Célébration de l\'union devant Dieu'
    },
    {
      id: 'reception',
      date: '16 Mai 2026',
      day: 'Samedi',
      title: 'Réception & Festivités',
      time: 'À préciser',
      location: 'Helen Hôtel',
      address: 'Nsam-Efoulan, Yaoundé',
      mapsUrl: 'https://maps.google.com/?q=Helen+Hotel+Yaounde',
      icon: '🥂',
      description: 'Dîner, danse et célébration'
    }
  ],

  venues: [
    {
      name: 'Mairie de Mewoulou',
      role: 'Mariage Civil — 14 Mai',
      address: 'Mewoulou, Yaoundé, Cameroun',
      mapsUrl: 'https://maps.google.com/?q=Mewoulou+Yaounde',
    },
    {
      name: 'Nsam-Efoulan',
      role: 'Rassemblement familial',
      address: 'Nsam-Efoulan, Yaoundé, Cameroun',
      mapsUrl: 'https://maps.google.com/?q=Nsam+Efoulan+Yaounde',
    },
    {
      name: 'EEC Melen',
      role: 'Cérémonie Religieuse — 16 Mai',
      address: 'Melen, Yaoundé, Cameroun',
      mapsUrl: 'https://maps.google.com/?q=EEC+Melen+Yaounde',
    },
    {
      name: 'Helen Hôtel',
      role: 'Réception — 16 Mai',
      address: 'Yaoundé, Cameroun',
      mapsUrl: 'https://maps.google.com/?q=Helen+Hotel+Yaounde',
    }
  ],

  dressCode: {
    title: 'Dress Code',
    subtitle: 'Élégance & Grâce',
    description: 'Pour honorer ce jour béni, nous vous invitons à revêtir l\'élégance. Adoptez des tenues dans les tons de la cérémonie : bleu ciel, or, crème et blanc. Votre présence illuminera notre journée.',
    colors: [
      { name: 'Bleu Ciel', hex: '#81C4FF', label: 'Principal' },
      { name: 'Or Doré', hex: '#D4AF37', label: 'Accent' },
      { name: 'Crème', hex: '#F8F5F0', label: 'Secondaire' },
      { name: 'Blanc Pur', hex: '#FFFFFF', label: 'Classique' },
    ]
  }
} as const
```

---

## 🎬 Animations — Spécifications Framer Motion

### Variants Réutilisables (lib/animations.ts)
```typescript
// src/lib/animations.ts

import { Variants } from 'framer-motion'

// Fade in depuis le bas (usage général)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
}

// Fade in depuis la gauche
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  }
}

// Fade in depuis la droite
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  }
}

// Scale in (cartes, boutons)
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

// Container stagger (liste d'enfants)
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

// Text reveal par caractère
export const textReveal: Variants = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

// Ligne décorative (underline animé)
export const lineGrow: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }
  }
}
```

### Parallax — Hook useParallax
```typescript
// src/hooks/useParallax.ts
'use client'
import { useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'

export function useParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])
  return { ref, y }
}

// Usage dans un composant :
// const { ref, y } = useParallax(0.2)
// <div ref={ref}><motion.div style={{ y }}>...</motion.div></div>
```

### Lenis Smooth Scroll (hooks/useLenis.ts)
```typescript
// src/hooks/useLenis.ts
'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Smooth scroll pour les liens ancre de la navbar
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const target = document.querySelector((e.currentTarget as HTMLAnchorElement).getAttribute('href')!)
        if (target) lenis.scrollTo(target as HTMLElement, { offset: -80 })
      })
    })

    return () => lenis.destroy()
  }, [])
}
```

---

## 🏗️ Code des Composants Clés

### layout.tsx
```tsx
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Cinzel, Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-cinzel' })
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant'
})
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Ange Esther & Elvis Dirane — Le Ciel Ouvert | 16 Mai 2026',
  description: 'Rejoignez-nous pour célébrer notre union bénie par Dieu. Mariage chrétien "Le Ciel Ouvert" le 16 Mai 2026 à Yaoundé.',
  keywords: ['mariage', 'wedding', 'Yaoundé', 'chrétien', 'Ange Esther', 'Elvis Dirane'],
  openGraph: {
    title: 'Ange Esther & Elvis Dirane — Le Ciel Ouvert',
    description: 'Célébrons ensemble notre union bénie. 16 Mai 2026 — Yaoundé, Cameroun.',
    images: [{ url: '/images/couple/hero-bg.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ange Esther & Elvis Dirane — Mariage 16 Mai 2026',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cinzel.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className="font-inter bg-[#FDFCFA] text-[#4A5568] antialiased">
        {children}
      </body>
    </html>
  )
}
```

### globals.css (styles critiques)
```css
/* src/app/globals.css */
@import "tailwindcss";

:root {
  --font-cinzel: 'Cinzel', serif;
  --font-cormorant: 'Cormorant Garamond', serif;
  --font-inter: 'Inter', sans-serif;

  --sky-light: #A5D6FF;
  --sky-main: #81C4FF;
  --sky-deep: #5BAEE8;
  --gold-bright: #E8B923;
  --gold-main: #D4AF37;
  --gold-muted: #C9A227;
  --bg-white: #FDFCFA;
  --bg-cream: #F8F5F0;
  --bg-sky-wash: #F0F8FF;
  --text-dark: #1A2744;
  --text-body: #4A5568;
  --text-muted: #718096;
}

html {
  scroll-behavior: auto; /* Lenis prend le contrôle */
}

/* Scrollbar personnalisée */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg-cream); }
::-webkit-scrollbar-thumb { background: var(--gold-main); border-radius: 3px; }

/* Classes utilitaires custom */
.font-cinzel    { font-family: var(--font-cinzel); }
.font-cormorant { font-family: var(--font-cormorant); }
.font-inter     { font-family: var(--font-inter); }

/* Dégradé fond global entre sections */
.section-gradient {
  background: linear-gradient(180deg, #FDFCFA 0%, #F0F8FF 50%, #FDFCFA 100%);
}

/* Ligne dorée décorative */
.gold-divider {
  display: block;
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold-main), transparent);
  margin: 0 auto;
}

/* Animation hover bouton doré */
.btn-gold {
  background: linear-gradient(135deg, #E8B923 0%, #D4AF37 100%);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(212,175,55,0.3);
}
.btn-gold:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(212,175,55,0.5);
}

/* Effet verre (glassmorphism) pour cartes */
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.8);
}

/* Masque dégradé pour images hero */
.hero-overlay {
  background: linear-gradient(
    180deg,
    rgba(129, 196, 255, 0.4) 0%,
    rgba(26, 39, 68, 0.3) 60%,
    rgba(26, 39, 68, 0.6) 100%
  );
}
```

### Hero.tsx — Section Hero
```tsx
// src/components/sections/Hero.tsx
'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Countdown from '@/components/ui/Countdown'
import GoldenParticles from '@/components/ui/GoldenParticles'
import { WEDDING } from '@/lib/constants'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax vitesses différentes
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const cloudsY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <section ref={ref} id="accueil" className="relative h-screen min-h-[700px] overflow-hidden">

      {/* Background image avec parallax */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <Image
          src="/images/couple/hero-bg.jpg"
          alt="Ange Esther & Elvis Dirane"
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Overlay dégradé */}
        <div className="absolute inset-0 hero-overlay" />
      </motion.div>

      {/* Nuages décoratifs avec parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ y: cloudsY }}
      >
        {/* Remplacer par : <Image src="/images/clouds.png" fill className="object-cover" alt="" /> */}
      </motion.div>

      {/* Particules dorées */}
      <GoldenParticles />

      {/* Contenu Hero */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        style={{ y: textY }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Croix décorative top */}
        <motion.div variants={fadeInUp} className="mb-8">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-auto opacity-80">
            <path d="M16 2V30M2 16H30" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>

        {/* Pré-titre */}
        <motion.p
          variants={fadeInUp}
          className="font-inter text-[#A5D6FF] text-sm uppercase tracking-[0.3em] mb-4"
        >
          Nous vous invitons à célébrer
        </motion.p>

        {/* Noms des mariés */}
        <motion.h1
          variants={fadeInUp}
          className="font-cinzel text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wide leading-tight mb-2"
        >
          Ange Esther
        </motion.h1>
        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-2">
          <div className="gold-divider flex-1 max-w-24" />
          <span className="font-cormorant text-[#D4AF37] text-2xl italic">&</span>
          <div className="gold-divider flex-1 max-w-24" />
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className="font-cinzel text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wide leading-tight mb-6"
        >
          Elvis Dirane
        </motion.h1>

        {/* Thème */}
        <motion.p
          variants={fadeInUp}
          className="font-cormorant text-[#A5D6FF] text-2xl md:text-3xl italic mb-4"
        >
          "{WEDDING.theme}"
        </motion.p>

        {/* Citation biblique */}
        <motion.p
          variants={fadeInUp}
          className="font-cormorant text-white/70 text-lg italic mb-8 max-w-lg"
        >
          {WEDDING.bibleVerse}
          <span className="block text-[#D4AF37] text-sm mt-1 not-italic font-inter tracking-widest">
            — {WEDDING.bibleRef}
          </span>
        </motion.p>

        {/* Compte à rebours */}
        <motion.div variants={fadeInUp} className="mb-10">
          <Countdown targetDate={WEDDING.dates.wedding} />
        </motion.div>

        {/* CTA Button */}
        <motion.a
          variants={fadeInUp}
          href="#rsvp"
          className="btn-gold font-cinzel text-white px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Confirmer ma présence
        </motion.a>

        {/* Date */}
        <motion.p variants={fadeInUp} className="font-inter text-white/60 text-sm mt-6 tracking-widest uppercase">
          16 Mai 2026 — Yaoundé, Cameroun
        </motion.p>
      </motion.div>

      {/* Chevron scroll down */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </motion.div>
    </section>
  )
}
```

### Countdown.tsx — Compte à Rebours
```tsx
// src/components/ui/Countdown.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CountdownProps {
  targetDate: Date
}

interface TimeLeft {
  jours: number
  heures: number
  minutes: number
  secondes: number
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ jours: 0, heures: 0, minutes: 0, secondes: 0 })

  useEffect(() => {
    const calculate = () => {
      const diff = targetDate.getTime() - Date.now()
      if (diff <= 0) return setTimeLeft({ jours: 0, heures: 0, minutes: 0, secondes: 0 })
      setTimeLeft({
        jours:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        heures:   Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes:  Math.floor((diff / (1000 * 60)) % 60),
        secondes: Math.floor((diff / 1000) % 60),
      })
    }
    calculate()
    const id = setInterval(calculate, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const units = [
    { label: 'Jours',    value: timeLeft.jours },
    { label: 'Heures',   value: timeLeft.heures },
    { label: 'Minutes',  value: timeLeft.minutes },
    { label: 'Secondes', value: timeLeft.secondes },
  ]

  return (
    <div className="flex gap-4 md:gap-8 items-center justify-center">
      {units.map(({ label, value }, i) => (
        <motion.div
          key={label}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
        >
          <div className="glass-card rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]">
            <motion.span
              key={value}
              className="font-cinzel text-3xl md:text-4xl font-bold text-white block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {String(value).padStart(2, '0')}
            </motion.span>
          </div>
          <span className="font-inter text-white/60 text-xs uppercase tracking-widest mt-2 block">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
```

### ScrollReveal.tsx — Wrapper Réutilisable
```tsx
// src/components/ui/ScrollReveal.tsx
'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Variants } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface ScrollRevealProps {
  children: React.ReactNode
  variants?: Variants
  delay?: number
  className?: string
  once?: boolean
}

export default function ScrollReveal({
  children,
  variants = fadeInUp,
  delay = 0,
  className = '',
  once = true
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

### RSVP.tsx — Formulaire Complet
```tsx
// src/components/sections/RSVP.tsx
'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const rsvpSchema = z.object({
  prenom:    z.string().min(2, 'Prénom requis'),
  nom:       z.string().min(2, 'Nom requis'),
  email:     z.string().email('Email invalide').optional().or(z.literal('')),
  phone:     z.string().optional(),
  presence:  z.enum(['oui', 'non'], { required_error: 'Veuillez confirmer votre présence' }),
  personnes: z.number().min(1).max(10).default(1),
  message:   z.string().max(500).optional(),
})

type RSVPFormData = z.infer<typeof rsvpSchema>

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, watch, formState: { errors } } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: { personnes: 1 }
  })

  const presence = watch('presence')

  const onSubmit = async (data: RSVPFormData) => {
    setIsLoading(true)
    console.log('RSVP soumis :', data)
    // TODO: Intégrer EmailJS ou Formspree :
    // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', data, 'PUBLIC_KEY')
    // Ou : await fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(data) })
    await new Promise(r => setTimeout(r, 1500)) // simulation
    setIsLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="rsvp" className="py-24 md:py-32 bg-[#F0F8FF]">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-inter text-[#81C4FF] text-sm uppercase tracking-[0.3em] mb-3">Votre Réponse</p>
            <h2 className="font-cinzel text-[#1A2744] text-4xl md:text-5xl font-bold mb-4">RSVP</h2>
            <span className="gold-divider" />
            <p className="font-cormorant text-[#718096] text-xl italic mt-6">
              Confirmez votre présence avant le 1er Mai 2026
            </p>
          </div>
        </ScrollReveal>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center glass-card rounded-3xl p-12"
          >
            <div className="text-6xl mb-6">✝️</div>
            <h3 className="font-cinzel text-[#1A2744] text-2xl font-bold mb-3">Merci !</h3>
            <p className="font-cormorant text-[#4A5568] text-xl italic">
              Votre réponse a bien été enregistrée. Nous vous attendons avec joie !
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12 space-y-6"
          >
            {/* Prénom & Nom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp}>
                <label className="font-inter text-xs uppercase tracking-widest text-[#718096] block mb-2">Prénom *</label>
                <input
                  {...register('prenom')}
                  className="w-full border-b-2 border-[#A5D6FF] bg-transparent py-3 font-cormorant text-lg text-[#1A2744] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-gray-300"
                  placeholder="Votre prénom"
                />
                {errors.prenom && <p className="text-red-400 text-xs mt-1">{errors.prenom.message}</p>}
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="font-inter text-xs uppercase tracking-widest text-[#718096] block mb-2">Nom *</label>
                <input
                  {...register('nom')}
                  className="w-full border-b-2 border-[#A5D6FF] bg-transparent py-3 font-cormorant text-lg text-[#1A2744] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-gray-300"
                  placeholder="Votre nom de famille"
                />
                {errors.nom && <p className="text-red-400 text-xs mt-1">{errors.nom.message}</p>}
              </motion.div>
            </div>

            {/* Email */}
            <motion.div variants={fadeInUp}>
              <label className="font-inter text-xs uppercase tracking-widest text-[#718096] block mb-2">Email</label>
              <input
                {...register('email')}
                type="email"
                className="w-full border-b-2 border-[#A5D6FF] bg-transparent py-3 font-cormorant text-lg text-[#1A2744] focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-gray-300"
                placeholder="votre@email.com (optionnel)"
              />
            </motion.div>

            {/* Présence */}
            <motion.div variants={fadeInUp}>
              <label className="font-inter text-xs uppercase tracking-widest text-[#718096] block mb-4">Serez-vous présent(e) ? *</label>
              <div className="flex gap-4">
                {[
                  { value: 'oui', label: '✓ Oui, avec joie !' },
                  { value: 'non', label: '✗ Je ne pourrai pas venir' }
                ].map(({ value, label }) => (
                  <label key={value} className={`flex-1 text-center py-3 rounded-full border-2 cursor-pointer font-inter text-sm transition-all ${
                    presence === value
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]'
                      : 'border-[#A5D6FF] text-[#4A5568] hover:border-[#81C4FF]'
                  }`}>
                    <input {...register('presence')} type="radio" value={value} className="sr-only" />
                    {label}
                  </label>
                ))}
              </div>
              {errors.presence && <p className="text-red-400 text-xs mt-1">{errors.presence.message}</p>}
            </motion.div>

            {/* Nombre de personnes */}
            <motion.div variants={fadeInUp}>
              <label className="font-inter text-xs uppercase tracking-widest text-[#718096] block mb-2">
                Nombre de personnes
              </label>
              <select
                {...register('personnes', { valueAsNumber: true })}
                className="w-full border-b-2 border-[#A5D6FF] bg-transparent py-3 font-cormorant text-lg text-[#1A2744] focus:outline-none focus:border-[#D4AF37] transition-colors"
              >
                {[1,2,3,4,5,6,7,8,9,10].map(n => (
                  <option key={n} value={n}>{n} personne{n > 1 ? 's' : ''}</option>
                ))}
              </select>
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeInUp}>
              <label className="font-inter text-xs uppercase tracking-widest text-[#718096] block mb-2">
                Message aux mariés (optionnel)
              </label>
              <textarea
                {...register('message')}
                rows={3}
                className="w-full border-b-2 border-[#A5D6FF] bg-transparent py-3 font-cormorant text-lg text-[#1A2744] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none placeholder:text-gray-300"
                placeholder="Un vœu, une bénédiction..."
              />
            </motion.div>

            {/* Submit */}
            <motion.div variants={fadeInUp} className="pt-4">
              <motion.button
                type="submit"
                disabled={isLoading}
                className="btn-gold w-full py-4 rounded-full font-cinzel text-white text-sm uppercase tracking-[0.2em] disabled:opacity-60"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? 'Envoi en cours...' : 'Envoyer ma confirmation'}
              </motion.button>
            </motion.div>
          </motion.form>
        )}
      </div>
    </section>
  )
}
```

---

## 🧩 Composants Additionnels

### LenisProvider.tsx — Wrapper Lenis
```tsx
// src/components/layout/LenisProvider.tsx
'use client'
import { useLenis } from '@/hooks/useLenis'

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useLenis()
  return <>{children}</>
}

// Usage dans app.tsx ou layout.tsx :
// <LenisProvider>
//   <Navigation />
//   <main>{children}</main>
//   <Footer />
// </LenisProvider>
```

### ConfettiCelebration.tsx — Particules de Fête
```tsx
// src/components/ui/ConfettiCelebration.tsx
'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ConfettiParticle {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  type: 'flower' | 'sparkle' | 'ribbon'
}

export default function ConfettiCelebration() {
  const [particles, setParticles] = useState<ConfettiParticle[]>([])
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Générer 50 particules aléatoires
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.3,
      duration: 2.5 + Math.random() * 1,
      size: 4 + Math.random() * 8,
      type: ['flower', 'sparkle', 'ribbon'][Math.floor(Math.random() * 3)] as 'flower' | 'sparkle' | 'ribbon',
    }))

    setParticles(newParticles)

    // Disparaître après animation
    const timer = setTimeout(() => setIsVisible(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => {
        let emoji = '✨'
        if (particle.type === 'flower') emoji = ['🌸', '🌹', '🌺', '🌻'][Math.floor(Math.random() * 4)]
        else if (particle.type === 'ribbon') emoji = '🎀'

        return (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, y: 'calc(100vh + 50px)' }}
            animate={{ opacity: [0, 1, 0], y: '-50px', x: [0, (Math.random() - 0.5) * 100, 0] }}
            transition={{ duration: particle.duration, delay: particle.delay, ease: 'easeOut' }}
            className="absolute text-3xl"
            style={{ left: `${particle.left}%`, fontSize: particle.size + 'px' }}
          >
            {emoji}
          </motion.div>
        )
      })}
    </div>
  )
}
```

### GoldButton.tsx — Bouton Doré Réutilisable
```tsx
// src/components/ui/GoldButton.tsx
'use client'
import { motion, MotionProps } from 'framer-motion'

interface GoldButtonProps extends MotionProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  disabled?: boolean
  className?: string
}

export default function GoldButton({
  children,
  onClick,
  href,
  disabled = false,
  className = '',
  ...motionProps
}: GoldButtonProps) {
  const Component = href ? 'a' : 'button'

  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      {...motionProps}
    >
      <Component
        href={href}
        onClick={onClick}
        disabled={disabled}
        className={`btn-gold font-cinzel text-white px-8 py-3 rounded-full text-sm uppercase tracking-[0.2em] inline-block disabled:opacity-60 ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  )
}
```

---

## 📚 Types Globaux (types/index.ts)

```typescript
// src/types/index.ts

export interface WeddingEvent {
  id: string
  date: string
  day: string
  title: string
  time: string
  location: string
  address: string
  mapsUrl: string
  icon: string
  description: string
}

export interface Venue {
  name: string
  role: string
  address: string
  mapsUrl: string
}

export interface DressCodeColor {
  name: string
  hex: string
  label: string
}

export interface GalleryImage {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface RSVPFormData {
  prenom: string
  nom: string
  email?: string
  phone?: string
  presence: 'oui' | 'non'
  personnes: number
  message?: string
}

export interface ParticleConfig {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export const WEDDING = {
  // Défini dans constants.ts
} as const
```

---

## 🛠️ Fonctions Utilitaires (lib/utils.ts)

```typescript
// src/lib/utils.ts

import type { ParticleConfig } from '@/types'
import React from 'react'

/**
 * Combine des classnames conditionnellement
 * @example cn('px-4', disabled && 'opacity-50') → 'px-4 opacity-50'
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Parser texte markdown simple : **texte** → HTML
 * @example parseBoldText('Bonjour **monde**')
 */
export function parseBoldText(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return React.createElement(
        'strong',
        { key: i, className: 'font-semibold text-[#1A2744]' },
        part.slice(2, -2)
      )
    }
    return part
  })
}

/**
 * Formater une date en français
 * @example formatDate(new Date()) → 'jeudi 14 avril 2026'
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/**
 * Mélanger un tableau avec seed pour cohérence client-side
 * @example shuffleArray([1,2,3,4,5], 12345) → [3,1,5,2,4]
 */
export function shuffleArray<T>(array: T[], seed: number = 472): T[] {
  const arr = [...array]
  // Fisher-Yates shuffle avec seed
  let random = seed
  for (let i = arr.length - 1; i > 0; i--) {
    random = (random * 9301 + 49297) % 233280
    const j = Math.floor((random / 233280) * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

/**
 * Générer les particules dorées flottantes
 * Valeurs fixes pour éviter l'hydration mismatch Next.js
 */
export function generateParticles(count: number = 16): ParticleConfig[] {
  const configs: ParticleConfig[] = [
    { id: 1, x: 8, y: 15, size: 3, duration: 4.2, delay: 0 },
    { id: 2, x: 18, y: 72, size: 2, duration: 5.8, delay: 0.5 },
    { id: 3, x: 28, y: 35, size: 4, duration: 3.9, delay: 1 },
    { id: 4, x: 38, y: 88, size: 2, duration: 6.1, delay: 1.5 },
    { id: 5, x: 48, y: 20, size: 3, duration: 4.7, delay: 0.3 },
    { id: 6, x: 58, y: 55, size: 2, duration: 5.3, delay: 0.8 },
    { id: 7, x: 68, y: 80, size: 4, duration: 4.0, delay: 1.2 },
    { id: 8, x: 78, y: 40, size: 3, duration: 6.5, delay: 0.6 },
    { id: 9, x: 88, y: 65, size: 2, duration: 3.7, delay: 1.8 },
    { id: 10, x: 12, y: 50, size: 3, duration: 5.1, delay: 0.9 },
    { id: 11, x: 22, y: 10, size: 2, duration: 4.4, delay: 1.4 },
    { id: 12, x: 35, y: 60, size: 4, duration: 5.6, delay: 0.2 },
    { id: 13, x: 52, y: 92, size: 2, duration: 3.8, delay: 1.7 },
    { id: 14, x: 65, y: 25, size: 3, duration: 6.2, delay: 0.4 },
    { id: 15, x: 75, y: 70, size: 2, duration: 4.9, delay: 1.1 },
    { id: 16, x: 92, y: 45, size: 3, duration: 5.4, delay: 0.7 },
  ]
  return configs.slice(0, count)
}
```

---

## 📷 Images Temporaires (lib/placeholders.ts)

```typescript
// src/lib/placeholders.ts
// Images temporaires pour le développement — Remplace par tes vraies photos

export const PLACEHOLDER_HERO = 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80'

export const PLACEHOLDER_STORY = [
  'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
  'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80',
  'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=80',
]

export const PLACEHOLDER_GALLERY = Array.from({ length: 9 }, (_, i) =>
  `https://images.unsplash.com/photo-${
    [
      '1519741497674-611481863552',
      '1583875762487-5f8f7c718d14',
      '1511285560929-80b5dd3cd3f4',
      '1529634806980-85c3dd6d34ac',
      '1522673607200-164d1b6ce486',
      '1537633552985-df8429e8048b',
      '1523438885200-e635ba2c371e',
      '1491438590914-bc09fcaaf77a',
      '1465495976277-4387d4b0b4c6',
    ][i]
  }?w=800&q=75`
)
```

---

## 🎬 Animations Avancées — Variants Complémentaires (lib/animations.ts)

```typescript
// Ajouter ces variants aux existants :

// Stagger horizontal
export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15
    }
  }
}

// Rotate in
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

// Slide horizontal
export const slideInLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

export const slideInRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

// Bounce subtle
export const bounceIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
      mass: 0.5
    }
  }
}
```

---

## 📌 Lightbox Fullscreen — Fonctionnalités Avancées

Le composant **Lightbox.tsx** supporte désormais:
- ✅ **Vue fullscreen** : 100% écran sur tous les appareils
- ✅ **Navigation drag/swipe** : Glissez gauche/droite pour naviguer
- ✅ **Clavier** : Arrow Left/Right pour naviguer, Escape pour fermer
- ✅ **Animations fluides** : Slide horizontal entre images
- ✅ **Adaptation responsive** : Fonctionne parfaitement mobile/tablette/desktop
- ✅ **Compteur d'images** : Affichage "X / Y" + titre de l'image



### Instructions de Remplacement des Images
```
WORKFLOW POUR AJOUTER VOS PHOTOS :

1. Placer les fichiers dans public/images/couple/ :
   - hero-bg.jpg     → Photo principale (paysage 1920x1080 minimum, couple)
   - story-1.jpg     → Première rencontre / début de l'histoire
   - story-2.jpg     → Fiançailles
   - story-3.jpg     → Moments ensemble
   - story-4.jpg     → Photo récente

2. Placer les photos galerie dans public/images/gallery/ :
   - gallery-1.jpg à gallery-9.jpg (portrait ou paysage, minimum 800x800)

3. Optimisation recommandée :
   - Convertir en WebP pour performance optimale
   - Taille max : 500KB par image
   - Next.js Image component gère le lazy loading automatiquement
```

---

## 📦 Package.json — Dépendances

```json
{
  "name": "le-ciel-ouvert",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.0.0",
    "lenis": "^1.0.0",
    "react-hook-form": "^7.0.0",
    "zod": "^3.0.0",
    "@hookform/resolvers": "^3.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.0.0"
  }
}
```

---

## 🧭 Navigation (Navigation.tsx)

```tsx
// src/components/layout/Navigation.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#accueil',   label: 'Accueil' },
  { href: '#histoire',  label: 'Notre Histoire' },
  { href: '#programme', label: 'Programme' },
  { href: '#galerie',   label: 'Galerie' },
  { href: '#dresscode', label: 'Dress Code' },
  { href: '#lieux',     label: 'Lieux' },
  { href: '#rsvp',      label: 'RSVP' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Initiales */}
        <a href="#accueil" className="font-cinzel text-[#1A2744] font-bold tracking-widest text-lg">
          AE <span className="text-[#D4AF37]">&</span> ED
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(1, -1).map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`font-inter text-sm uppercase tracking-widest transition-colors hover:text-[#D4AF37] ${
                scrolled ? 'text-[#4A5568]' : 'text-white/80'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA RSVP Desktop */}
        <a
          href="#rsvp"
          className="hidden md:inline-block btn-gold font-inter text-white text-xs uppercase tracking-[0.2em] px-6 py-2.5 rounded-full"
        >
          RSVP
        </a>

        {/* Hamburger Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col gap-1.5 p-2 ${scrolled ? 'text-[#1A2744]' : 'text-white'}`}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 transition-all bg-current ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all bg-current ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#A5D6FF]/20"
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-4 px-6 font-inter text-sm uppercase tracking-widest text-[#4A5568] hover:text-[#D4AF37] border-b border-[#A5D6FF]/10 transition-colors"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
```

---

## 🚀 Instructions de Démarrage

### 1. Créer le Projet
```bash
npx create-next-app@latest le-ciel-ouvert \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd le-ciel-ouvert
```

### 2. Installer les Dépendances
```bash
npm install framer-motion lenis react-hook-form @hookform/resolvers zod
```

### 3. Créer la Structure de Fichiers
```bash
mkdir -p src/components/{layout,sections,ui}
mkdir -p src/{hooks,lib,types}
mkdir -p public/images/{couple,gallery}
mkdir -p public/icons
```

### 4. Copier ce CLAUDE.md à la Racine du Projet
```bash
# Ce fichier doit être à la racine : wedding-site/CLAUDE.md
```

### 5. Lancer le Développement
```bash
npm run dev
# Ouvrir http://localhost:3000
```

### 6. Build Production
```bash
npm run build && npm start
```

---

## ✅ Checklist Qualité — Avant Livraison

### Fonctionnel
- [ ] Compte à rebours fonctionne en temps réel
- [ ] Formulaire RSVP valide et soumet correctement
- [ ] Navigation sticky scroll vers chaque section
- [ ] Tous les liens Google Maps s'ouvrent
- [ ] Galerie lightbox s'ouvre et se ferme au clic

### Performance
- [ ] Lighthouse Score > 90 (Performance, Accessibilité, SEO)
- [ ] Images optimisées via `next/image` (WebP auto)
- [ ] Pas de layout shift (CLS = 0)
- [ ] First Contentful Paint < 2s

### Responsive
- [ ] Testé sur mobile 375px (iPhone SE)
- [ ] Testé sur mobile 430px (iPhone Pro Max)
- [ ] Testé sur tablette 768px (iPad)
- [ ] Testé sur desktop 1440px+

### Animations
- [ ] Smooth scroll Lenis actif (pas de saut)
- [ ] Parallax hero visible au scroll
- [ ] Sections apparaissent progressivement (scroll reveal)
- [ ] Aucune animation ne bloque l'interaction
- [ ] `prefers-reduced-motion` respecté

### SEO & Partage
- [ ] Metadata titre et description en place
- [ ] Open Graph (image hero, titre, description)
- [ ] Twitter Card configurée
- [ ] `<html lang="fr">` défini

---

## 🎨 Éléments Décoratifs SVG

### Croix Discrète (DecorativeCross.tsx)
```tsx
// Usage : <DecorativeCross size={40} color="#D4AF37" opacity={0.3} />
export function DecorativeCross({ size = 40, color = '#D4AF37', opacity = 0.3 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={{ opacity }}>
      <path d="M20 4V36M4 20H36" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="20" cy="20" r="4" stroke={color} strokeWidth="1"/>
    </svg>
  )
}
```

### Particules Dorées (GoldenParticles.tsx)
```tsx
// Créer 12–20 petits cercles dorés (2–4px) avec positions et durées aléatoires
// Utiliser motion.div avec :
// animate={{ y: [-20, 20], opacity: [0, 1, 0] }}
// transition={{ duration: random(3–8), repeat: Infinity, repeatType: 'reverse' }}
```

---

## 📌 Règles Obligatoires pour Claude Code

1. **`'use client'`** obligatoire sur tous les composants avec Framer Motion, hooks, ou interactivité.
2. **Server Components** : `layout.tsx`, `page.tsx` et wrappers statiques restent côté serveur.
3. **Images** : Toujours utiliser `next/image` avec `fill` + `className="object-cover"` ou `width`/`height` explicites.
4. **Accessibility** : `aria-label` sur les boutons icônes, `alt` sur toutes les images.
5. **Lenis** : Initialiser uniquement dans `useEffect` d'un Client Component.
6. **TypeScript** : Zéro `any`. Typer toutes les props avec des interfaces nommées.
7. **Données** : Ne jamais hardcoder textes/dates dans les composants — tout lire depuis `constants.ts`.
8. **Tailwind** : Préférer les classes utilitaires. Utiliser `style={{ color: 'var(--gold-main)' }}` uniquement si la valeur n'est pas mappable en classe Tailwind.
9. **Animations** : Toujours importer les variants depuis `lib/animations.ts`, ne pas les redéfinir inline.
10. **Responsivité** : Mobile-first. Toujours définir les breakpoints `md:` et `lg:` pour chaque taille de texte et espacement.

---

*Projet : Le Ciel Ouvert — Ange Esther & Elvis Dirane — 16 Mai 2026*
*Mis à jour : Avril 2026*
