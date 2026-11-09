import { type DBBValveDTO } from './types'

const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/dbb-fxf.webp'

const CONNECTION_CODE_MAP: Record<string, 'Integral' | 'Three Piece'> = { '2': 'Integral', '4': 'Three Piece' }
const CONFIG_MAP: Record<string, string> = { 'A': 'Ball-Needle-Ball', 'B': 'Ball-Ball-Ball', 'C': 'Needle-Needle-Needle', 'D': 'Needle-Needle-Needle (Soft Seat)', 'E': 'Ball-Needle' }
const SEAL_MAP: Record<string, DBBValveDTO['sealMaterial']> = { '1': 'PTFE', '2': 'Grafoil', '3': 'PCTFE', '4': 'FKM' }
const SEAT_MAP: Record<string, DBBValveDTO['seatMaterial']> = { 'P': 'Carbon Filled PTFE', 'PC': 'PCTFE', 'D': 'Delrin (Soft Seat)', 'PK': 'PEEK' }
const BORE_MAP: Record<string, string> = { '10': '10mm', '12': '12mm', '14': '14mm', '20': '20mm', '25': '25mm', '36': '36mm', '50': '50mm' }
const INLET_SIZE_MAP: Record<string, string> = { '15': '1/2" Flange', '20': '3/4" Flange', '25': '1" Flange', '40': '1-1/2" Flange', 'DN10': 'DN10', 'DN15': 'DN15', 'DN20': 'DN20', 'DN25': 'DN25', 'DN40': 'DN40', 'DN50': 'DN50' }
const PRESSURE_MAP: Record<string, string> = { '150': '150', '300': '300', '600': '600', '900': '900', '1500': '1500', '2500': '2500', '6': 'PN6', '10': 'PN10', '16': 'PN16', '40': 'PN40', '64': 'PN64', '100': 'PN100', '160': 'PN160', '200': 'PN200', '250': 'PN250' }
const FLANGE_MAP: Record<string, DBBValveDTO['flangeType']> = { 'RF': 'RF', 'RTJ': 'RTJ', 'BS': 'BS' }
const OUTLET_MAP: Record<string, string> = { '': 'Same as Inlet', '8NF': '1/2" NPT Female', '12NF': '3/4" NPT Female', '16NF': '1" NPT Female', '8GF': '1/2" BSPP Female', '12GF': '3/4" BSPP Female', '16GF': '1" BSPP Female', '8RF': '1/2" BSPT Female', '12RF': '3/4" BSPT Female', '16RF': '1" BSPT Female', '20MF': 'M20 × 1.5 Female', '08': '1/2" OD Tube Fitting', 'M12': '12mm OD Tube Fitting' }
const VENT_MAP: Record<string, string> = { '4N': '1/4" NPT', '8N': '1/2" NPT', '15': '1/2" Flanged', '20': '3/4" Flanged', '25': '1" Flanged', '40': '1-1/2" Flanged', '50': '2" Flanged' }
const OPTION_MAP: Record<string, string> = { 'LH': 'Lock Handle', 'SG': 'NACE MR-0175', 'FS': 'Fire Safe', 'PA': 'Paint', 'AS': 'Anti Static', 'OS': 'OS&Y Bonnet', 'ATK': 'Anti-Tamper Key', 'WBP': 'With Bleed Plugged', 'GRO': 'Gear Operated', 'LS825': 'PTFE LIPSEAL (IN825)', 'LS316': 'PTFE LIPSEAL (SS316)', 'SRS': 'Self Relieving Seat', 'AED': 'Anti Explosion Decompression', 'WOL': 'Weldover Lay' }

type RawDBB = {
  partNumber: string
  connectionCode: '2' | '4'
  configCode: string
  sealCode: string
  seatCode: string
  boreCode: string
  inletSizeCode: string
  pressureCode: string
  flangeCode: string
  outletCode: string
  ventCode: string
  optionCodes?: string[]
}

