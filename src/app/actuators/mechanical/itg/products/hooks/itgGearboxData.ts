export interface ITGGearboxDTO {
  id: string
  model: string
  subSeries: 'Standard' | '1S' | '2S'
  outputTorqueNm: number
  outputTorqueFtLbs: number
  maPercent: number
  gearRatio: string
  valveMountingStd: string
  valveMountingOpt: string
  actuatorMountingStd: string
  actuatorMountingOpt: string
  noOfTurns: number
  handWheelDiaMm: string
  rimPullEffortKg: number
  weightKg: number
  imageUrl: string
  description: string
}

export interface ITGGearboxFilters {
  subSeries: string[]
  models: string[]
}

export const EMPTY_ITG_FILTERS: ITGGearboxFilters = {
  subSeries: [],
  models: [],
}

export interface AvailableCountsITG {
  subSeries: Record<string, number>
  models: Record<string, number>
}

export function applyITGFilters(
  data: ITGGearboxDTO[],
  filters: ITGGearboxFilters,
  exclude: keyof ITGGearboxFilters | ''
): ITGGearboxDTO[] {
  return data.filter(c => {
    if (exclude !== 'subSeries' && filters.subSeries.length && !filters.subSeries.includes(c.subSeries)) return false
    if (exclude !== 'models'    && filters.models.length    && !filters.models.includes(c.model))        return false
    return true
  })
}

export function countByITG<T>(items: T[], keyFn: (item: T) => string): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const k = keyFn(item)
    counts[k] = (counts[k] ?? 0) + 1
  }
  return counts
}

const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/mechanical/itg.webp'

const make = (
  model: string,
  subSeries: 'Standard' | '1S' | '2S',
  outputTorqueNm: number,
  outputTorqueFtLbs: number,
  maPercent: number,
  gearRatio: string,
  valveMountingStd: string,
  valveMountingOpt: string,
  actuatorMountingStd: string,
  actuatorMountingOpt: string,
  noOfTurns: number,
  handWheelDiaMm: string,
  rimPullEffortKg: number,
  weightKg: number,
): ITGGearboxDTO => ({
  id: model,
  model,
  subSeries,
  outputTorqueNm,
  outputTorqueFtLbs,
  maPercent,
  gearRatio,
  valveMountingStd,
  valveMountingOpt,
  actuatorMountingStd,
  actuatorMountingOpt,
  noOfTurns,
  handWheelDiaMm,
  rimPullEffortKg,
  weightKg,
  imageUrl: IMAGE,
  description: `Panam ${model} ITG Gearbox. Output torque ${outputTorqueNm} Nm, gear ratio ${gearRatio}, ISO 5211 ${valveMountingStd}, ${noOfTurns} turns.`,
})

