'use client'
import { GroupSiteLinks, groupSitesIn } from '@/src/app/Common/GroupVisitLinks'
import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  MAB_GEARBOX_DATA, MAB_GEARBOX_DESCRIPTION,
  type MABGearboxFilters, EMPTY_MAB_FILTERS,
  applyMABFilters, countByMAB, type AvailableCountsMAB,
} from './hooks/mabGearboxData'
import { MABGearboxActiveFilters } from './components/MABGearboxActiveFilters'
import MABGearboxTable from './components/MABGearboxTable'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function MABGearboxPage() {
  const [filters, setFilters] = useState<MABGearboxFilters>(EMPTY_MAB_FILTERS)

  const models = useMemo(() => applyMABFilters(MAB_GEARBOX_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsMAB>(() => ({
    subSeries: countByMAB(applyMABFilters(MAB_GEARBOX_DATA, filters, 'subSeries'), c => c.subSeries),
    models:    countByMAB(applyMABFilters(MAB_GEARBOX_DATA, filters, 'models'),    c => c.model),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          {MAB_GEARBOX_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {MAB_GEARBOX_DESCRIPTION.description}
        </Typography>
        <GroupSiteLinks variant="inline" sites={groupSitesIn(MAB_GEARBOX_DESCRIPTION.title, MAB_GEARBOX_DESCRIPTION.description)} />
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {MAB_GEARBOX_DESCRIPTION.specs.map(s => (
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
        <MABGearboxActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} MODELS`}
        </Typography>
        <MABGearboxTable
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