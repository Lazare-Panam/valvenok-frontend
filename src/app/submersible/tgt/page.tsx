'use client'
import { useState } from 'react'
import {
  Box, CircularProgress, useMediaQuery, Drawer, IconButton, Typography, Stack
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import { TGTFilterParams } from '@/src/api/pumpsApi'
import { useTGTModels, useTGTFilters } from './hooks/useTGT'
import { TGTSidebar } from './components/TGTSideBar'
import { TGTActiveFilters } from './components/TGTActiveFilter'
import TGTTable from './components/TGTTable'

export default function TGTPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<TGTFilterParams>({})
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useTGTFilters()
  const { data: models = [], isLoading: modelsLoading, isFetching } = useTGTModels(filters)

  const sidebar = (
    <TGTSidebar
      filters={filters}
      setFilters={setFilters}
      filterOptions={filterOptions}
      loading={filtersLoading}
      onClear={() => setFilters({})}
    />
  )

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} alignItems="center">
          <Box component="img"
            src="https://pblol2.blob.core.windows.net/valvenok-images/products/pumps/06-TGT.png"
            alt="TGT Heavy Sewage Pump"
            sx={{ width: 140, height: 140, objectFit: 'contain', p: 1 }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" fontWeight={800} color="primary.main" sx={{ mb: 1 }}>
              TGT Series{' '}
              <Box component="span" sx={{ color: 'text.primary', fontWeight: 400 }}>
                — Heavy Sewage Submersible Pumps
              </Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mb: 3 }}>
              Heavy-duty submersible pumps for sewage and wastewater applications.
              Available from 0.75kW to 9.5kW, 230V and 400V, with auto coupling and inbuilt TOP options.
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="subtitle2" color="success.main" sx={{ fontWeight: 700, cursor: 'pointer' }}>
                Contact Us ›
              </Typography>
              <Typography variant="caption" fontWeight={700} color="text.disabled">
                {isFetching ? 'UPDATING...' : `${models.length} MODELS AVAILABLE`}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && (
          <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
            <FilterListIcon />
          </IconButton>
        )}

        <TGTActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          {isFetching && !modelsLoading ? 'UPDATING...' : modelsLoading ? 'LOADING...' : `${models.length} MODELS`}
        </Typography>

        <Box sx={{
          display: 'flex', alignItems: 'stretch',
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper',
        }}>
          {!isMobile && sidebar}
          {modelsLoading ? (
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 300 }}>
              <CircularProgress />
            </Box>
          ) : (
            <TGTTable models={models} isFetching={isFetching} />
          )}
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          {sidebar}
        </Drawer>
      </Box>
    </Box>
  )
}