import axiosClient from "./axiosClient"

export interface SubmersibleModelDTO {
  id: number
  modelCode: string
  version: string
  material: string
  diameterMm: number
  diameterInches: string
  flowM3Hr: number
  maxHeadM: number
  powerKw: number
  powerHp: number
  outletSize: string
  speed: number
  impellerTrim: string | null
  motorDiameter: string | null
  imageUrl: string
}

export interface SubmersibleFilterParams {
  version?: string[]
  diameterMm?: number[]
  flowM3Hr?: number[]
  minHeadM?: number
  maxHeadM?: number
  minPowerKw?: number
  maxPowerKw?: number
  outletSize?: string[]
  impellerTrim?: string[]
  motorDiameter?: string[]
}

export interface SubmersibleFilterOptions {
  versions: string[]
  diametersMm: number[]
  diametersInches: string[]
  flows: number[]
  outletSizes: string[]
  impellerTrims: string[]
  motorDiameters: string[]
}

export const getSubmersibleModels = async (filters: SubmersibleFilterParams) => {
  const params = new URLSearchParams()
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(v => params.append(key, String(v)))
    } else if (value !== undefined) {
      params.append(key, String(value))
    }
  })
  const response = await axiosClient.get('/api/pumps/submersible', { params })
  return response.data as SubmersibleModelDTO[]
}

export const getSubmersibleFilters = async () => {
  const response = await axiosClient.get('/api/pumps/submersible/filters')
  return response.data as SubmersibleFilterOptions
}