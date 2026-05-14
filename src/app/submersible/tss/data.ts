import { PumpModel } from "../components/types"

const TSS_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/TSS.png'

export const TSS_MODELS: PumpModel[] = [
  {
    modelCode: 'TSS-D550',
    powerKw: 0.55,
    outletInches: '—',
    voltage: 230,
    phase: '1Ph',
    frequencyHz: 50,
    application: 'SEWAGE PUMPS',
    variant: 'SS Type',
    priceGbp: 78.54,
    imageUrl: TSS_IMAGE,
  },
  {
    modelCode: 'TSS-D900',
    powerKw: 0.9,
    outletInches: '—',
    voltage: 230,
    phase: '1Ph',
    frequencyHz: 50,
    application: 'SEWAGE PUMPS',
    variant: 'SS Type',
    priceGbp: 87.78,
    imageUrl: TSS_IMAGE,
  },
    {
    modelCode: 'TPS-D550',
    powerKw: 0.55,
    outletInches: '—',
    voltage: 230,
    phase: '1Ph',
    frequencyHz: 50,
    application: 'SEWAGE PUMPS',
    variant: 'Plastic Type',
    priceGbp: 58.52,
    imageUrl: TSS_IMAGE,
  },
  {
    modelCode: 'TPS-D900',
    powerKw: 0.9,
    outletInches: '—',
    voltage: 230,
    phase: '1Ph',
    frequencyHz: 50,
    application: 'SEWAGE PUMPS',
    variant: 'Plastic Type',
    priceGbp: 64.68,
    imageUrl: TSS_IMAGE,
  },
]