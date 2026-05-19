'use client'
import { useState, useMemo } from "react"
import { Box, Typography, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { useTheme, alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { EFittingsSidebar } from "./components/EFittingsSidebar"
import { EFittingsActiveFilters } from "./components/EFittingsActiveFilters"
import EFittingsTable from "./components/EFittingsTable"
import { E_FITTINGS } from "./hooks/eFittingsData"
import { type EFittingFilters, EMPTY_E_FILTERS } from "./hooks/types"

const THREAD_ORDER = ["M5", "BSP 1/8\"", "BSP 1/4\"", "BSP 3/8\"", "BSP 1/2\""]

export default function EFittingsPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<EFittingFilters>(EMPTY_E_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const typeOptions = useMemo(
    () => Array.from(new Set(E_FITTINGS.map(f => f.fittingType))).sort(),
    []
  )
  const tubeOptions = useMemo(
    () => Array.from(new Set(E_FITTINGS.map(f => f.tubeSize).filter((v): v is number => v !== null))).sort((a, b) => a - b),
    []
  )
  const threadOptions = useMemo(
    () => {
      const present = new Set(E_FITTINGS.map(f => f.threadSize).filter((v): v is string => v !== null))
      return THREAD_ORDER.filter(t => present.has(t))
    },
    []
  )

  const models = useMemo(() => {
    return E_FITTINGS.filter(f => {
      if (filters.fittingTypes.length && !filters.fittingTypes.includes(f.fittingType)) return false
      if (filters.tubeSizes.length && (f.tubeSize === null || !filters.tubeSizes.includes(f.tubeSize))) return false
      if (filters.threadSizes.length && (f.threadSize === null || !filters.threadSizes.includes(f.threadSize))) return false
      return true
    })
  }, [filters])

  const activeCount =
    filters.fittingTypes.length +
    filters.tubeSizes.length +
    filters.threadSizes.length

  const sidebar = (
    <EFittingsSidebar
      filters={filters}
      setFilters={setFilters}
      typeOptions={typeOptions}
      tubeOptions={tubeOptions}
      threadOptions={threadOptions}
      activeCount={activeCount}
    />
  )

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: theme.palette.primary.main }}>
          E-Series Push-In Fittings
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          Quick-connect push-in fittings for pneumatic and instrumentation systems. Connectors, elbows, tees, Y-fittings, banjos, flow control and hand valves across tube sizes 4mm to 16mm with BSP and M5 thread options.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["Tube: 4–16mm", "BSP M5, 1/8\", 1/4\", 3/8\", 1/2\"", "Push-In Connection", "280+ Configurations"].map(s => (
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

        <EFittingsActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>

        <Box sx={{
          display: "flex", alignItems: "stretch",
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper",
        }}>
          {!isMobile && sidebar}
          <EFittingsTable models={models} />
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          {sidebar}
        </Drawer>
      </Box>
    </Box>
  )
}