'use client'
import { useState } from "react"
import { Box, Typography, CircularProgress, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { useTheme, alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { useReliefValves, useReliefValveFilterOptions } from "./hooks/useReliefValve"
import { ReliefValveSidebar, EMPTY_RELIEF_VALVE_FILTERS, type ReliefValveFilters } from "./components/ReliefValveSidebar"

import ReliefValveTable from "./components/ReliefValveTable"
import { ReliefValveActiveFilters } from "./components/ReliefValveActiveFilters"
export default function ReliefValvePage() {
  const theme = useTheme()
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<ReliefValveFilters>(EMPTY_RELIEF_VALVE_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useReliefValveFilterOptions()
  const { data: models = [], isLoading, isFetching } = useReliefValves(filters)

  const activeCount =
    filters.series.length +
    filters.bodyMaterials.length +
    filters.connectionSizes.length +
    filters.threadTypes.length +
    filters.connectionTypes.length +
    filters.springs.length +
    filters.sealMaterials.length

  const sidebar = (
    <ReliefValveSidebar
      filters={filters}
      setFilters={setFilters}
      filterOptions={filterOptions}
      filtersLoading={filtersLoading}
      activeCount={activeCount}
    />
  )

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: theme.palette.primary.main }}>
          Relief Valves
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          RVL low pressure and RVH high pressure relief valves in SS 316, SS 316L and Brass. Available in NPT, BSPT and BSPP thread types with spring ranges up to 15,000 psi.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["RVL Series", "RVH Series", "PRVH-10K", "PRVH-15K", "SS 316 / 316L", "Up to 15,000 psi"].map(s => (
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

        <ReliefValveActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
          {isFetching && !isLoading ? "UPDATING..." : isLoading ? "LOADING..." : `${models.length} CONFIGURATIONS`}
        </Typography>

        <Box sx={{
          display: "flex", alignItems: "stretch",
          border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper",
        }}>
          {!isMobile && sidebar}
          {isLoading ? (
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", minHeight: 300 }}>
              <CircularProgress sx={{ color: theme.palette.primary.main }} />
            </Box>
          ) : (
            <ReliefValveTable models={models} isFetching={isFetching} />
          )}
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          {sidebar}
        </Drawer>
      </Box>
    </Box>
  )
}