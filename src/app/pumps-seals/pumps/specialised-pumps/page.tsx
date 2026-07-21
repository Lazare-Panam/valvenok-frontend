'use client'
import { useMemo, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { SpecialisedPumpSidebar, SpecialisedPumpFilterParams } from './components/SpecialisedPumpSidebar'
import { SpecialisedPumpActiveFilters } from './components/SpecialisedPumpActiveFilters'
import SpecialisedPumpTable from './components/SpecialisedPumpTable'
import { SPECIALISED_PUMP_MODELS } from './components/data'

const unique = <K extends keyof typeof SPECIALISED_PUMP_MODELS[number]>(key: K) =>
  [...new Set(SPECIALISED_PUMP_MODELS.map(m => String(m[key])))]

const uniqueApplications = () =>
  [...new Set(SPECIALISED_PUMP_MODELS.flatMap(m => m.applications))]

export default function SpecialisedPumpPage() {
  const theme = useTheme()
  const [filters, setFilters] = useState<SpecialisedPumpFilterParams>({})

  const filterOptions = {
    series: unique('series'),
    frequencyHz: unique('frequencyHz').sort((a, b) => Number(a) - Number(b)),
    applications: uniqueApplications(),
  }

  const filtered = useMemo(() => SPECIALISED_PUMP_MODELS.filter(m =>
    (!filters.series || filters.series.includes(m.series)) &&
    (!filters.frequencyHz || filters.frequencyHz.includes(m.frequencyHz)) &&
    (!filters.applications || filters.applications.some(a => m.applications.includes(a)))
  ), [filters])

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <SpecialisedPumpSidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} onClear={() => setFilters({})} />

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
          <Typography variant="h4" fontWeight={800} mb={1} color="primary">
            Specialised Pumps
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            LMP · Atomizer · PSI · PW · PK Series. High-head screw pumps, atomizer pumps and general utility pumps for agriculture, construction and manufacturing applications.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
          <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            {filtered.length} MODELS
          </Typography>
          <SpecialisedPumpActiveFilters filters={filters} setFilters={setFilters} />
          <SpecialisedPumpTable models={filtered} />
        </Box>
      </Box>
    </Box>
  )
}