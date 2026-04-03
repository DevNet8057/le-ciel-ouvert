# 💍 "Le Ciel Ouvert" — Site de Mariage Ange Esther & Elvis Dirane

Un site web élégant, chrétien et émotionnel pour célébrer l'union de **Ange Esther & Elvis Dirane** le **16 Mai 2026** à Yaoundé, Cameroun.

> **Thème** : "Le Ciel Ouvert" — Lumière divine, ciel dégagé, amour béni.

---

## 📋 À Propos

Ce site one-page accueille les invités avec une expérience immersive et respectueuse du contexte chrétien du mariage. Il présente :

- **Hero animé** : Entrée majestueuse avec les noms des mariés
- **Notre Histoire** : Récit visuel du couple avec photos et frises chronologiques
- **Programme des événements** : Mariage civil, cérémonie religieuse, réception
- **Galerie photos** : Masonry responsive avec 18 images du couple
- **Dress Code** : Palette de couleurs (bleu ciel, or, crème) à adopter
- **Lieux du mariage** : Carte interactive et adresses (Mewoulou, Melen, Helen Hôtel)
- **Formulaire RSVP** : Confirmation de présence avec validation Zod
- **Navigation fluide** : Scroll smooth via Lenis, animations parallax

---

## 🛠️ Stack Technique

| Technologie         | Version         | Usage                  |
| ------------------- | --------------- | ---------------------- |
| **Next.js**         | 15 (App Router) | Framework principal    |
| **TypeScript**      | 5+              | Typage strict          |
| **Tailwind CSS**    | 4+              | Styles utilitaires     |
| **Framer Motion**   | 11+             | Animations fluides     |
| **Lenis**           | 1.x             | Smooth scroll          |
| **React Hook Form** | 7+              | Formulaire RSVP        |
| **Zod**             | 3+              | Validation des données |

### Polices Google

- **Cinzel** → Titres (majestueux, sacré)
- **Cormorant Garamond** → Sous-titres, citations bibliques
- **Inter** → Corps du texte, UI

---

## 🚀 Installation & Démarrage

### Prérequis

- **Node.js** ≥ 18
- **npm** ou **yarn**

### 1️⃣ Cloner / Initialiser le projet

```bash
cd le-ciel-ouvert
npm install
```

### 2️⃣ Développement (mode watch)

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

Le site se rafraîchit automatiquement lors de chaque modification.

### 3️⃣ Build Production

```bash
npm run build
npm start
```

### 4️⃣ Lint / Vérifier la Qualité

```bash
npm run lint
```

---

## 📁 Structure du Projet

```
le-ciel-ouvert/
├── CLAUDE.md                          ← Guide de référence complet
├── README.md                          ← Ce fichier
├── package.json                       ← Dépendances
│
├── public/
│   ├── images/couple/                 ← Photos du couple (18 images)
│   ├── images/gallery/                ← Galerie photos
│   └── icons/                         ← Icônes SVG décoratifs
│
└── src/
    ├── app/
    │   ├── layout.tsx                 ← Root layout + SEO metadata
    │   ├── page.tsx                   ← Page principale
    │   └── globals.css                ← Variables CSS + styles globaux
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navigation.tsx         ← Navbar sticky
    │   │   ├── Footer.tsx             ← Pied de page
    │   │   └── LenisProvider.tsx      ← Initialisation Lenis
    │   │
    │   ├── sections/               ← 7 sections de la page
    │   │   ├── Hero.tsx
    │   │   ├── Story.tsx
    │   │   ├── Program.tsx
    │   │   ├── Gallery.tsx
    │   │   ├── DressCode.tsx
    │   │   ├── Venue.tsx
    │   │   └── RSVP.tsx
    │   │
    │   └── ui/                     ← Composants réutilisables
    │       ├── Countdown.tsx       ← Compte à rebours
    │       ├── Lightbox.tsx        ← Visionneuse photos
    │       ├── ScrollReveal.tsx    ← Animations au scroll
    │       ├── ParallaxImage.tsx   ← Effets parallax
    │       ├── GoldenParticles.tsx ← Particules décoratives
    │       └── ...
    │
    ├── hooks/
    │   ├── useLenis.ts            ← Smooth scroll
    │   ├── useParallax.ts         ← Scroll parallax
    │   └── useScrollReveal.ts     ← Animations reveal
    │
    ├── lib/
    │   ├── constants.ts           ← Données du mariage
    │   ├── animations.ts          ← Variants Framer Motion
    │   ├── utils.ts               ← Fonctions utilitaires
    │   └── placeholders.ts        ← Données de test
    │
    └── types/
        └── index.ts               ← Types TypeScript globaux
```

---

## 🎨 Design System

### Palette de Couleurs

