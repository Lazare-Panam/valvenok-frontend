'use client'
import { useState, useMemo } from "react"
import { Box, Typography, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { useTheme, alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { SDNCSidebar, EMPTY_SDNC_FILTERS, type SDNCFilters } from "./components/SDNCSidebar"
import { SDNCActiveFilters } from "./components/SDNCActiveFilters"
import SDNCTable from "./components/SDNCTable"
import { SDNC_CYLINDERS } from "./hooks/sdncData"

export default function SDNCCylinderPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<SDNCFilters>(EMPTY_SDNC_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const boreOptions = useMemo(
    () => Array.from(new Set(SDNC_CYLINDERS.map(c => c.boreSize))).sort((a, b) => a - b),
    []
  )
  const strokeOptions = useMemo(
    () => Array.from(new Set(SDNC_CYLINDERS.map(c => c.stroke))).sort((a, b) => a - b),
    []
  )

  const models = useMemo(() => {
    return SDNC_CYLINDERS.filter(c => {
      if (filters.boreSizes.length && !filters.boreSizes.includes(c.boreSize)) return false
      if (filters.strokes.length && !filters.strokes.includes(c.stroke)) return false
      if (filters.magnetic !== null && c.magnetic !== filters.magnetic) return false
      return true
    })
  }, [filters])

  const activeCount =
    filters.boreSizes.length +
    filters.strokes.length +
    (filters.magnetic !== null ? 1 : 0)

  const sidebar = (
    <SDNCSidebar
      filters={filters}
      setFilters={setFilters}
      boreOptions={boreOptions}
      strokeOptions={strokeOptions}
      activeCount={activeCount}
    />
  )

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: theme.palette.primary.main }}>
          SDNC Series Cylinders
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          Double-acting ISO-15552 profile pneumatic cylinders. Standard and magnetic piston variants available across a full bore and stroke range, suitable for industrial automation, packaging, and process machinery.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["Bore: 32–125mm", "Stroke: 25–1000mm", "ISO 15552 Compliant", "Double Acting", "Magnetic & Non-Magnetic", "Adjustable Cushioning"].map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600, bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark, border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}` }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && (
          <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
            <FilterListIcon />
          </IconButton>
        )}

        <SDNCActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>

        <Box sx={{
          display: "flex", alignItems: "stretch",
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper",
        }}>
          {!isMobile && sidebar}
          <SDNCTable models={models} />
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          {sidebar}
        </Drawer>
      </Box>
    </Box>
  )
}