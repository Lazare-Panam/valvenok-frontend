export interface PipeElbowDTO {
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

export interface PipeElbowFilters {
  fittingTypes: string[]
  pressureRatings: string[]
  p1Threads: string[]
  p1Sizes: string[]
  p2Threads: string[]
  p2Sizes: string[]
}

export const EMPTY_ELBOW_FILTERS: PipeElbowFilters = {
  fittingTypes: [],
  pressureRatings: [],
  p1Threads: [],
  p1Sizes: [],
  p2Threads: [],
  p2Sizes: [],
}

export interface AvailableCountsElbow {
  fittingTypes: Record<string, number>
  pressureRatings: Record<string, number>
  p1Threads: Record<string, number>
  p1Sizes: Record<string, number>
  p2Threads: Record<string, number>
  p2Sizes: Record<string, number>
}

export function applyFilters(
  data: PipeElbowDTO[],
  filters: PipeElbowFilters,
  exclude: keyof PipeElbowFilters | ''
): PipeElbowDTO[] {
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

const IMG_MALE   = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/male-elbow-hp.png'
const IMG_FEMALE = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/female-elbow-hp.png'
const IMG_SWIVEL = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/swivel-union-elbow-hp.png'

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
): PipeElbowDTO => ({
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

export const PIPE_ELBOW_DATA: PipeElbowDTO[] = [
  make('PME-2N-SS-15K',  'Male Elbow', '1/8"', 'NPT', '1/8"', 'NPT', '15,000 psi', 15000, IMG_MALE),
  make('PME-4N-SS-15K',  'Male Elbow', '1/4"', 'NPT', '1/4"', 'NPT', '15,000 psi', 15000, IMG_MALE),
  make('PME-6N-SS-15K',  'Male Elbow', '3/8"', 'NPT', '3/8"', 'NPT', '15,000 psi', 15000, IMG_MALE),
  make('PME-8N-SS-15K',  'Male Elbow', '1/2"', 'NPT', '1/2"', 'NPT', '15,000 psi', 15000, IMG_MALE),
  make('PME-12N-SS-10K', 'Male Elbow', '3/4"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000, IMG_MALE),
  make('PME-16N-SS-10K', 'Male Elbow', '1"',   'NPT', '1"',   'NPT', '10,000 psi', 10000, IMG_MALE),
  make('PME-2G-SS-15K',  'Male Elbow', '1/8"', 'ISO Parallel', '1/8"', 'ISO Parallel', '15,000 psi', 15000, IMG_MALE),
  make('PME-4G-SS-15K',  'Male Elbow', '1/4"', 'ISO Parallel', '1/4"', 'ISO Parallel', '15,000 psi', 15000, IMG_MALE),
  make('PME-6G-SS-15K',  'Male Elbow', '3/8"', 'ISO Parallel', '3/8"', 'ISO Parallel', '15,000 psi', 15000, IMG_MALE),
  make('PME-8G-SS-15K',  'Male Elbow', '1/2"', 'ISO Parallel', '1/2"', 'ISO Parallel', '15,000 psi', 15000, IMG_MALE),
  make('PME-12G-SS-10K', 'Male Elbow', '3/4"', 'ISO Parallel', '3/4"', 'ISO Parallel', '10,000 psi', 10000, IMG_MALE),
  make('PME-16G-SS-10K', 'Male Elbow', '1"',   'ISO Parallel', '1"',   'ISO Parallel', '10,000 psi', 10000, IMG_MALE),
  make('PFE-2N-SS-15K',  'Female Elbow', '1/8"', 'NPT', '1/8"', 'NPT', '15,000 psi', 15000, IMG_FEMALE),
  make('PFE-4N-SS-15K',  'Female Elbow', '1/4"', 'NPT', '1/4"', 'NPT', '15,000 psi', 15000, IMG_FEMALE),
  make('PFE-6N-SS-15K',  'Female Elbow', '3/8"', 'NPT', '3/8"', 'NPT', '15,000 psi', 15000, IMG_FEMALE),
  make('PFE-8N-SS-15K',  'Female Elbow', '1/2"', 'NPT', '1/2"', 'NPT', '15,000 psi', 15000, IMG_FEMALE),
  make('PFE-12N-SS-10K', 'Female Elbow', '3/4"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000, IMG_FEMALE),
  make('PFE-16N-SS-10K', 'Female Elbow', '1"',   'NPT', '1"',   'NPT', '10,000 psi', 10000, IMG_FEMALE),
  make('PFE-2G-SS-15K',  'Female Elbow', '1/8"', 'ISO Parallel', '1/8"', 'ISO Parallel', '15,000 psi', 15000, IMG_FEMALE),
  make('PFE-4G-SS-15K',  'Female Elbow', '1/4"', 'ISO Parallel', '1/4"', 'ISO Parallel', '15,000 psi', 15000, IMG_FEMALE),
  make('PFE-6G-SS-15K',  'Female Elbow', '3/8"', 'ISO Parallel', '3/8"', 'ISO Parallel', '15,000 psi', 15000, IMG_FEMALE),
  make('PFE-8G-SS-15K',  'Female Elbow', '1/2"', 'ISO Parallel', '1/2"', 'ISO Parallel', '15,000 psi', 15000, IMG_FEMALE),
  make('PFE-12G-SS-10K', 'Female Elbow', '3/4"', 'ISO Parallel', '3/4"', 'ISO Parallel', '10,000 psi', 10000, IMG_FEMALE),
  make('PFE-16G-SS-10K', 'Female Elbow', '1"',   'ISO Parallel', '1"',   'ISO Parallel', '10,000 psi', 10000, IMG_FEMALE),
  make('PME-2GSWL-2G-SS-10K',   'Swivel Male Elbow', '1/8"',   'ISO Parallel Swivel', '1/8"',   'ISO Parallel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PME-4GSWL-4G-SS-10K',   'Swivel Male Elbow', '1/4"',   'ISO Parallel Swivel', '1/4"',   'ISO Parallel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PME-6GSWL-6G-SS-10K',   'Swivel Male Elbow', '3/8"',   'ISO Parallel Swivel', '3/8"',   'ISO Parallel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PME-8GSWL-8G-SS-10K',   'Swivel Male Elbow', '1/2"',   'ISO Parallel Swivel', '1/2"',   'ISO Parallel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PME-10GSWL-10G-SS-10K', 'Swivel Male Elbow', '5/8"',   'ISO Parallel Swivel', '5/8"',   'ISO Parallel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PME-12GSWL-12G-SS-10K', 'Swivel Male Elbow', '3/4"',   'ISO Parallel Swivel', '3/4"',   'ISO Parallel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PME-16GSWL-16G-SS-10K', 'Swivel Male Elbow', '1"',     'ISO Parallel Swivel', '1"',     'ISO Parallel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PME-20GSWL-20G-SS-10K', 'Swivel Male Elbow', '1 1/4"', 'ISO Parallel Swivel', '1 1/4"', 'ISO Parallel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PME-24GSWL-24G-SS-10K', 'Swivel Male Elbow', '1 1/2"', 'ISO Parallel Swivel', '1 1/2"', 'ISO Parallel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PUE-4GSWL-SS-10K',  'Swivel Union Elbow', '1/4"',   'ISO Parallel Swivel', '1/4"',   'ISO Parallel Swivel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PUE-6GSWL-SS-10K',  'Swivel Union Elbow', '3/8"',   'ISO Parallel Swivel', '3/8"',   'ISO Parallel Swivel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PUE-8GSWL-SS-10K',  'Swivel Union Elbow', '1/2"',   'ISO Parallel Swivel', '1/2"',   'ISO Parallel Swivel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PUE-10GSWL-SS-10K', 'Swivel Union Elbow', '5/8"',   'ISO Parallel Swivel', '5/8"',   'ISO Parallel Swivel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PUE-12GSWL-SS-10K', 'Swivel Union Elbow', '3/4"',   'ISO Parallel Swivel', '3/4"',   'ISO Parallel Swivel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PUE-16GSWL-SS-10K', 'Swivel Union Elbow', '1"',     'ISO Parallel Swivel', '1"',     'ISO Parallel Swivel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PUE-20GSWL-SS-10K', 'Swivel Union Elbow', '1 1/4"', 'ISO Parallel Swivel', '1 1/4"', 'ISO Parallel Swivel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PUE-24GSWL-SS-10K', 'Swivel Union Elbow', '1 1/2"', 'ISO Parallel Swivel', '1 1/2"', 'ISO Parallel Swivel', '10,000 psi', 10000, IMG_SWIVEL),
  make('PSE-2N-SS-15K',  'Street Elbow', '1/8"', 'NPT', '1/8"', 'NPT', '15,000 psi', 15000, IMG_MALE),
  make('PSE-4N-SS-15K',  'Street Elbow', '1/4"', 'NPT', '1/4"', 'NPT', '15,000 psi', 15000, IMG_MALE),
  make('PSE-6N-SS-15K',  'Street Elbow', '3/8"', 'NPT', '3/8"', 'NPT', '15,000 psi', 15000, IMG_MALE),
  make('PSE-8N-SS-15K',  'Street Elbow', '1/2"', 'NPT', '1/2"', 'NPT', '15,000 psi', 15000, IMG_MALE),
  make('PSE-12N-SS-10K', 'Street Elbow', '3/4"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000, IMG_MALE),
  make('PSE-16N-SS-15K', 'Street Elbow', '1"',   'NPT', '1"',   'NPT', '15,000 psi', 15000, IMG_MALE),
  make('PSE-2G-SS-15K',  'Street Elbow', '1/8"', 'ISO Parallel', '1/8"', 'ISO Parallel', '15,000 psi', 15000, IMG_MALE),
  make('PSE-4G-SS-15K',  'Street Elbow', '1/4"', 'ISO Parallel', '1/4"', 'ISO Parallel', '15,000 psi', 15000, IMG_MALE),
  make('PSE-6G-SS-15K',  'Street Elbow', '3/8"', 'ISO Parallel', '3/8"', 'ISO Parallel', '15,000 psi', 15000, IMG_MALE),
  make('PSE-8G-SS-15K',  'Street Elbow', '1/2"', 'ISO Parallel', '1/2"', 'ISO Parallel', '15,000 psi', 15000, IMG_MALE),
  make('PSE-12G-SS-10K', 'Street Elbow', '3/4"', 'ISO Parallel', '3/4"', 'ISO Parallel', '10,000 psi', 10000, IMG_MALE),
  make('PSE-16G-SS-10K', 'Street Elbow', '1"',   'ISO Parallel', '1"',   'ISO Parallel', '10,000 psi', 10000, IMG_MALE),
]

export const PIPE_ELBOW_DESCRIPTION = {
  title: 'HP Pipe Fittings — Elbows',
  description:
    'Panam High Pressure Elbows in SS 316. Male, Female, Swivel Male, Swivel Union, and Street Elbows in NPT and ISO Parallel thread connections. 10,000 to 15,000 psi. Sizes from 1/8" to 1 1/2".',
  specs: [
    'Male · Female · Street · Swivel Male · Swivel Union Elbow',
    'SS 316',
    '10,000 & 15,000 psi',
    'NPT · ISO Parallel',
    '1/8" – 1 1/2"',
  ],
}