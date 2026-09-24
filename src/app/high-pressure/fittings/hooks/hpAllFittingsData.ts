// Unified High Pressure Fittings dataset — every fitting type, Panam + Hiflux, in one table.
// Panam rows are imported from the per-type data files (no re-typing); Hiflux rows are
// decoded from the catalogue part-number scheme (FT = Fitting, FA = Fitting Accessory).

import { HP_ADAPTER_DATA }      from '../adapters/hooks/hpAdapterData'
import { HP_FITTING_DATA }      from '../connectors/hooks/hpFittingsData'
import { HP_END_FITTING_DATA }  from '../end-connections/hooks/hpEndFittingData'
import { HP_JUNCTION_DATA }     from '../junction-fittings/hooks/hpFittingsJunctionData'
import { HP_UNION_DATA }        from '../union/hooks/hpUnionData'

export type Brand = 'Panam' | 'Hiflux'

export interface FittingDTO {
  id: string
  partNumber: string
  brand: Brand
  fittingType: string
  p1Size: string
  p1Thread: string
  p2Size: string       // '' for single-ended fittings (caps, plugs, glands …)
  p2Thread: string
  pressureRating: string
  pressurePsi: number
  material: string
  imageUrl: string
  description: string
}

/* ------------------------------------------------------------------ Panam */
// The per-type Panam arrays already share one shape; end-connections lack p2.
const asPanam = (r: {
  partNumber: string; fittingType: string; p1Size: string; p1Thread: string
  p2Size?: string; p2Thread?: string; pressureRating: string; pressurePsi: number
  material: string; imageUrl: string; description: string
}): FittingDTO => ({
  id: r.partNumber,
  partNumber: r.partNumber,
  brand: 'Panam',
  fittingType: r.fittingType,
  p1Size: r.p1Size,
  p1Thread: r.p1Thread,
  p2Size: r.p2Size ?? '',
  p2Thread: r.p2Thread ?? '',
  pressureRating: r.pressureRating,
  pressurePsi: r.pressurePsi,
  material: r.material,
  imageUrl: r.imageUrl,
  description: r.description,
})

const PANAM: FittingDTO[] = [
  ...HP_ADAPTER_DATA,
  ...HP_FITTING_DATA,
  ...HP_JUNCTION_DATA,
  ...HP_UNION_DATA,
  ...HP_END_FITTING_DATA,
].map(asPanam)

/* ----------------------------------------------------------------- Hiflux */
const HF_SIZE: Record<string, string> = {
  '02': '1/8"', '04': '1/4"', '06': '3/8"', '08': '1/2"',
  '09': '9/16"', '12': '3/4"', '16': '1"',
}
const HF_PSI: Record<string, number> = {
  '10': 10000, '15': 15000, '20': 20000, '30': 30000,
  '60': 60000, '100': 100000, '150': 150000,
}
const PSI_LABEL: Record<number, string> = {
  10000: '10,000 psi', 15000: '15,000 psi', 20000: '20,000 psi', 30000: '30,000 psi',
  60000: '60,000 psi', 100000: '100,000 psi', 150000: '150,000 psi',
}
const HF_FT_TYPE: Record<string, string> = { E: 'Elbow', T: 'Tee', C: 'Cross' }
const HF_FA_TYPE: Record<string, string> = {
  G: 'Gland', S: 'Sleeve', R: 'Collar', P: 'Plug', T: 'Collet', A: 'Anti-Set Screw',
}
// Real Hiflux catalogue imagery (not Panam stand-ins).
const HF_FITTING_IMG   = 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/reducing-fitting.png'
const HF_ACCESSORY_IMG = 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/Accessory.png'

