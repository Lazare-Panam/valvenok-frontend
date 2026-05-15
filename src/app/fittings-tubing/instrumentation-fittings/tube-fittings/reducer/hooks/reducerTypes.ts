export interface ReducerFilters {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  tubeOD2s: string[]
  tubeOD2Units: string[]
}

export const EMPTY_REDUCER_FILTERS: ReducerFilters = {
  fittingTypes: [],
  tubeODs: [],
  tubeODUnits: [],
  tubeOD2s: [],
  tubeOD2Units: [],
}

export const FITTING_TYPE_LABELS: Record<string, string> = {
  "Reducer": "Reducer (PR)",
  "Bulkhead Reducer": "Bulkhead Reducer (PBR)",
  "Reducer Elbow": "Reducer Elbow (PRE)",
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
  '3', '4', '6', '8', '10', '12', '14', '15',
  '16', '18', '20', '22', '25'
]