'use client'
import { useState, useMemo } from "react"
import { Box, Typography, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { useTheme, alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { ESNCSidebar } from "./components/ESNCSidebar"
import { ESNCActiveFilters } from "./components/ESNCActiveFilters"
import ESNCTable from "./components/ESNCTable"
import { ESNC_CYLINDERS } from "./hooks/esncData"
import { type ESNCCylinderFilters, EMPTY_ESNC_FILTERS } from "./hooks/types"

export default function ESNCCylinderPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<ESNCCylinderFilters>(EMPTY_ESNC_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const boreOptions = useMemo(
    () => Array.from(new Set(ESNC_CYLINDERS.map(c => c.boreSize))).sort((a, b) => a - b),
    []
  )
  const strokeOptions = useMemo(
    () => Array.from(new Set(ESNC_CYLINDERS.map(c => c.stroke))).sort((a, b) => a - b),
    []
  )

  const models = useMemo(() => {
    return ESNC_CYLINDERS.filter(c => {
      if (filters.boreSizes.length && !filters.boreSizes.includes(c.boreSize)) return false
      if (filters.strokes.length && !filters.strokes.includes(c.stroke)) return false
      return true
    })
  }, [filters])

  const activeCount = filters.boreSizes.length + filters.strokes.length

  const sidebar = (
    <ESNCSidebar
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
          ESNC Series Cylinders
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          Double-acting ISO-15552 tie rod profile pneumatic cylinders. Non-magnetic construction across bore sizes 32mm to 200mm with strokes from 25mm to 1000mm, built for heavy-duty industrial automation.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["Bore: 32–200mm", "Stroke: 25–1000mm", "ISO 15552 Tie Rod", "Double Acting", "Non-Magnetic", "Adjustable Cushioning"].map(s => (
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

        <ESNCActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>

        <Box sx={{
          display: "flex", alignItems: "stretch",
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper",
        }}>
          {!isMobile && sidebar}
          <ESNCTable models={models} />
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          {sidebar}
        </Drawer>
      </Box>
    </Box>
  )
}