'use client'

import { useState } from 'react'
import { Box, CircularProgress, useMediaQuery, Drawer, IconButton, Typography, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import { TMCFilterParams } from '@/src/api/pumpsApi'
import { useTMCModels, useTMCFilters } from './hooks/useTMC'
import { TMCSidebar } from './components/TMCSidebar'
import { TMCActiveFilters } from './components/TMCActiveFilters'
import TMCTable from './components/TMCTable'

export default function TMCPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<TMCFilterParams>({})
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useTMCFilters()
  const { data: models = [], isLoading: modelsLoading, isFetching } = useTMCModels(filters)

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      {!isMobile && (
        <TMCSidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} loading={filtersLoading} onClear={() => setFilters({})} />
      )}

      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <TMCSidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} loading={filtersLoading} onClear={() => setFilters({})} />
      </Drawer>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} alignItems="center">
            <Box component="img"
              src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1776783644/a30a791c-2549-42c7-b2ca-73e435c3427b.png"
              alt="TMC Sewage Pump"
              sx={{ width: 140, height: 140, objectFit: 'contain', p: 1 }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" fontWeight={800} color="primary.main" sx={{ mb: 1 }}>
                TMC Series{' '}
                <Box component="span" sx={{ color: 'text.primary', fontWeight: 400 }}>
                  — Heavy Duty Sewage Submersible Pumps
                </Box>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mb: 3 }}>
                High-performance submersible sewage pumps for demanding wastewater applications.
                Available from 1.85kW to 34kW with delivery sizes from 80mm to 150mm,
                auto coupling systems, and optional inbuilt TOP and moisture sensor configurations.
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

        <Box sx={{ p: { xs: 2, md: 4 } }}>
          {isMobile && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
              <FilterListIcon />
            </IconButton>
          )}
          <TMCActiveFilters filters={filters} setFilters={setFilters} />
          {modelsLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
              <CircularProgress />
            </Box>
          ) : (
            <TMCTable models={models} />
          )}
        </Box>
      </Box>
    </Box>
  )
}