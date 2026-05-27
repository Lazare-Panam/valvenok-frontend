export interface QuickCouplingDTO {
  id: string
  partNumber: string
  series: string
  bodyMaterial: string
  connectionType: string
  type: string
  description: string
  imageUrl?: string
}

export interface QuickCouplingFilters {
  series: string[]
  bodyMaterials: string[]
  connectionTypes: string[]
  types: string[]
}

export const EMPTY_QC_FILTERS: QuickCouplingFilters = {
  series: [],
  bodyMaterials: [],
  connectionTypes: [],
  types: [],
}

export interface AvailableCountsQC {
  series: Record<string, number>
  bodyMaterials: Record<string, number>
  connectionTypes: Record<string, number>
  types: Record<string, number>
}

export function applyFilters(
  data: QuickCouplingDTO[],
  filters: QuickCouplingFilters,
  exclude: keyof QuickCouplingFilters | ''
): QuickCouplingDTO[] {
  return data.filter(c => {
    if (exclude !== 'series'          && filters.series.length          && !filters.series.includes(c.series))                return false
    if (exclude !== 'bodyMaterials'   && filters.bodyMaterials.length   && !filters.bodyMaterials.includes(c.bodyMaterial))   return false
    if (exclude !== 'connectionTypes' && filters.connectionTypes.length && !filters.connectionTypes.includes(c.connectionType)) return false
    if (exclude !== 'types'           && filters.types.length           && !filters.types.includes(c.type))                   return false
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