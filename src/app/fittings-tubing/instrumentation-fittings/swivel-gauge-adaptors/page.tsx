'use client'
import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { type SGAFilters, type SwivelGaugeAdaptorDTO, EMPTY_SGA_FILTERS, SGA_DESCRIPTION } from './components/types'
import { SGA_DATA } from './components/data'
import { SGAActiveFilters } from './components/SGAActiveFilters'
import SGATable from './components/SGATable'
import { type AvailableCountsSGA } from './components/SGASidebar'

function applyFilters(data: SwivelGaugeAdaptorDTO[], filters: SGAFilters, exclude: keyof SGAFilters | ''): SwivelGaugeAdaptorDTO[] {
  return data.filter(c => {
    if (exclude !== 'types'   && filters.types.length   && !filters.types.includes(c.type))     return false
    if (exclude !== 'inlets'  && filters.inlets.length  && !filters.inlets.includes(c.inlet))   return false
    if (exclude !== 'outlets' && filters.outlets.length && !filters.outlets.includes(c.outlet)) return false
    return true
  })
}

function countBy<T>(items: T[], keyFn: (item: T) => string): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const k = keyFn(item)
    counts[k] = (counts[k] ?? 0) + 1
  }
  return counts
}

export default function SGAPage() {
  const theme = useTheme()
  const [filters, setFilters] = useState<SGAFilters>(EMPTY_SGA_FILTERS)

  const models = useMemo(() => applyFilters(SGA_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsSGA>(() => ({
    types:   countBy(applyFilters(SGA_DATA, filters, 'types'),   c => c.type),
    inlets:  countBy(applyFilters(SGA_DATA, filters, 'inlets'),  c => c.inlet),
    outlets: countBy(applyFilters(SGA_DATA, filters, 'outlets'), c => c.outlet),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} color="primary">
          {SGA_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          {SGA_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {SGA_DESCRIPTION.specs.map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark, border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}` }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <SGAActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 2 }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <Box sx={{ flex: 1, minHeight: 0 }}>
          <SGATable
            models={models}
            filters={filters}
            setFilters={setFilters}
            availableCounts={availableCounts}
            activeCount={activeCount}
          />
        </Box>
      </Box>
    </Box>
  )
}