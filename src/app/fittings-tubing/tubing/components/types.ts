export interface TubingDTO {
  id: string
  partNumber: string
  brand: string
  productType: 'Standard Tubing' | 'High Pressure Tubing' | 'Tube Support'
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
  brands: string[]
  productTypes: string[]
  materials: string[]
  units: string[]
  outerDiameters: string[]
  wallThicknesses: string[]
}

export const EMPTY_TUBING_FILTERS: TubingFilters = {
  brands: [],
  productTypes: [],
  materials: [],
  units: [],
  outerDiameters: [],
  wallThicknesses: [],
}

export interface AvailableCountsTubing {
  brands: Record<string, number>
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
    if (exclude !== 'brands'          && filters.brands.length          && !filters.brands.includes(c.brand))                  return false
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
  title: 'Tubing & Tube Supports',
  description:
    'Panam seamless tubing in standard and high-pressure ratings, plus Hiflux high-pressure tube supports. Tubing in SS 316, Monel, Copper, duplex (UNS S31803, S32205), super duplex (UNS S32550, S32750, S32760), Inconel 625/825, 6Mo and Hastelloy — imperial OD 1/16"–2" and metric 3mm–12mm; Hiflux 1/2/3-line tube supports in STS 316.',
  specs: [
    'Panam · Hiflux',
    'Standard · High Pressure · Tube Support',
    'SS 316 · Monel · Duplex & Super Duplex · Inconel · 6Mo · Hastelloy',
    '1/16" – 2" Imperial · 3mm – 12mm Metric',
    'Seamless Construction',
  ],
}