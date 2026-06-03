export interface MAWGearboxDTO {
  id: string
  model: string
  subSeries: 'Standard' | '1S' | '2S'
  outputTorqueNm: number
  outputTorqueFtLbs: number
  maPercent: number
  gearRatio: string
  valveMountingStd: string
  valveMountingOpt: string
  noOfTurns: number
  handWheelDiaMm: number
  rimPullEffortKg: number
  weightKg: number
  imageUrl: string
  description: string
}

export interface MAWGearboxFilters {
  subSeries: string[]
  models: string[]
}

export const EMPTY_MAW_FILTERS: MAWGearboxFilters = {
  subSeries: [],
  models: [],
}

export interface AvailableCountsMAW {
  subSeries: Record<string, number>
  models: Record<string, number>
}

export function applyMAWFilters(
  data: MAWGearboxDTO[],
  filters: MAWGearboxFilters,
  exclude: keyof MAWGearboxFilters | ''
): MAWGearboxDTO[] {
  return data.filter(c => {
    if (exclude !== 'subSeries' && filters.subSeries.length && !filters.subSeries.includes(c.subSeries)) return false
    if (exclude !== 'models'    && filters.models.length    && !filters.models.includes(c.model))        return false
    return true
  })
}

export function countByMAW<T>(items: T[], keyFn: (item: T) => string): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const k = keyFn(item)
    counts[k] = (counts[k] ?? 0) + 1
  }
  return counts
}

const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/worm-gearboxes.webp'

const make = (
  model: string,
  subSeries: 'Standard' | '1S' | '2S',
  outputTorqueNm: number,
  outputTorqueFtLbs: number,
  maPercent: number,
  gearRatio: string,
  valveMountingStd: string,
  valveMountingOpt: string,
  noOfTurns: number,
  handWheelDiaMm: number,
  rimPullEffortKg: number,
  weightKg: number,
): MAWGearboxDTO => ({
  id: model,
  model,
  subSeries,
  outputTorqueNm,
  outputTorqueFtLbs,
  maPercent,
  gearRatio,
  valveMountingStd,
  valveMountingOpt,
  noOfTurns,
  handWheelDiaMm,
  rimPullEffortKg,
  weightKg,
  imageUrl: IMAGE,
  description: `Panam ${model} Worm Gearbox. Output torque ${outputTorqueNm} Nm, gear ratio ${gearRatio}, ISO 5211 ${valveMountingStd}, ${noOfTurns} turns, handwheel Ø${handWheelDiaMm} mm.`,
})

