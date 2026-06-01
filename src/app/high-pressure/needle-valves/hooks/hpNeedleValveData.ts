export interface HPNeedleValveDTO {
  id: string
  partNumber: string
  series: string
  pressureRating: string
  pressurePsi: number
  material: string
  connectionSize: string
  connectionType: string
  configuration: string
  imageUrl: string
  description: string
}

export interface HPNeedleValveFilters {
  series: string[]
  pressureRatings: string[]
  connectionSizes: string[]
  connectionTypes: string[]
  configurations: string[]
}

export const EMPTY_HP_FILTERS: HPNeedleValveFilters = {
  series: [],
  pressureRatings: [],
  connectionSizes: [],
  connectionTypes: [],
  configurations: [],
}

export interface AvailableCountsHP {
  series: Record<string, number>
  pressureRatings: Record<string, number>
  connectionSizes: Record<string, number>
  connectionTypes: Record<string, number>
  configurations: Record<string, number>
}

export function applyFilters(
  data: HPNeedleValveDTO[],
  filters: HPNeedleValveFilters,
  exclude: keyof HPNeedleValveFilters | ''
): HPNeedleValveDTO[] {
  return data.filter(c => {
    if (exclude !== 'series'          && filters.series.length          && !filters.series.includes(c.series))                  return false
    if (exclude !== 'pressureRatings' && filters.pressureRatings.length && !filters.pressureRatings.includes(c.pressureRating)) return false
    if (exclude !== 'connectionSizes' && filters.connectionSizes.length && !filters.connectionSizes.includes(c.connectionSize)) return false
    if (exclude !== 'connectionTypes' && filters.connectionTypes.length && !filters.connectionTypes.includes(c.connectionType)) return false
    if (exclude !== 'configurations'  && filters.configurations.length  && !filters.configurations.includes(c.configuration))   return false
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

const IMAGE = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-nv.jpg'

const make = (
  pn: string,
  series: string,
  psi: number,
  pressureRating: string,
  connectionSize: string,
  connectionType: string,
  configuration: string
): HPNeedleValveDTO => ({
  id: pn,
  partNumber: pn,
  series,
  pressureRating,
  pressurePsi: psi,
  material: 'SS 316',
  connectionSize,
  connectionType,
  configuration,
  imageUrl: IMAGE,
  description: `Panam HP Needle Valve ${pn}, ${series} Series (${pressureRating}), SS 316, ${connectionSize} ${connectionType}${configuration !== 'Straight' ? `, ${configuration}` : ''}.`,
})

export const HP_NEEDLE_VALVE_DATA: HPNeedleValveDTO[] = [
  make('PNV-HP-S-2NF',    'HP', 10000, '10,000 psi', '1/8"',   'NPT Female to Female', 'Straight'),
  make('PNV-HP-S-4NF',    'HP', 10000, '10,000 psi', '1/4"',   'NPT Female to Female', 'Straight'),
  make('PNV-HP-S-6NF',    'HP', 10000, '10,000 psi', '3/8"',   'NPT Female to Female', 'Straight'),
  make('PNV-HP-S-8NF',    'HP', 10000, '10,000 psi', '1/2"',   'NPT Female to Female', 'Straight'),
  make('PNV-HP-S-12NF',   'HP', 10000, '10,000 psi', '3/4"',   'NPT Female to Female', 'Straight'),
  make('PNV-HP-S-16NF',   'HP', 10000, '10,000 psi', '1"',     'NPT Female to Female', 'Straight'),
  make('PNV-HP-S-4NMF',   'HP', 10000, '10,000 psi', '1/4"',   'NPT Male x Female',    'Straight'),
  make('PNV-HP-S-6NMF',   'HP', 10000, '10,000 psi', '3/8"',   'NPT Male x Female',    'Straight'),
  make('PNV-HP-S-8NMF',   'HP', 10000, '10,000 psi', '1/2"',   'NPT Male x Female',    'Straight'),
  make('PNV-HP-S-12NMF',  'HP', 10000, '10,000 psi', '3/4"',   'NPT Male x Female',    'Straight'),
  make('PNV-HP-S-16NMF',  'HP', 10000, '10,000 psi', '1"',     'NPT Male x Female',    'Straight'),
  make('PNV-HP-S-4NF-A',  'HP', 10000, '10,000 psi', '1/4"',   'NPT Female to Female', 'Angle Type'),
  make('PNV-HP-S-6NF-A',  'HP', 10000, '10,000 psi', '3/8"',   'NPT Female to Female', 'Angle Type'),
  make('PNV-HP-S-8NF-A',  'HP', 10000, '10,000 psi', '1/2"',   'NPT Female to Female', 'Angle Type'),
  make('PNV-HP-S-12NF-A', 'HP', 10000, '10,000 psi', '3/4"',   'NPT Female to Female', 'Angle Type'),
  make('PNV-HP-S-16NF-A', 'HP', 10000, '10,000 psi', '1"',     'NPT Female to Female', 'Angle Type'),
  make('PNV-HP-S-4NMF-A', 'HP', 10000, '10,000 psi', '1/4"',   'NPT Male x Female',    'Angle Type'),
  make('PNV-HP-S-6NMF-A', 'HP', 10000, '10,000 psi', '3/8"',   'NPT Male x Female',    'Angle Type'),
  make('PNV-HP-S-8NMF-A', 'HP', 10000, '10,000 psi', '1/2"',   'NPT Male x Female',    'Angle Type'),
  make('PNV-HP-S-12NMF-A','HP', 10000, '10,000 psi', '3/4"',   'NPT Male x Female',    'Angle Type'),
  make('PNV-HP-S-16NMF-A','HP', 10000, '10,000 psi', '1"',     'NPT Male x Female',    'Angle Type'),
  make('PNV-HP1-S-4NF',   'HP1', 15000, '15,000 psi', '1/4"',  'NPT Female to Female', 'Straight'),
  make('PNV-HP1-S-6NF',   'HP1', 15000, '15,000 psi', '3/8"',  'NPT Female to Female', 'Straight'),
  make('PNV-HP1-S-8NF',   'HP1', 15000, '15,000 psi', '1/2"',  'NPT Female to Female', 'Straight'),
  make('PNV-HP1-S-4NMF',  'HP1', 15000, '15,000 psi', '1/4"',  'NPT Male x Female',    'Straight'),
  make('PNV-HP1-S-6NMF',  'HP1', 15000, '15,000 psi', '3/8"',  'NPT Male x Female',    'Straight'),
  make('PNV-HP1-S-8NMF',  'HP1', 15000, '15,000 psi', '1/2"',  'NPT Male x Female',    'Straight'),
  make('PNV-HP1-S-4NF-A',  'HP1', 15000, '15,000 psi', '1/4"', 'NPT Female to Female', 'Angle Type'),
  make('PNV-HP1-S-6NF-A',  'HP1', 15000, '15,000 psi', '3/8"', 'NPT Female to Female', 'Angle Type'),
  make('PNV-HP1-S-8NF-A',  'HP1', 15000, '15,000 psi', '1/2"', 'NPT Female to Female', 'Angle Type'),
  make('PNV-HP1-S-4NMF-A', 'HP1', 15000, '15,000 psi', '1/4"', 'NPT Male x Female',    'Angle Type'),
  make('PNV-HP1-S-6NMF-A', 'HP1', 15000, '15,000 psi', '3/8"', 'NPT Male x Female',    'Angle Type'),
  make('PNV-HP1-S-8NMF-A', 'HP1', 15000, '15,000 psi', '1/2"', 'NPT Male x Female',    'Angle Type'),
  make('PNV-HP1-S-4NF-M',  'HP1', 15000, '15,000 psi', '1/4"', 'NPT Female to Female', '3-Way 2 Inlets'),
  make('PNV-HP1-S-6NF-M',  'HP1', 15000, '15,000 psi', '3/8"', 'NPT Female to Female', '3-Way 2 Inlets'),
  make('PNV-HP1-S-8NF-M',  'HP1', 15000, '15,000 psi', '1/2"', 'NPT Female to Female', '3-Way 2 Inlets'),
  make('PNV-HP1-S-4NF-D',  'HP1', 15000, '15,000 psi', '1/4"', 'NPT Female to Female', '3-Way 2 Outlets'),
  make('PNV-HP1-S-6NF-D',  'HP1', 15000, '15,000 psi', '3/8"', 'NPT Female to Female', '3-Way 2 Outlets'),
  make('PNV-HP1-S-8NF-D',  'HP1', 15000, '15,000 psi', '1/2"', 'NPT Female to Female', '3-Way 2 Outlets'),
  make('PNV-HP1-S-4NF-R',  'HP1', 15000, '15,000 psi', '1/4"', 'NPT Female to Female', 'Replaceable Seat'),
  make('PNV-HP1-S-6NF-R',  'HP1', 15000, '15,000 psi', '3/8"', 'NPT Female to Female', 'Replaceable Seat'),
  make('PNV-HP1-S-8NF-R',  'HP1', 15000, '15,000 psi', '1/2"', 'NPT Female to Female', 'Replaceable Seat'),
  make('PNV-HP2-S-4MF',    'HP2', 20000, '20,000 psi', '1/4"',  'MP Cone and Thread Female', 'Straight'),
  make('PNV-HP2-S-6MF',    'HP2', 20000, '20,000 psi', '3/8"',  'MP Cone and Thread Female', 'Straight'),
  make('PNV-HP2-S-9MF',    'HP2', 20000, '20,000 psi', '9/16"', 'MP Cone and Thread Female', 'Straight'),
  make('PNV-HP2-S-12MF',   'HP2', 20000, '20,000 psi', '3/4"',  'MP Cone and Thread Female', 'Straight'),
  make('PNV-HP2-S-16MF',   'HP2', 20000, '20,000 psi', '1"',    'MP Cone and Thread Female', 'Straight'),
  make('PNV-HP2-S-4MF-A',  'HP2', 20000, '20,000 psi', '1/4"',  'MP Cone and Thread Female', 'Angle Type'),
  make('PNV-HP2-S-6MF-A',  'HP2', 20000, '20,000 psi', '3/8"',  'MP Cone and Thread Female', 'Angle Type'),
  make('PNV-HP2-S-9MF-A',  'HP2', 20000, '20,000 psi', '9/16"', 'MP Cone and Thread Female', 'Angle Type'),
  make('PNV-HP2-S-12MF-A', 'HP2', 20000, '20,000 psi', '3/4"',  'MP Cone and Thread Female', 'Angle Type'),
  make('PNV-HP2-S-16MF-A', 'HP2', 20000, '20,000 psi', '1"',    'MP Cone and Thread Female', 'Angle Type'),
  make('PNV-HP2-S-4MF-M',  'HP2', 20000, '20,000 psi', '1/4"',  'MP Cone and Thread Female', '3-Way 2 Inlets'),
  make('PNV-HP2-S-6MF-M',  'HP2', 20000, '20,000 psi', '3/8"',  'MP Cone and Thread Female', '3-Way 2 Inlets'),
  make('PNV-HP2-S-9MF-M',  'HP2', 20000, '20,000 psi', '9/16"', 'MP Cone and Thread Female', '3-Way 2 Inlets'),
  make('PNV-HP2-S-2MF-D',  'HP2', 20000, '20,000 psi', '1/8"',  'MP Cone and Thread Female', '3-Way 2 Outlets'),
  make('PNV-HP2-S-4MF-D',  'HP2', 20000, '20,000 psi', '1/4"',  'MP Cone and Thread Female', '3-Way 2 Outlets'),
  make('PNV-HP2-S-6MF-D',  'HP2', 20000, '20,000 psi', '3/8"',  'MP Cone and Thread Female', '3-Way 2 Outlets'),
  make('PNV-HP2-S-9MF-D',  'HP2', 20000, '20,000 psi', '9/16"', 'MP Cone and Thread Female', '3-Way 2 Outlets'),
  make('PNV-HP2-S-4MF-D2', 'HP2', 20000, '20,000 psi', '1/4"',  'MP Cone and Thread Female', '2-Stem Manifold'),
  make('PNV-HP2-S-6MF-D2', 'HP2', 20000, '20,000 psi', '3/8"',  'MP Cone and Thread Female', '2-Stem Manifold'),
  make('PNV-HP2-S-9MF-D2', 'HP2', 20000, '20,000 psi', '9/16"', 'MP Cone and Thread Female', '2-Stem Manifold'),
  make('PNV-HP2-S-4MF-R',  'HP2', 20000, '20,000 psi', '1/4"',  'MP Cone and Thread Female', 'Replaceable Seat'),
  make('PNV-HP2-S-6MF-R',  'HP2', 20000, '20,000 psi', '3/8"',  'MP Cone and Thread Female', 'Replaceable Seat'),
  make('PNV-HP2-S-9MF-R',  'HP2', 20000, '20,000 psi', '9/16"', 'MP Cone and Thread Female', 'Replaceable Seat'),
  make('PNV-HP2-S-12MF-R', 'HP2', 20000, '20,000 psi', '3/4"',  'MP Cone and Thread Female', 'Replaceable Seat'),
  make('PNV-HP2-S-16MF-R', 'HP2', 20000, '20,000 psi', '1"',    'MP Cone and Thread Female', 'Replaceable Seat'),
  make('PNV-HP3-S-4HF',    'HP3', 30000, '30,000 psi', '1/4"',  'HP Cone and Thread Female', 'Straight'),
  make('PNV-HP3-S-6HF',    'HP3', 30000, '30,000 psi', '3/8"',  'HP Cone and Thread Female', 'Straight'),
  make('PNV-HP3-S-9HF',    'HP3', 30000, '30,000 psi', '9/16"', 'HP Cone and Thread Female', 'Straight'),
  make('PNV-HP3-S-4HF-A',  'HP3', 30000, '30,000 psi', '1/4"',  'HP Cone and Thread Female', 'Angle Type'),
  make('PNV-HP3-S-6HF-A',  'HP3', 30000, '30,000 psi', '3/8"',  'HP Cone and Thread Female', 'Angle Type'),
  make('PNV-HP3-S-9HF-A',  'HP3', 30000, '30,000 psi', '9/16"', 'HP Cone and Thread Female', 'Angle Type'),
  make('PNV-HP3-S-4HF-M',  'HP3', 30000, '30,000 psi', '1/4"',  'HP Cone and Thread Female', '3-Way 2 Inlets'),
  make('PNV-HP3-S-6HF-M',  'HP3', 30000, '30,000 psi', '3/8"',  'HP Cone and Thread Female', '3-Way 2 Inlets'),
  make('PNV-HP3-S-9HF-M',  'HP3', 30000, '30,000 psi', '9/16"', 'HP Cone and Thread Female', '3-Way 2 Inlets'),
  make('PNV-HP3-S-4HF-D',  'HP3', 30000, '30,000 psi', '1/4"',  'HP Cone and Thread Female', '3-Way 2 Outlets'),
  make('PNV-HP3-S-6HF-D',  'HP3', 30000, '30,000 psi', '3/8"',  'HP Cone and Thread Female', '3-Way 2 Outlets'),
  make('PNV-HP3-S-9HF-D',  'HP3', 30000, '30,000 psi', '9/16"', 'HP Cone and Thread Female', '3-Way 2 Outlets'),
  make('PNV-HP3-S-4HF-D2', 'HP3', 30000, '30,000 psi', '1/4"',  'HP Cone and Thread Female', '2-Stem Manifold'),
  make('PNV-HP3-S-6HF-D2', 'HP3', 30000, '30,000 psi', '3/8"',  'HP Cone and Thread Female', '2-Stem Manifold'),
  make('PNV-HP3-S-9HF-D2', 'HP3', 30000, '30,000 psi', '9/16"', 'HP Cone and Thread Female', '2-Stem Manifold'),
  make('PNV-HP3-S-4HF-R',  'HP3', 30000, '30,000 psi', '1/4"',  'HP Cone and Thread Female', 'Replaceable Seat'),
  make('PNV-HP3-S-6HF-R',  'HP3', 30000, '30,000 psi', '3/8"',  'HP Cone and Thread Female', 'Replaceable Seat'),
  make('PNV-HP3-S-9HF-R',  'HP3', 30000, '30,000 psi', '9/16"', 'HP Cone and Thread Female', 'Replaceable Seat'),
  make('PNV-HP6-S-4HF',    'HP6', 60000, '60,000 psi', '1/4"',  'HP Cone and Thread Female', 'Straight'),
  make('PNV-HP6-S-6HF',    'HP6', 60000, '60,000 psi', '3/8"',  'HP Cone and Thread Female', 'Straight'),
  make('PNV-HP6-S-9HF',    'HP6', 60000, '60,000 psi', '9/16"', 'HP Cone and Thread Female', 'Straight'),
  make('PNV-HP6-S-4HF-A',  'HP6', 60000, '60,000 psi', '1/4"',  'HP Cone and Thread Female', 'Angle Type'),
  make('PNV-HP6-S-6HF-A',  'HP6', 60000, '60,000 psi', '3/8"',  'HP Cone and Thread Female', 'Angle Type'),
  make('PNV-HP6-S-9HF-A',  'HP6', 60000, '60,000 psi', '9/16"', 'HP Cone and Thread Female', 'Angle Type'),
  make('PNV-HP6-S-4HF-M',  'HP6', 60000, '60,000 psi', '1/4"',  'HP Cone and Thread Female', '3-Way 2 Inlets'),
  make('PNV-HP6-S-6HF-M',  'HP6', 60000, '60,000 psi', '3/8"',  'HP Cone and Thread Female', '3-Way 2 Inlets'),
  make('PNV-HP6-S-9HF-M',  'HP6', 60000, '60,000 psi', '9/16"', 'HP Cone and Thread Female', '3-Way 2 Inlets'),
  make('PNV-HP6-S-4HF-D',  'HP6', 60000, '60,000 psi', '1/4"',  'HP Cone and Thread Female', '3-Way 2 Outlets'),
  make('PNV-HP6-S-6HF-D',  'HP6', 60000, '60,000 psi', '3/8"',  'HP Cone and Thread Female', '3-Way 2 Outlets'),
  make('PNV-HP6-S-9HF-D',  'HP6', 60000, '60,000 psi', '9/16"', 'HP Cone and Thread Female', '3-Way 2 Outlets'),
  make('PNV-HP6-S-4HF-D2', 'HP6', 60000, '60,000 psi', '1/4"',  'HP Cone and Thread Female', '2-Stem Manifold'),
  make('PNV-HP6-S-6HF-D2', 'HP6', 60000, '60,000 psi', '3/8"',  'HP Cone and Thread Female', '2-Stem Manifold'),
  make('PNV-HP6-S-9HF-D2', 'HP6', 60000, '60,000 psi', '9/16"', 'HP Cone and Thread Female', '2-Stem Manifold'),
  make('PNV-HP6-S-4HF-R',  'HP6', 60000, '60,000 psi', '1/4"',  'HP Cone and Thread Female', 'Replaceable Seat'),
  make('PNV-HP6-S-6HF-R',  'HP6', 60000, '60,000 psi', '3/8"',  'HP Cone and Thread Female', 'Replaceable Seat'),
  make('PNV-HP6-S-9HF-R',  'HP6', 60000, '60,000 psi', '9/16"', 'HP Cone and Thread Female', 'Replaceable Seat'),
]

export const HP_NV_DESCRIPTION = {
  title: 'High Pressure Needle Valves',
  description:
    'Panam HP Needle Valves in SS 316 across five pressure series — HP (10,000 psi), HP1 (15,000 psi), HP2 (20,000 psi), HP3 (30,000 psi), and HP6 (60,000 psi). NPT, MP Cone, and HP Cone thread connections. Straight, Angle, 3-Way, and 2-Stem Manifold configurations.',
  specs: [
    'HP · HP1 · HP2 · HP3 · HP6',
    'SS 316',
    '10,000 – 60,000 psi',
    'NPT · MP Cone · HP Cone',
    'Straight · Angle · 3-Way · Manifold',
  ],
}