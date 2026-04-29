import { useQuery } from "@tanstack/react-query"
import {
  getPCVs,
  getPCVFilterOptions,
  type PCVFilterParams,
} from "@/src/api/checkValveApi"

const clean = (filters: Record<string, any>) =>
  Object.fromEntries(
    Object.entries(filters).filter(
      ([_, v]) => v !== null && v !== undefined && (!Array.isArray(v) || v.length > 0)
    )
  )

export const usePCVFilterOptions = () =>
  useQuery({
    queryKey: ["pcv-filters"],
    queryFn: getPCVFilterOptions,
    staleTime: Infinity,
  })

export const usePCVs = (filters: PCVFilterParams) =>
  useQuery({
    queryKey: ["pcvs", clean(filters)],
    queryFn: () => getPCVs(clean(filters) as PCVFilterParams),
    staleTime: 1000 * 60 * 5,
    placeholderData: prev => prev,
  })