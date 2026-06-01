export interface PipeTeeCrossDTO {
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

export interface PipeTeeCrossFilters {
  fittingTypes: string[]
  pressureRatings: string[]
  p1Threads: string[]
  p1Sizes: string[]
  p2Threads: string[]
  p2Sizes: string[]
}

export const EMPTY_TEE_CROSS_FILTERS: PipeTeeCrossFilters = {
  fittingTypes: [],
  pressureRatings: [],
  p1Threads: [],
  p1Sizes: [],
  p2Threads: [],
  p2Sizes: [],
}

export interface AvailableCountsTeeCross {
  fittingTypes: Record<string, number>
  pressureRatings: Record<string, number>
  p1Threads: Record<string, number>
  p1Sizes: Record<string, number>
  p2Threads: Record<string, number>
  p2Sizes: Record<string, number>
}

export function applyFilters(
  data: PipeTeeCrossDTO[],
  filters: PipeTeeCrossFilters,
  exclude: keyof PipeTeeCrossFilters | ''
): PipeTeeCrossDTO[] {
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

const IMG_FT     = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/female-tee.png'
const IMG_MT     = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/male-tee.png'
const IMG_SWIVEL = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/swivel-union-tee.png'
const IMG_CROSS  = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/cross.png'

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
): PipeTeeCrossDTO => ({
  id: `${pn}-${p1Size}-${p2Size}`,
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

export const PIPE_TEE_CROSS_DATA: PipeTeeCrossDTO[] = [
  make('PFT-2N-SS-15K',  'Female Tee', '1/8"', 'NPT', '1/8"', 'NPT', '15,000 psi', 15000, IMG_FT),
  make('PFT-4N-SS-15K',  'Female Tee', '1/4"', 'NPT', '1/4"', 'NPT', '15,000 psi', 15000, IMG_FT),
  make('PFT-6N-SS-15K',  'Female Tee', '3/8"', 'NPT', '3/8"', 'NPT', '15,000 psi', 15000, IMG_FT),
  make('PFT-8N-SS-15K',  'Female Tee', '1/2"', 'NPT', '1/2"', 'NPT', '15,000 psi', 15000, IMG_FT),
  make('PFT-12N-SS-10K', 'Female Tee', '3/4"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000, IMG_FT),
  make('PFT-16N-SS-10K', 'Female Tee', '1"',   'NPT', '1"',   'NPT', '10,000 psi', 10000, IMG_FT),
  make('PFT-2G-SS-15K',  'Female Tee', '1/8"', 'ISO Parallel', '1/8"', 'ISO Parallel', '15,000 psi', 15000, IMG_FT),
  make('PFT-4G-SS-15K',  'Female Tee', '1/4"', 'ISO Parallel', '1/4"', 'ISO Parallel', '15,000 psi', 15000, IMG_FT),
  make('PFT-6G-SS-15K',  'Female Tee', '3/8"', 'ISO Parallel', '3/8"', 'ISO Parallel', '15,000 psi', 15000, IMG_FT),
  make('PFT-8G-SS-15K',  'Female Tee', '1/2"', 'ISO Parallel', '1/2"', 'ISO Parallel', '15,000 psi', 15000, IMG_FT),
  make('PFT-12G-SS-10K', 'Female Tee', '3/4"', 'ISO Parallel', '3/4"', 'ISO Parallel', '10,000 psi', 10000, IMG_FT),
  make('PFT-16G-SS-10K', 'Female Tee', '1"',   'ISO Parallel', '1"',   'ISO Parallel', '10,000 psi', 10000, IMG_FT),
  make('PMT-2N-SS-15K',  'Male Tee', '1/8"', 'NPT', '1/8"', 'NPT', '15,000 psi', 15000, IMG_MT),
  make('PMT-4N-SS-15K',  'Male Tee', '1/4"', 'NPT', '1/4"', 'NPT', '15,000 psi', 15000, IMG_MT),
  make('PMT-6N-SS-15K',  'Male Tee', '3/8"', 'NPT', '3/8"', 'NPT', '15,000 psi', 15000, IMG_MT),
  make('PMT-8N-SS-15K',  'Male Tee', '1/2"', 'NPT', '1/2"', 'NPT', '15,000 psi', 15000, IMG_MT),
  make('PMT-12N-SS-10K', 'Male Tee', '3/4"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000, IMG_MT),
  make('PMT-16N-SS-10K', 'Male Tee', '1"',   'NPT', '1"',   'NPT', '10,000 psi', 10000, IMG_MT),
  make('PMT-2G-SS-15K',  'Male Tee', '1/8"', 'ISO Parallel', '1/8"', 'ISO Parallel', '15,000 psi', 15000, IMG_MT),
  make('PMT-4G-SS-15K',  'Male Tee', '1/4"', 'ISO Parallel', '1/4"', 'ISO Parallel', '15,000 psi', 15000, IMG_MT),
  make('PMT-6G-SS-15K',  'Male Tee', '3/8"', 'ISO Parallel', '3/8"', 'ISO Parallel', '15,000 psi', 15000, IMG_MT),
  make('PMT-8G-SS-15K',  'Male Tee', '1/2"', 'ISO Parallel', '1/2"', 'ISO Parallel', '15,000 psi', 15000, IMG_MT),
  make('PMT-12G-SS-10K', 'Male Tee', '3/4"', 'ISO Parallel', '3/4"', 'ISO Parallel', '10,000 psi', 10000, IMG_MT),
  make('PMT-16G-SS-10K', 'Male Tee', '1"',   'ISO Parallel', '1"',   'ISO Parallel', '10,000 psi', 10000, IMG_MT),
  make('PUT-4GSWL-SS-10K',  'Swivel Union Tee', '1/4"',   'ISO Parallel Swivel', '1/4"',   'ISO Parallel Swivel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PUT-6GSWL-SS-10K',  'Swivel Union Tee', '3/8"',   'ISO Parallel Swivel', '3/8"',   'ISO Parallel Swivel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PUT-8GSWL-SS-10K',  'Swivel Union Tee', '1/2"',   'ISO Parallel Swivel', '1/2"',   'ISO Parallel Swivel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PUT-10GSWL-SS-10K', 'Swivel Union Tee', '5/8"',   'ISO Parallel Swivel', '5/8"',   'ISO Parallel Swivel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PUT-12GSWL-SS-10K', 'Swivel Union Tee', '3/4"',   'ISO Parallel Swivel', '3/4"',   'ISO Parallel Swivel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PUT-16GSWL-SS-10K', 'Swivel Union Tee', '1"',     'ISO Parallel Swivel', '1"',     'ISO Parallel Swivel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PUT-20GSWL-SS-10K', 'Swivel Union Tee', '1 1/4"', 'ISO Parallel Swivel', '1 1/4"', 'ISO Parallel Swivel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PFC-2N-SS-15K',  'Female Cross', '1/8"', 'NPT', '1/8"', 'NPT', '15,000 psi', 15000, IMG_CROSS),
  make('PFC-4N-SS-15K',  'Female Cross', '1/4"', 'NPT', '1/4"', 'NPT', '15,000 psi', 15000, IMG_CROSS),
  make('PFC-6N-SS-15K',  'Female Cross', '3/8"', 'NPT', '3/8"', 'NPT', '15,000 psi', 15000, IMG_CROSS),
  make('PFC-8N-SS-15K',  'Female Cross', '1/2"', 'NPT', '1/2"', 'NPT', '15,000 psi', 15000, IMG_CROSS),
  make('PFC-12N-SS-10K', 'Female Cross', '3/4"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000, IMG_CROSS),
  make('PFC-16N-SS-10K', 'Female Cross', '1"',   'NPT', '1"',   'NPT', '10,000 psi', 10000, IMG_CROSS),
]

export const PIPE_TEE_CROSS_DESCRIPTION = {
  title: 'HP Pipe Fittings — Tees & Crosses',
  description:
    'Panam High Pressure Tees and Crosses in SS 316. Female Tees, Male Tees, Swivel Union Tees and Female Crosses in NPT and ISO Parallel thread connections. 10,000 to 15,000 psi. Sizes from 1/8" to 1 1/4".',
  specs: [
    'Female Tee · Male Tee · Swivel Union Tee · Female Cross',
    'SS 316',
    '10,000 & 15,000 psi',
    'NPT · ISO Parallel',
    '1/8" – 1 1/4"',
  ],
}