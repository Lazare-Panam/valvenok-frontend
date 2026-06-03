export interface MABGearboxDTO {
  id: string
  model: string
  subSeries: 'Standard' | '1S' | '2S'
  gearRatio: string
  maxStemDiameter: string
  maxTorqueNm: number
  maxTorqueLbtFt: number
  maxThrustKn: number
  maxThrustLbf: number
  mechanicalAdvantage: number
  valveMountingStd: string
  valveMountingOpt: string
  handWheelDiaMm: string
  weightKg: number
  imageUrl: string
  description: string
}

export interface MABGearboxFilters {
  subSeries: string[]
  models: string[]
}

export const EMPTY_MAB_FILTERS: MABGearboxFilters = {
  subSeries: [],
  models: [],
}

export interface AvailableCountsMAB {
  subSeries: Record<string, number>
  models: Record<string, number>
}

export function applyMABFilters(
  data: MABGearboxDTO[],
  filters: MABGearboxFilters,
  exclude: keyof MABGearboxFilters | ''
): MABGearboxDTO[] {
  return data.filter(c => {
    if (exclude !== 'subSeries' && filters.subSeries.length && !filters.subSeries.includes(c.subSeries)) return false
    if (exclude !== 'models'    && filters.models.length    && !filters.models.includes(c.model))        return false
    return true
  })
}

export function countByMAB<T>(items: T[], keyFn: (item: T) => string): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const k = keyFn(item)
    counts[k] = (counts[k] ?? 0) + 1
  }
  return counts
}

const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/mab.webp'

const make = (
  model: string,
  subSeries: 'Standard' | '1S' | '2S',
  gearRatio: string,
  maxStemDiameter: string,
  maxTorqueNm: number,
  maxTorqueLbtFt: number,
  maxThrustKn: number,
  maxThrustLbf: number,
  mechanicalAdvantage: number,
  valveMountingStd: string,
  valveMountingOpt: string,
  handWheelDiaMm: string,
  weightKg: number,
): MABGearboxDTO => ({
  id: model,
  model,
  subSeries,
  gearRatio,
  maxStemDiameter,
  maxTorqueNm,
  maxTorqueLbtFt,
  maxThrustKn,
  maxThrustLbf,
  mechanicalAdvantage,
  valveMountingStd,
  valveMountingOpt,
  handWheelDiaMm,
  weightKg,
  imageUrl: IMAGE,
  description: `Panam ${model} Bevel Gearbox. Max torque ${maxTorqueNm} Nm, gear ratio ${gearRatio}, ISO 5210 ${valveMountingStd}, max thrust ${maxThrustKn} kN.`,
})

