import axiosClient from './axiosClient'

export interface WeldFittingDTO {
  id: number
  partNo: string
  fittingType: string
  p1Size: string
  p1Type: string
  p1Unit: string
  p2Size: string | null
  p2Type: string | null
  p2Unit: string | null
  material: string
  imageUrl: string | null
}

export interface WeldFittingFilterOptions {
  fittingTypes: string[]
  p1Sizes: string[]
  p1Types: string[]
  p1Units: string[]
  p2Sizes: string[] | null
  p2Types: string[] | null
  p2Units: string[] | null
  materials: string[]
}

export interface WeldFittingFilterParams {
  fittingTypes?: string[]
  p1Sizes?: string[]
  p1Types?: string[]
  p1Units?: string[]
  p2Sizes?: string[]
  p2Types?: string[]
  p2Units?: string[]
  materials?: string[]
}

export const getWeldFittings = async (filters: WeldFittingFilterParams) => {
  const response = await axiosClient.post('/api/weld-fittings/filter', filters)
  return response.data as WeldFittingDTO[]
}

export const getWeldFittingFilterOptions = async () => {
  const response = await axiosClient.get('/api/weld-fittings/filter-options')
  return response.data as WeldFittingFilterOptions
}