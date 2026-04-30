'use client'
import { useState } from "react"
import { Box, Typography, CircularProgress, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { alpha, useTheme } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { useReducers, useReducerFilterOptions } from "./hooks/useReducer"

import { ReducerSidebar } from "./components/ReducerSidebar"
import { ReducerActiveFilters } from "./components/ReducerActiveFilters"
import ReducerTable from "./components/ReducerTable"
import { type ReducerFilters, EMPTY_REDUCER_FILTERS } from "./hooks/reducerTypes"

export default function ReducerPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<ReducerFilters>(EMPTY_REDUCER_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useReducerFilterOptions()
  const { data: models = [], isLoading, isFetching } = useReducers(filters)

  const activeCount =
    filters.fittingTypes.length +
    filters.tubeODs.length +
    filters.tubeODUnits.length +
    filters.tubeOD2s.length +
    filters.tubeOD2Units.length

  const sidebar = (
    <ReducerSidebar
      filters={filters}
      setFilters={setFilters}
      filterOptions={filterOptions}
      filtersLoading={filtersLoading}
      activeCount={activeCount}
    />
  )

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: theme.palette.primary.main }}>
          Tube Fittings — Reducers
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          Stainless steel reducer fittings including standard reducers, bulkhead reducers and reducer elbows. Available in Imperial, Metric and mixed Metric × Imperial configurations.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["SS 316", "Imperial & Metric", "Mixed Units", "Bulkhead", "Elbow"].map(s => (
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

        <ReducerActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: "block", mb: 1 }}>
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
            <ReducerTable models={models} isFetching={isFetching} />
          )}
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          {sidebar}
        </Drawer>
      </Box>
    </Box>
  )
}