import { useQuery } from '@tanstack/react-query'
import { getTGAModels, getTGAFilters, TGAFilterParams } from '@/src/api/pumpsApi'

export const useTGAFilters = () => {
  return useQuery({
    queryKey: ['tga-filters'],
    queryFn: getTGAFilters,
    staleTime: Infinity,
  })
}

export const useTGAModels = (filters: TGAFilterParams) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) => v !== undefined && (!Array.isArray(v) || v.length > 0))
  )
  return useQuery({
    queryKey: ['tga-models', cleanFilters],
    queryFn: () => getTGAModels(cleanFilters),
    staleTime: 1000 * 60 * 5,
  })
}