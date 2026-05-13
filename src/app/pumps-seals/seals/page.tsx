'use client'
import { useState } from 'react'
import {
  Box, Typography, CircularProgress, useMediaQuery, IconButton, Stack, Chip
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useMechanicalSealFilters, useMechanicalSeals } from './hooks/useMechanicalSeals'
import { MechanicalSealsActiveFilters } from './components/MechanicalSealsActiveFilters'
import MechanicalSealsTable from './components/MechanicalSealsTable'
import { SealFilters, EMPTY_SEAL_FILTERS } from './hooks/types'

export default function MechanicalSealsPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<SealFilters>(EMPTY_SEAL_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useMechanicalSealFilters()
  const { data: models = [], isLoading, isFetching } = useMechanicalSeals(filters)

  const activeCount =
    filters.shaftSizes.length +
    filters.sealSizesMm.length +
    filters.sealSizesInch.length

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>

      {/* Header */}
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} color="primary">
          Mechanical Seals
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          Browse the complete mechanical seals range. Filter by shaft size and seal size —
          available in both metric and imperial.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['Metric & Imperial', 'Shaft Size Filter', 'Seal Size Filter'].map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark, border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}` }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Body */}
      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && (
          <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
            <FilterListIcon />
          </IconButton>
        )}

        <MechanicalSealsActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          {isFetching && !isLoading ? 'UPDATING...' : isLoading ? 'LOADING...' : `${models.length} SEALS`}
        </Typography>

        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <MechanicalSealsTable
            models={models}
            isFetching={isFetching}
            filters={filters}
            setFilters={setFilters}
            filterOptions={filterOptions}
            filtersLoading={filtersLoading}
            activeCount={activeCount}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        )}
      </Box>
    </Box>
  )
}