import { useQuery } from '@tanstack/react-query'
import { getTSLModels, getTSLFilters, TSLFilterParams } from  '@/src/api/pumpsApi'

export const useTSLFilters = () => {
  return useQuery({
    queryKey: ['tsl-filters'],
    queryFn: getTSLFilters,
    staleTime: Infinity,
  })
}

export const useTSLModels = (filters: TSLFilterParams) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) => v !== undefined && (!Array.isArray(v) || v.length > 0))
  )
  return useQuery({
    queryKey: ['tsl-models', cleanFilters],
    queryFn: () => getTSLModels(cleanFilters),
    staleTime: 1000 * 60 * 5,
  })
}