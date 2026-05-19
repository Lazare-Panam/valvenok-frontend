import { useMemo } from 'react'
import { NEEDLE_VALVE_SB_DATA } from '../data/needleValveSBData'
//import { type NeedleValveSBFilters } from './types'

import { type NeedleValveSBFilters } from './types'
export function useNeedleValvesSB(filters: NeedleValveSBFilters) {
  const data = useMemo(() => NEEDLE_VALVE_SB_DATA.filter(r => {
    if (filters.valveTypes.length && !filters.valveTypes.includes(r.valveType)) return false
    if (filters.seats.length && !filters.seats.includes(r.seat)) return false
    if (filters.threadTypes.length && !filters.threadTypes.includes(r.threadType)) return false
    if (filters.endConnections.length && !filters.endConnections.includes(r.endConnection)) return false
    if (filters.connectionSizes.length && !filters.connectionSizes.includes(r.connectionSize)) return false
    return true
  }), [
    filters.valveTypes, filters.seats, filters.threadTypes,
    filters.endConnections, filters.connectionSizes,
  ])
  return { data, isLoading: false, isFetching: false }
}

export function useNeedleValveSBFilterOptions() {
  const options = useMemo(() => ({
    valveTypes:      [...new Set(NEEDLE_VALVE_SB_DATA.map(r => r.valveType))].sort(),
    seats:           [...new Set(NEEDLE_VALVE_SB_DATA.map(r => r.seat))].sort(),
    threadTypes:     [...new Set(NEEDLE_VALVE_SB_DATA.map(r => r.threadType))].sort(),
    endConnections:  [...new Set(NEEDLE_VALVE_SB_DATA.map(r => r.endConnection))].sort(),
    connectionSizes: [...new Set(NEEDLE_VALVE_SB_DATA.map(r => r.connectionSize))].sort(),
  }), [])
  return { data: options, isLoading: false }
}