// FT#### = two-ended cone & thread fitting; FA#### = single-ended accessory.
const HIFLUX_FT = [
  'FT15ES02','FT15ES04','FT15ES06','FT10ES08','FT20ES04','FT20ES06','FT20ES09','FT20ES12','FT20ES16','FT30ES02','FT30ES16','FT60ES04','FT60ES06','FT60ES09','FT100ES04','FT100ES06','FT100ES09','FT150ES06',
  'FT15TS02','FT15TS04','FT15TS06','FT10TS08','FT20TS04','FT20TS06','FT20TS09','FT20TS12','FT20TS16','FT30TS02','FT30TS16','FT60TS04','FT60TS06','FT60TS09','FT100TS04','FT100TS06','FT100TS09','FT150TS06',
  'FT15CS02','FT15CS04','FT15CS06','FT10CS08','FT20CS04','FT20CS06','FT20CS09','FT20CS12','FT20CS16','FT30CS02','FT30CS16','FT60CS04','FT60CS06','FT60CS09','FT100CS04','FT100CS06','FT100CS09','FT150CS06',
  // Anti-Vibration (20,000 & 60,000 psi)
  'FT20ES04-AV','FT20ES06-AV','FT20ES09-AV','FT20ES12-AV','FT20ES16-AV','FT60ES04-AV','FT60ES06-AV','FT60ES09-AV',
  'FT20TS04-AV','FT20TS06-AV','FT20TS09-AV','FT20TS12-AV','FT20TS16-AV','FT60TS04-AV','FT60TS06-AV','FT60TS09-AV',
  'FT20CS04-AV','FT20CS06-AV','FT20CS09-AV','FT20CS12-AV','FT20CS16-AV','FT60CS04-AV','FT60CS06-AV','FT60CS09-AV',
]
const HIFLUX_FA = [
  // Glands
  'FA15GS02','FA15GS04','FA15GS06','FA10GS08','FA20GS04','FA20GS06','FA20GS09','FA20GS12','FA20GS16','FA30GS02','FA30GS16','FA60GS04','FA60GS06','FA60GS09','FA100GS04','FA100GS06','FA100GS09','FA150GS06',
  // Sleeves
  'FA15SS02','FA15SS04','FA15SS06','FA10SS08',
  // Collars
  'FA20RS04','FA20RS06','FA20RS09','FA20RS12','FA20RS16','FA30RS02','FA30RS16','FA60RS04','FA60RS06','FA60RS09','FA100RS04','FA100RS06','FA100RS09','FA150RS06',
  // Plugs
  'FA15PS02','FA15PS04','FA15PS06','FA10PS08','FA20PS04','FA20PS06','FA20PS09','FA20PS12','FA20PS16','FA30PS02','FA30PS16','FA60PS04','FA60PS06','FA60PS09','FA100PS04','FA100PS06','FA100PS09','FA150PS06',
  // Anti-Vibration accessories (20,000 & 60,000 psi)
  'FA20GS04-AV','FA20GS06-AV','FA20GS09-AV','FA20GS12-AV','FA20GS16-AV','FA60GS04-AV','FA60GS06-AV','FA60GS09-AV',
  'FA20RS04-AV','FA20RS06-AV','FA20RS09-AV','FA20RS12-AV','FA20RS16-AV','FA60RS04-AV','FA60RS06-AV','FA60RS09-AV',
  'FA20TS04-AV','FA20TS06-AV','FA20TS09-AV','FA20TS12-AV','FA20TS16-AV','FA60TS04-AV','FA60TS06-AV','FA60TS09-AV',
  'FA20AS04-AV','FA20AS06-AV','FA20AS09-AV','FA20AS12-AV','FA20AS16-AV','FA60AS04-AV','FA60AS06-AV','FA60AS09-AV',
]

function decodeHiflux(pn: string): FittingDTO | null {
  const av = pn.endsWith('-AV')
  const core = av ? pn.slice(0, -3) : pn
  const m = core.match(/^(FT|FA)(\d{2,3})([A-Z])S(\d{2})$/)
  if (!m) return null
  const [, prefix, psiCode, typeL, sizeCode] = m
  const psi = HF_PSI[psiCode]
  const size = HF_SIZE[sizeCode]
  const base = prefix === 'FT' ? HF_FT_TYPE[typeL] : HF_FA_TYPE[typeL]
  if (!psi || !size || !base) return null

  const twoEnded = prefix === 'FT'
  const img = twoEnded ? HF_FITTING_IMG : HF_ACCESSORY_IMG
  const avNote = av ? ' Anti-Vibration Type.' : ''
  const conn = twoEnded
    ? `P1: ${size} Cone & Thread, P2: ${size} Cone & Thread`
    : `${size} Cone & Thread`

  return {
    id: pn,
    partNumber: pn,
    brand: 'Hiflux',
    fittingType: base,
    p1Size: size,
    p1Thread: 'Cone & Thread',
    p2Size: twoEnded ? size : '',
    p2Thread: twoEnded ? 'Cone & Thread' : '',
    pressureRating: PSI_LABEL[psi],
    pressurePsi: psi,
    material: 'STS 316',
    imageUrl: img,
    description: `Hiflux ${base} ${pn}, ${conn}, STS 316, ${PSI_LABEL[psi]}.${avNote}`,
  }
}

const HIFLUX: FittingDTO[] = [...HIFLUX_FT, ...HIFLUX_FA]
  .map(decodeHiflux)
  .filter((r): r is FittingDTO => r !== null)

