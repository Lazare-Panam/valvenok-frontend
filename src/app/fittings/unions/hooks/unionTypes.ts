export interface UnionFilters {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  tubeOD2s: string[]
  tubeOD3s: string[]
}

export const EMPTY_UNION_FILTERS: UnionFilters = {
  fittingTypes: [],
  tubeODs: [],
  tubeODUnits: [],
  tubeOD2s: [],
  tubeOD3s: [],
}

export const FITTING_TYPE_LABELS: Record<string, string> = {
  "Union": "Union (PU)",
  "Reducing Union": "Reducing Union (PRU)",
  "Bulkhead Union": "Bulkhead Union (PBU)",
  "Union Elbow": "Union Elbow (PUE)",
  "Reducing Union Elbow": "Reducing Union Elbow (PRUE)",
  "Union Tee": "Union Tee (PUT)",
  "Reducing Union Tee": "Reducing Union Tee (PRUT)",
  "Union Cross": "Union Cross (PUC)",
}

export const TUBE_OD_UNIT_LABELS: Record<string, string> = {
  Imperial: "Imperial (inch)",
  Metric: "Metric (mm)",
}

export const IMPERIAL_ODS = [
  '1/16', '1/8', '3/16', '1/4', '5/16', '3/8',
  '1/2', '5/8', '3/4', '7/8', '1', '1-1/4', '1-1/2', '2'
]

export const METRIC_ODS = [
  '2', '3', '4', '6', '8', '10', '12', '14', '15',
  '16', '18', '20', '22', '25', '28', '30', '32', '35', '38', '40', '42', '50'
]