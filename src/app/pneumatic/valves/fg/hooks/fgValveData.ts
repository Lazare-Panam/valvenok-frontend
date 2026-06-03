export interface FGValveProduct {
  id: number
  partNumber: string
  description: string
  categoryId: number
  valveType: '25' | '35'
  bodySize: number
  control: 'Single' | 'Double'
  portSize: string
  workingMode: 'L' | 'CL'
  coilVoltage?: string
}

export const FG_VALVE_DATA: FGValveProduct[] = [
  { id: 1,  partNumber: 'FG2511-06L',  description: '5/2 WAY SINGLE SOLENOID VALVE BSP 1/8 INCH',           categoryId: 4, valveType: '25', bodySize: 1, control: 'Single', portSize: '06', workingMode: 'L' },
  { id: 2,  partNumber: 'FG2521-08L',  description: '5/2 WAY SINGLE SOLENOID VALVE BSP 1/4 INCH',           categoryId: 4, valveType: '25', bodySize: 2, control: 'Single', portSize: '08', workingMode: 'L' },
  { id: 3,  partNumber: 'FG2531-10L',  description: '5/2 WAY SINGLE SOLENOID VALVE BSP 3/8 INCH',           categoryId: 4, valveType: '25', bodySize: 3, control: 'Single', portSize: '10', workingMode: 'L' },
  { id: 4,  partNumber: 'FG2541-15L',  description: '5/2 WAY SINGLE SOLENOID VALVE BSP 1/2 INCH',           categoryId: 4, valveType: '25', bodySize: 4, control: 'Single', portSize: '15', workingMode: 'L' },
  { id: 5,  partNumber: 'FG2561-20L',  description: '5/2 WAY SINGLE SOLENOID VALVE BSP 3/4 INCH',           categoryId: 4, valveType: '25', bodySize: 6, control: 'Single', portSize: '20', workingMode: 'L' },
  { id: 6,  partNumber: 'FG2581-25L',  description: '5/2 WAY SINGLE SOLENOID VALVE BSP 1 INCH',             categoryId: 4, valveType: '25', bodySize: 8, control: 'Single', portSize: '25', workingMode: 'L' },
  { id: 7,  partNumber: 'FG2522-08L',  description: '5/2 WAY DOUBLE SOLENOID VALVE BSP 1/4 INCH',           categoryId: 4, valveType: '25', bodySize: 2, control: 'Double', portSize: '08', workingMode: 'L' },
  { id: 8,  partNumber: 'FG2532-10L',  description: '5/2 WAY DOUBLE SOLENOID VALVE BSP 3/8 INCH',           categoryId: 4, valveType: '25', bodySize: 3, control: 'Double', portSize: '10', workingMode: 'L' },
  { id: 9,  partNumber: 'FG2542-15L',  description: '5/2 WAY DOUBLE SOLENOID VALVE BSP 1/2 INCH',           categoryId: 4, valveType: '25', bodySize: 4, control: 'Double', portSize: '15', workingMode: 'L' },
  { id: 10, partNumber: 'FG2562-20L',  description: '5/2 WAY DOUBLE SOLENOID VALVE BSP 3/4 INCH',           categoryId: 4, valveType: '25', bodySize: 6, control: 'Double', portSize: '20', workingMode: 'L' },
  { id: 11, partNumber: 'FG2582-25L',  description: '5/2 WAY DOUBLE SOLENOID VALVE BSP 1 INCH',             categoryId: 4, valveType: '25', bodySize: 8, control: 'Double', portSize: '25', workingMode: 'L' },
  { id: 12, partNumber: 'FG3512-06CL', description: '5/3 WAY DOUBLE SOLENOID VALVE CENTER CLOSED BSP 1/8 INCH', categoryId: 4, valveType: '35', bodySize: 1, control: 'Double', portSize: '06', workingMode: 'CL' },
  { id: 13, partNumber: 'FG3522-08CL', description: '5/3 WAY DOUBLE SOLENOID VALVE CENTER CLOSED BSP 1/4 INCH', categoryId: 4, valveType: '35', bodySize: 2, control: 'Double', portSize: '08', workingMode: 'CL' },
  { id: 14, partNumber: 'FG3532-10CL', description: '5/3 WAY DOUBLE SOLENOID VALVE CENTER CLOSED BSP 3/8 INCH', categoryId: 4, valveType: '35', bodySize: 3, control: 'Double', portSize: '10', workingMode: 'CL' },
  { id: 15, partNumber: 'FG3542-15CL', description: '5/3 WAY DOUBLE SOLENOID VALVE CENTER CLOSED BSP 1/2 INCH', categoryId: 4, valveType: '35', bodySize: 4, control: 'Double', portSize: '15', workingMode: 'CL' },
  { id: 16, partNumber: 'FG3562-20CL', description: '5/3 WAY DOUBLE SOLENOID VALVE CENTER CLOSED BSP 3/4 INCH', categoryId: 4, valveType: '35', bodySize: 6, control: 'Double', portSize: '20', workingMode: 'CL' },
  { id: 17, partNumber: 'FG3582-25CL', description: '5/3 WAY DOUBLE SOLENOID VALVE CENTER CLOSED BSP 1 INCH',   categoryId: 4, valveType: '35', bodySize: 8, control: 'Double', portSize: '25', workingMode: 'CL' },
]

export interface FGValveFilterParams {
  valveType?: string
  portSize?: string
  control?: string
  workingMode?: string
  bodySize?: number
}

export interface FGValveFilterOptions {
  valveTypes: string[]
  portSizes: string[]
  controls: string[]
  workingModes: string[]
}

export const FG_VALVE_FILTER_OPTIONS: FGValveFilterOptions = {
  valveTypes:   Array.from(new Set(FG_VALVE_DATA.map(p => p.valveType))),
  portSizes:    Array.from(new Set(FG_VALVE_DATA.map(p => p.portSize))),
  controls:     Array.from(new Set(FG_VALVE_DATA.map(p => p.control))),
  workingModes: Array.from(new Set(FG_VALVE_DATA.map(p => p.workingMode))),
}

export function applyFGValveFilters(
  data: FGValveProduct[],
  filters: FGValveFilterParams,
): FGValveProduct[] {
  return data.filter(p => {
    if (filters.valveType   && p.valveType   !== filters.valveType)          return false
    if (filters.portSize    && p.portSize    !== filters.portSize)            return false
    if (filters.control     && p.control     !== filters.control)             return false
    if (filters.workingMode && p.workingMode !== filters.workingMode)         return false
    if (filters.bodySize    && p.bodySize    !== filters.bodySize)            return false
    return true
  })
}