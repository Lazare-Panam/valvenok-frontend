export interface NeedleValveSBFilterOptions {
  valveTypes: string[]
  seats: string[]
  threadTypes: string[]
  endConnections: string[]
  connectionSizes: string[]
}

export interface NeedleValveSBFilters {
  valveTypes: string[]
  seats: string[]
  threadTypes: string[]
  endConnections: string[]
  connectionSizes: string[]
}

export const EMPTY_SB_FILTERS: NeedleValveSBFilters = {
  valveTypes: [],
  seats: [],
  threadTypes: [],
  endConnections: [],
  connectionSizes: [],
}

export const SB_VALVE_TYPE_LABELS: Record<string, string> = {
  PNV: 'Needle Valve',
  PBB: 'Block & Bleed',
}

export const SB_SEAT_LABELS: Record<string, string> = {
  H: 'Hard',
  S: 'Soft (Delrin)',
}

export const SB_END_CONNECTION_LABELS: Record<string, string> = {
  FF: 'Female — Female',
  MF: 'Male — Female',
  MM: 'Male — Male',
  OD: 'Tube OD',
}

export const SB_SERIES_DESCRIPTION = {
  title: 'SB Series — Square Body Needle Valves',
  description: 'Square body needle and block & bleed valves in OD, FF, MF and MM end connections. Available in hard and soft seat configurations across 6000 PSI working pressure.',
  specs: ['SS316', '6000 PSI', 'Hard & Soft Seat', 'OD / FF / MF / MM', '1/8" – 1"'],
}