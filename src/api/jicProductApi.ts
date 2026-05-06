import axiosClient from './axiosClient'

export interface JICProductDTO {
  id: number
  partNo: string
  fittingType: string
  material: string
  p1Size: string
  p1Type: string
  p2Size: string | null
  p2Type: string | null
  imageUrl: string | null
}

export interface JICProductFilterOptions {
  fittingTypes: string[]
  materials: string[]
  p1Sizes: string[]
  p1Types: string[]
  p2Sizes: string[] | null
  p2Types: string[] | null
}

export interface JICProductFilterParams {
  fittingTypes?: string[]
  materials?: string[]
  p1Sizes?: string[]
  p1Types?: string[]
  p2Sizes?: string[]
  p2Types?: string[]
}

export const getJICProducts = async (filters: JICProductFilterParams) => {
  const response = await axiosClient.post('/api/jic-products/filter', filters)
  return response.data as JICProductDTO[]
}

export const getJICProductFilterOptions = async () => {
  const response = await axiosClient.get('/api/jic-products/filter-options')
  return response.data as JICProductFilterOptions
}