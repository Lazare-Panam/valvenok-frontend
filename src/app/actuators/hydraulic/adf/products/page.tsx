'use client'
import { GroupSiteLinks, groupSitesIn } from '@/src/app/Common/GroupVisitLinks'
import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  HRSDA_DATA, HRSDA_DESCRIPTION,
  type HRSDAFilters, EMPTY_HRSDA_FILTERS,
  applyHRSDAFilters, countByHRSDA, type AvailableCountsHRSDA,
} from './hooks/hrsdaData'
import { HRSDAActuatorActiveFilters } from './components/HRSDAActuatorActiveFilters'
import HRSDAActuatorTable from './components/HRSDAActuatorTable'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function HRSDAActuatorPage() {
  const [filters, setFilters] = useState<HRSDAFilters>(EMPTY_HRSDA_FILTERS)

  const models = useMemo(() => applyHRSDAFilters(HRSDA_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsHRSDA>(() => ({
    series:    countByHRSDA(applyHRSDAFilters(HRSDA_DATA, filters, 'series'),    c => c.series),
    pressures: {},
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          {HRSDA_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {HRSDA_DESCRIPTION.description}
        </Typography>
        <GroupSiteLinks variant="inline" sites={groupSitesIn(HRSDA_DESCRIPTION.title, HRSDA_DESCRIPTION.description)} />
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {HRSDA_DESCRIPTION.specs.map(s => (
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
        <HRSDAActuatorActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <HRSDAActuatorTable
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