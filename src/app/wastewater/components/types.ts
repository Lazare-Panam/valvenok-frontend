export interface Filters {
  productFamilyIds: number[]
  p2Kws: number[]
  voltages: number[]
  rpms: number[]
  deliverySizes: number[]
  maxSolidSizes: number[]
  phases: string[]
  autoCouplingCodes: string[]
  versions: string[]
  diametersMm: number[]
  pumpTypes: string[]
  impellerTypes: string[]
  inbuiltTop: boolean | undefined
  moistureSensor: boolean | undefined
  hasCapacitor: boolean | undefined
}

export const EMPTY_FILTERS: Filters = {
  productFamilyIds: [],
  p2Kws: [],
  voltages: [],
  rpms: [],
  deliverySizes: [],
  maxSolidSizes: [],
  phases: [],
  autoCouplingCodes: [],
  versions: [],
  diametersMm: [],
  pumpTypes: [],
  impellerTypes: [],
  inbuiltTop: undefined,
  moistureSensor: undefined,
  hasCapacitor: undefined,
}