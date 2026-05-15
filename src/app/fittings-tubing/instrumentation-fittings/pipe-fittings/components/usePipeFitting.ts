import { useQuery } from '@tanstack/react-query'
import {
  getPipeFittings,
  getPipeFittingFilterOptions,
  type PipeFittingFilterParams
} from '@/src/api/fittingsApi'

export const usePipeFittingFilterOptions = () => {
  return useQuery({
    queryKey: ['pipe-fitting-filters'],
    queryFn: getPipeFittingFilterOptions,
    staleTime: Infinity,
  })
}

export const usePipeFittings = (filters: PipeFittingFilterParams) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) =>
      v !== undefined && (!Array.isArray(v) || v.length > 0)
    )
  ) as PipeFittingFilterParams

  return useQuery({
    queryKey: ['pipe-fittings', cleanFilters],
    queryFn: () => getPipeFittings(cleanFilters),
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev,
  })
}