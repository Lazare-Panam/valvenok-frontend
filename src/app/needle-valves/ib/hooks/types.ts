export interface NeedleValveIBDTO {
  id: number
  partNumber: string
  series: string
  bodyMaterial: string
  threadType: string
  endConnection: string
  connectionSize: string
  configuration: string
  stemSeal: string
  stepTip: string
  handle: string
  options: string
  imageUrl: string
}
export const SERIES_DESCRIPTIONS: Record<string, { title: string; description: string; specs: string[] }> = {
  HB: {
    title: 'HB Series — Hex Body Needle Valves',
    description: 'Hex body needle and block & bleed valves in FF, MF and MM end connections. Available in hard and soft seat configurations across 6000 PSI working pressure.',
    specs: ['SS316', '6000 PSI', 'Hard & Soft Seat', 'FF / MF / MM', '1/8" – 1"'],
  },
  IB: {
    title: 'IB Series — Integrated Bonnet Needle Valves',
    description: 'Integrated bonnet needle valves in straight and angular configurations. Available in OD, FF, MF, MM and MOD end connections with NPT, ISO Tapered, ISO Parallel and Metric thread types.',
    specs: ['SS316', 'Straight & Angular', 'OD / FF / MF / MM / MOD', 'NPT / ISO Tapered / ISO Parallel / Metric', '1/8" – 3/4"'],
  },
  HP: {
    title: 'HP Series — High Pressure Needle Valves',
    description: 'High pressure needle valves rated to 10,000 and 20,000 PSI. Available in straight, angular, 3-way and manifold configurations across NPT, ISO Tapered, ISO Parallel and Metric thread types.',
    specs: ['SS316', '10K / 20K PSI', 'Straight / Angular / 3-Way / Manifold', 'FF / MF / MM / OD', '1/4" – 1"'],
    }
}
export interface NeedleValveIBFilterOptions {
  threadTypes: string[]
  endConnections: string[]
  connectionSizes: string[]
  configurations: string[]
}

export interface NeedleValveIBFilters {
  threadTypes: string[]
  endConnections: string[]
  connectionSizes: string[]
  configurations: string[]
}

export const EMPTY_IB_FILTERS: NeedleValveIBFilters = {
  threadTypes: [],
  endConnections: [],
  connectionSizes: [],
  configurations: [],
}
export const END_CONNECTION_LABELS: Record<string, string> = {
  FF:  'Female — Female',
  MF:  'Male — Female',
  MM:  'Male — Male',
  OD:  'Tube OD',
  MOD: 'Mixed OD',
}

const IMG = 'https://pblol2.blob.core.windows.net/panam-images/products/needle-valves/ib.jpg'

