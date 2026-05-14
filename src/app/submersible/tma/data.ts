import { PumpModel } from "../components/types"

const TMA_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/09-TMA.png'

export const TMA_MODELS: PumpModel[] = [
  {
    modelCode: 'TMA-CS11-DT',
    powerKw: 1.1,
    outletInches: '2"',
    voltage: 415,
    phase: '3Ph',
    frequencyHz: 50,
    application: 'SEWAGE PUMPS',
    priceGbp: 421.96,
    imageUrl: TMA_IMAGE,
  },
  {
    modelCode: 'TMA-CS18-DT',
    powerKw: 1.8,
    outletInches: '2"',
    voltage: 415,
    phase: '3Ph',
    frequencyHz: 50,
    application: 'SEWAGE PUMPS',
    priceGbp: 432.74,
    imageUrl: TMA_IMAGE,
  },
  {
    modelCode: 'TMA-CS26-DT',
    powerKw: 2.6,
    outletInches: '2"',
    voltage: 415,
    phase: '3Ph',
    frequencyHz: 50,
    application: 'SEWAGE PUMPS',
    priceGbp: 486.64,
    imageUrl: TMA_IMAGE,
  },
]