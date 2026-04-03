// Images temporaires pour le développement
// Remplace par tes vraies photos dans public/images/

export const PLACEHOLDER_HERO = 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80'
export const PLACEHOLDER_STORY = [
  'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
  'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80',
  'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=80',
]
export const PLACEHOLDER_GALLERY = Array.from({ length: 9 }, (_, i) =>
  `https://images.unsplash.com/photo-${[
    '1519741497674-611481863552',
    '1583875762487-5f8f7c718d14',
    '1511285560929-80b5dd3cd3f4',
    '1529634806980-85c3dd6d34ac',
    '1522673607200-164d1b6ce486',
    '1537633552985-df8429e8048b',
    '1523438885200-e635ba2c371e',
    '1491438590914-bc09fcaaf77a',
    '1465495976277-4387d4b0b4c6',
  ][i]}?w=800&q=75`
)