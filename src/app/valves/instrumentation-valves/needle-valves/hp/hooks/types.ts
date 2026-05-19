// ── HP ──────────────────────────────────────────────────────────────────────
export interface NeedleValveHPFilterOptions {
  threadTypes: string[]
  endConnections: string[]
  connectionSizes: string[]
  configurations: string[]
  workingPressures: string[]
}

export interface NeedleValveHPFilters {
  threadTypes: string[]
  endConnections: string[]
  connectionSizes: string[]
  configurations: string[]
  workingPressures: string[]
}

export const EMPTY_HP_FILTERS: NeedleValveHPFilters = {
  threadTypes: [],
  endConnections: [],
  connectionSizes: [],
  configurations: [],
  workingPressures: [],
}

// Add HP to CONFIGURATION_LABELS
export const CONFIGURATION_LABELS: Record<string, string> = {
  'Straight':         'Straight',
  'Angular':          'Angular',
  '3-Way 2 Inlets':  '3-Way 2 Inlets',
  '3-Way 2 Outlets': '3-Way 2 Outlets',
  '2-Way Manifold':  '2-Way Manifold',
}
export const END_CONNECTION_LABELS: Record<string, string> = {
  FF:  'Female — Female',
  MF:  'Male — Female',
  MM:  'Male — Male',
  OD:  'Tube OD',
  MOD: 'Mixed OD',
}
// Add HP to SERIES_DESCRIPTIONS
// HP: {
//   title: 'HP Series — High Pressure Needle Valves',
//   description: 'High pressure needle valves rated to 10,000 and 20,000 PSI. Available in straight, angular, 3-way and manifold configurations across NPT, ISO Tapered, ISO Parallel and Metric thread types.',
//   specs: ['SS316', '10K / 20K PSI', 'Straight / Angular / 3-Way / Manifold', 'FF / MF / MM / OD', '1/4" – 1"'],
// }