export interface HPBallValveDTO {
  id: string
  partNumber: string
  series: string
  pressureRating: string
  pressurePsi: number
  configuration: string
  material: string
  connectionSize: string
  connectionType: string
  imageUrl: string
  description: string
}

export interface HPBallValveFilters {
  series: string[]
  pressureRatings: string[]
  configurations: string[]
  connectionSizes: string[]
  connectionTypes: string[]
}

export const EMPTY_HPBV_FILTERS: HPBallValveFilters = {
  series: [],
  pressureRatings: [],
  configurations: [],
  connectionSizes: [],
  connectionTypes: [],
}

export interface AvailableCountsHPBV {
  series: Record<string, number>
  pressureRatings: Record<string, number>
  configurations: Record<string, number>
  connectionSizes: Record<string, number>
  connectionTypes: Record<string, number>
}

export function applyFilters(
  data: HPBallValveDTO[],
  filters: HPBallValveFilters,
  exclude: keyof HPBallValveFilters | ''
): HPBallValveDTO[] {
  return data.filter(c => {
    if (exclude !== 'series'          && filters.series.length          && !filters.series.includes(c.series))                  return false
    if (exclude !== 'pressureRatings' && filters.pressureRatings.length && !filters.pressureRatings.includes(c.pressureRating)) return false
    if (exclude !== 'configurations'  && filters.configurations.length  && !filters.configurations.includes(c.configuration))   return false
    if (exclude !== 'connectionSizes' && filters.connectionSizes.length && !filters.connectionSizes.includes(c.connectionSize))  return false
    if (exclude !== 'connectionTypes' && filters.connectionTypes.length && !filters.connectionTypes.includes(c.connectionType))  return false
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

const IMAGE = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-bv.jpg'

const make = (
  pn: string,
  series: string,
  psi: number,
  pressureRating: string,
  configuration: string,
  connectionSize: string,
  connectionType: string,
): HPBallValveDTO => ({
  id: pn,
  partNumber: pn,
  series,
  pressureRating,
  pressurePsi: psi,
  configuration,
  material: 'SS 316',
  connectionSize,
  connectionType,
  imageUrl: IMAGE,
  description: `Panam HP Ball Valve ${pn}, ${series} Series (${pressureRating}), SS 316, ${configuration}, ${connectionSize} ${connectionType}.`,
})

export const HP_BALL_VALVE_DATA: HPBallValveDTO[] = [
  make('PBV-HP2-3-4-S-4MF',  'HP2', 20000, '20,000 psi', '3-Way 180° Turn', '1/4"',  'MP Cone & Thread Female'),
  make('PBV-HP2-3-4-S-6MF',  'HP2', 20000, '20,000 psi', '3-Way 180° Turn', '3/8"',  'MP Cone & Thread Female'),
  make('PBV-HP2-3-4-S-9MF',  'HP2', 20000, '20,000 psi', '3-Way 180° Turn', '9/16"', 'MP Cone & Thread Female'),
  make('PBV-HP2-3-6-S-6MF',  'HP2', 15000, '15,000 psi', '3-Way 180° Turn', '3/8"',  'MP Cone & Thread Female'),
  make('PBV-HP2-3-6-S-9MF',  'HP2', 15000, '15,000 psi', '3-Way 180° Turn', '9/16"', 'MP Cone & Thread Female'),
  make('PBV-HP2-3-6-S-12MF', 'HP2', 15000, '15,000 psi', '3-Way 180° Turn', '3/4"',  'MP Cone & Thread Female'),
  make('PBV-HP1-3-4-S-4NF',  'HP1', 15000, '15,000 psi', '3-Way 180° Turn', '1/4"',  'NPT Female'),
  make('PBV-HP1-3-4-S-6NF',  'HP1', 15000, '15,000 psi', '3-Way 180° Turn', '3/8"',  'NPT Female'),
  make('PBV-HP1-3-6-S-8NF',  'HP1', 15000, '15,000 psi', '3-Way 180° Turn', '1/2"',  'NPT Female'),
  make('PBV-HP-3-8-S-12MF',  'HP',  10000, '10,000 psi', '3-Way 180° Turn', '3/4"',  'MP Cone & Thread Female'),
  make('PBV-HP-3-8-S-16MF',  'HP',  10000, '10,000 psi', '3-Way 180° Turn', '1"',    'MP Cone & Thread Female'),
  make('PBV-HP2-3D-4-S-4MF',  'HP2', 20000, '20,000 psi', '3-Way 90° Turn Diverter', '1/4"',  'MP Cone & Thread Female'),
  make('PBV-HP2-3D-4-S-6MF',  'HP2', 20000, '20,000 psi', '3-Way 90° Turn Diverter', '3/8"',  'MP Cone & Thread Female'),
  make('PBV-HP2-3D-4-S-9MF',  'HP2', 20000, '20,000 psi', '3-Way 90° Turn Diverter', '9/16"', 'MP Cone & Thread Female'),
  make('PBV-HP2-3D-6-S-6MF',  'HP2', 15000, '15,000 psi', '3-Way 90° Turn Diverter', '3/8"',  'MP Cone & Thread Female'),
  make('PBV-HP2-3D-6-S-9MF',  'HP2', 15000, '15,000 psi', '3-Way 90° Turn Diverter', '9/16"', 'MP Cone & Thread Female'),
  make('PBV-HP2-3D-6-S-12MF', 'HP2', 15000, '15,000 psi', '3-Way 90° Turn Diverter', '3/4"',  'MP Cone & Thread Female'),
  make('PBV-HP1-3D-4-S-4NF',  'HP1', 15000, '15,000 psi', '3-Way 90° Turn Diverter', '1/4"',  'NPT Female'),
  make('PBV-HP1-3D-4-S-6NF',  'HP1', 15000, '15,000 psi', '3-Way 90° Turn Diverter', '3/8"',  'NPT Female'),
  make('PBV-HP1-3D-6-S-8NF',  'HP1', 15000, '15,000 psi', '3-Way 90° Turn Diverter', '1/2"',  'NPT Female'),
  make('PBV-HP-3D-8-S-12MF',  'HP',  10000, '10,000 psi', '3-Way 90° Turn Diverter', '3/4"',  'MP Cone & Thread Female'),
  make('PBV-HP-3D-8-S-16MF',  'HP',  10000, '10,000 psi', '3-Way 90° Turn Diverter', '1"',    'MP Cone & Thread Female'),
  make('PBV-HP2-2-4-S-4MF',  'HP2', 20000, '20,000 psi', '2-Way', '1/4"',  'MP Cone & Thread Female'),
  make('PBV-HP2-2-4-S-6MF',  'HP2', 20000, '20,000 psi', '2-Way', '3/8"',  'MP Cone & Thread Female'),
  make('PBV-HP2-2-4-S-9MF',  'HP2', 20000, '20,000 psi', '2-Way', '9/16"', 'MP Cone & Thread Female'),
  make('PBV-HP2-2-6-S-6MF',  'HP2', 20000, '20,000 psi', '2-Way', '3/8"',  'MP Cone & Thread Female'),
  make('PBV-HP2-2-6-S-9MF',  'HP2', 20000, '20,000 psi', '2-Way', '9/16"', 'MP Cone & Thread Female'),
  make('PBV-HP2-2-6-S-12MF', 'HP2', 20000, '20,000 psi', '2-Way', '3/4"',  'MP Cone & Thread Female'),
  make('PBV-HP1-2-8-S-12MF', 'HP1', 15000, '15,000 psi', '2-Way', '3/4"',  'MP Cone & Thread Female'),
  make('PBV-HP1-2-8-S-16MF', 'HP1', 15000, '15,000 psi', '2-Way', '1"',    'MP Cone & Thread Female'),
  make('PBV-HP1-2-4-S-4NF',  'HP1', 15000, '15,000 psi', '2-Way', '1/4"',  'NPT Female'),
  make('PBV-HP1-2-4-S-6NF',  'HP1', 15000, '15,000 psi', '2-Way', '3/8"',  'NPT Female'),
  make('PBV-HP1-2-6-S-8NF',  'HP1', 15000, '15,000 psi', '2-Way', '1/2"',  'NPT Female'),
]

export const HP_BV_DESCRIPTION = {
  title: 'High Pressure Ball Valves',
  description:
    'Panam HP Ball Valves in SS 316 across three pressure series — HP (10,000 psi), HP1 (15,000 psi), and HP2 (20,000 psi). 2-Way, 3-Way 180° Turn, and 3-Way 90° Turn Diverter configurations. NPT Female and MP Cone & Thread Female connections.',
  specs: [
    'HP · HP1 · HP2',
    'SS 316',
    '10,000 – 20,000 psi',
    '2-Way · 3-Way 180° · 3-Way 90° Diverter',
    'NPT Female · MP Cone & Thread',
  ],
}