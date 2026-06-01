export interface HPManifoldDTO {
  id: string
  partNumber: string
  pressureRating: string
  pressurePsi: number
  connectionSize: string
  connectionType: string
  material: string
  imageUrl: string
  description: string
}

export interface HPManifoldFilters {
  pressureRatings: string[]
  connectionSizes: string[]
  connectionTypes: string[]
}

export const EMPTY_MANIFOLD_FILTERS: HPManifoldFilters = {
  pressureRatings: [],
  connectionSizes: [],
  connectionTypes: [],
}

export interface AvailableCountsManifold {
  pressureRatings: Record<string, number>
  connectionSizes: Record<string, number>
  connectionTypes: Record<string, number>
}

export function applyFilters(
  data: HPManifoldDTO[],
  filters: HPManifoldFilters,
  exclude: keyof HPManifoldFilters | ''
): HPManifoldDTO[] {
  return data.filter(c => {
    if (exclude !== 'pressureRatings' && filters.pressureRatings.length && !filters.pressureRatings.includes(c.pressureRating)) return false
    if (exclude !== 'connectionSizes' && filters.connectionSizes.length && !filters.connectionSizes.includes(c.connectionSize)) return false
    if (exclude !== 'connectionTypes' && filters.connectionTypes.length && !filters.connectionTypes.includes(c.connectionType)) return false
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

const IMAGE = 'https://pblol2.blob.core.windows.net/panam-images/products/needle-valves/cover-needle.jpg'

const make = (
  pn: string,
  pressureRating: string,
  pressurePsi: number,
  connectionSize: string,
  connectionType: string,
): HPManifoldDTO => ({
  id: pn,
  partNumber: pn,
  pressureRating,
  pressurePsi,
  connectionSize,
  connectionType,
  material: 'SS 316',
  imageUrl: IMAGE,
  description: `Panam 2-Valve Manifold ${pn}, ${pressureRating}, SS 316, ${connectionSize} ${connectionType}.`,
})

export const HP_MANIFOLD_DATA: HPManifoldDTO[] = [
  make('2VM-SS-4NF-RM-V4',   '15,000 psi', 15000, '1/4"', 'NPT Female'),
  make('2VM-SS-6NF-RM-V4',   '15,000 psi', 15000, '3/8"', 'NPT Female'),
  make('2VM-SS-8NF-RM-V4',   '15,000 psi', 15000, '1/2"', 'NPT Female'),
  make('2VM-SS-4MF-RM-V4MF', '20,000 psi', 20000, '1/4"', 'MP Cone & Thread Female'),
  make('2VM-SS-6MF-RM-V4MF', '20,000 psi', 20000, '3/8"', 'MP Cone & Thread Female'),
  make('2VM-SS-8MF-RM-V4MF', '20,000 psi', 20000, '1/2"', 'MP Cone & Thread Female'),
]

export const HP_MANIFOLD_DESCRIPTION = {
  title: '2-Valve Manifolds — HP Series',
  description:
    'Panam 2-Valve Manifolds in SS 316 for high pressure gauge and absolute pressure transmitter applications. 15,000 psi with NPT Female connections and 20,000 psi with MP Cone & Thread Female connections. 1/4", 3/8" and 1/2" sizes.',
  specs: [
    '2-Valve Manifold',
    'SS 316',
    '15,000 & 20,000 psi',
    'NPT Female · MP Cone & Thread',
    '1/4" · 3/8" · 1/2"',
  ],
}