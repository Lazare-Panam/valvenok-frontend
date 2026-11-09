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

// Detail pages have no dedicated by-id endpoint, so we pull the full (unfiltered)
// PCV list — cached under ["pcvs", {}], shared with the listing — and resolve a
// single product by its part number (which doubles as the URL slug).
export const usePCVBySlug = (slug: string) => {
  const query = usePCVs({})
  const product = query.data?.find(p => p.partNumber === slug)
  return { ...query, product }
}