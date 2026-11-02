'use client'
import { useState } from 'react'
import { Box, Typography, CircularProgress } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'

import { useJICProductFilterOptions, useJICProducts } from '../hooks/types'
import { JICProductActiveFilters } from '../components/JICActiveFilters'
import JICProductTable from '../components/JICProductTable'
import { type JICProductFilters, EMPTY_JIC_PRODUCT_FILTERS } from '../hooks/types'

export default function JICProductPage({ defaultFittingTypes }: { defaultFittingTypes?: string[] } = {}) {
  const theme = useTheme()
  const [filters, setFilters] = useState<JICProductFilters>({
    ...EMPTY_JIC_PRODUCT_FILTERS,
    fittingTypes: defaultFittingTypes ?? [],
  })

  const { data: filterOptions, isLoading: filtersLoading } = useJICProductFilterOptions()
  const { data: models = [], isLoading, isFetching } = useJICProducts(filters)

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h1" fontWeight={800} mb={1} color="primary">
          37° Flared JIC Fittings{' '}
          <Box component="span" sx={{ color: 'text.primary', fontWeight: 400 }}>
            — 316 Stainless Steel
          </Box>
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          Male and female connectors, unions, elbows, tees and adapters in 37° JIC flare.
          Available across NPT, BSPT, BSPP, SAE/MS and Metric thread standards.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['SS316', '37° JIC Flare', 'NPT / BSPT / BSPP', 'SAE/MS / Metric', '1/8" – 2"'].map(s => (
            <Box key={s} sx={{
              px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600,
              bgcolor: alpha(theme.palette.primary.main, 0.08),
              color: theme.palette.primary.dark,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <JICProductActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 2 }}>
          {isFetching && !isLoading ? 'UPDATING...' : isLoading ? 'LOADING...' : `${models.length} CONFIGURATIONS`}
        </Typography>
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <Box sx={{ flex: 1, minHeight: 0 }}>
            <JICProductTable
              models={models}
              isFetching={isFetching}
              filters={filters}
              setFilters={setFilters}
              filterOptions={filterOptions}
              filtersLoading={filtersLoading}
              activeCount={activeCount}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}