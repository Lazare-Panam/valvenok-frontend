export interface MultistageCentrifugalPumpModel {
  id: string
  modelCode: string
  series: 'HS' | 'TS'
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

export const MULTISTAGE_CENTRIFUGAL_MODELS: MultistageCentrifugalPumpModel[] = [
  // TS — 50Hz
  { id: 'ts400-50-1ph',     modelCode: 'TS400',  series: 'TS', frequencyHz: '50', powerKw: '0.37', phase: '1', voltV: '200-240', ampsA: '3.0',     inletIn: '1"', outletIn: '1"', hMaxM: '30', qMaxLMin: '75',  nwKg: '8.1',  gwKg: '8.6',  packQty: '45' },
  { id: 'ts800-50-1ph',     modelCode: 'TS800',  series: 'TS', frequencyHz: '50', powerKw: '0.75', phase: '1', voltV: '200-240', ampsA: '4.4',     inletIn: '1"', outletIn: '1"', hMaxM: '35', qMaxLMin: '100', nwKg: '10.3', gwKg: '10.8', packQty: '30' },
  { id: 'ts1500-50-1ph',    modelCode: 'TS1500', series: 'TS', frequencyHz: '50', powerKw: '1.5',  phase: '1', voltV: '200-240', ampsA: '7.2',     inletIn: '2"', outletIn: '2"', hMaxM: '32', qMaxLMin: '230', nwKg: '21.1', gwKg: '23.5', packQty: '12' },
  { id: 'ts1500-50-3ph-a',  modelCode: 'TS1500', series: 'TS', frequencyHz: '50', powerKw: '1.5',  phase: '3', voltV: '200-240', ampsA: '5.8',     inletIn: '2"', outletIn: '2"', hMaxM: '32', qMaxLMin: '230', nwKg: '21.1', gwKg: '23.5', packQty: '12' },
  { id: 'ts1500-50-3ph-b',  modelCode: 'TS1500', series: 'TS', frequencyHz: '50', powerKw: '1.5',  phase: '3', voltV: '380-440', ampsA: '3.3',     inletIn: '2"', outletIn: '2"', hMaxM: '32', qMaxLMin: '230', nwKg: '21.1', gwKg: '23.5', packQty: '12' },
  { id: 'ts2200-50-1ph',    modelCode: 'TS2200', series: 'TS', frequencyHz: '50', powerKw: '2.2',  phase: '1', voltV: '200-240', ampsA: '11.1',    inletIn: '2"', outletIn: '2"', hMaxM: '34', qMaxLMin: '250', nwKg: '22.1', gwKg: '24.5', packQty: '12' },
  { id: 'ts2200-50-3ph-a',  modelCode: 'TS2200', series: 'TS', frequencyHz: '50', powerKw: '2.2',  phase: '3', voltV: '200-240', ampsA: '9.0',     inletIn: '2"', outletIn: '2"', hMaxM: '34', qMaxLMin: '250', nwKg: '22.1', gwKg: '24.5', packQty: '12' },
  { id: 'ts2200-50-3ph-b',  modelCode: 'TS2200', series: 'TS', frequencyHz: '50', powerKw: '2.2',  phase: '3', voltV: '380-440', ampsA: '4.5',     inletIn: '2"', outletIn: '2"', hMaxM: '34', qMaxLMin: '250', nwKg: '22.1', gwKg: '24.5', packQty: '12' },

  // TS — 60Hz
  { id: 'ts400-60-1ph',     modelCode: 'TS400',  series: 'TS', frequencyHz: '60', powerKw: '0.37', phase: '1', voltV: '110/220', ampsA: '6.0/3.0', inletIn: '1"', outletIn: '1"', hMaxM: '35', qMaxLMin: '70',  nwKg: '8.1',  gwKg: '8.6',  packQty: '45' },
  { id: 'ts800-60-1ph',     modelCode: 'TS800',  series: 'TS', frequencyHz: '60', powerKw: '0.75', phase: '1', voltV: '110/220', ampsA: '11/5.5',  inletIn: '1"', outletIn: '1"', hMaxM: '42', qMaxLMin: '95',  nwKg: '10.6', gwKg: '11.4', packQty: '30' },
  { id: 'ts1500-60-1ph',    modelCode: 'TS1500', series: 'TS', frequencyHz: '60', powerKw: '1.5',  phase: '1', voltV: '220',     ampsA: '9.5',     inletIn: '2"', outletIn: '2"', hMaxM: '38', qMaxLMin: '265', nwKg: '21.1', gwKg: '23.4', packQty: '12' },
  { id: 'ts1500-60-3ph',    modelCode: 'TS1500', series: 'TS', frequencyHz: '60', powerKw: '1.5',  phase: '3', voltV: '220/380', ampsA: '6.5/4.2', inletIn: '2"', outletIn: '2"', hMaxM: '38', qMaxLMin: '265', nwKg: '21.1', gwKg: '23.4', packQty: '12' },
  { id: 'ts2200-60-3ph',    modelCode: 'TS2200', series: 'TS', frequencyHz: '60', powerKw: '2.2',  phase: '3', voltV: '220/380', ampsA: '9.5/5.2', inletIn: '2"', outletIn: '2"', hMaxM: '39', qMaxLMin: '270', nwKg: '22.1', gwKg: '24.4', packQty: '12' },
  { id: 'ts3700-60-3ph',    modelCode: 'TS3700', series: 'TS', frequencyHz: '60', powerKw: '3.7',  phase: '3', voltV: '220/380', ampsA: '13.8/6.8', inletIn: '2"', outletIn: '2"', hMaxM: '50', qMaxLMin: '270', nwKg: '24.4', gwKg: '26.5', packQty: '12' },

  // HS — 50Hz
  { id: 'hs400-50',  modelCode: 'HS400', series: 'HS', frequencyHz: '50', powerKw: '0.37', phase: '1', voltV: '200-240', ampsA: '2.8',     inletIn: '1"', outletIn: '1"', hMaxM: '31', qMaxLMin: '85',  nwKg: '8.1',  gwKg: '8.6',  packQty: '45' },
  { id: 'hs800-50',  modelCode: 'HS800', series: 'HS', frequencyHz: '50', powerKw: '0.75', phase: '1', voltV: '200-240', ampsA: '4.5',     inletIn: '1"', outletIn: '1"', hMaxM: '33', qMaxLMin: '110', nwKg: '10.1', gwKg: '10.9', packQty: '36' },

  // HS — 60Hz
  { id: 'hs400-60',  modelCode: 'HS400', series: 'HS', frequencyHz: '60', powerKw: '0.37', phase: '1', voltV: '110/220', ampsA: '6.0/3.0',  inletIn: '1"', outletIn: '1"', hMaxM: '36', qMaxLMin: '75',  nwKg: '8.1',  gwKg: '8.5',  packQty: '45' },
  { id: 'hs800-60',  modelCode: 'HS800', series: 'HS', frequencyHz: '60', powerKw: '0.75', phase: '1', voltV: '110/220', ampsA: '10.0/5.0', inletIn: '1"', outletIn: '1"', hMaxM: '46', qMaxLMin: '100', nwKg: '10.1', gwKg: '10.9', packQty: '36' },
]