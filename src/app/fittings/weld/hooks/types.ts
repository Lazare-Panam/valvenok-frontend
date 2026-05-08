import { useQuery } from '@tanstack/react-query'
import { getWeldFittings, getWeldFittingFilterOptions, type WeldFittingFilterParams } from '@/src/api/weldFittingApi'

export interface WeldFittingFilters {
  fittingTypes: string[]
  p1Sizes: string[]
  p1Types: string[]
  p1Units: string[]
  p2Sizes: string[]
  p2Types: string[]
  p2Units: string[]
  materials: string[]
}

export const EMPTY_WELD_FITTING_FILTERS: WeldFittingFilters = {
  fittingTypes: [],
  p1Sizes: [],
  p1Types: [],
  p1Units: [],
  p2Sizes: [],
  p2Types: [],
  p2Units: [],
  materials: [],
}

export const WELD_FITTING_TYPE_LABELS: Record<string, string> = {
  MC:  'Male Connector',
  FC:  'Female Connector',
  ME:  'Male Elbow',
  FE:  'Female Elbow',
  UE:  'Union Elbow',
  U:   'Union',
  RU:  'Reducing Union',
  UT:  'Union Tee',
  MRT: 'Male Run Tee',
  MBT: 'Male Branch Tee',
  UC:  'Union Cross',
  WA:  'Weld Adaptor',
}

export const WELD_P1_TYPE_LABELS: Record<string, string> = {
  TSW: 'Tube Socket Weld',
  TBW: 'Tube Butt Weld',
  PSW: 'Pipe Socket Weld',
}

export const WELD_P2_TYPE_LABELS: Record<string, string> = {
  N: 'NPT',
  R: 'ISO Tapered (BSPT)',
  G: 'ISO Parallel (BSPP)',
  M: 'Metric',
}

export const useWeldFittingFilterOptions = () => {
  return useQuery({
    queryKey: ['weld-fitting-filters'],
    queryFn: getWeldFittingFilterOptions,
    staleTime: Infinity,
  })
}

export const useWeldFittings = (filters: WeldFittingFilterParams) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) =>
      v !== undefined && (!Array.isArray(v) || v.length > 0)
    )
  ) as WeldFittingFilterParams

  return useQuery({
    queryKey: ['weld-fittings', cleanFilters],
    queryFn: () => getWeldFittings(cleanFilters),
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev,
  })
}