export const MAB_GEARBOX_DATA: MABGearboxDTO[] = [
  // Standard
  make('MAB-075',  'Standard', '2.5:1',  '28/ Ø22(8x7)',   250,   184.39,  75,   16860.67,  2.27, 'F10', 'F07',       'Ø300',  9.50),
  make('MAB-100',  'Standard', '3:1',    '36/ Ø28(8x7)',   420,   309.78,  100,  22480.89,  2.72, 'F12', 'F10',       'Ø300',  12.00),
  make('MAB-125',  'Standard', '3.5:1',  '44/ Ø36(10x8)',  700,   516.29,  125,  28101.12,  3.18, 'F14', 'F12, F16',  'Ø400',  22.00),
  make('MAB-150',  'Standard', '3.75:1', '54/ Ø42(12x8)',  1100,  811.32,  150,  33721.34,  3.40, 'F16', 'F14',       'Ø500',  30.00),
  make('MAB-200',  'Standard', '4:1',    '62/ Ø55(16x10)', 1600,  1180.10, 200,  44961.79,  3.63, 'F16', 'F20',       'Ø600',  34.00),
  make('MAB-300',  'Standard', '5:1',    '70/ Ø65(20x12)', 2500,  1843.91, 300,  67442.68,  4.62, 'F25', 'F30',       'Ø710',  70.00),
  make('MAB-350',  'Standard', '5.5:1',  '85/ Ø75(20x12)', 3800,  2802.74, 350,  78683.13,  5.24, 'F35', 'F30, F25',  'Ø710',  95.00),
  make('MAB-400',  'Standard', '6:1',    '95/ Ø80(22x14)', 5600,  4130.35, 400,  89923.58,  5.70, 'F35', 'F30, F25',  'Ø800',  130.00),
  make('MAB-500',  'Standard', '6.5:1',  '110/ Ø95(22x14)',7800,  5752.98, 500,  112404.47, 6.19, 'F40', 'F35, F30',  'Ø900',  175.00),
  make('MAB-1200', 'Standard', '7:1',    '120/ Ø105(28x16)',12000, 8850.75, 1200, 269770.73, 6.70, 'F40', 'F35, F30',  'Ø1000', 195.00),
  make('MAB-2500', 'Standard', '7.5:1',  '150/ Ø130(36x20)',18000,13276.12, 2500, 562022.36, 7.20, 'F48', 'F40',       'Ø1000', 390.00),
  // 1S
  make('MAB-125-1S',  '1S', '7:1',    '44/ Ø36(10x8)',   700,   516.29,  125,  28101.12,  5.72,  'F14', 'F12, F16', 'Ø400',  30.00),
  make('MAB-150-1S',  '1S', '9.4:1',  '54/ Ø42(12x8)',   1100,  811.32,  150,  33721.34,  7.82,  'F16', 'F14',      'Ø400',  35.00),
  make('MAB-200-1S',  '1S', '12:1',   '62/ Ø55(16x10)',  1600,  1180.10, 200,  44961.79,  10.16, 'F16', 'F20',      'Ø400',  40.00),
  make('MAB-300-1S',  '1S', '15:1',   '70/ Ø65(20x12)',  2500,  1843.91, 300,  67442.68,  12.94, 'F25', 'F30',      'Ø500',  80.00),
  make('MAB-350-1S',  '1S', '16.5:1', '85/ Ø75(20x12)',  3800,  2802.74, 350,  78683.13,  14.67, 'F35', 'F30, F25', 'Ø600',  105.00),
  make('MAB-400-1S',  '1S', '21:1',   '95/ Ø80(22x14)',  5600,  4130.35, 400,  89923.58,  18.81, 'F35', 'F30, F25', 'Ø600',  140.00),
  make('MAB-500-1S',  '1S', '22.75:1','110/ Ø95(22x14)', 7800,  5752.98, 500,  112404.47, 20.43, 'F40', 'F35, F30', 'Ø710',  189.00),
  make('MAB-1200-1S', '1S', '28:1',   '120/ Ø105(28x16)',12000, 8850.75, 1200, 269770.73, 24.79, 'F48', 'F35, F30', 'Ø710',  215.00),
  make('MAB-2500-1S', '1S', '30:1',   '150/ Ø130(36x20)',18000,13276.12, 2500, 562022.36, 26.64, 'F48', 'F40',      'Ø900',  430.00),
  // 2S
  make('MAB-150-2S',  '2S', '15:1',    '54/ Ø42(12x8)',   1100,  811.32,  150,  33721.34,  11.02, 'F16', 'F14',      'Ø400',  40.00),
  make('MAB-200-2S',  '2S', '16:1',    '62/ Ø55(16x10)',  1600,  1180.10, 200,  44961.79,  11.76, 'F16', 'F20',      'Ø400',  45.00),
  make('MAB-300-2S',  '2S', '45:1',    '70/ Ø65(20x12)',  2500,  1843.91, 300,  67442.68,  36.22, 'F25', 'F30',      'Ø500',  85.00),
  make('MAB-350-2S',  '2S', '49.5:1',  '85/ Ø75(20x12)',  3800,  2802.74, 350,  78683.13,  41.08, 'F35', 'F30, F25', 'Ø600',  110.00),
  make('MAB-400-2S',  '2S', '73.5:1',  '95/ Ø80(22x14)',  5600,  4130.35, 400,  89923.58,  62.07, 'F35', 'F30, F25', 'Ø600',  150.00),
  make('MAB-500-2S',  '2S', '79.63:1', '110/ Ø95(22x14)', 7800,  5752.98, 500,  112404.47, 67.41, 'F40', 'F35, F30', 'Ø710',  200.00),
  make('MAB-1200-2S', '2S', '112:1',   '120/ Ø105(28x16)',12000, 8850.75, 1200, 269770.73, 91.72, 'F40', 'F35, F30', 'Ø710',  230.00),
  make('MAB-2500-2S', '2S', '151.87:1','150/ Ø130(36x20)',18000,13276.12, 2500, 562022.36, 133.13,'F48', 'F40',      'Ø900',  450.00),
]

export const MAB_GEARBOX_DESCRIPTION = {
  title: 'MAB Series Bevel Gearboxes',
  description:
    'Panam MAB Series Bevel Gearboxes in Standard, 1S, and 2S configurations. Max torque 250–18,000 Nm, max thrust up to 2,500 kN, ISO 5210 mounting F10–F48.',
  specs: [
    'MAB Series',
    'Standard · 1S · 2S',
    '250 – 18,000 Nm',
    'F10 – F48',
    'Up to 151.87:1',
  ],
}