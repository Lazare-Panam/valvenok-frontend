import { useMemo } from 'react'
import { NEEDLE_VALVE_HP_DATA } from '../data/needleValveHPData'
import { type NeedleValveHPFilters } from './types'

export function useNeedleValvesHP(filters: NeedleValveHPFilters) {
  const data = useMemo(() => NEEDLE_VALVE_HP_DATA.filter(r => {
    if (filters.threadTypes.length && !filters.threadTypes.includes(r.threadType)) return false
    if (filters.endConnections.length && !filters.endConnections.includes(r.endConnection)) return false
    if (filters.connectionSizes.length && !filters.connectionSizes.includes(r.connectionSize)) return false
    if (filters.configurations.length && !filters.configurations.includes(r.configuration)) return false
    if (filters.workingPressures.length && !filters.workingPressures.includes(r.workingPressure)) return false
    return true
  }), [
    filters.threadTypes, filters.endConnections, filters.connectionSizes,
    filters.configurations, filters.workingPressures,
  ])
  return { data, isLoading: false, isFetching: false }
}

export function useNeedleValveHPFilterOptions() {
  const options = useMemo(() => ({
    threadTypes:     [...new Set(NEEDLE_VALVE_HP_DATA.map(r => r.threadType))].sort(),
    endConnections:  [...new Set(NEEDLE_VALVE_HP_DATA.map(r => r.endConnection))].sort(),
    connectionSizes: [...new Set(NEEDLE_VALVE_HP_DATA.map(r => r.connectionSize))].sort(),
    configurations:  [...new Set(NEEDLE_VALVE_HP_DATA.map(r => r.configuration))].sort(),
    workingPressures:[...new Set(NEEDLE_VALVE_HP_DATA.map(r => r.workingPressure))].sort(),
  }), [])
  return { data: options, isLoading: false }
}