export interface HPNeedleValveDTO {
  id: string
  partNumber: string
  brand: string
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
  brands: string[]
  series: string[]
  pressureRatings: string[]
  connectionSizes: string[]
  connectionTypes: string[]
  configurations: string[]
}

export const EMPTY_HP_FILTERS: HPNeedleValveFilters = {
  brands: [],
  series: [],
  pressureRatings: [],
  connectionSizes: [],
  connectionTypes: [],
  configurations: [],
}

export interface AvailableCountsHP {
  brands: Record<string, number>
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
    if (exclude !== 'brands'          && filters.brands.length          && !filters.brands.includes(c.brand))                   return false
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
  configuration: string,
  brand: string = 'Panam'
): HPNeedleValveDTO => ({
  id: pn,
  partNumber: pn,
  brand,
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

const PANAM_NV_DATA: HPNeedleValveDTO[] = [
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

// ---- Hiflux needle valves (hydrogen catalogue) ----
const HF_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/needle-valve.png'

const mkHF = (
  pn: string, series: string, psi: number, pressureRating: string,
  connectionSize: string, connectionType: string, configuration: string,
  stem: string, cv: string, orifice: string, material: string,
): HPNeedleValveDTO => ({
  id: pn,
  partNumber: pn,
  brand: 'Hiflux',
  series,
  pressureRating,
  pressurePsi: psi,
  material,
  connectionSize,
  connectionType,
  configuration,
  imageUrl: HF_IMAGE,
  description: `Hiflux ${configuration} Needle Valve ${pn}, ${pressureRating}, ${material}, ${connectionSize} ${connectionType}, ${stem} stem${cv ? `, Cv ${cv}` : ''}${orifice ? `, orifice ${orifice} mm` : ''}.`,
})

const HF_SIZES = [
  { psi: 20000, rating: '20,000 psi', size: '1/4"',  code: '04', conn: 'MP Cone & Thread', cv: '0.31', orifice: '3.2' },
  { psi: 20000, rating: '20,000 psi', size: '3/8"',  code: '06', conn: 'MP Cone & Thread', cv: '0.75', orifice: '5.5' },
  { psi: 20000, rating: '20,000 psi', size: '9/16"', code: '09', conn: 'MP Cone & Thread', cv: '1.3',  orifice: '7.9' },
  { psi: 60000, rating: '60,000 psi', size: '1/4"',  code: '04', conn: 'HP Cone & Thread', cv: '0.08', orifice: '2' },
  { psi: 60000, rating: '60,000 psi', size: '3/8"',  code: '06', conn: 'HP Cone & Thread', cv: '0.09', orifice: '2' },
  { psi: 60000, rating: '60,000 psi', size: '9/16"', code: '09', conn: 'HP Cone & Thread', cv: '0.14', orifice: '2' },
]
const HF_STEMS  = [{ c: 'V', name: 'Vee' }, { c: 'R', name: 'Regulating' }]
const HF_BODIES = [
  { c: 'S', name: 'Straight' }, { c: 'A', name: 'Angle' },
  { c: 'O', name: '3-Way (1-on)' }, { c: 'T', name: '3-Way (2-on)' },
]

const HIFLUX_HP_DATA: HPNeedleValveDTO[] = HF_BODIES.flatMap(b =>
  HF_STEMS.flatMap(s =>
    HF_SIZES.map(sz =>
      mkHF(`H-NV${sz.psi / 1000}${s.c}S${sz.code}-${b.c}`, 'H-NV', sz.psi, sz.rating,
        sz.size, sz.conn, b.name, s.name, sz.cv, sz.orifice, 'SS 316'),
    ),
  ),
)

const HIFLUX_HRS_DATA: HPNeedleValveDTO[] = [
  mkHF('HRS-NV20VS04-S', 'HRS', 70, '70 MPa (H70)', '1/4"',  'MP Cone & Thread', 'Straight', 'Vee', '', '3.2', 'STS 316CW'),
  mkHF('HRS-NV20VS06-S', 'HRS', 70, '70 MPa (H70)', '3/8"',  'MP Cone & Thread', 'Straight', 'Vee', '', '5.5', 'STS 316CW'),
  mkHF('HRS-NV20VS09-S', 'HRS', 70, '70 MPa (H70)', '9/16"', 'MP Cone & Thread', 'Straight', 'Vee', '', '7.9', 'STS 316CW'),
  mkHF('HRS-NV20VS12-S', 'HRS', 70, '70 MPa (H70)', '3/4"',  'MP Cone & Thread', 'Straight', 'Vee', '', '11',  'STS 316CW'),
]

export const HP_NEEDLE_VALVE_DATA: HPNeedleValveDTO[] = [
  ...PANAM_NV_DATA,
  ...HIFLUX_HP_DATA,
  ...HIFLUX_HRS_DATA,
]

export const HP_NV_DESCRIPTION = {
  title: 'Needle Valves — High Pressure & Hydrogen',
  description:
    'Panam and Hiflux needle valves for high-pressure and hydrogen service. Panam SS 316 valves span the HP–HP6 series (10,000–60,000 psi) in Straight, Angle, 3-Way and 2-Stem Manifold patterns; Hiflux adds Vee and Regulating stem valves to 60,000 psi plus H70 (70 MPa) hydrogen fuel-station valves.',
  specs: [
    'Panam · Hiflux',
    'SS 316 / STS 316CW',
    '10,000 – 60,000 psi + H70',
    'NPT · MP Cone · HP Cone',
    'Straight · Angle · 3-Way · Manifold',
  ],
}