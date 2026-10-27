'use client'
import { useState } from 'react'
import { Box, Typography, CircularProgress, useMediaQuery, Drawer, IconButton } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useNeedleValvesSB, useNeedleValveSBFilterOptions } from './hooks/useNeedleValveSB'
import { SBSidebar } from './components/SBSidebar'
import { SBActiveFilters } from './components/SBActiveFilters'
import SBTable from './components/SBTable'
import { type NeedleValveSBFilters, EMPTY_SB_FILTERS, SB_SERIES_DESCRIPTION } from './hooks/types'

export default function NeedleValveSBPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<NeedleValveSBFilters>(EMPTY_SB_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useNeedleValveSBFilterOptions()
  const { data: models = [], isLoading, isFetching } = useNeedleValvesSB(filters)

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)
  const { title, description, specs } = SB_SERIES_DESCRIPTION

  const sidebar = <SBSidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} filtersLoading={filtersLoading} activeCount={activeCount} />

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: theme.palette.primary.main }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {specs.map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark, border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}` }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}><FilterListIcon /></IconButton>}
        <SBActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 1 }}>
          {isFetching && !isLoading ? 'UPDATING...' : isLoading ? 'LOADING...' : `${models.length} CONFIGURATIONS`}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
          {!isMobile && sidebar}
          {isLoading ? (
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 300 }}>
              <CircularProgress />
            </Box>
          ) : (
            <SBTable models={models} isFetching={isFetching} />
          )}
        </Box>
        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      </Box>
    </Box>
  )
}