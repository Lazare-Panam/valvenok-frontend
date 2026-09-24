// Hiflux high-pressure check valves. Export names kept identical to the needle hooks
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

const IMG = 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/check-valve.png'
const SIZE: Record<string, string> = { '02': '1/8"', '04': '1/4"', '06': '3/8"', '08': '1/2"', '09': '9/16"', '12': '3/4"', '16': '1"' }

const CODES = [
  'CV100BS04','CV100BS06','CV10BS08','CV10OS08',
  'CV15BS02','CV15BS04','CV15BS06','CV15OS02','CV15OS04','CV15OS06',
  'CV20BS04','CV20BS06','CV20BS09','CV20BS12','CV20BS16','CV20OS04','CV20OS06','CV20OS09','CV20OS12','CV20OS16',
  'CV30BS02','CV30BS16','CV30OS02','CV30OS16',
  'CV60BS04','CV60BS06','CV60BS09','CV60OS04','CV60OS06','CV60OS09',
]

const parse = (code: string): HPNeedleValveDTO | null => {
  const m = code.match(/^CV(\d{2,3})([BO])S(\d{2})$/)
  if (!m) return null
  const pressure = parseInt(m[1], 10) * 1000
  const seal = m[2] === 'B' ? 'Ball Seal' : 'O-Ring Seal'
  const size = SIZE[m[3]] ?? m[3]
  const pressureRating = `${pressure.toLocaleString('en-US')} psi`
  return {
    id: code, partNumber: code, brand: 'Hiflux', series: 'H-CV',
    pressureRating, pressurePsi: pressure, material: 'STS 316',
    connectionSize: size, connectionType: 'Cone & Thread', configuration: seal,
    imageUrl: IMG,
    description: `Hiflux Check Valve ${code}, ${pressureRating}, STS 316, ${seal}, ${size} Cone & Thread. Prevents backflow, one-directional.`,
  }
}

export const HP_NEEDLE_VALVE_DATA: HPNeedleValveDTO[] = CODES.map(parse).filter((v): v is HPNeedleValveDTO => v !== null)

export const HP_NV_DESCRIPTION = {
  title: 'Check Valves — High Pressure',
  description:
    'Hiflux high-pressure check valves prevent backflow, allowing flow in one direction only. Ball-seal and O-ring-seal types in STS 316 from 10,000 to 100,000 psi with cone-and-thread connections.',
  specs: ['Hiflux', 'STS 316', '10,000 – 100,000 psi', 'Ball & O-Ring Seal', 'Cone & Thread'],
}