/* ---- Hiflux high-pressure nipples (N####), cone & thread, STS 316 ---- */
const HF_NIPPLE_IMG = 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/nibul.png'
const HIFLUX_NIPPLE_SPECS: Array<{ pn: string; psi: number; size: string }> = [
  { pn: 'N20S04',  psi: 20000,  size: '1/4"' },
  { pn: 'N20S06',  psi: 20000,  size: '3/8"' },
  { pn: 'N20S09',  psi: 20000,  size: '9/16"' },
  { pn: 'N20S12',  psi: 20000,  size: '3/4"' },
  { pn: 'N20S16',  psi: 20000,  size: '1"' },
  { pn: 'N30S02',  psi: 30000,  size: '1/8"' },
  { pn: 'N30S16',  psi: 30000,  size: '1"' },
  { pn: 'N60S04',  psi: 60000,  size: '1/4"' },
  { pn: 'N60S06',  psi: 60000,  size: '3/8"' },
  { pn: 'N60S09',  psi: 60000,  size: '9/16"' },
  { pn: 'N100S04', psi: 100000, size: '1/4"' },
  { pn: 'N150S06', psi: 150000, size: '3/8"' },
]
const HIFLUX_NIPPLES: FittingDTO[] = HIFLUX_NIPPLE_SPECS.map(n => ({
  id: n.pn,
  partNumber: n.pn,
  brand: 'Hiflux',
  fittingType: 'Nipple',
  p1Size: n.size,
  p1Thread: 'Cone & Thread',
  p2Size: n.size,
  p2Thread: 'Cone & Thread',
  pressureRating: PSI_LABEL[n.psi],
  pressurePsi: n.psi,
  material: 'STS 316',
  imageUrl: HF_NIPPLE_IMG,
  description: `Hiflux ${PSI_LABEL[n.psi]} high-pressure nipple ${n.pn}, ${n.size} both ends, cone & thread, STS 316.`,
}))

/* --------------------------------------------------------------- combined */
// Dedupe by part number so every row maps to a unique detail route.
const seen = new Set<string>()
export const HP_FITTINGS_DATA: FittingDTO[] = [...PANAM, ...HIFLUX, ...HIFLUX_NIPPLES].filter(r => {
  if (seen.has(r.partNumber)) return false
  seen.add(r.partNumber)
  return true
})

/* ----------------------------------------------------------------- filters */
export interface FittingFilters {
  brands: string[]
  fittingTypes: string[]
  pressureRatings: string[]
  sizes: string[]
  materials: string[]
}

export const EMPTY_FITTING_FILTERS: FittingFilters = {
  brands: [], fittingTypes: [], pressureRatings: [], sizes: [], materials: [],
}

export interface AvailableCounts {
  brands: Record<string, number>
  fittingTypes: Record<string, number>
  pressureRatings: Record<string, number>
  sizes: Record<string, number>
  materials: Record<string, number>
}

export function applyFilters(
  data: FittingDTO[],
  filters: FittingFilters,
  exclude: keyof FittingFilters | '',
): FittingDTO[] {
  return data.filter(c => {
    if (exclude !== 'brands'          && filters.brands.length          && !filters.brands.includes(c.brand))                    return false
    if (exclude !== 'fittingTypes'    && filters.fittingTypes.length    && !filters.fittingTypes.includes(c.fittingType))        return false
    if (exclude !== 'pressureRatings' && filters.pressureRatings.length && !filters.pressureRatings.includes(c.pressureRating))  return false
    if (exclude !== 'sizes'           && filters.sizes.length           && !filters.sizes.includes(c.p1Size))                    return false
    if (exclude !== 'materials'       && filters.materials.length       && !filters.materials.includes(c.material))              return false
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

const TOTAL = HP_FITTINGS_DATA.length
const PANAM_COUNT = HP_FITTINGS_DATA.filter(r => r.brand === 'Panam').length
const HIFLUX_COUNT = HP_FITTINGS_DATA.filter(r => r.brand === 'Hiflux').length

export const HP_FITTINGS_DESCRIPTION = {
  title: 'High Pressure Fittings',
  total: TOTAL,
  panamCount: PANAM_COUNT,
  hifluxCount: HIFLUX_COUNT,
  description:
    'Panam and Hiflux high-pressure cone-and-thread fittings in one filterable catalogue — adapters, reducers, connectors, elbows, tees, crosses, hex nipples, unions, caps, plugs and dedicated accessories (glands, sleeves, collars, collets) in SS 316 / STS 316 from 10,000 to 150,000 psi.',
  specs: [
    'Panam · Hiflux',
    'SS 316 · STS 316',
    '10,000 – 150,000 psi',
    'Cone & Thread · NPT',
    '1/8" – 1"',
  ],
}
