export interface SpecialisedPumpModel {
  modelCode: string
  series: string
  seriesName: string
  frequencyHz: string
  powerKw: string
  headM?: string
  flowLMin?: string
  pressureKgCm2?: string
  applications: string[]
  imageUrl: string
}

const LMP_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/LMP2050.png'
const ATOMIZER_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/atomic.webp'
const PSI_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/PSI.webp'
const PW_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/PW.webp'
const PK_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/PK.webp'

const APPS_MANUFACTURING = ['Manufacturing Industry']

const APPS_AGRI_SERVICE = [
  'Agriculture, Forestry, Fishery and Animal Husbandry',
  'Service Industry',
]

const APPS_PSI = [
  'Construction',
  'Manufacturing',
  'Agriculture Forestry Fishery and Animal Husbandry',
  'Water Supply & Pollution Control',
  'Entertainment & Leisure',
]

const APPS_PW = [
  'Construction Industry',
  'Agriculture, Forestry, Fishery and Animal Husbandry',
  'Entertainment & Leisure Industry',
  'Water Supply & Pollution Control',
]

const APPS_PK = [
  'Construction Industry',
  'Agriculture, Forestry, Fishery and Animal Husbandry',
  'Entertainment & Leisure Industry',
]

export const SPECIALISED_PUMP_MODELS: SpecialisedPumpModel[] = [
  { modelCode: 'LMP-50HZ',      series: 'LMP',      seriesName: 'LMP Series',      frequencyHz: '50', powerKw: '5.5 - 7.5', headM: 'Up to 800M', flowLMin: 'Up to 28 L/min', applications: APPS_MANUFACTURING, imageUrl: LMP_IMAGE },
  { modelCode: 'LMP-60HZ',      series: 'LMP',      seriesName: 'LMP Series',      frequencyHz: '60', powerKw: '5.5 - 7.5', headM: 'Up to 800M', flowLMin: 'Up to 28 L/min', applications: APPS_MANUFACTURING, imageUrl: LMP_IMAGE },

  { modelCode: 'ATOMIZER-50HZ', series: 'Atomizer', seriesName: 'Atomizer Series', frequencyHz: '50', powerKw: '0.25 - 0.37', pressureKgCm2: 'Up to 30', applications: APPS_AGRI_SERVICE, imageUrl: ATOMIZER_IMAGE },
  { modelCode: 'ATOMIZER-60HZ', series: 'Atomizer', seriesName: 'Atomizer Series', frequencyHz: '60', powerKw: '0.25 - 0.37', pressureKgCm2: 'Up to 3',  applications: APPS_AGRI_SERVICE, imageUrl: ATOMIZER_IMAGE },

  { modelCode: 'PSI-60HZ',      series: 'PSI',      seriesName: 'PSI Series',      frequencyHz: '60', powerKw: '1.5 - 3.7', headM: 'Up to 25M', flowLMin: 'Up to 1,000 L/min', applications: APPS_PSI, imageUrl: PSI_IMAGE },

  { modelCode: 'PW-50HZ',       series: 'PW',       seriesName: 'PW Series',       frequencyHz: '50', powerKw: '0.1 - 0.8',  headM: 'Up to 14M', flowLMin: 'Up to 440 L/min', applications: APPS_PW, imageUrl: PW_IMAGE },
  { modelCode: 'PW-60HZ',       series: 'PW',       seriesName: 'PW Series',       frequencyHz: '60', powerKw: '0.1 - 0.8',  headM: 'Up to 14M', flowLMin: 'Up to 440 L/min', applications: APPS_PW, imageUrl: PW_IMAGE },

  { modelCode: 'PK-50HZ',       series: 'PK',       seriesName: 'PK Series',       frequencyHz: '50', powerKw: '0.15',        headM: 'Up to 6.0M', flowLMin: 'Up to 220 L/min', applications: APPS_PK, imageUrl: PK_IMAGE },
  { modelCode: 'PK-60HZ',       series: 'PK',       seriesName: 'PK Series',       frequencyHz: '60', powerKw: '0.10 - 0.25', headM: 'Up to 6.5M', flowLMin: 'Up to 260 L/min', applications: APPS_PK, imageUrl: PK_IMAGE },
]