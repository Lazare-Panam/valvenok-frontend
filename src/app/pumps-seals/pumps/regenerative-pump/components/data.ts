export interface RegenerativePumpModel {
  modelCode: string
  series: string
  seriesName: string
  frequencyHz: string
  powerKw: string
  headM: string
  flowLMin: string
  applications: string[]
  imageUrl: string
}

const TP8_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TP8PTB.webp'
const GQ_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/GQ.webp'
const TP3_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TP3.webp'
const TPGK_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TPGK.webp'

const APPS_FULL = [
  'Construction Industry',
  'Agriculture, Forestry, Fishery and Animal Husbandry',
  'Entertainment & Leisure Industry',
  'Accommodation & Food Service Industry',
  'Wholesale & Retail Industry',
  'Service Industry',
]

const APPS_CORE = [
  'Construction Industry',
  'Accommodation & Food Service Industry',
  'Service Industry',
]

const APPS_MANUFACTURING = ['Manufacturing Industry']

export const REGENERATIVE_PUMP_MODELS: RegenerativePumpModel[] = [
  { modelCode: 'TP8-50HZ',  series: 'TP8',  seriesName: 'TP8 Series',  frequencyHz: '50', powerKw: '0.18 - 0.37', headM: 'Up to 30M', flowLMin: 'Up to 35 L/min', applications: APPS_FULL,          imageUrl: TP8_IMAGE },
  { modelCode: 'TP8-60HZ',  series: 'TP8',  seriesName: 'TP8 Series',  frequencyHz: '60', powerKw: '0.18 - 0.37', headM: 'Up to 36M', flowLMin: 'Up to 42 L/min', applications: APPS_FULL,          imageUrl: TP8_IMAGE },

  { modelCode: 'GQ-50HZ',   series: 'GQ',   seriesName: 'GQ Series',   frequencyHz: '50', powerKw: '0.18 - 0.75', headM: '38M',       flowLMin: '80 L/min',       applications: APPS_FULL,          imageUrl: GQ_IMAGE },
  { modelCode: 'GQ-60HZ',   series: 'GQ',   seriesName: 'GQ Series',   frequencyHz: '60', powerKw: '0.18 - 0.75', headM: '38M',       flowLMin: '85 L/min',       applications: APPS_FULL,          imageUrl: GQ_IMAGE },

  { modelCode: 'GQCN-50HZ', series: 'GQCN', seriesName: 'GQCN Series', frequencyHz: '50', powerKw: '0.18 - 0.75', headM: '38M',       flowLMin: '80 L/min',       applications: APPS_CORE,          imageUrl: GQ_IMAGE },
  { modelCode: 'GQCN-60HZ', series: 'GQCN', seriesName: 'GQCN Series', frequencyHz: '60', powerKw: '0.18 - 0.75', headM: '38M',       flowLMin: '85 L/min',       applications: APPS_CORE,          imageUrl: GQ_IMAGE },

  { modelCode: 'TP3-50HZ',  series: 'TP3',  seriesName: 'TP3 Series',  frequencyHz: '50', powerKw: '0.37',        headM: '35M',       flowLMin: '35 L/min',       applications: APPS_FULL,          imageUrl: TP3_IMAGE },
  { modelCode: 'TP3-60HZ',  series: 'TP3',  seriesName: 'TP3 Series',  frequencyHz: '60', powerKw: '0.37',        headM: '40M',       flowLMin: '42 L/min',       applications: APPS_FULL,          imageUrl: TP3_IMAGE },

  { modelCode: 'TPGK-60HZ', series: 'TPGK', seriesName: 'TPGK Series', frequencyHz: '60', powerKw: '0.98',        headM: 'Up to 62M', flowLMin: 'Up to 55 L/min', applications: APPS_MANUFACTURING, imageUrl: TPGK_IMAGE },
]