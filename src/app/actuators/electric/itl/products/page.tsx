'use client'
import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  ELECTRIC_ACTUATOR_DATA, ELECTRIC_ACTUATOR_DESCRIPTION,
  type ElectricActuatorFilters, EMPTY_ELECTRIC_FILTERS,
  applyElectricFilters, countByElectric, type AvailableCountsElectric,
} from './hooks/electricActuatorData'
import { ElectricActuatorActiveFilters } from './components/ElectricActuatorActiveFilters'
import ElectricActuatorTable from './components/ElectricActuatorTable'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function ElectricActuatorPage() {
  const [filters, setFilters] = useState<ElectricActuatorFilters>(EMPTY_ELECTRIC_FILTERS)

  const models = useMemo(() => applyElectricFilters(ELECTRIC_ACTUATOR_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsElectric>(() => ({
    series: countByElectric(applyElectricFilters(ELECTRIC_ACTUATOR_DATA, filters, 'series'), c => c.series),
    models: countByElectric(applyElectricFilters(ELECTRIC_ACTUATOR_DATA, filters, 'models'), c => c.model),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          {ELECTRIC_ACTUATOR_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {ELECTRIC_ACTUATOR_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {ELECTRIC_ACTUATOR_DESCRIPTION.specs.map(s => (
            <Box key={s} sx={{
              px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600,
              bgcolor: alpha(BRAND_GREEN, 0.08), color: '#2d8a1e',
              border: `1px solid ${alpha(BRAND_GREEN, 0.3)}`,
              fontFamily: PRIMARY_FONT,
            }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <ElectricActuatorActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} MODELS`}
        </Typography>
        <ElectricActuatorTable
          models={models}
          filters={filters}
          setFilters={setFilters}
          availableCounts={availableCounts}
          activeCount={activeCount}
        />
      </Box>
    </Box>
  )
}