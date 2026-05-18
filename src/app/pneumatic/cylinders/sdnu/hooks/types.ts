export interface SDNUCylinderDTO {
  partNumber: string
  series: string
  description: string
  boreSize: number
  stroke: number
  magnetic: boolean
  cushion: boolean
  price: number
}

export interface SDNUCylinderFilters {
  boreSizes: number[]
  strokes: number[]
  cushion: boolean | null
}

export const EMPTY_SDNU_FILTERS: SDNUCylinderFilters = {
  boreSizes: [],
  strokes: [],
  cushion: null,
}