import { type Manifold3VMDTO } from "./types"

const MANIFOLD_3VM_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/3VM/3VM_Cover.jpg"

const SIZE_CODE_MAP: Record<string, string> = {
  '4':       '1/4" NPT',
  '8':       '1/2" NPT',
  '04':      '1/4" NPT',
  '08':      '1/2" NPT',
  '4R':      '1/4" BSPT',
  '8R':      '1/2" BSPT',
  '4G':      '1/4" BSPP',
  '8G':      '1/2" BSPP',
  '8GSWL':   '1/2" BSPP w/ Swivel Nut',
  '4GSWL':   '1/4" BSPP w/ Swivel Nut',
  '20M':     'M20x1.5',
  '20MM':    'M20x1.5 / Flange',
  '20MSWL':  'M20x1.5 w/ Swivel Nut',
  'O8':      '1/2" Tube Fitting',
  'M12':     '12mm Tube Fitting',
}

const CONNECTION_TYPE_MAP: Record<string, Manifold3VMDTO['connectionType']> = {
  '':   'Female',
  'MM': 'Male',
  'MF': 'Male/Female',
  'FM': 'Female/Male',
  'FF': 'Female',
  'OD': 'Tube Fitting',
}

const MOUNTING_MAP: Record<string, Manifold3VMDTO['mounting']> = {
  'R':  'Pipe-to-Pipe',
  'T':  'Pipe-to-Flange',
  'H':  'Flange-to-Flange',
  'DM': 'Direct Mount',
  'RM': 'Pipe-to-Pipe',
  'DMA':'Direct Mount',
}

const DRAIN_CODE_MAP: Record<string, string> = {
  '':     '1/4" NPT (Standard)',
  'V8':   '1/2" NPT',
  'V4G':  '1/4" BSPP',
  'V8G':  '1/2" BSPP',
  'V2':   '1/8" NPT',
  'V2G':  '1/8" BSPP',
  'V20M': 'M20x1.5',
}

const OPTIONAL_MAP: Record<string, string> = {
  'P':    'Vent with Plug',
  'SG':   'NACE Sour Gas (MR-01-75)',
  'HT':   'Grafoil High Temp',
  'XLT':  'Low Temperature',
  'BV':   'Vent with Bleed Valves',
  'BT':   'Ball Tip',
  'ATK':  'Anti-Tamper Key',
  'LB':   'Large Bore',
}

type RawManifold = {
  partNumber: string
  sizeCode: string
  connectionType: keyof typeof CONNECTION_TYPE_MAP
  mountingCode: keyof typeof MOUNTING_MAP
  drainCode?: keyof typeof DRAIN_CODE_MAP
  optionalCodes?: string[]
  pressureCode?: '10K'
  largeBore?: boolean
  mountingBracket?: boolean
}

