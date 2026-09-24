// Hiflux Air Operated Valves (AOV). Export names kept identical to the needle hooks
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

const IMG = 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/air-operated-valve.png'
const SIZE: Record<string, string> = { '02': '1/8"', '04': '1/4"', '06': '3/8"', '09': '9/16"' }

// pressure(psi/1000) -> available size codes
const PRESSURES: { pp: number; sizes: string[] }[] = [
  { pp: 10, sizes: ['08'] },
  { pp: 15, sizes: ['02', '04', '06'] },
  { pp: 20, sizes: ['04', '06', '09'] },
  { pp: 60, sizes: ['04', '06', '09'] },
]
const ACTUATIONS = [{ c: 'C', name: 'Normal Closed' }, { c: 'O', name: 'Normal Open' }]
const BODIES = [
  { c: 'S', name: 'Straight' }, { c: 'A', name: 'Angle' },
  { c: 'O', name: '3-Way (1-on)' }, { c: 'T', name: '3-Way (2-on)' },
]
const SIZE08: Record<string, string> = { '08': '1/2"' } // 10k uses 1/2"

const build = (): HPNeedleValveDTO[] => {
  const out: HPNeedleValveDTO[] = []
  for (const { pp, sizes } of PRESSURES) {
    for (const sizeCode of sizes) {
      for (const act of ACTUATIONS) {
        for (const body of BODIES) {
          const code = `AOV${pp}${act.c}S${sizeCode}-${body.c}`
          const pressure = pp * 1000
          const size = SIZE[sizeCode] ?? SIZE08[sizeCode] ?? sizeCode
          const pressureRating = `${pressure.toLocaleString('en-US')} psi`
          out.push({
            id: code, partNumber: code, brand: 'Hiflux', series: act.name,
            pressureRating, pressurePsi: pressure, material: 'STS 316',
            connectionSize: size, connectionType: 'Cone & Thread', configuration: body.name,
            imageUrl: IMG,
            description: `Hiflux Air Operated Valve ${code}, ${pressureRating}, STS 316, ${act.name}, ${body.name}, ${size} Cone & Thread. Pneumatic actuation.`,
          })
        }
      }
    }
  }
  return out
}

export const HP_NEEDLE_VALVE_DATA: HPNeedleValveDTO[] = build()

export const HP_NV_DESCRIPTION = {
  title: 'Air Operated Valves — High Pressure',
  description:
    'Hiflux pneumatically actuated high-pressure valves — normally-open and normally-closed configurations in STS 316 from 10,000 to 60,000 psi. Straight, angle and 3-way patterns with cone-and-thread connections for automated remote control.',
  specs: ['Hiflux', 'STS 316', '10,000 – 60,000 psi', 'Normal Open · Normal Closed', 'Straight · Angle · 3-Way'],
}
