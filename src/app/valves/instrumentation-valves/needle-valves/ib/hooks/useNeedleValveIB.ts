import { useMemo } from 'react'
import { NEEDLE_VALVE_IB_DATA } from '../data/needleValveIBData'
import { type NeedleValveIBFilters } from './types'

export function useNeedleValvesIB(filters: NeedleValveIBFilters) {
  const data = useMemo(() => NEEDLE_VALVE_IB_DATA.filter(r => {
    if (filters.threadTypes.length && !filters.threadTypes.includes(r.threadType)) return false
    if (filters.endConnections.length && !filters.endConnections.includes(r.endConnection)) return false
    if (filters.connectionSizes.length && !filters.connectionSizes.includes(r.connectionSize)) return false
    if (filters.configurations.length && !filters.configurations.includes(r.configuration)) return false
    return true
  }), [
    filters.threadTypes, filters.endConnections,
    filters.connectionSizes, filters.configurations,
  ])
  return { data, isLoading: false, isFetching: false }
}

export function useNeedleValveIBFilterOptions() {
  const options = useMemo(() => ({
    threadTypes:     [...new Set(NEEDLE_VALVE_IB_DATA.map(r => r.threadType))].sort(),
    endConnections:  [...new Set(NEEDLE_VALVE_IB_DATA.map(r => r.endConnection))].sort(),
    connectionSizes: [...new Set(NEEDLE_VALVE_IB_DATA.map(r => r.connectionSize))].sort(),
    configurations:  [...new Set(NEEDLE_VALVE_IB_DATA.map(r => r.configuration))].sort(),
  }), [])
  return { data: options, isLoading: false }
}