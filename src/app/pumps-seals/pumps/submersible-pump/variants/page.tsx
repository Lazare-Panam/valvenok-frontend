'use client'
import { useMemo, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { SubmersiblePumpSidebar, SubmersiblePumpFilterParams } from './components/SubmersiblePumpSidebar'
import { SubmersiblePumpActiveFilters } from './components/SubmersiblePumpActiveFilters'
import SubmersiblePumpTable from './components/SubmersiblePumpTable'
import { SUBMERSIBLE_PUMP_MODELS } from './components/data'

const unique = <K extends keyof typeof SUBMERSIBLE_PUMP_MODELS[number]>(key: K) =>
  [...new Set(SUBMERSIBLE_PUMP_MODELS.map(m => String(m[key])))]

export default function SubmersiblePumpProductsPage() {
  const theme = useTheme()
  const [filters, setFilters] = useState<SubmersiblePumpFilterParams>({})

  const filterOptions = {
    series: unique('series'),
    variant: unique('variant'),
    frequencyHz: unique('frequencyHz').sort((a, b) => Number(a) - Number(b)),
  }

  const filtered = useMemo(() => SUBMERSIBLE_PUMP_MODELS.filter(m =>
    (!filters.series || filters.series.includes(m.series)) &&
    (!filters.variant || filters.variant.includes(m.variant)) &&
    (!filters.frequencyHz || filters.frequencyHz.includes(m.frequencyHz))
  ), [filters])

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <SubmersiblePumpSidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} onClear={() => setFilters({})} />

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
          <Typography variant="h4" fontWeight={800} mb={1} color="primary">
            Submersible Pump — Model Range
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            PW_A and PW_E series across standard, sea water, float ball switch, low suction and level regulator variants, 50Hz and 60Hz operation.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
          <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            {filtered.length} MODELS
          </Typography>
          <SubmersiblePumpActiveFilters filters={filters} setFilters={setFilters} />
          <SubmersiblePumpTable models={filtered} />
        </Box>
      </Box>
    </Box>
  )
}