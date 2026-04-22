'use client'

import { useState } from 'react'
import {
  Box, Typography, CircularProgress,
  useMediaQuery, Drawer, IconButton
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useJicFittingFilters, useJicFittings } from './hooks/useJicFittings'
import { JicFittingsSidebar } from './components/JicFittingsSidebar'
import { JicFittingsActiveFilters } from './components/JicFittingsActiveFilter'
import JicFittingsTable from './components/JicFittingsTable'
import { JicFilters, EMPTY_JIC_FILTERS } from './hooks/types'

export default function JicFittingsPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<JicFilters>(EMPTY_JIC_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useJicFittingFilters()
  const { data: models = [], isLoading, isFetching } = useJicFittings(filters)

  const activeCount =
    filters.threadTypes.length + filters.tubeODs.length +
    filters.tubeODsMm.length + filters.jicSizes.length + filters.threadSizes.length

  const sidebar = (
    <JicFittingsSidebar
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
            JIC Fittings{' '}
            <Box component="span" sx={{ color: 'text.primary', fontWeight: 400 }}>— 37° Flare Series</Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            Browse the complete JIC fitting range. 316 Stainless Steel, rated to 6,000 PSI.
            Filter by thread type, tube OD, JIC size and thread size.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, md: 4 } }}>
          {isMobile && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
              <FilterListIcon />
            </IconButton>
          )}

          <JicFittingsActiveFilters filters={filters} setFilters={setFilters} />

          <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 2 }}>
            {isFetching && !isLoading ? 'UPDATING...' : isLoading ? 'LOADING...' : `${models.length} FITTINGS`}
          </Typography>

          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
              <CircularProgress />
            </Box>
          ) : (
            <JicFittingsTable models={models} isFetching={isFetching} />
          )}
        </Box>
      </Box>
    </Box>
  )
}