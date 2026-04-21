'use client'

import { useState } from 'react'
import { Box, CircularProgress, useMediaQuery, Drawer, IconButton, Typography, Stack } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import { TGAFilterParams } from '@/src/api/pumpsApi'
import { useTGAModels, useTGAFilters } from './hooks/useTGA'

import { TGASidebar } from './components/TGASidebar'
import { TGAActiveFilters } from './components/TGAActiveFilters'
import TGATable from './components/TGATable'

export default function TGAPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<TGAFilterParams>({})
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useTGAFilters()
  const { data: models = [], isLoading: modelsLoading, isFetching } = useTGAModels(filters)

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      {!isMobile && (
        <TGASidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} loading={filtersLoading} onClear={() => setFilters({})} />
      )}

      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <TGASidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} loading={filtersLoading} onClear={() => setFilters({})} />
      </Drawer>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} alignItems="center">
            <Box component="img"
              src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1776778633/8ed24bdc-665a-40d4-9cfa-25ff84a3d372.png"
              alt="TGA Pump"
              sx={{ width: 140, height: 140, objectFit: 'contain', p: 1 }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" fontWeight={800} color="primary.main" sx={{ mb: 1 }}>
                TGA Series{' '}
                <Box component="span" sx={{ color: 'text.primary', fontWeight: 400 }}>
                  — Submersible Sewage Pumps
                </Box>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mb: 3 }}>
                Heavy duty submersible sewage pumps for handling solids up to 80mm.
                Available with delivery sizes from 50mm to 100mm at 1450 rpm, 400V three phase.
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
          <TGAActiveFilters filters={filters} setFilters={setFilters} />
          {modelsLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
              <CircularProgress />
            </Box>
          ) : (
            <TGATable models={models} />
          )}
        </Box>
      </Box>
    </Box>
  )
}