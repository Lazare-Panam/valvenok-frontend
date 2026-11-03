'use client'
import { GroupSiteLinks, groupSitesIn } from '@/src/app/Common/GroupVisitLinks'
import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  IQL_ACTUATOR_DATA, IQL_ACTUATOR_DESCRIPTION,
  type IQLActuatorFilters, EMPTY_IQL_FILTERS,
  applyIQLFilters, countByIQL, type AvailableCountsIQL,
} from './hooks/iqlActuatorData'
import { IQLActuatorActiveFilters } from './components/IQLActuatorActiveFilters'
import IQLActuatorTable from './components/IQLActuatorTable'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function IQLActuatorPage() {
  const [filters, setFilters] = useState<IQLActuatorFilters>(EMPTY_IQL_FILTERS)

  const models = useMemo(() => applyIQLFilters(IQL_ACTUATOR_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsIQL>(() => ({
    models:      countByIQL(applyIQLFilters(IQL_ACTUATOR_DATA, filters, 'models'),      c => c.model),
    strokeSizes: countByIQL(applyIQLFilters(IQL_ACTUATOR_DATA, filters, 'strokeSizes'), c => c.strokeMm),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          {IQL_ACTUATOR_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {IQL_ACTUATOR_DESCRIPTION.description}
        </Typography>
        <GroupSiteLinks variant="inline" sites={groupSitesIn(IQL_ACTUATOR_DESCRIPTION.title, IQL_ACTUATOR_DESCRIPTION.description)} />
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {IQL_ACTUATOR_DESCRIPTION.specs.map(s => (
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
        <IQLActuatorActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} MODELS`}
        </Typography>
        <IQLActuatorTable
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