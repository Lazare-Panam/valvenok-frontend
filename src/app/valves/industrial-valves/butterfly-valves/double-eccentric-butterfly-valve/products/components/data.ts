export interface VF9AModel {
  modelCode: string
  sizeInches: string
  endType: string
  flange: string
  ratingBar: number
  body: string
  disc: string
  stem: string
  seat: string
  yoke: string
  leakageRate: string
  operator: string
  priceGbp: number
  stockStatus: string
  imageUrl: string
}

const VF9A_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/Double-Offset__25C11bHDDc.jpg'

export const VF9A_MODELS: VF9AModel[] = [
  { modelCode: 'VF-910A-2IN',   sizeInches: '2"',   endType: 'Wafer', flange: 'PN16', ratingBar: 16, body: 'CF8M', disc: 'CF8M', stem: 'SS630', seat: 'PTFE', yoke: 'DI', leakageRate: 'A', operator: 'Bare Shaft', priceGbp: 450.80,  stockStatus: 'Non-Inventory', imageUrl: VF9A_IMAGE },
  { modelCode: 'VF-910A-2_5IN', sizeInches: '2.5"', endType: 'Wafer', flange: 'PN16', ratingBar: 16, body: 'CF8M', disc: 'CF8M', stem: 'SS630', seat: 'PTFE', yoke: 'DI', leakageRate: 'A', operator: 'Bare Shaft', priceGbp: 502.00,  stockStatus: 'Non-Inventory', imageUrl: VF9A_IMAGE },
  { modelCode: 'VF-910A-3IN',   sizeInches: '3"',   endType: 'Wafer', flange: 'PN16', ratingBar: 16, body: 'CF8M', disc: 'CF8M', stem: 'SS630', seat: 'PTFE', yoke: 'DI', leakageRate: 'A', operator: 'Bare Shaft', priceGbp: 672.00,  stockStatus: 'Non-Inventory', imageUrl: VF9A_IMAGE },
  { modelCode: 'VF-910A-4IN',   sizeInches: '4"',   endType: 'Wafer', flange: 'PN16', ratingBar: 16, body: 'CF8M', disc: 'CF8M', stem: 'SS630', seat: 'PTFE', yoke: 'DI', leakageRate: 'A', operator: 'Bare Shaft', priceGbp: 782.80,  stockStatus: 'Non-Inventory', imageUrl: VF9A_IMAGE },
  { modelCode: 'VF-910A-6IN',   sizeInches: '6"',   endType: 'Wafer', flange: 'PN16', ratingBar: 16, body: 'CF8M', disc: 'CF8M', stem: 'SS630', seat: 'PTFE', yoke: 'DI', leakageRate: 'A', operator: 'Bare Shaft', priceGbp: 1085.00, stockStatus: 'Non-Inventory', imageUrl: VF9A_IMAGE },
  { modelCode: 'VF-910A-8IN',   sizeInches: '8"',   endType: 'Wafer', flange: 'PN16', ratingBar: 16, body: 'CF8M', disc: 'CF8M', stem: 'SS630', seat: 'PTFE', yoke: 'DI', leakageRate: 'A', operator: 'Bare Shaft', priceGbp: 1716.60, stockStatus: 'Non-Inventory', imageUrl: VF9A_IMAGE },
  { modelCode: 'VF-910A-10IN',  sizeInches: '10"',  endType: 'Wafer', flange: 'PN16', ratingBar: 16, body: 'CF8M', disc: 'CF8M', stem: 'SS630', seat: 'PTFE', yoke: 'DI', leakageRate: 'A', operator: 'Bare Shaft', priceGbp: 2367.00, stockStatus: 'Non-Inventory', imageUrl: VF9A_IMAGE },
  { modelCode: 'VF-910A-12IN',  sizeInches: '12"',  endType: 'Wafer', flange: 'PN16', ratingBar: 16, body: 'CF8M', disc: 'CF8M', stem: 'SS630', seat: 'PTFE', yoke: 'DI', leakageRate: 'A', operator: 'Bare Shaft', priceGbp: 3260.40, stockStatus: 'Non-Inventory', imageUrl: VF9A_IMAGE },
]