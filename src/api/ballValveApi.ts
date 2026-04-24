import axiosClient from "./axiosClient"

export interface BallValveDTO {
  id: number
  partNumber: string
  series: string
  bodyMaterial: string
  threadType: string
  endConnectionType: string
  connectionSize: string
  configuration: string
  seatMaterial: string
  handle: string
  pressureRating: string | null
  options: string
  imageUrl: string
}

export interface BallValveFilterOptions {
  series: string[]
  bodyMaterials: string[]
  threadTypes: string[]
  endConnectionTypes: string[]
  connectionSizes: string[]
  configurations: string[]
  seatMaterials: string[]
  handles: string[]
  pressureRatings: string[] | null
  options: string[] | null
}

export interface BallValveFilterParams {
  series?: string[]
  bodyMaterials?: string[]
  threadTypes?: string[]
  endConnectionTypes?: string[]
  connectionSizes?: string[]
  configurations?: string[]
  seatMaterials?: string[]
  handles?: string[]
  pressureRatings?: string[]
  options?: string[]
}

export const getBallValves = async (filters: BallValveFilterParams) => {
  const response = await axiosClient.post("/api/ball-valves/filter", filters)
  return response.data as BallValveDTO[]
}

export const getBallValveFilterOptions = async () => {
  const response = await axiosClient.get("/api/ball-valves/filter-options")
  return response.data as BallValveFilterOptions
}