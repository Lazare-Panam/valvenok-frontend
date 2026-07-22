export interface HotWaterPumpModel {
  id: string
  modelCode: string
  series: 'TQCN' | 'HQCN'
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

export const HOT_WATER_PUMP_MODELS: HotWaterPumpModel[] = [
  // TQCN — 50Hz
  { id: 'tqcn200-50',       modelCode: 'TQCN200',  series: 'TQCN', frequencyHz: '50', powerKw: '0.18', phase: '1', voltV: '200-240', ampsA: '1.5',  inletIn: '1"', outletIn: '1"', presetKgCm2: '1.2', hMaxM: '22', qMaxLMin: '45',  nwKg: '7.3',  gwKg: '7.9',  packQty: '36' },
  { id: 'tqcn400-50',       modelCode: 'TQCN400',  series: 'TQCN', frequencyHz: '50', powerKw: '0.37', phase: '1', voltV: '200-240', ampsA: '3.0',  inletIn: '1"', outletIn: '1"', presetKgCm2: '1.8', hMaxM: '30', qMaxLMin: '75',  nwKg: '8.8',  gwKg: '9.4',  packQty: '36' },
  { id: 'tqcn800-50',       modelCode: 'TQCN800',  series: 'TQCN', frequencyHz: '50', powerKw: '0.75', phase: '1', voltV: '200-240', ampsA: '4.4',  inletIn: '1"', outletIn: '1"', presetKgCm2: '2.0', hMaxM: '35', qMaxLMin: '95',  nwKg: '11.0', gwKg: '11.6', packQty: '36' },
  { id: 'tqcn1500-50-1ph',  modelCode: 'TQCN1500', series: 'TQCN', frequencyHz: '50', powerKw: '1.5',  phase: '1', voltV: '200-240', ampsA: '7.2',  inletIn: '2"', outletIn: '2"', presetKgCm2: '2.5', hMaxM: '32', qMaxLMin: '230', nwKg: '21.3', gwKg: '23.6', packQty: '12' },
  { id: 'tqcn1500-50-3ph-a', modelCode: 'TQCN1500', series: 'TQCN', frequencyHz: '50', powerKw: '1.5', phase: '3', voltV: '200-240', ampsA: '5.8',  inletIn: '2"', outletIn: '2"', presetKgCm2: '2.5', hMaxM: '32', qMaxLMin: '230', nwKg: '21.3', gwKg: '23.6', packQty: '12' },
  { id: 'tqcn1500-50-3ph-b', modelCode: 'TQCN1500', series: 'TQCN', frequencyHz: '50', powerKw: '1.5', phase: '3', voltV: '380-440', ampsA: '3.3',  inletIn: '2"', outletIn: '2"', presetKgCm2: '2.5', hMaxM: '32', qMaxLMin: '230', nwKg: '21.3', gwKg: '23.6', packQty: '12' },
  { id: 'tqcn2200-50-1ph',  modelCode: 'TQCN2200', series: 'TQCN', frequencyHz: '50', powerKw: '2.2',  phase: '1', voltV: '200-240', ampsA: '11.1', inletIn: '2"', outletIn: '2"', presetKgCm2: '2.5', hMaxM: '34', qMaxLMin: '250', nwKg: '22.3', gwKg: '24.5', packQty: '12' },
  { id: 'tqcn2200-50-3ph-a', modelCode: 'TQCN2200', series: 'TQCN', frequencyHz: '50', powerKw: '2.2', phase: '3', voltV: '200-240', ampsA: '7.2',  inletIn: '2"', outletIn: '2"', presetKgCm2: '2.5', hMaxM: '34', qMaxLMin: '250', nwKg: '22.3', gwKg: '24.5', packQty: '12' },
  { id: 'tqcn2200-50-3ph-b', modelCode: 'TQCN2200', series: 'TQCN', frequencyHz: '50', powerKw: '2.2', phase: '3', voltV: '380-440', ampsA: '4.1',  inletIn: '2"', outletIn: '2"', presetKgCm2: '2.5', hMaxM: '34', qMaxLMin: '250', nwKg: '22.3', gwKg: '24.5', packQty: '12' },

  // TQCN — 60Hz
  { id: 'tqcn200-60',       modelCode: 'TQCN200',  series: 'TQCN', frequencyHz: '60', powerKw: '0.18', phase: '1', voltV: '110/220', ampsA: '4.0/2.0', inletIn: '1"', outletIn: '1"', presetKgCm2: '1.4', hMaxM: '22', qMaxLMin: '60',  nwKg: '7.0',  gwKg: '7.6',  packQty: '36' },
  { id: 'tqcn400-60',       modelCode: 'TQCN400',  series: 'TQCN', frequencyHz: '60', powerKw: '0.37', phase: '1', voltV: '110/220', ampsA: '6.0/3.0', inletIn: '1"', outletIn: '1"', presetKgCm2: '1.8', hMaxM: '28', qMaxLMin: '70',  nwKg: '8.4',  gwKg: '9.0',  packQty: '36' },
  { id: 'tqcn800-60',       modelCode: 'TQCN800',  series: 'TQCN', frequencyHz: '60', powerKw: '0.75', phase: '1', voltV: '110/220', ampsA: '11/5.5',  inletIn: '1"', outletIn: '1"', presetKgCm2: '2.5', hMaxM: '44', qMaxLMin: '75',  nwKg: '11.3', gwKg: '11.9', packQty: '36' },
  { id: 'tqcn1500-60-1ph',  modelCode: 'TQCN1500', series: 'TQCN', frequencyHz: '60', powerKw: '1.5',  phase: '1', voltV: '220',      ampsA: '9.5',      inletIn: '2"', outletIn: '2"', presetKgCm2: '3.0', hMaxM: '37', qMaxLMin: '270', nwKg: '21.3', gwKg: '23.5', packQty: '12' },
  { id: 'tqcn1500-60-3ph',  modelCode: 'TQCN1500', series: 'TQCN', frequencyHz: '60', powerKw: '1.5',  phase: '3', voltV: '380',      ampsA: '4.2',      inletIn: '2"', outletIn: '2"', presetKgCm2: '3.0', hMaxM: '37', qMaxLMin: '270', nwKg: '21.3', gwKg: '23.5', packQty: '12' },
  { id: 'tqcn2200-60-3ph-a', modelCode: 'TQCN2200', series: 'TQCN', frequencyHz: '60', powerKw: '2.2', phase: '3', voltV: '220',      ampsA: '9.5',      inletIn: '2"', outletIn: '2"', presetKgCm2: '3.0', hMaxM: '42', qMaxLMin: '270', nwKg: '22.3', gwKg: '24.5', packQty: '12' },
  { id: 'tqcn2200-60-3ph-b', modelCode: 'TQCN2200', series: 'TQCN', frequencyHz: '60', powerKw: '2.2', phase: '3', voltV: '380',      ampsA: '5.2',      inletIn: '2"', outletIn: '2"', presetKgCm2: '3.0', hMaxM: '42', qMaxLMin: '270', nwKg: '22.3', gwKg: '24.5', packQty: '12' },
  { id: 'tqcn3700-60-3ph-a', modelCode: 'TQCN3700', series: 'TQCN', frequencyHz: '60', powerKw: '3.7', phase: '3', voltV: '220',      ampsA: '13.8',     inletIn: '2"', outletIn: '2"', presetKgCm2: '3.0', hMaxM: '50', qMaxLMin: '270', nwKg: '25.5', gwKg: '27.7', packQty: '12' },
  { id: 'tqcn3700-60-3ph-b', modelCode: 'TQCN3700', series: 'TQCN', frequencyHz: '60', powerKw: '3.7', phase: '3', voltV: '380',      ampsA: '6.8',      inletIn: '2"', outletIn: '2"', presetKgCm2: '3.0', hMaxM: '50', qMaxLMin: '270', nwKg: '25.5', gwKg: '27.7', packQty: '12' },

  // HQCN — 50Hz
  { id: 'hqcn200-50', modelCode: 'HQCN200', series: 'HQCN', frequencyHz: '50', powerKw: '0.18', phase: '1', voltV: '200-240', ampsA: '1.5', inletIn: '1"', outletIn: '1"', presetKgCm2: '1.6', hMaxM: '24', qMaxLMin: '55',  nwKg: '7.4',  gwKg: '8.0',  packQty: '36' },
  { id: 'hqcn400-50', modelCode: 'HQCN400', series: 'HQCN', frequencyHz: '50', powerKw: '0.37', phase: '1', voltV: '200-240', ampsA: '2.8', inletIn: '1"', outletIn: '1"', presetKgCm2: '2.0', hMaxM: '31', qMaxLMin: '85',  nwKg: '8.4',  gwKg: '9.0',  packQty: '36' },
  { id: 'hqcn800-50', modelCode: 'HQCN800', series: 'HQCN', frequencyHz: '50', powerKw: '0.75', phase: '1', voltV: '200-240', ampsA: '4.5', inletIn: '1"', outletIn: '1"', presetKgCm2: '2.0', hMaxM: '33', qMaxLMin: '110', nwKg: '10.9', gwKg: '11.5', packQty: '36' },

  // HQCN — 60Hz
  { id: 'hqcn200-60', modelCode: 'HQCN200', series: 'HQCN', frequencyHz: '60', powerKw: '0.18', phase: '1', voltV: '110/220', ampsA: '4.0/2.0', inletIn: '1"', outletIn: '1"', presetKgCm2: '1.6', hMaxM: '23', qMaxLMin: '60',  nwKg: '7.4',  gwKg: '8.5',  packQty: '36' },
  { id: 'hqcn400-60', modelCode: 'HQCN400', series: 'HQCN', frequencyHz: '60', powerKw: '0.37', phase: '1', voltV: '110/220', ampsA: '6.0/3.0', inletIn: '1"', outletIn: '1"', presetKgCm2: '1.8', hMaxM: '26', qMaxLMin: '80',  nwKg: '8.4',  gwKg: '9.5',  packQty: '36' },
  { id: 'hqcn800-60', modelCode: 'HQCN800', series: 'HQCN', frequencyHz: '60', powerKw: '0.75', phase: '1', voltV: '110/220', ampsA: '9.0/4.5', inletIn: '1"', outletIn: '1"', presetKgCm2: '2.0', hMaxM: '27', qMaxLMin: '120', nwKg: '10.9', gwKg: '11.5', packQty: '36' },
]