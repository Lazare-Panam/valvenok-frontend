export interface SubmersiblePumpModel {
  id: string
  modelCode: string
  series: 'PW_A' | 'PW_E'
  variant: 'Standard' | 'Sea Water' | 'Float Ball Switch' | 'Low Suction' | 'Level Regulator'
  frequencyHz: '50' | '60'
  outletIn: string
  outputW: string
  voltV: string
  ampsA: string
  hMaxM: string
  qMaxLMin: string
  dimensionsMm: string
  cableWire: string
  nwKg: string
  gwKg: string
  packQty: string
}

export const SUBMERSIBLE_PUMP_MODELS: SubmersiblePumpModel[] = [
  // PW_A Standard
  { id: 'pw100a-50', modelCode: 'PW100A', series: 'PW_A', variant: 'Standard', frequencyHz: '50', outletIn: '1"', outputW: '100', voltV: '220-240', ampsA: '1.0', hMaxM: '6.5', qMaxLMin: '80', dimensionsMm: '155x140x241', cableWire: '3x0.75x4', nwKg: '4.2', gwKg: '4.5', packQty: '72' },
  { id: 'pw100a-60', modelCode: 'PW100A', series: 'PW_A', variant: 'Standard', frequencyHz: '60', outletIn: '1"', outputW: '100', voltV: '110/220', ampsA: '2.0/1.0', hMaxM: '6.5', qMaxLMin: '80', dimensionsMm: '155x140x241', cableWire: '3x0.75x4', nwKg: '4.2', gwKg: '4.5', packQty: '72' },
  { id: 'pw250a-50', modelCode: 'PW250A', series: 'PW_A', variant: 'Standard', frequencyHz: '50', outletIn: '1½"', outputW: '250', voltV: '220-240', ampsA: '2.0', hMaxM: '9.0', qMaxLMin: '160', dimensionsMm: '164x164x350', cableWire: '3x1.5x5', nwKg: '5.1', gwKg: '5.6', packQty: '32' },
  { id: 'pw250a-60', modelCode: 'PW250A', series: 'PW_A', variant: 'Standard', frequencyHz: '60', outletIn: '1½"', outputW: '250', voltV: '110/220', ampsA: '4.0/2.0', hMaxM: '9.0', qMaxLMin: '160', dimensionsMm: '164x164x350', cableWire: '3x1.25x5', nwKg: '5.1', gwKg: '5.6', packQty: '32' },
  { id: 'pw400a-50', modelCode: 'PW400A', series: 'PW_A', variant: 'Standard', frequencyHz: '50', outletIn: '2"', outputW: '400', voltV: '220-240', ampsA: '3.5', hMaxM: '10.0', qMaxLMin: '260', dimensionsMm: '183x183x382', cableWire: '3x1.5x5', nwKg: '8.0', gwKg: '8.5', packQty: '50' },
  { id: 'pw400a-60', modelCode: 'PW400A', series: 'PW_A', variant: 'Standard', frequencyHz: '60', outletIn: '2"', outputW: '400', voltV: '110/220', ampsA: '7.0/3.5', hMaxM: '10.0', qMaxLMin: '260', dimensionsMm: '183x183x382', cableWire: '3x1.25x5', nwKg: '8.0', gwKg: '8.5', packQty: '50' },
  { id: 'pw800a-50', modelCode: 'PW800A', series: 'PW_A', variant: 'Standard', frequencyHz: '50', outletIn: '2"', outputW: '800', voltV: '220-240', ampsA: '6.8', hMaxM: '14.0', qMaxLMin: '440', dimensionsMm: '193x193x412', cableWire: '3x1.5x5', nwKg: '10.5', gwKg: '11.0', packQty: '50' },
  { id: 'pw800a-60', modelCode: 'PW800A', series: 'PW_A', variant: 'Standard', frequencyHz: '60', outletIn: '2"', outputW: '800', voltV: '110/220', ampsA: '13.4/6.5', hMaxM: '14.0', qMaxLMin: '440', dimensionsMm: '193x193x412', cableWire: '3x2.0x5', nwKg: '10.5', gwKg: '11.0', packQty: '50' },

  // PW_A Sea Water
  { id: 'pw100ar-50', modelCode: 'PW100AR', series: 'PW_A', variant: 'Sea Water', frequencyHz: '50', outletIn: '1"', outputW: '100', voltV: '220-240', ampsA: '1.0', hMaxM: '6.5', qMaxLMin: '80', dimensionsMm: '155x140x241', cableWire: '3x0.75x4', nwKg: '4.2', gwKg: '4.5', packQty: '72' },
  { id: 'pw100ar-60', modelCode: 'PW100AR', series: 'PW_A', variant: 'Sea Water', frequencyHz: '60', outletIn: '1"', outputW: '100', voltV: '110/220', ampsA: '2.0/1.0', hMaxM: '6.5', qMaxLMin: '80', dimensionsMm: '155x140x241', cableWire: '3x0.75x4', nwKg: '4.2', gwKg: '4.5', packQty: '72' },
  { id: 'pw400ar-50', modelCode: 'PW400AR', series: 'PW_A', variant: 'Sea Water', frequencyHz: '50', outletIn: '2"', outputW: '400', voltV: '220-240', ampsA: '3.5', hMaxM: '10.0', qMaxLMin: '260', dimensionsMm: '183x183x382', cableWire: '3x1.5x5', nwKg: '8.3', gwKg: '8.8', packQty: '50' },
  { id: 'pw400ar-60', modelCode: 'PW400AR', series: 'PW_A', variant: 'Sea Water', frequencyHz: '60', outletIn: '2"', outputW: '400', voltV: '110/220', ampsA: '7.0/3.5', hMaxM: '10.0', qMaxLMin: '260', dimensionsMm: '183x183x382', cableWire: '3x1.25x5', nwKg: '8.3', gwKg: '8.8', packQty: '50' },
  { id: 'pw800ar-50', modelCode: 'PW800AR', series: 'PW_A', variant: 'Sea Water', frequencyHz: '50', outletIn: '2"', outputW: '800', voltV: '220-240', ampsA: '6.8', hMaxM: '14.0', qMaxLMin: '440', dimensionsMm: '193x193x412', cableWire: '3x1.5x5', nwKg: '10.5', gwKg: '11.0', packQty: '50' },
  { id: 'pw800ar-60', modelCode: 'PW800AR', series: 'PW_A', variant: 'Sea Water', frequencyHz: '60', outletIn: '2"', outputW: '800', voltV: '110/220', ampsA: '13.4/6.5', hMaxM: '14.0', qMaxLMin: '440', dimensionsMm: '193x193x412', cableWire: '3x2.0x5', nwKg: '10.5', gwKg: '11.0', packQty: '50' },

  // PW_A Float Ball Switch — weights unattributable in source, left as "—"
  { id: 'pw100af-50', modelCode: 'PW100AF', series: 'PW_A', variant: 'Float Ball Switch', frequencyHz: '50', outletIn: '1"', outputW: '100', voltV: '220-240', ampsA: '1.0', hMaxM: '6.5', qMaxLMin: '80', dimensionsMm: '155x140x241', cableWire: '3x0.75x4', nwKg: '—', gwKg: '—', packQty: '48' },
  { id: 'pw100af-60', modelCode: 'PW100AF', series: 'PW_A', variant: 'Float Ball Switch', frequencyHz: '60', outletIn: '1"', outputW: '100', voltV: '110/220', ampsA: '2.0/1.0', hMaxM: '6.5', qMaxLMin: '80', dimensionsMm: '155x140x241', cableWire: '3x0.75x4', nwKg: '—', gwKg: '—', packQty: '48' },
  { id: 'pw100arf-50', modelCode: 'PW100ARF', series: 'PW_A', variant: 'Float Ball Switch', frequencyHz: '50', outletIn: '1"', outputW: '100', voltV: '220-240', ampsA: '1.0', hMaxM: '6.5', qMaxLMin: '80', dimensionsMm: '155x140x241', cableWire: '3x0.75x4', nwKg: '—', gwKg: '—', packQty: '48' },
  { id: 'pw100arf-60', modelCode: 'PW100ARF', series: 'PW_A', variant: 'Float Ball Switch', frequencyHz: '60', outletIn: '1"', outputW: '100', voltV: '110/220', ampsA: '2.0/1.0', hMaxM: '6.5', qMaxLMin: '80', dimensionsMm: '155x140x241', cableWire: '3x0.75x4', nwKg: '—', gwKg: '—', packQty: '48' },
  { id: 'pw250af-50', modelCode: 'PW250AF', series: 'PW_A', variant: 'Float Ball Switch', frequencyHz: '50', outletIn: '1½"', outputW: '250', voltV: '220-240', ampsA: '2.0', hMaxM: '9.0', qMaxLMin: '160', dimensionsMm: '164x164x350', cableWire: '3x1.5x5', nwKg: '—', gwKg: '—', packQty: '32' },
  { id: 'pw250af-60', modelCode: 'PW250AF', series: 'PW_A', variant: 'Float Ball Switch', frequencyHz: '60', outletIn: '1½"', outputW: '250', voltV: '110/220', ampsA: '4.0/2.0', hMaxM: '9.0', qMaxLMin: '160', dimensionsMm: '164x164x350', cableWire: '3x1.25x5', nwKg: '—', gwKg: '—', packQty: '32' },
  { id: 'pw400af-50', modelCode: 'PW400AF', series: 'PW_A', variant: 'Float Ball Switch', frequencyHz: '50', outletIn: '2"', outputW: '400', voltV: '220-240', ampsA: '3.5', hMaxM: '10.0', qMaxLMin: '260', dimensionsMm: '183x183x382', cableWire: '3x1.5x5', nwKg: '—', gwKg: '—', packQty: '50' },
  { id: 'pw400af-60', modelCode: 'PW400AF', series: 'PW_A', variant: 'Float Ball Switch', frequencyHz: '60', outletIn: '2"', outputW: '400', voltV: '110/220', ampsA: '7.0/3.5', hMaxM: '10.0', qMaxLMin: '260', dimensionsMm: '183x183x382', cableWire: '3x1.25x5', nwKg: '—', gwKg: '—', packQty: '50' },
  { id: 'pw400arf-50', modelCode: 'PW400ARF', series: 'PW_A', variant: 'Float Ball Switch', frequencyHz: '50', outletIn: '2"', outputW: '400', voltV: '220-240', ampsA: '3.5', hMaxM: '10.0', qMaxLMin: '260', dimensionsMm: '183x183x382', cableWire: '3x1.5x5', nwKg: '—', gwKg: '—', packQty: '50' },
  { id: 'pw400arf-60', modelCode: 'PW400ARF', series: 'PW_A', variant: 'Float Ball Switch', frequencyHz: '60', outletIn: '2"', outputW: '400', voltV: '110/220', ampsA: '7.0/3.5', hMaxM: '10.0', qMaxLMin: '260', dimensionsMm: '183x183x382', cableWire: '3x1.25x5', nwKg: '—', gwKg: '—', packQty: '50' },

  // PW_A Low Suction — PW400AD Q max unattributable in source, left as "—"
  { id: 'pw100ad-50', modelCode: 'PW100AD', series: 'PW_A', variant: 'Low Suction', frequencyHz: '50', outletIn: '1"', outputW: '100', voltV: '220-240', ampsA: '1.0', hMaxM: '6.5', qMaxLMin: '120', dimensionsMm: '155x140x270', cableWire: '3x0.75x4', nwKg: '4.5', gwKg: '4.9', packQty: '72' },
  { id: 'pw100ad-60', modelCode: 'PW100AD', series: 'PW_A', variant: 'Low Suction', frequencyHz: '60', outletIn: '1"', outputW: '100', voltV: '110/220', ampsA: '2.0/1.0', hMaxM: '6.5', qMaxLMin: '120', dimensionsMm: '155x140x270', cableWire: '3x0.75x4', nwKg: '4.5', gwKg: '4.9', packQty: '72' },
  { id: 'pw250ad-50', modelCode: 'PW250AD', series: 'PW_A', variant: 'Low Suction', frequencyHz: '50', outletIn: '1½"', outputW: '250', voltV: '220-240', ampsA: '2.0', hMaxM: '9.0', qMaxLMin: '130', dimensionsMm: '164x164x350', cableWire: '3x1.5x5', nwKg: '6.0', gwKg: '6.4', packQty: '32' },
  { id: 'pw250ad-60', modelCode: 'PW250AD', series: 'PW_A', variant: 'Low Suction', frequencyHz: '60', outletIn: '1½"', outputW: '250', voltV: '110/220', ampsA: '4.0/2.0', hMaxM: '9.0', qMaxLMin: '130', dimensionsMm: '164x164x350', cableWire: '3x1.25x5', nwKg: '6.0', gwKg: '6.4', packQty: '32' },
  { id: 'pw400ad-50', modelCode: 'PW400AD', series: 'PW_A', variant: 'Low Suction', frequencyHz: '50', outletIn: '2"', outputW: '400', voltV: '220-240', ampsA: '3.5', hMaxM: '10.0', qMaxLMin: '—', dimensionsMm: '183x183x384', cableWire: '3x1.5x5', nwKg: '8.4', gwKg: '8.9', packQty: '50' },
  { id: 'pw400ad-60', modelCode: 'PW400AD', series: 'PW_A', variant: 'Low Suction', frequencyHz: '60', outletIn: '2"', outputW: '400', voltV: '110/220', ampsA: '7.0/3.5', hMaxM: '10.0', qMaxLMin: '—', dimensionsMm: '183x183x384', cableWire: '3x1.25x5', nwKg: '8.4', gwKg: '8.9', packQty: '50' },

  // PW_A Level Regulator
  { id: 'pw100ac-50', modelCode: 'PW100AC', series: 'PW_A', variant: 'Level Regulator', frequencyHz: '50', outletIn: '1"', outputW: '100', voltV: '220-240', ampsA: '1.0', hMaxM: '6.5', qMaxLMin: '80', dimensionsMm: '227x140x243', cableWire: '3x0.75x4', nwKg: '4.5', gwKg: '4.8', packQty: '48' },
  { id: 'pw100ac-60', modelCode: 'PW100AC', series: 'PW_A', variant: 'Level Regulator', frequencyHz: '60', outletIn: '1"', outputW: '100', voltV: '110/220', ampsA: '2.0/1.0', hMaxM: '6.5', qMaxLMin: '80', dimensionsMm: '227x140x243', cableWire: '3x0.75x4', nwKg: '4.5', gwKg: '4.8', packQty: '48' },
  { id: 'pw100arc-50', modelCode: 'PW100ARC', series: 'PW_A', variant: 'Level Regulator', frequencyHz: '50', outletIn: '1"', outputW: '100', voltV: '220-240', ampsA: '1.0', hMaxM: '6.5', qMaxLMin: '80', dimensionsMm: '227x140x243', cableWire: '3x0.75x4', nwKg: '4.5', gwKg: '4.8', packQty: '48' },
  { id: 'pw100arc-60', modelCode: 'PW100ARC', series: 'PW_A', variant: 'Level Regulator', frequencyHz: '60', outletIn: '1"', outputW: '100', voltV: '110/220', ampsA: '2.0/1.0', hMaxM: '6.5', qMaxLMin: '80', dimensionsMm: '227x140x243', cableWire: '3x0.75x4', nwKg: '4.5', gwKg: '4.8', packQty: '48' },

  // PW_E Standard
  { id: 'pw250e-50', modelCode: 'PW250E', series: 'PW_E', variant: 'Standard', frequencyHz: '50', outletIn: '1½"', outputW: '250', voltV: '220-240', ampsA: '2.0', hMaxM: '8', qMaxLMin: '140', dimensionsMm: '170x150x325', cableWire: '—', nwKg: '5.7', gwKg: '6.1', packQty: '32' },
  { id: 'pw250e-60', modelCode: 'PW250E', series: 'PW_E', variant: 'Standard', frequencyHz: '60', outletIn: '1½"', outputW: '250', voltV: '110/220', ampsA: '4.0/2.0', hMaxM: '9', qMaxLMin: '140', dimensionsMm: '170x150x325', cableWire: '—', nwKg: '5.7', gwKg: '6.1', packQty: '32' },

  // PW_E Level Regulator
  { id: 'pw250ec-50', modelCode: 'PW250EC', series: 'PW_E', variant: 'Level Regulator', frequencyHz: '50', outletIn: '1½"', outputW: '250', voltV: '220-240', ampsA: '2.0', hMaxM: '8', qMaxLMin: '140', dimensionsMm: '238x150x325', cableWire: '—', nwKg: '6.1', gwKg: '6.5', packQty: '48' },
  { id: 'pw250ec-60', modelCode: 'PW250EC', series: 'PW_E', variant: 'Level Regulator', frequencyHz: '60', outletIn: '1½"', outputW: '250', voltV: '110/220', ampsA: '4.0/2.0', hMaxM: '9', qMaxLMin: '140', dimensionsMm: '238x150x325', cableWire: '—', nwKg: '6.1', gwKg: '6.5', packQty: '48' },
]