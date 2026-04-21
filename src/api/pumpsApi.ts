import axiosClient from "./axiosClient"

export interface SubmersibleModelDTO {
  id: number
  modelCode: string
  version: string
  material: string
  diameterMm: number
  diameterInches: string
  flowM3Hr: number
  maxHeadM: number
  powerKw: number
  powerHp: number
  outletSize: string
  speed: number
  impellerTrim: string | null
  motorDiameter: string | null
  imageUrl: string
}

export interface SubmersibleFilterParams {
  version?: string[]
  diameterMm?: number[]
  flowM3Hr?: number[]
  minHeadM?: number
  maxHeadM?: number
  minPowerKw?: number
  maxPowerKw?: number
  outletSize?: string[]
  impellerTrim?: string[]
  motorDiameter?: string[]
}

export interface SubmersibleFilterOptions {
  versions: string[]
  diametersMm: number[]
  diametersInches: string[]
  flows: number[]
  outletSizes: string[]
  impellerTrims: string[]
  motorDiameters: string[]
}

export const getSubmersibleModels = async (filters: SubmersibleFilterParams) => {
  const params = new URLSearchParams()
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(v => params.append(key, String(v)))
    } else if (value !== undefined) {
      params.append(key, String(value))
    }
  })
  const response = await axiosClient.get('/api/pumps/submersible', { params })
  return response.data as SubmersibleModelDTO[]
}

export const getSubmersibleFilters = async () => {
  const response = await axiosClient.get('/api/pumps/submersible/filters')
  return response.data as SubmersibleFilterOptions
}
export interface TSLModelDTO {
  id: number
  modelCode: string
  pumpType: string
  impellerType: string
  powerKw: number
  voltage: number
  phase: string
  outletSizeMm: string
  rpm: number
  deliverySizeMm: number
  maxSolidSizeMm: number
  weightKg: number
  inbuiltCapacitor: boolean
  autoFloatSwitch: boolean
  imageUrl: string
}

export interface TSLFilterParams {
  pumpType?: string[]
  impellerType?: string[]
  voltage?: number[]
  phase?: string[]
  outletSizeMm?: string[]
  minPowerKw?: number
  maxPowerKw?: number
  inbuiltCapacitor?: boolean
  autoFloatSwitch?: boolean
}

export interface TSLFilterOptions {
  pumpTypes: string[]
  impellerTypes: string[]
  voltages: number[]
  phases: string[]
  outletSizes: string[]
}

export const getTSLModels = async (filters: TSLFilterParams) => {
  const params = new URLSearchParams()
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(v => params.append(key, String(v)))
    } else if (value !== undefined) {
      params.append(key, String(value))
    }
  })
  const response = await axiosClient.get('/api/pumps/tsl', { params })
  return response.data as TSLModelDTO[]
}

export const getTSLFilters = async () => {
  const response = await axiosClient.get('/api/pumps/tsl/filters')
  return response.data as TSLFilterOptions
}


export interface TDLModelDTO {
  id: number
  modelCode: string
  pumpType: string
  impellerType: string
  powerKw: number
  voltage: number
  capacitorValueUF: number | null
  currentAmp: number
  phase: string
  outletSizeInches: string
  rpm: number
  maxSolidSizeMm: number
  weightKg: number
  inbuiltCapacitor: boolean
  imageUrl: string
}

export interface TDLFilterParams {
  voltage?: number[]
  phase?: string[]
  outletSizeInches?: string[]
  minPowerKw?: number
  maxPowerKw?: number
  inbuiltCapacitor?: boolean
}

export interface TDLFilterOptions {
  voltages: number[]
  phases: string[]
  outletSizes: string[]
}

export const getTDLModels = async (filters: TDLFilterParams) => {
  const params = new URLSearchParams()
  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(v => params.append(key, String(v)))
    } else if (value !== undefined) {
      params.append(key, String(value))
    }
  })
  const response = await axiosClient.get('/api/pumps/tdl', { params })
  return response.data as TDLModelDTO[]
}

export const getTDLFilters = async () => {
  const response = await axiosClient.get('/api/pumps/tdl/filters')
  return response.data as TDLFilterOptions
}