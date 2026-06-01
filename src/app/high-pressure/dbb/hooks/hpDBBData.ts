export interface HPDBBValveDTO {
  id: string
  partNumber: string
  pressureRating: string
  pressurePsi: number
  configuration: string
  material: string
  inletOutletSize: string
  inletOutletType: string
  ventSize: string
  ventType: string
  imageUrl: string
  description: string
}

export interface HPDBBFilters {
  pressureRatings: string[]
  configurations: string[]
  inletOutletSizes: string[]
  inletOutletTypes: string[]
}

export const EMPTY_HPDBB_FILTERS: HPDBBFilters = {
  pressureRatings: [],
  configurations: [],
  inletOutletSizes: [],
  inletOutletTypes: [],
}

export interface AvailableCountsHPDBB {
  pressureRatings: Record<string, number>
  configurations: Record<string, number>
  inletOutletSizes: Record<string, number>
  inletOutletTypes: Record<string, number>
}

export function applyFilters(
  data: HPDBBValveDTO[],
  filters: HPDBBFilters,
  exclude: keyof HPDBBFilters | ''
): HPDBBValveDTO[] {
  return data.filter(c => {
    if (exclude !== 'pressureRatings'  && filters.pressureRatings.length  && !filters.pressureRatings.includes(c.pressureRating))   return false
    if (exclude !== 'configurations'   && filters.configurations.length   && !filters.configurations.includes(c.configuration))     return false
    if (exclude !== 'inletOutletSizes' && filters.inletOutletSizes.length && !filters.inletOutletSizes.includes(c.inletOutletSize)) return false
    if (exclude !== 'inletOutletTypes' && filters.inletOutletTypes.length && !filters.inletOutletTypes.includes(c.inletOutletType)) return false
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

const IMAGE = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-dbb.jpg'

const make = (
  pn: string,
  pressureRating: string,
  pressurePsi: number,
  configuration: string,
  inletOutletSize: string,
  inletOutletType: string,
  ventSize: string,
  ventType: string,
): HPDBBValveDTO => ({
  id: pn,
  partNumber: pn,
  pressureRating,
  pressurePsi,
  configuration,
  material: 'SS 316',
  inletOutletSize,
  inletOutletType,
  ventSize,
  ventType,
  imageUrl: IMAGE,
  description: `Panam HP Double Block & Bleed Valve ${pn}, ${pressureRating}, SS 316, ${configuration}, ${inletOutletSize} ${inletOutletType}, Vent ${ventSize} ${ventType}.`,
})

export const HP_DBB_DATA: HPDBBValveDTO[] = [
  make('PDBB-6-A-SS-1-PK-6-4NF-4NF-LH',  '15,000 psi', 15000, 'Ball-Needle-Ball', '1/4"',  'NPT Female', '1/4"', 'NPT Female'),
  make('PDBB-6-A-SS-1-PK-6-6NF-4NF-LH',  '15,000 psi', 15000, 'Ball-Needle-Ball', '3/8"',  'NPT Female', '1/4"', 'NPT Female'),
  make('PDBB-6-A-SS-1-PK-6-8NF-4NF-LH',  '15,000 psi', 15000, 'Ball-Needle-Ball', '1/2"',  'NPT Female', '1/4"', 'NPT Female'),
  make('PDBB-6-A-SS-1-PK-4-4MF-4MF-LH',  '15,000 psi', 15000, 'Ball-Needle-Ball', '1/4"',  'MP Cone & Thread Female', '1/4"', 'MP Cone & Thread Female'),
  make('PDBB-6-A-SS-1-PK-4-6MF-4MF-LH',  '15,000 psi', 15000, 'Ball-Needle-Ball', '3/8"',  'MP Cone & Thread Female', '1/4"', 'MP Cone & Thread Female'),
  make('PDBB-6-A-SS-1-PK-6-9MF-4MF-LH',  '15,000 psi', 15000, 'Ball-Needle-Ball', '9/16"', 'MP Cone & Thread Female', '1/4"', 'MP Cone & Thread Female'),
  make('PDBB-6-A-SS-1-PK-6-12MF-4MF-LH', '15,000 psi', 15000, 'Ball-Needle-Ball', '3/4"',  'MP Cone & Thread Female', '1/4"', 'MP Cone & Thread Female'),
  make('PDBB-6-A-SS-1-PK-6-16MF-4MF-LH', '15,000 psi', 15000, 'Ball-Needle-Ball', '1"',    'MP Cone & Thread Female', '1/4"', 'MP Cone & Thread Female'),
  make('PDBB-6-C-SS-1-4MF-4MF',           '20,000 psi', 20000, 'Needle-Needle',    '1/4"',  'MP Cone & Thread Female', '1/4"', 'MP Cone & Thread Female'),
  make('PDBB-6-C-SS-1-6MF-4MF',           '20,000 psi', 20000, 'Needle-Needle',    '3/8"',  'MP Cone & Thread Female', '1/4"', 'MP Cone & Thread Female'),
  make('PDBB-6-C-SS-1-9MF-4MF',           '20,000 psi', 20000, 'Needle-Needle',    '9/16"', 'MP Cone & Thread Female', '1/4"', 'MP Cone & Thread Female'),
]

export const HP_DBB_DESCRIPTION = {
  title: 'High Pressure Double Block & Bleed Valves',
  description:
    'Panam HP Double Block & Bleed Valves in SS 316 for pressures up to 20,000 psi (1378 bar). Ball-Needle-Ball configuration at 15,000 psi and Needle-Needle configuration at 20,000 psi. NPT Female and MP Cone & Thread Female connections.',
  specs: [
    'PDBB Series',
    'SS 316',
    '15,000 & 20,000 psi',
    'Ball-Needle-Ball · Needle-Needle',
    'NPT Female · MP Cone & Thread',
  ],
}