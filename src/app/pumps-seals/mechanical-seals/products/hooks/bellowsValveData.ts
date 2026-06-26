export interface BellowsValveDTO {
  id: string
  name: string
  standard: string
  type: string
  features: string[]
  imageUrl: string
}

export interface BellowsValveFilters {
  standards: string[]
  types: string[]
}

export const EMPTY_FILTERS: BellowsValveFilters = {
  standards: [],
  types: [],
}

export interface AvailableCounts {
  standards: Record<string, number>
  types: Record<string, number>
}

export function applyFilters(
  data: BellowsValveDTO[],
  filters: BellowsValveFilters,
  exclude: keyof BellowsValveFilters | ''
): BellowsValveDTO[] {
  return data.filter(c => {
    if (exclude !== 'standards' && filters.standards.length && !filters.standards.includes(c.standard)) return false
    if (exclude !== 'types'     && filters.types.length     && !filters.types.includes(c.type))         return false
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

export const BELLOWS_VALVE_DATA: BellowsValveDTO[] = [
  {
    id: 'din-plus',
    name: 'DIN Standard Bellows Sealed Globe Valve (Plus)',
    standard: 'DIN',
    type: 'Bellows Sealed',
    features: [
      'Conical disc design removes impurities and ensures reliable seal and longer service life.',
      'Double seal design (bellows + packing) — metal seal prevents leakage, packing provides backup if bellows fail.',
    ],
    imageUrl: 'https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/din-standard-bellows-sealed-globe-valve-plus.jpg',
  },
  {
    id: 'din-extend',
    name: 'DIN Standard Bellows Sealed Globe Valve (Extend)',
    standard: 'DIN',
    type: 'Bellows Sealed',
    features: [
      'Bellows protected space design — bellows sealed from medium, pressure and temperature for corrosion resistance and long life.',
      'Titanium seal element forms a triple seal, providing reliable performance in high temperature and corrosive conditions.',
    ],
    imageUrl: 'https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/din-standard-bellows-sealed-globe-valve-extend-300x300.jpg',
  },
  {
    id: 'din-super',
    name: 'DIN Standard Bellows Sealed Globe Valve (Super)',
    standard: 'DIN',
    type: 'Bellows Sealed',
    features: [
      'Double stem combining upper and lower stem with wear-resisting and anti-corrosion materials.',
      'Bellows protected space design — sealed from medium, pressure and temperature for corrosion resistance and long life.',
    ],
    imageUrl: 'https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/din-standard-bellows-sealed-globe-valve-super.jpg',
  },
  {
    id: 'din-check',
    name: 'DIN Standard Bellow Seal Globe Check Valve',
    standard: 'DIN',
    type: 'Check Valve',
    features: [
      'German coated sand casting technology — surface smoothness 12.5–25 microns, over 98% defect free.',
      'Conical disc design removes impurities and ensures reliable seal and longer service life.',
    ],
    imageUrl: 'https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/din-standard-bellow-seal-globe-check-valve-300x300.jpg',
  },
  {
    id: 'ansi-standard',
    name: 'ANSI Standard Bellows Sealed Globe Valve',
    standard: 'ANSI',
    type: 'Bellows Sealed',
    features: [
      'Metal bellows connected by automatic roll welding ensures zero leakage at the stem.',
      'Conical disc with streamline shape design provides reliable sealing and longer service life.',
    ],
    imageUrl: 'https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/ansi-standard-bellows-sealed-globe-valve.jpg',
  },
  {
    id: 'ansi-high-pressure',
    name: 'ANSI Standard High Pressure Bellows Sealed Globe Valve',
    standard: 'ANSI',
    type: 'Bellows Sealed',
    features: [
      'Metal bellows automatically welded at both ends form a metal barrier between fluid and atmosphere ensuring zero stem leakage.',
    ],
    imageUrl: 'https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/ansi-standard-high-pressure-bellows-sealed-globe-valve.jpg',
  },
  {
    id: 'jis-standard',
    name: 'JIS Standard Bellows Sealed Globe Valve',
    standard: 'JIS',
    type: 'Bellows Sealed',
    features: [
      'Conical disc design removes impurities and ensures reliable seal and longer service life.',
      'Double seal design (bellows + packing) — metal seal prevents leakage, packing provides backup if bellows fail.',
    ],
    imageUrl: 'https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/jis-standard-bellows-sealed-globe-valve.jpg',
  },
  {
    id: 'y-type',
    name: 'Y Type Bellows Sealed Globe Valve',
    standard: 'Y-Type',
    type: 'Bellows Sealed',
    features: [
      'Straight flow structure reduces fluid resistance, accelerates flow rate and minimises pressure and energy loss — ideal for viscous or caking media.',
      'Double seal design (bellows + packing) provides excellent sealing performance.',
    ],
    imageUrl: 'https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/y-type-bellows-sealed-globe-valve.jpg',
  },
  {
    id: 'angle-type',
    name: 'Angle Type Bellows Sealed Globe Valve',
    standard: 'Angle',
    type: 'Bellows Sealed',
    features: [
      '90° outlet suitable for pipeline corners — eliminates need for separate elbow fitting, saving space.',
      'Double seal design (bellows + packing) provides excellent sealing performance.',
    ],
    imageUrl: 'https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/angle-type-bellows-sealed-globe-valve.jpg',
  },
  {
    id: 'din-gland',
    name: 'DIN Standard Gland Packing Globe Valve',
    standard: 'DIN',
    type: 'Gland Packing',
    features: [
      'German coated sand casting technology — surface smoothness 12.5–25 microns.',
      'Conical disc design removes impurities and ensures reliable seal and longer service life.',
    ],
    imageUrl: 'https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/din-standard-gland-packing-globe-valve.jpg',
  },
  {
    id: 'bellows-seal',
    name: 'Bellows Seal Globe Valve',
    standard: 'General',
    type: 'Bellows Sealed',
    features: [
      'Coated sand casting technology — surface finish 12.5–25 microns, over 98% defect free with effective wall thickness to standard.',
    ],
    imageUrl: 'https://pblol2.blob.core.windows.net/valvenok-images/products/sealed-valves/bellows-seal-globe-valve.jpg',
  },
]

export const PAGE_META = {
  title: 'Bellows Sealed Globe Valves',
  description: 'A complete range of bellows sealed globe valves across DIN, ANSI and JIS standards. Double seal design, zero stem leakage and corrosion-resistant construction for demanding process, chemical and industrial applications.',
  specs: ['DIN · ANSI · JIS', 'Zero Stem Leakage', 'Double Seal Design', 'Bellows + Packing', 'Corrosion Resistant'],
}