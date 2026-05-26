export interface SwivelGaugeAdaptorDTO {
  id: string
  partNumber: string
  description: string
  type: 'Type M (Standard, Metal-to-Metal)' | 'Type S (Soft Sealing, PTFE/Grafoil)'
  inlet: string
  outlet: string
  length: string
  width: string
  nutAcrossFlats: string
  capAcrossFlats: string
  material: 'SS 316'
  imageUrl?: string
}

export interface SGAFilters {
  types: string[]
  inlets: string[]
  outlets: string[]
}

export const EMPTY_SGA_FILTERS: SGAFilters = {
  types: [],
  inlets: [],
  outlets: [],
}

export const SGA_DESCRIPTION = {
  title: 'Swivel Gauge Adaptors — PSGA',
  description:
    'Panam Swivel Gauge Adaptors with 360° adjustable gauge positioning and silver-plated anti-gall threads. Available in Type M (Standard Metal-to-Metal Sealing, without O-ring) and Type S (Soft Sealing with PTFE/Grafoil). Compatible with 1/2" NPT, BSPP, BSPT, and M20×1.5 thread standards. Stainless Steel 316 construction.',
  specs: [
    '360° Swivel Positioning',
    'Stainless Steel 316',
    'Type M & Type S Sealing',
    '1/2" NPT · BSPP · BSPT · M20×1.5',
    'Silver-Plated Anti-Gall Threads',
    'Male × Female & Male × Male',
  ],
}