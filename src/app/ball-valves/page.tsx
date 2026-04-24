'use client'
import { useState } from 'react'
import {
  Box, Typography, CircularProgress,
  useMediaQuery, Drawer, IconButton
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useBallValveFilterOptions, useBallValves } from './components/useBallValve'
import { BallValveSidebar } from './components/BallValveSidebar'
import { BallValveActiveFilters } from './components/BallValvesActiveFilters'
import BallValveTable from './components/BallValveTable'
import { type BallValveFilters, EMPTY_BALL_VALVE_FILTERS } from './components/types'

export default function BallValvePage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<BallValveFilters>(EMPTY_BALL_VALVE_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useBallValveFilterOptions()
  const { data: models = [], isLoading, isFetching } = useBallValves(filters)

  const activeCount =
    filters.series.length +
    filters.bodyMaterials.length +
    filters.threadTypes.length +
    filters.endConnectionTypes.length +
    filters.connectionSizes.length +
    filters.configurations.length +
    filters.seatMaterials.length +
    filters.handles.length +
    filters.pressureRatings.length +
    filters.options.length

  const sidebar = (
    <BallValveSidebar
      filters={filters}
      setFilters={setFilters}
      filterOptions={filterOptions}
      filtersLoading={filtersLoading}
      activeCount={activeCount}
    />
  )

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', minHeight: '100vh', bgcolor: 'background.default' }}>
      {!isMobile && sidebar}
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{
          p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)',
          bgcolor: 'background.paper'
        }}>
          <Typography variant="h4" fontWeight={800} mb={1} color="primary">
            Ball Valves{' '}
            <Box component="span" sx={{ color: 'text.primary', fontWeight: 400 }}>
              — 2-Way, 3-Way & High Bore
            </Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            316 Stainless Steel. NPT, ISO Tapered, ISO Parallel, Metric and Tube Fitting connections.
            Filter by series, thread type, size and pressure rating.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, md: 4 } }}>
          {isMobile && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
              <FilterListIcon />
            </IconButton>
          )}

          <BallValveActiveFilters filters={filters} setFilters={setFilters} />

          <Typography variant="caption" fontWeight={700} color="text.disabled"
            sx={{ display: 'block', mb: 2 }}>
            {isFetching && !isLoading
              ? 'UPDATING...'
              : isLoading
              ? 'LOADING...'
              : `${models.length} CONFIGURATIONS`}
          </Typography>

          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
              <CircularProgress color="primary" />
            </Box>
          ) : (
            <BallValveTable models={models} isFetching={isFetching} />
          )}
        </Box>
      </Box>
    </Box>
  )
}