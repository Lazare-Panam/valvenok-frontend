import { useQuery } from '@tanstack/react-query'
import { getJicFittings, getJicFittingFilters, JicFittingFilterParams } from '@/src/api/fittingsApi'

export const useJicFittingFilters = () => {
  return useQuery({
    queryKey: ['jic-fitting-filters'],
    queryFn: getJicFittingFilters,
    staleTime: Infinity,
  })
}

export const useJicFittings = (filters: JicFittingFilterParams) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) =>
      v !== undefined && (!Array.isArray(v) || v.length > 0)
    )
  ) as JicFittingFilterParams

  return useQuery({
    queryKey: ['jic-fittings', cleanFilters],
    queryFn: () => getJicFittings(cleanFilters),
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev,
  })
}