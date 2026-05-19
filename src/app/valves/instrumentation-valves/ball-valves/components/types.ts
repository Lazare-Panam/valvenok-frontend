export interface BallValveFilters {
  series: string[]
  bodyMaterials: string[]
  threadTypes: string[]
  endConnectionTypes: string[]
  connectionSizes: string[]
  configurations: string[]
  seatMaterials: string[]
  handles: string[]
  pressureRatings: string[]
  options: string[]
}

export const EMPTY_BALL_VALVE_FILTERS: BallValveFilters = {
  series: [],
  bodyMaterials: [],
  threadTypes: [],
  endConnectionTypes: [],
  connectionSizes: [],
  configurations: [],
  seatMaterials: [],
  handles: [],
  pressureRatings: [],
  options: [],
}

export const SERIES_LABELS: Record<string, string> = {
  '2W': '2-Way',
  '3W': '3-Way',
  'HB': 'High Bore',
}

export const BODY_MATERIAL_LABELS: Record<string, string> = {
  S: '316 Stainless Steel',
  C: 'Carbon Steel A105',
  M: 'Monel',
  H: 'Hastelloy',
  B: 'Brass',
}