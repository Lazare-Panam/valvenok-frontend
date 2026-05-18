'use client'
import { useState, useMemo } from "react"
import { Box, Typography, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { useTheme, alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { SDNUSidebar } from "./components/SDNUSidebar"
import { SDNUActiveFilters } from "./components/SDNUActiveFilters"
import SDNUTable from "./components/SDNUTable"
import { SDNU_CYLINDERS } from "./hooks/sdnuData"
import { type SDNUCylinderFilters, EMPTY_SDNU_FILTERS } from "./hooks/types"

export default function SDNUCylinderPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<SDNUCylinderFilters>(EMPTY_SDNU_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const boreOptions = useMemo(
    () => Array.from(new Set(SDNU_CYLINDERS.map(c => c.boreSize))).sort((a, b) => a - b),
    []
  )
  const strokeOptions = useMemo(
    () => Array.from(new Set(SDNU_CYLINDERS.map(c => c.stroke))).sort((a, b) => a - b),
    []
  )

  const models = useMemo(() => {
    return SDNU_CYLINDERS.filter(c => {
      if (filters.boreSizes.length && !filters.boreSizes.includes(c.boreSize)) return false
      if (filters.strokes.length && !filters.strokes.includes(c.stroke)) return false
      if (filters.cushion !== null && c.cushion !== filters.cushion) return false
      return true
    })
  }, [filters])

  const activeCount =
    filters.boreSizes.length +
    filters.strokes.length +
    (filters.cushion !== null ? 1 : 0)

  const sidebar = (
    <SDNUSidebar
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
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: theme.palette.primary.main }}>
          SDNU Series Cylinders
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          Double-acting ISO-6432 stainless steel round body pneumatic cylinders. Compact magnetic-piston design across bore sizes 12mm to 25mm with optional adjustable end-of-stroke cushioning — built for hygienic, washdown and food-grade automation environments.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["Bore: 12–25mm", "Stroke: 25–200mm", "ISO 6432 Round Body", "Stainless Steel", "Magnetic Piston", "Optional Adjustable Cushion"].map(s => (
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

        <SDNUActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>

        <Box sx={{
          display: "flex", alignItems: "stretch",
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper",
        }}>
          {!isMobile && sidebar}
          <SDNUTable models={models} />
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          {sidebar}
        </Drawer>
      </Box>
    </Box>
  )
}