export const ITG_GEARBOX_DATA: ITGGearboxDTO[] = [
  // Standard
  make('ITG-012',  'Standard', 60,    44.25,   6.00,  '30:1',  'F05', 'F07', 'F05', 'NA',  7.5,  'Ø100', 20.41,  4.5),
  make('ITG-025',  'Standard', 125,   92.20,   7.00,  '36:1',  'F07', 'F05', 'F07', 'NA',  9.0,  'Ø200', 18.22,  5),
  make('ITG-045',  'Standard', 300,   221.27,  8.00,  '40:1',  'F10', 'F07', 'F10', 'NA',  10.0, 'Ø250', 30.61,  5.5),
  make('ITG-080',  'Standard', 650,   479.42,  10.00, '36:1',  'F12', 'F10', 'F12', 'F10', 9.0,  'Ø400', 33.16,  14.5),
  make('ITG-100',  'Standard', 800,   590.05,  10.00, '36:1',  'F12', 'F10', 'F12', 'F10', 9.0,  'Ø500', 32.65,  15),
  make('ITG-200',  'Standard', 1600,  1180.10, 11.00, '40:1',  'F14', 'F12', 'F14', 'F12', 10.0, 'Ø500', 59.37,  25),
  make('ITG-300',  'Standard', 2600,  1917.66, 16.50, '52:1',  'F16', 'F20', 'F16', 'F20', 13.0, 'Ø600', 53.60,  39),
  make('ITG-400',  'Standard', 3600,  2655.22, 16.50, '52:1',  'F16', 'F20', 'F16', 'F20', 13.0, 'Ø600', 74.21,  57),
  make('ITG-650',  'Standard', 5600,  4130.35, 17.00, '48:1',  'F20', 'F16', 'F20', 'F16', 12.0, 'Ø600', 112.04, 67),
  make('ITG-900',  'Standard', 8000,  5900.50, 18.50, '62:1',  'F25', 'F30', 'F25', 'F30', 15.5, 'Ø710', 124.30, 110),
  make('ITG-1200', 'Standard', 10500, 7744.40, 19.50, '68:1',  'F30', 'F25', 'F30', 'F25', 17.0, 'Ø710', 154.77, 121),
  make('ITG-1500', 'Standard', 13500, 9957.09, 20.00, '58:1',  'F30', 'F25', 'F30', 'F25', 14.5, 'Ø800', 172.19, 135),
  make('ITG-1800', 'Standard', 16000, 11800.99,20.00, '62:1',  'F30', 'F25', 'F30', 'F25', 15.5, 'Ø850', 192.08, 155),
  make('ITG-2400', 'Standard', 21000, 15488.81,20.00, '56:1',  'F35', 'F30', 'F35', 'F30', 14.0, 'Ø900', 238.10, 180),
  make('ITG-3200', 'Standard', 28000, 20651.74,21.00, '58:1',  'F35', 'F30', 'F35', 'F30', 14.5, 'Ø900', 302.34, 230),
  // 1S
  make('ITG-400-1S',  '1S', 3600,  2655.22, 37.46, '130:1', 'F16', 'F20', 'F16', 'F20', 32.5, 'Ø600', 32.69, 67),
  make('ITG-650-1S',  '1S', 5600,  4130.35, 47.60, '144:1', 'F20', 'F16', 'F20', 'F16', 36.0, 'Ø600', 40.02, 77),
  make('ITG-900-1S',  '1S', 8000,  5900.50, 51.80, '186:1', 'F25', 'F30', 'F25', 'F30', 46.5, 'Ø710', 44.39, 120),
  make('ITG-1200-1S', '1S', 10500, 7744.40, 54.60, '204:1', 'F30', 'F25', 'F30', 'F25', 51.0, 'Ø710', 55.28, 131),
  make('ITG-1500-1S', '1S', 13500, 9957.09, 76.00, '232:1', 'F30', 'F25', 'F30', 'F25', 58.0, 'Ø850', 42.65, 145),
  make('ITG-1800-1S', '1S', 16000, 11800.99,76.00, '248:1', 'F35', 'F30', 'F30', 'F25', 62.0, 'Ø850', 50.55, 170),
  make('ITG-2400-1S', '1S', 21000, 15488.81,76.00, '224:1', 'F35', 'F30', 'F35', 'F30', 56.0, 'Ø900', 62.66, 205),
  make('ITG-3200-1S', '1S', 28000, 20651.74,79.80, '232:1', 'F35', 'F30', 'F35', 'F30', 58.0, 'Ø900', 79.56, 240),
  // 2S
  make('ITG-900-2S',  '2S', 8000,  5900.50,  145.04, '558:1', 'F25', 'F30', 'F25', 'F30', 139.5, 'Ø710', 15.85, 135),
  make('ITG-1200-2S', '2S', 10500, 7744.40,  152.88, '612:1', 'F30', 'F25', 'F30', 'F25', 153.0, 'Ø710', 19.74, 141),
  make('ITG-1500-2S', '2S', 13500, 9957.09,  156.80, '522:1', 'F30', 'F25', 'F30', 'F25', 130.5, 'Ø850', 20.67, 155),
  make('ITG-1800-2S', '2S', 16000, 11800.99, 288.80, '992:1', 'F35', 'F30', 'F30', 'F25', 248.0, 'Ø850', 13.30, 188),
  make('ITG-2400-2S', '2S', 21000, 15488.81, 288.80, '896:1', 'F35', 'F30', 'F35', 'F30', 224.0, 'Ø900', 16.49, 215),
  make('ITG-3200-2S', '2S', 28000, 20651.74, 303.24, '928:1', 'F35', 'F30', 'F35', 'F30', 232.0, 'Ø900', 20.94, 270),
]

export const ITG_GEARBOX_DESCRIPTION = {
  title: 'ITG Series Gearboxes',
  description:
    'Panam ITG Series Gearboxes in Standard, 1S, and 2S configurations. Output torque 60–28,000 Nm, ISO 5211 mounting F05–F35, gear ratios up to 992:1.',
  specs: [
    'ITG Series',
    'Standard · 1S · 2S',
    '60 – 28,000 Nm',
    'F05 – F35',
    'Up to 992:1',
  ],
}