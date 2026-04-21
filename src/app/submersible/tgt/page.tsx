'use client'

import { useState } from 'react'
import { Box, CircularProgress, useMediaQuery, Drawer, IconButton, Typography, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
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

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      {!isMobile && (
        <TGTSidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} loading={filtersLoading} onClear={() => setFilters({})} />
      )}

      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <TGTSidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} loading={filtersLoading} onClear={() => setFilters({})} />
      </Drawer>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} alignItems="center">
            <Box component="img"
              src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1776782296/58f06acf-fa38-4faa-be77-8e979115fe4d.png"
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

        <Box sx={{ p: { xs: 2, md: 4 } }}>
          {isMobile && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
              <FilterListIcon />
            </IconButton>
          )}
          <TGTActiveFilters filters={filters} setFilters={setFilters} />
          {modelsLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
              <CircularProgress />
            </Box>
          ) : (
            <TGTTable models={models} />
          )}
        </Box>
      </Box>
    </Box>
  )
}