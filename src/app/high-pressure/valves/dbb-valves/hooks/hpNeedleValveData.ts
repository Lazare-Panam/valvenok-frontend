// Panam HP Double Block & Bleed valves. Export names kept identical to the needle hooks
// so the shared table/sidebar components work unchanged.

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
  brands: [], series: [], pressureRatings: [], connectionSizes: [], connectionTypes: [], configurations: [],
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
  data: HPNeedleValveDTO[], filters: HPNeedleValveFilters, exclude: keyof HPNeedleValveFilters | '',
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
  for (const item of items) { const k = keyFn(item); counts[k] = (counts[k] ?? 0) + 1 }
  return counts
}

const IMG = 'https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-dbb.jpg'

const make = (
  pn: string, psi: number, pressureRating: string, configuration: string,
  ioSize: string, ioType: string, ventSize: string, ventType: string,
): HPNeedleValveDTO => ({
  id: pn,
  partNumber: pn,
  brand: 'Panam',
  series: 'PDBB',
  pressureRating,
  pressurePsi: psi,
  material: 'SS 316',
  connectionSize: ioSize,
  connectionType: ioType,
  configuration,
  imageUrl: IMG,
  description: `Panam HP Double Block & Bleed Valve ${pn}, ${pressureRating}, SS 316, ${configuration}, ${ioSize} ${ioType}, Vent ${ventSize} ${ventType}.`,
})

export const HP_NEEDLE_VALVE_DATA: HPNeedleValveDTO[] = [
  make('PDBB-6-A-SS-1-PK-6-4NF-4NF-LH',  15000, '15,000 psi', 'Ball-Needle-Ball', '1/4"',  'NPT Female', '1/4"', 'NPT Female'),
  make('PDBB-6-A-SS-1-PK-6-6NF-4NF-LH',  15000, '15,000 psi', 'Ball-Needle-Ball', '3/8"',  'NPT Female', '1/4"', 'NPT Female'),
  make('PDBB-6-A-SS-1-PK-6-8NF-4NF-LH',  15000, '15,000 psi', 'Ball-Needle-Ball', '1/2"',  'NPT Female', '1/4"', 'NPT Female'),
  make('PDBB-6-A-SS-1-PK-4-4MF-4MF-LH',  15000, '15,000 psi', 'Ball-Needle-Ball', '1/4"',  'MP Cone & Thread Female', '1/4"', 'MP Cone & Thread Female'),
  make('PDBB-6-A-SS-1-PK-4-6MF-4MF-LH',  15000, '15,000 psi', 'Ball-Needle-Ball', '3/8"',  'MP Cone & Thread Female', '1/4"', 'MP Cone & Thread Female'),
  make('PDBB-6-A-SS-1-PK-6-9MF-4MF-LH',  15000, '15,000 psi', 'Ball-Needle-Ball', '9/16"', 'MP Cone & Thread Female', '1/4"', 'MP Cone & Thread Female'),
  make('PDBB-6-A-SS-1-PK-6-12MF-4MF-LH', 15000, '15,000 psi', 'Ball-Needle-Ball', '3/4"',  'MP Cone & Thread Female', '1/4"', 'MP Cone & Thread Female'),
  make('PDBB-6-A-SS-1-PK-6-16MF-4MF-LH', 15000, '15,000 psi', 'Ball-Needle-Ball', '1"',    'MP Cone & Thread Female', '1/4"', 'MP Cone & Thread Female'),
  make('PDBB-6-C-SS-1-4MF-4MF',          20000, '20,000 psi', 'Needle-Needle',    '1/4"',  'MP Cone & Thread Female', '1/4"', 'MP Cone & Thread Female'),
  make('PDBB-6-C-SS-1-6MF-4MF',          20000, '20,000 psi', 'Needle-Needle',    '3/8"',  'MP Cone & Thread Female', '1/4"', 'MP Cone & Thread Female'),
  make('PDBB-6-C-SS-1-9MF-4MF',          20000, '20,000 psi', 'Needle-Needle',    '9/16"', 'MP Cone & Thread Female', '1/4"', 'MP Cone & Thread Female'),
]

export const HP_NV_DESCRIPTION = {
  title: 'Double Block & Bleed Valves — High Pressure',
  description:
    'Panam HP Double Block & Bleed valves in SS 316 to 20,000 psi. Ball-Needle-Ball configuration at 15,000 psi and Needle-Needle at 20,000 psi, with NPT Female and MP Cone & Thread Female connections and integral bleed/vent.',
  specs: ['Panam', 'SS 316', '15,000 & 20,000 psi', 'Ball-Needle-Ball · Needle-Needle', 'NPT · MP Cone & Thread'],
}
