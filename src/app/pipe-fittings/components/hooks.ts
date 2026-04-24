export interface PipeFittingFilters {
  fittingTypes: string[]
  materials: string[]
  p1Sizes: string[]
  p1Types: string[]
  p2Sizes: string[]
  p2Types: string[]
  lengthVariants: string[]
}

export const EMPTY_PIPE_FITTING_FILTERS: PipeFittingFilters = {
  fittingTypes: [],
  materials: [],
  p1Sizes: [],
  p1Types: [],
  p2Sizes: [],
  p2Types: [],
  lengthVariants: [],
}

export const FITTING_TYPE_LABELS: Record<string, string> = {
  HN: 'Hex Nipples',
  BHU: 'Bulkhead Union',
  SC: 'Swivel Connector',
  SU: 'Swivel Union',
  HRN: 'Hex Reducing Nipples',
  HLN: 'Hex Long Nipples',
  CN: 'Close Nipples',
  LPN: 'Long Pipe Nipples',
  HC: 'Hex Couplings',
  RHC: 'Reducing Hex Couplings',
  A: 'Adapters',
  RA: 'Reducing Adapters',
  RB: 'Reducing Bushing',
  HP: 'Hex Plugs',
  HHP: 'Hollow Hex Plugs',
  PC: 'Pipe Caps',
  U: 'Union',
  FE: 'Female Elbow',
  ME: 'Male Elbow',
  UE: 'Union Elbow',
  SE: 'Street Elbow',
  FT: 'Female Tee',
  MT: 'Male Tee',
  FBT: 'Female Branch Tee',
  FRT: 'Female Run Tee',
  ST: 'Street Tee',
  BT: 'Branch Tee',
  RT: 'Run Tee',
  UT: 'Union Tee',
  C: 'Cross',
}

export const THREAD_TYPE_LABELS: Record<string, string> = {
  N: 'NPT',
  R: 'ISO Tapered (BSPT)',
  G: 'ISO Parallel (BSPP)',
  M: 'Metric',
  S: 'SAE/MS Straight',
  J: '37° Flare',
}