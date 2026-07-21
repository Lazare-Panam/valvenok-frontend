export interface InverterConstantPressureModel {
  modelCode: string
  series: string
  seriesName: string
  motorPowerKw: string
  inverterPowerKw?: string
  presetPressureKgCm2: string
  nominalFlowLMin: string
  applications: string[]
  imageUrl: string
}

const HQIC_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/HQIC.webp'
const TPH_IC_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/tph.webp'
const TPH_IC_X2_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/tph-2.webp'
const TPM_IC_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/TPM-IC.webp'
const TPM_IC_X2_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/TPM-IC2.webp'

const APPS_WITH_SERVICE = [
  'Construction Industry',
  'Agriculture, Forestry, Fishery and Animal Husbandry',
  'Entertainment & Leisure Industry',
  'Accommodation & Food Service Industry',
  'Wholesale & Retail Industry',
  'Service Industry',
]

const APPS_NO_SERVICE = [
  'Construction Industry',
  'Agriculture, Forestry, Fishery and Animal Husbandry',
  'Entertainment & Leisure Industry',
  'Accommodation & Food Service Industry',
  'Wholesale & Retail Industry',
]

export const INVERTER_CONSTANT_PRESSURE_MODELS: InverterConstantPressureModel[] = [
  { modelCode: 'HQIC-40',       series: 'HQIC',       seriesName: 'HQIC Series',       motorPowerKw: '0.37 - 0.75', presetPressureKgCm2: 'Up to 3.0', nominalFlowLMin: 'Up to 40 L/min',    applications: APPS_WITH_SERVICE, imageUrl: HQIC_IMAGE },
  { modelCode: 'HQIC-105',      series: 'HQIC',       seriesName: 'HQIC Series',       motorPowerKw: '0.37 - 1.5',  presetPressureKgCm2: 'Up to 3.0', nominalFlowLMin: 'Up to 105 L/min',   applications: APPS_WITH_SERVICE, imageUrl: HQIC_IMAGE },

  { modelCode: 'TPH_IC',        series: 'TPH_IC',     seriesName: 'TPH_IC Series',     motorPowerKw: '0.38 - 6.95', inverterPowerKw: '0.75 - 7.5', presetPressureKgCm2: 'Up to 8.0', nominalFlowLMin: 'Up to 415 L/min', applications: APPS_NO_SERVICE, imageUrl: TPH_IC_IMAGE },
  { modelCode: 'TPH_IC-X2',     series: 'TPH_IC_X2',  seriesName: 'TPH_IC x2 Series',  motorPowerKw: '0.38 x2 - 6.95 x2', inverterPowerKw: '0.75 x2 - 7.5 x2', presetPressureKgCm2: 'Up to 8.0', nominalFlowLMin: 'Up to 830 L/min', applications: APPS_NO_SERVICE, imageUrl: TPH_IC_X2_IMAGE },

  { modelCode: 'TPM_IC',        series: 'TPM_IC',     seriesName: 'TPM_IC Series',     motorPowerKw: '1.5 - 7.5',   inverterPowerKw: '1.5 - 7.5', presetPressureKgCm2: 'Up to 6.0', nominalFlowLMin: 'Up to 800 L/min', applications: APPS_NO_SERVICE, imageUrl: TPM_IC_IMAGE },
  { modelCode: 'TPM_IC-X2',     series: 'TPM_IC_X2',  seriesName: 'TPM_IC x2 Series',  motorPowerKw: '1.5x2 - 7.5x2', inverterPowerKw: '1.5x2 - 7.5x2', presetPressureKgCm2: 'Up to 6.0', nominalFlowLMin: 'Up to 1,600 L/min', applications: APPS_NO_SERVICE, imageUrl: TPM_IC_X2_IMAGE },
]