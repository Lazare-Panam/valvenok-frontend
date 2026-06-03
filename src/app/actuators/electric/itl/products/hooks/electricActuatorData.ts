export interface ElectricActuatorDTO {
  id: string
  model: string
  series: 'ITL' | 'IQL'
  strokeMm: string
  thrustForceKn: string
  speedMmSec: string
  enclosure: string
  weightKg: string
  // expand panel
  mainPowerSupply: string
  ratedCurrentA: string
  dutyCycleOnOff: string
  dutyCycleModulating: string
  controlSignal: string
  limitSwitch: string
  forceSwitch: string
  ambientTemp: string
  materials: string
  cableEntries: string
  mountingDirection: string
  applicableValve: string
  size: string
  imageUrl: string
  description: string
}

export interface ElectricActuatorFilters {
  series: string[]
  models: string[]
}

export const EMPTY_ELECTRIC_FILTERS: ElectricActuatorFilters = {
  series: [],
  models: [],
}

export interface AvailableCountsElectric {
  series: Record<string, number>
  models: Record<string, number>
}

export function applyElectricFilters(
  data: ElectricActuatorDTO[],
  filters: ElectricActuatorFilters,
  exclude: keyof ElectricActuatorFilters | ''
): ElectricActuatorDTO[] {
  return data.filter(c => {
    if (exclude !== 'series' && filters.series.length && !filters.series.includes(c.series)) return false
    if (exclude !== 'models' && filters.models.length && !filters.models.includes(c.model))  return false
    return true
  })
}

export function countByElectric<T>(items: T[], keyFn: (item: T) => string): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const k = keyFn(item)
    counts[k] = (counts[k] ?? 0) + 1
  }
  return counts
}

const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itl.webp'

const make = (
  model: string,
  series: 'ITL' | 'IQL',
  strokeMm: string,
  thrustForceKn: string,
  speedMmSec: string,
  enclosure: string,
  weightKg: string,
  mainPowerSupply: string,
  ratedCurrentA: string,
  dutyCycleOnOff: string,
  dutyCycleModulating: string,
  controlSignal: string,
  limitSwitch: string,
  forceSwitch: string,
  ambientTemp: string,
  materials: string,
  cableEntries: string,
  mountingDirection: string,
  applicableValve: string,
  size: string,
): ElectricActuatorDTO => ({
  id: model,
  model,
  series,
  strokeMm,
  thrustForceKn,
  speedMmSec,
  enclosure,
  weightKg,
  mainPowerSupply,
  ratedCurrentA,
  dutyCycleOnOff,
  dutyCycleModulating,
  controlSignal,
  limitSwitch,
  forceSwitch,
  ambientTemp,
  materials,
  cableEntries,
  mountingDirection,
  applicableValve,
  size,
  imageUrl: IMAGE,
  description: `Panam ${model} Electric Linear Actuator. Stroke ${strokeMm} mm, thrust force ${thrustForceKn} kN, speed ${speedMmSec} mm/sec, ${enclosure} rated.`,
})

export const ELECTRIC_ACTUATOR_DATA: ElectricActuatorDTO[] = [
  make(
    'ITL01/02', 'ITL', '15–25', '1.0 / 2.0', '1.20', 'IP66 & IP67', '4.5',
    'AC100–240V (Universal), DC24V / AC24V', '0.5–1.0',
    'Continuous Duty', '>1200 start/hour',
    '4–20 mA (option), 0–10V, 2–10V, 1–5V, 0–5V',
    '2 ea (Open:1 / Close:1)', '2 ea (Open:1 / Close:1)',
    '-20°C ~ +70°C', 'Aluminum Die Casting',
    '2-PF1/2 (Opt: M20×1.5, NPT1/2, G1/2)',
    '90°', '2-Way, 3-Way', 'Ø122 × H373',
  ),
  make(
    'ITL04/06', 'ITL', '40–50', '4.0 / 6.0', '1.20', 'IP66 & IP67', '6.0',
    'AC100–240V (Universal), DC24V / AC24V', '1.5–1.9',
    'Continuous Duty', '>1200 start/hour',
    '4–20 mA (option), 0–10V, 2–10V, 1–5V, 0–5V',
    '2 ea (Open:1 / Close:1)', '2 ea (Open:1 / Close:1)',
    '-20°C ~ +70°C', 'Aluminum Die Casting',
    '2-PF1/2 (Opt: M20×1.5, NPT1/2, G1/2)',
    '90°', '2-Way, 3-Way', 'Ø148 × H482',
  ),
  make(
    'IQL04', 'IQL', '40', '4.0', '0.83', 'IP66', '7.0',
    'AC110/220/380/440V, DC24V / AC24V', '0.26',
    '52–30 min', 'S4–50%',
    '4–20 mA (option), 0–10V, 2–10V, 1–5V, 0–5V',
    '2 ea (Open:1 / Close:1)', 'NONE',
    '-20°C ~ +70°C', 'Aluminum Die Casting',
    '2-PF3/4 (Opt: M25×1.5, M20×1.5, NPT3/4, G3/4)',
    '90°', '2-Way, 3-Way', 'Ø172 × H501',
  ),
  make(
    'IQL06', 'IQL', '40', '6.0', '0.90', 'IP66', '8.0',
    'AC110/220/380/440V, DC24V / AC24V', '0.29',
    '52–30 min', 'S4–50%',
    '4–20 mA (option), 0–10V, 2–10V, 1–5V, 0–5V',
    '2 ea (Open:1 / Close:1)', 'NONE',
    '-20°C ~ +70°C', 'Aluminum Die Casting',
    '2-PF3/4 (Opt: M25×1.5, M20×1.5, NPT3/4, G3/4)',
    '90°', '2-Way, 3-Way', 'Ø172 × H501',
  ),
  make(
    'IQL08', 'IQL', '50', '8.0', '0.80', 'IP66', '15.0',
    'AC110/220/380/440V, DC24V / AC24V', '0.48',
    '52–30 min', 'S4–50%',
    '4–20 mA (option), 0–10V, 2–10V, 1–5V, 0–5V',
    '4 ea (Open:2 / Close:2)', '2 ea (Open:1 / Close:1)',
    '-20°C ~ +70°C', 'Aluminum Die Casting',
    '2-PF3/4 (Opt: M25×1.5, M20×1.5, NPT3/4, G3/4)',
    '90°', '2-Way, 3-Way', 'Ø229 × H555',
  ),
  make(
    'IQL30', 'IQL', '50', '10.0', '0.80', 'IP66', '16.0',
    'AC110/220/380/440V, DC24V / AC24V', '0.50',
    '52–30 min', 'S4–50%',
    '4–20 mA (option), 0–10V, 2–10V, 1–5V, 0–5V',
    '4 ea (Open:2 / Close:2)', '2 ea (Open:1 / Close:1)',
    '-20°C ~ +70°C', 'Aluminum Die Casting',
    '2-PF3/4 (Opt: M25×1.5, M20×1.5, NPT3/4, G3/4)',
    '90°', '2-Way, 3-Way', 'Ø229 × H555',
  ),
]

export const ELECTRIC_ACTUATOR_DESCRIPTION = {
  title: 'Electric Linear Actuators',
  description:
    'Panam ITL and IQL Series Electric Linear Actuators. Thrust force 1.0–10.0 kN, stroke 15–50 mm, IP66/IP67 rated, universal power supply options.',
  specs: [
    'ITL · IQL',
    '1.0 – 10.0 kN',
    '15 – 50 mm Stroke',
    'IP66 / IP67',
    '2-Way · 3-Way',
  ],
}