export interface PipeEndFittingDTO {
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

export interface PipeEndFittingFilters {
  fittingTypes: string[]
  pressureRatings: string[]
  p1Threads: string[]
  p1Sizes: string[]
}

export const EMPTY_PIPE_END_FILTERS: PipeEndFittingFilters = {
  fittingTypes: [],
  pressureRatings: [],
  p1Threads: [],
  p1Sizes: [],
}

export interface AvailableCountsPipeEnd {
  fittingTypes: Record<string, number>
  pressureRatings: Record<string, number>
  p1Threads: Record<string, number>
  p1Sizes: Record<string, number>
}

export function applyFilters(
  data: PipeEndFittingDTO[],
  filters: PipeEndFittingFilters,
  exclude: keyof PipeEndFittingFilters | ''
): PipeEndFittingDTO[] {
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

const IMG_PLUG     = 'https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/TUBE_PLUG.jpg'
const IMG_PIPE_CAP = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/pipe-cap-hp.jpg'

const make = (
  pn: string,
  fittingType: string,
  p1Size: string,
  p1Thread: string,
  pressureRating: string,
  pressurePsi: number,
  imageUrl: string,
): PipeEndFittingDTO => ({
  id: `${pn}-${p1Size}`,
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

export const PIPE_END_DATA: PipeEndFittingDTO[] = [
  make('PHP-2N-SS-15K',  'Hex Plug', '1/8"',   'NPT',          '15,000 psi', 15000, IMG_PLUG),
  make('PHP-4N-SS-15K',  'Hex Plug', '1/4"',   'NPT',          '15,000 psi', 15000, IMG_PLUG),
  make('PHP-6N-SS-15K',  'Hex Plug', '3/8"',   'NPT',          '15,000 psi', 15000, IMG_PLUG),
  make('PHP-8N-SS-15K',  'Hex Plug', '1/2"',   'NPT',          '15,000 psi', 15000, IMG_PLUG),
  make('PHP-12N-SS-10K', 'Hex Plug', '3/4"',   'NPT',          '10,000 psi', 10000, IMG_PLUG),
  make('PHP-16N-SS-10K', 'Hex Plug', '1"',     'NPT',          '10,000 psi', 10000, IMG_PLUG),
  make('PHP-2G-SS-15K',  'Hex Plug', '1/8"',   'ISO Parallel', '15,000 psi', 15000, IMG_PLUG),
  make('PHP-4G-SS-15K',  'Hex Plug', '1/4"',   'ISO Parallel', '15,000 psi', 15000, IMG_PLUG),
  make('PHP-6G-SS-15K',  'Hex Plug', '3/8"',   'ISO Parallel', '15,000 psi', 15000, IMG_PLUG),
  make('PHP-8G-SS-15K',  'Hex Plug', '1/2"',   'ISO Parallel', '15,000 psi', 15000, IMG_PLUG),
  make('PHP-10G-SS-10K', 'Hex Plug', '5/8"',   'ISO Parallel', '10,000 psi', 10000, IMG_PLUG),
  make('PHP-12G-SS-10K', 'Hex Plug', '3/4"',   'ISO Parallel', '10,000 psi', 10000, IMG_PLUG),
  make('PHP-16G-SS-10K', 'Hex Plug', '1"',     'ISO Parallel', '10,000 psi', 10000, IMG_PLUG),
  make('PHP-20G-SS-10K', 'Hex Plug', '1 1/4"', 'ISO Parallel', '10,000 psi', 10000, IMG_PLUG),
  make('PHP-24G-SS-10K', 'Hex Plug', '1 1/2"', 'ISO Parallel', '10,000 psi', 10000, IMG_PLUG),
  make('PHP-32G-SS-10K', 'Hex Plug', '2"',     'ISO Parallel', '10,000 psi', 10000, IMG_PLUG),
  make('PTP-4J-SS-10K',  'Tube Plug', '1/4"',  '37° JIC', '10,000 psi', 10000, IMG_PLUG),
  make('PTP-5J-SS-10K',  'Tube Plug', '5/16"', '37° JIC', '10,000 psi', 10000, IMG_PLUG),
  make('PTP-6J-SS-10K',  'Tube Plug', '3/8"',  '37° JIC', '10,000 psi', 10000, IMG_PLUG),
  make('PTP-8J-SS-10K',  'Tube Plug', '1/2"',  '37° JIC', '10,000 psi', 10000, IMG_PLUG),
  make('PTP-10J-SS-10K', 'Tube Plug', '5/8"',  '37° JIC', '10,000 psi', 10000, IMG_PLUG),
  make('PTP-12J-SS-10K', 'Tube Plug', '3/4"',  '37° JIC', '10,000 psi', 10000, IMG_PLUG),
  make('PTP-16J-SS-10K', 'Tube Plug', '1"',    '37° JIC', '10,000 psi', 10000, IMG_PLUG),
  make('PPC-2N-SS-15K',  'Pipe Cap', '1/8"',   'NPT',          '15,000 psi', 15000, IMG_PIPE_CAP),
  make('PPC-4N-SS-15K',  'Pipe Cap', '1/4"',   'NPT',          '15,000 psi', 15000, IMG_PIPE_CAP),
  make('PPC-6N-SS-15K',  'Pipe Cap', '3/8"',   'NPT',          '15,000 psi', 15000, IMG_PIPE_CAP),
  make('PPC-8N-SS-15K',  'Pipe Cap', '1/2"',   'NPT',          '15,000 psi', 15000, IMG_PIPE_CAP),
  make('PPC-12N-SS-10K', 'Pipe Cap', '3/4"',   'NPT',          '10,000 psi', 10000, IMG_PIPE_CAP),
  make('PPC-16N-SS-10K', 'Pipe Cap', '1"',     'NPT',          '10,000 psi', 10000, IMG_PIPE_CAP),
  make('PPC-2G-SS-15K',  'Pipe Cap', '1/8"',   'ISO Parallel', '15,000 psi', 15000, IMG_PIPE_CAP),
  make('PPC-4G-SS-15K',  'Pipe Cap', '1/4"',   'ISO Parallel', '15,000 psi', 15000, IMG_PIPE_CAP),
  make('PPC-6G-SS-15K',  'Pipe Cap', '3/8"',   'ISO Parallel', '15,000 psi', 15000, IMG_PIPE_CAP),
  make('PPC-8G-SS-15K',  'Pipe Cap', '1/2"',   'ISO Parallel', '15,000 psi', 15000, IMG_PIPE_CAP),
  make('PPC-12G-SS-10K', 'Pipe Cap', '3/4"',   'ISO Parallel', '10,000 psi', 10000, IMG_PIPE_CAP),
  make('PPC-16G-SS-10K', 'Pipe Cap', '1"',     'ISO Parallel', '10,000 psi', 10000, IMG_PIPE_CAP),
]

export const PIPE_END_DESCRIPTION = {
  title: 'HP Pipe Fittings — Plugs & Caps',
  description:
    'Panam High Pressure Hex Plugs, Tube Plugs and Pipe Caps in SS 316. NPT, ISO Parallel and 37° JIC thread connections. 10,000 to 15,000 psi. Sizes from 1/8" to 2".',
  specs: [
    'Hex Plug · Tube Plug · Pipe Cap',
    'SS 316',
    '10,000 & 15,000 psi',
    'NPT · ISO Parallel · 37° JIC',
    '1/8" – 2"',
  ],
}