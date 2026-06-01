export interface HPJunctionDTO {
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

export interface HPJunctionFilters {
  fittingTypes: string[]
  pressureRatings: string[]
  p1Threads: string[]
  p1Sizes: string[]
  p2Threads: string[]
  p2Sizes: string[]
}

export const EMPTY_JUNCTION_FILTERS: HPJunctionFilters = {
  fittingTypes: [],
  pressureRatings: [],
  p1Threads: [],
  p1Sizes: [],
  p2Threads: [],
  p2Sizes: [],
}

export interface AvailableCountsJunction {
  fittingTypes: Record<string, number>
  pressureRatings: Record<string, number>
  p1Threads: Record<string, number>
  p1Sizes: Record<string, number>
  p2Threads: Record<string, number>
  p2Sizes: Record<string, number>
}

export function applyFilters(
  data: HPJunctionDTO[],
  filters: HPJunctionFilters,
  exclude: keyof HPJunctionFilters | ''
): HPJunctionDTO[] {
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

const IMG_ELBOW = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-elbow.png'
const IMG_TEE   = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-tees.jpg'
const IMG_CROSS = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-cross.jpg'
const IMG_HN    = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-hn.png'

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
): HPJunctionDTO => ({
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

export const HP_JUNCTION_DATA: HPJunctionDTO[] = [
  make('PUE-4MF-SS',  'Elbow', '1/4"',  'Medium Pressure Female', '1/4"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_ELBOW),
  make('PUE-6MF-SS',  'Elbow', '3/8"',  'Medium Pressure Female', '3/8"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_ELBOW),
  make('PUE-9MF-SS',  'Elbow', '9/16"', 'Medium Pressure Female', '9/16"', 'Medium Pressure Female', '20,000 psi', 20000, IMG_ELBOW),
  make('PUE-12MF-SS', 'Elbow', '3/4"',  'Medium Pressure Female', '3/4"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_ELBOW),
  make('PUE-16MF-SS', 'Elbow', '1"',    'Medium Pressure Female', '1"',    'Medium Pressure Female', '20,000 psi', 20000, IMG_ELBOW),
  make('PUE-4HF-SS',  'Elbow', '1/4"',  'High Pressure Female', '1/4"',  'High Pressure Female', '60,000 psi', 60000, IMG_ELBOW),
  make('PUE-6HF-SS',  'Elbow', '3/8"',  'High Pressure Female', '3/8"',  'High Pressure Female', '60,000 psi', 60000, IMG_ELBOW),
  make('PUE-9HF-SS',  'Elbow', '9/16"', 'High Pressure Female', '9/16"', 'High Pressure Female', '60,000 psi', 60000, IMG_ELBOW),
  make('PUT-4MF-SS',  'Tee', '1/4"',  'Medium Pressure Female', '1/4"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_TEE),
  make('PUT-6MF-SS',  'Tee', '3/8"',  'Medium Pressure Female', '3/8"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_TEE),
  make('PUT-9MF-SS',  'Tee', '9/16"', 'Medium Pressure Female', '9/16"', 'Medium Pressure Female', '20,000 psi', 20000, IMG_TEE),
  make('PUT-12MF-SS', 'Tee', '3/4"',  'Medium Pressure Female', '3/4"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_TEE),
  make('PUT-16MF-SS', 'Tee', '1"',    'Medium Pressure Female', '1"',    'Medium Pressure Female', '20,000 psi', 20000, IMG_TEE),
  make('PUT-4HF-SS',  'Tee', '1/4"',  'High Pressure Female', '1/4"',  'High Pressure Female', '60,000 psi', 60000, IMG_TEE),
  make('PUT-6HF-SS',  'Tee', '3/8"',  'High Pressure Female', '3/8"',  'High Pressure Female', '60,000 psi', 60000, IMG_TEE),
  make('PUT-9HF-SS',  'Tee', '9/16"', 'High Pressure Female', '9/16"', 'High Pressure Female', '60,000 psi', 60000, IMG_TEE),
  make('PUC-4MF-SS',  'Cross', '1/4"',  'Medium Pressure Female', '1/4"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_CROSS),
  make('PUC-6MF-SS',  'Cross', '3/8"',  'Medium Pressure Female', '3/8"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_CROSS),
  make('PUC-9MF-SS',  'Cross', '9/16"', 'Medium Pressure Female', '9/16"', 'Medium Pressure Female', '20,000 psi', 20000, IMG_CROSS),
  make('PUC-12MF-SS', 'Cross', '3/4"',  'Medium Pressure Female', '3/4"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_CROSS),
  make('PUC-16MF-SS', 'Cross', '1"',    'Medium Pressure Female', '1"',    'Medium Pressure Female', '20,000 psi', 20000, IMG_CROSS),
  make('PUC-4HF-SS',  'Cross', '1/4"',  'High Pressure Female', '1/4"',  'High Pressure Female', '60,000 psi', 60000, IMG_CROSS),
  make('PUC-6HF-SS',  'Cross', '3/8"',  'High Pressure Female', '3/8"',  'High Pressure Female', '60,000 psi', 60000, IMG_CROSS),
  make('PUC-9HF-SS',  'Cross', '9/16"', 'High Pressure Female', '9/16"', 'High Pressure Female', '60,000 psi', 60000, IMG_CROSS),
  make('PHN-4MM-SS',        'Hex Nipple', '1/4"',  'Medium Pressure Male', '1/4"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-6MM-4MM-SS',    'Hex Nipple', '3/8"',  'Medium Pressure Male', '1/4"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-6MM-SS',        'Hex Nipple', '3/8"',  'Medium Pressure Male', '3/8"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-9MM-4MM-SS',    'Hex Nipple', '9/16"', 'Medium Pressure Male', '1/4"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-9MM-6MM-SS',    'Hex Nipple', '9/16"', 'Medium Pressure Male', '3/8"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-9MM-SS',        'Hex Nipple', '9/16"', 'Medium Pressure Male', '9/16"', 'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-12MM-4MM-SS',   'Hex Nipple', '3/4"',  'Medium Pressure Male', '1/4"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-12MM-6MM-SS',   'Hex Nipple', '3/4"',  'Medium Pressure Male', '3/8"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-12MM-SS',       'Hex Nipple', '3/4"',  'Medium Pressure Male', '3/4"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-16MM-4MM-SS',   'Hex Nipple', '1"',    'Medium Pressure Male', '1/4"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-16MM-6MM-SS',   'Hex Nipple', '1"',    'Medium Pressure Male', '3/8"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-16MM-9MM-SS',   'Hex Nipple', '1"',    'Medium Pressure Male', '9/16"', 'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-16MM-12MM-SS',  'Hex Nipple', '1"',    'Medium Pressure Male', '3/4"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-16MM-SS',       'Hex Nipple', '1"',    'Medium Pressure Male', '1"',    'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-4HM-SS',        'Hex Nipple', '1/4"',  'High Pressure Male', '1/4"',  'High Pressure Male', '60,000 psi', 60000, IMG_HN),
  make('PHN-6HM-4HM-SS',    'Hex Nipple', '3/8"',  'High Pressure Male', '1/4"',  'High Pressure Male', '60,000 psi', 60000, IMG_HN),
  make('PHN-6HM-SS',        'Hex Nipple', '3/8"',  'High Pressure Male', '3/8"',  'High Pressure Male', '60,000 psi', 60000, IMG_HN),
  make('PHN-9HM-4HM-SS',    'Hex Nipple', '9/16"', 'High Pressure Male', '1/4"',  'High Pressure Male', '60,000 psi', 60000, IMG_HN),
  make('PHN-9HM-6HM-SS',    'Hex Nipple', '9/16"', 'High Pressure Male', '3/8"',  'High Pressure Male', '60,000 psi', 60000, IMG_HN),
  make('PHN-9HM-SS',        'Hex Nipple', '9/16"', 'High Pressure Male', '9/16"', 'High Pressure Male', '60,000 psi', 60000, IMG_HN),
  make('PHN-4MM-2N-SS',  'Hex Nipple', '1/4"',  'Medium Pressure Male', '1/8"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-4MM-4N-SS',  'Hex Nipple', '1/4"',  'Medium Pressure Male', '1/4"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-4MM-6N-SS',  'Hex Nipple', '1/4"',  'Medium Pressure Male', '3/8"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-4MM-8N-SS',  'Hex Nipple', '1/4"',  'Medium Pressure Male', '1/2"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-4MM-12N-SS', 'Hex Nipple', '1/4"',  'Medium Pressure Male', '3/4"',  'NPT Male', '10,000 psi', 10000, IMG_HN),
  make('PHN-4MM-16N-SS', 'Hex Nipple', '1/4"',  'Medium Pressure Male', '1"',    'NPT Male', '10,000 psi', 10000, IMG_HN),
  make('PHN-6MM-2N-SS',  'Hex Nipple', '3/8"',  'Medium Pressure Male', '1/8"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-6MM-4N-SS',  'Hex Nipple', '3/8"',  'Medium Pressure Male', '1/4"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-6MM-6N-SS',  'Hex Nipple', '3/8"',  'Medium Pressure Male', '3/8"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-6MM-8N-SS',  'Hex Nipple', '3/8"',  'Medium Pressure Male', '1/2"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-6MM-12N-SS', 'Hex Nipple', '3/8"',  'Medium Pressure Male', '3/4"',  'NPT Male', '10,000 psi', 10000, IMG_HN),
  make('PHN-6MM-16N-SS', 'Hex Nipple', '3/8"',  'Medium Pressure Male', '1"',    'NPT Male', '10,000 psi', 10000, IMG_HN),
  make('PHN-9MM-2N-SS',  'Hex Nipple', '9/16"', 'Medium Pressure Male', '1/8"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-9MM-4N-SS',  'Hex Nipple', '9/16"', 'Medium Pressure Male', '1/4"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-9MM-6N-SS',  'Hex Nipple', '9/16"', 'Medium Pressure Male', '3/8"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-9MM-8N-SS',  'Hex Nipple', '9/16"', 'Medium Pressure Male', '1/2"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-9MM-12N-SS', 'Hex Nipple', '9/16"', 'Medium Pressure Male', '3/4"',  'NPT Male', '10,000 psi', 10000, IMG_HN),
  make('PHN-9MM-16N-SS', 'Hex Nipple', '9/16"', 'Medium Pressure Male', '1"',    'NPT Male', '10,000 psi', 10000, IMG_HN),
  make('PHN-12MM-2N-SS', 'Hex Nipple', '3/4"',  'Medium Pressure Male', '1/8"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-12MM-4N-SS', 'Hex Nipple', '3/4"',  'Medium Pressure Male', '1/4"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-12MM-6N-SS', 'Hex Nipple', '3/4"',  'Medium Pressure Male', '3/8"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-12MM-8N-SS', 'Hex Nipple', '3/4"',  'Medium Pressure Male', '1/2"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-12MM-12N-SS','Hex Nipple', '3/4"',  'Medium Pressure Male', '3/4"',  'NPT Male', '10,000 psi', 10000, IMG_HN),
  make('PHN-12MM-16N-SS','Hex Nipple', '3/4"',  'Medium Pressure Male', '1"',    'NPT Male', '10,000 psi', 10000, IMG_HN),
  make('PHN-16MM-2N-SS', 'Hex Nipple', '1"',    'Medium Pressure Male', '1/8"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-16MM-4N-SS', 'Hex Nipple', '1"',    'Medium Pressure Male', '1/4"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-16MM-6N-SS', 'Hex Nipple', '1"',    'Medium Pressure Male', '3/8"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-16MM-8N-SS', 'Hex Nipple', '1"',    'Medium Pressure Male', '1/2"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-16MM-12N-SS','Hex Nipple', '1"',    'Medium Pressure Male', '3/4"',  'NPT Male', '10,000 psi', 10000, IMG_HN),
  make('PHN-16MM-16N-SS','Hex Nipple', '1"',    'Medium Pressure Male', '1"',    'NPT Male', '10,000 psi', 10000, IMG_HN),
  make('PHN-4HM-2N-SS',  'Hex Nipple', '1/4"',  'High Pressure Male', '1/8"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-4HM-4N-SS',  'Hex Nipple', '1/4"',  'High Pressure Male', '1/4"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-4HM-6N-SS',  'Hex Nipple', '1/4"',  'High Pressure Male', '3/8"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-4HM-8N-SS',  'Hex Nipple', '1/4"',  'High Pressure Male', '1/2"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-4HM-12N-SS', 'Hex Nipple', '1/4"',  'High Pressure Male', '3/4"',  'NPT Male', '10,000 psi', 10000, IMG_HN),
  make('PHN-4HM-16N-SS', 'Hex Nipple', '1/4"',  'High Pressure Male', '1"',    'NPT Male', '10,000 psi', 10000, IMG_HN),
  make('PHN-6HM-2N-SS',  'Hex Nipple', '3/8"',  'High Pressure Male', '1/8"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-6HM-4N-SS',  'Hex Nipple', '3/8"',  'High Pressure Male', '1/4"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-6HM-6N-SS',  'Hex Nipple', '3/8"',  'High Pressure Male', '3/8"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-6HM-8N-SS',  'Hex Nipple', '3/8"',  'High Pressure Male', '1/2"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-6HM-12N-SS', 'Hex Nipple', '3/8"',  'High Pressure Male', '3/4"',  'NPT Male', '10,000 psi', 10000, IMG_HN),
  make('PHN-6HM-16N-SS', 'Hex Nipple', '3/8"',  'High Pressure Male', '1"',    'NPT Male', '10,000 psi', 10000, IMG_HN),
  make('PHN-9HM-2N-SS',  'Hex Nipple', '9/16"', 'High Pressure Male', '1/8"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-9HM-4N-SS',  'Hex Nipple', '9/16"', 'High Pressure Male', '1/4"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-9HM-6N-SS',  'Hex Nipple', '9/16"', 'High Pressure Male', '3/8"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-9HM-8N-SS',  'Hex Nipple', '9/16"', 'High Pressure Male', '1/2"',  'NPT Male', '15,000 psi', 15000, IMG_HN),
  make('PHN-9HM-12N-SS', 'Hex Nipple', '9/16"', 'High Pressure Male', '3/4"',  'NPT Male', '10,000 psi', 10000, IMG_HN),
  make('PHN-9HM-16N-SS', 'Hex Nipple', '9/16"', 'High Pressure Male', '1"',    'NPT Male', '10,000 psi', 10000, IMG_HN),
  make('PHN-4HM-4MM-SS',  'Hex Nipple', '1/4"',  'High Pressure Male', '1/4"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-4HM-6MM-SS',  'Hex Nipple', '1/4"',  'High Pressure Male', '3/8"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-4HM-9MM-SS',  'Hex Nipple', '1/4"',  'High Pressure Male', '9/16"', 'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-4HM-12MM-SS', 'Hex Nipple', '1/4"',  'High Pressure Male', '3/4"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-4HM-16MM-SS', 'Hex Nipple', '1/4"',  'High Pressure Male', '1"',    'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-6HM-4MM-SS',  'Hex Nipple', '3/8"',  'High Pressure Male', '1/4"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-6HM-6MM-SS',  'Hex Nipple', '3/8"',  'High Pressure Male', '3/8"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-6HM-9MM-SS',  'Hex Nipple', '3/8"',  'High Pressure Male', '9/16"', 'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-6HM-12MM-SS', 'Hex Nipple', '3/8"',  'High Pressure Male', '3/4"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-6HM-16MM-SS', 'Hex Nipple', '3/8"',  'High Pressure Male', '1"',    'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-9HM-4MM-SS',  'Hex Nipple', '9/16"', 'High Pressure Male', '1/4"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-9HM-6MM-SS',  'Hex Nipple', '9/16"', 'High Pressure Male', '3/8"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-9HM-9MM-SS',  'Hex Nipple', '9/16"', 'High Pressure Male', '9/16"', 'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-9HM-12MM-SS', 'Hex Nipple', '9/16"', 'High Pressure Male', '3/4"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
  make('PHN-9HM-16MM-SS', 'Hex Nipple', '9/16"', 'High Pressure Male', '1"',    'Medium Pressure Male', '20,000 psi', 20000, IMG_HN),
]

export const HP_JUNCTION_DESCRIPTION = {
  title: 'HP Elbows, Tees, Crosses & Hex Nipples',
  description:
    'Panam High Pressure Elbows, Tees, Crosses and Hex Nipples in SS 316. Medium Pressure Female at 20,000 psi and High Pressure Female at 60,000 psi for Elbows, Tees and Crosses. Hex Nipples in Medium and High Pressure Male combinations from 10,000 to 60,000 psi.',
  specs: [
    'Elbow · Tee · Cross · Hex Nipple',
    'SS 316',
    '10,000 – 60,000 psi',
    'Medium Pressure · High Pressure',
    '1/4" · 3/8" · 9/16" · 3/4" · 1"',
  ],
}