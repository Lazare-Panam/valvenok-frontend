import { useQuery } from '@tanstack/react-query'
import { getTMCModels, getTMCFilters, TMCFilterParams } from '@/src/api/pumpsApi'

export const useTMCFilters = () => {
  return useQuery({
    queryKey: ['tmc-filters'],
    queryFn: getTMCFilters,
    staleTime: Infinity,
  })
}

export const useTMCModels = (filters: TMCFilterParams) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) => v !== undefined && (!Array.isArray(v) || v.length > 0))
  ) as TMCFilterParams
  return useQuery({
    queryKey: ['tmc-models', cleanFilters],
    queryFn: () => getTMCModels(cleanFilters),
    staleTime: 1000 * 60 * 5,
  })
}