'use client'
import { useState } from 'react'
import { Box, Typography, CircularProgress } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { useBallValveFilterOptions, useBallValves } from './components/useBallValve'
import { BallValveActiveFilters } from './components/BallValvesActiveFilters'
import BallValveTable from './components/BallValveTable'
import { type BallValveFilters, EMPTY_BALL_VALVE_FILTERS } from './components/types'

export default function BallValvePage() {
  const theme = useTheme()
  const [filters, setFilters] = useState<BallValveFilters>(EMPTY_BALL_VALVE_FILTERS)

  const { data: filterOptions, isLoading: filtersLoading } = useBallValveFilterOptions()
  const { data: models = [], isLoading, isFetching } = useBallValves(filters)

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} color="primary">
          Ball Valves{' '}
          <Box component="span" sx={{ color: 'text.primary', fontWeight: 400 }}>
            — 2-Way, 3-Way & High Bore
          </Box>
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          316 Stainless Steel. NPT, ISO Tapered, ISO Parallel, Metric and Tube Fitting connections.
          Filter by series, thread type, size and pressure rating.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['SS316', '2-Way / 3-Way / High Bore', 'NPT / BSPT / BSPP', 'Metric / Tube', '1/4" – 2"'].map(s => (
            <Box key={s} sx={{
              px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600,
              bgcolor: alpha(theme.palette.primary.main, 0.08),
              color: theme.palette.primary.dark,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <BallValveActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 2 }}>
          {isFetching && !isLoading ? 'UPDATING...' : isLoading ? 'LOADING...' : `${models.length} CONFIGURATIONS`}
        </Typography>
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <Box sx={{ flex: 1, minHeight: 0 }}>
            <BallValveTable
              models={models}
              isFetching={isFetching}
              filters={filters}
              setFilters={setFilters}
              filterOptions={filterOptions}
              filtersLoading={filtersLoading}
              activeCount={activeCount}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}