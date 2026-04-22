import { useQuery } from '@tanstack/react-query'
import { getPumpsGridItems, getPumpsGridFilters, PumpsGridFilterParams } from '@/src/api/pumpsApi'

export const usePumpsGridFilters = () => {
  return useQuery({
    queryKey: ['pumps-grid-filters'],
    queryFn: getPumpsGridFilters,
    staleTime: Infinity,
  })
}

export const usePumpsGridItems = (filters: PumpsGridFilterParams) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) =>
      v !== undefined && (!Array.isArray(v) || v.length > 0)
    )
  ) as PumpsGridFilterParams

  return useQuery({
    queryKey: ['pumps-grid', cleanFilters],
    queryFn: () => getPumpsGridItems(cleanFilters),
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev, // keeps old data visible while fetching
  })
}