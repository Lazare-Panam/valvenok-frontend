'use client'
import { useState } from 'react'
import { Box, Typography, CircularProgress } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { usePipeFittingFilterOptions, usePipeFittings } from '../components/usePipeFitting'
import { PipeFittingActiveFilters } from '../components/PipeFittingActiveFilters'
import PipeFittingTable from '../components/PipeFittingTable'
import { type PipeFittingFilters, EMPTY_PIPE_FITTING_FILTERS } from '../components/hooks'

export default function PipeFittingPage({ defaultFittingTypes }: { defaultFittingTypes?: string[] } = {}) {
  const theme = useTheme()
  const [filters, setFilters] = useState<PipeFittingFilters>({
    ...EMPTY_PIPE_FITTING_FILTERS,
    fittingTypes: defaultFittingTypes ?? [],
  })

  const { data: filterOptions, isLoading: filtersLoading } = usePipeFittingFilterOptions()
  const { data: models = [], isLoading, isFetching } = usePipeFittings(filters)

  const activeCount =
    filters.fittingTypes.length +
    filters.materials.length +
    filters.p1Sizes.length +
    filters.p1Types.length +
    filters.p2Sizes.length +
    filters.p2Types.length +
    filters.lengthVariants.length

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h1" fontWeight={800} mb={1} color="primary">
          Instrumentation Pipe Fittings{' '}
          <Box component="span" sx={{ color: 'text.primary', fontWeight: 400 }}>
            — 316 Stainless Steel
          </Box>
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
          NPT, ISO Tapered, ISO Parallel, Metric and SAE/MS thread standards.
          Filter by fitting type, size and thread. Expand any row for full specs and to request a quote.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 4 }, flex: 1 }}>
        <PipeFittingActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 2 }}>
          {isFetching && !isLoading ? 'UPDATING...' : isLoading ? 'LOADING...' : `${models.length} CONFIGURATIONS`}
        </Typography>

        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <PipeFittingTable
            models={models}
            isFetching={isFetching}
            filters={filters}
            setFilters={setFilters}
            filterOptions={filterOptions}
            filtersLoading={filtersLoading}
            activeCount={activeCount}
          />
        )}
      </Box>
    </Box>
  )
}