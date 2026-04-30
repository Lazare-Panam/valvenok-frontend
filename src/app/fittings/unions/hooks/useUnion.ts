import { useQuery } from "@tanstack/react-query"
import {
  getUnions,
  getUnionFilterOptions,
  type UnionFilterParams,
} from "@/src/api/unionApi"

const clean = (filters: Record<string, any>) =>
  Object.fromEntries(
    Object.entries(filters).filter(
      ([_, v]) => v !== null && v !== undefined && (!Array.isArray(v) || v.length > 0)
    )
  )

export const useUnionFilterOptions = () =>
  useQuery({
    queryKey: ["union-filters"],
    queryFn: getUnionFilterOptions,
    staleTime: Infinity,
  })

export const useUnions = (filters: UnionFilterParams) =>
  useQuery({
    queryKey: ["unions", clean(filters)],
    queryFn: () => getUnions(clean(filters) as UnionFilterParams),
    staleTime: 1000 * 60 * 5,
    placeholderData: prev => prev,
  })