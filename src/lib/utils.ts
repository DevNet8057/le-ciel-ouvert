import type { ParticleConfig } from '@/types'

/* Combine des classnames conditionnellement */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/* Formater une date en français */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/* Mélanger un tableau avec seed pour cohérence client-side */
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

/* Générer les particules dorées flottantes */
export function generateParticles(count: number = 16): ParticleConfig[] {
  // Valeurs fixes pour éviter l'hydration mismatch Next.js
  const configs: ParticleConfig[] = [
    { id: 1,  x: 8,  y: 15, size: 3, duration: 4.2, delay: 0 },
    { id: 2,  x: 18, y: 72, size: 2, duration: 5.8, delay: 0.5 },
    { id: 3,  x: 28, y: 35, size: 4, duration: 3.9, delay: 1 },
    { id: 4,  x: 38, y: 88, size: 2, duration: 6.1, delay: 1.5 },
    { id: 5,  x: 48, y: 20, size: 3, duration: 4.7, delay: 0.3 },
    { id: 6,  x: 58, y: 55, size: 2, duration: 5.3, delay: 0.8 },
    { id: 7,  x: 68, y: 80, size: 4, duration: 4.0, delay: 1.2 },
    { id: 8,  x: 78, y: 40, size: 3, duration: 6.5, delay: 0.6 },
    { id: 9,  x: 88, y: 65, size: 2, duration: 3.7, delay: 1.8 },
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