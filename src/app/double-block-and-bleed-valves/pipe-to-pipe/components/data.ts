import { type PXPValveDTO } from './types'

const IMAGE = 'https://pblol2.blob.core.windows.net/panam-images/products/DBB/DBB-pxp.jpg'

const CONFIG_MAP: Record<string, string> = { 'A': 'Ball-Needle-Ball', 'B': 'Ball-Ball-Ball', 'C': 'Needle-Needle-Needle', 'D': 'Needle-Needle-Needle (Soft Seat)', 'E': 'Ball-Needle' }
const SEAL_MAP: Record<string, PXPValveDTO['sealMaterial']> = { '1': 'PTFE', '2': 'Grafoil', '3': 'PCTFE', '4': 'FKM' }
const SEAT_MAP: Record<string, PXPValveDTO['seatMaterial']> = { 'P': 'Carbon Filled PTFE', 'PC': 'PCTFE', 'D': 'Delrin (Soft Seat)', 'PK': 'PEEK' }
const BORE_MAP: Record<string, string> = { '10': '10mm', '12': '12mm', '14': '14mm', '20': '20mm', '25': '25mm', '36': '36mm', '50': '50mm' }
const INLET_SIZE_MAP: Record<string, string> = { '4': '1/4" Thread', '8': '1/2" Thread', '12': '3/4" Thread', '16': '1" Thread' }
const INLET_TYPE_MAP: Record<string, string> = { 'NF': 'NPT (F)', 'GF': 'BSPP (F)', 'RF': 'BSPT (F)' }
const OUTLET_MAP: Record<string, string> = { '': 'Same as Inlet', '8NF': '1/2" NPT Female', '12NF': '3/4" NPT Female', '16NF': '1" NPT Female', '8GF': '1/2" BSPP Female', '12GF': '3/4" BSPP Female', '16GF': '1" BSPP Female', '8RF': '1/2" BSPT Female', '12RF': '3/4" BSPT Female', '16RF': '1" BSPT Female', '20MF': 'M20 × 1.5 Female', '08': '1/2" OD Tube Fitting', 'M12': '12mm OD Tube Fitting' }
const VENT_MAP: Record<string, string> = { '4N': '1/4" NPT', '8N': '1/2" NPT' }
const OPTION_MAP: Record<string, string> = { 'LH': 'Lock Handle', 'SG': 'NACE MR-0175', 'FS': 'Fire Safe', 'PA': 'Paint', 'AS': 'Anti Static', 'OS': 'OS&Y Bonnet', 'ATK': 'Anti-Tamper Key', 'WBP': 'With Bleed Plugged', 'GRO': 'Gear Operated', 'LS825': 'PTFE LIPSEAL (IN825)', 'LS316': 'PTFE LIPSEAL (SS316)', 'SRS': 'Self Relieving Seat', 'AED': 'Anti Explosion Decompression', 'WOL': 'Weldover Lay' }

type RawPXP = {
  partNumber: string
  configCode: string
  sealCode: string
  seatCode: string
  boreCode: string
  inletSizeCode: string
  inletTypeCode: string
  outletCode: string
  ventCode: string
  optionCodes?: string[]
}