const RAW_DATA: RawDBB[] = [
  { partNumber: "PDBB-2-A-SS-1-P-10-15-150RF-8NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '10', inletSizeCode: '15', pressureCode: '150', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-12-15-150RF-8NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '150', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-14-15-150RF-8NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '14', inletSizeCode: '15', pressureCode: '150', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-20-15-150RF-8NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '15', pressureCode: '150', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-12-20-150RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '20', pressureCode: '150', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-14-20-150RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '14', inletSizeCode: '20', pressureCode: '150', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-150RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '150', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-25-20-150RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '20', pressureCode: '150', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-36-20-150RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '36', inletSizeCode: '20', pressureCode: '150', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-20-25-150RF-16NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '25', pressureCode: '150', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-150RF-16NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '150', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-36-25-150RF-16NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '36', inletSizeCode: '25', pressureCode: '150', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-50-25-150RF-16NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '50', inletSizeCode: '25', pressureCode: '150', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-36-40-150RF-16NF-8N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '36', inletSizeCode: '40', pressureCode: '150', flangeCode: 'RF', outletCode: '16NF', ventCode: '8N' },
  { partNumber: "PDBB-2-A-SS-1-P-50-40-150RF-16NF-8N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '50', inletSizeCode: '40', pressureCode: '150', flangeCode: 'RF', outletCode: '16NF', ventCode: '8N' },
  { partNumber: "PDBB-2-A-SS-1-P-12-15-300RF-8NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '300', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-20-15-300RF-8NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '15', pressureCode: '300', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-12-20-300RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-300RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-25-20-300RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-12-25-300RF-8NF-8N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '25', pressureCode: '300', flangeCode: 'RF', outletCode: '8NF', ventCode: '8N' },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-300RF-16NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '300', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-36-25-300RF-16NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '36', inletSizeCode: '25', pressureCode: '300', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-50-40-300RF-16NF-8N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '50', inletSizeCode: '40', pressureCode: '300', flangeCode: 'RF', outletCode: '16NF', ventCode: '8N' },
  { partNumber: "PDBB-2-A-SS-1-P-12-15-600RF-8NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '600', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-600RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '600', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-600RF-16NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '600', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-36-40-600RF-16NF-8N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '36', inletSizeCode: '40', pressureCode: '600', flangeCode: 'RF', outletCode: '16NF', ventCode: '8N' },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-900RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '900', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-900RF-16NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '900', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-1500RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '1500', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-1500RF-16NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '1500', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-12-15-2500RF-8NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '2500', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-2500RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '2500', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-12-15-300RTJ-8NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '300', flangeCode: 'RTJ', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-600RTJ-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '600', flangeCode: 'RTJ', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-900RTJ-16NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '900', flangeCode: 'RTJ', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-1500RTJ-16NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '1500', flangeCode: 'RTJ', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-2500RTJ-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '2500', flangeCode: 'RTJ', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-12-DN15-40RF-8NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: 'DN15', pressureCode: '40', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-20-DN20-40RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: 'DN20', pressureCode: '40', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-25-DN25-40RF-16NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: 'DN25', pressureCode: '40', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-20-DN20-100RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: 'DN20', pressureCode: '100', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-25-DN25-160RF-16NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: 'DN25', pressureCode: '160', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-12-15-300RF-8GF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '300', flangeCode: 'RF', outletCode: '8GF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-300RF-12GF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12GF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-300RF-16GF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '300', flangeCode: 'RF', outletCode: '16GF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-12-15-300RF-8RF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '300', flangeCode: 'RF', outletCode: '8RF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-300RF-12RF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12RF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-300RF-20MF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '20MF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-12-15-300RF-08-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '300', flangeCode: 'RF', outletCode: '08', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-12-15-300RF-M12-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '300', flangeCode: 'RF', outletCode: 'M12', ventCode: '4N' },
  { partNumber: "PDBB-2-B-SS-1-P-12-15-150RF-8NF-4N", connectionCode: '2', configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '150', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-B-SS-1-P-20-20-150RF-12NF-4N", connectionCode: '2', configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '150', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-B-SS-1-P-25-25-150RF-16NF-4N", connectionCode: '2', configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '150', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-B-SS-1-P-12-15-300RF-8NF-4N", connectionCode: '2', configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '300', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-B-SS-1-P-20-20-300RF-12NF-4N", connectionCode: '2', configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-B-SS-1-P-25-25-300RF-16NF-4N", connectionCode: '2', configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '300', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-B-SS-1-P-36-40-300RF-16NF-8N", connectionCode: '2', configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '36', inletSizeCode: '40', pressureCode: '300', flangeCode: 'RF', outletCode: '16NF', ventCode: '8N' },
  { partNumber: "PDBB-2-B-SS-1-P-20-20-600RF-12NF-4N", connectionCode: '2', configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '600', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-B-SS-1-P-25-25-600RF-16NF-4N", connectionCode: '2', configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '600', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-B-SS-1-P-20-20-900RF-12NF-4N", connectionCode: '2', configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '900', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-B-SS-1-P-25-25-1500RF-16NF-4N", connectionCode: '2', configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '1500', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-B-SS-1-P-12-15-300RTJ-8NF-4N", connectionCode: '2', configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '300', flangeCode: 'RTJ', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-B-SS-1-P-20-20-600RTJ-12NF-4N", connectionCode: '2', configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '600', flangeCode: 'RTJ', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-C-SS-1-P-12-15-150RF-8NF-4N", connectionCode: '2', configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '150', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-C-SS-1-P-12-15-300RF-8NF-4N", connectionCode: '2', configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '300', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-C-SS-1-P-20-20-300RF-12NF-4N", connectionCode: '2', configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-C-SS-1-P-25-25-300RF-16NF-4N", connectionCode: '2', configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '300', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-C-SS-1-P-12-15-600RF-8NF-4N", connectionCode: '2', configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '600', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-C-SS-1-P-20-20-600RF-12NF-4N", connectionCode: '2', configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '600', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-C-SS-1-P-12-15-900RF-8NF-4N", connectionCode: '2', configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '900', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-C-SS-1-P-12-15-1500RF-8NF-4N", connectionCode: '2', configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '1500', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-C-SS-1-P-12-15-2500RF-8NF-4N", connectionCode: '2', configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '2500', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-D-SS-1-D-12-15-150RF-8NF-4N", connectionCode: '2', configCode: 'D', sealCode: '1', seatCode: 'D', boreCode: '12', inletSizeCode: '15', pressureCode: '150', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-D-SS-1-D-12-15-300RF-8NF-4N", connectionCode: '2', configCode: 'D', sealCode: '1', seatCode: 'D', boreCode: '12', inletSizeCode: '15', pressureCode: '300', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-D-SS-1-D-20-20-300RF-12NF-4N", connectionCode: '2', configCode: 'D', sealCode: '1', seatCode: 'D', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-D-SS-1-D-25-25-300RF-16NF-4N", connectionCode: '2', configCode: 'D', sealCode: '1', seatCode: 'D', boreCode: '25', inletSizeCode: '25', pressureCode: '300', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-D-SS-1-D-12-15-600RF-8NF-4N", connectionCode: '2', configCode: 'D', sealCode: '1', seatCode: 'D', boreCode: '12', inletSizeCode: '15', pressureCode: '600', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-E-SS-1-P-12-15-150RF-8NF-4N", connectionCode: '2', configCode: 'E', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '150', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-E-SS-1-P-20-20-150RF-12NF-4N", connectionCode: '2', configCode: 'E', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '150', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-E-SS-1-P-25-25-150RF-16NF-4N", connectionCode: '2', configCode: 'E', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '150', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-E-SS-1-P-12-15-300RF-8NF-4N", connectionCode: '2', configCode: 'E', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '300', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-2-E-SS-1-P-20-20-300RF-12NF-4N", connectionCode: '2', configCode: 'E', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-E-SS-1-P-25-25-300RF-16NF-4N", connectionCode: '2', configCode: 'E', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '300', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-E-SS-1-P-20-20-600RF-12NF-4N", connectionCode: '2', configCode: 'E', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '600', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-E-SS-1-P-25-25-900RF-16NF-4N", connectionCode: '2', configCode: 'E', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '900', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-2-P-20-20-300RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '2', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-3-P-20-20-300RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '3', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-4-P-20-20-300RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '4', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-2-PC-25-25-300RF-16NF-4N", connectionCode: '2', configCode: 'A', sealCode: '2', seatCode: 'PC', boreCode: '25', inletSizeCode: '25', pressureCode: '300', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-PK-20-20-600RF-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'PK', boreCode: '20', inletSizeCode: '20', pressureCode: '600', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-PK-25-25-900RF-16NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'PK', boreCode: '25', inletSizeCode: '25', pressureCode: '900', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-12-15-300RF-8NF-4N-SG", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '300', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N', optionCodes: ['SG'] },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-300RF-12NF-4N-SG", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N', optionCodes: ['SG'] },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-300RF-16NF-4N-SG", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '300', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N', optionCodes: ['SG'] },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-600RF-12NF-4N-SG", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '600', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N', optionCodes: ['SG'] },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-900RF-16NF-4N-SG", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '900', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N', optionCodes: ['SG'] },
  { partNumber: "PDBB-2-A-SS-1-P-12-15-300RF-8NF-4N-LH", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '300', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N', optionCodes: ['LH'] },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-300RF-12NF-4N-LH", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N', optionCodes: ['LH'] },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-600RF-16NF-4N-LH", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '600', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N', optionCodes: ['LH'] },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-300RF-12NF-4N-FS", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N', optionCodes: ['FS'] },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-600RF-16NF-4N-FS", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '600', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N', optionCodes: ['FS'] },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-900RF-12NF-4N-FS-SG", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '900', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N', optionCodes: ['FS', 'SG'] },
  { partNumber: "PDBB-2-A-SS-1-P-50-40-300RF-16NF-8N-GRO", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '50', inletSizeCode: '40', pressureCode: '300', flangeCode: 'RF', outletCode: '16NF', ventCode: '8N', optionCodes: ['GRO'] },
  { partNumber: "PDBB-2-A-SS-1-P-50-40-600RF-16NF-8N-GRO", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '50', inletSizeCode: '40', pressureCode: '600', flangeCode: 'RF', outletCode: '16NF', ventCode: '8N', optionCodes: ['GRO'] },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-300RF-12NF-4N-OS", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N', optionCodes: ['OS'] },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-300RF-12NF-4N-ATK", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N', optionCodes: ['ATK'] },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-300RF-12NF-4N-AS", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N', optionCodes: ['AS'] },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-900RF-16NF-4N-AED", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '900', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N', optionCodes: ['AED'] },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-1500RF-16NF-4N-SRS", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '1500', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N', optionCodes: ['SRS'] },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-300RF-12NF-4N-LS316", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N', optionCodes: ['LS316'] },
  { partNumber: "PDBB-2-A-SS-1-P-36-40-300RF-16NF-15", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '36', inletSizeCode: '40', pressureCode: '300', flangeCode: 'RF', outletCode: '16NF', ventCode: '15' },
  { partNumber: "PDBB-2-A-SS-1-P-50-40-300RF-16NF-20", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '50', inletSizeCode: '40', pressureCode: '300', flangeCode: 'RF', outletCode: '16NF', ventCode: '20' },
  { partNumber: "PDBB-2-A-SS-1-P-50-40-600RF-16NF-25", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '50', inletSizeCode: '40', pressureCode: '600', flangeCode: 'RF', outletCode: '16NF', ventCode: '25' },
  { partNumber: "PDBB-2-A-SS-1-P-50-40-900RF-16NF-40", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '50', inletSizeCode: '40', pressureCode: '900', flangeCode: 'RF', outletCode: '16NF', ventCode: '40' },
  { partNumber: "PDBB-2-A-SS-1-P-50-40-1500RF-16NF-50", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '50', inletSizeCode: '40', pressureCode: '1500', flangeCode: 'RF', outletCode: '16NF', ventCode: '50' },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-300BS-12NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'BS', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-600BS-16NF-4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '600', flangeCode: 'BS', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-2-B-SS-1-P-20-20-300BS-12NF-4N", connectionCode: '2', configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'BS', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-1500RTJ-16NF-4N-LH-SG-FS", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '1500', flangeCode: 'RTJ', outletCode: '16NF', ventCode: '4N', optionCodes: ['LH', 'SG', 'FS'] },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-2500RTJ-16NF-4N-LH-SG", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '2500', flangeCode: 'RTJ', outletCode: '16NF', ventCode: '4N', optionCodes: ['LH', 'SG'] },
  { partNumber: "PDBB-2-B-SS-1-P-36-40-1500RTJ-16NF-15-GRO-SG", connectionCode: '2', configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '36', inletSizeCode: '40', pressureCode: '1500', flangeCode: 'RTJ', outletCode: '16NF', ventCode: '15', optionCodes: ['GRO', 'SG'] },
  { partNumber: "PDBB-2-A-SS-1-P-50-40-2500RTJ-16NF-50-GRO-SG-FS", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '50', inletSizeCode: '40', pressureCode: '2500', flangeCode: 'RTJ', outletCode: '16NF', ventCode: '50', optionCodes: ['GRO', 'SG', 'FS'] },
  { partNumber: "PDBB-2-A-SS-1-P-20-20-300RF--4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '', ventCode: '4N' },
  { partNumber: "PDBB-2-A-SS-1-P-25-25-600RF--4N", connectionCode: '2', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '600', flangeCode: 'RF', outletCode: '', ventCode: '4N' },
  // Three Piece (code 4) — same SKU patterns
  { partNumber: "PDBB-4-A-SS-1-P-10-15-150RF-8NF-4N", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '10', inletSizeCode: '15', pressureCode: '150', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-4-A-SS-1-P-12-15-150RF-8NF-4N", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '150', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-4-A-SS-1-P-20-20-150RF-12NF-4N", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '150', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-4-A-SS-1-P-25-25-150RF-16NF-4N", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '150', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-4-A-SS-1-P-36-40-150RF-16NF-8N", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '36', inletSizeCode: '40', pressureCode: '150', flangeCode: 'RF', outletCode: '16NF', ventCode: '8N' },
  { partNumber: "PDBB-4-A-SS-1-P-50-40-150RF-16NF-8N", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '50', inletSizeCode: '40', pressureCode: '150', flangeCode: 'RF', outletCode: '16NF', ventCode: '8N' },
  { partNumber: "PDBB-4-A-SS-1-P-12-15-300RF-8NF-4N", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '300', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-4-A-SS-1-P-20-20-300RF-12NF-4N", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-4-A-SS-1-P-25-25-300RF-16NF-4N", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '300', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-4-A-SS-1-P-50-40-300RF-16NF-8N", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '50', inletSizeCode: '40', pressureCode: '300', flangeCode: 'RF', outletCode: '16NF', ventCode: '8N' },
  { partNumber: "PDBB-4-A-SS-1-P-20-20-600RF-12NF-4N", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '600', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-4-A-SS-1-P-25-25-600RF-16NF-4N", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '600', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-4-A-SS-1-P-20-20-900RF-12NF-4N", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '900', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-4-A-SS-1-P-25-25-1500RF-16NF-4N", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '1500', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-4-A-SS-1-P-20-20-2500RF-12NF-4N", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '2500', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-4-A-SS-1-P-25-25-900RTJ-16NF-4N", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '900', flangeCode: 'RTJ', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-4-A-SS-1-P-25-25-1500RTJ-16NF-4N", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '1500', flangeCode: 'RTJ', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-4-B-SS-1-P-20-20-300RF-12NF-4N", connectionCode: '4', configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-4-B-SS-1-P-25-25-600RF-16NF-4N", connectionCode: '4', configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '600', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-4-C-SS-1-P-12-15-300RF-8NF-4N", connectionCode: '4', configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '300', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-4-C-SS-1-P-12-15-2500RF-8NF-4N", connectionCode: '4', configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '15', pressureCode: '2500', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-4-D-SS-1-D-12-15-300RF-8NF-4N", connectionCode: '4', configCode: 'D', sealCode: '1', seatCode: 'D', boreCode: '12', inletSizeCode: '15', pressureCode: '300', flangeCode: 'RF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-4-E-SS-1-P-25-25-300RF-16NF-4N", connectionCode: '4', configCode: 'E', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '300', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-4-A-SS-1-P-20-20-300RF-12NF-4N-SG", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '300', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N', optionCodes: ['SG'] },
  { partNumber: "PDBB-4-A-SS-1-P-25-25-600RF-16NF-4N-LH", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '600', flangeCode: 'RF', outletCode: '16NF', ventCode: '4N', optionCodes: ['LH'] },
  { partNumber: "PDBB-4-A-SS-1-P-20-20-900RF-12NF-4N-FS-SG", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '20', pressureCode: '900', flangeCode: 'RF', outletCode: '12NF', ventCode: '4N', optionCodes: ['FS', 'SG'] },
  { partNumber: "PDBB-4-A-SS-1-P-50-40-600RF-16NF-8N-GRO", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '50', inletSizeCode: '40', pressureCode: '600', flangeCode: 'RF', outletCode: '16NF', ventCode: '8N', optionCodes: ['GRO'] },
  { partNumber: "PDBB-4-A-SS-1-P-25-25-1500RTJ-16NF-4N-LH-SG-FS", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '25', pressureCode: '1500', flangeCode: 'RTJ', outletCode: '16NF', ventCode: '4N', optionCodes: ['LH', 'SG', 'FS'] },
  { partNumber: "PDBB-4-A-SS-1-P-50-40-2500RTJ-16NF-50-GRO-SG-FS", connectionCode: '4', configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '50', inletSizeCode: '40', pressureCode: '2500', flangeCode: 'RTJ', outletCode: '16NF', ventCode: '50', optionCodes: ['GRO', 'SG', 'FS'] },
]

export const DBB_FXF_DATA: DBBValveDTO[] = RAW_DATA.map(raw => {
  const constructionType = CONNECTION_CODE_MAP[raw.connectionCode] ?? 'Integral'
  const configuration = CONFIG_MAP[raw.configCode] ?? 'Ball-Needle-Ball'
  const sealMaterial = SEAL_MAP[raw.sealCode] ?? 'PTFE'
  const seatMaterial = SEAT_MAP[raw.seatCode] ?? 'Carbon Filled PTFE'
  const boreSize = BORE_MAP[raw.boreCode] ?? raw.boreCode
  const inletSize = INLET_SIZE_MAP[raw.inletSizeCode] ?? raw.inletSizeCode
  const pressureClass = PRESSURE_MAP[raw.pressureCode] ?? raw.pressureCode
  const flangeType = FLANGE_MAP[raw.flangeCode] ?? 'RF'
  const outlet = OUTLET_MAP[raw.outletCode] ?? 'Same as Inlet'
  const vent = VENT_MAP[raw.ventCode] ?? raw.ventCode
  const options: string[] = (raw.optionCodes ?? []).map(c => OPTION_MAP[c]).filter(Boolean)

  const description =
    `Panam PDBB Double Block & Bleed Valve, Flange to Flange (${constructionType}), ${configuration}, Stainless Steel 316, ` +
    `${boreSize} bore, ${inletSize} inlet × ${pressureClass} ${flangeType} flange, ${outlet} outlet, ` +
    `${vent} vent, ${sealMaterial} seal, ${seatMaterial} seat${options.length ? `, ${options.join(', ')}` : ''}.`

  return {
    id: raw.partNumber,
    partNumber: raw.partNumber,
    description,
    connectionType: 'Flange to Flange',
    constructionType,
    configuration,
    sealMaterial,
    seatMaterial,
    boreSize,
    inletSize,
    pressureClass,
    flangeType,
    outlet,
    vent,
    options,
    imageUrl: IMAGE,
  }
})