export const NEEDLE_VALVE_IB_DATA: NeedleValveIBDTO[] = [
  { id: 1,   partNumber: 'PNV-IB-S-02-OD',         series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '1/8"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 2,   partNumber: 'PNV-IB-S-04-OD',         series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '1/4"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 3,   partNumber: 'PNV-IB-S-06-OD',         series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '3/8"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 4,   partNumber: 'PNV-IB-S-08-OD',         series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '1/2"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 5,   partNumber: 'PNV-IB-S-12-OD',         series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '3/4"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 6,   partNumber: 'PNV-IB-S-M03-OD',        series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '3mm',         configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 7,   partNumber: 'PNV-IB-S-M06-OD',        series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '6mm',         configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 8,   partNumber: 'PNV-IB-S-M08-OD',        series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '8mm',         configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 9,   partNumber: 'PNV-IB-S-M10-OD',        series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '10mm',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 10,  partNumber: 'PNV-IB-S-M12-OD',        series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '12mm',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 11,  partNumber: 'PNV-IB-S-M14-OD',        series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '14mm',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 12,  partNumber: 'PNV-IB-S-M16-OD',        series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '16mm',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 13,  partNumber: 'PNV-IB-S-M18-OD',        series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '18mm',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 14,  partNumber: 'PNV-IB-S-02-FF',         series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'FF',  connectionSize: '1/8"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 15,  partNumber: 'PNV-IB-S-04-FF',         series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'FF',  connectionSize: '1/4"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 16,  partNumber: 'PNV-IB-S-06-FF',         series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'FF',  connectionSize: '3/8"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 17,  partNumber: 'PNV-IB-S-08-FF',         series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'FF',  connectionSize: '1/2"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 18,  partNumber: 'PNV-IB-S-02R-FF',        series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'FF',  connectionSize: '1/8"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 19,  partNumber: 'PNV-IB-S-04R-FF',        series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'FF',  connectionSize: '1/4"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 20,  partNumber: 'PNV-IB-S-06R-FF',        series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'FF',  connectionSize: '3/8"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 21,  partNumber: 'PNV-IB-S-08R-FF',        series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'FF',  connectionSize: '1/2"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 22,  partNumber: 'PNV-IB-S-02G-FF',        series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Parallel',endConnection: 'FF',  connectionSize: '1/8"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 23,  partNumber: 'PNV-IB-S-04G-FF',        series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Parallel',endConnection: 'FF',  connectionSize: '1/4"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 24,  partNumber: 'PNV-IB-S-06G-FF',        series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Parallel',endConnection: 'FF',  connectionSize: '3/8"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 25,  partNumber: 'PNV-IB-S-08G-FF',        series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Parallel',endConnection: 'FF',  connectionSize: '1/2"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 26,  partNumber: 'PNV-IB-S-20M-FF',        series: 'IB', bodyMaterial: 'SS316', threadType: 'Metric',      endConnection: 'FF',  connectionSize: 'M20x1.5',     configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 27,  partNumber: 'PNV-IB-S-04-MF',         series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MF',  connectionSize: '1/4"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 28,  partNumber: 'PNV-IB-S-06-MF',         series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MF',  connectionSize: '3/8"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 29,  partNumber: 'PNV-IB-S-08-MF',         series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MF',  connectionSize: '1/2"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 30,  partNumber: 'PNV-IB-S-04R-MF',        series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'MF',  connectionSize: '1/4"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 31,  partNumber: 'PNV-IB-S-06R-MF',        series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'MF',  connectionSize: '3/8"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 32,  partNumber: 'PNV-IB-S-08R-MF',        series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'MF',  connectionSize: '1/2"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 33,  partNumber: 'PNV-IB-S-02-MM',         series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MM',  connectionSize: '1/8"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 34,  partNumber: 'PNV-IB-S-04-MM',         series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MM',  connectionSize: '1/4"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 35,  partNumber: 'PNV-IB-S-06-MM',         series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MM',  connectionSize: '3/8"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 36,  partNumber: 'PNV-IB-S-08-MM',         series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MM',  connectionSize: '1/2"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 37,  partNumber: 'PNV-IB-S-02R-MM',        series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'MM',  connectionSize: '1/8"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 38,  partNumber: 'PNV-IB-S-04R-MM',        series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'MM',  connectionSize: '1/4"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 39,  partNumber: 'PNV-IB-S-06R-MM',        series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'MM',  connectionSize: '3/8"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 40,  partNumber: 'PNV-IB-S-08R-MM',        series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'MM',  connectionSize: '1/2"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 41,  partNumber: 'PNV-IB-S-04-MOD',        series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '1/4"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 42,  partNumber: 'PNV-IB-S-04-06-MOD',     series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '1/4" x 3/8"', configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 43,  partNumber: 'PNV-IB-S-06-MOD',        series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '3/8"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 44,  partNumber: 'PNV-IB-S-06-08-MOD',     series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '3/8" x 1/2"', configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 45,  partNumber: 'PNV-IB-S-08-MOD',        series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '1/2"',        configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 46,  partNumber: 'PNV-IB-S-04-M06-MOD',    series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '1/4" x 6mm',  configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 47,  partNumber: 'PNV-IB-S-04-M08-MOD',    series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '1/4" x 8mm',  configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 48,  partNumber: 'PNV-IB-S-06-M10-MOD',    series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '3/8" x 10mm', configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 49,  partNumber: 'PNV-IB-S-06-M12-MOD',    series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '3/8" x 12mm', configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 50,  partNumber: 'PNV-IB-S-08-M12-MOD',    series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '1/2" x 12mm', configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 51,  partNumber: 'PNV-IB-S-20M-MM',        series: 'IB', bodyMaterial: 'SS316', threadType: 'Metric',      endConnection: 'MM',  connectionSize: 'M20x1.5',     configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 52,  partNumber: 'PNV-IB-S-20M-MF',        series: 'IB', bodyMaterial: 'SS316', threadType: 'Metric',      endConnection: 'MF',  connectionSize: 'M20x1.5',     configuration: 'Straight', stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 53,  partNumber: 'PNV-IB-S-02-OD-A',       series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '1/8"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 54,  partNumber: 'PNV-IB-S-04-OD-A',       series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '1/4"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 55,  partNumber: 'PNV-IB-S-06-OD-A',       series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '3/8"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 56,  partNumber: 'PNV-IB-S-08-OD-A',       series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '1/2"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 57,  partNumber: 'PNV-IB-S-12-OD-A',       series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '3/4"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 58,  partNumber: 'PNV-IB-S-M03-OD-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '3mm',         configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 59,  partNumber: 'PNV-IB-S-M06-OD-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '6mm',         configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 60,  partNumber: 'PNV-IB-S-M08-OD-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '8mm',         configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 61,  partNumber: 'PNV-IB-S-M10-OD-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '10mm',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 62,  partNumber: 'PNV-IB-S-M12-OD-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '12mm',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 63,  partNumber: 'PNV-IB-S-M14-OD-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '14mm',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 64,  partNumber: 'PNV-IB-S-M16-OD-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '16mm',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 65,  partNumber: 'PNV-IB-S-M18-OD-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'OD',  connectionSize: '18mm',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 66,  partNumber: 'PNV-IB-S-02-FF-A',       series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'FF',  connectionSize: '1/8"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 67,  partNumber: 'PNV-IB-S-04-FF-A',       series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'FF',  connectionSize: '1/4"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 68,  partNumber: 'PNV-IB-S-06-FF-A',       series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'FF',  connectionSize: '3/8"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 69,  partNumber: 'PNV-IB-S-08-FF-A',       series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'FF',  connectionSize: '1/2"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 70,  partNumber: 'PNV-IB-S-02R-FF-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'FF',  connectionSize: '1/8"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 71,  partNumber: 'PNV-IB-S-04R-FF-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'FF',  connectionSize: '1/4"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 72,  partNumber: 'PNV-IB-S-06R-FF-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'FF',  connectionSize: '3/8"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 73,  partNumber: 'PNV-IB-S-08R-FF-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'FF',  connectionSize: '1/2"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 74,  partNumber: 'PNV-IB-S-02G-FF-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Parallel',endConnection: 'FF',  connectionSize: '1/8"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 75,  partNumber: 'PNV-IB-S-04G-FF-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Parallel',endConnection: 'FF',  connectionSize: '1/4"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 76,  partNumber: 'PNV-IB-S-06G-FF-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Parallel',endConnection: 'FF',  connectionSize: '3/8"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 77,  partNumber: 'PNV-IB-S-08G-FF-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Parallel',endConnection: 'FF',  connectionSize: '1/2"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 78,  partNumber: 'PNV-IB-S-20M-FF-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'Metric',      endConnection: 'FF',  connectionSize: 'M20x1.5',     configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 79,  partNumber: 'PNV-IB-S-04-MF-A',       series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MF',  connectionSize: '1/4"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 80,  partNumber: 'PNV-IB-S-06-MF-A',       series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MF',  connectionSize: '3/8"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 81,  partNumber: 'PNV-IB-S-08-MF-A',       series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MF',  connectionSize: '1/2"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 82,  partNumber: 'PNV-IB-S-04R-MF-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'MF',  connectionSize: '1/4"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 83,  partNumber: 'PNV-IB-S-06R-MF-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'MF',  connectionSize: '3/8"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 84,  partNumber: 'PNV-IB-S-08R-MF-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'MF',  connectionSize: '1/2"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 85,  partNumber: 'PNV-IB-S-02-MM-A',       series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MM',  connectionSize: '1/8"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 86,  partNumber: 'PNV-IB-S-04-MM-A',       series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MM',  connectionSize: '1/4"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 87,  partNumber: 'PNV-IB-S-06-MM-A',       series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MM',  connectionSize: '3/8"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 88,  partNumber: 'PNV-IB-S-08-MM-A',       series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MM',  connectionSize: '1/2"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 89,  partNumber: 'PNV-IB-S-02R-MM-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'MM',  connectionSize: '1/8"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 90,  partNumber: 'PNV-IB-S-04R-MM-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'MM',  connectionSize: '1/4"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 91,  partNumber: 'PNV-IB-S-06R-MM-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'MM',  connectionSize: '3/8"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 92,  partNumber: 'PNV-IB-S-08R-MM-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'ISO Tapered', endConnection: 'MM',  connectionSize: '1/2"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 93,  partNumber: 'PNV-IB-S-04-MOD-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '1/4"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 94,  partNumber: 'PNV-IB-S-04-06-MOD-A',   series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '1/4" x 3/8"', configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 95,  partNumber: 'PNV-IB-S-06-MOD-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '3/8"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 96,  partNumber: 'PNV-IB-S-06-08-MOD-A',   series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '3/8" x 1/2"', configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 97,  partNumber: 'PNV-IB-S-08-MOD-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '1/2"',        configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 98,  partNumber: 'PNV-IB-S-04-M06-MOD-A',  series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '1/4" x 6mm',  configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 99,  partNumber: 'PNV-IB-S-04-M08-MOD-A',  series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '1/4" x 8mm',  configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 100, partNumber: 'PNV-IB-S-06-M10-MOD-A',  series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '3/8" x 10mm', configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 101, partNumber: 'PNV-IB-S-06-M12-MOD-A',  series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '3/8" x 12mm', configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 102, partNumber: 'PNV-IB-S-08-M12-MOD-A',  series: 'IB', bodyMaterial: 'SS316', threadType: 'NPT',         endConnection: 'MOD', connectionSize: '1/2" x 12mm', configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 103, partNumber: 'PNV-IB-S-20M-MF-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'Metric',      endConnection: 'MF',  connectionSize: 'M20x1.5',     configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 104, partNumber: 'PNV-IB-S-20M-MM-A',      series: 'IB', bodyMaterial: 'SS316', threadType: 'Metric',      endConnection: 'MM',  connectionSize: 'M20x1.5',     configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
  { id: 105, partNumber: 'PNV-IB-S-20M-M12-MOD-A', series: 'IB', bodyMaterial: 'SS316', threadType: 'Metric',      endConnection: 'MOD', connectionSize: 'M20x1.5x12mm',configuration: 'Angular',  stemSeal: 'PTFE', stepTip: 'V-Type', handle: 'Standard', options: 'Standard', imageUrl: IMG },
]