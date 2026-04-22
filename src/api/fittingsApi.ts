import axiosClient from "./axiosClient"

export interface JicFittingDTO {
  id: number
  partNumber: string
  price: number
  tubeOD: string
  tubeODMm: string
  jic: string
  threadType: string
  threadSize: string
  imageUrl: string
}

export interface JicFittingFilterOptions {
  threadTypes: string[]
  tubeODs: string[]
  tubeODsMm: string[]
  jicSizes: string[]
  threadSizes: string[]
}

export interface JicFittingFilterParams {
  threadTypes?: string[]
  tubeODs?: string[]
  tubeODsMm?: string[]
  jicSizes?: string[]
  threadSizes?: string[]
}

export const getJicFittings = async (filters: JicFittingFilterParams) => {
  const params = new URLSearchParams()
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) value.forEach(v => params.append(key, v))
    else if (value !== undefined) params.append(key, String(value))
  })
  const response = await axiosClient.get('/api/fittings/jic', { params })
  return response.data as JicFittingDTO[]
}

export const getJicFittingFilters = async () => {
  const response = await axiosClient.get('/api/fittings/jic/filters')
  return response.data as JicFittingFilterOptions
}