'use client'
import { useState } from "react"
import { Box, Typography, CircularProgress, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { useTheme, alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { useTubing, useTubingFilterOptions } from "../../pneumatic/hooks/usePneumatic"

import { TubingSidebar, EMPTY_TUBING_FILTERS, type TubingFilters } from "./components/TubingSidebar"
import { TubingActiveFilters } from "./components/TubingActiveFilters"
import TubingTable from "./components/TubingTable"

export default function TubingPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<TubingFilters>(EMPTY_TUBING_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useTubingFilterOptions()
  const { data: models = [], isLoading, isFetching } = useTubing(filters)

  const activeCount =
    filters.tubingTypes.length +
    filters.colors.length +
    filters.rollLengths.length +
    (filters.hasConnector !== null ? 1 : 0)

  const sidebar = (
    <TubingSidebar
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
          Pneumatic Tubing
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          SPAC polyurethane tubing range including standard, recoil, anti-spark and anti-spark recoil variants. Available in multiple sizes, colors and roll lengths.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["Polyurethane", "Recoil", "Anti-Spark", "Multiple Colors", "OD 4–16mm"].map(s => (
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

        <TubingActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
          {isFetching && !isLoading ? "UPDATING..." : isLoading ? "LOADING..." : `${models.length} PRODUCTS`}
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
            <TubingTable models={models} isFetching={isFetching} />
          )}
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          {sidebar}
        </Drawer>
      </Box>
    </Box>
  )
}