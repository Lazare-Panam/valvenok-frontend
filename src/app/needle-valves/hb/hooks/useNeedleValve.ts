import { useMemo } from 'react'
import { NEEDLE_VALVE_HB_DATA } from '../components/needleValveHBData'
import { NeedleValveHBFilters } from './types'

export function useNeedleValvesHB(filters: NeedleValveHBFilters) {
  const data = useMemo(() => {
    return NEEDLE_VALVE_HB_DATA.filter(r => {
      if (filters.valveTypes.length && !filters.valveTypes.includes(r.valveType)) return false
      if (filters.seats.length && !filters.seats.includes(r.seat)) return false
      if (filters.bodyMaterials.length && !filters.bodyMaterials.includes(r.bodyMaterial)) return false
      if (filters.endConnections.length && !filters.endConnections.includes(r.endConnection)) return false
      if (filters.connectionSizes.length && !filters.connectionSizes.includes(r.connectionSize)) return false
      if (filters.workingPressures.length && !filters.workingPressures.includes(r.workingPressure)) return false
      return true
    })
  }, [filters])

  return { data, isLoading: false, isFetching: false }
}

export function useNeedleValveHBFilterOptions() {
  const options = useMemo(() => ({
    valveTypes:      [...new Set(NEEDLE_VALVE_HB_DATA.map(r => r.valveType))].sort(),
    seats:           [...new Set(NEEDLE_VALVE_HB_DATA.map(r => r.seat))].sort(),
    bodyMaterials:   [...new Set(NEEDLE_VALVE_HB_DATA.map(r => r.bodyMaterial))].sort(),
    endConnections:  [...new Set(NEEDLE_VALVE_HB_DATA.map(r => r.endConnection))].sort(),
    connectionSizes: [...new Set(NEEDLE_VALVE_HB_DATA.map(r => r.connectionSize))].sort(),
    workingPressures:[...new Set(NEEDLE_VALVE_HB_DATA.map(r => r.workingPressure))].sort(),
  }), [])

  return { data: options, isLoading: false }
}