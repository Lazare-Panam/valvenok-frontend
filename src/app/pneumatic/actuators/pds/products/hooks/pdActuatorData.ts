export interface PDActuatorDTO {
  id: string
  model: string
  series: 'PD' | 'PS'
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
  iso5211: string,
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
  iso5211,
  imageUrl: IMAGE,
  description: `Susin I-Tork ${model} double acting scotch yoke actuator, ${angle} position. Output torque ${torque_2_8_bar}–${torque_8_bar} Nm at 2.8–8 bar.`,
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
  series: 'PS',
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
  description: `Susin I-Tork ${model} spring return scotch yoke actuator, ISO 5211 ${iso5211}. Air-stroke torque ${outputTorqueNmMin}–${outputTorqueNmMax} Nm at 4.2–7 bar, spring torque ${springEndTorqueNmMin}–${springEndTorqueNmMax} Nm.`,
})

export const PD_ACTUATOR_DATA: PDActuatorDTO[] = [
  // PD: double acting. Susin I-Tork PDS catalogue p.5 (torque Nm at 2.8–8 bar; air L/stroke at 5.5 bar)
  makePD('PD45',   '0°', 12, 16, 20, 26, 28, 34, 38, 0.12, 0.12, 'F03/F05/F07'),
  makePD('PD45',  '45°', 5, 7, 9, 11, 12, 14, 16, 0.12, 0.12, 'F03/F05/F07'),
  makePD('PD45',  '90°', 8, 12, 15, 18, 20, 23, 27, 0.12, 0.12, 'F03/F05/F07'),
  makePD('PD50',   '0°', 27, 34, 41, 54, 59, 69, 79, 0.16, 0.16, 'F03/F05/F07'),
  makePD('PD50',  '45°', 12, 15, 17, 23, 25, 29, 33, 0.16, 0.16, 'F03/F05/F07'),
  makePD('PD50',  '90°', 19, 24, 29, 38, 42, 48, 55, 0.16, 0.16, 'F03/F05/F07'),
  makePD('PD55',   '0°', 27, 45, 56, 73, 80, 94, 107, 0.34, 0.34, 'F05/F07'),
  makePD('PD55',  '45°', 15, 18, 23, 30, 33, 37, 44, 0.34, 0.34, 'F05/F07'),
  makePD('PD55',  '90°', 25, 32, 39, 51, 57, 65, 75, 0.34, 0.34, 'F05/F07'),
  makePD('PD70',   '0°', 76, 95, 114, 149, 163, 190, 217, 0.46, 0.46, 'F05/F07'),
  makePD('PD70',  '45°', 32, 40, 48, 62, 68, 79, 90, 0.46, 0.46, 'F05/F07'),
  makePD('PD70',  '90°', 53, 66, 78, 104, 114, 133, 152, 0.46, 0.46, 'F05/F07'),
  makePD('PD75',   '0°', 112, 141, 170, 223, 243, 284, 324, 0.99, 0.96, 'F07/F10'),
  makePD('PD75',  '45°', 47, 58, 70, 93, 101, 117, 134, 0.99, 0.96, 'F07/F10'),
  makePD('PD75',  '90°', 78, 98, 119, 155, 170, 198, 226, 0.99, 0.96, 'F07/F10'),
  makePD('PD85',   '0°', 141, 176, 212, 277, 302, 353, 403, 0.8, 0.8, 'F05/F07'),
  makePD('PD85',  '45°', 59, 74, 89, 116, 127, 148, 169, 0.8, 0.8, 'F05/F07'),
  makePD('PD85',  '90°', 99, 123, 148, 194, 212, 247, 282, 0.8, 0.8, 'F05/F07'),
  makePD('PD100',   '0°', 229, 286, 343, 449, 490, 571, 653, 1.32, 1.28, 'F07/F10'),
  makePD('PD100',  '45°', 96, 120, 144, 188, 205, 239, 273, 1.32, 1.28, 'F07/F10'),
  makePD('PD100',  '90°', 160, 200, 240, 314, 343, 400, 457, 1.32, 1.28, 'F07/F10'),
  makePD('PD125',   '0°', 438, 547, 657, 860, 938, 1095, 1250, 2.49, 2.42, 'F10/F12'),
  makePD('PD125',  '45°', 182, 228, 273, 358, 390, 456, 521, 2.49, 2.42, 'F10/F12'),
  makePD('PD125',  '90°', 306, 383, 460, 602, 657, 766, 876, 2.49, 2.42, 'F10/F12'),
  makePD('PD160',   '0°', 850, 1062, 1274, 1668, 1820, 2124, 2427, 4.52, 4.61, 'F10/F14'),
  makePD('PD160',  '45°', 355, 444, 533, 698, 761, 888, 1015, 4.52, 4.61, 'F10/F14'),
  makePD('PD160',  '90°', 595, 744, 892, 1168, 1275, 1487, 1700, 4.52, 4.61, 'F10/F14'),
  makePD('PD200',   '0°', 1622, 2028, 2433, 3187, 3476, 4056, 4635, 9.07, 9.21, 'F12/F16'),
  makePD('PD200',  '45°', 679, 848, 1018, 1333, 1454, 1697, 1939, 9.07, 9.21, 'F12/F16'),
  makePD('PD200',  '90°', 1136, 1420, 1704, 2231, 2434, 2840, 3245, 9.07, 9.21, 'F12/F16'),

  // PS: spring return (spring close). Catalogue p.6: air-stroke torque = lowest–highest air figure at 4.2–7 bar;
  // spring-end torque = lowest–highest spring figure. ISO 5211 from the dimensions table (p.8).
  makePDS('PS45', 'F03/F05/F07', 4.0, 20.5, 35, 181, 4.3, 15.1, 38, 134),
  makePDS('PS50', 'F03/F05/F07', 8.3, 42.5, 73, 376, 9.0, 32.2, 80, 285),
  makePDS('PS55', 'F05/F07', 11.0, 55.2, 97, 489, 11.9, 41.1, 105, 364),
  makePDS('PS70', 'F05/F07', 21.9, 112.3, 194, 994, 25.7, 84.6, 227, 749),
  makePDS('PS75', 'F07/F10', 31.5, 178.1, 279, 1576, 37.8, 127.8, 335, 1131),
  makePDS('PS85', 'F05/F07', 40.1, 216.7, 355, 1918, 48.4, 159.5, 428, 1412),
  makePDS('PS100', 'F07/F10', 64.7, 359.6, 573, 3183, 78.6, 259.2, 696, 2294),
  makePDS('PS125', 'F10/F12', 115.9, 689.3, 1026, 6101, 158.4, 471.5, 1402, 4173),
  makePDS('PS160', 'F10/F14', 239.6, 1373.0, 2121, 12152, 292.7, 997.6, 2591, 8829),
  makePDS('PS200', 'F12/F16', 452.2, 2603.4, 4002, 23042, 564.3, 1920.1, 4994, 16994),
]

export const PD_ACTUATOR_DESCRIPTION = {
  title: 'PDS Series Pneumatic Actuators',
  description:
    'Susin I-Tork PDS scotch yoke actuators: double acting (PD45–PD200, 5–4,635 Nm at 2.8–8 bar, shown at 0°, 45° and 90°) and spring return (PS45–PS200, spring torque 4.3–1,920 Nm). ISO 5211 mounting, F03 to F16.',
  specs: [
    'PD · PS',
    'Double Acting · Spring Return',
    '0° · 45° · 90°',
    'ISO 5211 F03–F16',
    'Up to 4,635 Nm',
    'Max 8 bar',
  ],
}
