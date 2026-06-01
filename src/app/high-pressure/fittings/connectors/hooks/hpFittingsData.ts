export interface HPFittingDTO {
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

export interface HPFittingFilters {
  fittingTypes: string[]
  p1Threads: string[]
  p1Sizes: string[]
  p2Threads: string[]
  p2Sizes: string[]
  pressureRatings: string[]
}

export const EMPTY_FITTING_FILTERS: HPFittingFilters = {
  fittingTypes: [],
  p1Threads: [],
  p1Sizes: [],
  p2Threads: [],
  p2Sizes: [],
  pressureRatings: [],
}

export interface AvailableCountsFitting {
  fittingTypes: Record<string, number>
  p1Threads: Record<string, number>
  p1Sizes: Record<string, number>
  p2Threads: Record<string, number>
  p2Sizes: Record<string, number>
  pressureRatings: Record<string, number>
}

export function applyFilters(
  data: HPFittingDTO[],
  filters: HPFittingFilters,
  exclude: keyof HPFittingFilters | ''
): HPFittingDTO[] {
  return data.filter(c => {
    if (exclude !== 'fittingTypes'    && filters.fittingTypes.length    && !filters.fittingTypes.includes(c.fittingType))      return false
    if (exclude !== 'p1Threads'       && filters.p1Threads.length       && !filters.p1Threads.includes(c.p1Thread))            return false
    if (exclude !== 'p1Sizes'         && filters.p1Sizes.length         && !filters.p1Sizes.includes(c.p1Size))                return false
    if (exclude !== 'p2Threads'       && filters.p2Threads.length       && !filters.p2Threads.includes(c.p2Thread))            return false
    if (exclude !== 'p2Sizes'         && filters.p2Sizes.length         && !filters.p2Sizes.includes(c.p2Size))                return false
    if (exclude !== 'pressureRatings' && filters.pressureRatings.length && !filters.pressureRatings.includes(c.pressureRating)) return false
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

const IMG_MC = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/PMC-4MF-4N-SS.jpg'
const IMG_FC = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/Female-Connector.png'
const IMG_HF = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/PMC-08-4MM-SS.jpg'

const THREAD_LABEL: Record<string, string> = {
  'MF': 'MP Cone Female',
  'HF': 'HP Cone Female',
  'MM': 'MP Cone Male',
  'HM': 'HP Cone Male',
  'N':  'NPT',
}

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
): HPFittingDTO => ({
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
  description: `Panam ${fittingType} ${pn}, P1: ${p1Size} ${THREAD_LABEL[p1Thread] ?? p1Thread}, P2: ${p2Size} ${THREAD_LABEL[p2Thread] ?? p2Thread}, SS 316, ${pressureRating}.`,
})

export const HP_FITTING_DATA: HPFittingDTO[] = [
  make('PMC-4MF-2N-SS',   'Male Connector', '1/4"',  'MF', '1/8"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-4MF-4N-SS',   'Male Connector', '1/4"',  'MF', '1/4"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-4MF-6N-SS',   'Male Connector', '1/4"',  'MF', '3/8"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-4MF-8N-SS',   'Male Connector', '1/4"',  'MF', '1/2"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-4MF-8N-SS',   'Male Connector', '1/4"',  'MF', '3/4"',  'N', '10,000 psi', 10000, IMG_MC),
  make('PMC-6MF-2N-SS',   'Male Connector', '3/8"',  'MF', '1/8"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-6MF-4N-SS',   'Male Connector', '3/8"',  'MF', '1/4"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-6MF-6N-SS',   'Male Connector', '3/8"',  'MF', '3/8"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-6MF-8N-SS',   'Male Connector', '3/8"',  'MF', '1/2"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-6MF-12N-SS',  'Male Connector', '3/8"',  'MF', '3/4"',  'N', '10,000 psi', 10000, IMG_MC),
  make('PMC-6MF-16N-SS',  'Male Connector', '3/8"',  'MF', '1"',    'N', '10,000 psi', 10000, IMG_MC),
  make('PMC-9MF-2N-SS',   'Male Connector', '9/16"', 'MF', '1/8"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-9MF-4N-SS',   'Male Connector', '9/16"', 'MF', '1/4"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-9MF-6N-SS',   'Male Connector', '9/16"', 'MF', '3/8"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-9MF-8N-SS',   'Male Connector', '9/16"', 'MF', '1/2"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-9MF-12N-SS',  'Male Connector', '9/16"', 'MF', '3/4"',  'N', '10,000 psi', 10000, IMG_MC),
  make('PMC-9MF-16N-SS',  'Male Connector', '9/16"', 'MF', '1"',    'N', '10,000 psi', 10000, IMG_MC),
  make('PMC-12MF-4N-SS',  'Male Connector', '3/4"',  'MF', '1/4"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-12MF-6N-SS',  'Male Connector', '3/4"',  'MF', '3/8"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-12MF-8N-SS',  'Male Connector', '3/4"',  'MF', '1/2"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-12MF-12N-SS', 'Male Connector', '3/4"',  'MF', '3/4"',  'N', '10,000 psi', 10000, IMG_MC),
  make('PMC-12MF-16N-SS', 'Male Connector', '3/4"',  'MF', '1"',    'N', '10,000 psi', 10000, IMG_MC),
  make('PMC-16MF-4N-SS',  'Male Connector', '1"',    'MF', '1/4"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-16MF-6N-SS',  'Male Connector', '1"',    'MF', '3/8"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-16MF-8N-SS',  'Male Connector', '1"',    'MF', '1/2"',  'N', '15,000 psi', 15000, IMG_MC),
  make('PMC-16MF-12N-SS', 'Male Connector', '1"',    'MF', '3/4"',  'N', '10,000 psi', 10000, IMG_MC),
  make('PMC-16MF-16N-SS', 'Male Connector', '1"',    'MF', '1"',    'N', '10,000 psi', 10000, IMG_MC),
  make('PMC-4HF-2N-SS',   'Male Connector', '1/4"',  'HF', '1/8"',  'N', '15,000 psi', 15000, IMG_HF),
  make('PMC-4HF-4N-SS',   'Male Connector', '1/4"',  'HF', '1/4"',  'N', '15,000 psi', 15000, IMG_HF),
  make('PMC-4HF-6N-SS',   'Male Connector', '1/4"',  'HF', '3/8"',  'N', '15,000 psi', 15000, IMG_HF),
  make('PMC-4HF-8N-SS',   'Male Connector', '1/4"',  'HF', '1/2"',  'N', '15,000 psi', 15000, IMG_HF),
  make('PMC-4HF-12N-SS',  'Male Connector', '1/4"',  'HF', '3/4"',  'N', '10,000 psi', 10000, IMG_HF),
  make('PMC-6HF-2N-SS',   'Male Connector', '3/8"',  'HF', '1/8"',  'N', '15,000 psi', 15000, IMG_HF),
  make('PMC-6HF-4N-SS',   'Male Connector', '3/8"',  'HF', '1/4"',  'N', '15,000 psi', 15000, IMG_HF),
  make('PMC-6HF-6N-SS',   'Male Connector', '3/8"',  'HF', '3/8"',  'N', '15,000 psi', 15000, IMG_HF),
  make('PMC-6HF-8N-SS',   'Male Connector', '3/8"',  'HF', '1/2"',  'N', '15,000 psi', 15000, IMG_HF),
  make('PMC-6HF-12N-SS',  'Male Connector', '3/8"',  'HF', '3/4"',  'N', '10,000 psi', 10000, IMG_HF),
  make('PMC-6HF-16N-SS',  'Male Connector', '3/8"',  'HF', '1"',    'N', '10,000 psi', 10000, IMG_HF),
  make('PMC-9HF-2N-SS',   'Male Connector', '9/16"', 'HF', '1/8"',  'N', '15,000 psi', 15000, IMG_HF),
  make('PMC-9HF-4N-SS',   'Male Connector', '9/16"', 'HF', '1/4"',  'N', '15,000 psi', 15000, IMG_HF),
  make('PMC-9HF-6N-SS',   'Male Connector', '9/16"', 'HF', '3/8"',  'N', '15,000 psi', 15000, IMG_HF),
  make('PMC-9HF-8N-SS',   'Male Connector', '9/16"', 'HF', '1/2"',  'N', '15,000 psi', 15000, IMG_HF),
  make('PMC-9HF-12N-SS',  'Male Connector', '9/16"', 'HF', '3/4"',  'N', '10,000 psi', 10000, IMG_HF),
  make('PMC-9HF-16N-SS',  'Male Connector', '9/16"', 'HF', '1"',    'N', '10,000 psi', 10000, IMG_HF),
  make('PMC-4MF-4MM-SS',  'Male Connector', '1/4"',  'MF', '1/4"',  'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-4MF-6MM-SS',  'Male Connector', '1/4"',  'MF', '3/8"',  'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-4MF-9MM-SS',  'Male Connector', '1/4"',  'MF', '9/16"', 'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-4MF-12MM-SS', 'Male Connector', '1/4"',  'MF', '3/4"',  'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-4MF-16MM-SS', 'Male Connector', '1/4"',  'MF', '1"',    'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-6MF-4MM-SS',  'Male Connector', '3/8"',  'MF', '1/4"',  'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-6MF-6MM-SS',  'Male Connector', '3/8"',  'MF', '3/8"',  'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-6MF-9MM-SS',  'Male Connector', '3/8"',  'MF', '9/16"', 'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-6MF-12MM-SS', 'Male Connector', '3/8"',  'MF', '3/4"',  'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-6MF-16MM-SS', 'Male Connector', '3/8"',  'MF', '1"',    'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-9MF-4MM-SS',  'Male Connector', '9/16"', 'MF', '1/4"',  'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-9MF-6MM-SS',  'Male Connector', '9/16"', 'MF', '3/8"',  'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-9MF-9MM-SS',  'Male Connector', '9/16"', 'MF', '9/16"', 'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-9MF-12MM-SS', 'Male Connector', '9/16"', 'MF', '3/4"',  'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-9MF-16MM-SS', 'Male Connector', '9/16"', 'MF', '1"',    'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-12MF-4MM-SS', 'Male Connector', '3/4"',  'MF', '1/4"',  'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-12MF-6MM-SS', 'Male Connector', '3/4"',  'MF', '3/8"',  'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-12MF-9MM-SS', 'Male Connector', '3/4"',  'MF', '9/16"', 'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-12MF-12MM-SS','Male Connector', '3/4"',  'MF', '3/4"',  'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-12MF-16MM-SS','Male Connector', '3/4"',  'MF', '1"',    'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-16MF-9MM-SS', 'Male Connector', '1"',    'MF', '9/16"', 'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-16MF-12MM-SS','Male Connector', '1"',    'MF', '3/4"',  'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-16MF-16MM-SS','Male Connector', '1"',    'MF', '1"',    'MM', '20,000 psi', 20000, IMG_MC),
  make('PMC-4HF-4MM-SS',  'Male Connector', '1/4"',  'HF', '1/4"',  'MM', '20,000 psi', 20000, IMG_HF),
  make('PMC-4HF-6MM-SS',  'Male Connector', '1/4"',  'HF', '3/8"',  'MM', '20,000 psi', 20000, IMG_HF),
  make('PMC-4HF-9MM-SS',  'Male Connector', '1/4"',  'HF', '9/16"', 'MM', '20,000 psi', 20000, IMG_HF),
  make('PMC-4HF-12MM-SS', 'Male Connector', '1/4"',  'HF', '3/4"',  'MM', '20,000 psi', 20000, IMG_HF),
  make('PMC-4HF-16MM-SS', 'Male Connector', '1/4"',  'HF', '1"',    'MM', '20,000 psi', 20000, IMG_HF),
  make('PMC-6HF-4MM-SS',  'Male Connector', '3/8"',  'HF', '1/4"',  'MM', '20,000 psi', 20000, IMG_HF),
  make('PMC-6HF-6MM-SS',  'Male Connector', '3/8"',  'HF', '3/8"',  'MM', '20,000 psi', 20000, IMG_HF),
  make('PMC-6HF-9MM-SS',  'Male Connector', '3/8"',  'HF', '9/16"', 'MM', '20,000 psi', 20000, IMG_HF),
  make('PMC-6HF-12MM-SS', 'Male Connector', '3/8"',  'HF', '3/4"',  'MM', '20,000 psi', 20000, IMG_HF),
  make('PMC-6HF-16MM-SS', 'Male Connector', '3/8"',  'HF', '1"',    'MM', '20,000 psi', 20000, IMG_HF),
  make('PMC-9HF-4MM-SS',  'Male Connector', '9/16"', 'HF', '1/4"',  'MM', '20,000 psi', 20000, IMG_HF),
  make('PMC-9HF-6MM-SS',  'Male Connector', '9/16"', 'HF', '3/8"',  'MM', '20,000 psi', 20000, IMG_HF),
  make('PMC-9HF-9MM-SS',  'Male Connector', '9/16"', 'HF', '9/16"', 'MM', '20,000 psi', 20000, IMG_HF),
  make('PMC-9HF-12MM-SS', 'Male Connector', '9/16"', 'HF', '3/4"',  'MM', '20,000 psi', 20000, IMG_HF),
  make('PMC-9HF-16MM-SS', 'Male Connector', '9/16"', 'HF', '1"',    'MM', '20,000 psi', 20000, IMG_HF),
  make('PMC-4MF-4HM-SS',  'Male Connector', '1/4"',  'MF', '1/4"',  'HM', '20,000 psi', 20000, IMG_MC),
  make('PMC-4MF-6HM-SS',  'Male Connector', '1/4"',  'MF', '3/8"',  'HM', '20,000 psi', 20000, IMG_MC),
  make('PMC-4MF-9HM-SS',  'Male Connector', '1/4"',  'MF', '9/16"', 'HM', '20,000 psi', 20000, IMG_MC),
  make('PMC-6MF-4HM-SS',  'Male Connector', '3/8"',  'MF', '1/4"',  'HM', '20,000 psi', 20000, IMG_MC),
  make('PMC-6MF-6HM-SS',  'Male Connector', '3/8"',  'MF', '3/8"',  'HM', '20,000 psi', 20000, IMG_MC),
  make('PMC-6MF-9HM-SS',  'Male Connector', '3/8"',  'MF', '9/16"', 'HM', '20,000 psi', 20000, IMG_MC),
  make('PMC-9MF-4HM-SS',  'Male Connector', '9/16"', 'MF', '1/4"',  'HM', '20,000 psi', 20000, IMG_MC),
  make('PMC-9MF-6N-SS',   'Male Connector', '9/16"', 'MF', '3/8"',  'HM', '20,000 psi', 20000, IMG_MC),
  make('PMC-9MF-9N-SS',   'Male Connector', '9/16"', 'MF', '9/16"', 'HM', '20,000 psi', 20000, IMG_MC),
  make('PMC-12MF-4HM-SS', 'Male Connector', '3/4"',  'MF', '1/4"',  'HM', '20,000 psi', 20000, IMG_MC),
  make('PMC-12MF-6HM-SS', 'Male Connector', '3/4"',  'MF', '3/8"',  'HM', '20,000 psi', 20000, IMG_MC),
  make('PMC-12MF-9HM-SS', 'Male Connector', '3/4"',  'MF', '9/16"', 'HM', '20,000 psi', 20000, IMG_MC),
  make('PMC-16MF-4HM-SS', 'Male Connector', '1"',    'MF', '1/4"',  'HM', '20,000 psi', 20000, IMG_MC),
  make('PMC-16MF-6HM-SS', 'Male Connector', '1"',    'MF', '3/8"',  'HM', '20,000 psi', 20000, IMG_MC),
  make('PMC-16MF-9HM-SS', 'Male Connector', '1"',    'MF', '9/16"', 'HM', '20,000 psi', 20000, IMG_MC),
  make('PMC-4HF-4HM-SS',  'Male Connector', '1/4"',  'HF', '1/4"',  'HM', '60,000 psi', 60000, IMG_HF),
  make('PMC-4HF-6HM-SS',  'Male Connector', '1/4"',  'HF', '3/8"',  'HM', '60,000 psi', 60000, IMG_HF),
  make('PMC-4HF-9HM-SS',  'Male Connector', '1/4"',  'HF', '9/16"', 'HM', '60,000 psi', 60000, IMG_HF),
  make('PMC-6HF-4HM-SS',  'Male Connector', '3/8"',  'HF', '1/4"',  'HM', '60,000 psi', 60000, IMG_HF),
  make('PMC-6HF-6HM-SS',  'Male Connector', '3/8"',  'HF', '3/8"',  'HM', '60,000 psi', 60000, IMG_HF),
  make('PMC-6HF-9HM-SS',  'Male Connector', '3/8"',  'HF', '9/16"', 'HM', '60,000 psi', 60000, IMG_HF),
  make('PMC-9HF-4HM-SS',  'Male Connector', '9/16"', 'HF', '1/4"',  'HM', '60,000 psi', 60000, IMG_HF),
  make('PMC-9HF-6HM-SS',  'Male Connector', '9/16"', 'HF', '3/8"',  'HM', '60,000 psi', 60000, IMG_HF),
  make('PMC-9HF-9HM-SS',  'Male Connector', '9/16"', 'HF', '9/16"', 'HM', '60,000 psi', 60000, IMG_HF),
  make('PFC-4MF-2N-SS',   'Female Connector', '1/4"',  'MF', '1/8"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-4MF-4N-SS',   'Female Connector', '1/4"',  'MF', '1/4"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-4MF-6N-SS',   'Female Connector', '1/4"',  'MF', '3/8"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-4MF-8N-SS',   'Female Connector', '1/4"',  'MF', '1/2"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-6MF-2N-SS',   'Female Connector', '3/8"',  'MF', '1/8"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-6MF-4N-SS',   'Female Connector', '3/8"',  'MF', '1/4"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-6MF-6N-SS',   'Female Connector', '3/8"',  'MF', '3/8"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-6MF-8N-SS',   'Female Connector', '3/8"',  'MF', '1/2"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-6MF-12N-SS',  'Female Connector', '3/8"',  'MF', '3/4"',  'N', '10,000 psi', 10000, IMG_FC),
  make('PFC-9MF-2N-SS',   'Female Connector', '9/16"', 'MF', '1/8"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-9MF-4N-SS',   'Female Connector', '9/16"', 'MF', '1/4"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-9MF-6N-SS',   'Female Connector', '9/16"', 'MF', '3/8"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-9MF-8N-SS',   'Female Connector', '9/16"', 'MF', '1/2"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-9MF-12N-SS',  'Female Connector', '9/16"', 'MF', '3/4"',  'N', '10,000 psi', 10000, IMG_FC),
  make('PFC-9MF-16N-SS',  'Female Connector', '9/16"', 'MF', '1"',    'N', '10,000 psi', 10000, IMG_FC),
  make('PFC-12MF-2N-SS',  'Female Connector', '3/4"',  'MF', '1/8"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-12MF-4N-SS',  'Female Connector', '3/4"',  'MF', '1/4"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-12MF-6N-SS',  'Female Connector', '3/4"',  'MF', '3/8"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-12MF-8N-SS',  'Female Connector', '3/4"',  'MF', '1/2"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-12MF-12N-SS', 'Female Connector', '3/4"',  'MF', '3/4"',  'N', '10,000 psi', 10000, IMG_FC),
  make('PFC-12MF-16N-SS', 'Female Connector', '3/4"',  'MF', '1"',    'N', '10,000 psi', 10000, IMG_FC),
  make('PFC-16MF-4N-SS',  'Female Connector', '1"',    'MF', '1/4"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-16MF-6N-SS',  'Female Connector', '1"',    'MF', '3/8"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-16MF-8N-SS',  'Female Connector', '1"',    'MF', '1/2"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-16MF-12N-SS', 'Female Connector', '1"',    'MF', '3/4"',  'N', '10,000 psi', 10000, IMG_FC),
  make('PFC-16MF-16N-SS', 'Female Connector', '1"',    'MF', '1"',    'N', '10,000 psi', 10000, IMG_FC),
  make('PFC-4HF-2N-SS',   'Female Connector', '1/4"',  'HF', '1/8"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-4HF-4N-SS',   'Female Connector', '1/4"',  'HF', '1/4"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-4HF-6N-SS',   'Female Connector', '1/4"',  'HF', '3/8"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-4HF-8N-SS',   'Female Connector', '1/4"',  'HF', '1/2"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-4HF-12N-SS',  'Female Connector', '1/4"',  'HF', '3/4"',  'N', '10,000 psi', 10000, IMG_FC),
  make('PFC-4HF-16N-SS',  'Female Connector', '1/4"',  'HF', '1"',    'N', '10,000 psi', 10000, IMG_FC),
  make('PFC-6HF-2N-SS',   'Female Connector', '3/8"',  'HF', '1/8"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-6HF-4N-SS',   'Female Connector', '3/8"',  'HF', '1/4"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-6HF-6N-SS',   'Female Connector', '3/8"',  'HF', '3/8"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-6HF-8N-SS',   'Female Connector', '3/8"',  'HF', '1/2"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-6HF-12N-SS',  'Female Connector', '3/8"',  'HF', '3/4"',  'N', '10,000 psi', 10000, IMG_FC),
  make('PFC-6HF-16N-SS',  'Female Connector', '3/8"',  'HF', '1"',    'N', '10,000 psi', 10000, IMG_FC),
  make('PFC-9HF-2N-SS',   'Female Connector', '9/16"', 'HF', '1/8"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-9HF-4N-SS',   'Female Connector', '9/16"', 'HF', '1/4"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-9HF-6N-SS',   'Female Connector', '9/16"', 'HF', '3/8"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-9HF-9N-SS',   'Female Connector', '9/16"', 'HF', '1/2"',  'N', '15,000 psi', 15000, IMG_FC),
  make('PFC-9HF-12N-SS',  'Female Connector', '9/16"', 'HF', '3/4"',  'N', '10,000 psi', 10000, IMG_FC),
  make('PFC-9HF-16N-SS',  'Female Connector', '9/16"', 'HF', '1"',    'N', '10,000 psi', 10000, IMG_FC),
]

export const HP_FITTING_DESCRIPTION = {
  title: 'HP Cone & Thread Connectors',
  description:
    'Panam HP Cone & Thread Connectors in SS 316. Male and Female Connectors with MP or HP Cone & Thread female P1 to NPT, MP Cone Male, or HP Cone Male P2. Pressures from 10,000 to 60,000 psi across tube ODs from 1/4" to 1".',
  specs: [
    'Male Connector · Female Connector',
    'SS 316',
    '10,000 – 60,000 psi',
    'P1: MP Cone Female · HP Cone Female',
    'P2: NPT · MP Cone Male · HP Cone Male',
  ],
}