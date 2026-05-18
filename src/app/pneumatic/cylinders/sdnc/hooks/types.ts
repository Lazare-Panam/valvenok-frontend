export interface SDNCCylinderDTO {
  partNumber: string
  series: string
  description: string
  boreSize: number
  stroke: number
  magnetic: boolean
  price: number
}

export interface SDNCCylinderFilters {
  boreSizes: number[]
  strokes: number[]
  magnetic: boolean | null
}

export const EMPTY_SDNC_FILTERS: SDNCCylinderFilters = {
  boreSizes: [],
  strokes: [],
  magnetic: null,
}

export const SDNC_SERIES_DESCRIPTION = {
  title: "SDNC Series — ISO-15552 Profile Cylinder",
  description:
    "Double-acting ISO-15552 profile pneumatic cylinders. Standard and magnetic piston variants available across a full bore and stroke range, suitable for industrial automation, packaging, and process machinery.",
  specs: [
    "ISO 15552 Compliant",
    "Double Acting",
    "Bore Ø32–Ø125 mm",
    "Stroke 25–1000 mm",
    "Magnetic / Non-Magnetic",
    "Adjustable Cushioning",
  ],
}