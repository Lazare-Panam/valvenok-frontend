import { useQuery } from "@tanstack/react-query"
import {
  getReducers,
  getReducerFilterOptions,
  type ReducerFilterParams,
} from "@/src/api/reducerApi"

const clean = (filters: Record<string, any>) =>
  Object.fromEntries(
    Object.entries(filters).filter(
      ([_, v]) => v !== null && v !== undefined && (!Array.isArray(v) || v.length > 0)
    )
  )

export const useReducerFilterOptions = () =>
  useQuery({
    queryKey: ["reducer-filters"],
    queryFn: getReducerFilterOptions,
    staleTime: Infinity,
  })

export const useReducers = (filters: ReducerFilterParams) =>
  useQuery({
    queryKey: ["reducers", clean(filters)],
    queryFn: () => getReducers(clean(filters) as ReducerFilterParams),
    staleTime: 1000 * 60 * 5,
    placeholderData: prev => prev,
  })