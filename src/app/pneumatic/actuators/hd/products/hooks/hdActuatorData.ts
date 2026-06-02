export interface HDActuatorDTO {
  id: string
  model: string
  iso5211: string
  torqueNmMin: number
  torqueNmMax: number
  torqueLbInMin: number
  torqueLbInMax: number
  springEndTorqueNmMin: number
  springEndTorqueNmMax: number
  springEndTorqueLbInMin: number
  springEndTorqueLbInMax: number
  imageUrl: string
  description: string
}

export interface HDActuatorFilters {
  models: string[]
  iso5211: string[]
}

export const EMPTY_HD_FILTERS: HDActuatorFilters = {
  models: [],
  iso5211: [],
}

export interface AvailableCountsHD {
  models: Record<string, number>
  iso5211: Record<string, number>
}

export function applyHDFilters(
  data: HDActuatorDTO[],
  filters: HDActuatorFilters,
  exclude: keyof HDActuatorFilters | ''
): HDActuatorDTO[] {
  return data.filter(c => {
    if (exclude !== 'models'  && filters.models.length  && !filters.models.includes(c.model))      return false
    if (exclude !== 'iso5211' && filters.iso5211.length && !filters.iso5211.includes(c.iso5211))   return false
    return true
  })
}

export function countByHD<T>(items: T[], keyFn: (item: T) => string): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const k = keyFn(item)
    counts[k] = (counts[k] ?? 0) + 1
  }
  return counts
}

const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/hd.webp'

const make = (
  model: string,
  iso5211: string,
  torqueNmMin: number,
  torqueNmMax: number,
  torqueLbInMin: number,
  torqueLbInMax: number,
  springEndTorqueNmMin: number,
  springEndTorqueNmMax: number,
  springEndTorqueLbInMin: number,
  springEndTorqueLbInMax: number,
): HDActuatorDTO => ({
  id: model,
  model,
  iso5211,
  torqueNmMin,
  torqueNmMax,
  torqueLbInMin,
  torqueLbInMax,
  springEndTorqueNmMin,
  springEndTorqueNmMax,
  springEndTorqueLbInMin,
  springEndTorqueLbInMax,
  imageUrl: IMAGE,
  description: `Panam HD ${model} Heavy Duty Pneumatic Actuator, ISO 5211 ${iso5211}. Output torque ${torqueNmMin}–${torqueNmMax} NM, spring end torque ${springEndTorqueNmMin}–${springEndTorqueNmMax} NM.`,
})

export const HD_ACTUATOR_DATA: HDActuatorDTO[] = [
  make('A1', 'F10/F12', 132,   1428,   1168,   12638,   83,    279,   735,   2469),
  make('01', 'F14/F16', 225,   2033,   1992,   17993,   170,   666,   1505,  5895),
  make('02', 'F16',     984,   12575,  8709,   111298,  555,   3670,  4912,  32482),
  make('03', 'F25',     3364,  22254,  29773,  196964,  1615,  6661,  14294, 58955),
  make('04', 'F30',     7620,  48245,  67442,  427004,  1706,  11322, 15099, 100208),
  make('05', 'F35',     8787,  69302,  77771,  613374,  3137,  14890, 27765, 131787),
  make('06', 'F30/F40', 17000, 120867, 150412, 1069763, 10316, 23313, 91304, 206337),
]

export const HD_ACTUATOR_DESCRIPTION = {
  title: 'HD Series Heavy Duty Pneumatic Actuators',
  description:
    'Panam HD Series Heavy Duty Pneumatic Actuators — spring return configurations for demanding industrial applications. ISO 5211 mounting, output torque from 132 to 120,867 NM.',
  specs: [
    'HD Series',
    'Spring Return',
    'ISO 5211',
    '132 – 120,867 NM',
    'F10 – F40',
  ],
}