import { useQuery } from '@tanstack/react-query'
import {
  getJICProducts,
  getJICProductFilterOptions,
  type JICProductFilterParams
} from '@/src/api/jicProductApi'

export interface JICProductFilters {
  fittingTypes: string[]
  materials: string[]
  p1Sizes: string[]
  p1Types: string[]
  p2Sizes: string[]
  p2Types: string[]
}

export const EMPTY_JIC_PRODUCT_FILTERS: JICProductFilters = {
  fittingTypes: [],
  materials: [],
  p1Sizes: [],
  p1Types: [],
  p2Sizes: [],
  p2Types: [],
}

export const JIC_FITTING_TYPE_LABELS: Record<string, string> = {
  MC:   'Male Connector',
  FC:   'Female Connector',
  U:    'Union',
  UL:   'Large Hex Union',
  SU:   'Swivel Union',
  RA:   'Reducing Adapter',
  S:    'Sleeve',
  BU:   'Bulkhead Union',
  BLN:  'Bulkhead Lock Nut',
  N:    'Nut',
  TC:   'Tube Cap',
  TCA:  'Tube Cap Assembly',
  TP:   'Tube Plug',
  ME:   'Male Elbow',
  AME:  'Adj. Male Elbow',
  LME:  '45° Male Elbow',
  FE:   'Female Elbow',
  UE:   'Union Elbow',
  MBT:  'Male Branch Tee',
  AMBT: 'Adj. Male Branch Tee',
  MRT:  'Male Run Tee',
  FBT:  'Female Branch Tee',
  FRT:  'Female Run Tee',
  UT:   'Union Tee',
  SRT:  'Swivel Run Tee',
  SBT:  'Swivel Branch Tee',
  UC:   'Union Cross',
}

export const JIC_P1_TYPE_LABELS: Record<string, string> = {
  J:    '37° JIC / UNF',
  JSWL: '37° JIC Swivel',
  N:    'NPT',
  R:    'ISO Tapered (BSPT)',
  G:    'ISO Parallel (BSPP)',
  S:    'SAE/MS Straight',
  M:    'Metric',
}

export const useJICProductFilterOptions = () => {
  return useQuery({
    queryKey: ['jic-product-filters'],
    queryFn: getJICProductFilterOptions,
    staleTime: Infinity,
  })
}

export const useJICProducts = (filters: JICProductFilterParams) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) =>
      v !== undefined && (!Array.isArray(v) || v.length > 0)
    )
  ) as JICProductFilterParams

  return useQuery({
    queryKey: ['jic-products', cleanFilters],
    queryFn: () => getJICProducts(cleanFilters),
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev,
  })
}