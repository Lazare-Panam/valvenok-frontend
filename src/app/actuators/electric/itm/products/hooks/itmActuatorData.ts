export interface ITMActuatorDTO {
  id: string
  model: string
  bodyType: string
  gearing: string
  enclosure: string
  explosionProof: string
  maxTorqueNm: string
  maxTorqueKgM: string
  rpmHz: string
  stemDiameterMm: string
  stemScrew: string
  flangeIso: string
  declutching: string
  torqueSwitches: string
  limitSwitches: string
  display: string
  dutyCycle: string
  motorClass: string
  mainPower: string
  ambientTemp: string
  terminal: string
  cableEntries: string
  bodyMaterial: string
  lubrication: string
  imageUrl: string
  description: string
}

export interface ITMActuatorFilters {
  models: string[]
  bodyTypes: string[]
}

export const EMPTY_ITM_FILTERS: ITMActuatorFilters = {
  models: [],
  bodyTypes: [],
}

export interface AvailableCountsITM {
  models: Record<string, number>
  bodyTypes: Record<string, number>
}

export function applyITMFilters(
  data: ITMActuatorDTO[],
  filters: ITMActuatorFilters,
  exclude: keyof ITMActuatorFilters | ''
): ITMActuatorDTO[] {
  return data.filter(c => {
    if (exclude !== 'models'    && filters.models.length    && !filters.models.includes(c.model))       return false
    if (exclude !== 'bodyTypes' && filters.bodyTypes.length && !filters.bodyTypes.includes(c.bodyType)) return false
    return true
  })
}

export function countByITM<T>(items: T[], keyFn: (item: T) => string): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const k = keyFn(item)
    counts[k] = (counts[k] ?? 0) + 1
  }
  return counts
}

const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itm.webp'

const make = (
  model: string,
  bodyType: string,
  maxTorqueNm: string,
  maxTorqueKgM: string,
  rpmHz: string,
  stemDiameterMm: string,
  stemScrew: string,
  flangeIso: string,
  terminal: string,
  cableEntries: string,
): ITMActuatorDTO => ({
  id: model,
  model,
  bodyType,
  gearing: 'Worm Gear',
  enclosure: 'IP-68',
  explosionProof: 'Ex d II C T4 (Optional)',
  maxTorqueNm,
  maxTorqueKgM,
  rpmHz,
  stemDiameterMm,
  stemScrew,
  flangeIso,
  declutching: 'Auto',
  torqueSwitches: 'Torque Sensor',
  limitSwitches: 'Hall Incremental Encoder',
  display: '128×64 Graphic LCD / 4-LED',
  dutyCycle: 'S2: 15 min (Option – S4: 30–50%)',
  motorClass: 'F',
  mainPower: '3PH, AC 220/380/400/415/440/460/480V 50/60Hz (±10%)',
  ambientTemp: '-20°C ~ +70°C',
  terminal,
  cableEntries,
  bodyMaterial: 'Aluminum Alloy',
  lubrication: 'Grease (EP-000)',
  imageUrl: IMAGE,
  description: `Panam ITM ${model} Electric Multi-Turn Actuator. Max torque ${maxTorqueNm} Nm, ${bodyType.toLowerCase()}, IP-68, ${flangeIso} flange.`,
})

export const ITM_ACTUATOR_DATA: ITMActuatorDTO[] = [
  make('180',  'Top Handle',  '177',   '18',  '12/14, 16/19', 'Ø 35', 'TW40',  'F10', '52 PIN', '*1-PF 1-1/2", NPT 1-1/2" *2-PF 1", 2-NPT 1"'),
  make('450',  'Top Handle',  '441',   '45',  '*23/28, 32/38','Ø 50', 'TW60',  'F14', '52 PIN', '*1-PF 1-1/2", NPT 1-1/2" *2-PF 1", 2-NPT 1"'),
  make('750',  'Top Handle',  '735',   '75',  '*48/57',        'Ø 60', 'TW72',  'F16', '52 PIN', '*1-PF 1-1/2", NPT 1-1/2" *2-PF 1", 2-NPT 1"'),
  make('1800', 'Side Handle', '1,765', '180', '*73/87',        'Ø 95', 'TW110', 'F25', '75 PIN', '4-PF 1", 4-NPT 1"'),
  make('3000', 'Side Handle', '2,942', '300', '*98/118',       'Ø 115','TW130', 'F30', '75 PIN', '4-PF 1", 4-NPT 1"'),
]

export const ITM_ACTUATOR_DESCRIPTION = {
  title: 'ITM Series Electric Multi-Turn Actuators',
  description:
    'Panam ITM Series Electric Multi-Turn Actuators. Max torque 177–2,942 Nm, IP-68 enclosure, worm gear, Hall incremental encoder limit switches, ATEX explosion proof option.',
  specs: [
    'ITM Series',
    '177 – 2,942 Nm',
    'IP-68',
    'Worm Gear',
    'F10 – F30 Flange',
  ],
}