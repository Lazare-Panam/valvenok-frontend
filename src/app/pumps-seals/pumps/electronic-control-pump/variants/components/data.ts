export interface ElectronicControlPumpModel {
  id: string
  modelCode: string
  baseModel: string
  series: 'TQ_B' | 'HQ_B'
  antiMicrobial: boolean
  frequencyHz: '50' | '60'
  powerKw: string
  phase: string
  voltV: string
  ampsA: string
  inletIn: string
  outletIn: string
  presetKgCm2: string
  hMaxM: string
  qMaxLMin: string
  nwKg: string
  gwKg: string
  packQty: string
}

type RawModel = Omit<ElectronicControlPumpModel, 'id' | 'modelCode' | 'antiMicrobial'> & { variantId: string }

const RAW_MODELS: RawModel[] = [
  // TQ_B — 50Hz
  { baseModel: 'TQ200',  variantId: '50-1ph',    series: 'TQ_B', frequencyHz: '50', powerKw: '0.18', phase: '1', voltV: '200-240',  ampsA: '1.5',     inletIn: '1"', outletIn: '1"', presetKgCm2: '1.2', hMaxM: '22', qMaxLMin: '45',  nwKg: '7.2',  gwKg: '7.8',  packQty: '36' },
  { baseModel: 'TQ400',  variantId: '50-1ph',    series: 'TQ_B', frequencyHz: '50', powerKw: '0.37', phase: '1', voltV: '200-240',  ampsA: '3.0',     inletIn: '1"', outletIn: '1"', presetKgCm2: '1.8', hMaxM: '30', qMaxLMin: '75',  nwKg: '8.7',  gwKg: '9.3',  packQty: '36' },
  { baseModel: 'TQ800',  variantId: '50-1ph',    series: 'TQ_B', frequencyHz: '50', powerKw: '0.75', phase: '1', voltV: '200-240',  ampsA: '4.4',     inletIn: '1"', outletIn: '1"', presetKgCm2: '2.0', hMaxM: '35', qMaxLMin: '95',  nwKg: '10.9', gwKg: '11.5', packQty: '36' },
  { baseModel: 'TQ1500', variantId: '50-1ph',    series: 'TQ_B', frequencyHz: '50', powerKw: '1.5',  phase: '1', voltV: '200-240',  ampsA: '7.2',     inletIn: '2"', outletIn: '2"', presetKgCm2: '2.5', hMaxM: '32', qMaxLMin: '230', nwKg: '21.2', gwKg: '23.4', packQty: '12' },
  { baseModel: 'TQ1500', variantId: '50-3ph-a',  series: 'TQ_B', frequencyHz: '50', powerKw: '1.5',  phase: '3', voltV: '200-240',  ampsA: '5.8',     inletIn: '2"', outletIn: '2"', presetKgCm2: '2.5', hMaxM: '32', qMaxLMin: '230', nwKg: '21.2', gwKg: '23.4', packQty: '12' },
  { baseModel: 'TQ1500', variantId: '50-3ph-b',  series: 'TQ_B', frequencyHz: '50', powerKw: '1.5',  phase: '3', voltV: '380-440',  ampsA: '3.3',     inletIn: '2"', outletIn: '2"', presetKgCm2: '2.5', hMaxM: '32', qMaxLMin: '230', nwKg: '21.2', gwKg: '23.4', packQty: '12' },
  { baseModel: 'TQ2200', variantId: '50-1ph',    series: 'TQ_B', frequencyHz: '50', powerKw: '2.2',  phase: '1', voltV: '200-240',  ampsA: '11.1',    inletIn: '2"', outletIn: '2"', presetKgCm2: '2.5', hMaxM: '34', qMaxLMin: '250', nwKg: '22.2', gwKg: '24.4', packQty: '12' },
  { baseModel: 'TQ2200', variantId: '50-3ph-a',  series: 'TQ_B', frequencyHz: '50', powerKw: '2.2',  phase: '3', voltV: '200-240',  ampsA: '7.2',     inletIn: '2"', outletIn: '2"', presetKgCm2: '2.5', hMaxM: '34', qMaxLMin: '250', nwKg: '22.2', gwKg: '24.4', packQty: '12' },
  { baseModel: 'TQ2200', variantId: '50-3ph-b',  series: 'TQ_B', frequencyHz: '50', powerKw: '2.2',  phase: '3', voltV: '380-440',  ampsA: '4.1',     inletIn: '2"', outletIn: '2"', presetKgCm2: '2.5', hMaxM: '34', qMaxLMin: '250', nwKg: '22.2', gwKg: '24.4', packQty: '12' },

  // TQ_B — 60Hz
  { baseModel: 'TQ200',  variantId: '60-1ph',    series: 'TQ_B', frequencyHz: '60', powerKw: '0.18', phase: '1', voltV: '110/220', ampsA: '4.0/2.0', inletIn: '1"', outletIn: '1"', presetKgCm2: '1.4', hMaxM: '22', qMaxLMin: '60',  nwKg: '6.8',  gwKg: '7.5',  packQty: '36' },
  { baseModel: 'TQ400',  variantId: '60-1ph',    series: 'TQ_B', frequencyHz: '60', powerKw: '0.37', phase: '1', voltV: '110/220', ampsA: '6.0/3.0', inletIn: '1"', outletIn: '1"', presetKgCm2: '1.8', hMaxM: '28', qMaxLMin: '70',  nwKg: '8.2',  gwKg: '8.9',  packQty: '36' },
  { baseModel: 'TQ800',  variantId: '60-1ph',    series: 'TQ_B', frequencyHz: '60', powerKw: '0.75', phase: '1', voltV: '110/220', ampsA: '11/5.5',  inletIn: '1"', outletIn: '1"', presetKgCm2: '2.5', hMaxM: '44', qMaxLMin: '75',  nwKg: '11.2', gwKg: '11.8', packQty: '36' },
  { baseModel: 'TQ1500', variantId: '60-1ph',    series: 'TQ_B', frequencyHz: '60', powerKw: '1.5',  phase: '1', voltV: '220',      ampsA: '9.5',     inletIn: '2"', outletIn: '2"', presetKgCm2: '3.0', hMaxM: '37', qMaxLMin: '270', nwKg: '21.2', gwKg: '23.4', packQty: '12' },
  { baseModel: 'TQ1500', variantId: '60-3ph-a',  series: 'TQ_B', frequencyHz: '60', powerKw: '1.5',  phase: '3', voltV: '220',      ampsA: '6.5',     inletIn: '2"', outletIn: '2"', presetKgCm2: '3.0', hMaxM: '37', qMaxLMin: '270', nwKg: '21.2', gwKg: '23.4', packQty: '12' },
  { baseModel: 'TQ1500', variantId: '60-3ph-b',  series: 'TQ_B', frequencyHz: '60', powerKw: '1.5',  phase: '3', voltV: '380',      ampsA: '4.2',     inletIn: '2"', outletIn: '2"', presetKgCm2: '3.0', hMaxM: '37', qMaxLMin: '270', nwKg: '21.2', gwKg: '23.4', packQty: '12' },
  { baseModel: 'TQ2200', variantId: '60-3ph-a',  series: 'TQ_B', frequencyHz: '60', powerKw: '2.2',  phase: '3', voltV: '220',      ampsA: '9.5',     inletIn: '2"', outletIn: '2"', presetKgCm2: '3.0', hMaxM: '42', qMaxLMin: '270', nwKg: '22.2', gwKg: '24.4', packQty: '12' },
  { baseModel: 'TQ2200', variantId: '60-3ph-b',  series: 'TQ_B', frequencyHz: '60', powerKw: '2.2',  phase: '3', voltV: '380',      ampsA: '5.2',     inletIn: '2"', outletIn: '2"', presetKgCm2: '3.0', hMaxM: '42', qMaxLMin: '270', nwKg: '22.2', gwKg: '24.4', packQty: '12' },
  { baseModel: 'TQ3700', variantId: '60-3ph-a',  series: 'TQ_B', frequencyHz: '60', powerKw: '3.7',  phase: '3', voltV: '220',      ampsA: '13.8',    inletIn: '2"', outletIn: '2"', presetKgCm2: '3.0', hMaxM: '52', qMaxLMin: '270', nwKg: '25.4', gwKg: '27.6', packQty: '12' },
  { baseModel: 'TQ3700', variantId: '60-3ph-b',  series: 'TQ_B', frequencyHz: '60', powerKw: '3.7',  phase: '3', voltV: '380',      ampsA: '6.8',     inletIn: '2"', outletIn: '2"', presetKgCm2: '3.0', hMaxM: '52', qMaxLMin: '270', nwKg: '25.4', gwKg: '27.6', packQty: '12' },

  // HQ_B — 50Hz
  { baseModel: 'HQ200',  variantId: '50-1ph', series: 'HQ_B', frequencyHz: '50', powerKw: '0.18', phase: '1', voltV: '200-240', ampsA: '1.5',      inletIn: '1"', outletIn: '1"', presetKgCm2: '1.6', hMaxM: '24', qMaxLMin: '55',  nwKg: '7.4',  gwKg: '8.0',  packQty: '36' },
  { baseModel: 'HQ400',  variantId: '50-1ph', series: 'HQ_B', frequencyHz: '50', powerKw: '0.37', phase: '1', voltV: '200-240', ampsA: '2.8',      inletIn: '1"', outletIn: '1"', presetKgCm2: '2.0', hMaxM: '31', qMaxLMin: '85',  nwKg: '8.4',  gwKg: '9.0',  packQty: '36' },
  { baseModel: 'HQ800',  variantId: '50-1ph', series: 'HQ_B', frequencyHz: '50', powerKw: '0.75', phase: '1', voltV: '200-240', ampsA: '4.5',      inletIn: '1"', outletIn: '1"', presetKgCm2: '2.0', hMaxM: '33', qMaxLMin: '110', nwKg: '10.8', gwKg: '11.4', packQty: '36' },

  // HQ_B — 60Hz
  { baseModel: 'HQ200',  variantId: '60-1ph', series: 'HQ_B', frequencyHz: '60', powerKw: '0.18', phase: '1', voltV: '110/220', ampsA: '4.0/2.0',  inletIn: '1"', outletIn: '1"', presetKgCm2: '1.6', hMaxM: '23', qMaxLMin: '60',  nwKg: '7.3',  gwKg: '8.6',  packQty: '36' },
  { baseModel: 'HQ400',  variantId: '60-1ph', series: 'HQ_B', frequencyHz: '60', powerKw: '0.37', phase: '1', voltV: '110/220', ampsA: '6.0/3.0',  inletIn: '1"', outletIn: '1"', presetKgCm2: '1.8', hMaxM: '26', qMaxLMin: '80',  nwKg: '8.3',  gwKg: '9.6',  packQty: '36' },
  { baseModel: 'HQ800',  variantId: '60-1ph', series: 'HQ_B', frequencyHz: '60', powerKw: '0.75', phase: '1', voltV: '110/220', ampsA: '10.0/5.0', inletIn: '1"', outletIn: '1"', presetKgCm2: '2.0', hMaxM: '27', qMaxLMin: '120', nwKg: '10.7', gwKg: '12.1', packQty: '36' },
  { baseModel: 'HQ800H', variantId: '60-1ph', series: 'HQ_B', frequencyHz: '60', powerKw: '0.75', phase: '1', voltV: '110/220', ampsA: '10.0/5.0', inletIn: '1"', outletIn: '1"', presetKgCm2: '2.5', hMaxM: '45', qMaxLMin: '100', nwKg: '10.8', gwKg: '12.2', packQty: '36' },
]

// Each source row becomes 2 rows: one anti-microbial (model code + "B"), one without.
export const ELECTRONIC_CONTROL_PUMP_MODELS: ElectronicControlPumpModel[] = RAW_MODELS.flatMap((m) =>
  ([true, false] as const).map((antiMicrobial) => ({
    ...m,
    antiMicrobial,
    modelCode: `${m.baseModel}${antiMicrobial ? 'B' : ''}`,
    id: `${m.baseModel}${antiMicrobial ? 'B' : ''}-${m.variantId}`,
  }))
)