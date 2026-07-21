export interface HorizontalCentrifugalPumpModel {
  modelCode: string;
  series: string;
  seriesName: string;
  frequencyHz: string;
  powerKw: string;
  headM: string;
  flowLMin: string;
  applications: string[];
  imageUrl: string;
}

const WQ_B_IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/WQ_B.webp";
const HQ_B_IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/walrus-pumps/HQB.webp";
const TPH_Q_IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/TPH_Q.webp";

const APPS_FULL = [
  "Construction Industry",
  "Agriculture, Forestry, Fishery and Animal Husbandry",
  "Entertainment & Leisure Industry",
  "Accommodation & Food Service Industry",
  "Wholesale & Retail Industry",
  "Service Industry",
];

const APPS_NO_AGRICULTURE = [
  "Construction Industry",
  "Entertainment & Leisure Industry",
  "Accommodation & Food Service Industry",
  "Wholesale & Retail Industry",
  "Service Industry",
];

const APPS_CORE = [
  "Construction Industry",
  "Accommodation & Food Service Industry",
  "Service Industry",
];

export const HORIZONTAL_CENTRIFUGAL_MODELS: HorizontalCentrifugalPumpModel[] = [
  {
    modelCode: "WQ_B-50HZ",
    series: "WQ_B",
    seriesName: "WQ_B Series",
    frequencyHz: "50",
    powerKw: "0.18 - 0.75",
    headM: "Up to 34M",
    flowLMin: "Up to 125 L/min",
    applications: APPS_NO_AGRICULTURE,
    imageUrl: WQ_B_IMAGE,
  },
  {
    modelCode: "WQ_B-60HZ",
    series: "WQ_B",
    seriesName: "WQ_B Series",
    frequencyHz: "60",
    powerKw: "0.18 - 0.75",
    headM: "Up to 45M",
    flowLMin: "Up to 135 L/min",
    applications: APPS_NO_AGRICULTURE,
    imageUrl: WQ_B_IMAGE,
  },

  {
    modelCode: "HQ_B-50HZ",
    series: "HQ_B",
    seriesName: "HQ_B Series",
    frequencyHz: "50",
    powerKw: "0.18 - 0.75",
    headM: "Up to 33M",
    flowLMin: "Up to 110 L/min",
    applications: APPS_FULL,
    imageUrl: HQ_B_IMAGE,
  },
  {
    modelCode: "HQ_B-60HZ",
    series: "HQ_B",
    seriesName: "HQ_B Series",
    frequencyHz: "60",
    powerKw: "0.18 - 0.75",
    headM: "Up to 45M",
    flowLMin: "Up to 120 L/min",
    applications: APPS_FULL,
    imageUrl: HQ_B_IMAGE,
  },

  {
    modelCode: "TQ_B-50HZ",
    series: "TQ_B",
    seriesName: "TQ_B Series",
    frequencyHz: "50",
    powerKw: "0.18 - 2.2",
    headM: "Up to 34M",
    flowLMin: "Up to 250 L/min",
    applications: APPS_FULL,
    imageUrl: HQ_B_IMAGE,
  },
  {
    modelCode: "TQ_B-60HZ",
    series: "TQ_B",
    seriesName: "TQ_B Series",
    frequencyHz: "60",
    powerKw: "0.18 - 3.7",
    headM: "Up to 52M",
    flowLMin: "Up to 270 L/min",
    applications: APPS_FULL,
    imageUrl: HQ_B_IMAGE,
  },

  {
    modelCode: "TPH_Q-50HZ",
    series: "TPH_Q",
    seriesName: "TPH_Q Series",
    frequencyHz: "50",
    powerKw: "0.37 - 1.1",
    headM: "Up to 56M",
    flowLMin: "Up to 160 L/min",
    applications: APPS_FULL,
    imageUrl: TPH_Q_IMAGE,
  },

  {
    modelCode: "HQCN_B-50HZ",
    series: "HQCN_B",
    seriesName: "HQCN_B Series",
    frequencyHz: "50",
    powerKw: "0.18 - 0.75",
    headM: "Up to 33M",
    flowLMin: "Up to 110 L/min",
    applications: APPS_CORE,
    imageUrl: HQ_B_IMAGE,
  },
  {
    modelCode: "HQCN_B-60HZ",
    series: "HQCN_B",
    seriesName: "HQCN_B Series",
    frequencyHz: "60",
    powerKw: "0.18 - 0.75",
    headM: "Up to 27M",
    flowLMin: "Up to 120 L/min",
    applications: APPS_CORE,
    imageUrl: HQ_B_IMAGE,
  },

  {
    modelCode: "TQCN_B-50HZ",
    series: "TQCN_B",
    seriesName: "TQCN_B Series",
    frequencyHz: "50",
    powerKw: "0.18 - 2.2",
    headM: "Up to 34M",
    flowLMin: "Up to 250 L/min",
    applications: APPS_CORE,
    imageUrl: HQ_B_IMAGE,
  },
  {
    modelCode: "TQCN_B-60HZ",
    series: "TQCN_B",
    seriesName: "TQCN_B Series",
    frequencyHz: "60",
    powerKw: "0.18 - 3.7",
    headM: "Up to 50M",
    flowLMin: "Up to 270 L/min",
    applications: APPS_CORE,
    imageUrl: HQ_B_IMAGE,
  },
];
