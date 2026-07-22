'use client'
import { useMemo, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ImmersiblePumpSidebar, ImmersiblePumpFilterParams } from './components/ImmersiblePumpSidebar'
import { ImmersiblePumpActiveFilters } from './components/ImmersiblePumpActiveFilters'
import ImmersiblePumpTable from './components/ImmersiblePumpTable'
import { IMMERSIBLE_PUMP_MODELS } from './components/data'

const unique = <K extends keyof typeof IMMERSIBLE_PUMP_MODELS[number]>(key: K) =>
  [...new Set(IMMERSIBLE_PUMP_MODELS.map(m => String(m[key])))]

export default function ImmersiblePumpProductsPage() {
  const theme = useTheme()
  const [filters, setFilters] = useState<ImmersiblePumpFilterParams>({})

  const filterOptions = {
    series: unique('series'),
    subSeries: unique('subSeries'),
    frequencyHz: unique('frequencyHz').sort((a, b) => Number(a) - Number(b)),
  }

  const filtered = useMemo(() => IMMERSIBLE_PUMP_MODELS.filter(m =>
    (!filters.series || filters.series.includes(m.series)) &&
    (!filters.subSeries || filters.subSeries.includes(m.subSeries)) &&
    (!filters.frequencyHz || filters.frequencyHz.includes(m.frequencyHz))
  ), [filters])

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <ImmersiblePumpSidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} onClear={() => setFilters({})} />

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
          <Typography variant="h4" fontWeight={800} mb={1} color="primary">
            Immersible Pump — Model Range
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            TPRK_E, TPHK and TPK series across 50Hz and 60Hz operation — {IMMERSIBLE_PUMP_MODELS.length} models total.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
          <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            {filtered.length} MODELS
          </Typography>
          <ImmersiblePumpActiveFilters filters={filters} setFilters={setFilters} />
          <ImmersiblePumpTable models={filtered} />
        </Box>
      </Box>
    </Box>
  )
}