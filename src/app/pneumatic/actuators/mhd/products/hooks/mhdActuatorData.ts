// MHD (Micro) series scotch yoke pneumatic actuators, Susin I-Tork.
// Figures from the Susin I-Tork "Pneumatic Actuator Micro Series SS & CS" catalogue only.
// Output torque = lowest to highest air torque in the catalogue tables (2.8–7 bar for
// double acting; 4.2–7 bar air on both spring sets for spring return).

export interface MHDActuatorDTO {
  id: string
  model: string
  yoke: string
  action: string
  iso5211: string
  torqueNmMin: number
  torqueNmMax: number
  torqueLbInMin: number
  torqueLbInMax: number
  springEndTorqueNmMin?: number
  springEndTorqueNmMax?: number
  springEndTorqueLbInMin?: number
  springEndTorqueLbInMax?: number
  imageUrl: string
  description: string
}

export interface MHDActuatorFilters {
  models: string[]
  yokes: string[]
  actions: string[]
}

export const EMPTY_MHD_FILTERS: MHDActuatorFilters = { models: [], yokes: [], actions: [] }

export interface AvailableCountsMHD {
  models: Record<string, number>
  yokes: Record<string, number>
  actions: Record<string, number>
}

export function applyMHDFilters(data: MHDActuatorDTO[], filters: MHDActuatorFilters, exclude: keyof MHDActuatorFilters | ''): MHDActuatorDTO[] {
  return data.filter(c => {
    if (exclude !== 'models'  && filters.models.length  && !filters.models.includes(c.model))  return false
    if (exclude !== 'yokes'   && filters.yokes.length   && !filters.yokes.includes(c.yoke))    return false
    if (exclude !== 'actions' && filters.actions.length && !filters.actions.includes(c.action)) return false
    return true
  })
}

export function countByMHD<T>(items: T[], keyFn: (item: T) => string): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) { const k = keyFn(item); counts[k] = (counts[k] ?? 0) + 1 }
  return counts
}

// Photos from the Susin I-Tork Micro series catalogue, on blob storage
export const MHD_IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/mhd.jpg'
export const MHD_EXPLODED = 'https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/mhd-exploded.jpg'

const make = (
  model: string, yoke: string, action: string,
  torqueNmMin: number, torqueNmMax: number, torqueLbInMin: number, torqueLbInMax: number,
  springEndTorqueNmMin?: number, springEndTorqueNmMax?: number, springEndTorqueLbInMin?: number, springEndTorqueLbInMax?: number,
): MHDActuatorDTO => ({
  id: model, model, yoke, action, iso5211: 'F07 / F10',
  torqueNmMin, torqueNmMax, torqueLbInMin, torqueLbInMax,
  springEndTorqueNmMin, springEndTorqueNmMax, springEndTorqueLbInMin, springEndTorqueLbInMax,
  imageUrl: MHD_IMAGE,
  description: `Susin I-Tork MHD (Micro) ${model} scotch yoke pneumatic actuator, ${yoke.toLowerCase()} yoke, ${action.toLowerCase()}. ISO 5211 F07 / F10. Output torque ${torqueNmMin}–${torqueNmMax} Nm.`,
})

export const MHD_ACTUATOR_DATA: MHDActuatorDTO[] = [
  make('ISD-01-12', 'Symmetric (IS)', 'Double acting', 198, 701, 1752, 6204, undefined, undefined, undefined, undefined),
  make('ISD-01-15', 'Symmetric (IS)', 'Double acting', 291, 1031, 2576, 9125, undefined, undefined, undefined, undefined),
  make('ISD-01-17', 'Symmetric (IS)', 'Double acting', 378, 1338, 3346, 11842, undefined, undefined, undefined, undefined),
  make('ISR-01-12', 'Symmetric (IS)', 'Spring return', 63, 531, 558, 4700, 169, 222, 1496, 1965),
  make('ISR-01-15', 'Symmetric (IS)', 'Spring return', 92, 781, 814, 6912, 249, 326, 2204, 2885),
  make('ISR-01-17', 'Symmetric (IS)', 'Spring return', 119, 1014, 1053, 8975, 323, 424, 2859, 3753),
  make('ICD-01-12', 'Canted (IC)', 'Double acting', 198, 772, 1752, 6833, undefined, undefined, undefined, undefined),
  make('ICD-01-15', 'Canted (IC)', 'Double acting', 291, 1135, 2576, 10046, undefined, undefined, undefined, undefined),
  make('ICD-01-17', 'Canted (IC)', 'Double acting', 378, 1474, 3346, 13046, undefined, undefined, undefined, undefined),
  make('ICR-01-12', 'Canted (IC)', 'Spring return', 123, 611, 1089, 5408, 161, 211, 1425, 1868),
  make('ICR-01-15', 'Canted (IC)', 'Spring return', 182, 899, 1611, 7957, 237, 310, 2098, 2744),
  make('ICR-01-17', 'Canted (IC)', 'Spring return', 236, 1166, 2089, 10320, 307, 402, 2717, 3558),
]

export const MHD_TORQUE_RANGE = '63 – 1,474 Nm'

export const MHD_ACTUATOR_DESCRIPTION = {
  title: 'MHD Series Micro Scotch Yoke Pneumatic Actuators',
  description:
    'Susin I-Tork MHD (Micro) scotch yoke pneumatic actuators for on/off and control of double offset butterfly valves. Symmetric (IS) and canted (IC) yokes, double acting and spring return, ISO 5211 F07 / F10, output torque 63 to 1,474 Nm.',
  specs: ['MHD (Micro) Series', 'IS & IC yokes', 'Double acting & spring return', 'ISO 5211 F07 / F10', '63 – 1,474 Nm'],
}
