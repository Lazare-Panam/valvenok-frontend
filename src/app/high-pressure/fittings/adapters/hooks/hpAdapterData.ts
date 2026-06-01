export interface HPAdapterDTO {
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

export interface HPAdapterFilters {
  fittingTypes: string[]
  pressureRatings: string[]
  p1Threads: string[]
  p1Sizes: string[]
  p2Threads: string[]
  p2Sizes: string[]
}

export const EMPTY_ADAPTER_FILTERS: HPAdapterFilters = {
  fittingTypes: [],
  pressureRatings: [],
  p1Threads: [],
  p1Sizes: [],
  p2Threads: [],
  p2Sizes: [],
}

export interface AvailableCountsAdapter {
  fittingTypes: Record<string, number>
  pressureRatings: Record<string, number>
  p1Threads: Record<string, number>
  p1Sizes: Record<string, number>
  p2Threads: Record<string, number>
  p2Sizes: Record<string, number>
}

export function applyFilters(
  data: HPAdapterDTO[],
  filters: HPAdapterFilters,
  exclude: keyof HPAdapterFilters | ''
): HPAdapterDTO[] {
  return data.filter(c => {
    if (exclude !== 'fittingTypes'    && filters.fittingTypes.length    && !filters.fittingTypes.includes(c.fittingType))       return false
    if (exclude !== 'pressureRatings' && filters.pressureRatings.length && !filters.pressureRatings.includes(c.pressureRating)) return false
    if (exclude !== 'p1Threads'       && filters.p1Threads.length       && !filters.p1Threads.includes(c.p1Thread))             return false
    if (exclude !== 'p1Sizes'         && filters.p1Sizes.length         && !filters.p1Sizes.includes(c.p1Size))                 return false
    if (exclude !== 'p2Threads'       && filters.p2Threads.length       && !filters.p2Threads.includes(c.p2Thread))             return false
    if (exclude !== 'p2Sizes'         && filters.p2Sizes.length         && !filters.p2Sizes.includes(c.p2Size))                 return false
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

const IMG_REDUCER = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-reducer.png'
const IMG_FEMALE  = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-female-adaptor.png'
const IMG_MALE    = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-male-adaptor.png'
const IMG_ADAPTER = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-adaptor.jpg'

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
): HPAdapterDTO => ({
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

export const HP_ADAPTER_DATA: HPAdapterDTO[] = [
  make('PR-4MF-4MT-SS',   'Reducer', '1/4"',  'Medium Pressure Female', '1/4"',  'Medium Pressure Tube', '20,000 psi', 20000, IMG_REDUCER),
  make('PR-4MF-6MT-SS',   'Reducer', '1/4"',  'Medium Pressure Female', '3/8"',  'Medium Pressure Tube', '20,000 psi', 20000, IMG_REDUCER),
  make('PR-4MF-9MT-SS',   'Reducer', '1/4"',  'Medium Pressure Female', '9/16"', 'Medium Pressure Tube', '20,000 psi', 20000, IMG_REDUCER),
  make('PR-6MF-4MT-SS',   'Reducer', '3/8"',  'Medium Pressure Female', '1/4"',  'Medium Pressure Tube', '20,000 psi', 20000, IMG_REDUCER),
  make('PR-6MF-6MT-SS',   'Reducer', '3/8"',  'Medium Pressure Female', '3/8"',  'Medium Pressure Tube', '20,000 psi', 20000, IMG_REDUCER),
  make('PR-6MF-9MT-SS',   'Reducer', '3/8"',  'Medium Pressure Female', '9/16"', 'Medium Pressure Tube', '20,000 psi', 20000, IMG_REDUCER),
  make('PR-9MF-4MT-SS',   'Reducer', '9/16"', 'Medium Pressure Female', '1/4"',  'Medium Pressure Tube', '20,000 psi', 20000, IMG_REDUCER),
  make('PR-9MF-6MT-SS',   'Reducer', '9/16"', 'Medium Pressure Female', '3/8"',  'Medium Pressure Tube', '20,000 psi', 20000, IMG_REDUCER),
  make('PR-9MF-9MT-SS',   'Reducer', '9/16"', 'Medium Pressure Female', '9/16"', 'Medium Pressure Tube', '20,000 psi', 20000, IMG_REDUCER),
  make('PR-9MF-12MT-SS',  'Reducer', '9/16"', 'Medium Pressure Female', '3/4"',  'Medium Pressure Tube', '20,000 psi', 20000, IMG_REDUCER),
  make('PR-9MF-16MT-SS',  'Reducer', '9/16"', 'Medium Pressure Female', '1"',    'Medium Pressure Tube', '20,000 psi', 20000, IMG_REDUCER),
  make('PR-12MF-9MT-SS',  'Reducer', '3/4"',  'Medium Pressure Female', '9/16"', 'Medium Pressure Tube', '20,000 psi', 20000, IMG_REDUCER),
  make('PR-12MF-12MT-SS', 'Reducer', '3/4"',  'Medium Pressure Female', '3/4"',  'Medium Pressure Tube', '20,000 psi', 20000, IMG_REDUCER),
  make('PR-12MF-16MT-SS', 'Reducer', '3/4"',  'Medium Pressure Female', '1"',    'Medium Pressure Tube', '20,000 psi', 20000, IMG_REDUCER),
  make('PR-16MF-09MT-SS', 'Reducer', '1"',    'Medium Pressure Female', '9/16"', 'Medium Pressure Tube', '20,000 psi', 20000, IMG_REDUCER),
  make('PR-16MF-12MT-SS', 'Reducer', '1"',    'Medium Pressure Female', '3/4"',  'Medium Pressure Tube', '20,000 psi', 20000, IMG_REDUCER),
  make('PR-16MF-16MT-SS', 'Reducer', '1"',    'Medium Pressure Female', '1"',    'Medium Pressure Tube', '20,000 psi', 20000, IMG_REDUCER),
  make('PR-4HF-4HT-SS',  'Reducer', '1/4"',  'High Pressure Female', '1/4"',  'High Pressure Tube', '60,000 psi', 60000, IMG_REDUCER),
  make('PR-4HF-6HT-SS',  'Reducer', '1/4"',  'High Pressure Female', '3/8"',  'High Pressure Tube', '60,000 psi', 60000, IMG_REDUCER),
  make('PR-4HF-9HT-SS',  'Reducer', '1/4"',  'High Pressure Female', '9/16"', 'High Pressure Tube', '60,000 psi', 60000, IMG_REDUCER),
  make('PR-6HF-4HT-SS',  'Reducer', '3/8"',  'High Pressure Female', '1/4"',  'High Pressure Tube', '60,000 psi', 60000, IMG_REDUCER),
  make('PR-6HF-6HT-SS',  'Reducer', '3/8"',  'High Pressure Female', '3/8"',  'High Pressure Tube', '60,000 psi', 60000, IMG_REDUCER),
  make('PR-6HF-9HT-SS',  'Reducer', '3/8"',  'High Pressure Female', '9/16"', 'High Pressure Tube', '60,000 psi', 60000, IMG_REDUCER),
  make('PR-9HF-4HT-SS',  'Reducer', '9/16"', 'High Pressure Female', '1/4"',  'High Pressure Tube', '60,000 psi', 60000, IMG_REDUCER),
  make('PR-9HF-6HT-SS',  'Reducer', '9/16"', 'High Pressure Female', '3/8"',  'High Pressure Tube', '60,000 psi', 60000, IMG_REDUCER),
  make('PR-9HF-9HT-SS',  'Reducer', '9/16"', 'High Pressure Female', '9/16"', 'High Pressure Tube', '60,000 psi', 60000, IMG_REDUCER),
  make('PFA-4MT-2N-SS',  'Female Adapter', '1/4"',  'Medium Pressure Tube', '1/8"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-6MT-2N-SS',  'Female Adapter', '3/8"',  'Medium Pressure Tube', '1/8"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-9MT-2N-SS',  'Female Adapter', '9/16"', 'Medium Pressure Tube', '1/8"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-12MT-2N-SS', 'Female Adapter', '3/4"',  'Medium Pressure Tube', '1/8"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-16MT-2N-SS', 'Female Adapter', '1"',    'Medium Pressure Tube', '1/8"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-4MT-4N-SS',  'Female Adapter', '1/4"',  'Medium Pressure Tube', '1/4"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-6MT-4N-SS',  'Female Adapter', '3/8"',  'Medium Pressure Tube', '1/4"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-9MT-4N-SS',  'Female Adapter', '9/16"', 'Medium Pressure Tube', '1/4"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-12MT-4N-SS', 'Female Adapter', '3/4"',  'Medium Pressure Tube', '1/4"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-16MT-4N-SS', 'Female Adapter', '1"',    'Medium Pressure Tube', '1/4"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-6MT-6N-SS',  'Female Adapter', '3/8"',  'Medium Pressure Tube', '3/8"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-9MT-6N-SS',  'Female Adapter', '9/16"', 'Medium Pressure Tube', '3/8"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-12MT-6N-SS', 'Female Adapter', '3/4"',  'Medium Pressure Tube', '3/8"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-16MT-6N-SS', 'Female Adapter', '1"',    'Medium Pressure Tube', '3/8"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-9MT-8N-SS',  'Female Adapter', '9/16"', 'Medium Pressure Tube', '1/2"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-12MT-8N-SS', 'Female Adapter', '3/4"',  'Medium Pressure Tube', '1/2"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-16MT-8N-SS', 'Female Adapter', '1"',    'Medium Pressure Tube', '1/2"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-9MT-12N-SS', 'Female Adapter', '9/16"', 'Medium Pressure Tube', '3/4"',  'NPT Female', '15,000 psi', 15000, IMG_FEMALE),
  make('PFA-12MT-12N-SS','Female Adapter', '3/4"',  'Medium Pressure Tube', '3/4"',  'NPT Female', '10,000 psi', 10000, IMG_FEMALE),
  make('PFA-16MT-12-SS', 'Female Adapter', '1"',    'Medium Pressure Tube', '3/4"',  'NPT Female', '10,000 psi', 10000, IMG_FEMALE),
  make('PFA-12MT-16N-SS','Female Adapter', '3/4"',  'Medium Pressure Tube', '1"',    'NPT Female', '10,000 psi', 10000, IMG_FEMALE),
  make('PFA-16MT-16N-SS','Female Adapter', '1"',    'Medium Pressure Tube', '1"',    'NPT Female', '10,000 psi', 10000, IMG_FEMALE),
  make('PMA-4MT-2N-SS',  'Male Adapter', '1/4"',  'Medium Pressure Tube', '1/8"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-6MT-2N-SS',  'Male Adapter', '3/8"',  'Medium Pressure Tube', '1/8"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-9MT-2N-SS',  'Male Adapter', '9/16"', 'Medium Pressure Tube', '1/8"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-12MT-2N-SS', 'Male Adapter', '3/4"',  'Medium Pressure Tube', '1/8"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-16MT-2N-SS', 'Male Adapter', '1"',    'Medium Pressure Tube', '1/8"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-4MT-4N-SS',  'Male Adapter', '1/4"',  'Medium Pressure Tube', '1/4"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-6MT-4N-SS',  'Male Adapter', '3/8"',  'Medium Pressure Tube', '1/4"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-9MT-4N-SS',  'Male Adapter', '9/16"', 'Medium Pressure Tube', '1/4"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-12MT-4N-SS', 'Male Adapter', '3/4"',  'Medium Pressure Tube', '1/4"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-16MT-4N-SS', 'Male Adapter', '1"',    'Medium Pressure Tube', '1/4"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-4MT-6N-SS',  'Male Adapter', '1/4"',  'Medium Pressure Tube', '3/8"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-6MT-6N-SS',  'Male Adapter', '3/8"',  'Medium Pressure Tube', '3/8"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-9MT-6N-SS',  'Male Adapter', '9/16"', 'Medium Pressure Tube', '3/8"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-12MT-6N-SS', 'Male Adapter', '3/4"',  'Medium Pressure Tube', '3/8"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-16MT-6N-SS', 'Male Adapter', '1"',    'Medium Pressure Tube', '3/8"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-4MT-8N-SS',  'Male Adapter', '1/4"',  'Medium Pressure Tube', '1/2"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-6MT-8N-SS',  'Male Adapter', '3/8"',  'Medium Pressure Tube', '1/2"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-9MT-8N-SS',  'Male Adapter', '9/16"', 'Medium Pressure Tube', '1/2"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-12MT-8N-SS', 'Male Adapter', '3/4"',  'Medium Pressure Tube', '1/2"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-16MT-8N-SS', 'Male Adapter', '1"',    'Medium Pressure Tube', '1/2"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-9MT-12N-SS', 'Male Adapter', '9/16"', 'Medium Pressure Tube', '3/4"',  'NPT Male', '10,000 psi', 10000, IMG_MALE),
  make('PMA-12MT-12N-SS','Male Adapter', '3/4"',  'Medium Pressure Tube', '3/4"',  'NPT Male', '10,000 psi', 10000, IMG_MALE),
  make('PMA-16MT-12N-SS','Male Adapter', '1"',    'Medium Pressure Tube', '3/4"',  'NPT Male', '10,000 psi', 10000, IMG_MALE),
  make('PMA-9MT-16N-SS', 'Male Adapter', '9/16"', 'Medium Pressure Tube', '1"',    'NPT Male', '10,000 psi', 10000, IMG_MALE),
  make('PMA-12MT-16N-SS','Male Adapter', '3/4"',  'Medium Pressure Tube', '1"',    'NPT Male', '10,000 psi', 10000, IMG_MALE),
  make('PMA-16MT-16N-SS','Male Adapter', '1"',    'Medium Pressure Tube', '1"',    'NPT Male', '10,000 psi', 10000, IMG_MALE),
  make('PMA-4HT-2N-SS',  'Male Adapter', '1/4"',  'High Pressure Tube', '1/8"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-6HT-2N-SS',  'Male Adapter', '3/8"',  'High Pressure Tube', '1/8"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-4HT-4N-SS',  'Male Adapter', '1/4"',  'High Pressure Tube', '1/4"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-6HT-4N-SS',  'Male Adapter', '3/8"',  'High Pressure Tube', '1/4"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-9HT-4N-SS',  'Male Adapter', '9/16"', 'High Pressure Tube', '1/4"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-4HT-6N-SS',  'Male Adapter', '1/4"',  'High Pressure Tube', '3/8"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-6HT-6N-SS',  'Male Adapter', '3/8"',  'High Pressure Tube', '3/8"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-9HT-6N-SS',  'Male Adapter', '9/16"', 'High Pressure Tube', '3/8"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-4HT-8N-SS',  'Male Adapter', '1/4"',  'High Pressure Tube', '1/2"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-6HT-8N-SS',  'Male Adapter', '3/8"',  'High Pressure Tube', '1/2"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-9HT-8N-SS',  'Male Adapter', '9/16"', 'High Pressure Tube', '1/2"',  'NPT Male', '15,000 psi', 15000, IMG_MALE),
  make('PMA-4HT-12N-SS', 'Male Adapter', '1/4"',  'High Pressure Tube', '3/4"',  'NPT Male', '10,000 psi', 10000, IMG_MALE),
  make('PMA-6HT-12N-SS', 'Male Adapter', '3/8"',  'High Pressure Tube', '3/4"',  'NPT Male', '10,000 psi', 10000, IMG_MALE),
  make('PMA-9HT-12N-SS', 'Male Adapter', '9/16"', 'High Pressure Tube', '3/4"',  'NPT Male', '10,000 psi', 10000, IMG_MALE),
  make('PMA-4HT-16N-SS', 'Male Adapter', '1/4"',  'High Pressure Tube', '1"',    'NPT Male', '10,000 psi', 10000, IMG_MALE),
  make('PMA-6HT-16N-SS', 'Male Adapter', '3/8"',  'High Pressure Tube', '1"',    'NPT Male', '10,000 psi', 10000, IMG_MALE),
  make('PMA-9HT-16N-SS', 'Male Adapter', '9/16"', 'High Pressure Tube', '1"',    'NPT Male', '10,000 psi', 10000, IMG_MALE),
  make('PA-4MM-2N-SS',   'Adapter', '1/4"',  'Medium Pressure Male', '1/8"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-6MM-2N-SS',   'Adapter', '3/8"',  'Medium Pressure Male', '1/8"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-9MM-2N-SS',   'Adapter', '9/16"', 'Medium Pressure Male', '1/8"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-12MM-2N-SS',  'Adapter', '3/4"',  'Medium Pressure Male', '1/8"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-16MM-2N-SS',  'Adapter', '1"',    'Medium Pressure Male', '1/8"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-4MM-4N-SS',   'Adapter', '1/4"',  'Medium Pressure Male', '1/4"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-6MM-4N-SS',   'Adapter', '3/8"',  'Medium Pressure Male', '1/4"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-9MM-4N-SS',   'Adapter', '9/16"', 'Medium Pressure Male', '1/4"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-12MM-4N-SS',  'Adapter', '3/4"',  'Medium Pressure Male', '1/4"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-16MM-4N-SS',  'Adapter', '1"',    'Medium Pressure Male', '1/4"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-4MM-6N-SS',   'Adapter', '1/4"',  'Medium Pressure Male', '3/8"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-6MM-6N-SS',   'Adapter', '3/8"',  'Medium Pressure Male', '3/8"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-9MM-6N-SS',   'Adapter', '9/16"', 'Medium Pressure Male', '3/8"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-12MM-6N-SS',  'Adapter', '3/4"',  'Medium Pressure Male', '3/8"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-16MM-6N-SS',  'Adapter', '1"',    'Medium Pressure Male', '3/8"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-4MM-8N-SS',   'Adapter', '1/4"',  'Medium Pressure Male', '1/2"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-6MM-8N-SS',   'Adapter', '3/8"',  'Medium Pressure Male', '1/2"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-9MM-8N-SS',   'Adapter', '9/16"', 'Medium Pressure Male', '1/2"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-12MM-8N-SS',  'Adapter', '3/4"',  'Medium Pressure Male', '1/2"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-16MM-8N-SS',  'Adapter', '1"',    'Medium Pressure Male', '1/2"',  'NPT Female', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-4MM-12N-SS',  'Adapter', '1/4"',  'Medium Pressure Male', '3/4"',  'NPT Female', '10,000 psi', 10000, IMG_ADAPTER),
  make('PA-6MM-12N-SS',  'Adapter', '3/8"',  'Medium Pressure Male', '3/4"',  'NPT Female', '10,000 psi', 10000, IMG_ADAPTER),
  make('PA-9MM-12N-SS',  'Adapter', '9/16"', 'Medium Pressure Male', '3/4"',  'NPT Female', '10,000 psi', 10000, IMG_ADAPTER),
  make('PA-12MM-12N-SS', 'Adapter', '3/4"',  'Medium Pressure Male', '3/4"',  'NPT Female', '10,000 psi', 10000, IMG_ADAPTER),
  make('PA-16MM-12N-SS', 'Adapter', '1"',    'Medium Pressure Male', '3/4"',  'NPT Female', '10,000 psi', 10000, IMG_ADAPTER),
  make('PA-4MM-16N-SS',  'Adapter', '1/4"',  'Medium Pressure Male', '1"',    'NPT Female', '10,000 psi', 10000, IMG_ADAPTER),
  make('PA-6MM-16N-SS',  'Adapter', '3/8"',  'Medium Pressure Male', '1"',    'NPT Female', '10,000 psi', 10000, IMG_ADAPTER),
  make('PA-9MM-16N-SS',  'Adapter', '9/16"', 'Medium Pressure Male', '1"',    'NPT Female', '10,000 psi', 10000, IMG_ADAPTER),
  make('PA-12MM-16N-SS', 'Adapter', '3/4"',  'Medium Pressure Male', '1"',    'NPT Female', '10,000 psi', 10000, IMG_ADAPTER),
  make('PA-16MM-16N-SS', 'Adapter', '1"',    'Medium Pressure Male', '1"',    'NPT Female', '10,000 psi', 10000, IMG_ADAPTER),
  make('PA-2N-4HM-SS',   'Adapter', '1/8"',  'NPT Female', '1/4"',  'High Pressure Male', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-2N-6HM-SS',   'Adapter', '1/8"',  'NPT Female', '3/8"',  'High Pressure Male', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-2N-9HM-SS',   'Adapter', '1/8"',  'NPT Female', '9/16"', 'High Pressure Male', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-4N-4HM-SS',   'Adapter', '1/4"',  'NPT Female', '1/4"',  'High Pressure Male', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-4N-6HM-SS',   'Adapter', '1/4"',  'NPT Female', '3/8"',  'High Pressure Male', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-4N-9HM-SS',   'Adapter', '1/4"',  'NPT Female', '9/16"', 'High Pressure Male', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-6N-4HM-SS',   'Adapter', '3/8"',  'NPT Female', '1/4"',  'High Pressure Male', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-6N-6HM-SS',   'Adapter', '3/8"',  'NPT Female', '3/8"',  'High Pressure Male', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-6N-9HM-SS',   'Adapter', '3/8"',  'NPT Female', '9/16"', 'High Pressure Male', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-8N-4HM-SS',   'Adapter', '1/2"',  'NPT Female', '1/4"',  'High Pressure Male', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-8N-6HM-SS',   'Adapter', '1/2"',  'NPT Female', '3/8"',  'High Pressure Male', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-8N-9HM-SS',   'Adapter', '1/2"',  'NPT Female', '9/16"', 'High Pressure Male', '15,000 psi', 15000, IMG_ADAPTER),
  make('PA-12N-4HM-SS',  'Adapter', '3/4"',  'NPT Female', '1/4"',  'High Pressure Male', '10,000 psi', 10000, IMG_ADAPTER),
  make('PA-12N-6HM-SS',  'Adapter', '3/4"',  'NPT Female', '3/8"',  'High Pressure Male', '10,000 psi', 10000, IMG_ADAPTER),
  make('PA-12N-9HM-SS',  'Adapter', '3/4"',  'NPT Female', '9/16"', 'High Pressure Male', '10,000 psi', 10000, IMG_ADAPTER),
  make('PA-16N-4HM-SS',  'Adapter', '1"',    'NPT Female', '1/4"',  'High Pressure Male', '10,000 psi', 10000, IMG_ADAPTER),
  make('PA-16N-6HM-SS',  'Adapter', '1"',    'NPT Female', '3/8"',  'High Pressure Male', '10,000 psi', 10000, IMG_ADAPTER),
  make('PA-16N-9HM-SS',  'Adapter', '1"',    'NPT Female', '9/16"', 'High Pressure Male', '10,000 psi', 10000, IMG_ADAPTER),
]

export const HP_ADAPTER_DESCRIPTION = {
  title: 'HP Adapters & Reducers',
  description:
    'Panam High Pressure Adapters and Reducers in SS 316. Reducers, Female Adapters, Male Adapters, and Adapters across Medium Pressure and High Pressure tube and cone thread connections to NPT. Pressures from 10,000 to 60,000 psi.',
  specs: [
    'Reducer · Female Adapter · Male Adapter · Adapter',
    'SS 316',
    '10,000 – 60,000 psi',
    'Medium Pressure Tube · High Pressure Tube · NPT',
    '1/4" · 3/8" · 9/16" · 3/4" · 1"',
  ],
}