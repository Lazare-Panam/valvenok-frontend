import { useQuery } from '@tanstack/react-query'
import { getMechanicalSeals, getMechanicalSealFilters, MechanicalSealFilterParams } from '@/src/api/sealApi'

export const useMechanicalSealFilters = () => {
  return useQuery({
    queryKey: ['mechanical-seal-filters'],
    queryFn: getMechanicalSealFilters,
    staleTime: Infinity,
  })
}

export const useMechanicalSeals = (filters: MechanicalSealFilterParams) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) =>
      v !== undefined && (!Array.isArray(v) || v.length > 0)
    )
  ) as MechanicalSealFilterParams

  return useQuery({
    queryKey: ['mechanical-seals', cleanFilters],
    queryFn: () => getMechanicalSeals(cleanFilters),
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev,
  })
}