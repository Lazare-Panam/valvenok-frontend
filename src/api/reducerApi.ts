import axiosClient from "./axiosClient"

export interface ReducerDto {
  id: number
  partNumber: string
  fittingType: string
  tubeOD: string
  tubeODUnit: string
  tubeOD2: string
  tubeOD2Unit: string
  imageUrl?: string
}

export interface ReducerFilterOptions {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  tubeOD2s: string[]
  tubeOD2Units: string[]
}

export interface ReducerFilterParams {
  fittingTypes?: string[]
  tubeODs?: string[]
  tubeODUnits?: string[]
  tubeOD2s?: string[]
  tubeOD2Units?: string[]
}

export const getReducers = async (filters: ReducerFilterParams) => {
  const response = await axiosClient.post("/api/reducers/filter", filters)
  return response.data as ReducerDto[]
}

export const getReducerFilterOptions = async () => {
  const response = await axiosClient.get("/api/reducers/filter-options")
  return response.data as ReducerFilterOptions
}