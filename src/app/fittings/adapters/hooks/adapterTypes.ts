export interface AdapterFilters {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  threadSizes: string[]
  threadTypes: string[]
}

export const EMPTY_ADAPTER_FILTERS: AdapterFilters = {
  fittingTypes: [],
  tubeODs: [],
  tubeODUnits: [],
  threadSizes: [],
  threadTypes: [],
}

export const FITTING_TYPE_LABELS: Record<string, string> = {
  "Male Adapter": "Male Adapter (PMA)",
  "Female Adapter": "Female Adapter (PFA)",
}

export const THREAD_TYPE_LABELS: Record<string, string> = {
  NPT: "NPT",
  BSPT: "BSPT",
  BSPP: "BSPP",
  RP: "RP",
  RG: "RG",
  "SAE/MS": "SAE/MS",
}

export const TUBE_OD_UNIT_LABELS: Record<string, string> = {
  Imperial: "Imperial (inch)",
  Metric: "Metric (mm)",
}

export const IMPERIAL_ODS = [
  '1/8', '3/16', '1/4', '5/16', '3/8',
  '1/2', '5/8', '3/4', '7/8', '1', '1-1/4', '1-1/2', '2'
]

export const METRIC_ODS = [
  '3', '4', '6', '8', '10', '12', '14',
  '16', '18', '20', '25', '28', '32', '38'
]