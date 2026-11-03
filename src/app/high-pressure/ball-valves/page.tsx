'use client'
import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  HP_BALL_VALVE_DATA, HP_BV_DESCRIPTION,
  type HPBallValveFilters, EMPTY_HPBV_FILTERS,
  applyFilters, countBy, type AvailableCountsHPBV,
} from './hooks/hpBallValveData'
import { HPBVActiveFilters } from './components/HPBVActiveFilters'
import HPBVTable from './components/HPBVTable'
import { GroupSiteLinks, groupSitesIn } from "@/src/app/Common/GroupVisitLinks"

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function HPBallValvePage() {
  const [filters, setFilters] = useState<HPBallValveFilters>(EMPTY_HPBV_FILTERS)

  const models = useMemo(() => applyFilters(HP_BALL_VALVE_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsHPBV>(() => ({
    series:          countBy(applyFilters(HP_BALL_VALVE_DATA, filters, 'series'),          c => c.series),
    pressureRatings: countBy(applyFilters(HP_BALL_VALVE_DATA, filters, 'pressureRatings'), c => c.pressureRating),
    configurations:  countBy(applyFilters(HP_BALL_VALVE_DATA, filters, 'configurations'),  c => c.configuration),
    connectionSizes: countBy(applyFilters(HP_BALL_VALVE_DATA, filters, 'connectionSizes'), c => c.connectionSize),
    connectionTypes: countBy(applyFilters(HP_BALL_VALVE_DATA, filters, 'connectionTypes'), c => c.connectionType),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          {HP_BV_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {HP_BV_DESCRIPTION.description}
        </Typography>
        <GroupSiteLinks variant="inline" sites={groupSitesIn(HP_BV_DESCRIPTION.description)} />
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {HP_BV_DESCRIPTION.specs.map(s => (
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
        <HPBVActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <HPBVTable
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