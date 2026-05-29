import { type Manifold5VMDTO } from "./types"

const MANIFOLD_5VM_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/5VM/5VM_Cover.jpg"

// ============ LOOKUP MAPS ============

const SIZE_CODE_MAP: Record<string, string> = {
  '4':       '1/4" NPT',
  '8':       '1/2" NPT',
  '4R':      '1/4" BSPT',
  '8R':      '1/2" BSPT',
  '4G':      '1/4" BSPP',
  '8G':      '1/2" BSPP',
  '4GSWL':   '1/4" BSPP w/ Swivel Nut',
  '8GSWL':   '1/2" BSPP w/ Swivel Nut',
  '20M':     'M20x1.5',
  '20MSWL':  'M20x1.5 w/ Swivel Nut',
  '20MM':    'M20x1.5 / Flange',
  'O8':      '1/2" Tube Fitting',
  'M12':     '12mm Tube Fitting',
}

const CONNECTION_TYPE_MAP: Record<string, Manifold5VMDTO['connectionType']> = {
  '':   'Female',
  'MM': 'Male',
  'MF': 'Male/Female',
  'FM': 'Female/Male',
  'FF': 'Female',
  'OD': 'Tube Fitting',
}

const MOUNTING_MAP: Record<string, Manifold5VMDTO['mounting']> = {
  'R':  'Pipe-to-Pipe',
  'T':  'Pipe-to-Flange',
  'H':  'Flange-to-Flange',
  'DM': 'Direct Mount',
  'RM': 'Pipe-to-Pipe',
}

const DRAIN_CODE_MAP: Record<string, string> = {
  '':     '1/4" NPT (Standard)',
  'V2':   '1/2" NPT',
  'V8':   '1/8" NPT',
  'V4G':  '1/4" BSPP',
  'V8G':  '1/2" BSPP',
  'V2G':  '1/8" BSPP',
  'V20M': 'M20x1.5',
}

const OPTIONAL_MAP: Record<string, string> = {
  'P':   'Vent with Plug',
  'SG':  'NACE Sour Gas (MR-01-75)',
  'HT':  'Grafoil High Temp',
  'XLT': 'Low Temperature',
  'PC':  'Power Configuration',
  'BT':  'Ball Tip',
  'LB':  'Soft Seat (Large Bore)',
  'ATK': 'Anti-Tamper Key',
}

// ============ RAW DATA ============

type RawManifold = {
  partNumber: string
  sizeCode: string
  connectionType: keyof typeof CONNECTION_TYPE_MAP
  mountingCode: keyof typeof MOUNTING_MAP
  drainCode?: keyof typeof DRAIN_CODE_MAP
  optionalCodes?: string[]
  pressureCode?: '10K'
  mountingBracket?: boolean
}

