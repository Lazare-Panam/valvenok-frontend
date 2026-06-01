export interface HPNippleDTO {
  id: string
  partNumber: string
  connectionType: string
  tubeOD: string
  tubeID: string
  length: string
  pressureRating: string
  pressurePsi: number
  material: string
  imageUrl: string
  description: string
}

export interface HPNippleFilters {
  connectionTypes: string[]
  tubeODs: string[]
  lengths: string[]
  pressureRatings: string[]
}

export const EMPTY_NIPPLE_FILTERS: HPNippleFilters = {
  connectionTypes: [],
  tubeODs: [],
  lengths: [],
  pressureRatings: [],
}

export interface AvailableCountsNipple {
  connectionTypes: Record<string, number>
  tubeODs: Record<string, number>
  lengths: Record<string, number>
  pressureRatings: Record<string, number>
}

export function applyFilters(
  data: HPNippleDTO[],
  filters: HPNippleFilters,
  exclude: keyof HPNippleFilters | ''
): HPNippleDTO[] {
  return data.filter(c => {
    if (exclude !== 'connectionTypes' && filters.connectionTypes.length && !filters.connectionTypes.includes(c.connectionType)) return false
    if (exclude !== 'tubeODs'         && filters.tubeODs.length         && !filters.tubeODs.includes(c.tubeOD))                return false
    if (exclude !== 'lengths'         && filters.lengths.length         && !filters.lengths.includes(c.length))                return false
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

const IMAGE = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-cone.png'

const make = (
  pn: string,
  connectionType: string,
  tubeOD: string,
  tubeID: string,
  length: string,
  pressureRating: string,
  pressurePsi: number,
): HPNippleDTO => ({
  id: pn,
  partNumber: pn,
  connectionType,
  tubeOD,
  tubeID,
  length,
  pressureRating,
  pressurePsi,
  material: 'SS 316',
  imageUrl: IMAGE,
  description: `Panam HP Cone & Thread Nipple ${pn}, ${connectionType}, ${tubeOD} OD, ${length}" length, SS 316, ${pressureRating}.`,
})

export const HP_NIPPLE_DATA: HPNippleDTO[] = [
  make('PTN-4M-2.75-SS', 'MP Cone & Thread (4MF)', '1/4"',  '0.109" (2.77)',  '2.75" (69.85)', '20,000 psi', 20000),
  make('PTN-4M-3-SS',    'MP Cone & Thread (4MF)', '1/4"',  '0.109" (2.77)',  '3" (76.2)',     '20,000 psi', 20000),
  make('PTN-4M-4-SS',    'MP Cone & Thread (4MF)', '1/4"',  '0.109" (2.77)',  '4" (101.6)',    '20,000 psi', 20000),
  make('PTN-4M-6-SS',    'MP Cone & Thread (4MF)', '1/4"',  '0.109" (2.77)',  '6" (152.4)',    '20,000 psi', 20000),
  make('PTN-4M-8-SS',    'MP Cone & Thread (4MF)', '1/4"',  '0.109" (2.77)',  '8" (203.2)',    '20,000 psi', 20000),
  make('PTN-4M-10-SS',   'MP Cone & Thread (4MF)', '1/4"',  '0.109" (2.77)',  '10" (203.2)',   '20,000 psi', 20000),
  make('PTN-4M-12-SS',   'MP Cone & Thread (4MF)', '1/4"',  '0.109" (2.77)',  '12" (304.8)',   '20,000 psi', 20000),
  make('PTN-6M-3-SS',    'MP Cone & Thread (6MF)', '3/8"',  '0.203" (5.17)',  '3" (76.2)',     '20,000 psi', 20000),
  make('PTN-6M-4-SS',    'MP Cone & Thread (6MF)', '3/8"',  '0.203" (5.17)',  '4" (101.6)',    '20,000 psi', 20000),
  make('PTN-6M-6-SS',    'MP Cone & Thread (6MF)', '3/8"',  '0.203" (5.17)',  '6" (152.4)',    '20,000 psi', 20000),
  make('PTN-6M-8-SS',    'MP Cone & Thread (6MF)', '3/8"',  '0.203" (5.17)',  '8" (203.2)',    '20,000 psi', 20000),
  make('PTN-6M-10-SS',   'MP Cone & Thread (6MF)', '3/8"',  '0.203" (5.17)',  '10" (203.2)',   '20,000 psi', 20000),
  make('PTN-6M-12-SS',   'MP Cone & Thread (6MF)', '3/8"',  '0.203" (5.17)',  '12" (304.8)',   '20,000 psi', 20000),
  make('PTN-9M-4-SS',    'MP Cone & Thread (9MF)', '9/16"', '0.438" (11.13)', '4" (101.6)',    '20,000 psi', 20000),
  make('PTN-9M-6-SS',    'MP Cone & Thread (9MF)', '9/16"', '0.438" (11.13)', '6" (152.4)',    '20,000 psi', 20000),
  make('PTN-9M-8-SS',    'MP Cone & Thread (9MF)', '9/16"', '0.438" (11.13)', '8" (203.2)',    '20,000 psi', 20000),
  make('PTN-9M-10-SS',   'MP Cone & Thread (9MF)', '9/16"', '0.438" (11.13)', '10" (203.2)',   '20,000 psi', 20000),
  make('PTN-9M-12-SS',   'MP Cone & Thread (9MF)', '9/16"', '0.438" (11.13)', '12" (304.8)',   '20,000 psi', 20000),
  make('PTN-12M-6-SS',   'MP Cone & Thread (12MF)','3/4"',  '0.562" (14.27)', '6" (152.4)',    '20,000 psi', 20000),
  make('PTN-12M-8-SS',   'MP Cone & Thread (12MF)','3/4"',  '0.562" (14.27)', '8" (203.2)',    '20,000 psi', 20000),
  make('PTN-12M-10-SS',  'MP Cone & Thread (12MF)','3/4"',  '0.562" (14.27)', '10" (203.2)',   '20,000 psi', 20000),
  make('PTN-12M-12-SS',  'MP Cone & Thread (12MF)','3/4"',  '0.562" (14.27)', '12" (304.8)',   '20,000 psi', 20000),
  make('PTN-16M-6-SS',   'MP Cone & Thread (16MF)','1"',    '0.562" (14.27)', '6" (152.4)',    '20,000 psi', 20000),
  make('PTN-16M-8-SS',   'MP Cone & Thread (16MF)','1"',    '0.562" (14.27)', '8" (203.2)',    '20,000 psi', 20000),
  make('PTN-16M-10-SS',  'MP Cone & Thread (16MF)','1"',    '0.562" (14.27)', '10" (203.2)',   '20,000 psi', 20000),
  make('PTN-16M-12-SS',  'MP Cone & Thread (16MF)','1"',    '0.562" (14.27)', '12" (304.8)',   '20,000 psi', 20000),
  make('PTN-4H-2.75-SS', 'HP Cone & Thread (4HF)', '1/4"',  '0.083" (2.11)',  '2.75" (69.85)', '60,000 psi', 60000),
  make('PTN-4H-3-SS',    'HP Cone & Thread (4HF)', '1/4"',  '0.083" (2.11)',  '3" (76.2)',     '60,000 psi', 60000),
  make('PTN-4H-4-SS',    'HP Cone & Thread (4HF)', '1/4"',  '0.083" (2.11)',  '4" (101.6)',    '60,000 psi', 60000),
  make('PTN-4H-6-SS',    'HP Cone & Thread (4HF)', '1/4"',  '0.083" (2.11)',  '6" (152.4)',    '60,000 psi', 60000),
  make('PTN-4H-8-SS',    'HP Cone & Thread (4HF)', '1/4"',  '0.083" (2.11)',  '8" (203.2)',    '60,000 psi', 60000),
  make('PTN-4H-10-SS',   'HP Cone & Thread (4HF)', '1/4"',  '0.083" (2.11)',  '10" (203.2)',   '60,000 psi', 60000),
  make('PTN-4H-12-SS',   'HP Cone & Thread (4HF)', '1/4"',  '0.083" (2.11)',  '12" (304.8)',   '60,000 psi', 60000),
  make('PTN-6H-3-SS',    'HP Cone & Thread (6HF)', '3/8"',  '0.188" (4.77)',  '3" (76.2)',     '60,000 psi', 60000),
  make('PTN-6H-4-SS',    'HP Cone & Thread (6HF)', '3/8"',  '0.188" (4.77)',  '4" (101.6)',    '60,000 psi', 60000),
  make('PTN-6H-6-SS',    'HP Cone & Thread (6HF)', '3/8"',  '0.188" (4.77)',  '6" (152.4)',    '60,000 psi', 60000),
  make('PTN-6H-8-SS',    'HP Cone & Thread (6HF)', '3/8"',  '0.188" (4.77)',  '8" (203.2)',    '60,000 psi', 60000),
  make('PTN-6H-10-SS',   'HP Cone & Thread (6HF)', '3/8"',  '0.188" (4.77)',  '10" (203.2)',   '60,000 psi', 60000),
  make('PTN-6H-12-SS',   'HP Cone & Thread (6HF)', '3/8"',  '0.188" (4.77)',  '12" (304.8)',   '60,000 psi', 60000),
  make('PTN-9H-4-SS',    'HP Cone & Thread (9HF)', '9/16"', '0.188" (4.77)',  '4" (101.6)',    '60,000 psi', 60000),
  make('PTN-9H-6-SS',    'HP Cone & Thread (9HF)', '9/16"', '0.188" (4.77)',  '6" (152.4)',    '60,000 psi', 60000),
  make('PTN-9H-8-SS',    'HP Cone & Thread (9HF)', '9/16"', '0.188" (4.77)',  '8" (203.2)',    '60,000 psi', 60000),
  make('PTN-9H-10-SS',   'HP Cone & Thread (9HF)', '9/16"', '0.188" (4.77)',  '10" (203.2)',   '60,000 psi', 60000),
  make('PTN-9H-12-SS',   'HP Cone & Thread (9HF)', '9/16"', '0.188" (4.77)',  '12" (304.8)',   '60,000 psi', 60000),
]

export const HP_NIPPLE_DESCRIPTION = {
  title: 'HP Cone & Threaded Nipples',
  description:
    'Panam HP Cone & Threaded Nipples in SS 316. MP Cone & Thread at 20,000 psi and HP Cone & Thread at 60,000 psi. Available in 1/4", 3/8", 9/16", 3/4" and 1" OD across multiple lengths from 2.75" to 12".',
  specs: [
    'MP Cone & Thread · HP Cone & Thread',
    'SS 316',
    '20,000 & 60,000 psi',
    '1/4" · 3/8" · 9/16" · 3/4" · 1" OD',
    '2.75" – 12" Lengths',
  ],
}