import { useQuery } from '@tanstack/react-query'
import { getTGTModels, getTGTFilters, TGTFilterParams } from '@/src/api/pumpsApi'

export const useTGTFilters = () => {
  return useQuery({
    queryKey: ['tgt-filters'],
    queryFn: getTGTFilters,
    staleTime: Infinity,
  })
}

export const useTGTModels = (filters: TGTFilterParams) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) => v !== undefined && (!Array.isArray(v) || v.length > 0))
  ) as TGTFilterParams
  return useQuery({
    queryKey: ['tgt-models', cleanFilters],
    queryFn: () => getTGTModels(cleanFilters),
    staleTime: 1000 * 60 * 5,
  })
}