export interface EFittingDTO {
  partNumber: string
  series: string
  description: string
  fittingType: string
  tubeSize: number | null
  threadSize: string | null
  price: number
}

export interface EFittingFilters {
  fittingTypes: string[]
  tubeSizes: number[]
  threadSizes: string[]
}

export const EMPTY_E_FILTERS: EFittingFilters = {
  fittingTypes: [],
  tubeSizes: [],
  threadSizes: [],
}

export const E_SERIES_DESCRIPTION = {
  title: "E-Series Push-In Fittings",
  description:
    "Quick-connect push-in fittings for pneumatic and instrumentation systems. Connectors, elbows, tees, Y-fittings, banjo elbows, flow control and hand valves across tube sizes 4mm to 16mm with BSP and M5 thread options.",
  specs: [
    "Tube Ø4 – Ø16 mm",
    "BSP M5, 1/8\", 1/4\", 3/8\", 1/2\"",
    "Push-In Connection",
    "Connectors, Elbows, Tees, Y, Banjos",
    "Flow Control & Hand Valves",
    "280+ Configurations",
  ],
}