import { useQuery } from '@tanstack/react-query'
import { getSubmersibleModels, getSubmersibleFilters, SubmersibleFilterParams } from '@/src/api/pumpsApi'
export const useSubmersibleFilters = () => {
  return useQuery({
    queryKey: ['submersible-filters'],
    queryFn: getSubmersibleFilters,
    staleTime: Infinity,
  })
}

export const useSubmersibleModels = (filters: SubmersibleFilterParams) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) => v !== undefined && (!Array.isArray(v) || v.length > 0))
  )
  return useQuery({
    queryKey: ['submersible-models', cleanFilters],
    queryFn: () => getSubmersibleModels(cleanFilters),
    staleTime: 1000 * 60 * 5,
  })
}