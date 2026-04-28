import { useQuery } from "@tanstack/react-query"
import {
  getAirGuns,
  getESCCylinders, getESCCylinderFilterOptions,
  getAPFittings, getAPFittingFilterOptions,
  getTubing, getTubingFilterOptions,
  type ESCCylinderFilterParams,
  type APFittingFilterParams,
  type TubingFilterParams,
} from "@/src/api/pneumaticApi"

const clean = (filters: Record<string, any>) =>
  Object.fromEntries(
    Object.entries(filters).filter(
      ([_, v]) => v !== null && v !== undefined && (!Array.isArray(v) || v.length > 0)
    )
  )

export const useAirGuns = () =>
  useQuery({ queryKey: ["air-guns"], queryFn: getAirGuns, staleTime: Infinity })

export const useESCCylinderFilterOptions = () =>
  useQuery({ queryKey: ["esc-filters"], queryFn: getESCCylinderFilterOptions, staleTime: Infinity })

export const useESCCylinders = (filters: ESCCylinderFilterParams) =>
  useQuery({
    queryKey: ["esc-cylinders", clean(filters)],
    queryFn: () => getESCCylinders(clean(filters) as ESCCylinderFilterParams),
    staleTime: 1000 * 60 * 5,
    placeholderData: prev => prev,
  })

export const useAPFittingFilterOptions = () =>
  useQuery({ queryKey: ["ap-fitting-filters"], queryFn: getAPFittingFilterOptions, staleTime: Infinity })

export const useAPFittings = (filters: APFittingFilterParams) =>
  useQuery({
    queryKey: ["ap-fittings", clean(filters)],
    queryFn: () => getAPFittings(clean(filters) as APFittingFilterParams),
    staleTime: 1000 * 60 * 5,
    placeholderData: prev => prev,
  })

export const useTubingFilterOptions = () =>
  useQuery({ queryKey: ["tubing-filters"], queryFn: getTubingFilterOptions, staleTime: Infinity })

export const useTubing = (filters: TubingFilterParams) =>
  useQuery({
    queryKey: ["tubing", clean(filters)],
    queryFn: () => getTubing(clean(filters) as TubingFilterParams),
    staleTime: 1000 * 60 * 5,
    placeholderData: prev => prev,
  })