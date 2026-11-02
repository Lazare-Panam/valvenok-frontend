'use client'
import { useState } from "react"
import { Box, Typography, CircularProgress, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { alpha, useTheme } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { useAdapters, useAdapterFilterOptions } from "./hooks/useAdapter"
import { AdapterSidebar } from "./components/AdapterSidebar"
import { AdapterActiveFilters } from "./components/AdapterActiveFilters"
import AdapterTable from "./components/AdapterTable"
import { type AdapterFilters, EMPTY_ADAPTER_FILTERS } from "./hooks/adapterTypes"

export default function AdapterPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<AdapterFilters>(EMPTY_ADAPTER_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data: filterOptions, isLoading: filtersLoading } = useAdapterFilterOptions()
  const { data: models = [], isLoading, isFetching } = useAdapters(filters)

  const activeCount =
    filters.fittingTypes.length +
    filters.tubeODs.length +
    filters.tubeODUnits.length +
    filters.threadSizes.length +
    filters.threadTypes.length

  const sidebar = (
    <AdapterSidebar
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
          Tube Fittings — Adapters
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          Stainless steel male and female adapter fittings. Available in Imperial and Metric tube OD with NPT, BSPT, BSPP, RP, RG and SAE/MS thread types.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["SS 316", "Imperial & Metric", "NPT / BSPT / BSPP", "SAE/MS", "Male & Female"].map(s => (
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

        <AdapterActiveFilters filters={filters} setFilters={setFilters} />

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
            <AdapterTable models={models} isFetching={isFetching} />
          )}
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          {sidebar}
        </Drawer>
      </Box>
    </Box>
  )
}