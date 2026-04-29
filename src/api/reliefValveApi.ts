import axiosClient from "./axiosClient"

export interface ReliefValveDto {
  id: number
  partNumber: string
  series: string
  bodyMaterial: string
  connectionSize: string
  threadType: string
  connectionType: string
  spring: string
  sealMaterial: string
  options?: string
  imageUrl?: string
}

export interface ReliefValveFilterOptions {
  series: string[]
  bodyMaterials: string[]
  connectionSizes: string[]
  threadTypes: string[]
  connectionTypes: string[]
  springs: string[]
  sealMaterials: string[]
}

export interface ReliefValveFilterParams {
  series?: string[]
  bodyMaterials?: string[]
  connectionSizes?: string[]
  threadTypes?: string[]
  connectionTypes?: string[]
  springs?: string[]
  sealMaterials?: string[]
}

export const getReliefValves = async (filters: ReliefValveFilterParams) => {
  const response = await axiosClient.post("/api/relief-valves/filter", filters)
  return response.data as ReliefValveDto[]
}

export const getReliefValveFilterOptions = async () => {
  const response = await axiosClient.get("/api/relief-valves/filter-options")
  return response.data as ReliefValveFilterOptions
}