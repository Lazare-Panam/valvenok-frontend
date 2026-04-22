'use client'

import { useState } from 'react'
import {
  Box, Typography, CircularProgress,
  useMediaQuery, Drawer, IconButton
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import { usePumpsGridFilters, usePumpsGridItems } from './usePumpGrid'

import { AllPumpsSidebar } from './components/AllPumpsSide'
import { AllPumpsActiveFilters } from './components/AllPumpsActiveFilters'
import AllPumpsTable from './components/AllPumpsTable'
import { Filters, EMPTY_FILTERS } from './components/types'

export default function AllPumpsPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = usePumpsGridFilters()
  const { data: models = [], isLoading, isFetching } = usePumpsGridItems(filters)

  const activeCount = Object.entries(filters).filter(([_, v]) =>
    v !== undefined && (!Array.isArray(v) || v.length > 0)
  ).length

  const sidebar = (
    <AllPumpsSidebar
      filters={filters}
      setFilters={setFilters}
      filterOptions={filterOptions}
      filtersLoading={filtersLoading}
      activeCount={activeCount}
    />
  )

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      {!isMobile && sidebar}
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
          <Typography variant="h4" fontWeight={800} color="primary.main" mb={1}>
            Pump Catalogue{' '}
            <Box component="span" sx={{ color: 'text.primary', fontWeight: 400 }}>— All Models</Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            Browse the complete Panam Valves pump range. Filter by any combination of specs —
            results update automatically.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, md: 4 } }}>
          {isMobile && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
              <FilterListIcon />
            </IconButton>
          )}

          <AllPumpsActiveFilters
            filters={filters}
            setFilters={setFilters}
            filterOptions={filterOptions}
          />

          <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 2 }}>
            {isFetching && !isLoading ? 'UPDATING...' : isLoading ? 'LOADING...' : `${models.length} MODELS`}
          </Typography>

          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
              <CircularProgress />
            </Box>
          ) : (
            <AllPumpsTable models={models} isFetching={isFetching} />
          )}
        </Box>
      </Box>
    </Box>
  )
}