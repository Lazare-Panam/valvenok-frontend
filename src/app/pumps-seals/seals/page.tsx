'use client'
import { useState, useMemo } from 'react'
import {
  Box, Typography, CircularProgress, useMediaQuery, IconButton, Button
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useMechanicalSealFilters, useMechanicalSeals } from './hooks/useMechanicalSeals'
import { MechanicalSealsActiveFilters } from './components/MechanicalSealsActiveFilters'
import MechanicalSealsTable from './components/MechanicalSealsTable'
import { SealFamilyGrid } from './components/SealFamilyGrid'
import { groupIntoFamilies, getFamilyCode, SealFamily } from './utils/sealFamily'
import { SealFilters, EMPTY_SEAL_FILTERS } from './hooks/types'

export default function MechanicalSealsPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [filters, setFilters] = useState<SealFilters>(EMPTY_SEAL_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedFamily, setSelectedFamily] = useState<SealFamily | null>(null)

  const { data: filterOptions, isLoading: filtersLoading } = useMechanicalSealFilters()
  const { data: allModels = [], isLoading, isFetching } = useMechanicalSeals(filters)

  // Grid view = unfiltered families. Detail view = variants of selected family,
  // further filtered by the sidebar filters.
  const families = useMemo(() => groupIntoFamilies(allModels), [allModels])
  const visibleModels = useMemo(() => {
    if (!selectedFamily) return allModels
    return allModels.filter(s => getFamilyCode(s.partNumber) === selectedFamily.code)
  }, [allModels, selectedFamily])

  const activeCount =
    filters.shaftSizes.length +
    filters.sealSizesMm.length +
    filters.sealSizesInch.length

  const handleBack = () => {
    setSelectedFamily(null)
    setFilters(EMPTY_SEAL_FILTERS)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>

      {/* Header */}
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        {selectedFamily ? (
          <>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={handleBack}
              sx={{ mb: 2, textTransform: 'none', fontWeight: 700 }}
            >
              Back to all models
            </Button>
            <Typography variant="h4" fontWeight={800} mb={1} color="primary" sx={{ fontFamily: 'monospace' }}>
              {selectedFamily.code}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
              {selectedFamily.variantCount} variants · {selectedFamily.sizeRange}
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h4" fontWeight={800} mb={1} color="primary">
              Mechanical Seals
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
              Browse the complete mechanical seals range. Select a model to view its variants and pricing.
            </Typography>
          </>
        )}
      </Box>

      {/* Body */}
      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <CircularProgress color="primary" />
          </Box>
        ) : !selectedFamily ? (
          // GRID VIEW
          <SealFamilyGrid families={families} onSelect={setSelectedFamily} />
        ) : (
          // DETAIL VIEW (existing table)
          <>
            {isMobile && (
              <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
                <FilterListIcon />
              </IconButton>
            )}
            <MechanicalSealsActiveFilters filters={filters} setFilters={setFilters} />
            <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
              {isFetching ? 'UPDATING...' : `${visibleModels.length} VARIANTS`}
            </Typography>
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
          </>
        )}
      </Box>
    </Box>
  )
}