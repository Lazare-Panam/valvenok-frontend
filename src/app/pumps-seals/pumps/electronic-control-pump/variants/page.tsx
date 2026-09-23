'use client'
import { useMemo, useState } from 'react'
import { Box, Typography, Chip } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ElectronicControlPumpSidebar, ElectronicControlPumpFilterParams } from './components/ElectronicControlPumpSidebar'
import { ElectronicControlPumpActiveFilters } from './components/ElectronicControlPumpActiveFilters'
import ElectronicControlPumpTable from './components/ElectronicControlPumpTable'
import { ELECTRONIC_CONTROL_PUMP_MODELS } from './components/data'

const unique = <K extends keyof typeof ELECTRONIC_CONTROL_PUMP_MODELS[number]>(key: K) =>
  [...new Set(ELECTRONIC_CONTROL_PUMP_MODELS.map(m => String(m[key])))]

export default function ElectronicControlPumpProductsPage() {
  const theme = useTheme()
  const [filters, setFilters] = useState<ElectronicControlPumpFilterParams>({})

  const filterOptions = {
    series: unique('series'),
    frequencyHz: unique('frequencyHz').sort((a, b) => Number(a) - Number(b)),
    antiMicrobial: ['Yes', 'No'],
    phase: unique('phase').sort((a, b) => Number(a) - Number(b)),
  }

  const filtered = useMemo(() => ELECTRONIC_CONTROL_PUMP_MODELS.filter(m =>
    (!filters.series || filters.series.includes(m.series)) &&
    (!filters.frequencyHz || filters.frequencyHz.includes(m.frequencyHz)) &&
    (!filters.antiMicrobial || filters.antiMicrobial.includes(m.antiMicrobial ? 'Yes' : 'No')) &&
    (!filters.phase || filters.phase.includes(m.phase))
  ), [filters])

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <ElectronicControlPumpSidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} onClear={() => setFilters({})} />

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Box sx={{
          p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper',
        }}>
          <Typography variant="h1" fontWeight={800} mb={1} color="primary">
            Electronic Control Pump — Model Range
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            WQ_B, HQ_B and TQ_B series, each available with (B) or without anti-microbial construction, across 50Hz and 60Hz operation.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
          <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            {filtered.length} MODELS
          </Typography>
          <ElectronicControlPumpActiveFilters filters={filters} setFilters={setFilters} />
          <ElectronicControlPumpTable models={filtered} />
        </Box>
      </Box>
    </Box>
  )
}