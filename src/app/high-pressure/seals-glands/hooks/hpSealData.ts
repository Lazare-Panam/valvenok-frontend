export interface HPSealDTO {
  id: string
  partNumber: string
  fittingType: string
  p1Size: string
  p1Thread: string
  pressureRating: string
  pressurePsi: number
  material: string
  imageUrl: string
  description: string
}

export interface HPSealFilters {
  fittingTypes: string[]
  pressureRatings: string[]
  p1Threads: string[]
  p1Sizes: string[]
}

export const EMPTY_SEAL_FILTERS: HPSealFilters = {
  fittingTypes: [],
  pressureRatings: [],
  p1Threads: [],
  p1Sizes: [],
}

export interface AvailableCountsSeal {
  fittingTypes: Record<string, number>
  pressureRatings: Record<string, number>
  p1Threads: Record<string, number>
  p1Sizes: Record<string, number>
}

export function applyFilters(
  data: HPSealDTO[],
  filters: HPSealFilters,
  exclude: keyof HPSealFilters | ''
): HPSealDTO[] {
  return data.filter(c => {
    if (exclude !== 'fittingTypes'    && filters.fittingTypes.length    && !filters.fittingTypes.includes(c.fittingType))      return false
    if (exclude !== 'pressureRatings' && filters.pressureRatings.length && !filters.pressureRatings.includes(c.pressureRating)) return false
    if (exclude !== 'p1Threads'       && filters.p1Threads.length       && !filters.p1Threads.includes(c.p1Thread))            return false
    if (exclude !== 'p1Sizes'         && filters.p1Sizes.length         && !filters.p1Sizes.includes(c.p1Size))                return false
    return true
  })
}

export function countBy<T>(items: T[], keyFn: (item: T) => string): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const k = keyFn(item)
    counts[k] = (counts[k] ?? 0) + 1
  }
  return counts
}

const IMG_AVG    = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-avg.png'
const IMG_GLAND  = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-glands.png'
const IMG_COLLAR = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-collar.png'

const make = (
  pn: string,
  fittingType: string,
  p1Size: string,
  p1Thread: string,
  pressureRating: string,
  pressurePsi: number,
  imageUrl: string,
): HPSealDTO => ({
  id: pn,
  partNumber: pn,
  fittingType,
  p1Size,
  p1Thread,
  pressureRating,
  pressurePsi,
  material: 'SS 316',
  imageUrl,
  description: `Panam ${fittingType} ${pn}, ${p1Size} ${p1Thread}, SS 316, ${pressureRating}.`,
})

export const HP_SEAL_DATA: HPSealDTO[] = [
  make('PAVG-4M-SS',  'Anti-Vibration Gland', '1/4"',  'Medium Pressure', '20,000 psi', 20000, IMG_AVG),
  make('PAVG-6M-SS',  'Anti-Vibration Gland', '3/8"',  'Medium Pressure', '20,000 psi', 20000, IMG_AVG),
  make('PAVG-9M-SS',  'Anti-Vibration Gland', '9/16"', 'Medium Pressure', '20,000 psi', 20000, IMG_AVG),
  make('PAVG-12M-SS', 'Anti-Vibration Gland', '3/4"',  'Medium Pressure', '20,000 psi', 20000, IMG_AVG),
  make('PAVG-16M-SS', 'Anti-Vibration Gland', '1"',    'Medium Pressure', '20,000 psi', 20000, IMG_AVG),
  make('PAVG-4H-SS',  'Anti-Vibration Gland', '1/4"',  'High Pressure',   '60,000 psi', 60000, IMG_AVG),
  make('PAVG-6H-SS',  'Anti-Vibration Gland', '3/8"',  'High Pressure',   '60,000 psi', 60000, IMG_AVG),
  make('PAVG-9H-SS',  'Anti-Vibration Gland', '9/16"', 'High Pressure',   '60,000 psi', 60000, IMG_AVG),
  make('PG-4M-SS',    'Gland', '1/4"',  'Medium Pressure', '20,000 psi', 20000, IMG_GLAND),
  make('PG-6M-SS',    'Gland', '3/8"',  'Medium Pressure', '20,000 psi', 20000, IMG_GLAND),
  make('PG-9M-SS',    'Gland', '9/16"', 'Medium Pressure', '20,000 psi', 20000, IMG_GLAND),
  make('PG-12M-SS',   'Gland', '3/4"',  'Medium Pressure', '20,000 psi', 20000, IMG_GLAND),
  make('PG-16M-SS',   'Gland', '1"',    'Medium Pressure', '20,000 psi', 20000, IMG_GLAND),
  make('PG-4H-SS',    'Gland', '1/4"',  'High Pressure',   '60,000 psi', 60000, IMG_GLAND),
  make('PG-6H-SS',    'Gland', '3/8"',  'High Pressure',   '60,000 psi', 60000, IMG_GLAND),
  make('PG-9H-SS',    'Gland', '9/16"', 'High Pressure',   '60,000 psi', 60000, IMG_GLAND),
  make('PCL-4M-SS',   'Collar', '1/4"',  'Medium Pressure', '20,000 psi', 20000, IMG_COLLAR),
  make('PCL-6M-SS',   'Collar', '3/8"',  'Medium Pressure', '20,000 psi', 20000, IMG_COLLAR),
  make('PCL-9M-SS',   'Collar', '9/16"', 'Medium Pressure', '20,000 psi', 20000, IMG_COLLAR),
  make('PCL-12M-SS',  'Collar', '3/4"',  'Medium Pressure', '20,000 psi', 20000, IMG_COLLAR),
  make('PCL-16M-SS',  'Collar', '1"',    'Medium Pressure', '20,000 psi', 20000, IMG_COLLAR),
  make('PCL-4H-SS',   'Collar', '1/4"',  'High Pressure',   '60,000 psi', 60000, IMG_COLLAR),
  make('PCL-6H-SS',   'Collar', '3/8"',  'High Pressure',   '60,000 psi', 60000, IMG_COLLAR),
  make('PCL-9H-SS',   'Collar', '9/16"', 'High Pressure',   '60,000 psi', 60000, IMG_COLLAR),
]

export const HP_SEAL_DESCRIPTION = {
  title: 'HP Seals & Glands',
  description:
    'Panam High Pressure Anti-Vibration Glands, Glands and Collars in SS 316. Medium Pressure at 20,000 psi and High Pressure at 60,000 psi. Sizes from 1/4" to 1".',
  specs: [
    'Anti-Vibration Gland · Gland · Collar',
    'SS 316',
    '20,000 & 60,000 psi',
    'Medium Pressure · High Pressure',
    '1/4" · 3/8" · 9/16" · 3/4" · 1"',
  ],
}