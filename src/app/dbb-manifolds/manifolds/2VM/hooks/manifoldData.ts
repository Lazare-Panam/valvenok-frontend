import { type ManifoldDTO } from "./types"

const MANIFOLD_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/2VM/2VM-1.jpg"

const SIZE_CODE_MAP: Record<string, string> = {
  '4':       '1/4" NPT',
  '8':       '1/2" NPT',
  '04':      '1/4" NPT',
  '08':      '1/2" NPT',
  '4R':      '1/4" BSPT',
  '8R':      '1/2" BSPT',
  '4G':      '1/4" BSPP',
  '8G':      '1/2" BSPP',
  'G8':      '1/2" BSPP',
  '8GSWL':   '1/2" BSPP w/ Swivel Nut',
  '4GSWL':   '1/4" BSPP w/ Swivel Nut',
  '20M':     'M20x1.5',
  '20MSWL':  'M20x1.5 w/ Swivel Nut',
  'O8':      '1/2" Tube Fitting',
  'M12':     '12mm Tube Fitting',
}

const CONNECTION_TYPE_MAP: Record<string, ManifoldDTO['connectionType']> = {
  '':   'Female',
  'MM': 'Male',
  'MF': 'Male/Female',
  'FM': 'Female/Male',
  'FF': 'Female',
  'OD': 'Tube Fitting',
}

const MOUNTING_MAP: Record<string, ManifoldDTO['mounting']> = {
  'R':  'Pipe-to-Pipe',
  'T':  'Pipe-to-Flange',
  'H':  'Flange-to-Flange',
  'DM': 'Direct Mount',
  'BM': 'Base Mount',
  'BV': 'Base Vent',
  'RM': 'Pipe-to-Pipe',
  'DMA':'Direct Mount',
  'BS': 'Base Mount',
}

const CONFIG_MAP: Record<string, ManifoldDTO['configuration']> = {
  '':   'Type L',
  'V':  'Type V',
  'A':  'Type A',
}

const OPTIONAL_MAP: Record<string, string> = {
  'P':    'Vent with Plug',
  'SG':   'NACE Sour Gas (MR-01-75)',
  'HT':   'Grafoil High Temp',
  'XLT':  'Low Temperature',
  'BT':   'Ball Tip',
  'LB':   'Soft Seat Large Bore',
  'ATK':  'Anti-Tamper Key',
}

const MATERIAL_FULL: Record<string, string> = {
  'SS': 'Stainless Steel 316', 'CS': 'Carbon Steel', 'MO': 'Monel 400',
  'HC': 'Hastelloy C-276', 'DSS': 'Duplex S32205', 'SDSS': 'Super Duplex S32750',
  '6MO': 'Super Duplex S31254', 'INC625': 'Inconel 625', 'INC825': 'Inconel 825',
}

type RawManifold = {
  partNumber: string
  material: ManifoldDTO['material']
  sizeCode: string
  connectionType: keyof typeof CONNECTION_TYPE_MAP
  mountingCode: keyof typeof MOUNTING_MAP
  configCode: keyof typeof CONFIG_MAP
  ventCode?: string
  optionalCodes?: string[]
  pressureCode?: '10K'
  mountingBracket?: boolean
}

