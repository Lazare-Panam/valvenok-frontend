'use client'
import { useState, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { type DBBValveFilters, type DBBValveDTO, EMPTY_DBB_FILTERS, DBB_FXF_DESCRIPTION } from './components/types'
import { DBB_FXF_DATA } from './components/data'
import { DBBFXFActiveFilters } from './components/DBBFXFActiveFilters'
import DBBFXFTable from './components/DBBFXFTable'
import { type AvailableCountsDBB } from './components/DBBFXFSidebar'

function applyFilters(data: DBBValveDTO[], filters: DBBValveFilters, exclude: keyof DBBValveFilters | ''): DBBValveDTO[] {
  return data.filter(c => {
    if (exclude !== 'constructionTypes' && filters.constructionTypes.length && !filters.constructionTypes.includes(c.constructionType)) return false
    if (exclude !== 'configurations' && filters.configurations.length && !filters.configurations.includes(c.configuration)) return false
    if (exclude !== 'sealMaterials' && filters.sealMaterials.length && !filters.sealMaterials.includes(c.sealMaterial)) return false
    if (exclude !== 'seatMaterials' && filters.seatMaterials.length && !filters.seatMaterials.includes(c.seatMaterial)) return false
    if (exclude !== 'boreSizes' && filters.boreSizes.length && !filters.boreSizes.includes(c.boreSize)) return false
    if (exclude !== 'inletSizes' && filters.inletSizes.length && !filters.inletSizes.includes(c.inletSize)) return false
    if (exclude !== 'pressureClasses' && filters.pressureClasses.length && !filters.pressureClasses.includes(c.pressureClass)) return false
    if (exclude !== 'flangeTypes' && filters.flangeTypes.length && !filters.flangeTypes.includes(c.flangeType)) return false
    if (exclude !== 'outlets' && filters.outlets.length && !filters.outlets.includes(c.outlet)) return false
    if (exclude !== 'vents' && filters.vents.length && !filters.vents.includes(c.vent)) return false
    if (exclude !== 'options' && filters.options.length && !filters.options.some(s => c.options.includes(s))) return false
    return true
  })
}

function countBy<T>(items: T[], keyFn: (item: T) => string | string[]): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const keys = keyFn(item)
    const arr = Array.isArray(keys) ? keys : [keys]
    for (const k of arr) counts[k] = (counts[k] ?? 0) + 1
  }
  return counts
}

export default function DBBFlangeToFlangePage() {
  const theme = useTheme()
  const [filters, setFilters] = useState<DBBValveFilters>(EMPTY_DBB_FILTERS)

  const models = useMemo(() => applyFilters(DBB_FXF_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsDBB>(() => ({
    constructionTypes: countBy(applyFilters(DBB_FXF_DATA, filters, 'constructionTypes'), c => c.constructionType),
    configurations: countBy(applyFilters(DBB_FXF_DATA, filters, 'configurations'), c => c.configuration),
    sealMaterials: countBy(applyFilters(DBB_FXF_DATA, filters, 'sealMaterials'), c => c.sealMaterial),
    seatMaterials: countBy(applyFilters(DBB_FXF_DATA, filters, 'seatMaterials'), c => c.seatMaterial),
    boreSizes: countBy(applyFilters(DBB_FXF_DATA, filters, 'boreSizes'), c => c.boreSize),
    inletSizes: countBy(applyFilters(DBB_FXF_DATA, filters, 'inletSizes'), c => c.inletSize),
    pressureClasses: countBy(applyFilters(DBB_FXF_DATA, filters, 'pressureClasses'), c => c.pressureClass),
    flangeTypes: countBy(applyFilters(DBB_FXF_DATA, filters, 'flangeTypes'), c => c.flangeType),
    outlets: countBy(applyFilters(DBB_FXF_DATA, filters, 'outlets'), c => c.outlet),
    vents: countBy(applyFilters(DBB_FXF_DATA, filters, 'vents'), c => c.vent),
    options: countBy(applyFilters(DBB_FXF_DATA, filters, 'options'), c => c.options.length ? c.options : []),
  }), [filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} color="primary">
          {DBB_FXF_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          {DBB_FXF_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {DBB_FXF_DESCRIPTION.specs.map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark, border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}` }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <DBBFXFActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 2 }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <Box sx={{ flex: 1, minHeight: 0 }}>
          <DBBFXFTable models={models} filters={filters} setFilters={setFilters} availableCounts={availableCounts} activeCount={activeCount} />
        </Box>
      </Box>
    </Box>
  )
}