'use client'
import { useState, useMemo } from 'react'
import {
  Box, Typography, CircularProgress, useMediaQuery, IconButton, Button,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { useMechanicalSealFilters, useMechanicalSeals } from '../hooks/useMechanicalSeals'
import { MechanicalSealsActiveFilters } from './MechanicalSealsActiveFilters'
import MechanicalSealsTable from './MechanicalSealsTable'
import { SealFilters, EMPTY_SEAL_FILTERS } from '../hooks/types'
import { SealModelEntry } from './sealCatalog'

export const getFamilyCode = (partNumber: string): string =>
  partNumber.split(/\s|\(/)[0].trim()

interface Props {
  model: SealModelEntry
  onBack: () => void
}

export function SealsDetailView({ model, onBack }: Props) {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')

  const [filters, setFilters] = useState<SealFilters>(EMPTY_SEAL_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useMechanicalSealFilters()
  const { data: allModels = [], isLoading, isFetching } = useMechanicalSeals(filters)

  const visibleModels = useMemo(
    () => allModels.filter(s => getFamilyCode(s.partNumber) === model.code),
    [allModels, model.code],
  )

  const activeCount =
    filters.shaftSizes.length +
    filters.sealSizesMm.length +
    filters.sealSizesInch.length

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={onBack}
          sx={{ mb: 2, textTransform: 'none', fontWeight: 700 }}
        >
          Back to all models
        </Button>
        <Typography variant="h4" fontWeight={800} mb={1} color="primary" sx={{ fontFamily: 'monospace' }}>
          {model.code}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
          {model.subtitle} — filter by shaft size and seal size to find your variant.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && (
          <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
            <FilterListIcon />
          </IconButton>
        )}

        <MechanicalSealsActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          {isFetching && !isLoading ? 'UPDATING...' : isLoading ? 'LOADING...' : `${visibleModels.length} VARIANTS`}
        </Typography>

        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <MechanicalSealsTable
            models={visibleModels}
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