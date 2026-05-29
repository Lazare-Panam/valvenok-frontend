export interface Manifold5VMDTO {
  id: string
  partNumber: string
  description: string
  valveCount: 5
  connectionSize: string
  connectionType: 'Female' | 'Male' | 'Male/Female' | 'Female/Male' | 'Tube Fitting'
  mounting: 'Pipe-to-Pipe' | 'Pipe-to-Flange' | 'Flange-to-Flange' | 'Direct Mount'
  drainHoleSize: string
  maxPressure: '6000 psi' | '10000 psi'
  specialService: string[]
  imageUrl?: string
}

export interface Manifold5VMFilters {
  connectionSizes: string[]
  connectionTypes: string[]
  mountings: string[]
  drainHoleSizes: string[]
  maxPressures: string[]
  specialServices: string[]
}

export const EMPTY_5VM_FILTERS: Manifold5VMFilters = {
  connectionSizes: [],
  connectionTypes: [],
  mountings: [],
  drainHoleSizes: [],
  maxPressures: [],
  specialServices: [],
}

export const CONNECTION_SIZE_SORT_ORDER_5VM = [
  '1/4" NPT', '1/2" NPT',
  '1/4" BSPT', '1/2" BSPT',
  '1/4" BSPP', '1/2" BSPP',
  '1/4" BSPP w/ Swivel Nut', '1/2" BSPP w/ Swivel Nut',
  'M20x1.5', 'M20x1.5 w/ Swivel Nut', 'M20x1.5 / Flange',
  '12mm Tube Fitting', '1/2" Tube Fitting',
]

export const DRAIN_HOLE_SORT_ORDER_5VM = [
  '1/4" NPT (Standard)',
  '1/2" NPT',
  '1/8" NPT',
  '1/4" BSPP',
  '1/2" BSPP',
  '1/8" BSPP',
  'M20x1.5',
]

export const MANIFOLD_5VM_DESCRIPTION = {
  title: "5-Valve Manifolds",
  description:
    "Panam 5-valve instrumentation manifolds for differential pressure transmitters in process measurement, equalization, and isolation applications. Type A (Angular) configuration in stainless steel 316. Standard 6000 psi (414 bar) and high-pressure 10000 psi (689 bar) ratings. Optional Power Configuration, NACE MR-01-75 sour gas service, large bore (soft seat), high/low temperature service, and mounting brackets.",
  specs: [
    "5-Valve Type A (Angular)",
    "Stainless Steel 316",
    "DP Transmitter Service",
    "NPT, BSPT, BSPP, M20 & Tube",
    "6000 – 10000 psi",
    "NACE / Power Config / LB Options",
  ],
}