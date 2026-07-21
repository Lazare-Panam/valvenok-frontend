'use client'
import { useMemo, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { InverterConstantPressureSidebar, InverterConstantPressureFilterParams } from './components/InverterConstantPressureSidebar'
import { InverterConstantPressureActiveFilters } from './components/InverterConstantPressureActiveFilters'
import InverterConstantPressureTable from './components/InverterConstantPressureTable'
import { INVERTER_CONSTANT_PRESSURE_MODELS } from './components/data'

const unique = <K extends keyof typeof INVERTER_CONSTANT_PRESSURE_MODELS[number]>(key: K) =>
  [...new Set(INVERTER_CONSTANT_PRESSURE_MODELS.map(m => String(m[key])))]

const uniqueApplications = () =>
  [...new Set(INVERTER_CONSTANT_PRESSURE_MODELS.flatMap(m => m.applications))]

export default function InverterConstantPressurePage() {
  const theme = useTheme()
  const [filters, setFilters] = useState<InverterConstantPressureFilterParams>({})

  const filterOptions = {
    series: unique('series'),
    applications: uniqueApplications(),
  }

  const filtered = useMemo(() => INVERTER_CONSTANT_PRESSURE_MODELS.filter(m =>
    (!filters.series || filters.series.includes(m.series)) &&
    (!filters.applications || filters.applications.some(a => m.applications.includes(a)))
  ), [filters])

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <InverterConstantPressureSidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} onClear={() => setFilters({})} />

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
          <Typography variant="h4" fontWeight={800} mb={1} color="primary">
            Inverter Constant Pressure Control Systems
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            HQIC · TPH_IC · TPH_IC x2 · TPM_IC · TPM_IC x2 Series. Inverter-driven pressure control for consistent flow across industrial and commercial water supply.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
          <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            {filtered.length} MODELS
          </Typography>
          <InverterConstantPressureActiveFilters filters={filters} setFilters={setFilters} />
          <InverterConstantPressureTable models={filtered} />
        </Box>
      </Box>
    </Box>
  )
}