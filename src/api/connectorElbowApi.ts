import axiosClient from "./axiosClient"

export interface ConnectorElbowDto {
  id: number
  partNumber: string
  fittingType: string
  tubeOD: string
  tubeODUnit: string
  threadDimension: string
  threadType: string
  isPositionable?: boolean
  hasORingSeal?: boolean
  imageUrl?: string
}

export interface ConnectorElbowFilterOptions {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  threadDimensions: string[]
  threadTypes: string[]
}

export interface ConnectorElbowFilterParams {
  fittingTypes?: string[]
  tubeODs?: string[]
  tubeODUnits?: string[]
  threadDimensions?: string[]
  threadTypes?: string[]
  isPositionable?: boolean | null
  hasORingSeal?: boolean | null
}

export const getConnectorElbows = async (filters: ConnectorElbowFilterParams) => {
  const response = await axiosClient.post("/api/connectors-elbows/filter", filters)
  return response.data as ConnectorElbowDto[]
}

export const getConnectorElbowFilterOptions = async () => {
  const response = await axiosClient.get("/api/connectors-elbows/filter-options")
  return response.data as ConnectorElbowFilterOptions
}