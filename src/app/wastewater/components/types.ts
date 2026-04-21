export interface Filters {
  pumpType: string
  powerRange: string
  voltage: number[]
  rpm: number[]
  deliverySizeMm: number[]
  maxSolidSizeMm: number[]
}

export const EMPTY_FILTERS: Filters = {
  pumpType: '',
  powerRange: '',
  voltage: [],
  rpm: [],
  deliverySizeMm: [],
  maxSolidSizeMm: [],
}

export const POWER_RANGES = [
  { label: 'Up to 1 kW',  min: 0,  max: 1    },
  { label: '1 – 3 kW',    min: 1,  max: 3    },
  { label: '3 – 5 kW',    min: 3,  max: 5    },
  { label: '5 – 10 kW',   min: 5,  max: 10   },
  { label: '10 – 20 kW',  min: 10, max: 20   },
  { label: '20 – 35 kW',  min: 20, max: 35   },
  { label: 'Above 35 kW', min: 35, max: 9999 },
]