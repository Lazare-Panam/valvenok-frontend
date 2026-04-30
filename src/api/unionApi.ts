import axiosClient from "./axiosClient"

export interface UnionDto {
  id: number
  partNumber: string
  fittingType: string
  tubeOD: string
  tubeODUnit: string
  tubeOD2?: string
  tubeOD3?: string
  imageUrl?: string
}

export interface UnionFilterOptions {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  tubeOD2s: string[]
  tubeOD3s: string[]
}

export interface UnionFilterParams {
  fittingTypes?: string[]
  tubeODs?: string[]
  tubeODUnits?: string[]
  tubeOD2s?: string[]
  tubeOD3s?: string[]
}

export const getUnions = async (filters: UnionFilterParams) => {
  const response = await axiosClient.post("/api/unions/filter", filters)
  return response.data as UnionDto[]
}

export const getUnionFilterOptions = async () => {
  const response = await axiosClient.get("/api/unions/filter-options")
  return response.data as UnionFilterOptions
}