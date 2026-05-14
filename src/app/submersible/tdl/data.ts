import { PumpModel } from "../components/types"

const TDL_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/03-TDL.png'

export const TDL_MODELS: PumpModel[] = [
  {
    modelCode: 'TDL-2V-07DS-A',
    powerKw: 0.7,
    outletInches: '2"',
    voltage: 230,
    phase: '1Ph',
    frequencyHz: 50,
    application: 'SEWAGE PUMPS',
    priceGbp: 226.38,
    imageUrl: TDL_IMAGE,
  },
  {
    modelCode: 'TDL-2V-11DS-A',
    powerKw: 1.1,
    outletInches: '2"',
    voltage: 230,
    phase: '1Ph',
    frequencyHz: 50,
    application: 'SEWAGE PUMPS',
    priceGbp: 263.34,
    imageUrl: TDL_IMAGE,
  },
  {
    modelCode: 'TDL-2V-07DT',
    powerKw: 0.7,
    outletInches: '2"',
    voltage: 415,
    phase: '3Ph',
    frequencyHz: 50,
    application: 'SEWAGE PUMPS',
    priceGbp: 197.12,
    imageUrl: TDL_IMAGE,
  },
  {
    modelCode: 'TDL-2V-11DT',
    powerKw: 1.1,
    outletInches: '2"',
    voltage: 415,
    phase: '3Ph',
    frequencyHz: 50,
    application: 'SEWAGE PUMPS',
    priceGbp: 241.78,
    imageUrl: TDL_IMAGE,
  },
]