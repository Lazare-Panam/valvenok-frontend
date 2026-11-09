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

// Detail pages have no dedicated by-id endpoint, so we pull the full (unfiltered)
// relief-valve list — cached under ["relief-valves", {}], shared with the listing —
// and resolve a single product by its part number (which doubles as the URL slug).
export const useReliefValveBySlug = (slug: string) => {
  const query = useReliefValves({})
  const product = query.data?.find(p => p.partNumber === slug)
  return { ...query, product }
}