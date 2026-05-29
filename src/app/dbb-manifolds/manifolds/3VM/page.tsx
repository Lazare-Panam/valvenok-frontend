"use client"
import { useState, useMemo } from "react"
import { Box, Typography, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { Manifold3VMSidebar, type AvailableCounts3VM } from "./components/Manifold3VMSidebar"
import Manifold3VMTable from "./components/Manifold3VMTable"
import { Manifold3VMActiveFilters } from "./components/Manifold3VMActiveFilters"
import { MANIFOLDS_3VM_DATA } from "./hooks/manifold3vmData"
import {
  type Manifold3VMFilters, type Manifold3VMDTO,
  EMPTY_3VM_FILTERS, MANIFOLD_3VM_DESCRIPTION,
  CONNECTION_SIZE_SORT_ORDER, DRAIN_HOLE_SORT_ORDER,
} from "./hooks/types"

const BRAND_GREEN = "#61D649"

function applyFilters(data: Manifold3VMDTO[], filters: Manifold3VMFilters, exclude: keyof Manifold3VMFilters | ''): Manifold3VMDTO[] {
  return data.filter(c => {
    if (exclude !== 'connectionSizes' && filters.connectionSizes.length && !filters.connectionSizes.includes(c.connectionSize)) return false
    if (exclude !== 'connectionTypes' && filters.connectionTypes.length && !filters.connectionTypes.includes(c.connectionType)) return false
    if (exclude !== 'mountings'       && filters.mountings.length       && !filters.mountings.includes(c.mounting))             return false
    if (exclude !== 'drainHoleSizes'  && filters.drainHoleSizes.length  && !filters.drainHoleSizes.includes(c.drainHoleSize))   return false
    if (exclude !== 'maxPressures'    && filters.maxPressures.length    && !filters.maxPressures.includes(c.maxPressure))       return false
    if (exclude !== 'specialServices' && filters.specialServices.length && !filters.specialServices.some(s => c.specialService.includes(s))) return false
    return true
  })
}

function countBy<T>(items: T[], keyFn: (item: T) => string | string[]): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const keys = keyFn(item)
    const arr = Array.isArray(keys) ? keys : [keys]
    for (const k of arr) { counts[k] = (counts[k] ?? 0) + 1 }
  }
  return counts
}

export default function Manifolds3VMPage() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<Manifold3VMFilters>(EMPTY_3VM_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const connectionSizeOptions = useMemo(() => {
    const present = new Set(MANIFOLDS_3VM_DATA.map(c => c.connectionSize))
    return CONNECTION_SIZE_SORT_ORDER.filter(s => present.has(s))
  }, [])
  const connectionTypeOptions = useMemo(() => Array.from(new Set(MANIFOLDS_3VM_DATA.map(c => c.connectionType))).sort(), [])
  const mountingOptions       = useMemo(() => Array.from(new Set(MANIFOLDS_3VM_DATA.map(c => c.mounting))).sort(), [])
  const drainHoleSizeOptions  = useMemo(() => { const present = new Set(MANIFOLDS_3VM_DATA.map(c => c.drainHoleSize)); return DRAIN_HOLE_SORT_ORDER.filter(s => present.has(s)) }, [])
  const maxPressureOptions    = useMemo(() => Array.from(new Set(MANIFOLDS_3VM_DATA.map(c => c.maxPressure))).sort(), [])
  const specialServiceOptions = useMemo(() => Array.from(new Set(MANIFOLDS_3VM_DATA.flatMap(c => c.specialService))).sort(), [])

  const models = useMemo(() => applyFilters(MANIFOLDS_3VM_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCounts3VM>(() => ({
    connectionSizes: countBy(applyFilters(MANIFOLDS_3VM_DATA, filters, 'connectionSizes'), c => c.connectionSize),
    connectionTypes: countBy(applyFilters(MANIFOLDS_3VM_DATA, filters, 'connectionTypes'), c => c.connectionType),
    mountings:       countBy(applyFilters(MANIFOLDS_3VM_DATA, filters, 'mountings'),       c => c.mounting),
    drainHoleSizes:  countBy(applyFilters(MANIFOLDS_3VM_DATA, filters, 'drainHoleSizes'),  c => c.drainHoleSize),
    maxPressures:    countBy(applyFilters(MANIFOLDS_3VM_DATA, filters, 'maxPressures'),    c => c.maxPressure),
    specialServices: countBy(applyFilters(MANIFOLDS_3VM_DATA, filters, 'specialServices'), c => c.specialService.length ? c.specialService : []),
  }), [filters])

  const activeCount =
    filters.connectionSizes.length + filters.connectionTypes.length + filters.mountings.length +
    filters.drainHoleSizes.length + filters.maxPressures.length + filters.specialServices.length

  const sidebar = (
    <Manifold3VMSidebar
      filters={filters} setFilters={setFilters}
      connectionSizeOptions={connectionSizeOptions}
      connectionTypeOptions={connectionTypeOptions}
      mountingOptions={mountingOptions}
      drainHoleSizeOptions={drainHoleSizeOptions}
      maxPressureOptions={maxPressureOptions}
      specialServiceOptions={specialServiceOptions}
      availableCounts={availableCounts}
      activeCount={activeCount}
    />
  )

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN }}>
          {MANIFOLD_3VM_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 750 }}>
          {MANIFOLD_3VM_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {MANIFOLD_3VM_DESCRIPTION.specs.map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600, bgcolor: alpha(BRAND_GREEN, 0.08), color: "#2d8a1e", border: `1px solid ${alpha(BRAND_GREEN, 0.3)}` }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}><FilterListIcon /></IconButton>}
        <Manifold3VMActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-start", border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper" }}>
          {!isMobile && sidebar}
          <Manifold3VMTable models={models} />
        </Box>
        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      </Box>
    </Box>
  )
}