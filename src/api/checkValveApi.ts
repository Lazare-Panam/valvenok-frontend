import axiosClient from "./axiosClient"

export interface PCVDto {
  id: number
  partNumber: string
  material: string
  inlet: string
  inletTubeOD: string
  outlet?: string
  outletTubeOD?: string
  imageUrl?: string
}

export interface PCVFilterOptions {
  materials: string[]
  inlets: string[]
  inletTubeODs: string[]
  outlets: string[]
  outletTubeODs: string[]
}

export interface PCVFilterParams {
  materials?: string[]
  inlets?: string[]
  inletTubeODs?: string[]
  outlets?: string[]
  outletTubeODs?: string[]
}

export const getPCVs = async (filters: PCVFilterParams) => {
  const response = await axiosClient.post("/api/check-valves/pcv/filter", filters)
  return response.data as PCVDto[]
}

export const getPCVFilterOptions = async () => {
  const response = await axiosClient.get("/api/check-valves/pcv/filter-options")
  return response.data as PCVFilterOptions
}