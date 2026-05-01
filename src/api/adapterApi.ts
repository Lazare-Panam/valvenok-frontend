import axiosClient from "./axiosClient"

export interface AdapterDto {
  id: number
  partNumber: string
  fittingType: string
  tubeOD: string
  tubeODUnit: string
  threadSize: string
  threadType: string
  imageUrl?: string
}

export interface AdapterFilterOptions {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  threadSizes: string[]
  threadTypes: string[]
}

export interface AdapterFilterParams {
  fittingTypes?: string[]
  tubeODs?: string[]
  tubeODUnits?: string[]
  threadSizes?: string[]
  threadTypes?: string[]
}

export const getAdapters = async (filters: AdapterFilterParams) => {
  const response = await axiosClient.post("/api/adapters/filter", filters)
  return response.data as AdapterDto[]
}

export const getAdapterFilterOptions = async () => {
  const response = await axiosClient.get("/api/adapters/filter-options")
  return response.data as AdapterFilterOptions
}