export interface NeedleValveHBDTO {
  id: number
  partNumber: string
  valveType: string
  series: string
  seat: string
  bodyMaterial: string
  endConnection: string
  connectionSize: string
  workingPressure: string
  options: string
  imageUrl: string
}

export interface NeedleValveHBFilterOptions {
  valveTypes: string[]
  seats: string[]
  bodyMaterials: string[]
  endConnections: string[]
  connectionSizes: string[]
  workingPressures: string[]
}

export interface NeedleValveHBFilters {
  valveTypes: string[]
  seats: string[]
  bodyMaterials: string[]
  endConnections: string[]
  connectionSizes: string[]
  workingPressures: string[]
  options: string[]
}

export const EMPTY_HB_FILTERS: NeedleValveHBFilters = {
  valveTypes: [],
  seats: [],
  bodyMaterials: [],
  endConnections: [],
  connectionSizes: [],
  workingPressures: [],
  options: [],
}

export const VALVE_TYPE_LABELS: Record<string, string> = {
  PNV: 'Needle Valve',
  PBB: 'Block & Bleed',
}

export const SEAT_LABELS: Record<string, string> = {
  H:  'Hard',
  S:  'Soft (Delrin)',
  S1: 'PCTFE',
  S2: 'PEEK',
}

export const BODY_MATERIAL_LABELS: Record<string, string> = {
  SS316:   'Stainless Steel 316',
  DUPLEX:  'Duplex',
  MONEL:   'Monel',
  HAST:    'Hastelloy',
  BRASS:   'Brass',
}

export const END_CONNECTION_LABELS: Record<string, string> = {
  FF: 'Female — Female',
  MF: 'Male — Female',
  MM: 'Male — Male',
  OD: 'Tube OD',
}

