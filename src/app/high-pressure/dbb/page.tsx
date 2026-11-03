'use client'
import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  HP_DBB_DATA, HP_DBB_DESCRIPTION,
  type HPDBBFilters, EMPTY_HPDBB_FILTERS,
  applyFilters, countBy, type AvailableCountsHPDBB,
} from './hooks/hpDBBData'
import { HPDBBActiveFilters } from './components/HPDBBActiveFilters'
import HPDBBTable from './components/HPDBBTable'
import { GroupSiteLinks, groupSitesIn } from "@/src/app/Common/GroupVisitLinks"

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function HPDBBPage() {
  const [filters, setFilters] = useState<HPDBBFilters>(EMPTY_HPDBB_FILTERS)

  const models = useMemo(() => applyFilters(HP_DBB_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsHPDBB>(() => ({
    pressureRatings:  countBy(applyFilters(HP_DBB_DATA, filters, 'pressureRatings'),  c => c.pressureRating),
    configurations:   countBy(applyFilters(HP_DBB_DATA, filters, 'configurations'),   c => c.configuration),
    inletOutletSizes: countBy(applyFilters(HP_DBB_DATA, filters, 'inletOutletSizes'), c => c.inletOutletSize),
    inletOutletTypes: countBy(applyFilters(HP_DBB_DATA, filters, 'inletOutletTypes'), c => c.inletOutletType),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          {HP_DBB_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          {HP_DBB_DESCRIPTION.description}
        </Typography>
        <GroupSiteLinks variant="inline" sites={groupSitesIn(HP_DBB_DESCRIPTION.description)} />
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {HP_DBB_DESCRIPTION.specs.map(s => (
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
        <HPDBBActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <HPDBBTable
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