const RAW_DATA: RawManifold[] = [

  // ===== 1/4" NPT — Base matrix =====
  { partNumber: "5VM-SS-4-R-A",         sizeCode: '4',   connectionType: '',   mountingCode: 'R'  },
  { partNumber: "5VM-SS-4-T-A",         sizeCode: '4',   connectionType: '',   mountingCode: 'T'  },
  { partNumber: "5VM-SS-4-H-A",         sizeCode: '4',   connectionType: '',   mountingCode: 'H'  },
  { partNumber: "5VM-SS-4-DM-A",        sizeCode: '4',   connectionType: '',   mountingCode: 'DM' },
  { partNumber: "5VM-SS-4-MF-R-A",      sizeCode: '4',   connectionType: 'MF', mountingCode: 'R'  },
  { partNumber: "5VM-SS-4-MM-R-A",      sizeCode: '4',   connectionType: 'MM', mountingCode: 'R'  },
  { partNumber: "5VM-SS-4-FM-R-A",      sizeCode: '4',   connectionType: 'FM', mountingCode: 'R'  },
  { partNumber: "5VM-SS-4-MF-DM-A",     sizeCode: '4',   connectionType: 'MF', mountingCode: 'DM' },
  { partNumber: "5VM-SS-4-MM-DM-A",     sizeCode: '4',   connectionType: 'MM', mountingCode: 'DM' },
  { partNumber: "5VM-SS-4-MF-T-A",      sizeCode: '4',   connectionType: 'MF', mountingCode: 'T'  },

  // ===== 1/2" NPT — Base matrix =====
  { partNumber: "5VM-SS-8-R-A",         sizeCode: '8',   connectionType: '',   mountingCode: 'R'  },
  { partNumber: "5VM-SS-8-T-A",         sizeCode: '8',   connectionType: '',   mountingCode: 'T'  },
  { partNumber: "5VM-SS-8-H-A",         sizeCode: '8',   connectionType: '',   mountingCode: 'H'  },
  { partNumber: "5VM-SS-8-DM-A",        sizeCode: '8',   connectionType: '',   mountingCode: 'DM' },
  { partNumber: "5VM-SS-8-MF-R-A",      sizeCode: '8',   connectionType: 'MF', mountingCode: 'R'  },
  { partNumber: "5VM-SS-8-MM-R-A",      sizeCode: '8',   connectionType: 'MM', mountingCode: 'R'  },
  { partNumber: "5VM-SS-8-FM-R-A",      sizeCode: '8',   connectionType: 'FM', mountingCode: 'R'  },
  { partNumber: "5VM-SS-8-FF-R-A",      sizeCode: '8',   connectionType: 'FF', mountingCode: 'R'  },
  { partNumber: "5VM-SS-8-MF-T-A",      sizeCode: '8',   connectionType: 'MF', mountingCode: 'T'  },
  { partNumber: "5VM-SS-8-MF-DM-A",     sizeCode: '8',   connectionType: 'MF', mountingCode: 'DM' },
  { partNumber: "5VM-SS-8-MM-DM-A",     sizeCode: '8',   connectionType: 'MM', mountingCode: 'DM' },
  { partNumber: "5VM-SS-8-FM-DM-A",     sizeCode: '8',   connectionType: 'FM', mountingCode: 'DM' },
  { partNumber: "5VM-SS-8-FF-DM-A",     sizeCode: '8',   connectionType: 'FF', mountingCode: 'DM' },
  { partNumber: "5VM-SS-8-OD-R-A",      sizeCode: '8',   connectionType: 'OD', mountingCode: 'R'  },
  { partNumber: "5VM-SS-8-OD-DM-A",     sizeCode: '8',   connectionType: 'OD', mountingCode: 'DM' },

  // ===== BSPT — 1/4" + 1/2" =====
  { partNumber: "5VM-SS-4R-R-A",        sizeCode: '4R',  connectionType: '',   mountingCode: 'R'  },
  { partNumber: "5VM-SS-4R-T-A",        sizeCode: '4R',  connectionType: '',   mountingCode: 'T'  },
  { partNumber: "5VM-SS-4R-DM-A",       sizeCode: '4R',  connectionType: '',   mountingCode: 'DM' },
  { partNumber: "5VM-SS-8R-R-A",        sizeCode: '8R',  connectionType: '',   mountingCode: 'R'  },
  { partNumber: "5VM-SS-8R-T-A",        sizeCode: '8R',  connectionType: '',   mountingCode: 'T'  },
  { partNumber: "5VM-SS-8R-H-A",        sizeCode: '8R',  connectionType: '',   mountingCode: 'H'  },
  { partNumber: "5VM-SS-8R-DM-A",       sizeCode: '8R',  connectionType: '',   mountingCode: 'DM' },
  { partNumber: "5VM-SS-8R-MF-R-A",     sizeCode: '8R',  connectionType: 'MF', mountingCode: 'R'  },
  { partNumber: "5VM-SS-8R-MM-R-A",     sizeCode: '8R',  connectionType: 'MM', mountingCode: 'R'  },
  { partNumber: "5VM-SS-8R-MF-DM-A",    sizeCode: '8R',  connectionType: 'MF', mountingCode: 'DM' },

  // ===== BSPP — 1/4" + 1/2" + Swivel =====
  { partNumber: "5VM-SS-4G-R-A",        sizeCode: '4G',  connectionType: '',   mountingCode: 'R'  },
  { partNumber: "5VM-SS-4G-T-A",        sizeCode: '4G',  connectionType: '',   mountingCode: 'T'  },
  { partNumber: "5VM-SS-4G-DM-A",       sizeCode: '4G',  connectionType: '',   mountingCode: 'DM' },
  { partNumber: "5VM-SS-8G-R-A",        sizeCode: '8G',  connectionType: '',   mountingCode: 'R'  },
  { partNumber: "5VM-SS-8G-T-A",        sizeCode: '8G',  connectionType: '',   mountingCode: 'T'  },
  { partNumber: "5VM-SS-8G-H-A",        sizeCode: '8G',  connectionType: '',   mountingCode: 'H'  },
  { partNumber: "5VM-SS-8G-DM-A",       sizeCode: '8G',  connectionType: '',   mountingCode: 'DM' },
  { partNumber: "5VM-SS-8G-MF-R-A",     sizeCode: '8G',  connectionType: 'MF', mountingCode: 'R'  },
  { partNumber: "5VM-SS-8G-MM-R-A",     sizeCode: '8G',  connectionType: 'MM', mountingCode: 'R'  },
  { partNumber: "5VM-SS-8G-FF-R-A",     sizeCode: '8G',  connectionType: 'FF', mountingCode: 'R'  },
  { partNumber: "5VM-SS-4GSWL-R-A",     sizeCode: '4GSWL', connectionType: '', mountingCode: 'R'  },
  { partNumber: "5VM-SS-4GSWL-DM-A",    sizeCode: '4GSWL', connectionType: '', mountingCode: 'DM' },
  { partNumber: "5VM-SS-8GSWL-R-A",     sizeCode: '8GSWL', connectionType: '', mountingCode: 'R'  },
  { partNumber: "5VM-SS-8GSWL-T-A",     sizeCode: '8GSWL', connectionType: '', mountingCode: 'T'  },
  { partNumber: "5VM-SS-8GSWL-DM-A",    sizeCode: '8GSWL', connectionType: '', mountingCode: 'DM' },

  // ===== M20x1.5 + Flange + Swivel =====
  { partNumber: "5VM-SS-20M-R-A",       sizeCode: '20M', connectionType: '',   mountingCode: 'R'  },
  { partNumber: "5VM-SS-20M-T-A",       sizeCode: '20M', connectionType: '',   mountingCode: 'T'  },
  { partNumber: "5VM-SS-20M-H-A",       sizeCode: '20M', connectionType: '',   mountingCode: 'H'  },
  { partNumber: "5VM-SS-20M-DM-A",      sizeCode: '20M', connectionType: '',   mountingCode: 'DM' },
  { partNumber: "5VM-SS-20MM-R-A",      sizeCode: '20MM', connectionType: '',  mountingCode: 'R'  },
  { partNumber: "5VM-SS-20MM-T-A",      sizeCode: '20MM', connectionType: '',  mountingCode: 'T'  },
  { partNumber: "5VM-SS-20MM-H-A",      sizeCode: '20MM', connectionType: '',  mountingCode: 'H'  },
  { partNumber: "5VM-SS-20MM-DM-A",     sizeCode: '20MM', connectionType: '',  mountingCode: 'DM' },
  { partNumber: "5VM-SS-20MSWL-R-A",    sizeCode: '20MSWL', connectionType: '', mountingCode: 'R' },
  { partNumber: "5VM-SS-20MSWL-DM-A",   sizeCode: '20MSWL', connectionType: '', mountingCode: 'DM' },

  // ===== Tube Fittings =====
  { partNumber: "5VM-SS-M12-R-A",       sizeCode: 'M12', connectionType: '',   mountingCode: 'R'  },
  { partNumber: "5VM-SS-M12-T-A",       sizeCode: 'M12', connectionType: '',   mountingCode: 'T'  },
  { partNumber: "5VM-SS-M12-DM-A",      sizeCode: 'M12', connectionType: '',   mountingCode: 'DM' },
  { partNumber: "5VM-SS-O8-R-A",        sizeCode: 'O8',  connectionType: '',   mountingCode: 'R'  },
  { partNumber: "5VM-SS-O8-T-A",        sizeCode: 'O8',  connectionType: '',   mountingCode: 'T'  },
  { partNumber: "5VM-SS-O8-DM-A",       sizeCode: 'O8',  connectionType: '',   mountingCode: 'DM' },

  // ===== HIGH PRESSURE 10K =====
  { partNumber: "5VM-SS-4-R-A-10K",     sizeCode: '4',   connectionType: '',   mountingCode: 'R',  pressureCode: '10K' },
  { partNumber: "5VM-SS-4-DM-A-10K",    sizeCode: '4',   connectionType: '',   mountingCode: 'DM', pressureCode: '10K' },
  { partNumber: "5VM-SS-8-R-A-10K",     sizeCode: '8',   connectionType: '',   mountingCode: 'R',  pressureCode: '10K' },
  { partNumber: "5VM-SS-8-T-A-10K",     sizeCode: '8',   connectionType: '',   mountingCode: 'T',  pressureCode: '10K' },
  { partNumber: "5VM-SS-8-H-A-10K",     sizeCode: '8',   connectionType: '',   mountingCode: 'H',  pressureCode: '10K' },
  { partNumber: "5VM-SS-8-DM-A-10K",    sizeCode: '8',   connectionType: '',   mountingCode: 'DM', pressureCode: '10K' },
  { partNumber: "5VM-SS-8R-R-A-10K",    sizeCode: '8R',  connectionType: '',   mountingCode: 'R',  pressureCode: '10K' },
  { partNumber: "5VM-SS-8G-R-A-10K",    sizeCode: '8G',  connectionType: '',   mountingCode: 'R',  pressureCode: '10K' },
  { partNumber: "5VM-SS-20M-R-A-10K",   sizeCode: '20M', connectionType: '',   mountingCode: 'R',  pressureCode: '10K' },
  { partNumber: "5VM-SS-20M-DM-A-10K",  sizeCode: '20M', connectionType: '',   mountingCode: 'DM', pressureCode: '10K' },
  { partNumber: "5VM-SS-20MM-DM-A-10K", sizeCode: '20MM',connectionType: '',   mountingCode: 'DM', pressureCode: '10K' },

  // ===== NACE Sour Gas =====
  { partNumber: "5VM-SS-4-R-A-SG",      sizeCode: '4',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['SG'] },
  { partNumber: "5VM-SS-4-DM-A-SG",     sizeCode: '4',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['SG'] },
  { partNumber: "5VM-SS-8-R-A-SG",      sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['SG'] },
  { partNumber: "5VM-SS-8-T-A-SG",      sizeCode: '8',   connectionType: '',   mountingCode: 'T',  optionalCodes: ['SG'] },
  { partNumber: "5VM-SS-8-H-A-SG",      sizeCode: '8',   connectionType: '',   mountingCode: 'H',  optionalCodes: ['SG'] },
  { partNumber: "5VM-SS-8-DM-A-SG",     sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['SG'] },
  { partNumber: "5VM-SS-8R-R-A-SG",     sizeCode: '8R',  connectionType: '',   mountingCode: 'R',  optionalCodes: ['SG'] },
  { partNumber: "5VM-SS-8G-R-A-SG",     sizeCode: '8G',  connectionType: '',   mountingCode: 'R',  optionalCodes: ['SG'] },
  { partNumber: "5VM-SS-20M-R-A-SG",    sizeCode: '20M', connectionType: '',   mountingCode: 'R',  optionalCodes: ['SG'] },
  { partNumber: "5VM-SS-20MM-DM-A-SG",  sizeCode: '20MM',connectionType: '',   mountingCode: 'DM', optionalCodes: ['SG'] },
  { partNumber: "5VM-SS-8-R-A-SG-10K",  sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['SG'], pressureCode: '10K' },
  { partNumber: "5VM-SS-8-DM-A-SG-10K", sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['SG'], pressureCode: '10K' },
  { partNumber: "5VM-SS-8-T-A-SG-10K",  sizeCode: '8',   connectionType: '',   mountingCode: 'T',  optionalCodes: ['SG'], pressureCode: '10K' },
  { partNumber: "5VM-SS-8-H-A-SG-10K",  sizeCode: '8',   connectionType: '',   mountingCode: 'H',  optionalCodes: ['SG'], pressureCode: '10K' },
  { partNumber: "5VM-SS-20MM-DM-A-SG-10K", sizeCode: '20MM', connectionType: '', mountingCode: 'DM', optionalCodes: ['SG'], pressureCode: '10K' },

  // ===== Power Configuration (PC) =====
  { partNumber: "5VM-SS-4-R-A-PC",      sizeCode: '4',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['PC'] },
  { partNumber: "5VM-SS-4-DM-A-PC",     sizeCode: '4',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['PC'] },
  { partNumber: "5VM-SS-8-R-A-PC",      sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['PC'] },
  { partNumber: "5VM-SS-8-T-A-PC",      sizeCode: '8',   connectionType: '',   mountingCode: 'T',  optionalCodes: ['PC'] },
  { partNumber: "5VM-SS-8-H-A-PC",      sizeCode: '8',   connectionType: '',   mountingCode: 'H',  optionalCodes: ['PC'] },
  { partNumber: "5VM-SS-8-DM-A-PC",     sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['PC'] },
  { partNumber: "5VM-SS-8R-R-A-PC",     sizeCode: '8R',  connectionType: '',   mountingCode: 'R',  optionalCodes: ['PC'] },
  { partNumber: "5VM-SS-8G-R-A-PC",     sizeCode: '8G',  connectionType: '',   mountingCode: 'R',  optionalCodes: ['PC'] },
  { partNumber: "5VM-SS-20M-R-A-PC",    sizeCode: '20M', connectionType: '',   mountingCode: 'R',  optionalCodes: ['PC'] },
  { partNumber: "5VM-SS-20MM-DM-A-PC",  sizeCode: '20MM',connectionType: '',   mountingCode: 'DM', optionalCodes: ['PC'] },
  { partNumber: "5VM-SS-8-R-A-PC-SG",   sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['PC', 'SG'] },
  { partNumber: "5VM-SS-8-DM-A-PC-SG",  sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['PC', 'SG'] },
  { partNumber: "5VM-SS-8-R-A-PC-10K",  sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['PC'], pressureCode: '10K' },
  { partNumber: "5VM-SS-8-DM-A-PC-10K", sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['PC'], pressureCode: '10K' },

  // ===== Temperature Service =====
  { partNumber: "5VM-SS-8-R-A-HT",      sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['HT'] },
  { partNumber: "5VM-SS-8-T-A-HT",      sizeCode: '8',   connectionType: '',   mountingCode: 'T',  optionalCodes: ['HT'] },
  { partNumber: "5VM-SS-8-H-A-HT",      sizeCode: '8',   connectionType: '',   mountingCode: 'H',  optionalCodes: ['HT'] },
  { partNumber: "5VM-SS-8-DM-A-HT",     sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['HT'] },
  { partNumber: "5VM-SS-8-R-A-XLT",     sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['XLT'] },
  { partNumber: "5VM-SS-8-DM-A-XLT",    sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['XLT'] },
  { partNumber: "5VM-SS-8-R-A-HT-SG",   sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['HT', 'SG'] },
  { partNumber: "5VM-SS-8-DM-A-HT-SG",  sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['HT', 'SG'] },
  { partNumber: "5VM-SS-8-R-A-XLT-SG",  sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['XLT', 'SG'] },
  { partNumber: "5VM-SS-4-R-A-HT",      sizeCode: '4',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['HT'] },
  { partNumber: "5VM-SS-4-DM-A-HT",     sizeCode: '4',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['HT'] },
  { partNumber: "5VM-SS-20M-R-A-HT",    sizeCode: '20M', connectionType: '',   mountingCode: 'R',  optionalCodes: ['HT'] },

  // ===== Large Bore / Soft Seat (LB) =====
  { partNumber: "5VM-LB-SS-8-R-A",      sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['LB'] },
  { partNumber: "5VM-LB-SS-8-T-A",      sizeCode: '8',   connectionType: '',   mountingCode: 'T',  optionalCodes: ['LB'] },
  { partNumber: "5VM-LB-SS-8-H-A",      sizeCode: '8',   connectionType: '',   mountingCode: 'H',  optionalCodes: ['LB'] },
  { partNumber: "5VM-LB-SS-8-DM-A",     sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['LB'] },
  { partNumber: "5VM-LB-SS-8R-R-A",     sizeCode: '8R',  connectionType: '',   mountingCode: 'R',  optionalCodes: ['LB'] },
  { partNumber: "5VM-LB-SS-8G-R-A",     sizeCode: '8G',  connectionType: '',   mountingCode: 'R',  optionalCodes: ['LB'] },
  { partNumber: "5VM-LB-SS-20M-R-A",    sizeCode: '20M', connectionType: '',   mountingCode: 'R',  optionalCodes: ['LB'] },
  { partNumber: "5VM-LB-SS-20MM-DM-A",  sizeCode: '20MM',connectionType: '',   mountingCode: 'DM', optionalCodes: ['LB'] },
  { partNumber: "5VM-LB-SS-8-R-A-SG",   sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['LB', 'SG'] },
  { partNumber: "5VM-LB-SS-8-DM-A-SG",  sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['LB', 'SG'] },
  { partNumber: "5VM-LB-SS-8-R-A-10K",  sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['LB'], pressureCode: '10K' },
  { partNumber: "5VM-LB-SS-8-H-A-SG",   sizeCode: '8',   connectionType: '',   mountingCode: 'H',  optionalCodes: ['LB', 'SG'] },

  // ===== Drain Hole Variants =====
  { partNumber: "5VM-SS-8-R-A-V2",      sizeCode: '8',   connectionType: '',   mountingCode: 'R',  drainCode: 'V2' },
  { partNumber: "5VM-SS-8-DM-A-V2",     sizeCode: '8',   connectionType: '',   mountingCode: 'DM', drainCode: 'V2' },
  { partNumber: "5VM-SS-8-R-A-V8",      sizeCode: '8',   connectionType: '',   mountingCode: 'R',  drainCode: 'V8' },
  { partNumber: "5VM-SS-8-DM-A-V8",     sizeCode: '8',   connectionType: '',   mountingCode: 'DM', drainCode: 'V8' },
  { partNumber: "5VM-SS-8-R-A-V4G",     sizeCode: '8',   connectionType: '',   mountingCode: 'R',  drainCode: 'V4G' },
  { partNumber: "5VM-SS-8-R-A-V8G",     sizeCode: '8',   connectionType: '',   mountingCode: 'R',  drainCode: 'V8G' },
  { partNumber: "5VM-SS-8-DM-A-V8G",    sizeCode: '8',   connectionType: '',   mountingCode: 'DM', drainCode: 'V8G' },
  { partNumber: "5VM-SS-8-R-A-V2G",     sizeCode: '8',   connectionType: '',   mountingCode: 'R',  drainCode: 'V2G' },
  { partNumber: "5VM-SS-8-R-A-V20M",    sizeCode: '8',   connectionType: '',   mountingCode: 'R',  drainCode: 'V20M' },
  { partNumber: "5VM-SS-20M-R-A-V20M",  sizeCode: '20M', connectionType: '',   mountingCode: 'R',  drainCode: 'V20M' },
  { partNumber: "5VM-SS-4-R-A-V8",      sizeCode: '4',   connectionType: '',   mountingCode: 'R',  drainCode: 'V8' },
  { partNumber: "5VM-SS-4G-R-A-V4G",    sizeCode: '4G',  connectionType: '',   mountingCode: 'R',  drainCode: 'V4G' },

  // ===== Specialty Options =====
  { partNumber: "5VM-SS-8-R-A-BT",      sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['BT'] },
  { partNumber: "5VM-SS-8-DM-A-BT",     sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['BT'] },
  { partNumber: "5VM-SS-8-R-A-ATK",     sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['ATK'] },
  { partNumber: "5VM-SS-8-DM-A-ATK",    sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['ATK'] },
  { partNumber: "5VM-SS-8-R-A-P",       sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['P'] },
  { partNumber: "5VM-SS-8-T-A-P",       sizeCode: '8',   connectionType: '',   mountingCode: 'T',  optionalCodes: ['P'] },
  { partNumber: "5VM-SS-8-DM-A-P",      sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['P'] },
  { partNumber: "5VM-SS-4-R-A-P",       sizeCode: '4',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['P'] },

  // ===== Mounting Brackets =====
  { partNumber: "5VM-SS-8-R-A-BKT",     sizeCode: '8',   connectionType: '',   mountingCode: 'R',  mountingBracket: true },
  { partNumber: "5VM-SS-8-T-A-BKT",     sizeCode: '8',   connectionType: '',   mountingCode: 'T',  mountingBracket: true },
  { partNumber: "5VM-SS-8-DM-A-BKT",    sizeCode: '8',   connectionType: '',   mountingCode: 'DM', mountingBracket: true },
  { partNumber: "5VM-SS-4-R-A-BKT",     sizeCode: '4',   connectionType: '',   mountingCode: 'R',  mountingBracket: true },
  { partNumber: "5VM-SS-4-DM-A-BKT",    sizeCode: '4',   connectionType: '',   mountingCode: 'DM', mountingBracket: true },
  { partNumber: "5VM-SS-20M-R-A-BKT",   sizeCode: '20M', connectionType: '',   mountingCode: 'R',  mountingBracket: true },
  { partNumber: "5VM-SS-20MM-DM-A-BKT", sizeCode: '20MM',connectionType: '',   mountingCode: 'DM', mountingBracket: true },
  { partNumber: "5VM-SS-8-R-A-V8-BKT",  sizeCode: '8',   connectionType: '',   mountingCode: 'R',  drainCode: 'V8', mountingBracket: true },

  // ===== Mixed combos =====
  { partNumber: "5VM-SS-8-R-A-PC-HT",       sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['PC', 'HT'] },
  { partNumber: "5VM-SS-8-DM-A-PC-HT",      sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['PC', 'HT'] },
  { partNumber: "5VM-SS-8-R-A-LB-SG-10K",   sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['LB', 'SG'], pressureCode: '10K' },
  { partNumber: "5VM-SS-8-DM-A-LB-SG-10K",  sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['LB', 'SG'], pressureCode: '10K' },
  { partNumber: "5VM-SS-8-R-A-PC-SG-10K",   sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['PC', 'SG'], pressureCode: '10K' },
  { partNumber: "5VM-SS-20M-DM-A-SG-10K",   sizeCode: '20M', connectionType: '',   mountingCode: 'DM', optionalCodes: ['SG'], pressureCode: '10K' },
  { partNumber: "5VM-SS-8-R-A-HT-10K",      sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['HT'], pressureCode: '10K' },
  { partNumber: "5VM-SS-8-DM-A-HT-10K",     sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['HT'], pressureCode: '10K' },
  { partNumber: "5VM-SS-8-R-A-XLT-10K",     sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['XLT'], pressureCode: '10K' },
  { partNumber: "5VM-SS-8G-DM-A-SG",        sizeCode: '8G',  connectionType: '',   mountingCode: 'DM', optionalCodes: ['SG'] },
  { partNumber: "5VM-SS-8R-DM-A-SG",        sizeCode: '8R',  connectionType: '',   mountingCode: 'DM', optionalCodes: ['SG'] },
  { partNumber: "5VM-SS-20M-R-A-PC",        sizeCode: '20M', connectionType: '',   mountingCode: 'R',  optionalCodes: ['PC'] },
  { partNumber: "5VM-SS-20MM-DM-A-PC",      sizeCode: '20MM',connectionType: '',   mountingCode: 'DM', optionalCodes: ['PC'] },
  { partNumber: "5VM-SS-8-T-A-PC-SG",       sizeCode: '8',   connectionType: '',   mountingCode: 'T',  optionalCodes: ['PC', 'SG'] },
  { partNumber: "5VM-SS-8-H-A-PC-SG",       sizeCode: '8',   connectionType: '',   mountingCode: 'H',  optionalCodes: ['PC', 'SG'] },
  { partNumber: "5VM-SS-8-R-A-BKT-SG",      sizeCode: '8',   connectionType: '',   mountingCode: 'R',  optionalCodes: ['SG'], mountingBracket: true },
  { partNumber: "5VM-SS-8-DM-A-BKT-SG",     sizeCode: '8',   connectionType: '',   mountingCode: 'DM', optionalCodes: ['SG'], mountingBracket: true },
]

// ============ DECODER ============

export const MANIFOLDS_5VM_DATA: Manifold5VMDTO[] = RAW_DATA.map(raw => {
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
  if (raw.mountingBracket) specialService.push('Mounting Brackets')

  const description = `Panam 5-Valve Manifold (Type A Angular), Stainless Steel 316, ${connectionSize} ${connectionType}, ${mounting}, ${maxPressure} max${specialService.length ? `, ${specialService.join(', ')}` : ''}.`

  return {
    id: raw.partNumber,
    partNumber: raw.partNumber,
    description,
    valveCount: 5 as const,
    connectionSize,
    connectionType,
    mounting,
    drainHoleSize,
    maxPressure,
    specialService,
    imageUrl: MANIFOLD_5VM_IMAGE,
  }
})