const RAW_DATA: RawManifold[] = [
  // ===== USER-PROVIDED SKUs =====
  { partNumber: "3VM-SS-8-R",          sizeCode: '8',   connectionType: '',   mountingCode: 'R'  },
  { partNumber: "3VM-SS-8-T",          sizeCode: '8',   connectionType: '',   mountingCode: 'T'  },
  { partNumber: "3VM-SS-8-DM",         sizeCode: '8',   connectionType: '',   mountingCode: 'DM' },
  { partNumber: "3VM-LB-SS-8-H-SG",    sizeCode: '8',   connectionType: '',   mountingCode: 'H',  optionalCodes: ['SG'], largeBore: true },
  { partNumber: "3VM-SS-08-MF-RM",     sizeCode: '08',  connectionType: 'MF', mountingCode: 'RM' },
  { partNumber: "3VM-SS-08-MM-RM",     sizeCode: '08',  connectionType: 'MM', mountingCode: 'RM' },
  { partNumber: "3VM-SS-08-FF-RM",     sizeCode: '08',  connectionType: 'FF', mountingCode: 'RM' },
  { partNumber: "3VM-SS-8-DM-A",       sizeCode: '8',   connectionType: '',   mountingCode: 'DM' },
  { partNumber: "3VM-SS-20MM-DM-A",    sizeCode: '20MM', connectionType: '',  mountingCode: 'DM' },
  { partNumber: "3VM-SS-8-DM-A-BV",    sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['BV'] },

  // ===== 1/4" NPT — Mounting / Type matrix =====
  { partNumber: "3VM-SS-4-R",          sizeCode: '4',   connectionType: '',   mountingCode: 'R'  },
  { partNumber: "3VM-SS-4-T",          sizeCode: '4',   connectionType: '',   mountingCode: 'T'  },
  { partNumber: "3VM-SS-4-H",          sizeCode: '4',   connectionType: '',   mountingCode: 'H'  },
  { partNumber: "3VM-SS-4-DM",         sizeCode: '4',   connectionType: '',   mountingCode: 'DM' },
  { partNumber: "3VM-SS-4-MF-R",       sizeCode: '4',   connectionType: 'MF', mountingCode: 'R'  },
  { partNumber: "3VM-SS-4-MM-R",       sizeCode: '4',   connectionType: 'MM', mountingCode: 'R'  },
  { partNumber: "3VM-SS-4-FM-R",       sizeCode: '4',   connectionType: 'FM', mountingCode: 'R'  },
  { partNumber: "3VM-SS-4-MF-DM",      sizeCode: '4',   connectionType: 'MF', mountingCode: 'DM' },
  { partNumber: "3VM-SS-4-MM-DM",      sizeCode: '4',   connectionType: 'MM', mountingCode: 'DM' },
  { partNumber: "3VM-SS-4-MF-T",       sizeCode: '4',   connectionType: 'MF', mountingCode: 'T'  },
  { partNumber: "3VM-SS-4-OD-R",       sizeCode: '4',   connectionType: 'OD', mountingCode: 'R'  },

  // ===== 1/2" NPT — Full mounting / type matrix =====
  { partNumber: "3VM-SS-8-H",          sizeCode: '8',   connectionType: '',   mountingCode: 'H'  },
  { partNumber: "3VM-SS-8-RM",         sizeCode: '8',   connectionType: '',   mountingCode: 'RM' },
  { partNumber: "3VM-SS-8-MF-R",       sizeCode: '8',   connectionType: 'MF', mountingCode: 'R'  },
  { partNumber: "3VM-SS-8-MM-R",       sizeCode: '8',   connectionType: 'MM', mountingCode: 'R'  },
  { partNumber: "3VM-SS-8-FM-R",       sizeCode: '8',   connectionType: 'FM', mountingCode: 'R'  },
  { partNumber: "3VM-SS-8-MF-T",       sizeCode: '8',   connectionType: 'MF', mountingCode: 'T'  },
  { partNumber: "3VM-SS-8-MF-DM",      sizeCode: '8',   connectionType: 'MF', mountingCode: 'DM' },
  { partNumber: "3VM-SS-8-MM-DM",      sizeCode: '8',   connectionType: 'MM', mountingCode: 'DM' },
  { partNumber: "3VM-SS-8-FM-DM",      sizeCode: '8',   connectionType: 'FM', mountingCode: 'DM' },
  { partNumber: "3VM-SS-8-OD-R",       sizeCode: '8',   connectionType: 'OD', mountingCode: 'R'  },
  { partNumber: "3VM-SS-8-OD-DM",      sizeCode: '8',   connectionType: 'OD', mountingCode: 'DM' },
  { partNumber: "3VM-SS-8-FF-R",       sizeCode: '8',   connectionType: 'FF', mountingCode: 'R'  },
  { partNumber: "3VM-SS-8-FF-DM",      sizeCode: '8',   connectionType: 'FF', mountingCode: 'DM' },

  // ===== BSPT — 1/4" + 1/2" =====
  { partNumber: "3VM-SS-4R-R",         sizeCode: '4R',  connectionType: '',   mountingCode: 'R'  },
  { partNumber: "3VM-SS-4R-T",         sizeCode: '4R',  connectionType: '',   mountingCode: 'T'  },
  { partNumber: "3VM-SS-4R-DM",        sizeCode: '4R',  connectionType: '',   mountingCode: 'DM' },
  { partNumber: "3VM-SS-8R-R",         sizeCode: '8R',  connectionType: '',   mountingCode: 'R'  },
  { partNumber: "3VM-SS-8R-T",         sizeCode: '8R',  connectionType: '',   mountingCode: 'T'  },
  { partNumber: "3VM-SS-8R-H",         sizeCode: '8R',  connectionType: '',   mountingCode: 'H'  },
  { partNumber: "3VM-SS-8R-DM",        sizeCode: '8R',  connectionType: '',   mountingCode: 'DM' },
  { partNumber: "3VM-SS-8R-MF-R",      sizeCode: '8R',  connectionType: 'MF', mountingCode: 'R'  },
  { partNumber: "3VM-SS-8R-MM-R",      sizeCode: '8R',  connectionType: 'MM', mountingCode: 'R'  },
  { partNumber: "3VM-SS-8R-MF-DM",     sizeCode: '8R',  connectionType: 'MF', mountingCode: 'DM' },

  // ===== BSPP — 1/4" + 1/2" + Swivel =====
  { partNumber: "3VM-SS-4G-R",         sizeCode: '4G',  connectionType: '',   mountingCode: 'R'  },
  { partNumber: "3VM-SS-4G-T",         sizeCode: '4G',  connectionType: '',   mountingCode: 'T'  },
  { partNumber: "3VM-SS-4G-DM",        sizeCode: '4G',  connectionType: '',   mountingCode: 'DM' },
  { partNumber: "3VM-SS-8G-R",         sizeCode: '8G',  connectionType: '',   mountingCode: 'R'  },
  { partNumber: "3VM-SS-8G-T",         sizeCode: '8G',  connectionType: '',   mountingCode: 'T'  },
  { partNumber: "3VM-SS-8G-H",         sizeCode: '8G',  connectionType: '',   mountingCode: 'H'  },
  { partNumber: "3VM-SS-8G-DM",        sizeCode: '8G',  connectionType: '',   mountingCode: 'DM' },
  { partNumber: "3VM-SS-8G-MF-R",      sizeCode: '8G',  connectionType: 'MF', mountingCode: 'R'  },
  { partNumber: "3VM-SS-8G-MM-R",      sizeCode: '8G',  connectionType: 'MM', mountingCode: 'R'  },
  { partNumber: "3VM-SS-8G-FF-R",      sizeCode: '8G',  connectionType: 'FF', mountingCode: 'R'  },
  { partNumber: "3VM-SS-8GSWL-R",      sizeCode: '8GSWL', connectionType: '', mountingCode: 'R'  },
  { partNumber: "3VM-SS-8GSWL-T",      sizeCode: '8GSWL', connectionType: '', mountingCode: 'T'  },
  { partNumber: "3VM-SS-8GSWL-DM",     sizeCode: '8GSWL', connectionType: '', mountingCode: 'DM' },
  { partNumber: "3VM-SS-4GSWL-R",      sizeCode: '4GSWL', connectionType: '', mountingCode: 'R'  },

  // ===== M20x1.5 + Flange variant =====
  { partNumber: "3VM-SS-20M-R",        sizeCode: '20M', connectionType: '',   mountingCode: 'R'  },
  { partNumber: "3VM-SS-20M-T",        sizeCode: '20M', connectionType: '',   mountingCode: 'T'  },
  { partNumber: "3VM-SS-20M-H",        sizeCode: '20M', connectionType: '',   mountingCode: 'H'  },
  { partNumber: "3VM-SS-20M-DM",       sizeCode: '20M', connectionType: '',   mountingCode: 'DM' },
  { partNumber: "3VM-SS-20M-MF-RM",    sizeCode: '20M', connectionType: 'MF', mountingCode: 'RM' },
  { partNumber: "3VM-SS-20M-MM-RM",    sizeCode: '20M', connectionType: 'MM', mountingCode: 'RM' },
  { partNumber: "3VM-SS-20M-FF-RM",    sizeCode: '20M', connectionType: 'FF', mountingCode: 'RM' },
  { partNumber: "3VM-SS-20MM-R",       sizeCode: '20MM', connectionType: '',  mountingCode: 'R'  },
  { partNumber: "3VM-SS-20MM-T",       sizeCode: '20MM', connectionType: '',  mountingCode: 'T'  },
  { partNumber: "3VM-SS-20MM-H",       sizeCode: '20MM', connectionType: '',  mountingCode: 'H'  },
  { partNumber: "3VM-SS-20MM-DM",      sizeCode: '20MM', connectionType: '',  mountingCode: 'DM' },
  { partNumber: "3VM-SS-20MSWL-R",     sizeCode: '20MSWL', connectionType: '', mountingCode: 'R' },
  { partNumber: "3VM-SS-20MSWL-RM",    sizeCode: '20MSWL', connectionType: '', mountingCode: 'RM' },
  { partNumber: "3VM-SS-20MSWL-DM",    sizeCode: '20MSWL', connectionType: '', mountingCode: 'DM' },

  // ===== Tube fittings — 12mm + 1/2" =====
  { partNumber: "3VM-SS-M12-R",        sizeCode: 'M12', connectionType: '',   mountingCode: 'R'  },
  { partNumber: "3VM-SS-M12-T",        sizeCode: 'M12', connectionType: '',   mountingCode: 'T'  },
  { partNumber: "3VM-SS-M12-DM",       sizeCode: 'M12', connectionType: '',   mountingCode: 'DM' },
  { partNumber: "3VM-SS-O8-R",         sizeCode: 'O8',  connectionType: '',   mountingCode: 'R'  },
  { partNumber: "3VM-SS-O8-T",         sizeCode: 'O8',  connectionType: '',   mountingCode: 'T'  },
  { partNumber: "3VM-SS-O8-DM",        sizeCode: 'O8',  connectionType: '',   mountingCode: 'DM' },

  // ===== HIGH PRESSURE 10K =====
  { partNumber: "3VM-SS-4-R-10K",      sizeCode: '4',   connectionType: '',   mountingCode: 'R',  pressureCode: '10K' },
  { partNumber: "3VM-SS-8-R-10K",      sizeCode: '8',   connectionType: '',   mountingCode: 'R',  pressureCode: '10K' },
  { partNumber: "3VM-SS-8-T-10K",      sizeCode: '8',   connectionType: '',   mountingCode: 'T',  pressureCode: '10K' },
  { partNumber: "3VM-SS-8-H-10K",      sizeCode: '8',   connectionType: '',   mountingCode: 'H',  pressureCode: '10K' },
  { partNumber: "3VM-SS-8-DM-10K",     sizeCode: '8',   connectionType: '',   mountingCode: 'DM', pressureCode: '10K' },
  { partNumber: "3VM-SS-8R-R-10K",     sizeCode: '8R',  connectionType: '',   mountingCode: 'R',  pressureCode: '10K' },
  { partNumber: "3VM-SS-8G-R-10K",     sizeCode: '8G',  connectionType: '',   mountingCode: 'R',  pressureCode: '10K' },
  { partNumber: "3VM-SS-20M-R-10K",    sizeCode: '20M', connectionType: '',   mountingCode: 'R',  pressureCode: '10K' },
  { partNumber: "3VM-SS-20MM-DM-10K",  sizeCode: '20MM',connectionType: '',   mountingCode: 'DM', pressureCode: '10K' },

  // ===== NACE Sour Gas =====
  { partNumber: "3VM-SS-4-R-SG",       sizeCode: '4',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['SG'] },
  { partNumber: "3VM-SS-8-R-SG",       sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['SG'] },
  { partNumber: "3VM-SS-8-T-SG",       sizeCode: '8',   connectionType: '',   mountingCode: 'T',  optionalCodes: ['SG'] },
  { partNumber: "3VM-SS-8-H-SG",       sizeCode: '8',   connectionType: '',   mountingCode: 'H',  optionalCodes: ['SG'] },
  { partNumber: "3VM-SS-8-DM-SG",      sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['SG'] },
  { partNumber: "3VM-SS-8-R-SG-10K",   sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['SG'], pressureCode: '10K' },
  { partNumber: "3VM-SS-8-DM-SG-10K",  sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['SG'], pressureCode: '10K' },
  { partNumber: "3VM-SS-8R-R-SG",      sizeCode: '8R',  connectionType: '',   mountingCode: 'R',  optionalCodes: ['SG'] },
  { partNumber: "3VM-SS-8G-R-SG",      sizeCode: '8G',  connectionType: '',   mountingCode: 'R',  optionalCodes: ['SG'] },
  { partNumber: "3VM-SS-20M-R-SG",     sizeCode: '20M', connectionType: '',   mountingCode: 'R',  optionalCodes: ['SG'] },
  { partNumber: "3VM-SS-20MM-DM-SG",   sizeCode: '20MM',connectionType: '',   mountingCode: 'DM', optionalCodes: ['SG'] },

  // ===== Bleed Valve (BV) option =====
  { partNumber: "3VM-SS-8-R-BV",       sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['BV'] },
  { partNumber: "3VM-SS-8-T-BV",       sizeCode: '8',   connectionType: '',   mountingCode: 'T',  optionalCodes: ['BV'] },
  { partNumber: "3VM-SS-8-H-BV",       sizeCode: '8',   connectionType: '',   mountingCode: 'H',  optionalCodes: ['BV'] },
  { partNumber: "3VM-SS-8-DM-BV",      sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['BV'] },
  { partNumber: "3VM-SS-20M-DM-BV",    sizeCode: '20M', connectionType: '',   mountingCode: 'DM', optionalCodes: ['BV'] },
  { partNumber: "3VM-SS-20MM-DM-BV",   sizeCode: '20MM',connectionType: '',   mountingCode: 'DM', optionalCodes: ['BV'] },
  { partNumber: "3VM-SS-8-DM-BV-SG",   sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['BV', 'SG'] },
  { partNumber: "3VM-SS-8-R-BV-10K",   sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['BV'], pressureCode: '10K' },

  // ===== Temperature Service =====
  { partNumber: "3VM-SS-8-R-HT",       sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['HT'] },
  { partNumber: "3VM-SS-8-T-HT",       sizeCode: '8',   connectionType: '',   mountingCode: 'T',  optionalCodes: ['HT'] },
  { partNumber: "3VM-SS-8-H-HT",       sizeCode: '8',   connectionType: '',   mountingCode: 'H',  optionalCodes: ['HT'] },
  { partNumber: "3VM-SS-8-DM-HT",      sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['HT'] },
  { partNumber: "3VM-SS-8-R-XLT",      sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['XLT'] },
  { partNumber: "3VM-SS-8-DM-XLT",     sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['XLT'] },
  { partNumber: "3VM-SS-8-R-HT-SG",    sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['HT', 'SG'] },
  { partNumber: "3VM-SS-8-R-XLT-SG",   sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['XLT', 'SG'] },

  // ===== Specialty options =====
  { partNumber: "3VM-SS-8-R-BT",       sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['BT'] },
  { partNumber: "3VM-SS-8-DM-BT",      sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['BT'] },
  { partNumber: "3VM-SS-8-R-ATK",      sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['ATK'] },
  { partNumber: "3VM-SS-8-R-P",        sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['P'] },
  { partNumber: "3VM-SS-8-T-P",        sizeCode: '8',   connectionType: '',   mountingCode: 'T',  optionalCodes: ['P'] },

  // ===== Large Bore (LB) variants =====
  { partNumber: "3VM-LB-SS-8-R",       sizeCode: '8',   connectionType: '',   mountingCode: 'R',  largeBore: true },
  { partNumber: "3VM-LB-SS-8-T",       sizeCode: '8',   connectionType: '',   mountingCode: 'T',  largeBore: true },
  { partNumber: "3VM-LB-SS-8-H",       sizeCode: '8',   connectionType: '',   mountingCode: 'H',  largeBore: true },
  { partNumber: "3VM-LB-SS-8-DM",      sizeCode: '8',   connectionType: '',   mountingCode: 'DM', largeBore: true },
  { partNumber: "3VM-LB-SS-8R-R",      sizeCode: '8R',  connectionType: '',   mountingCode: 'R',  largeBore: true },
  { partNumber: "3VM-LB-SS-8G-R",      sizeCode: '8G',  connectionType: '',   mountingCode: 'R',  largeBore: true },
  { partNumber: "3VM-LB-SS-20M-R",     sizeCode: '20M', connectionType: '',   mountingCode: 'R',  largeBore: true },
  { partNumber: "3VM-LB-SS-20MM-DM",   sizeCode: '20MM',connectionType: '',   mountingCode: 'DM', largeBore: true },
  { partNumber: "3VM-LB-SS-8-DM-SG",   sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['SG'], largeBore: true },
  { partNumber: "3VM-LB-SS-8-R-10K",   sizeCode: '8',   connectionType: '',   mountingCode: 'R',  pressureCode: '10K', largeBore: true },
  { partNumber: "3VM-LB-SS-8-R-BV",    sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['BV'], largeBore: true },

  // ===== Drain Hole variants =====
  { partNumber: "3VM-SS-8-R-V8",       sizeCode: '8',   connectionType: '',   mountingCode: 'R',  drainCode: 'V8' },
  { partNumber: "3VM-SS-8-DM-V8",      sizeCode: '8',   connectionType: '',   mountingCode: 'DM', drainCode: 'V8' },
  { partNumber: "3VM-SS-8-R-V8G",      sizeCode: '8',   connectionType: '',   mountingCode: 'R',  drainCode: 'V8G' },
  { partNumber: "3VM-SS-8-R-V4G",      sizeCode: '8',   connectionType: '',   mountingCode: 'R',  drainCode: 'V4G' },
  { partNumber: "3VM-SS-8-R-V2",       sizeCode: '8',   connectionType: '',   mountingCode: 'R',  drainCode: 'V2' },
  { partNumber: "3VM-SS-8-R-V2G",      sizeCode: '8',   connectionType: '',   mountingCode: 'R',  drainCode: 'V2G' },
  { partNumber: "3VM-SS-8-R-V20M",     sizeCode: '8',   connectionType: '',   mountingCode: 'R',  drainCode: 'V20M' },
  { partNumber: "3VM-SS-8-DM-V8G",     sizeCode: '8',   connectionType: '',   mountingCode: 'DM', drainCode: 'V8G' },

  // ===== Mounting Brackets =====
  { partNumber: "3VM-SS-8-R-BKT",      sizeCode: '8',   connectionType: '',   mountingCode: 'R',  mountingBracket: true },
  { partNumber: "3VM-SS-8-DM-BKT",     sizeCode: '8',   connectionType: '',   mountingCode: 'DM', mountingBracket: true },
  { partNumber: "3VM-SS-8-T-BKT",      sizeCode: '8',   connectionType: '',   mountingCode: 'T',  mountingBracket: true },
  { partNumber: "3VM-SS-20M-DM-BKT",   sizeCode: '20M', connectionType: '',   mountingCode: 'DM', mountingBracket: true },
  { partNumber: "3VM-SS-20MM-DM-BKT",  sizeCode: '20MM',connectionType: '',   mountingCode: 'DM', mountingBracket: true },

  // ===== Mixed pressure/feature combos =====
  { partNumber: "3VM-SS-8-T-SG-10K",   sizeCode: '8',   connectionType: '',   mountingCode: 'T',  optionalCodes: ['SG'], pressureCode: '10K' },
  { partNumber: "3VM-SS-8-H-SG-10K",   sizeCode: '8',   connectionType: '',   mountingCode: 'H',  optionalCodes: ['SG'], pressureCode: '10K' },
  { partNumber: "3VM-SS-20MM-DM-SG-10K", sizeCode: '20MM', connectionType: '', mountingCode: 'DM', optionalCodes: ['SG'], pressureCode: '10K' },
  { partNumber: "3VM-SS-8-DM-A-BV-SG", sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['BV', 'SG'] },
]

