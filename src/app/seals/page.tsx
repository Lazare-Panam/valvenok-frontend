"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  useMediaQuery,
  Drawer,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  useMechanicalSealFilters,
  useMechanicalSeals,
} from "./hooks/useMechanicalSeals";
import { MechanicalSealsSidebar } from "./components/MechanicalSealsSidebar";
import { MechanicalSealsActiveFilters } from "./components/MechanicalSealsActiveFilters";
import MechanicalSealsTable from "./components/MechanicalSealsTable";
import { SealFilters, EMPTY_SEAL_FILTERS } from "./hooks/types";

export default function MechanicalSealsPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:1200px)");
  const [filters, setFilters] = useState<SealFilters>(EMPTY_SEAL_FILTERS);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { data: filterOptions, isLoading: filtersLoading } =
    useMechanicalSealFilters();
  const {
    data: models = [],
    isLoading,
    isFetching,
  } = useMechanicalSeals(filters);

  const activeCount =
    filters.shaftSizes.length +
    filters.sealSizesMm.length +
    filters.sealSizesInch.length;

  const sidebar = (
    <MechanicalSealsSidebar
      filters={filters}
      setFilters={setFilters}
      filterOptions={filterOptions}
      filtersLoading={filtersLoading}
      activeCount={activeCount}
    />
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        minHeight: "100vh",
        bgcolor: "#f8f9fa",
      }}
    >
      {!isMobile && sidebar}
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
        {sidebar}
      </Drawer>

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            p: 4,
            borderBottom: `1px solid ${theme.palette.divider}`,
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h4" fontWeight={800} color="primary.main" mb={1}>
            Mechanical Seals
            
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
            sx={{ maxWidth: 700 }}
          >
            Browse the Complete Mechanical Seals Range. Filter by Shaft
            Size and Seal size — available in both Metric and Imperial.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, md: 4 } }}>
          {isMobile && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
              <FilterListIcon />
            </IconButton>
          )}

          <MechanicalSealsActiveFilters
            filters={filters}
            setFilters={setFilters}
          />

          <Typography
            variant="caption"
            fontWeight={700}
            color="text.disabled"
            sx={{ display: "block", mb: 2 }}
          >
            {isFetching && !isLoading
              ? "UPDATING..."
              : isLoading
                ? "LOADING..."
                : `${models.length} SEALS`}
          </Typography>

          {isLoading ? (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
              <CircularProgress />
            </Box>
          ) : (
            <MechanicalSealsTable models={models} isFetching={isFetching} />
          )}
        </Box>
      </Box>
    </Box>
  );
}
