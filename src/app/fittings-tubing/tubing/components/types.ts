export interface TubingDTO {
  id: string
  partNumber: string
  productType: 'Standard Tubing' | 'High Pressure Tubing'
  material: string
  tubingType: string
  outerDiameter: string
  wallThickness: string
  unit: 'imperial' | 'metric'
  workingPressurePsi: number
  workingPressureBar: number
  imageUrl: string
  description: string
}

export interface TubingFilters {
  productTypes: string[]
  materials: string[]
  units: string[]
  outerDiameters: string[]
  wallThicknesses: string[]
}

export const EMPTY_TUBING_FILTERS: TubingFilters = {
  productTypes: [],
  materials: [],
  units: [],
  outerDiameters: [],
  wallThicknesses: [],
}

export interface AvailableCountsTubing {
  productTypes: Record<string, number>
  materials: Record<string, number>
  units: Record<string, number>
  outerDiameters: Record<string, number>
  wallThicknesses: Record<string, number>
}

export function applyFilters(
  data: TubingDTO[],
  filters: TubingFilters,
  exclude: keyof TubingFilters | ''
): TubingDTO[] {
  return data.filter(c => {
    if (exclude !== 'productTypes'    && filters.productTypes.length    && !filters.productTypes.includes(c.productType))      return false
    if (exclude !== 'materials'       && filters.materials.length       && !filters.materials.includes(c.material))            return false
    if (exclude !== 'units'           && filters.units.length           && !filters.units.includes(c.unit))                    return false
    if (exclude !== 'outerDiameters'  && filters.outerDiameters.length  && !filters.outerDiameters.includes(c.outerDiameter))  return false
    if (exclude !== 'wallThicknesses' && filters.wallThicknesses.length && !filters.wallThicknesses.includes(c.wallThickness)) return false
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

export const TUBING_DESCRIPTION = {
  title: 'Seamless Tubing',
  description:
    'Panam seamless tubing in standard and high-pressure ratings. Available in SS 316, Monel, Copper, Duplex, Inconel, 6Mo and Hastelloy. Imperial OD from 1/16" to 2" and metric OD from 3mm to 12mm.',
  specs: [
    'Standard & High Pressure',
    'SS 316 · Monel · Duplex · Inconel · 6Mo · Hastelloy',
    '1/16" – 2" Imperial',
    '3mm – 12mm Metric',
    'Seamless Construction',
  ],
}