import { useQuery } from '@tanstack/react-query'
import { getTDLModels, getTDLFilters, TDLFilterParams } from '@/src/api/pumpsApi'


export const useTDLFilters = () => {
  return useQuery({
    queryKey: ['tdl-filters'],
    queryFn: getTDLFilters,
    staleTime: Infinity,
  })
}

export const useTDLModels = (filters: TDLFilterParams) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) => v !== undefined && (!Array.isArray(v) || v.length > 0))
  )
  return useQuery({
    queryKey: ['tdl-models', cleanFilters],
    queryFn: () => getTDLModels(cleanFilters),
    staleTime: 1000 * 60 * 5,
  })
}