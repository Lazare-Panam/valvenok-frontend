export interface DirectWaterPumpModel {
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
  hMaxM: string
  qMaxLMin: string
  nwKg: string
  gwKg: string
  packQty: string
}

type RawModel = Omit<DirectWaterPumpModel, 'id' | 'modelCode' | 'antiMicrobial'>

const RAW_MODELS: RawModel[] = [
  // 50Hz
  { baseModel: 'TP320P(T)', frequencyHz: '50', powerKw: '0.37', phase: '1', voltV: '200-240', ampsA: '2.7', inletIn: '¾"', outletIn: '¾"', hMaxM: '35', qMaxLMin: '35', nwKg: '6.7', gwKg: '7.4', packQty: '72' },
  { baseModel: 'TP325P(T)', frequencyHz: '50', powerKw: '0.37', phase: '1', voltV: '200-240', ampsA: '2.7', inletIn: '1"', outletIn: '1"', hMaxM: '35', qMaxLMin: '35', nwKg: '6.7', gwKg: '7.4', packQty: '72' },

  // 60Hz
  { baseModel: 'TP320P(T)', frequencyHz: '60', powerKw: '0.37', phase: '1', voltV: '110/220', ampsA: '5.2/2.6', inletIn: '¾"', outletIn: '¾"', hMaxM: '40', qMaxLMin: '42', nwKg: '6.7', gwKg: '7.3', packQty: '72' },
  { baseModel: 'TP325P(T)', frequencyHz: '60', powerKw: '0.37', phase: '1', voltV: '110/220', ampsA: '5.2/2.6', inletIn: '1"', outletIn: '1"', hMaxM: '40', qMaxLMin: '42', nwKg: '6.7', gwKg: '7.3', packQty: '72' },
]

// Each source row becomes 2 rows: one anti-microbial (model code + "B"), one without.
export const DIRECT_WATER_PUMP_MODELS: DirectWaterPumpModel[] = RAW_MODELS.flatMap((m) =>
  ([true, false] as const).map((antiMicrobial) => ({
    ...m,
    antiMicrobial,
    modelCode: `${m.baseModel}${antiMicrobial ? 'B' : ''}`,
    id: `${m.baseModel}${antiMicrobial ? 'B' : ''}-${m.frequencyHz}hz`,
  }))
)