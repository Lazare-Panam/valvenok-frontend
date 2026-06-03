export interface IQLActuatorDTO {
  id: string
  model: string
  thrustForceKn: string
  strokeMm: string
  manualOverride: string
  cableEntry: string
  ambientTemp: string
  positionIndication: string
  mountingDirection: string
  housing: string
  enclosure: string
  positioningSpeedMms: string
  powerSupply: string
  operatingMode: string
  weightKg: string
  imageUrl: string
  description: string
}

export interface IQLActuatorFilters {
  models: string[]
  strokeSizes: string[]
}

export const EMPTY_IQL_FILTERS: IQLActuatorFilters = {
  models: [],
  strokeSizes: [],
}

export interface AvailableCountsIQL {
  models: Record<string, number>
  strokeSizes: Record<string, number>
}

export function applyIQLFilters(
  data: IQLActuatorDTO[],
  filters: IQLActuatorFilters,
  exclude: keyof IQLActuatorFilters | ''
): IQLActuatorDTO[] {
  return data.filter(c => {
    if (exclude !== 'models'      && filters.models.length      && !filters.models.includes(c.model))           return false
    if (exclude !== 'strokeSizes' && filters.strokeSizes.length && !filters.strokeSizes.includes(c.strokeMm))   return false
    return true
  })
}

export function countByIQL<T>(items: T[], keyFn: (item: T) => string): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const k = keyFn(item)
    counts[k] = (counts[k] ?? 0) + 1
  }
  return counts
}

const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/iql.webp'

const make = (
  model: string,
  thrustForceKn: string,
  strokeMm: string,
  positioningSpeedMms: string,
  powerSupply: string,
  weightKg: string,
): IQLActuatorDTO => ({
  id: model,
  model,
  thrustForceKn,
  strokeMm,
  manualOverride: 'Handwheel',
  cableEntry: '2-3/4" PF',
  ambientTemp: '-20° to +70°C',
  positionIndication: 'Scale on Indicator',
  mountingDirection: 'Any except downward',
  housing: 'Hard anodized aluminium',
  enclosure: 'IP67, EN60 529',
  positioningSpeedMms,
  powerSupply,
  operatingMode: 'S2:MAX 30 min/ S4:50% ED-1200 c/h',
  weightKg,
  imageUrl: IMAGE,
  description: `Panam ${model} IQL Electric Linear Actuator. Thrust force ${thrustForceKn} kN, stroke ${strokeMm} mm, weight ${weightKg} kg.`,
})

export const IQL_ACTUATOR_DATA: IQLActuatorDTO[] = [
  make('IQL 04', '4',  '40',  '0.7/0.83', '24VDC / 110–220VAC', '7'),
  make('IQL 06', '6',  '40',  '0.7/0.83', '24VDC / 110–220VAC', '8'),
  make('IQL 08', '8',  '50',  '0.7/0.8',  '24VDC / 110–220VAC', '15'),
  make('IQL 10', '10', '50',  '0.7/0.8',  '24VDC / 110–220VAC', '16'),
  make('IQL 12', '12', '50',  '0.7/0.8',  '24VDC / 110–220VAC', '17'),
  make('IQL 20', '20', '100', '0.85/1.1', '24VDC / 110–220VAC', '20'),
  make('IQL 25', '25', '100', '0.85/1.1', '24VDC / 110–220VAC', '22'),
]

export const IQL_ACTUATOR_DESCRIPTION = {
  title: 'IQL Series Electric Linear Actuators',
  description:
    'Panam IQL Series Electric Linear Actuators. Thrust force 4–25 kN, stroke 40–100 mm, IP67 rated, hard anodized aluminium housing.',
  specs: [
    'IQL Series',
    '4 – 25 kN',
    '40 – 100 mm Stroke',
    'IP67',
    'Handwheel Override',
  ],
}