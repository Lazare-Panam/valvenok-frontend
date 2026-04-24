import { useQuery } from '@tanstack/react-query'
import {
  getBallValves,
  getBallValveFilterOptions,
  type BallValveFilterParams
} from '../../../api/ballValveApi'

export const useBallValveFilterOptions = () => {
  return useQuery({
    queryKey: ['ball-valve-filters'],
    queryFn: getBallValveFilterOptions,
    staleTime: Infinity,
  })
}

export const useBallValves = (filters: BallValveFilterParams) => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) =>
      v !== undefined && (!Array.isArray(v) || v.length > 0)
    )
  ) as BallValveFilterParams

  return useQuery({
    queryKey: ['ball-valves', cleanFilters],
    queryFn: () => getBallValves(cleanFilters),
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev,
  })
}