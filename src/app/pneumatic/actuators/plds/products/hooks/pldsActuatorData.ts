export interface PLDSActuatorDTO {
  id: string
  model: string
  pistonAreaMm2: number
  stemSizeMm: number
  maxTravelPldMm: number
  maxTravelPlsMm: number
  boreMm: number
  thrustKnMin: number // double acting (PLD), 2.8 bar
  thrustKnMax: number // double acting (PLD), 7 bar
  imageUrl: string
  description: string
}

export interface PLDSActuatorFilters {
  models: string[]
  stemSizes: number[]
}

export const EMPTY_PLDS_FILTERS: PLDSActuatorFilters = {
  models: [],
  stemSizes: [],
}

export interface AvailableCountsPLDS {
  models: Record<string, number>
  stemSizes: Record<string, number>
}

export function applyPLDSFilters(
  data: PLDSActuatorDTO[],
  filters: PLDSActuatorFilters,
  exclude: keyof PLDSActuatorFilters | ''
): PLDSActuatorDTO[] {
  return data.filter(c => {
    if (exclude !== 'models'    && filters.models.length    && !filters.models.includes(c.model))         return false
    if (exclude !== 'stemSizes' && filters.stemSizes.length && !filters.stemSizes.includes(c.stemSizeMm)) return false
    return true
  })
}

export function countByPLDS<T>(items: T[], keyFn: (item: T) => string | number): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const k = String(keyFn(item))
    counts[k] = (counts[k] ?? 0) + 1
  }
  return counts
}

const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/plds.webp'

const make = (
  model: string,
  pistonAreaMm2: number,
  stemSizeMm: number,
  maxTravelPldMm: number,
  maxTravelPlsMm: number,
  boreMm: number,
  thrustKnMin: number,
  thrustKnMax: number,
): PLDSActuatorDTO => ({
  id: model,
  model,
  pistonAreaMm2,
  stemSizeMm,
  maxTravelPldMm,
  maxTravelPlsMm,
  boreMm,
  thrustKnMin,
  thrustKnMax,
  imageUrl: IMAGE,
  description: `Susin ${model} linear piston actuator, ${boreMm} mm bore. Double acting thrust ${thrustKnMin}–${thrustKnMax} kN at 2.8–7 bar; piston area ${pistonAreaMm2.toLocaleString("en-GB")} mm², stem ${stemSizeMm} mm, max travel ${maxTravelPldMm} mm (PLD) / ${maxTravelPlsMm} mm (PLS).`,
})

export const PLDS_ACTUATOR_DATA: PLDSActuatorDTO[] = [
  make('PLDS-100', 7850,   25, 203.2, 101.6, 100, 1.8, 4.7),
  make('PLDS-125', 12266,  25, 254,   127, 125, 2.8, 7.3),
  make('PLDS-160', 20096,  25, 304.8, 152.4, 160, 4.7, 12),
  make('PLDS-180', 25434,  25, 355.6, 177.8, 180, 5.9, 15.1),
  make('PLDS-200', 31400,  25, 406.4, 203.2, 200, 7.3, 18.8),
  make('PLDS-230', 41527,  32, 457.2, 228.6, 230, 9.7, 24.7),
  make('PLDS-250', 49063,  32, 508,   254, 250, 11.5, 29.2),
  make('PLDS-280', 61544,  32, 558.8, 279.4, 280, 14.5, 36.6),
  make('PLDS-300', 72929,  36, 609.6, 304.8, 304.8, 17.1, 43.4),
  make('PLDS-350', 85798,  36, 660.4, 330.2, 330.6, 20.2, 51),
  make('PLDS-380', 118604, 36, 711.2, 355.6, 388.7, 28, 70.6),
  make('PLDS-430', 148815, 42, 762,   381, 435.4, 35.1, 88.5),
  make('PLDS-480', 182904, 42, 812.8, 406.4, 482.7, 43.2, 108.8),
  make('PLDS-530', 224519, 50, 863.6, 431.8, 534.8, 53, 133.6),
  make('PLDS-580', 274743, 50, 914.4, 457.2, 591.6, 64.9, 163.5),
  make('PLDS-630', 322039, 50, 965.2, 482.6, 640.5, 76.2, 191.6),
  make('PLDS-680', 373305, 50, 1016,  508, 689.6, 88.4, 222.1),
  make('PLDS-730', 435695, 60, 1067,  533.4, 745, 103, 259.2),
  make('PLDS-780', 489919, 60, 1067,  533.4, 790, 115.9, 291.5),
  make('PLDS-830', 518861, 65, 1067,  533.4, 813, 122.7, 308.7),
  make('PLDS-880', 607904, 65, 1067,  533.4, 880, 143.9, 361.7),
  make('PLDS-930', 678947, 75, 1067,  533.4, 930, 160.5, 404),
  make('PLDS-980', 746241, 75, 1067,  533.4, 975, 176.6, 444),
]

export const PLDS_ACTUATOR_DESCRIPTION = {
  title: 'PLDS Series Linear Pneumatic Actuators',
  description:
    'Susin PLDS Series linear piston actuators, 100–975 mm bore, double acting thrust 1.8–444 kN at 2.8–7 bar. Piston areas from 7,850 to 746,241 mm², stem sizes 25–75 mm, max travel up to 1,067 mm.',
  specs: [
    'PLDS Series',
    'Linear',
    '25 – 75 mm Stem',
    'Up to 1,067 mm Travel',
  ],
}