const RAW_DATA: RawManifold[] = [
  // ===== USER-PROVIDED SKUs (30) =====
  { partNumber: "2VM-SS-8-R",          material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-SS-8-T",          material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'T',   configCode: '' },
  { partNumber: "2VM-SS-8-H",          material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'H',   configCode: '' },
  { partNumber: "2VM-SS-8-RM",         material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'RM',  configCode: '' },
  { partNumber: "2VM-SS-8-DM",         material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'DM',  configCode: '' },
  { partNumber: "2VM-CS-8-R",          material: 'CS', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-CS-8-T",          material: 'CS', sizeCode: '8',   connectionType: '',   mountingCode: 'T',   configCode: '' },
  { partNumber: "2VM-CS-8-H",          material: 'CS', sizeCode: '8',   connectionType: '',   mountingCode: 'H',   configCode: '' },
  { partNumber: "2VM-CS-8-RM",         material: 'CS', sizeCode: '8',   connectionType: '',   mountingCode: 'RM',  configCode: '' },
  { partNumber: "2VM-CS-8-DM",         material: 'CS', sizeCode: '8',   connectionType: '',   mountingCode: 'DM',  configCode: '' },
  { partNumber: "2VM-SS-08-HP",        material: 'SS', sizeCode: '08',  connectionType: '',   mountingCode: 'R',   configCode: '', pressureCode: '10K' },
  { partNumber: "2VM-SS-08-MF-RM",     material: 'SS', sizeCode: '08',  connectionType: 'MF', mountingCode: 'RM',  configCode: '' },
  { partNumber: "2VM-SS-08-FF-RM",     material: 'SS', sizeCode: '08',  connectionType: 'FF', mountingCode: 'RM',  configCode: '' },
  { partNumber: "2VM-SS-08-FF-RM-10K", material: 'SS', sizeCode: '08',  connectionType: 'FF', mountingCode: 'RM',  configCode: '', pressureCode: '10K' },
  { partNumber: "2VM-SS-M20-MF-RM",    material: 'SS', sizeCode: '20M', connectionType: 'MF', mountingCode: 'RM',  configCode: '' },
  { partNumber: "2VM-SS-G8-MF-RM",     material: 'SS', sizeCode: 'G8',  connectionType: 'MF', mountingCode: 'RM',  configCode: '' },
  { partNumber: "2VM-SS-G8-FF-RM",     material: 'SS', sizeCode: 'G8',  connectionType: 'FF', mountingCode: 'RM',  configCode: '' },
  { partNumber: "2VM-SS-08-BM",        material: 'SS', sizeCode: '08',  connectionType: '',   mountingCode: 'BM',  configCode: '' },
  { partNumber: "2VM-SS-08-BS-V8",     material: 'SS', sizeCode: '08',  connectionType: '',   mountingCode: 'BS',  configCode: '', ventCode: 'V8' },
  { partNumber: "2VM-SS-20M-8-MM-RM",  material: 'SS', sizeCode: '20M', connectionType: 'MM', mountingCode: 'RM',  configCode: '' },
  { partNumber: "2VM-SS-20MSWL-RM",    material: 'SS', sizeCode: '20MSWL', connectionType: '', mountingCode: 'RM', configCode: '' },
  { partNumber: "2VM-SS-8-BV-A",       material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'BV',  configCode: 'A' },
  { partNumber: "2VM-SS-04-R",         material: 'SS', sizeCode: '04',  connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-SS-08-DMA",       material: 'SS', sizeCode: '08',  connectionType: '',   mountingCode: 'DMA', configCode: 'A' },
  { partNumber: "2VM-SS-8-R-V",        material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: 'V' },
  { partNumber: "2VM-SS-8-DM-A",       material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'DM',  configCode: 'A' },

  // ===== STAINLESS STEEL 316 — Size & config matrix =====
  { partNumber: "2VM-SS-4-R",          material: 'SS', sizeCode: '4',   connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-SS-4-T",          material: 'SS', sizeCode: '4',   connectionType: '',   mountingCode: 'T',   configCode: '' },
  { partNumber: "2VM-SS-4-H",          material: 'SS', sizeCode: '4',   connectionType: '',   mountingCode: 'H',   configCode: '' },
  { partNumber: "2VM-SS-4-DM",         material: 'SS', sizeCode: '4',   connectionType: '',   mountingCode: 'DM',  configCode: '' },
  { partNumber: "2VM-SS-4-BM",         material: 'SS', sizeCode: '4',   connectionType: '',   mountingCode: 'BM',  configCode: '' },
  { partNumber: "2VM-SS-4-R-V",        material: 'SS', sizeCode: '4',   connectionType: '',   mountingCode: 'R',   configCode: 'V' },
  { partNumber: "2VM-SS-4-R-A",        material: 'SS', sizeCode: '4',   connectionType: '',   mountingCode: 'R',   configCode: 'A' },
  { partNumber: "2VM-SS-8-BM",         material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'BM',  configCode: '' },
  { partNumber: "2VM-SS-8-BV",         material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'BV',  configCode: '' },
  { partNumber: "2VM-SS-8-T-V",        material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'T',   configCode: 'V' },
  { partNumber: "2VM-SS-8-H-A",        material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'H',   configCode: 'A' },
  { partNumber: "2VM-SS-8-MF-R",       material: 'SS', sizeCode: '8',   connectionType: 'MF', mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-SS-8-MM-R",       material: 'SS', sizeCode: '8',   connectionType: 'MM', mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-SS-8-FM-R",       material: 'SS', sizeCode: '8',   connectionType: 'FM', mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-SS-8-OD-R",       material: 'SS', sizeCode: '8',   connectionType: 'OD', mountingCode: 'R',   configCode: '' },

  // ===== STAINLESS STEEL — BSPT / BSPP / Metric =====
  { partNumber: "2VM-SS-4R-R",         material: 'SS', sizeCode: '4R',  connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-SS-8R-R",         material: 'SS', sizeCode: '8R',  connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-SS-8R-T",         material: 'SS', sizeCode: '8R',  connectionType: '',   mountingCode: 'T',   configCode: '' },
  { partNumber: "2VM-SS-8R-DM",        material: 'SS', sizeCode: '8R',  connectionType: '',   mountingCode: 'DM',  configCode: '' },
  { partNumber: "2VM-SS-4G-R",         material: 'SS', sizeCode: '4G',  connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-SS-8G-R",         material: 'SS', sizeCode: '8G',  connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-SS-8G-T",         material: 'SS', sizeCode: '8G',  connectionType: '',   mountingCode: 'T',   configCode: '' },
  { partNumber: "2VM-SS-8G-DM",        material: 'SS', sizeCode: '8G',  connectionType: '',   mountingCode: 'DM',  configCode: '' },
  { partNumber: "2VM-SS-8GSWL-R",      material: 'SS', sizeCode: '8GSWL', connectionType: '', mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-SS-20M-R",        material: 'SS', sizeCode: '20M', connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-SS-20M-T",        material: 'SS', sizeCode: '20M', connectionType: '',   mountingCode: 'T',   configCode: '' },
  { partNumber: "2VM-SS-20M-DM",       material: 'SS', sizeCode: '20M', connectionType: '',   mountingCode: 'DM',  configCode: '' },
  { partNumber: "2VM-SS-O8-R",         material: 'SS', sizeCode: 'O8',  connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-SS-O8-DM",        material: 'SS', sizeCode: 'O8',  connectionType: '',   mountingCode: 'DM',  configCode: '' },
  { partNumber: "2VM-SS-M12-R",        material: 'SS', sizeCode: 'M12', connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-SS-M12-DM",       material: 'SS', sizeCode: 'M12', connectionType: '',   mountingCode: 'DM',  configCode: '' },

  // ===== HIGH PRESSURE 10K =====
  { partNumber: "2VM-SS-4-R-10K",      material: 'SS', sizeCode: '4',   connectionType: '',   mountingCode: 'R',   configCode: '', pressureCode: '10K' },
  { partNumber: "2VM-SS-8-R-10K",      material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '', pressureCode: '10K' },
  { partNumber: "2VM-SS-8-T-10K",      material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'T',   configCode: '', pressureCode: '10K' },
  { partNumber: "2VM-SS-8-H-10K",      material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'H',   configCode: '', pressureCode: '10K' },
  { partNumber: "2VM-SS-8-DM-10K",     material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'DM',  configCode: '', pressureCode: '10K' },
  { partNumber: "2VM-SS-8R-R-10K",     material: 'SS', sizeCode: '8R',  connectionType: '',   mountingCode: 'R',   configCode: '', pressureCode: '10K' },
  { partNumber: "2VM-SS-8G-R-10K",     material: 'SS', sizeCode: '8G',  connectionType: '',   mountingCode: 'R',   configCode: '', pressureCode: '10K' },
  { partNumber: "2VM-SS-20M-R-10K",    material: 'SS', sizeCode: '20M', connectionType: '',   mountingCode: 'R',   configCode: '', pressureCode: '10K' },

  // ===== NACE Sour Gas =====
  { partNumber: "2VM-SS-4-R-SG",       material: 'SS', sizeCode: '4',   connectionType: '',   mountingCode: 'R',   configCode: '', optionalCodes: ['SG'] },
  { partNumber: "2VM-SS-8-R-SG",       material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '', optionalCodes: ['SG'] },
  { partNumber: "2VM-SS-8-T-SG",       material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'T',   configCode: '', optionalCodes: ['SG'] },
  { partNumber: "2VM-SS-8-DM-SG",      material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'DM',  configCode: '', optionalCodes: ['SG'] },
  { partNumber: "2VM-SS-8-R-SG-10K",   material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '', optionalCodes: ['SG'], pressureCode: '10K' },
  { partNumber: "2VM-SS-8R-R-SG",      material: 'SS', sizeCode: '8R',  connectionType: '',   mountingCode: 'R',   configCode: '', optionalCodes: ['SG'] },
  { partNumber: "2VM-SS-8G-R-SG",      material: 'SS', sizeCode: '8G',  connectionType: '',   mountingCode: 'R',   configCode: '', optionalCodes: ['SG'] },
  { partNumber: "2VM-SS-20M-R-SG",     material: 'SS', sizeCode: '20M', connectionType: '',   mountingCode: 'R',   configCode: '', optionalCodes: ['SG'] },

  // ===== Temperature Service =====
  { partNumber: "2VM-SS-8-R-HT",       material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '', optionalCodes: ['HT'] },
  { partNumber: "2VM-SS-8-T-HT",       material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'T',   configCode: '', optionalCodes: ['HT'] },
  { partNumber: "2VM-SS-8-DM-HT",      material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'DM',  configCode: '', optionalCodes: ['HT'] },
  { partNumber: "2VM-SS-8-R-XLT",      material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '', optionalCodes: ['XLT'] },
  { partNumber: "2VM-SS-8-DM-XLT",     material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'DM',  configCode: '', optionalCodes: ['XLT'] },

  // ===== Specialty options =====
  { partNumber: "2VM-SS-8-R-BT",       material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '', optionalCodes: ['BT'] },
  { partNumber: "2VM-SS-8-R-LB",       material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '', optionalCodes: ['LB'] },
  { partNumber: "2VM-SS-8-R-ATK",      material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '', optionalCodes: ['ATK'] },
  { partNumber: "2VM-SS-8-R-P",        material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '', optionalCodes: ['P'] },

  // ===== Mounting Brackets =====
  { partNumber: "2VM-SS-8-R-BKT",      material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '', mountingBracket: true },
  { partNumber: "2VM-SS-8-DM-BKT",     material: 'SS', sizeCode: '8',   connectionType: '',   mountingCode: 'DM',  configCode: '', mountingBracket: true },

  // ===== CARBON STEEL =====
  { partNumber: "2VM-CS-4-R",          material: 'CS', sizeCode: '4',   connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-CS-4-DM",         material: 'CS', sizeCode: '4',   connectionType: '',   mountingCode: 'DM',  configCode: '' },
  { partNumber: "2VM-CS-4R-R",         material: 'CS', sizeCode: '4R',  connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-CS-8R-R",         material: 'CS', sizeCode: '8R',  connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-CS-8G-R",         material: 'CS', sizeCode: '8G',  connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-CS-8G-DM",        material: 'CS', sizeCode: '8G',  connectionType: '',   mountingCode: 'DM',  configCode: '' },
  { partNumber: "2VM-CS-20M-R",        material: 'CS', sizeCode: '20M', connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-CS-O8-R",         material: 'CS', sizeCode: 'O8',  connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-CS-8-BM",         material: 'CS', sizeCode: '8',   connectionType: '',   mountingCode: 'BM',  configCode: '' },
  { partNumber: "2VM-CS-8-BV",         material: 'CS', sizeCode: '8',   connectionType: '',   mountingCode: 'BV',  configCode: '' },
  { partNumber: "2VM-CS-8-R-V",        material: 'CS', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: 'V' },
  { partNumber: "2VM-CS-8-MF-R",       material: 'CS', sizeCode: '8',   connectionType: 'MF', mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-CS-8-MM-R",       material: 'CS', sizeCode: '8',   connectionType: 'MM', mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-CS-8-R-10K",      material: 'CS', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '', pressureCode: '10K' },
  { partNumber: "2VM-CS-8-T-10K",      material: 'CS', sizeCode: '8',   connectionType: '',   mountingCode: 'T',   configCode: '', pressureCode: '10K' },

  // ===== MONEL 400 =====
  { partNumber: "2VM-MO-4-R",          material: 'MO', sizeCode: '4',   connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-MO-8-R",          material: 'MO', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-MO-8-T",          material: 'MO', sizeCode: '8',   connectionType: '',   mountingCode: 'T',   configCode: '' },
  { partNumber: "2VM-MO-8-H",          material: 'MO', sizeCode: '8',   connectionType: '',   mountingCode: 'H',   configCode: '' },
  { partNumber: "2VM-MO-8-DM",         material: 'MO', sizeCode: '8',   connectionType: '',   mountingCode: 'DM',  configCode: '' },
  { partNumber: "2VM-MO-8-RM",         material: 'MO', sizeCode: '8',   connectionType: '',   mountingCode: 'RM',  configCode: '' },
  { partNumber: "2VM-MO-8R-R",         material: 'MO', sizeCode: '8R',  connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-MO-8G-R",         material: 'MO', sizeCode: '8G',  connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-MO-20M-R",        material: 'MO', sizeCode: '20M', connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-MO-8-R-SG",       material: 'MO', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '', optionalCodes: ['SG'] },
  { partNumber: "2VM-MO-8-R-10K",      material: 'MO', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '', pressureCode: '10K' },

  // ===== HASTELLOY C-276 =====
  { partNumber: "2VM-HC-4-R",          material: 'HC', sizeCode: '4',   connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-HC-8-R",          material: 'HC', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-HC-8-T",          material: 'HC', sizeCode: '8',   connectionType: '',   mountingCode: 'T',   configCode: '' },
  { partNumber: "2VM-HC-8-H",          material: 'HC', sizeCode: '8',   connectionType: '',   mountingCode: 'H',   configCode: '' },
  { partNumber: "2VM-HC-8-DM",         material: 'HC', sizeCode: '8',   connectionType: '',   mountingCode: 'DM',  configCode: '' },
  { partNumber: "2VM-HC-8-RM",         material: 'HC', sizeCode: '8',   connectionType: '',   mountingCode: 'RM',  configCode: '' },
  { partNumber: "2VM-HC-8R-R",         material: 'HC', sizeCode: '8R',  connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-HC-8G-R",         material: 'HC', sizeCode: '8G',  connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-HC-20M-R",        material: 'HC', sizeCode: '20M', connectionType: '',   mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-HC-8-R-SG",       material: 'HC', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '', optionalCodes: ['SG'] },
  { partNumber: "2VM-HC-8-R-10K",      material: 'HC', sizeCode: '8',   connectionType: '',   mountingCode: 'R',   configCode: '', pressureCode: '10K' },

  // ===== DUPLEX S32205 =====
  { partNumber: "2VM-DSS-4-R",         material: 'DSS', sizeCode: '4',   connectionType: '',  mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-DSS-8-R",         material: 'DSS', sizeCode: '8',   connectionType: '',  mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-DSS-8-T",         material: 'DSS', sizeCode: '8',   connectionType: '',  mountingCode: 'T',   configCode: '' },
  { partNumber: "2VM-DSS-8-DM",        material: 'DSS', sizeCode: '8',   connectionType: '',  mountingCode: 'DM',  configCode: '' },
  { partNumber: "2VM-DSS-8R-R",        material: 'DSS', sizeCode: '8R',  connectionType: '',  mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-DSS-8G-R",        material: 'DSS', sizeCode: '8G',  connectionType: '',  mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-DSS-20M-R",       material: 'DSS', sizeCode: '20M', connectionType: '',  mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-DSS-8-R-SG",      material: 'DSS', sizeCode: '8',   connectionType: '',  mountingCode: 'R',   configCode: '', optionalCodes: ['SG'] },
  { partNumber: "2VM-DSS-8-R-10K",     material: 'DSS', sizeCode: '8',   connectionType: '',  mountingCode: 'R',   configCode: '', pressureCode: '10K' },

  // ===== SUPER DUPLEX S32750 =====
  { partNumber: "2VM-SDSS-8-R",        material: 'SDSS', sizeCode: '8',  connectionType: '',  mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-SDSS-8-T",        material: 'SDSS', sizeCode: '8',  connectionType: '',  mountingCode: 'T',   configCode: '' },
  { partNumber: "2VM-SDSS-8-DM",       material: 'SDSS', sizeCode: '8',  connectionType: '',  mountingCode: 'DM',  configCode: '' },
  { partNumber: "2VM-SDSS-8R-R",       material: 'SDSS', sizeCode: '8R', connectionType: '',  mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-SDSS-20M-R",      material: 'SDSS', sizeCode: '20M',connectionType: '',  mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-SDSS-8-R-SG",     material: 'SDSS', sizeCode: '8',  connectionType: '',  mountingCode: 'R',   configCode: '', optionalCodes: ['SG'] },
  { partNumber: "2VM-SDSS-8-R-10K",    material: 'SDSS', sizeCode: '8',  connectionType: '',  mountingCode: 'R',   configCode: '', pressureCode: '10K' },

  // ===== 6MO =====
  { partNumber: "2VM-6MO-8-R",         material: '6MO', sizeCode: '8',   connectionType: '',  mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-6MO-8-T",         material: '6MO', sizeCode: '8',   connectionType: '',  mountingCode: 'T',   configCode: '' },
  { partNumber: "2VM-6MO-8-DM",        material: '6MO', sizeCode: '8',   connectionType: '',  mountingCode: 'DM',  configCode: '' },
  { partNumber: "2VM-6MO-8R-R",        material: '6MO', sizeCode: '8R',  connectionType: '',  mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-6MO-20M-R",       material: '6MO', sizeCode: '20M', connectionType: '',  mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-6MO-8-R-SG",      material: '6MO', sizeCode: '8',   connectionType: '',  mountingCode: 'R',   configCode: '', optionalCodes: ['SG'] },

  // ===== INCONEL 625 =====
  { partNumber: "2VM-INC625-4-R",      material: 'INC625', sizeCode: '4',   connectionType: '', mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-INC625-8-R",      material: 'INC625', sizeCode: '8',   connectionType: '', mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-INC625-8-T",      material: 'INC625', sizeCode: '8',   connectionType: '', mountingCode: 'T',   configCode: '' },
  { partNumber: "2VM-INC625-8-DM",     material: 'INC625', sizeCode: '8',   connectionType: '', mountingCode: 'DM',  configCode: '' },
  { partNumber: "2VM-INC625-8R-R",     material: 'INC625', sizeCode: '8R',  connectionType: '', mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-INC625-8G-R",     material: 'INC625', sizeCode: '8G',  connectionType: '', mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-INC625-20M-R",    material: 'INC625', sizeCode: '20M', connectionType: '', mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-INC625-8-R-SG",   material: 'INC625', sizeCode: '8',   connectionType: '', mountingCode: 'R',   configCode: '', optionalCodes: ['SG'] },
  { partNumber: "2VM-INC625-8-R-10K",  material: 'INC625', sizeCode: '8',   connectionType: '', mountingCode: 'R',   configCode: '', pressureCode: '10K' },

  // ===== INCONEL 825 =====
  { partNumber: "2VM-INC825-4-R",      material: 'INC825', sizeCode: '4',   connectionType: '', mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-INC825-8-R",      material: 'INC825', sizeCode: '8',   connectionType: '', mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-INC825-8-T",      material: 'INC825', sizeCode: '8',   connectionType: '', mountingCode: 'T',   configCode: '' },
  { partNumber: "2VM-INC825-8-DM",     material: 'INC825', sizeCode: '8',   connectionType: '', mountingCode: 'DM',  configCode: '' },
  { partNumber: "2VM-INC825-8R-R",     material: 'INC825', sizeCode: '8R',  connectionType: '', mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-INC825-20M-R",    material: 'INC825', sizeCode: '20M', connectionType: '', mountingCode: 'R',   configCode: '' },
  { partNumber: "2VM-INC825-8-R-SG",   material: 'INC825', sizeCode: '8',   connectionType: '', mountingCode: 'R',   configCode: '', optionalCodes: ['SG'] },
  { partNumber: "2VM-INC825-8-R-10K",  material: 'INC825', sizeCode: '8',   connectionType: '', mountingCode: 'R',   configCode: '', pressureCode: '10K' },
]

// ============ DECODER: transforms RawManifold[] into ManifoldDTO[] ============
export const MANIFOLDS_DATA: ManifoldDTO[] = RAW_DATA.map(raw => {
  const connectionSize = SIZE_CODE_MAP[raw.sizeCode] ?? raw.sizeCode
  const connectionType = CONNECTION_TYPE_MAP[raw.connectionType] ?? 'Female'
  const mounting = MOUNTING_MAP[raw.mountingCode] ?? 'Pipe-to-Pipe'
  const configuration = CONFIG_MAP[raw.configCode] ?? 'Type L'
  const maxPressure: '6000 psi' | '10000 psi' = raw.pressureCode === '10K' ? '10000 psi' : '6000 psi'

  const specialService: string[] = []
  if (raw.optionalCodes) {
    raw.optionalCodes.forEach(c => {
      const label = OPTIONAL_MAP[c]
      if (label) specialService.push(label)
    })
  }
  if (raw.mountingBracket) specialService.push('Mounting Brackets')
  if (raw.ventCode) specialService.push(`Vent Hole ${raw.ventCode}`)

  const materialLabel = MATERIAL_FULL[raw.material] ?? raw.material

  const description = `Panam 2-Valve Manifold, ${materialLabel}, ${connectionSize} ${connectionType}, ${mounting}, ${configuration}, ${maxPressure} max${specialService.length ? `, ${specialService.join(', ')}` : ''}.`

  return {
    id: raw.partNumber,
    partNumber: raw.partNumber,
    description,
    valveCount: 2 as const,
    material: raw.material,
    connectionSize,
    connectionType,
    mounting,
    configuration,
    maxPressure,
    specialService,
    imageUrl: MANIFOLD_IMAGE,
  }
})