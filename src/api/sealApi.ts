import axiosClient from "./axiosClient"

export interface MechanicalSealDTO {
  id: number
  partNumber: string
  price: number
  shaftSizeMm: string | null
  sealSizeInch: string | null
  sealSizeMm: string | null
  imageUrl: string
}

export interface MechanicalSealFilterOptions {
  shaftSizes: string[]
  sealSizesMm: string[]
  sealSizesInch: string[]
}

export interface MechanicalSealFilterParams {
  shaftSizes?: string[]
  sealSizesMm?: string[]
  sealSizesInch?: string[]
}

export const getMechanicalSeals = async (filters: MechanicalSealFilterParams) => {
  const params = new URLSearchParams()
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) value.forEach(v => params.append(key, v))
    else if (value !== undefined) params.append(key, String(value))
  })
  const response = await axiosClient.get('/api/seals', { params })
  return response.data as MechanicalSealDTO[]
}

export const getMechanicalSealFilters = async () => {
  const response = await axiosClient.get('/api/seals/filters')
  return response.data as MechanicalSealFilterOptions
}