import axiosClient from "./axiosClient"

export interface AirGunDTO {
  id: number
  partNumber: string
  description: string
  imageUrl?: string
  price: number
}

export interface ESCCylinderDTO {
  id: number
  partNumber: string
  description: string
  series: string
  boreSize: number
  stroke: number
  throughRod: boolean
  magnetic: boolean
  price: number
}

export interface ESCCylinderFilterOptions {
  boreSizes: number[]
  strokes: number[]
}

export interface ESCCylinderFilterParams {
  boreSizes?: number[]
  strokes?: number[]
  throughRod?: boolean | null
  magnetic?: boolean | null
}

export interface APFittingDTO {
  id: number
  partNumber: string
  description: string
  series: string
  fittingType: string
  fittingTypeDescription: string
  tubeSize: number
  threadSize: string
  threadSizeDescription: string
  imageUrl?: string
  price: number
}

export interface APFittingFilterOptions {
  series: string[]
  fittingTypes: string[]
  fittingTypeDescriptions: string[]
  tubeSizes: number[]
  threadSizes: string[]
}

export interface APFittingFilterParams {
  series?: string[]
  fittingTypes?: string[]
  tubeSizes?: number[]
  threadSizes?: string[]
}

export interface TubingDTO {
  id: number
  partNumber: string
  description: string
  tubingType: string
  od: number
  innerDiameter: number
  color: string
  rollLength: number
  hasConnector: boolean
  connectorSpec?: string
  price: number
  imageUrl?: string
}

export interface TubingFilterOptions {
  tubingTypes: string[]
  colors: string[]
  rollLengths: number[]
}

export interface TubingFilterParams {
  tubingTypes?: string[]
  colors?: string[]
  rollLengths?: number[]
  hasConnector?: boolean | null
}

// Air Guns
export const getAirGuns = async () => {
  const response = await axiosClient.get("/api/pneumatics/air-guns")
  return response.data as AirGunDTO[]
}

// ESC Cylinders
export const getESCCylinders = async (filters: ESCCylinderFilterParams) => {
  const response = await axiosClient.post("/api/pneumatics/cylinders/esc/filter", filters)
  return response.data as ESCCylinderDTO[]
}
export const getESCCylinderFilterOptions = async () => {
  const response = await axiosClient.get("/api/pneumatics/cylinders/esc/filter-options")
  return response.data as ESCCylinderFilterOptions
}

// AP Fittings
export const getAPFittings = async (filters: APFittingFilterParams) => {
  const response = await axiosClient.post("/api/pneumatics/fittings/ap/filter", filters)
  return response.data as APFittingDTO[]
}
export const getAPFittingFilterOptions = async () => {
  const response = await axiosClient.get("/api/pneumatics/fittings/ap/filter-options")
  return response.data as APFittingFilterOptions
}

// Tubing
export const getTubing = async (filters: TubingFilterParams) => {
  const response = await axiosClient.post("/api/pneumatics/tubing/filter", filters)
  return response.data as TubingDTO[]
}
export const getTubingFilterOptions = async () => {
  const response = await axiosClient.get("/api/pneumatics/tubing/filter-options")
  return response.data as TubingFilterOptions
}