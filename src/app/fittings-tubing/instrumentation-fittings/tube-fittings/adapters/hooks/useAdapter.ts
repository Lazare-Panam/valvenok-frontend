import { useQuery } from "@tanstack/react-query"
import {
  getAdapters,
  getAdapterFilterOptions,
  type AdapterFilterParams,
} from "@/src/api/adapterApi"

const clean = (filters: Record<string, any>) =>
  Object.fromEntries(
    Object.entries(filters).filter(
      ([_, v]) => v !== null && v !== undefined && (!Array.isArray(v) || v.length > 0)
    )
  )

export const useAdapterFilterOptions = () =>
  useQuery({
    queryKey: ["adapter-filters"],
    queryFn: getAdapterFilterOptions,
    staleTime: Infinity,
  })

export const useAdapters = (filters: AdapterFilterParams) =>
  useQuery({
    queryKey: ["adapters", clean(filters)],
    queryFn: () => getAdapters(clean(filters) as AdapterFilterParams),
    staleTime: 1000 * 60 * 5,
    placeholderData: prev => prev,
  })