
export interface ConnectorElbowFilters {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  threadDimensions: string[]
  threadTypes: string[]
  isPositionable: boolean | null
  hasORingSeal: boolean | null
}

export const EMPTY_CONNECTOR_ELBOW_FILTERS: ConnectorElbowFilters = {
  fittingTypes: [],
  tubeODs: [],
  tubeODUnits: [],
  threadDimensions: [],
  threadTypes: [],
  isPositionable: null,
  hasORingSeal: null,
}

export const FITTING_TYPE_LABELS: Record<string, string> = {
  "Male Connector": "Male Connector (MC)",
  "Male Bore Through Connector": "Male Bore Through Connector (MCBT)",
  "Bulkhead Male Connector": "Bulkhead Male Connector (BMC)",
  "Male Elbow": "Male Elbow (ME)",
  "Male Elbow 45": "Male Elbow 45° (LME)",
  "Male Run Tee": "Male Run Tee (MRT)",
  "Male Branch Tee": "Male Branch Tee (MBT)",
  "Female Connector": "Female Connector (FC)",
  "Bulkhead Female Connector": "Bulkhead Female Connector (BFC)",
  "Female Elbow": "Female Elbow (FE)",
  "Female Run Tee": "Female Run Tee (FRT)",
  "Female Branch Tee": "Female Branch Tee (FBT)",
}

export const THREAD_TYPE_LABELS: Record<string, string> = {
  NPT: "NPT",
  BSPT: "BSPT",
  BSPP: "BSPP",
  RP: "RP",
  Metric: "Metric",
  "SAE/MS": "SAE/MS",
  Flare37: "Flare 37°",
}

export const IMPERIAL_ODS = [
  '1/16', '1/8', '3/16', '1/4', '5/16', '3/8',
  '1/2', '5/8', '3/4', '7/8', '1', '1-1/4', '1-1/2', '2'
]

export const METRIC_ODS = [
  '2', '3', '4', '6', '8', '10', '12',
  '14', '15', '16', '18', '20', '22', '25', '28', '30', '32', '38'
]