export const MAW_GEARBOX_DATA: MAWGearboxDTO[] = [
  // Standard
  make('MAW-012',  'Standard', 125,   92.20,  6.00,  '32:1',  'F05', 'F05', 8,    100, 63.78,  4),
  make('MAW-025',  'Standard', 250,   184.40, 7.00,  '32:1',  'F07', 'F05', 8,    200, 63.78,  4.5),
  make('MAW-045',  'Standard', 450,   331.90, 8.00,  '38:1',  'F10', 'F07', 9.5,  250, 45.92,  5.5),
  make('MAW-080',  'Standard', 800,   590.00, 12.20, '40:1',  'F12', 'F10', 10,   400, 33.46,  10),
  make('MAW-100',  'Standard', 1000,  737.60, 12.20, '40:1',  'F12', 'F10', 10,   500, 33.46,  11),
  make('MAW-200',  'Standard', 2000,  1475.00,12.50, '42:1',  'F14', 'F12', 10.5, 500, 65.31,  20),
  make('MAW-300',  'Standard', 3000,  2212.70,16.50, '52:1',  'F16', 'F20', 13,   600, 61.84,  33),
  make('MAW-400',  'Standard', 4000,  2950.00,16.50, '56:1',  'F20', 'F16', 14,   600, 82.46,  43),
  make('MAW-650',  'Standard', 6500,  4794.00,17.50, '52:1',  'F20', 'F16', 13,   600, 126.34, 57),
  make('MAW-900',  'Standard', 9000,  6638.00,20.00, '66:1',  'F25', 'F30', 16.5, 710, 129.35, 88),
  make('MAW-1200', 'Standard', 12000, 8851.00,20.50, '68:1',  'F30', 'F25', 17,   710, 168.26, 100),
  make('MAW-1500', 'Standard', 15000, 11063.00,21.00,'60:1',  'F30', 'F25', 15,   800, 182.22, 130),
  make('MAW-1800', 'Standard', 18000, 13276.00,21.00,'62:1',  'F30', 'F25', 15.5, 850, 205.80, 160),
  make('MAW-2400', 'Standard', 24000, 17701.00,21.00,'56:1',  'F35', 'F30', 14,   900, 259.15, 190),
  make('MAW-3200', 'Standard', 32000, 23602.00,22.00,'58:1',  'F35', 'F30', 14.5, 900, 329.83, 235),
  // 1S
  make('MAW-300-1S',  '1S', 3000,  2212.70, 29.70, '102:1', 'F16', 'F20', 25.5, 600, 34.36, 42),
  make('MAW-400-1S',  '1S', 4000,  2950.00, 37.46, '144:1', 'F20', 'F16', 36,   600, 36.32, 53),
  make('MAW-650-1S',  '1S', 4794,  4794.00, 40.00, '156:1', 'F20', 'F16', 39,   600, 45.12, 67),
  make('MAW-900-1S',  '1S', 9000,  6638.00, 56.00, '198:1', 'F25', 'F30', 49.5, 710, 46.20, 98),
  make('MAW-1200-1S', '1S', 12000, 8851.00, 57.40, '204:1', 'F30', 'F25', 51,   710, 60.09, 110),
  make('MAW-1500-1S', '1S', 15000, 11063.00,79.80, '240:1', 'F30', 'F25', 60,   850, 45.13, 140),
  make('MAW-1800-1S', '1S', 18000, 13276.00,79.80, '248:1', 'F35', 'F30', 62,   850, 54.16, 165),
  make('MAW-2400-1S', '1S', 24000, 17701.00,79.80, '224:1', 'F35', 'F30', 56,   900, 68.20, 210),
  make('MAW-3200-1S', '1S', 32000, 23602.00,83.60, '232:1', 'F35', 'F30', 58,   900, 86.80, 225),
  // 2S
  make('MAW-900-2S',  '2S', 9000,  8851.00,  156.80, '594:1', 'F25', 'F30', 148.5, 710, 16.50, 108),
  make('MAW-1200-2S', '2S', 12000, 11063.00, 160.72, '612:1', 'F30', 'F25', 153,   710, 21.46, 118),
  make('MAW-1500-2S', '2S', 15000, 11063.00, 164.64, '528:1', 'F30', 'F25', 132,   850, 21.87, 135),
  make('MAW-1800-2S', '2S', 18000, 13276.00, 303.24, '992:1', 'F35', 'F30', 248,   850, 14.25, 188),
  make('MAW-2400-2S', '2S', 24000, 17701.00, 303.40, '896:1', 'F35', 'F30', 224,   900, 17.95, 210),
  make('MAW-3200-2S', '2S', 32000, 23602.00, 317.68, '928:1', 'F35', 'F30', 232,   900, 22.84, 270),
]

export const MAW_GEARBOX_DESCRIPTION = {
  title: 'MAW Series Worm Gearboxes',
  description:
    'Panam MAW Series Worm Gearboxes in Standard, 1S, and 2S configurations. Output torque 125–32,000 Nm, ISO 5211 mounting F05–F35, gear ratios up to 992:1.',
  specs: [
    'MAW Series',
    'Standard · 1S · 2S',
    '125 – 32,000 Nm',
    'F05 – F35',
    'Up to 992:1',
  ],
}