export interface ImmersibleCentrifugalPumpModel {
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

const TPAK_J_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TPAK-J.webp'
const TPHK_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TPHK.webp'
const TPHK_L_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TPHK_L.webp'
const TPHK_P_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TPHK_P.webp'
const TPMK_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TPMK.webp'
const TPRK_E_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TPRK_E.webp'
const TPAK8_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/TPAK8.webp'

const APPS_MANUFACTURING = ['Manufacturing Industry']

export const IMMERSIBLE_CENTRIFUGAL_MODELS: ImmersibleCentrifugalPumpModel[] = [
  { modelCode: 'TPAK-J-50HZ', series: 'TPAK-J', seriesName: 'TPAK-J Series', frequencyHz: '50', powerKw: '0.75',        headM: 'Up to 10M',  flowLMin: 'Up to 220 L/min', applications: APPS_MANUFACTURING, imageUrl: TPAK_J_IMAGE },
  { modelCode: 'TPAK-J-60HZ', series: 'TPAK-J', seriesName: 'TPAK-J Series', frequencyHz: '60', powerKw: '0.75',        headM: 'Up to 13M',  flowLMin: 'Up to 260 L/min', applications: APPS_MANUFACTURING, imageUrl: TPAK_J_IMAGE },

  { modelCode: 'TPHK-50HZ',   series: 'TPHK',   seriesName: 'TPHK Series',   frequencyHz: '50', powerKw: '0.37 - 3.4',  headM: 'Up to 65M',  flowLMin: 'Up to 280 L/min', applications: APPS_MANUFACTURING, imageUrl: TPHK_IMAGE },
  { modelCode: 'TPHK-60HZ',   series: 'TPHK',   seriesName: 'TPHK Series',   frequencyHz: '60', powerKw: '0.37 - 3.7',  headM: 'Up to 90M',  flowLMin: 'Up to 280 L/min', applications: APPS_MANUFACTURING, imageUrl: TPHK_IMAGE },

  { modelCode: 'TPHK_L-50HZ', series: 'TPHK_L', seriesName: 'TPHK_L Series', frequencyHz: '50', powerKw: '0.37 - 3.4',  headM: 'Up to 70M',  flowLMin: 'Up to 165 L/min', applications: APPS_MANUFACTURING, imageUrl: TPHK_L_IMAGE },
  { modelCode: 'TPHK_L-60HZ', series: 'TPHK_L', seriesName: 'TPHK_L Series', frequencyHz: '60', powerKw: '0.37 - 3.7',  headM: 'Up to 90M',  flowLMin: 'Up to 230 L/min', applications: APPS_MANUFACTURING, imageUrl: TPHK_L_IMAGE },

  { modelCode: 'TPHK_P-50HZ', series: 'TPHK_P', seriesName: 'TPHK_P Series', frequencyHz: '50', powerKw: '0.37 - 0.58', headM: 'Up to 55M',  flowLMin: 'Up to 60 L/min',  applications: APPS_MANUFACTURING, imageUrl: TPHK_P_IMAGE },
  { modelCode: 'TPHK_P-60HZ', series: 'TPHK_P', seriesName: 'TPHK_P Series', frequencyHz: '60', powerKw: '0.37 - 0.88', headM: 'Up to 78M',  flowLMin: 'Up to 75 L/min',  applications: APPS_MANUFACTURING, imageUrl: TPHK_P_IMAGE },

  { modelCode: 'TPMK-50HZ',   series: 'TPMK',   seriesName: 'TPMK Series',   frequencyHz: '50', powerKw: '1.1 - 3.0',   headM: 'Up to 130M', flowLMin: 'Up to 150 L/min', applications: APPS_MANUFACTURING, imageUrl: TPMK_IMAGE },
  { modelCode: 'TPMK-60HZ',   series: 'TPMK',   seriesName: 'TPMK Series',   frequencyHz: '60', powerKw: '1.1 - 3.7',   headM: 'Up to 140M', flowLMin: 'Up to 160 L/min', applications: APPS_MANUFACTURING, imageUrl: TPMK_IMAGE },

  { modelCode: 'TPRK_E-50HZ', series: 'TPRK_E', seriesName: 'TPRK_E Series', frequencyHz: '50', powerKw: '1.5 - 18.5',  headM: 'Up to 252M', flowLMin: 'Up to 590 L/min', applications: APPS_MANUFACTURING, imageUrl: TPRK_E_IMAGE },
  { modelCode: 'TPRK_E-60HZ', series: 'TPRK_E', seriesName: 'TPRK_E Series', frequencyHz: '60', powerKw: '1.5 - 18.5',  headM: 'Up to 267M', flowLMin: 'Up to 650 L/min', applications: APPS_MANUFACTURING, imageUrl: TPRK_E_IMAGE },

  { modelCode: 'TPAK8-50HZ',  series: 'TPAK8',  seriesName: 'TPAK8 Series',  frequencyHz: '50', powerKw: '0.18 - 1.3',  headM: 'Up to 12M',  flowLMin: 'Up to 360 L/min', applications: APPS_MANUFACTURING, imageUrl: TPAK8_IMAGE },
  { modelCode: 'TPAK8-60HZ',  series: 'TPAK8',  seriesName: 'TPAK8 Series',  frequencyHz: '60', powerKw: '0.18 - 1.3',  headM: 'Up to 17M',  flowLMin: 'Up to 400 L/min', applications: APPS_MANUFACTURING, imageUrl: TPAK8_IMAGE },
]