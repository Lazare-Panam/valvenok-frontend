// Ball valves data — Panam (HP series) + Hiflux (from hydrogen ball-valve catalogue).
// Export names kept identical to the needle hooks so the shared table/sidebar work unchanged.

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
  exclude: keyof HPNeedleValveFilters | '',
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

/* ---------------- Panam HP Ball Valves ---------------- */
const PANAM_IMG = 'https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/hp-bv.webp'

const make = (
  pn: string, series: string, psi: number, pressureRating: string,
  configuration: string, connectionSize: string, connectionType: string,
): HPNeedleValveDTO => ({
  id: pn,
  partNumber: pn,
  brand: 'Panam',
  series,
  pressureRating,
  pressurePsi: psi,
  material: 'SS 316',
  connectionSize,
  connectionType,
  configuration,
  imageUrl: PANAM_IMG,
  description: `Panam HP Ball Valve ${pn}, ${series} Series (${pressureRating}), SS 316, ${configuration}, ${connectionSize} ${connectionType}.`,
})

const PANAM_BV_DATA: HPNeedleValveDTO[] = [
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

/* ---------------- Hiflux Ball Valves (parsed from catalogue) ---------------- */
const HF_IMG = 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/trunion-ball-valve.png'
const HF_SIZE: Record<string, string> = { '02': '1/8"', '04': '1/4"', '06': '3/8"', '08': '1/2"', '09': '9/16"', '12': '3/4"' }

const hfConfig = (cfg: string, rot: string) =>
  cfg === '2' ? '2-Way 90°' : rot === '180' ? '3-Way 180°' : '3-Way 90°'

const HF_CODES = [
  'BV1005S08-2-90','BV1005S08-3-90','BV1005S08-3-180',
  'BV1503S02-2-90','BV1503S02-3-90','BV1503S02-3-180','BV1503S04-2-90','BV1503S04-3-90','BV1503S04-3-180','BV1503S06-2-90','BV1503S06-3-90','BV1503S06-3-180',
  'BV1505S02-2-90','BV1505S02-3-90','BV1505S02-3-180','BV1505S04-2-90','BV1505S04-3-90','BV1505S04-3-180','BV1505S06-2-90','BV1505S06-3-90','BV1505S06-3-180',
  'BV2003S04-2-90','BV2003S04-3-90','BV2003S04-3-180','BV2003S06-2-90','BV2003S06-3-90','BV2003S06-3-180','BV2003S09-2-90','BV2003S09-3-90','BV2003S09-3-180',
  'BV2005S04-2-90','BV2005S04-3-90','BV2005S04-3-180','BV2005S06-2-90','BV2005S06-3-90','BV2005S06-3-180','BV2005S09-2-90','BV2005S09-3-90','BV2005S09-3-180','BV2005S12-2-90','BV2005S12-3-90','BV2005S12-3-180',
  'BV6003S04-2-90','BV6003S04-3-90','BV6003S04-3-180','BV6003S06-2-90','BV6003S06-3-90','BV6003S06-3-180','BV6003S09-2-90','BV6003S09-3-90','BV6003S09-3-180',
  'BV6005S04-2-90','BV6005S04-3-90','BV6005S04-3-180','BV6005S06-2-90','BV6005S06-3-90','BV6005S06-3-180','BV6005S09-2-90','BV6005S09-3-90','BV6005S09-3-180',
  'BVN03S02-2-90','BVN03S02-3-90','BVN03S02-3-180','BVN03S04-2-90','BVN03S04-3-90','BVN03S04-3-180','BVN03S06-2-90','BVN03S06-3-90','BVN03S06-3-180','BVN03S08-2-90',
  'BVN05S02-2-90','BVN05S02-3-90','BVN05S02-3-180','BVN05S04-2-90','BVN05S04-3-90','BVN05S04-3-180','BVN05S06-2-90','BVN05S06-3-90','BVN05S06-3-180','BVN05S08-2-90','BVN05S08-3-90','BVN05S08-3-180',
  'BVP03S02-2-90','BVP03S02-3-90','BVP03S02-3-180','BVP03S04-2-90','BVP03S04-3-90','BVP03S04-3-180','BVP03S06-2-90','BVP03S06-3-90','BVP03S06-3-180','BVP03S08-2-90',
  'BVP05S02-2-90','BVP05S02-3-90','BVP05S02-3-180','BVP05S04-2-90','BVP05S04-3-90','BVP05S04-3-180','BVP05S06-2-90','BVP05S06-3-90','BVP05S06-3-180','BVP05S08-2-90','BVP05S08-3-90','BVP05S08-3-180',
]

const parseHF = (code: string): HPNeedleValveDTO | null => {
  let pressure = 0, connType = '', sizeCode = '', cfg = '', rot = ''
  let m = code.match(/^BV(\d{2})(\d{2})S(\d{2})-(\d)-(\d{2,3})$/)
  if (m) {
    pressure = parseInt(m[1], 10) * 1000
    connType = 'Cone & Thread'
    sizeCode = m[3]; cfg = m[4]; rot = m[5]
  } else {
    m = code.match(/^BV([NP])(\d{2})S(\d{2})-(\d)-(\d{2,3})$/)
    if (!m) return null
    pressure = 15000
    connType = m[1] === 'N' ? 'NPT Female' : 'PT Female'
    sizeCode = m[3]; cfg = m[4]; rot = m[5]
  }
  const size = HF_SIZE[sizeCode] ?? sizeCode
  const configuration = hfConfig(cfg, rot)
  const pressureRating = `${pressure.toLocaleString('en-US')} psi`
  return {
    id: code,
    partNumber: code,
    brand: 'Hiflux',
    series: 'H-BV',
    pressureRating,
    pressurePsi: pressure,
    material: 'STS 316',
    connectionSize: size,
    connectionType: connType,
    configuration,
    imageUrl: HF_IMG,
    description: `Hiflux Ball Valve ${code}, ${pressureRating}, STS 316 trunnion ball, ${size} ${connType}, ${configuration}.`,
  }
}

const HIFLUX_BV_DATA: HPNeedleValveDTO[] = HF_CODES
  .map(parseHF)
  .filter((v): v is HPNeedleValveDTO => v !== null)

export const HP_NEEDLE_VALVE_DATA: HPNeedleValveDTO[] = [...PANAM_BV_DATA, ...HIFLUX_BV_DATA]

export const HP_NV_DESCRIPTION = {
  title: 'Ball Valves — High Pressure',
  description:
    'Panam and Hiflux high-pressure ball valves. Panam SS 316 ball valves span the HP–HP2 series (10,000–20,000 psi) in 2-Way and 3-Way configurations; Hiflux adds trunnion-style STS 316 ball valves from 10,000 to 60,000 psi with cone-and-thread, NPT and PT connections, in 2-Way 90° and 3-Way 90°/180° patterns.',
  specs: [
    'Panam · Hiflux',
    'SS 316 / STS 316',
    '10,000 – 60,000 psi',
    '2-Way · 3-Way',
    'Cone · NPT · PT',
  ],
}
