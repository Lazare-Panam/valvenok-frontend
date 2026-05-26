export interface DBBValveDTO {
  id: string
  partNumber: string
  description: string
  connectionType: 'Flange to Pipe'
  constructionType: 'Integral' | 'Three Piece'
  configuration: string
  sealMaterial: 'PTFE' | 'Grafoil' | 'PCTFE' | 'FKM'
  seatMaterial: 'Carbon Filled PTFE' | 'PCTFE' | 'Delrin (Soft Seat)' | 'PEEK'
  boreSize: string
  inletSize: string
  pressureClass: string
  flangeType: 'RF' | 'RTJ' | 'BS'
  outlet: string
  vent: string
  options: string[]
  imageUrl?: string
}

export interface DBBValveFilters {
  constructionTypes: string[]
  configurations: string[]
  sealMaterials: string[]
  seatMaterials: string[]
  boreSizes: string[]
  inletSizes: string[]
  pressureClasses: string[]
  flangeTypes: string[]
  outlets: string[]
  vents: string[]
  options: string[]
}

export const EMPTY_DBB_FILTERS: DBBValveFilters = {
  constructionTypes: [],
  configurations: [],
  sealMaterials: [],
  seatMaterials: [],
  boreSizes: [],
  inletSizes: [],
  pressureClasses: [],
  flangeTypes: [],
  outlets: [],
  vents: [],
  options: [],
}

export const BORE_SIZE_SORT_ORDER = [
  '10mm', '12mm', '14mm', '20mm', '25mm', '36mm', '50mm',
]

export const INLET_SIZE_SORT_ORDER = [
  '1/2" Flange', '3/4" Flange', '1" Flange', '1-1/2" Flange',
  'DN10', 'DN15', 'DN20', 'DN25', 'DN40', 'DN50',
]

export const PRESSURE_CLASS_SORT_ORDER = [
  '150', '300', '600', '900', '1500', '2500',
  'PN6', 'PN10', 'PN16', 'PN40', 'PN64', 'PN100', 'PN160', 'PN200', 'PN250',
]

export const OUTLET_SORT_ORDER = [
  'Same as Inlet',
  '1/2" NPT Female', '3/4" NPT Female', '1" NPT Female',
  '1/2" BSPP Female', '3/4" BSPP Female', '1" BSPP Female',
  '1/2" BSPT Female', '3/4" BSPT Female', '1" BSPT Female',
  'M20 × 1.5 Female',
  '1/2" OD Tube Fitting', '12mm OD Tube Fitting',
]

export const VENT_SORT_ORDER = [
  '1/4" NPT', '1/2" NPT',
  '1/2" Flanged', '3/4" Flanged', '1" Flanged', '1-1/2" Flanged', '2" Flanged',
]

export const DBB_FXP_DESCRIPTION = {
  title: 'Double Block & Bleed — Flange to Pipe',
  description:
    'Panam PDBB Double Block & Bleed valves with Flange-to-Pipe construction for primary instrument isolation, pressure transmitter mounting, and process bleed applications. Available in Integral and Three Piece configurations. ANSI 150 to 2500 Class with NACE MR-0175 and fire-safe options.',
  specs: [
    'Flange to Pipe — Integral & Three Piece',
    'Stainless Steel 316',
    'ANSI 150 – 2500 Class',
    'Ball, Needle & Combination',
    'NACE / Fire Safe Options',
  ],
}