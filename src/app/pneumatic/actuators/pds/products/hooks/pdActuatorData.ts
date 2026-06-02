export interface PDActuatorDTO {
  id: string
  model: string
  series: 'PD' | 'PDS'
  angle?: string
  // PD fields
  torque_2_8_bar?: number
  torque_3_5_bar?: number
  torque_4_2_bar?: number
  torque_5_5_bar?: number
  torque_6_bar?: number
  torque_7_bar?: number
  torque_8_bar?: number
  airConsumptionOpen?: number
  airConsumptionClose?: number
  // PDS fields
  iso5211?: string
  outputTorqueNmMin?: number
  outputTorqueNmMax?: number
  outputTorqueLbInMin?: number
  outputTorqueLbInMax?: number
  springEndTorqueNmMin?: number
  springEndTorqueNmMax?: number
  springEndTorqueLbInMin?: number
  springEndTorqueLbInMax?: number
  imageUrl: string
  description: string
}

export interface PDActuatorFilters {
  series: string[]
  models: string[]
  angles: string[]
}

export const EMPTY_PD_FILTERS: PDActuatorFilters = {
  series: [],
  models: [],
  angles: [],
}

export interface AvailableCountsPD {
  series: Record<string, number>
  models: Record<string, number>
  angles: Record<string, number>
}

export function applyPDFilters(
  data: PDActuatorDTO[],
  filters: PDActuatorFilters,
  exclude: keyof PDActuatorFilters | ''
): PDActuatorDTO[] {
  return data.filter(c => {
    if (exclude !== 'series'  && filters.series.length  && !filters.series.includes(c.series))           return false
    if (exclude !== 'models'  && filters.models.length  && !filters.models.includes(c.model))            return false
    if (exclude !== 'angles'  && filters.angles.length  && c.angle && !filters.angles.includes(c.angle)) return false
    return true
  })
}

export function countByPD<T>(items: T[], keyFn: (item: T) => string): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const k = keyFn(item)
    counts[k] = (counts[k] ?? 0) + 1
  }
  return counts
}

const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/pdf.webp'

const makePD = (
  model: string,
  angle: string,
  torque_2_8_bar: number,
  torque_3_5_bar: number,
  torque_4_2_bar: number,
  torque_5_5_bar: number,
  torque_6_bar: number,
  torque_7_bar: number,
  torque_8_bar: number,
  airConsumptionOpen: number,
  airConsumptionClose: number,
): PDActuatorDTO => ({
  id: `${model}-${angle}`,
  model,
  series: 'PD',
  angle,
  torque_2_8_bar,
  torque_3_5_bar,
  torque_4_2_bar,
  torque_5_5_bar,
  torque_6_bar,
  torque_7_bar,
  torque_8_bar,
  airConsumptionOpen,
  airConsumptionClose,
  imageUrl: IMAGE,
  description: `Panam ${model} Double Acting Pneumatic Actuator, ${angle} rotation. Output torque up to ${torque_8_bar} NM at 8 bar.`,
})

const makePDS = (
  model: string,
  iso5211: string,
  outputTorqueNmMin: number,
  outputTorqueNmMax: number,
  outputTorqueLbInMin: number,
  outputTorqueLbInMax: number,
  springEndTorqueNmMin: number,
  springEndTorqueNmMax: number,
  springEndTorqueLbInMin: number,
  springEndTorqueLbInMax: number,
): PDActuatorDTO => ({
  id: model,
  model,
  series: 'PDS',
  iso5211,
  outputTorqueNmMin,
  outputTorqueNmMax,
  outputTorqueLbInMin,
  outputTorqueLbInMax,
  springEndTorqueNmMin,
  springEndTorqueNmMax,
  springEndTorqueLbInMin,
  springEndTorqueLbInMax,
  imageUrl: IMAGE,
  description: `Panam ${model} Spring Return Pneumatic Actuator, ISO 5211 ${iso5211}. Output torque ${outputTorqueNmMin}–${outputTorqueNmMax} NM, spring end torque ${springEndTorqueNmMin}–${springEndTorqueNmMax} NM.`,
})

export const PD_ACTUATOR_DATA: PDActuatorDTO[] = [
  // PD Series — Double Acting
  makePD('PD45',  '0°',  12,   16,   20,   26,   28,   34,   38,   0.12, 0.12),
  makePD('PD45',  '45°', 5,    7,    9,    11,   12,   14,   16,   0.12, 0.12),
  makePD('PD45',  '90°', 8,    12,   15,   18,   20,   23,   27,   0.12, 0.12),
  makePD('PD50',  '0°',  27,   34,   41,   54,   59,   69,   79,   0.16, 0.16),
  makePD('PD50',  '45°', 12,   15,   17,   23,   25,   29,   33,   0.16, 0.16),
  makePD('PD50',  '90°', 19,   24,   29,   38,   42,   48,   55,   0.16, 0.16),
  makePD('PD55',  '0°',  27,   45,   56,   73,   80,   94,   107,  0.34, 0.34),
  makePD('PD55',  '45°', 15,   18,   23,   30,   33,   37,   44,   0.34, 0.34),
  makePD('PD55',  '90°', 25,   32,   39,   51,   57,   65,   75,   0.34, 0.34),
  makePD('PD200', '0°',  1622, 2028, 2433, 3187, 3476, 4056, 4635, 9.07, 9.21),
  makePD('PD200', '45°', 679,  848,  1018, 1333, 1454, 1697, 1939, 9.07, 9.21),
  makePD('PD200', '90°', 1136, 1420, 1704, 2231, 2434, 2840, 3245, 9.07, 9.21),

  // PDS Series — Spring Return
  makePDS('PDS-45',  'F05/F07', 5,   40,   44,   354,   5,   15,   44,   133),
  makePDS('PDS-50',  'F05/F07', 10,  80,   89,   708,   5,   30,   44,   266),
  makePDS('PDS-55',  'F05/F07', 12,  125,  106,  974,   12,  25,   106,  221),
  makePDS('PDS-70',  'F07/F10', 30,  220,  266,  1947,  25,  70,   221,  620),
  makePDS('PDS-75',  'F07/F10', 50,  330,  443,  2921,  35,  120,  310,  1062),
  makePDS('PDS-85',  'F07/F10', 60,  460,  531,  3629,  45,  160,  398,  1416),
  makePDS('PDS-100', 'F10/F10', 120, 885,  1062, 5753,  70,  260,  664,  2301),
  makePDS('PDS-125', 'F10/F12', 180, 1250, 1593, 11063, 105, 360,  885,  4071),
  makePDS('PDS-160', 'F10/F14', 300, 2400, 3186, 21246, 150, 1000, 1328, 8851),
  makePDS('PDS-200', 'F12/F16', 760, 4600, 5947, 40713, 350, 2000, 4868, 17701),
]

export const PD_ACTUATOR_DESCRIPTION = {
  title: 'Pneumatic Actuators',
  description:
    'Panam Pneumatic Actuators in Double Acting (PD) and Spring Return (PDS) series. Double acting models available in 0°, 45°, and 90° configurations across multiple pressure ratings. Spring return models with ISO 5211 mounting and output torque up to 4,600 NM.',
  specs: [
    'PD · PDS',
    'Double Acting · Spring Return',
    '0° · 45° · 90°',
    'ISO 5211',
    'Up to 4,600 NM',
    'Up to 8 Bar',
  ],
}