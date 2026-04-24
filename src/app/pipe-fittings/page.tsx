'use client'
import { useState } from 'react'
import {
  Box, Typography, CircularProgress,
  useMediaQuery, Drawer, IconButton
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import { usePipeFittingFilterOptions, usePipeFittings } from './components/usePipeFitting'
import { PipeFittingSidebar } from './components/PipeFittingSidebar'
import { PipeFittingActiveFilters } from './components/PipeFittingActiveFilters'
import PipeFittingTable from './components/PipeFittingTable'
import { type PipeFittingFilters, EMPTY_PIPE_FITTING_FILTERS } from './components/hooks'


export default function PipeFittingPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<PipeFittingFilters>(EMPTY_PIPE_FITTING_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = usePipeFittingFilterOptions()
  const { data: models = [], isLoading, isFetching } = usePipeFittings(filters)

  const activeCount =
    filters.fittingTypes.length +
    filters.materials.length +
    filters.p1Sizes.length +
    filters.p1Types.length +
    filters.p2Sizes.length +
    filters.p2Types.length +
    filters.lengthVariants.length

  const sidebar = (
    <PipeFittingSidebar
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
            Instrumentation Pipe Fittings{' '}
            <Box component="span" sx={{ color: 'text.primary', fontWeight: 400 }}>
              — 316 Stainless Steel
            </Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            NPT, ISO Tapered, ISO Parallel, Metric and SAE/MS thread standards.
            Filter by fitting type, size and thread. Expand any row for full specs and to request a quote.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, md: 4 } }}>
          {isMobile && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
              <FilterListIcon />
            </IconButton>
          )}

          <PipeFittingActiveFilters filters={filters} setFilters={setFilters} />

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
            <PipeFittingTable models={models} isFetching={isFetching} />
          )}
        </Box>
      </Box>
    </Box>
  )
}