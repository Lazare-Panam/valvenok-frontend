export interface ManifoldDTO {
  id: string
  partNumber: string
  description: string
  valveCount: 2
  material: 'SS' | 'CS' | 'MO' | 'HC' | 'DSS' | 'SDSS' | '6MO' | 'INC625' | 'INC825'
  connectionSize: string
  connectionType: 'Female' | 'Male' | 'Male/Female' | 'Female/Male' | 'Tube Fitting'
  mounting: 'Pipe-to-Pipe' | 'Pipe-to-Flange' | 'Flange-to-Flange' | 'Direct Mount' | 'Base Mount' | 'Base Vent'
  configuration: 'Type L' | 'Type V' | 'Type A'
  maxPressure: '6000 psi' | '10000 psi'
  specialService: string[]
  imageUrl?: string
}

export interface ManifoldFilters {
  materials: string[]
  connectionSizes: string[]
  connectionTypes: string[]
  mountings: string[]
  configurations: string[]
  maxPressures: string[]
  specialServices: string[]
}

export const EMPTY_MANIFOLD_FILTERS: ManifoldFilters = {
  materials: [],
  connectionSizes: [],
  connectionTypes: [],
  mountings: [],
  configurations: [],
  maxPressures: [],
  specialServices: [],
}

export const CONNECTION_SIZE_SORT_ORDER = [
  '1/4" NPT', '1/2" NPT',
  '1/4" BSPT', '1/2" BSPT',
  '1/4" BSPP', '1/2" BSPP',
  '1/4" BSPP w/ Swivel Nut', '1/2" BSPP w/ Swivel Nut',
  'M20x1.5', 'M20x1.5 w/ Swivel Nut',
  '12mm Tube Fitting', '1/2" Tube Fitting',
]

export const MATERIAL_LABELS: Record<string, string> = {
  'SS':     'Stainless Steel 316',
  'CS':     'Carbon Steel',
  'MO':     'Monel 400',
  'HC':     'Hastelloy C-276',
  'DSS':    'Duplex S32205',
  'SDSS':   'Super Duplex S32750',
  '6MO':    'Super Duplex S31254',
  'INC625': 'Inconel 625',
  'INC825': 'Inconel 825',
}

export const MANIFOLD_DESCRIPTION = {
  title: "2-Valve Manifolds",
  description:
    "Panam 2-valve instrumentation manifolds for differential pressure measurement, gauge isolation, and process bleed/vent applications. Available in stainless steel 316, carbon steel, Monel, Hastelloy, Duplex, and Inconel alloys. Standard 6000 psi (414 bar) and high-pressure 10000 psi (689 bar) ratings with full NACE MR-01-75 sour gas certification available.",
  specs: [
    "2-Valve Configuration",
    "9 Material Options",
    "NPT, BSPT, BSPP, M20 & Tube Fittings",
    "Type L, V, A Configurations",
    "6000 – 10000 psi Working Pressure",
    "NACE / High-Temp / Low-Temp Options",
  ],
}