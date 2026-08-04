'use client'
import { useState } from "react"
import { Box, Typography, CircularProgress, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { alpha, useTheme } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { useConnectorElbows, useConnectorElbowFilterOptions } from "./hooks/useConnectorElbow"
import { ConnectorElbowSidebar } from "./components/ConnectorElbowsidebar"
import { ConnectorElbowActiveFilters } from "./components/ConnectorElbowActiveFilters"
import ConnectorElbowTable from "./components/ConnectorElbowTable"
import { type ConnectorElbowFilters, EMPTY_CONNECTOR_ELBOW_FILTERS } from "./hooks/connectorElbowTypes"


export default function ConnectorElbowPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<ConnectorElbowFilters>(EMPTY_CONNECTOR_ELBOW_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useConnectorElbowFilterOptions()
  const { data: models = [], isLoading, isFetching } = useConnectorElbows(filters)

  const activeCount =
    filters.fittingTypes.length +
    filters.tubeODs.length +
    filters.tubeODUnits.length +
    filters.threadDimensions.length +
    filters.threadTypes.length +
    (filters.isPositionable !== null ? 1 : 0) +
    (filters.hasORingSeal !== null ? 1 : 0)

  const sidebar = (
    <ConnectorElbowSidebar
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
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: theme.palette.primary.main }}>
          Tube Fittings — Connectors & Elbows
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          Stainless steel tube fittings including male connectors, female connectors, elbows, tees and bulkhead fittings. Available in Imperial and Metric tube OD with NPT, BSPT, BSPP, RP, Metric, SAE/MS and Flare 37° thread types.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["SS 316", "Imperial & Metric", "NPT / BSPT / BSPP", "Positionable", "O-Ring Seal"].map(s => (
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

        <ConnectorElbowActiveFilters filters={filters} setFilters={setFilters} />

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
            <ConnectorElbowTable models={models} isFetching={isFetching} />
          )}
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          {sidebar}
        </Drawer>
      </Box>
    </Box>
  )
}