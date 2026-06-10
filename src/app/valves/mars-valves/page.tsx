'use client'
import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { type MarsFilters, type MarsSeriesDTO, EMPTY_MARS_FILTERS, MARS_DESCRIPTION } from './components/types'
import { MARS_BALL_VALVES_DATA, getPortTypes, getEndConnections, getOptionTags } from './components/data'
import { MarsActiveFilters } from './components/MarsActiveFilters'
import MarsTable from './components/MarsGrid'
import { type AvailableCountsMars } from './components/MarsSidebar'

function applyFilters(data: MarsSeriesDTO[], filters: MarsFilters, exclude: keyof MarsFilters | ''): MarsSeriesDTO[] {
  return data.filter(s => {
    if (exclude !== 'series' && filters.series.length && !filters.series.includes(s.seriesCode)) return false
    if (exclude !== 'categories' && filters.categories.length && !filters.categories.includes(s.category)) return false
    if (exclude !== 'portTypes' && filters.portTypes.length) {
      const p = getPortTypes(s)
      if (!filters.portTypes.some(v => p.includes(v))) return false
    }
    if (exclude !== 'endConnections' && filters.endConnections.length) {
      const e = getEndConnections(s)
      if (!filters.endConnections.some(v => e.includes(v))) return false
    }
    if (exclude !== 'fireSafe' && filters.fireSafe.length && !filters.fireSafe.includes(s.fireSafe)) return false
    if (exclude !== 'options' && filters.options.length) {
      const o = getOptionTags(s)
      if (!filters.options.some(v => o.includes(v))) return false
    }
    return true
  })
}

function countBy<T>(items: T[], keyFn: (item: T) => string | string[]): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const keys = keyFn(item)
    const arr = Array.isArray(keys) ? keys : [keys]
    for (const k of arr) counts[k] = (counts[k] ?? 0) + 1
  }
  return counts
}

export default function MarsBallValvesPage() {
  const theme = useTheme()
  const [filters, setFilters] = useState<MarsFilters>(EMPTY_MARS_FILTERS)

  const models = useMemo(() => applyFilters(MARS_BALL_VALVES_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsMars>(() => ({
    series: countBy(applyFilters(MARS_BALL_VALVES_DATA, filters, 'series'), s => s.seriesCode),
    categories: countBy(applyFilters(MARS_BALL_VALVES_DATA, filters, 'categories'), s => s.category),
    portTypes: countBy(applyFilters(MARS_BALL_VALVES_DATA, filters, 'portTypes'), s => getPortTypes(s)),
    endConnections: countBy(applyFilters(MARS_BALL_VALVES_DATA, filters, 'endConnections'), s => getEndConnections(s)),
    fireSafe: countBy(applyFilters(MARS_BALL_VALVES_DATA, filters, 'fireSafe'), s => s.fireSafe),
    options: countBy(applyFilters(MARS_BALL_VALVES_DATA, filters, 'options'), s => getOptionTags(s)),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} color="primary">
          {MARS_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800 }}>
          {MARS_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {MARS_DESCRIPTION.specs.map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark, border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}` }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <MarsActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 2 }}>
          {`${models.length} SERIES`}
        </Typography>
        <Box sx={{ flex: 1, minHeight: 0 }}>
          <MarsTable models={models} filters={filters} setFilters={setFilters} availableCounts={availableCounts} activeCount={activeCount} />
        </Box>
      </Box>
    </Box>
  )
}