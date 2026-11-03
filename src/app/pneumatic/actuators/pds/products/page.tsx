'use client'
import { GroupSiteLinks, groupSitesIn } from '@/src/app/Common/GroupVisitLinks'
import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  PD_ACTUATOR_DATA, PD_ACTUATOR_DESCRIPTION,
  type PDActuatorFilters, EMPTY_PD_FILTERS,
  applyPDFilters, countByPD, type AvailableCountsPD,
} from './hooks/pdActuatorData'
import { PDActuatorActiveFilters } from './components/PDActuatorActiveFilters'
import PDActuatorTable from './components/PDActuatorTable'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function PDActuatorPage() {
  const [filters, setFilters] = useState<PDActuatorFilters>(EMPTY_PD_FILTERS)

  const models = useMemo(() => applyPDFilters(PD_ACTUATOR_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsPD>(() => ({
    series:  countByPD(applyPDFilters(PD_ACTUATOR_DATA, filters, 'series'),  c => c.series),
    models:  countByPD(applyPDFilters(PD_ACTUATOR_DATA, filters, 'models'),  c => c.model),
    angles:  countByPD(applyPDFilters(PD_ACTUATOR_DATA, filters, 'angles').filter(c => c.angle), c => c.angle!),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          {PD_ACTUATOR_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {PD_ACTUATOR_DESCRIPTION.description}
        </Typography>
        <GroupSiteLinks variant="inline" sites={groupSitesIn(PD_ACTUATOR_DESCRIPTION.title, PD_ACTUATOR_DESCRIPTION.description)} />
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {PD_ACTUATOR_DESCRIPTION.specs.map(s => (
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
        <PDActuatorActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <PDActuatorTable
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