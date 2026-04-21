'use client'

import { useState } from 'react'
import { Box, CircularProgress, useMediaQuery, Drawer, IconButton, Typography, Stack, Chip } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import { TSLFilterParams } from '@/src/api/pumpsApi'
import { useTSLModels, useTSLFilters } from './hooks/useTSL'
import { TSLSidebar } from './components/TSLSidebar'
import { TSLActiveFilters } from './components/TSLActiveFilters'
import TSLTable from './components/TSLTable'

export default function TSLPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<TSLFilterParams>({})
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useTSLFilters()
  const { data: models = [], isLoading: modelsLoading, isFetching } = useTSLModels(filters)

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      {!isMobile && (
        <TSLSidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} loading={filtersLoading} onClear={() => setFilters({})} />
      )}

      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <TSLSidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} loading={filtersLoading} onClear={() => setFilters({})} />
      </Drawer>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} alignItems="center">
            <Box component="img"
              src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1776775587/WhatsApp_Image_2026-04-16_at_3.49.25_PM_tdant2.jpg"
              alt="TSL Sewage Pump"
              sx={{ width: 140, height: 140, objectFit: 'contain', p: 1 }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" fontWeight={800} color="primary.main" sx={{ mb: 1 }}>
                TSL Series{' '}
                <Box component="span" sx={{ color: 'text.primary', fontWeight: 400 }}>
                  — Light Sewage & Drainage Submersible Pumps
                </Box>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mb: 3 }}>
                Vortex impeller design for handling light sewage and drainage applications.
                Available in single and three phase, 230V and 400V with inbuilt capacitor options.
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

        {/* Content */}
        <Box sx={{ p: { xs: 2, md: 4 } }}>
          {isMobile && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
              <FilterListIcon />
            </IconButton>
          )}
          <TSLActiveFilters filters={filters} setFilters={setFilters} />
          {modelsLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
              <CircularProgress />
            </Box>
          ) : (
            <TSLTable models={models} />
          )}
        </Box>
      </Box>
    </Box>
  )
}