// ============ DECODER ============
export const MANIFOLDS_3VM_DATA: Manifold3VMDTO[] = RAW_DATA.map(raw => {
  const connectionSize = SIZE_CODE_MAP[raw.sizeCode] ?? raw.sizeCode
  const connectionType = CONNECTION_TYPE_MAP[raw.connectionType] ?? 'Female'
  const mounting = MOUNTING_MAP[raw.mountingCode] ?? 'Pipe-to-Pipe'
  const drainHoleSize = DRAIN_CODE_MAP[raw.drainCode ?? ''] ?? '1/4" NPT (Standard)'
  const maxPressure: '6000 psi' | '10000 psi' = raw.pressureCode === '10K' ? '10000 psi' : '6000 psi'

  const specialService: string[] = []
  if (raw.optionalCodes) {
    raw.optionalCodes.forEach(c => {
      const label = OPTIONAL_MAP[c]
      if (label) specialService.push(label)
    })
  }
  if (raw.largeBore) specialService.push('Large Bore')
  if (raw.mountingBracket) specialService.push('Mounting Brackets')

  const description = `Panam 3-Valve Manifold (Type A Angular), Stainless Steel 316, ${connectionSize} ${connectionType}, ${mounting}, ${maxPressure} max${specialService.length ? `, ${specialService.join(', ')}` : ''}.`

  return {
    id: raw.partNumber,
    partNumber: raw.partNumber,
    description,
    valveCount: 3 as const,
    connectionSize,
    connectionType,
    mounting,
    drainHoleSize,
    maxPressure,
    specialService,
    imageUrl: MANIFOLD_3VM_IMAGE,
  }
})