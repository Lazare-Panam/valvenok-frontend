export interface VF7Model {
  modelCode: string
  sizeInches: string
  endType: string
  flange: string
  ratingBar: number
  body: string
  disc: string
  stem: string
  seat: string
  leakageRate: string
  operator: string
  priceGbp: number
  imageUrl: string
}

const VF7_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/CENTRIC__25C11iulkk.jpg'

export const VF7_MODELS: VF7Model[] = [
  { modelCode: 'VF-730A-2IN',   sizeInches: '2"',   endType: 'Wafer', flange: 'PN10/PN16', ratingBar: 16, body: 'CI', disc: 'CF8M', stem: 'SS410', seat: 'EPDM', leakageRate: 'A', operator: 'Bare Shaft', priceGbp: 49.20,  imageUrl: VF7_IMAGE },
  { modelCode: 'VF-730A-2_5IN', sizeInches: '2.5"', endType: 'Wafer', flange: 'PN10/PN16', ratingBar: 16, body: 'CI', disc: 'CF8M', stem: 'SS410', seat: 'EPDM', leakageRate: 'A', operator: 'Bare Shaft', priceGbp: 53.80,  imageUrl: VF7_IMAGE },
  { modelCode: 'VF-730A-3IN',   sizeInches: '3"',   endType: 'Wafer', flange: 'PN10/PN16', ratingBar: 16, body: 'CI', disc: 'CF8M', stem: 'SS410', seat: 'EPDM', leakageRate: 'A', operator: 'Bare Shaft', priceGbp: 60.80,  imageUrl: VF7_IMAGE },
  { modelCode: 'VF-730A-4IN',   sizeInches: '4"',   endType: 'Wafer', flange: 'PN10/PN16', ratingBar: 16, body: 'CI', disc: 'CF8M', stem: 'SS410', seat: 'EPDM', leakageRate: 'A', operator: 'Bare Shaft', priceGbp: 77.20,  imageUrl: VF7_IMAGE },
  { modelCode: 'VF-730A-6IN',   sizeInches: '6"',   endType: 'Wafer', flange: 'PN10/PN16', ratingBar: 16, body: 'CI', disc: 'CF8M', stem: 'SS410', seat: 'EPDM', leakageRate: 'A', operator: 'Bare Shaft', priceGbp: 128.60, imageUrl: VF7_IMAGE },
  { modelCode: 'VF-730A-8IN',   sizeInches: '8"',   endType: 'Wafer', flange: 'PN10/PN16', ratingBar: 16, body: 'CI', disc: 'CF8M', stem: 'SS410', seat: 'EPDM', leakageRate: 'A', operator: 'Bare Shaft', priceGbp: 243.20, imageUrl: VF7_IMAGE },
  { modelCode: 'VF-730A-10IN',  sizeInches: '10"',  endType: 'Wafer', flange: 'PN10/PN16', ratingBar: 16, body: 'CI', disc: 'CF8M', stem: 'SS410', seat: 'EPDM', leakageRate: 'A', operator: 'Bare Shaft', priceGbp: 388.40, imageUrl: VF7_IMAGE },
  { modelCode: 'VF-730A-12IN',  sizeInches: '12"',  endType: 'Wafer', flange: 'PN10/PN16', ratingBar: 16, body: 'CI', disc: 'CF8M', stem: 'SS410', seat: 'EPDM', leakageRate: 'A', operator: 'Bare Shaft', priceGbp: 587.20, imageUrl: VF7_IMAGE },
]