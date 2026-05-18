export interface ESNCCylinderDTO {
  id: number
  partNumber: string
  series: string
  description: string
  boreSize: number
  stroke: number
  magnetic: boolean
  price: number
}

export interface ESNCCylinderFilters {
  boreSizes: number[]
  strokes: number[]
}

export const EMPTY_ESNC_FILTERS: ESNCCylinderFilters = {
  boreSizes: [],
  strokes: [],
}