const RAW_DATA: RawPXP[] = [
  // A — NPT
  { partNumber: "PDBB-6-A-SS-1-P-10-8NF-8NF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '10', inletSizeCode: '8', inletTypeCode: 'NF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-12-8NF-8NF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'NF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-14-8NF-8NF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '14', inletSizeCode: '8', inletTypeCode: 'NF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-20-8NF-8NF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '8', inletTypeCode: 'NF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-12-12NF-12NF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-20-12NF-12NF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-25-12NF-12NF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-20-16NF-16NF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '16', inletTypeCode: 'NF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-25-16NF-16NF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '16', inletTypeCode: 'NF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-36-16NF-16NF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '36', inletSizeCode: '16', inletTypeCode: 'NF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-10-4NF-8NF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '10', inletSizeCode: '4', inletTypeCode: 'NF', outletCode: '8NF', ventCode: '4N' },
  // A — BSPP
  { partNumber: "PDBB-6-A-SS-1-P-12-8GF-8GF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'GF', outletCode: '8GF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-20-12GF-12GF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'GF', outletCode: '12GF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-25-16GF-16GF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '16', inletTypeCode: 'GF', outletCode: '16GF', ventCode: '4N' },
  // A — BSPT
  { partNumber: "PDBB-6-A-SS-1-P-12-8RF-8RF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'RF', outletCode: '8RF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-20-12RF-12RF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'RF', outletCode: '12RF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-25-16RF-16RF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '16', inletTypeCode: 'RF', outletCode: '16RF', ventCode: '4N' },
  // A — alt outlets
  { partNumber: "PDBB-6-A-SS-1-P-12-8NF-8GF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'NF', outletCode: '8GF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-12-8NF-8RF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'NF', outletCode: '8RF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-20-12NF-20MF-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '20MF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-12-8NF-08-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'NF', outletCode: '08', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-12-8NF-M12-4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'NF', outletCode: 'M12', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-P-20-12NF--4N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '', ventCode: '4N' },
  // A — 1/2" NPT vent
  { partNumber: "PDBB-6-A-SS-1-P-25-16NF-16NF-8N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '16', inletTypeCode: 'NF', outletCode: '16NF', ventCode: '8N' },
  { partNumber: "PDBB-6-A-SS-1-P-36-16NF-16NF-8N", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '36', inletSizeCode: '16', inletTypeCode: 'NF', outletCode: '16NF', ventCode: '8N' },
  // B
  { partNumber: "PDBB-6-B-SS-1-P-12-8NF-8NF-4N", configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'NF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-6-B-SS-1-P-20-12NF-12NF-4N", configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-6-B-SS-1-P-25-16NF-16NF-4N", configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '16', inletTypeCode: 'NF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-6-B-SS-1-P-12-8GF-8GF-4N", configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'GF', outletCode: '8GF', ventCode: '4N' },
  { partNumber: "PDBB-6-B-SS-1-P-20-12GF-12GF-4N", configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'GF', outletCode: '12GF', ventCode: '4N' },
  { partNumber: "PDBB-6-B-SS-1-P-12-8RF-8RF-4N", configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'RF', outletCode: '8RF', ventCode: '4N' },
  { partNumber: "PDBB-6-B-SS-1-P-20-12RF-12RF-4N", configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'RF', outletCode: '12RF', ventCode: '4N' },
  // C
  { partNumber: "PDBB-6-C-SS-1-P-12-8NF-8NF-4N", configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'NF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-6-C-SS-1-P-20-12NF-12NF-4N", configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-6-C-SS-1-P-25-16NF-16NF-4N", configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '16', inletTypeCode: 'NF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-6-C-SS-1-P-12-8GF-8GF-4N", configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'GF', outletCode: '8GF', ventCode: '4N' },
  { partNumber: "PDBB-6-C-SS-1-P-12-8RF-8RF-4N", configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'RF', outletCode: '8RF', ventCode: '4N' },
  { partNumber: "PDBB-6-C-SS-1-P-20-12NF-12NF-8N", configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '8N' },
  // D
  { partNumber: "PDBB-6-D-SS-1-D-12-8NF-8NF-4N", configCode: 'D', sealCode: '1', seatCode: 'D', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'NF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-6-D-SS-1-D-20-12NF-12NF-4N", configCode: 'D', sealCode: '1', seatCode: 'D', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-6-D-SS-1-D-25-16NF-16NF-4N", configCode: 'D', sealCode: '1', seatCode: 'D', boreCode: '25', inletSizeCode: '16', inletTypeCode: 'NF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-6-D-SS-1-D-12-8GF-8GF-4N", configCode: 'D', sealCode: '1', seatCode: 'D', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'GF', outletCode: '8GF', ventCode: '4N' },
  // E
  { partNumber: "PDBB-6-E-SS-1-P-12-8NF-8NF-4N", configCode: 'E', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'NF', outletCode: '8NF', ventCode: '4N' },
  { partNumber: "PDBB-6-E-SS-1-P-20-12NF-12NF-4N", configCode: 'E', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-6-E-SS-1-P-25-16NF-16NF-4N", configCode: 'E', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '16', inletTypeCode: 'NF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-6-E-SS-1-P-12-8GF-8GF-4N", configCode: 'E', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'GF', outletCode: '8GF', ventCode: '4N' },
  { partNumber: "PDBB-6-E-SS-1-P-20-12RF-12RF-4N", configCode: 'E', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'RF', outletCode: '12RF', ventCode: '4N' },
  // Alt seal/seat
  { partNumber: "PDBB-6-A-SS-2-P-20-12NF-12NF-4N", configCode: 'A', sealCode: '2', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-3-P-20-12NF-12NF-4N", configCode: 'A', sealCode: '3', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-4-P-20-12NF-12NF-4N", configCode: 'A', sealCode: '4', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-PC-25-16NF-16NF-4N", configCode: 'A', sealCode: '1', seatCode: 'PC', boreCode: '25', inletSizeCode: '16', inletTypeCode: 'NF', outletCode: '16NF', ventCode: '4N' },
  { partNumber: "PDBB-6-A-SS-1-PK-20-12NF-12NF-4N", configCode: 'A', sealCode: '1', seatCode: 'PK', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N' },
  // Options
  { partNumber: "PDBB-6-A-SS-1-P-12-8NF-8NF-4N-SG", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'NF', outletCode: '8NF', ventCode: '4N', optionCodes: ['SG'] },
  { partNumber: "PDBB-6-A-SS-1-P-20-12NF-12NF-4N-SG", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N', optionCodes: ['SG'] },
  { partNumber: "PDBB-6-A-SS-1-P-25-16NF-16NF-4N-SG", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '16', inletTypeCode: 'NF', outletCode: '16NF', ventCode: '4N', optionCodes: ['SG'] },
  { partNumber: "PDBB-6-A-SS-1-P-12-8NF-8NF-4N-LH", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'NF', outletCode: '8NF', ventCode: '4N', optionCodes: ['LH'] },
  { partNumber: "PDBB-6-A-SS-1-P-20-12NF-12NF-4N-LH", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N', optionCodes: ['LH'] },
  { partNumber: "PDBB-6-A-SS-1-P-20-12NF-12NF-4N-FS", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N', optionCodes: ['FS'] },
  { partNumber: "PDBB-6-A-SS-1-P-25-16NF-16NF-4N-FS", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '16', inletTypeCode: 'NF', outletCode: '16NF', ventCode: '4N', optionCodes: ['FS'] },
  { partNumber: "PDBB-6-A-SS-1-P-20-12NF-12NF-4N-FS-SG", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N', optionCodes: ['FS', 'SG'] },
  { partNumber: "PDBB-6-A-SS-1-P-20-12NF-12NF-4N-OS", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N', optionCodes: ['OS'] },
  { partNumber: "PDBB-6-A-SS-1-P-20-12NF-12NF-4N-ATK", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N', optionCodes: ['ATK'] },
  { partNumber: "PDBB-6-A-SS-1-P-20-12NF-12NF-4N-AS", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N', optionCodes: ['AS'] },
  { partNumber: "PDBB-6-A-SS-1-P-25-16NF-16NF-4N-AED", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '16', inletTypeCode: 'NF', outletCode: '16NF', ventCode: '4N', optionCodes: ['AED'] },
  { partNumber: "PDBB-6-A-SS-1-P-25-16NF-16NF-4N-SRS", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '16', inletTypeCode: 'NF', outletCode: '16NF', ventCode: '4N', optionCodes: ['SRS'] },
  { partNumber: "PDBB-6-A-SS-1-P-20-12NF-12NF-4N-LS316", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N', optionCodes: ['LS316'] },
  { partNumber: "PDBB-6-B-SS-1-P-20-12NF-12NF-4N-SG", configCode: 'B', sealCode: '1', seatCode: 'P', boreCode: '20', inletSizeCode: '12', inletTypeCode: 'NF', outletCode: '12NF', ventCode: '4N', optionCodes: ['SG'] },
  { partNumber: "PDBB-6-C-SS-1-P-12-8NF-8NF-4N-SG", configCode: 'C', sealCode: '1', seatCode: 'P', boreCode: '12', inletSizeCode: '8', inletTypeCode: 'NF', outletCode: '8NF', ventCode: '4N', optionCodes: ['SG'] },
  { partNumber: "PDBB-6-A-SS-1-P-25-16NF-16NF-4N-LH-SG-FS", configCode: 'A', sealCode: '1', seatCode: 'P', boreCode: '25', inletSizeCode: '16', inletTypeCode: 'NF', outletCode: '16NF', ventCode: '4N', optionCodes: ['LH', 'SG', 'FS'] },
]

export const DBB_PXP_DATA: PXPValveDTO[] = RAW_DATA.map(raw => {
  const configuration = CONFIG_MAP[raw.configCode] ?? 'Ball-Needle-Ball'
  const sealMaterial = SEAL_MAP[raw.sealCode] ?? 'PTFE'
  const seatMaterial = SEAT_MAP[raw.seatCode] ?? 'Carbon Filled PTFE'
  const boreSize = BORE_MAP[raw.boreCode] ?? raw.boreCode
  const inletSize = INLET_SIZE_MAP[raw.inletSizeCode] ?? raw.inletSizeCode
  const inletType = INLET_TYPE_MAP[raw.inletTypeCode] ?? raw.inletTypeCode
  const outlet = OUTLET_MAP[raw.outletCode] ?? 'Same as Inlet'
  const vent = VENT_MAP[raw.ventCode] ?? raw.ventCode
  const options: string[] = (raw.optionCodes ?? []).map(c => OPTION_MAP[c]).filter(Boolean)

  const description =
    `Panam PDBB Double Block & Bleed Valve, Pipe to Pipe, ${configuration}, Stainless Steel 316, ` +
    `${boreSize} bore, ${inletSize} ${inletType} inlet, ${outlet} outlet, ` +
    `${vent} vent, ${sealMaterial} seal, ${seatMaterial} seat${options.length ? `, ${options.join(', ')}` : ''}.`

  return {
    id: raw.partNumber,
    partNumber: raw.partNumber,
    description,
    connectionType: 'Pipe to Pipe',
    configuration,
    sealMaterial,
    seatMaterial,
    boreSize,
    inletSize,
    inletType,
    outlet,
    vent,
    options,
    imageUrl: IMAGE,
  }
})