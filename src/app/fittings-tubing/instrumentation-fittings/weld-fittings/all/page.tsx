'use client'
import { useState } from 'react'
import { Box, Typography, CircularProgress, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { useWeldFittingFilterOptions, useWeldFittings } from '../hooks/types'
import WeldFittingTable from '../components/WeldfittingTable'
import { WeldFittingActiveFilters } from '../components/WeldFittingActiveFilters'
import { type WeldFittingFilters, EMPTY_WELD_FITTING_FILTERS } from '../hooks/types'
export default function WeldFittingPage({ defaultFittingTypes }: { defaultFittingTypes?: string[] } = {}) {
  const theme = useTheme()
  const [filters, setFilters] = useState<WeldFittingFilters>({
    ...EMPTY_WELD_FITTING_FILTERS,
    fittingTypes: defaultFittingTypes ?? [],
  })
  const [unitSystem, setUnitSystem] = useState<'inch' | 'mm'>('inch')

  const { data: filterOptions, isLoading: filtersLoading } = useWeldFittingFilterOptions()
  const { data: models = [], isLoading, isFetching } = useWeldFittings({
    ...filters,
    p1Units: [unitSystem],
  })

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Box>
            <Typography variant="h1" fontWeight={800} mb={1} color="primary">
              Weld Fittings{' '}
              <Box component="span" sx={{ color: 'text.primary', fontWeight: 400 }}>
                — 316 Stainless Steel
              </Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
              Tube socket weld, tube butt weld and pipe socket weld fittings.
              Available in NPT, BSPT and BSPP thread standards.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {['SS316', 'TSW / TBW / PSW', 'NPT / BSPT / BSPP', '1/8" – 2" / 6mm – 38mm'].map(s => (
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

          <ToggleButtonGroup
            value={unitSystem} exclusive
            onChange={(_, val) => { if (val) setUnitSystem(val) }}
            size="small" sx={{ alignSelf: 'flex-start', mt: 1 }}
          >
            <ToggleButton value="inch" sx={{
              fontWeight: 700, fontSize: '0.75rem', px: 2,
              '&.Mui-selected': { bgcolor: theme.palette.primary.main, color: '#fff', '&:hover': { bgcolor: theme.palette.primary.dark } },
            }}>
              Imperial (in)
            </ToggleButton>
            <ToggleButton value="mm" sx={{
              fontWeight: 700, fontSize: '0.75rem', px: 2,
              '&.Mui-selected': { bgcolor: theme.palette.primary.main, color: '#fff', '&:hover': { bgcolor: theme.palette.primary.dark } },
            }}>
              Metric (mm)
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 4 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <WeldFittingActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 2 }}>
          {isFetching && !isLoading ? 'UPDATING...' : isLoading ? 'LOADING...' : `${models.length} CONFIGURATIONS`}
        </Typography>
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <Box sx={{ flex: 1, minHeight: 0 }}>
            <WeldFittingTable
              models={models} isFetching={isFetching}
              filters={filters} setFilters={setFilters}
              filterOptions={filterOptions} filtersLoading={filtersLoading}
              activeCount={activeCount}
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}