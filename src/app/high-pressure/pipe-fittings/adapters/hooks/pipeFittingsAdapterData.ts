export interface PipeAdapterDTO {
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

export interface PipeAdapterFilters {
  fittingTypes: string[]
  pressureRatings: string[]
  p1Threads: string[]
  p1Sizes: string[]
  p2Threads: string[]
  p2Sizes: string[]
}

export const EMPTY_ADAPTER_PIPE_FILTERS: PipeAdapterFilters = {
  fittingTypes: [],
  pressureRatings: [],
  p1Threads: [],
  p1Sizes: [],
  p2Threads: [],
  p2Sizes: [],
}

export interface AvailableCountsPipeAdapter {
  fittingTypes: Record<string, number>
  pressureRatings: Record<string, number>
  p1Threads: Record<string, number>
  p1Sizes: Record<string, number>
  p2Threads: Record<string, number>
  p2Sizes: Record<string, number>
}

export function applyFilters(
  data: PipeAdapterDTO[],
  filters: PipeAdapterFilters,
  exclude: keyof PipeAdapterFilters | ''
): PipeAdapterDTO[] {
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

const IMG = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/adapters.jpg'

const make = (
  pn: string,
  fittingType: string,
  p1Size: string,
  p1Thread: string,
  p2Size: string,
  p2Thread: string,
  pressureRating: string,
  pressurePsi: number,
): PipeAdapterDTO => ({
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
  imageUrl: IMG,
  description: `Panam ${fittingType} ${pn}, P1: ${p1Size} ${p1Thread}, P2: ${p2Size} ${p2Thread}, SS 316, ${pressureRating}.`,
})

export const PIPE_ADAPTER_DATA: PipeAdapterDTO[] = [
  make('PA-2N-4N-SS-15K',  'Adapter', '1/8"', 'NPT', '1/4"', 'NPT', '15,000 psi', 15000),
  make('PA-2N-6N-SS-15K',  'Adapter', '1/8"', 'NPT', '3/8"', 'NPT', '15,000 psi', 15000),
  make('PA-2N-8N-SS-15K',  'Adapter', '1/8"', 'NPT', '1/2"', 'NPT', '15,000 psi', 15000),
  make('PA-2N-12N-SS-10K', 'Adapter', '1/8"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PA-2N-16N-SS-10K', 'Adapter', '1/8"', 'NPT', '1"',   'NPT', '10,000 psi', 10000),
  make('PA-4N-2N-SS-15K',  'Adapter', '1/4"', 'NPT', '1/8"', 'NPT', '15,000 psi', 15000),
  make('PA-4N-6N-SS-15K',  'Adapter', '1/4"', 'NPT', '3/8"', 'NPT', '15,000 psi', 15000),
  make('PA-4N-8N-SS-15K',  'Adapter', '1/4"', 'NPT', '1/2"', 'NPT', '15,000 psi', 15000),
  make('PA-4N-12N-SS-10K', 'Adapter', '1/4"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PA-4N-16N-SS-10K', 'Adapter', '1/4"', 'NPT', '1"',   'NPT', '10,000 psi', 10000),
  make('PA-6N-2N-SS-15K',  'Adapter', '3/8"', 'NPT', '1/8"', 'NPT', '15,000 psi', 15000),
  make('PA-6N-4N-SS-15K',  'Adapter', '3/8"', 'NPT', '1/4"', 'NPT', '15,000 psi', 15000),
  make('PA-6N-8N-SS-15K',  'Adapter', '3/8"', 'NPT', '1/2"', 'NPT', '15,000 psi', 15000),
  make('PA-6N-12N-SS-10K', 'Adapter', '3/8"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PA-6N-16N-SS-10K', 'Adapter', '3/8"', 'NPT', '1"',   'NPT', '10,000 psi', 10000),
  make('PA-8N-2N-SS-15K',  'Adapter', '1/2"', 'NPT', '1/8"', 'NPT', '15,000 psi', 15000),
  make('PA-8N-4N-SS-15K',  'Adapter', '1/2"', 'NPT', '1/4"', 'NPT', '15,000 psi', 15000),
  make('PA-8N-6N-SS-15K',  'Adapter', '1/2"', 'NPT', '3/8"', 'NPT', '15,000 psi', 15000),
  make('PA-8N-12N-SS-10K', 'Adapter', '1/2"', 'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PA-8N-16N-SS-10K', 'Adapter', '1/2"', 'NPT', '1"',   'NPT', '10,000 psi', 10000),
  make('PA-12N-2N-SS-10K', 'Adapter', '3/4"', 'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PA-12N-4N-SS-10K', 'Adapter', '3/4"', 'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PA-12N-6N-SS-10K', 'Adapter', '3/4"', 'NPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PA-12N-8N-SS-10K', 'Adapter', '3/4"', 'NPT', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PA-12N-16N-SS-10K','Adapter', '3/4"', 'NPT', '1"',   'NPT', '10,000 psi', 10000),
  make('PA-16N-2N-SS-10K', 'Adapter', '1"',   'NPT', '1/8"', 'NPT', '10,000 psi', 10000),
  make('PA-16N-4N-SS-10K', 'Adapter', '1"',   'NPT', '1/4"', 'NPT', '10,000 psi', 10000),
  make('PA-16N-6N-SS-10K', 'Adapter', '1"',   'NPT', '3/8"', 'NPT', '10,000 psi', 10000),
  make('PA-16N-8N-SS-10K', 'Adapter', '1"',   'NPT', '1/2"', 'NPT', '10,000 psi', 10000),
  make('PA-16N-12N-SS-10K','Adapter', '1"',   'NPT', '3/4"', 'NPT', '10,000 psi', 10000),
  make('PA-2G-4G-SS-15K',  'Adapter', '1/8"', 'ISO Parallel', '1/4"', 'ISO Parallel', '15,000 psi', 15000),
  make('PA-2G-6G-SS-15K',  'Adapter', '1/8"', 'ISO Parallel', '3/8"', 'ISO Parallel', '15,000 psi', 15000),
  make('PA-2G-8G-SS-15K',  'Adapter', '1/8"', 'ISO Parallel', '1/2"', 'ISO Parallel', '15,000 psi', 15000),
  make('PA-2G-10G-SS-10K', 'Adapter', '1/8"', 'ISO Parallel', '5/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-12G-4G-SS-10K', 'Adapter', '3/4"', 'ISO Parallel', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-12G-6G-SS-10K', 'Adapter', '3/4"', 'ISO Parallel', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-12G-8G-SS-10K', 'Adapter', '3/4"', 'ISO Parallel', '1/2"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-16G-4G-SS-10K', 'Adapter', '1"',   'ISO Parallel', '1/4"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-16G-6G-SS-10K', 'Adapter', '1"',   'ISO Parallel', '3/8"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-16G-8G-SS-10K', 'Adapter', '1"',   'ISO Parallel', '1/2"', 'ISO Parallel', '10,000 psi', 10000),
  make('PA-16G-12G-SS-10K','Adapter', '1"',   'ISO Parallel', '3/4"', 'ISO Parallel', '10,000 psi', 10000),
]

export const PIPE_ADAPTER_DESCRIPTION = {
  title: 'HP Pipe Fittings — Size Adapters',
  description:
    'Panam High Pressure Size Adapters in SS 316. Each adapter changes size only, with the same thread type at both ends: NPT to NPT, or ISO parallel (BSPP) to ISO parallel (BSPP). 10,000 to 15,000 psi. Sizes from 1/8" to 1".',
  specs: [
    'Size Adapter',
    'SS 316',
    '10,000 & 15,000 psi',
    'NPT · ISO parallel (BSPP)',
    '1/8" – 1"',
  ],
}
