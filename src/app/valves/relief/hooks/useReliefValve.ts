import { useQuery } from "@tanstack/react-query"
import {
  getReliefValves,
  getReliefValveFilterOptions,
  type ReliefValveFilterParams,
} from "@/src/api/reliefValveApi"

const clean = (filters: Record<string, any>) =>
  Object.fromEntries(
    Object.entries(filters).filter(
      ([_, v]) => v !== null && v !== undefined && (!Array.isArray(v) || v.length > 0)
    )
  )

export const useReliefValveFilterOptions = () =>
  useQuery({
    queryKey: ["relief-valve-filters"],
    queryFn: getReliefValveFilterOptions,
    staleTime: Infinity,
  })

export const useReliefValves = (filters: ReliefValveFilterParams) =>
  useQuery({
    queryKey: ["relief-valves", clean(filters)],
    queryFn: () => getReliefValves(clean(filters) as ReliefValveFilterParams),
    staleTime: 1000 * 60 * 5,
    placeholderData: prev => prev,
  })