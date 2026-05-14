export interface PumpModel {
  modelCode: string
  powerKw: number
  outletInches: string      // "2\"", "1 1/2\"", "11/2\"", "21/2\""
  voltage: number
  phase: '1Ph' | '3Ph'
  frequencyHz: number
  application: string       // "SEWAGE PUMPS", "SD SEWAGE PUMPS"
  variant?: string          // "SS Type", "Plastic Type", optional
  priceGbp: number          // USD × 0.77 × 2, rounded to 2dp
  imageUrl: string
}

