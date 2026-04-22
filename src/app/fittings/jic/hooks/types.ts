export interface JicFilters {
  threadTypes: string[]
  tubeODs: string[]
  tubeODsMm: string[]
  jicSizes: string[]
  threadSizes: string[]
}

export const EMPTY_JIC_FILTERS: JicFilters = {
  threadTypes: [],
  tubeODs: [],
  tubeODsMm: [],
  jicSizes: [],
  threadSizes: [],
}