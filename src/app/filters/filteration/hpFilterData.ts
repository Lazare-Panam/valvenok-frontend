export interface HPFilterItem {
  partNumber: string
  price: number
  model: string
  threadConnection: string
  housingLength?: string
  maxPressure?: string
  flow?: string
  weight?: string
  connection?: string
  indicatorType?: string
  mounting?: string
  setPressure?: string
  subCategory: string
  imageUrl: string
}

const HP_IMG = 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1775571122/4461762905_CPS_ayzy2c.jpg'
const AL_IMG = 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1775571637/4339278360_CPS_bqwmrr.jpg'
const RL_IMG = 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1775573178/4270250924_CPS_ykajgv.jpg'
const DX_IMG = 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1775572410/4270251463_CPS_n4xbi0.jpg'
const SS_IMG = 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1775574994/4270263469_CPS_nhpoww.jpg'
const CI_IMG = 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1775575661/4339778460_CPB_q49w95.jpg'

export const HP_FILTER_DATA: HPFilterItem[] = [
  // ── HP Series High Pressure Filters ──────────────────────────────────────
  { partNumber: 'HP-06-1N',  price: 344.96,  model: 'HP-06',  threadConnection: '3/4"',      housingLength: '1', subCategory: 'High Pressure Filters',  imageUrl: HP_IMG },
  { partNumber: 'HP-06-2N',  price: 394.24,  model: 'HP-06',  threadConnection: '3/4"',      housingLength: '2', subCategory: 'High Pressure Filters',  imageUrl: HP_IMG },
  { partNumber: 'HP-06-3N',  price: 455.84,  model: 'HP-06',  threadConnection: '3/4"',      housingLength: '3', subCategory: 'High Pressure Filters',  imageUrl: HP_IMG },
  { partNumber: 'HP-08-1N',  price: 492.80,  model: 'HP-08',  threadConnection: '1"',        housingLength: '1', subCategory: 'High Pressure Filters',  imageUrl: HP_IMG },
  { partNumber: 'HP-08-2N',  price: 579.04,  model: 'HP-08',  threadConnection: '1"',        housingLength: '2', subCategory: 'High Pressure Filters',  imageUrl: HP_IMG },
  { partNumber: 'HP-10-1N',  price: 887.04,  model: 'HP-10',  threadConnection: 'PLACEHOLDER', housingLength: '1', subCategory: 'High Pressure Filters', imageUrl: HP_IMG },
  { partNumber: 'HP-10-2N',  price: 985.60,  model: 'HP-10',  threadConnection: 'PLACEHOLDER', housingLength: '2', subCategory: 'High Pressure Filters', imageUrl: HP_IMG },
  { partNumber: 'HP-10-3N',  price: 1342.88, model: 'HP-10',  threadConnection: 'PLACEHOLDER', housingLength: '3', subCategory: 'High Pressure Filters', imageUrl: HP_IMG },
  { partNumber: 'HP-10-4N',  price: 2328.48, model: 'HP-10',  threadConnection: 'PLACEHOLDER', housingLength: '4', subCategory: 'High Pressure Filters', imageUrl: HP_IMG },
  { partNumber: 'HPM-02N',   price: 443.52,  model: 'HPM',    threadConnection: 'Modular',   housingLength: '2', subCategory: 'High Pressure Filters',  imageUrl: HP_IMG },
  { partNumber: 'HPM-03N',   price: 566.72,  model: 'HPM',    threadConnection: 'Modular',   housingLength: '3', subCategory: 'High Pressure Filters',  imageUrl: HP_IMG },

  // ── Aluminium Filters ─────────────────────────────────────────────────────
  { partNumber: 'DHP-04-1N',           price: 252.56,  model: 'DHP-04',   threadConnection: '1/2"',      housingLength: '1', subCategory: 'Aluminium Filters', imageUrl: AL_IMG },
  { partNumber: 'DHP-04-2N',           price: 320.32,  model: 'DHP-04',   threadConnection: '1/2"',      housingLength: '2', subCategory: 'Aluminium Filters', imageUrl: AL_IMG },
  { partNumber: 'DHP-04-3N',           price: 394.24,  model: 'DHP-04',   threadConnection: '1/2"',      housingLength: '3', subCategory: 'Aluminium Filters', imageUrl: AL_IMG },
  { partNumber: 'DHP-06-1N',           price: 320.32,  model: 'DHP-06',   threadConnection: '3/4"',      housingLength: '1', subCategory: 'Aluminium Filters', imageUrl: AL_IMG },
  { partNumber: 'DHP-06-2N',           price: 468.16,  model: 'DHP-06',   threadConnection: '3/4"',      housingLength: '2', subCategory: 'Aluminium Filters', imageUrl: AL_IMG },
  { partNumber: 'DHHP-08-1N',          price: 394.24,  model: 'DHHP-08',  threadConnection: '1"',        housingLength: '1', subCategory: 'Aluminium Filters', imageUrl: AL_IMG },
  { partNumber: 'DHHP-08-2N',          price: 492.80,  model: 'DHHP-08',  threadConnection: '1"',        housingLength: '2', subCategory: 'Aluminium Filters', imageUrl: AL_IMG },
  { partNumber: 'DHHP-08-3N',          price: 566.72,  model: 'DHHP-08',  threadConnection: '1"',        housingLength: '3', subCategory: 'Aluminium Filters', imageUrl: AL_IMG },
  { partNumber: 'DHHP-10-1N',          price: 542.08,  model: 'DHHP-10',  threadConnection: '3/4"',      housingLength: '1', subCategory: 'Aluminium Filters', imageUrl: AL_IMG },
  { partNumber: 'DHHP-10-1N (1 1/4")', price: 739.20,  model: 'DHHP-10',  threadConnection: '1 1/4"',    housingLength: '1', subCategory: 'Aluminium Filters', imageUrl: AL_IMG },
  { partNumber: 'DHHP-10-2N (1 1/2")', price: 1416.80, model: 'DHHP-10',  threadConnection: '1 1/2"',    housingLength: '2', subCategory: 'Aluminium Filters', imageUrl: AL_IMG },
  { partNumber: 'DHHP-10-3N (2")',      price: 2353.12, model: 'DHHP-10',  threadConnection: '2"',        housingLength: '3', subCategory: 'Aluminium Filters', imageUrl: AL_IMG },

  // ── Return Line Filters ───────────────────────────────────────────────────
  { partNumber: 'RFTD-06-2',       price: 104.72,  model: 'RFTD-06',  threadConnection: '3/4" BSP',   maxPressure: '8 BAR',    subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'RFTD-06-3',       price: 117.04,  model: 'RFTD-06',  threadConnection: '3/4" BSP',   maxPressure: '8 BAR',    subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'RFTD-08-2',       price: 104.72,  model: 'RFTD-08',  threadConnection: '1" BSP',     maxPressure: '8 BAR',    subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'RFTD-08-3',       price: 117.04,  model: 'RFTD-08',  threadConnection: '1" BSP',     maxPressure: '8 BAR',    subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'RFTD-10',         price: 240.24,  model: 'RFTD-10',  threadConnection: '1 1/4" BSP', maxPressure: '8 BAR',    subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'RFTD-12',         price: 314.16,  model: 'RFTD-12',  threadConnection: '1 1/2" BSP', maxPressure: '8 BAR',    subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'RF-06-10N',       price: 52.36,   model: 'RF-06',    threadConnection: '3/4" PT',    maxPressure: '13.7 BAR', subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'RF-06-25N',       price: 59.14,   model: 'RF-06',    threadConnection: '3/4" PT',    maxPressure: '13.7 BAR', subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'RF-08-10N',       price: 61.60,   model: 'RF-08',    threadConnection: '1" PT',      maxPressure: '13.7 BAR', subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'RF-08-25N',       price: 66.22,   model: 'RF-08',    threadConnection: '1" PT',      maxPressure: '13.7 BAR', subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'RF-10-10N',       price: 127.21,  model: 'RF-10',    threadConnection: '1 1/4" PT',  maxPressure: '6.8 BAR',  subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'RF-10-25N',       price: 127.21,  model: 'RF-10',    threadConnection: '1 1/4" PT',  maxPressure: '6.8 BAR',  subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'RFT-06',          price: 73.92,   model: 'RFT-06',   threadConnection: '3/4" PT',    maxPressure: '13.7 BAR', subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'FPA-1-06',        price: 225.77,  model: 'FPA-06',   threadConnection: '3/4" PT',    maxPressure: '25 BAR',   subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'FPA-1-08',        price: 225.77,  model: 'FPA-08',   threadConnection: '1" PT',      maxPressure: '25 BAR',   subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'FPA-2-06 (FPAL-06)', price: 282.13, model: 'FPAL-06', threadConnection: '3/4" PT',   maxPressure: '25 BAR',   subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'FPA-2-08 (FPAL-08)', price: 282.13, model: 'FPAL-08', threadConnection: '1" PT',     maxPressure: '25 BAR',   subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'FPF-1-06',        price: 225.77,  model: 'FPF-06',   threadConnection: '3/4" PT',    maxPressure: '10 BAR',   subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'FPF-1-08',        price: 225.77,  model: 'FPF-08',   threadConnection: '1" PT',      maxPressure: '10 BAR',   subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'FPF-2-06',        price: 282.13,  model: 'FPF-06',   threadConnection: '3/4" PT',    maxPressure: '10 BAR',   subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'FPF-2-08',        price: 282.13,  model: 'FPF-08',   threadConnection: '1" PT',      maxPressure: '10 BAR',   subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'SPR-06',          price: 110.88,  model: 'SPR-06',   threadConnection: '1/2" NPT',   maxPressure: '8 BAR',    subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'PR-06',           price: 130.90,  model: 'PR-06',    threadConnection: '3/4" NPT',   maxPressure: '8 BAR',    subCategory: 'Return Line Filters', imageUrl: RL_IMG },
  { partNumber: 'BPR-06',          price: 369.60,  model: 'BPR-06',   threadConnection: '1" NPT',     maxPressure: '8 BAR',    subCategory: 'Return Line Filters', imageUrl: RL_IMG },

  // ── Duplex Filters ────────────────────────────────────────────────────────
  { partNumber: 'DFM-12-1',   price: 1694.92, model: 'DFM-12',   threadConnection: '1 1/2"', housingLength: '1', subCategory: 'Duplex Filters', imageUrl: DX_IMG },
  { partNumber: 'DFM-12-2',   price: 2285.36, model: 'DFM-12',   threadConnection: '1 1/2"', housingLength: '2', subCategory: 'Duplex Filters', imageUrl: DX_IMG },
  { partNumber: 'DFM-12-3',   price: 2670.36, model: 'DFM-12',   threadConnection: '1 1/2"', housingLength: '3', subCategory: 'Duplex Filters', imageUrl: DX_IMG },
  { partNumber: 'DMPH-12-1',  price: 2399.32, model: 'DMPH-12',  threadConnection: '1 1/2"', housingLength: '1', subCategory: 'Duplex Filters', imageUrl: DX_IMG },
  { partNumber: 'DMPH-12-2',  price: 2670.36, model: 'DMPH-12',  threadConnection: '1 1/2"', housingLength: '2', subCategory: 'Duplex Filters', imageUrl: DX_IMG },
  { partNumber: 'DMPH-12-3',  price: 2802.80, model: 'DMPH-12',  threadConnection: '1 1/2"', housingLength: '3', subCategory: 'Duplex Filters', imageUrl: DX_IMG },

  // ── Suction Strainers ─────────────────────────────────────────────────────
  { partNumber: 'KSS-10', price: 317.24, model: 'KSS-10', threadConnection: '1 1/4" BSP', flow: '160',       weight: '2.8',  subCategory: 'Suction Strainers', imageUrl: SS_IMG },
  { partNumber: 'KSS-12', price: 317.24, model: 'KSS-12', threadConnection: '1 1/2" BSP', flow: '180',       weight: '2.6',  subCategory: 'Suction Strainers', imageUrl: SS_IMG },
  { partNumber: 'FSS-16', price: 563.64, model: 'FSS-16', threadConnection: '1 1/4" - 2" Flange', flow: '250 - 320', weight: '7.56', subCategory: 'Suction Strainers', imageUrl: SS_IMG },
  { partNumber: 'FSS-24', price: 643.72, model: 'FSS-24', threadConnection: '2" - 3" Flange',     flow: '400 - 700', weight: '11.7', subCategory: 'Suction Strainers', imageUrl: SS_IMG },
  { partNumber: 'FSS-32', price: 1013.32, model: 'FSS-32', threadConnection: '3" - 4" Flange',    flow: '750 - 820', weight: '15.4', subCategory: 'Suction Strainers', imageUrl: SS_IMG },

  // ── Clogging Indicators ───────────────────────────────────────────────────
  { partNumber: 'D1-05-35', price: 49.28,  model: 'D1', threadConnection: 'BSP 1/2"', indicatorType: 'Visual',          mounting: 'BSP 1/2"',      setPressure: '3.5', subCategory: 'Clogging Indicators', imageUrl: CI_IMG },
  { partNumber: 'D2-05-35', price: 73.92,  model: 'D2', threadConnection: 'BSP 1/2"', indicatorType: 'Electrical (DIN)', mounting: 'BSP 1/2"',      setPressure: '3.5', subCategory: 'Clogging Indicators', imageUrl: CI_IMG },
  { partNumber: 'DP-05-35', price: 86.24,  model: 'DP', threadConnection: 'Parker Cavity', indicatorType: 'Electrical (DIN)', mounting: 'Parker Cavity', setPressure: '3.5', subCategory: 'Clogging Indicators', imageUrl: CI_IMG },
  { partNumber: 'VP-05-35', price: 73.92,  model: 'VP', threadConnection: 'Parker Cavity', indicatorType: 'Visual',          mounting: 'Parker Cavity', setPressure: '3.5', subCategory: 'Clogging Indicators', imageUrl: CI_IMG },
]