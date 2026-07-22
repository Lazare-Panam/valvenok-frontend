export interface AutomaticBoosterPumpModel {
  id: string
  modelCode: string
  baseModel: string
  antiMicrobial: boolean
  frequencyHz: '50' | '60'
  powerKw: string
  phase: string
  voltV: string
  ampsA: string
  inletIn: string
  outletIn: string
  pressureSwitchOnKgCm2: string
  pressureSwitchOffKgCm2: string
  pressureTankL: string
  hMaxM: string
  qMaxLMin: string
  nwKg: string
  gwKg: string
  packQty: string
}

type RawModel = Omit<AutomaticBoosterPumpModel, 'id' | 'modelCode' | 'antiMicrobial'>

const RAW_MODELS: RawModel[] = [
  // 50Hz
  { baseModel: 'TP820P(T)', frequencyHz: '50', powerKw: '0.18', phase: '1', voltV: '200-240', ampsA: '1.4', inletIn: '¾"', outletIn: '¾"', pressureSwitchOnKgCm2: '0.9', pressureSwitchOffKgCm2: '1.8', pressureTankL: '1', hMaxM: '25', qMaxLMin: '30', nwKg: '6.7', gwKg: '7.7', packQty: '32' },
  { baseModel: 'TP825P(T)', frequencyHz: '50', powerKw: '0.37', phase: '1', voltV: '200-240', ampsA: '2.2', inletIn: '1"', outletIn: '1"', pressureSwitchOnKgCm2: '1.8', pressureSwitchOffKgCm2: '2.8', pressureTankL: '1', hMaxM: '30', qMaxLMin: '35', nwKg: '7.6', gwKg: '8.6', packQty: '32' },

  // 60Hz
  { baseModel: 'TP820P(T)', frequencyHz: '60', powerKw: '0.18', phase: '1', voltV: '110/220', ampsA: '3.2/1.6', inletIn: '¾"', outletIn: '¾"', pressureSwitchOnKgCm2: '1.2', pressureSwitchOffKgCm2: '2.4', pressureTankL: '1', hMaxM: '34', qMaxLMin: '35', nwKg: '6.7', gwKg: '7.7', packQty: '32' },
  { baseModel: 'TP825P(T)', frequencyHz: '60', powerKw: '0.37', phase: '1', voltV: '110/220', ampsA: '5.2/2.6', inletIn: '1"', outletIn: '1"', pressureSwitchOnKgCm2: '2.0', pressureSwitchOffKgCm2: '3.0', pressureTankL: '1', hMaxM: '36', qMaxLMin: '42', nwKg: '7.6', gwKg: '8.6', packQty: '32' },
]

// Each source row becomes 2 rows: one anti-microbial (model code + "B"), one without.
export const AUTOMATIC_BOOSTER_PUMP_MODELS: AutomaticBoosterPumpModel[] = RAW_MODELS.flatMap((m) =>
  ([true, false] as const).map((antiMicrobial) => ({
    ...m,
    antiMicrobial,
    modelCode: `${m.baseModel}${antiMicrobial ? 'B' : ''}`,
    id: `${m.baseModel}${antiMicrobial ? 'B' : ''}-${m.frequencyHz}hz`,
  }))
)