```css
--sky-light: #a5d6ff /* Bleu ciel clair */ --sky-main: #81c4ff
  /* Bleu ciel principal */ --sky-deep: #5baee8 /* Bleu ciel profond */
  --gold-bright: #e8b923 /* Or vif */ --gold-main: #d4af37 /* Or classique */
  --text-dark: #1a2744 /* Bleu nuit */ --text-body: #4a5568 /* Gris foncé */
  --bg-white: #fdfcfa /* Blanc cassé */ --bg-cream: #f8f5f0 /* Crème */;
```

### Typographie

- **H1** : Cinzel 700, 4xl–7xl, letter-spacing: 0.08em
- **H2** : Cinzel 600, 3xl–5xl, letter-spacing: 0.06em
- **Citation** : Cormorant Garamond Italic, xl–2xl
- **Corps** : Inter 400, base–lg, line-height: 1.8

---

## 📝 Données du Mariage (constants.ts)

Les informations clés sont centralisées dans `src/lib/constants.ts` :

```typescript
export const WEDDING = {
  groomFirstName: "Elvis",
  brideFirstName: "Ange Esther",
  coupleNames: "Ange Esther & Elvis Dirane",
  theme: "Le Ciel Ouvert",
  dates: {
    wedding: new Date("2026-05-16T10:00:00"),
    civil: new Date("2026-05-14T09:00:00"),
  },
  events: [
    /* Mariage civil, cérémonie, réception */
  ],
  venues: [
    /* Mewoulou, Melen, Helen Hôtel */
  ],
  gallery: [
    /* 18 photos du couple */
  ],
};
```

**Modifier les informations** → Éditer ce fichier, tout se met à jour automatiquement.

---

## 🎬 Animations

### Framer Motion Variants

Tous les variants réutilisables sont dans `src/lib/animations.ts` :

- `fadeInUp` — Apparition depuis le bas
- `scaleIn` — Zoom entrée (cartes)
- `staggerContainer` — Délai en cascade pour listes
- `lineGrow` — Ligne dorée qui s'étire
- etc.

### Lenis Smooth Scroll

Activé automatiquement via `<LenisProvider>` dans `layout.tsx`. Procure un scroll doux et naturel.

### Parallax

Utilisez le hook `useParallax()` pour créer des effets de profondeur :

```tsx
const { ref, y } = useParallax(0.3)
<div ref={ref}><motion.div style={{ y }}>Contenu</motion.div></div>
```

---

## 📸 Gestion des Images

### Ajouter vos photos

1. **Photos du couple** → Placer dans `public/images/couple/Images mariage/`
2. **Galerie** → Ajouter dans `public/images/gallery/`

### Noms de fichiers attendus

```
public/images/couple/Images mariage/
  ├── ED--3.JPG
  ├── ED--4.JPG
  ├── ED--5.JPG
  └── ... (18 fichiers total)
```

Les images sont chargées via `next/image` pour optimisation automatique.

---

## ✅ Checklist Avant Livraison

### Fonctionnel

- [ ] Compte à rebours fonctionne
- [ ] Formulaire RSVP valide et soumet
- [ ] Navigation scroll vers chaque section
- [ ] Galerie lightbox fonctionne
- [ ] Tous les liens Google Maps actifs

### Performance

- [ ] Lighthouse Score > 90
- [ ] Images optimisées (WebP)
- [ ] Pas de layout shift (CLS = 0)
- [ ] FCP < 2s

### Responsive

- [ ] ✓ Mobile 375px (iPhone SE)
- [ ] ✓ Mobile 430px (iPhone Pro)
- [ ] ✓ Tablet 768px (iPad)
- [ ] ✓ Desktop 1440px+

### Animations

- [ ] ✓ Smooth scroll Lenis actif
- [ ] ✓ Parallax hero visible
- [ ] ✓ Sections reveal progressivement
- [ ] ✓ `prefers-reduced-motion` respecté

---

## 🔧 Configuration

### Tailwind CSS

Configuré dans `tailwind.config.ts` avec les variables CSS du design system.

### TypeScript

Strict mode activé dans `tsconfig.json`. Tous les composants sont typés.

### ESLint

Configuration Next.js default dans `eslint.config.mjs`.

---

## 📚 Guides Additionnels

- **[CLAUDE.md](CLAUDE.md)** — Guide technique complet et spécifications détaillées
- **[AGENTS.md](AGENTS.md)** — Instructions pour les agents IA

---

## 🚢 Déploiement

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📞 Support & Questions

Pour toute question sur la configuration ou l'installation, consultez [CLAUDE.md](CLAUDE.md) ou contactez l'équipe de développement.

---

**🤍 Bienvenue à la célébration de l'amour béni d'Ange Esther & Elvis Dirane !**

_Le Ciel Ouvert — 16 Mai 2026 — Yaoundé, Cameroun_
