'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Box, Typography, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {
  HP_NEEDLE_VALVE_DATA, HP_NV_DESCRIPTION,
  type HPNeedleValveFilters, EMPTY_HP_FILTERS,
  applyFilters, countBy, type AvailableCountsHP,
} from '../hooks/hpNeedleValveData'
import { HPNVActiveFilters } from '../components/HPNVActiveFilters'
import HPNVTable from '../components/HPNVTable'
import { GroupSiteLinks, groupSitesIn } from '@/src/app/Common/GroupVisitLinks'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

export default function HPNeedleValveProductsPage() {
  const [filters, setFilters] = useState<HPNeedleValveFilters>(EMPTY_HP_FILTERS)

  const models = useMemo(() => applyFilters(HP_NEEDLE_VALVE_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsHP>(() => ({
    brands:          countBy(applyFilters(HP_NEEDLE_VALVE_DATA, filters, 'brands'),          c => c.brand),
    series:          countBy(applyFilters(HP_NEEDLE_VALVE_DATA, filters, 'series'),          c => c.series),
    pressureRatings: countBy(applyFilters(HP_NEEDLE_VALVE_DATA, filters, 'pressureRatings'), c => c.pressureRating),
    connectionSizes: countBy(applyFilters(HP_NEEDLE_VALVE_DATA, filters, 'connectionSizes'), c => c.connectionSize),
    connectionTypes: countBy(applyFilters(HP_NEEDLE_VALVE_DATA, filters, 'connectionTypes'), c => c.connectionType),
    configurations:  countBy(applyFilters(HP_NEEDLE_VALVE_DATA, filters, 'configurations'),  c => c.configuration),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Button component={Link} href="/high-pressure/valves/aov" startIcon={<ArrowBackIcon />}
          sx={{ mb: 1, fontWeight: 700, color: 'text.secondary', textTransform: 'none' }}>
          Air Operated Valves overview
        </Button>
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT, fontSize: '1.8rem' }}>
          {HP_NV_DESCRIPTION.title} — Products
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: PRIMARY_FONT }}>
          {HP_NEEDLE_VALVE_DATA.length} models across Panam & Hiflux — filter by brand, series, pressure, connection & configuration.
        </Typography>
        <GroupSiteLinks variant="inline" sites={groupSitesIn("Panam & Hiflux")} />
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <HPNVActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <HPNVTable
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
