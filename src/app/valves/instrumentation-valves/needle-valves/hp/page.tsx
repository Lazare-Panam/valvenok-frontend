'use client'
import { useState } from 'react'
import { Box, Typography, CircularProgress, useMediaQuery, Drawer, IconButton } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useNeedleValvesHP, useNeedleValveHPFilterOptions } from './hooks/useNeedleValveHP'

import { HPSidebar } from './components/HPSidebar'
import { HPActiveFilters } from './components/HPActiveFilters'
import HPTable from './components/HPTable'
import { type NeedleValveHPFilters, EMPTY_HP_FILTERS } from './hooks/types'
import { SERIES_DESCRIPTIONS } from '../ib/hooks/types'

export default function NeedleValveHPPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<NeedleValveHPFilters>(EMPTY_HP_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useNeedleValveHPFilterOptions()
  const { data: models = [], isLoading, isFetching } = useNeedleValvesHP(filters)

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)
  const { title, description, specs } = SERIES_DESCRIPTIONS.HP

  const sidebar = <HPSidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} filtersLoading={filtersLoading} activeCount={activeCount} />

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: theme.palette.primary.main }}>
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
        <HPActiveFilters filters={filters} setFilters={setFilters} />
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
            <HPTable models={models} isFetching={isFetching} />
          )}
        </Box>
        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      </Box>
    </Box>
  )
}