export interface HPEndFittingDTO {
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

export interface HPEndFittingFilters {
  fittingTypes: string[]
  pressureRatings: string[]
  p1Threads: string[]
  p1Sizes: string[]
}

export const EMPTY_END_FITTING_FILTERS: HPEndFittingFilters = {
  fittingTypes: [],
  pressureRatings: [],
  p1Threads: [],
  p1Sizes: [],
}

export interface AvailableCountsEndFitting {
  fittingTypes: Record<string, number>
  pressureRatings: Record<string, number>
  p1Threads: Record<string, number>
  p1Sizes: Record<string, number>
}

export function applyFilters(
  data: HPEndFittingDTO[],
  filters: HPEndFittingFilters,
  exclude: keyof HPEndFittingFilters | ''
): HPEndFittingDTO[] {
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

const IMG_CAP  = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-cap.png'
const IMG_PLUG = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-plug.png'

const make = (
  pn: string,
  fittingType: string,
  p1Size: string,
  p1Thread: string,
  pressureRating: string,
  pressurePsi: number,
  imageUrl: string,
): HPEndFittingDTO => ({
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

export const HP_END_FITTING_DATA: HPEndFittingDTO[] = [
  make('PTC-4MF-SS',  'Cap', '1/4"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_CAP),
  make('PTC-6MF-SS',  'Cap', '3/8"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_CAP),
  make('PTC-9MF-SS',  'Cap', '9/16"', 'Medium Pressure Female', '20,000 psi', 20000, IMG_CAP),
  make('PTC-12MF-SS', 'Cap', '3/4"',  'Medium Pressure Female', '20,000 psi', 20000, IMG_CAP),
  make('PTC-16MF-SS', 'Cap', '1"',    'Medium Pressure Female', '20,000 psi', 20000, IMG_CAP),
  make('PTC-4HF-SS',  'Cap', '1/4"',  'High Pressure Female', '60,000 psi', 60000, IMG_CAP),
  make('PTC-6HF-SS',  'Cap', '3/8"',  'High Pressure Female', '60,000 psi', 60000, IMG_CAP),
  make('PTC-9HF-SS',  'Cap', '9/16"', 'High Pressure Female', '60,000 psi', 60000, IMG_CAP),
  make('PTP-4M-SS',   'Plug', '1/4"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_PLUG),
  make('PTP-6M-SS',   'Plug', '3/8"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_PLUG),
  make('PTP-9M-SS',   'Plug', '9/16"', 'Medium Pressure Male', '20,000 psi', 20000, IMG_PLUG),
  make('PTP-12M-SS',  'Plug', '3/4"',  'Medium Pressure Male', '20,000 psi', 20000, IMG_PLUG),
  make('PTP-16M-SS',  'Plug', '1"',    'Medium Pressure Male', '20,000 psi', 20000, IMG_PLUG),
  make('PTP-4H-SS',   'Plug', '1/4"',  'High Pressure Male', '60,000 psi', 60000, IMG_PLUG),
  make('PTP-6H-SS',   'Plug', '3/8"',  'High Pressure Male', '60,000 psi', 60000, IMG_PLUG),
  make('PTP-9H-SS',   'Plug', '9/16"', 'High Pressure Male', '60,000 psi', 60000, IMG_PLUG),
]

export const HP_END_FITTING_DESCRIPTION = {
  title: 'HP Caps & Plugs',
  description:
    'Panam High Pressure Caps and Plugs in SS 316. Caps in Medium Pressure Female at 20,000 psi and High Pressure Female at 60,000 psi. Plugs in Medium Pressure Male at 20,000 psi and High Pressure Male at 60,000 psi.',
  specs: [
    'Cap · Plug',
    'SS 316',
    '20,000 & 60,000 psi',
    'Medium Pressure · High Pressure',
    '1/4" · 3/8" · 9/16" · 3/4" · 1"',
  ],
}