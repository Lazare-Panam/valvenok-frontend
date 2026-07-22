export interface FlowControlledPumpModel {
  id: string
  modelCode: string
  series: 'HQC' | 'TQC'
  frequencyHz: '50' | '60'
  powerKw: string
  phase: string
  voltV: string
  ampsA: string
  inletIn: string
  outletIn: string
  pMaxKgCm2: string
  qMaxLMin: string
  nwKg: string
  gwKg: string
  packQty: string
}

export const FLOW_CONTROLLED_PUMP_MODELS: FlowControlledPumpModel[] = [
  // HQC — 50Hz
  { id: 'hqc200-50', modelCode: 'HQC200', series: 'HQC', frequencyHz: '50', powerKw: '0.18', phase: '1', voltV: '200-240', ampsA: '1.5', inletIn: '1"', outletIn: '1"', pMaxKgCm2: '2.4', qMaxLMin: '55',  nwKg: '6.8',  gwKg: '7.5',  packQty: '45' },
  { id: 'hqc400-50', modelCode: 'HQC400', series: 'HQC', frequencyHz: '50', powerKw: '0.37', phase: '1', voltV: '200-240', ampsA: '2.8', inletIn: '1"', outletIn: '1"', pMaxKgCm2: '3.1', qMaxLMin: '85',  nwKg: '7.9',  gwKg: '8.5',  packQty: '45' },
  { id: 'hqc800-50', modelCode: 'HQC800', series: 'HQC', frequencyHz: '50', powerKw: '0.75', phase: '1', voltV: '200-240', ampsA: '4.5', inletIn: '1"', outletIn: '1"', pMaxKgCm2: '3.3', qMaxLMin: '110', nwKg: '10.3', gwKg: '10.9', packQty: '36' },

  // HQC — 60Hz
  { id: 'hqc200-60', modelCode: 'HQC200', series: 'HQC', frequencyHz: '60', powerKw: '0.18', phase: '1', voltV: '110/220', ampsA: '4.0/2.0',  inletIn: '1"', outletIn: '1"', pMaxKgCm2: '2.3', qMaxLMin: '60',  nwKg: '6.7',  gwKg: '7.4',  packQty: '45' },
  { id: 'hqc400-60', modelCode: 'HQC400', series: 'HQC', frequencyHz: '60', powerKw: '0.37', phase: '1', voltV: '110/220', ampsA: '6.0/3.0',  inletIn: '1"', outletIn: '1"', pMaxKgCm2: '2.6', qMaxLMin: '80',  nwKg: '7.8',  gwKg: '8.4',  packQty: '45' },
  { id: 'hqc800-60', modelCode: 'HQC800', series: 'HQC', frequencyHz: '60', powerKw: '0.75', phase: '1', voltV: '110/220', ampsA: '10.0/5.5', inletIn: '1"', outletIn: '1"', pMaxKgCm2: '2.7', qMaxLMin: '120', nwKg: '10.2', gwKg: '10.8', packQty: '36' },

  // TQC — 50Hz
  { id: 'tqc200-50', modelCode: 'TQC200', series: 'TQC', frequencyHz: '50', powerKw: '0.18', phase: '1', voltV: '200-240', ampsA: '1.5', inletIn: '1"', outletIn: '1"', pMaxKgCm2: '2.2', qMaxLMin: '45', nwKg: '6.7',  gwKg: '7.2',  packQty: '45' },
  { id: 'tqc400-50', modelCode: 'TQC400', series: 'TQC', frequencyHz: '50', powerKw: '0.37', phase: '1', voltV: '200-240', ampsA: '3.0', inletIn: '1"', outletIn: '1"', pMaxKgCm2: '3.0', qMaxLMin: '75', nwKg: '8.2',  gwKg: '8.7',  packQty: '45' },
  { id: 'tqc800-50', modelCode: 'TQC800', series: 'TQC', frequencyHz: '50', powerKw: '0.75', phase: '1', voltV: '200-240', ampsA: '4.4', inletIn: '1"', outletIn: '1"', pMaxKgCm2: '3.5', qMaxLMin: '95', nwKg: '10.4', gwKg: '10.9', packQty: '30' },

  // TQC — 60Hz
  { id: 'tqc200-60', modelCode: 'TQC200', series: 'TQC', frequencyHz: '60', powerKw: '0.18', phase: '1', voltV: '110/220', ampsA: '4.0/2.0', inletIn: '1"', outletIn: '1"', pMaxKgCm2: '2.2', qMaxLMin: '60', nwKg: '6.3',  gwKg: '7.4',  packQty: '45' },
  { id: 'tqc400-60', modelCode: 'TQC400', series: 'TQC', frequencyHz: '60', powerKw: '0.37', phase: '1', voltV: '110/220', ampsA: '6.0/3.0', inletIn: '1"', outletIn: '1"', pMaxKgCm2: '2.8', qMaxLMin: '70', nwKg: '7.8',  gwKg: '8.9',  packQty: '45' },
  { id: 'tqc800-60', modelCode: 'TQC800', series: 'TQC', frequencyHz: '60', powerKw: '0.75', phase: '1', voltV: '110/220', ampsA: '11/5.5',  inletIn: '1"', outletIn: '1"', pMaxKgCm2: '4.4', qMaxLMin: '75', nwKg: '11.7', gwKg: '12.0', packQty: '30' },
]