'use client'

import { useState } from 'react'
import {
  Box, CircularProgress, useMediaQuery,
  Drawer, IconButton, Typography, Stack
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'

import { useSubmersibleModels, useSubmersibleFilters } from './hooks/useSubmersible'
import { SubmersibleSidebar } from './components/SubmersibleSidebar'
import { SubmersibleActiveFilters } from './components/SubmersibleActiveFilters'
import SubmersibleTable from './components/SubmersibleTable'
import { SubmersibleFilterParams } from '@/src/api/pumpsApi'

export default function SubmersiblePage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<SubmersibleFilterParams>({})
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useSubmersibleFilters()
  const { data: models = [], isLoading: modelsLoading, isFetching } = useSubmersibleModels(filters)

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      {!isMobile && (
        <SubmersibleSidebar
          filters={filters}
          setFilters={setFilters}
          filterOptions={filterOptions}
          loading={filtersLoading}
          onClear={() => setFilters({})}
        />
      )}

      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <SubmersibleSidebar
          filters={filters}
          setFilters={setFilters}
          filterOptions={filterOptions}
          loading={filtersLoading}
          onClear={() => setFilters({})}
        />
      </Drawer>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} alignItems="center">
            <Box
              component="img"
              sx={{ width: 160, height: 160, objectFit: 'contain', p: 2 }}
              alt="Submersible Pump"
              src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1776683042/4-inch-ss-in_gxgpc1.png"
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" fontWeight={800} color="primary.main" sx={{ mb: 1 }}>
                TS/TN/TL Series{' '}
                <Box component="span" sx={{ color: 'text.primary', fontWeight: 400 }}>
                  — Stainless Steel Submersible Pumps
                </Box>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mb: 3 }}>
                Borehole submersible pumps in AISI 304, 316 and 904L. Available in 4", 6", 8" and 10" 
                diameters with flows up to 215 m³/hr and heads up to 870m.
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

          <SubmersibleActiveFilters filters={filters} setFilters={setFilters} />

          {modelsLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
              <CircularProgress />
            </Box>
          ) : (
            <SubmersibleTable models={models} />
          )}
        </Box>
      </Box>
    </Box>
  )
}