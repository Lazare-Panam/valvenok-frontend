'use client'
import { useMemo, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { PeripheralBoosterSidebar, PeripheralBoosterFilterParams } from './components/PeripheralBoosterSidebar'
import { PeripheralBoosterActiveFilters } from './components/PeripheralBoosterActiveFilters'
import PeripheralBoosterTable from './components/PeripheralBoosterTable'
import { PERIPHERAL_BOOSTER_MODELS } from './components/data'

const unique = <K extends keyof typeof PERIPHERAL_BOOSTER_MODELS[number]>(key: K) =>
  [...new Set(PERIPHERAL_BOOSTER_MODELS.map(m => String(m[key])))]

const uniqueApplications = () =>
  [...new Set(PERIPHERAL_BOOSTER_MODELS.flatMap(m => m.applications))]

export default function PeripheralBoosterPage() {
  const theme = useTheme()
  const [filters, setFilters] = useState<PeripheralBoosterFilterParams>({})

  const filterOptions = {
    series: unique('series'),
    frequencyHz: unique('frequencyHz').sort((a, b) => Number(a) - Number(b)),
    applications: uniqueApplications(),
  }

  const filtered = useMemo(() => PERIPHERAL_BOOSTER_MODELS.filter(m =>
    (!filters.series || filters.series.includes(m.series)) &&
    (!filters.frequencyHz || filters.frequencyHz.includes(m.frequencyHz)) &&
    (!filters.applications || filters.applications.some(a => m.applications.includes(a)))
  ), [filters])

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <PeripheralBoosterSidebar filters={filters} setFilters={setFilters} filterOptions={filterOptions} onClear={() => setFilters({})} />

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
          <Typography variant="h4" fontWeight={800} mb={1} color="primary">
            Peripheral Booster Pumps
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            TP8 · GQB · GQCN_B · GS_B · TP3 · TPGK Series. Domestic, light industrial and manufacturing applications, 50Hz and 60Hz operation.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
          <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            {filtered.length} MODELS
          </Typography>
          <PeripheralBoosterActiveFilters filters={filters} setFilters={setFilters} />
          <PeripheralBoosterTable models={filtered} />
        </Box>
      </Box>
    </Box>
  )
}