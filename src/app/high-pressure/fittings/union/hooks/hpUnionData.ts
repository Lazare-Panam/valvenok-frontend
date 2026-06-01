export interface HPUnionDTO {
  id: string
  partNumber: string
  fittingType: string
  p1Size: string
  p1Thread: string
  p2Size: string
  p2Thread: string
  pressureRating: string
  pressurePsi: number
  material: string
  imageUrl: string
  description: string
}

export interface HPUnionFilters {
  fittingTypes: string[]
  pressureRatings: string[]
  p1Threads: string[]
  p1Sizes: string[]
  p2Threads: string[]
  p2Sizes: string[]
}

export const EMPTY_UNION_FILTERS: HPUnionFilters = {
  fittingTypes: [],
  pressureRatings: [],
  p1Threads: [],
  p1Sizes: [],
  p2Threads: [],
  p2Sizes: [],
}

export interface AvailableCountsUnion {
  fittingTypes: Record<string, number>
  pressureRatings: Record<string, number>
  p1Threads: Record<string, number>
  p1Sizes: Record<string, number>
  p2Threads: Record<string, number>
  p2Sizes: Record<string, number>
}

export function applyFilters(
  data: HPUnionDTO[],
  filters: HPUnionFilters,
  exclude: keyof HPUnionFilters | ''
): HPUnionDTO[] {
  return data.filter(c => {
    if (exclude !== 'fittingTypes'    && filters.fittingTypes.length    && !filters.fittingTypes.includes(c.fittingType))      return false
    if (exclude !== 'pressureRatings' && filters.pressureRatings.length && !filters.pressureRatings.includes(c.pressureRating)) return false
    if (exclude !== 'p1Threads'       && filters.p1Threads.length       && !filters.p1Threads.includes(c.p1Thread))            return false
    if (exclude !== 'p1Sizes'         && filters.p1Sizes.length         && !filters.p1Sizes.includes(c.p1Size))                return false
    if (exclude !== 'p2Threads'       && filters.p2Threads.length       && !filters.p2Threads.includes(c.p2Thread))            return false
    if (exclude !== 'p2Sizes'         && filters.p2Sizes.length         && !filters.p2Sizes.includes(c.p2Size))                return false
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

const IMG_UNION    = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-union.png'
const IMG_REDUCING = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-reducing-union.png'
const IMG_BULKHEAD = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-bulkhead-union.jpg'

const make = (
  pn: string,
  fittingType: string,
  p1Size: string,
  p1Thread: string,
  p2Size: string,
  p2Thread: string,
  pressureRating: string,
  pressurePsi: number,
  imageUrl: string,
): HPUnionDTO => ({
  id: pn,
  partNumber: pn,
  fittingType,
  p1Size,
  p1Thread,
  p2Size,
  p2Thread,
  pressureRating,
  pressurePsi,
  material: 'SS 316',
  imageUrl,
  description: `Panam ${fittingType} ${pn}, P1: ${p1Size} ${p1Thread}, P2: ${p2Size} ${p2Thread}, SS 316, ${pressureRating}.`,
})

export const HP_UNION_DATA: HPUnionDTO[] = [
  make('PU-4MF-SS',  'Union', '1/4"',  'Medium Pressure Female', '1/4"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_UNION),
  make('PU-6MF-SS',  'Union', '3/8"',  'Medium Pressure Female', '3/8"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_UNION),
  make('PU-9MF-SS',  'Union', '9/16"', 'Medium Pressure Female', '9/16"', 'Medium Pressure Female', '20,000 psi', 20000, IMG_UNION),
  make('PU-12MF-SS', 'Union', '3/4"',  'Medium Pressure Female', '3/4"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_UNION),
  make('PU-16MF-SS', 'Union', '1"',    'Medium Pressure Female', '1"',    'Medium Pressure Female', '20,000 psi', 20000, IMG_UNION),
  make('PU-4HF-SS',  'Union', '1/4"',  'High Pressure Female', '1/4"',  'High Pressure Female', '60,000 psi', 60000, IMG_UNION),
  make('PU-6HF-SS',  'Union', '3/8"',  'High Pressure Female', '3/8"',  'High Pressure Female', '60,000 psi', 60000, IMG_UNION),
  make('PU-9HF-SS',  'Union', '9/16"', 'High Pressure Female', '9/16"', 'High Pressure Female', '60,000 psi', 60000, IMG_UNION),
  make('PRU-6MF-4MF-SS',   'Reducing Union', '3/8"',  'Medium Pressure Female', '1/4"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_REDUCING),
  make('PRU-9MF-4MF-SS',   'Reducing Union', '9/16"', 'Medium Pressure Female', '1/4"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_REDUCING),
  make('PRU-9MF-6MF-SS',   'Reducing Union', '9/16"', 'Medium Pressure Female', '3/8"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_REDUCING),
  make('PRU-12MF-4MF-SS',  'Reducing Union', '3/4"',  'Medium Pressure Female', '1/4"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_REDUCING),
  make('PRU-12MF-6MF-SS',  'Reducing Union', '3/4"',  'Medium Pressure Female', '3/8"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_REDUCING),
  make('PRU-12MF-9MF-SS',  'Reducing Union', '3/4"',  'Medium Pressure Female', '9/16"', 'Medium Pressure Female', '20,000 psi', 20000, IMG_REDUCING),
  make('PRU-16MF-4MF-SS',  'Reducing Union', '1"',    'Medium Pressure Female', '1/4"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_REDUCING),
  make('PRU-16MF-6MF-SS',  'Reducing Union', '1"',    'Medium Pressure Female', '3/8"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_REDUCING),
  make('PRU-16MF-9MF-SS',  'Reducing Union', '1"',    'Medium Pressure Female', '9/16"', 'Medium Pressure Female', '20,000 psi', 20000, IMG_REDUCING),
  make('PRU-16MF-12MF-SS', 'Reducing Union', '1"',    'Medium Pressure Female', '3/4"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_REDUCING),
  make('PRU-6HF-4HF-SS',  'Reducing Union', '3/8"',  'High Pressure Female', '1/4"',  'High Pressure Female', '60,000 psi', 60000, IMG_REDUCING),
  make('PRU-9HF-4HF-SS',  'Reducing Union', '9/16"', 'High Pressure Female', '1/4"',  'High Pressure Female', '60,000 psi', 60000, IMG_REDUCING),
  make('PRU-9HF-6HF-SS',  'Reducing Union', '9/16"', 'High Pressure Female', '3/8"',  'High Pressure Female', '60,000 psi', 60000, IMG_REDUCING),
  make('PBU-4MF-SS',  'Bulkhead Union', '1/4"',  'Medium Pressure Female', '1/4"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_BULKHEAD),
  make('PBU-6MF-SS',  'Bulkhead Union', '3/8"',  'Medium Pressure Female', '3/8"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_BULKHEAD),
  make('PBU-9MF-SS',  'Bulkhead Union', '9/16"', 'Medium Pressure Female', '9/16"', 'Medium Pressure Female', '20,000 psi', 20000, IMG_BULKHEAD),
  make('PBU-12MF-SS', 'Bulkhead Union', '3/4"',  'Medium Pressure Female', '3/4"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_BULKHEAD),
  make('PBU-16MF-SS', 'Bulkhead Union', '1"',    'Medium Pressure Female', '1"',    'Medium Pressure Female', '20,000 psi', 20000, IMG_BULKHEAD),
  make('PBU-4HF-SS',  'Bulkhead Union', '1/4"',  'High Pressure Female', '1/4"',  'High Pressure Female', '60,000 psi', 60000, IMG_BULKHEAD),
  make('PBU-6HF-SS',  'Bulkhead Union', '3/8"',  'High Pressure Female', '3/8"',  'High Pressure Female', '60,000 psi', 60000, IMG_BULKHEAD),
  make('PBU-9HF-SS',  'Bulkhead Union', '9/16"', 'High Pressure Female', '9/16"', 'High Pressure Female', '60,000 psi', 60000, IMG_BULKHEAD),
]

export const HP_UNION_DESCRIPTION = {
  title: 'HP Unions',
  description:
    'Panam High Pressure Unions, Reducing Unions and Bulkhead Unions in SS 316. Medium Pressure Female at 20,000 psi and High Pressure Female at 60,000 psi. Sizes from 1/4" to 1".',
  specs: [
    'Union · Reducing Union · Bulkhead Union',
    'SS 316',
    '20,000 & 60,000 psi',
    'Medium Pressure Female · High Pressure Female',
    '1/4" · 3/8" · 9/16" · 3/4" · 1"',
  ],
}