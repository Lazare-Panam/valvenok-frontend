export interface SealFilters {
  shaftSizes: string[]
  sealSizesMm: string[]
  sealSizesInch: string[]
}

export const EMPTY_SEAL_FILTERS: SealFilters = {
  shaftSizes: [],
  sealSizesMm: [],
  sealSizesInch: [],
}