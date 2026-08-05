'use client'
import { useMemo, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { FlowControlledPumpSidebar, FlowControlledPumpFilterParams } from './components/FlowControlledPumpSidebar'
import { FlowControlledPumpActiveFilters } from './components/FlowControlledPumpActiveFilters'
import FlowControlledPumpTable from './components/FlowControlledPumpTable'
import { FLOW_CONTROLLED_PUMP_MODELS } from './components/data'

const unique = <K extends keyof typeof FLOW_CONTROLLED_PUMP_MODELS[number]>(key: K) =>
  [...new Set(FLOW_CONTROLLED_PUMP_MODELS.map(m => String(m[key])))]

export default function FlowControlledPumpProductsPage() {
  const theme = useTheme()
  const [filters, setFilters] = useState<FlowControlledPumpFilterParams>({})

  const filterOptions = {
    series: unique('series'),
    frequencyHz: unique('frequencyHz').sort((a, b) => Number(a) - Number(b)),
  }

  const filtered = useMemo(() => FLOW_CONTROLLED_PUMP_MODELS.filter(m =>
    (!filters.series || filters.series.includes(m.series)) &&
    (!filters.frequencyHz || filters.frequencyHz.includes(m.frequencyHz))
  ), [filters])

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <FlowControlledPumpSidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} onClear={() => setFilters({})} />

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
          <Typography variant="h1" fontWeight={800} mb={1} color="primary">
            Automatic Flow-Controlled Pump — Model Range
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            HQC and TQC series across 50Hz and 60Hz operation, for downward pressurization installations below a water tower.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
          <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            {filtered.length} MODELS
          </Typography>
          <FlowControlledPumpActiveFilters filters={filters} setFilters={setFilters} />
          <FlowControlledPumpTable models={filtered} />
        </Box>
      </Box>
    </Box>
  )
}