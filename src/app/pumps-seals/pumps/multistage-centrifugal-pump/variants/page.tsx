"use client";
import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  MultistageCentrifugalSidebar,
  MultistageCentrifugalFilterParams,
} from "./components/MultistageCentrifugalSidebar";
import { MultistageCentrifugalActiveFilters } from "./components/MultistageCentrifugalActiveFilters";
import MultistageCentrifugalTable from "./components/MultistageCentrifugalTable";
import { MULTISTAGE_CENTRIFUGAL_MODELS } from "./components/data";

const unique = <K extends keyof (typeof MULTISTAGE_CENTRIFUGAL_MODELS)[number]>(
  key: K,
) => [...new Set(MULTISTAGE_CENTRIFUGAL_MODELS.map((m) => String(m[key])))];

export default function MultistageCentrifugalProductsPage() {
  const theme = useTheme();
  const [filters, setFilters] = useState<MultistageCentrifugalFilterParams>({});

  const filterOptions = {
    series: unique("series"),
    frequencyHz: unique("frequencyHz").sort((a, b) => Number(a) - Number(b)),
    phase: unique("phase").sort((a, b) => Number(a) - Number(b)),
  };

  const filtered = useMemo(
    () =>
      MULTISTAGE_CENTRIFUGAL_MODELS.filter(
        (m) =>
          (!filters.series || filters.series.includes(m.series)) &&
          (!filters.frequencyHz ||
            filters.frequencyHz.includes(m.frequencyHz)) &&
          (!filters.phase || filters.phase.includes(m.phase)),
      ),
    [filters],
  );

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <MultistageCentrifugalSidebar
        filters={filters}
        setFilters={setFilters}
        filterOptions={filterOptions}
        onClear={() => setFilters({})}
      />

      <Box
        sx={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}
      >
        <Box
          sx={{
            p: 4,
            borderBottom: `1px solid ${theme.palette.divider}`,
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h1" fontWeight={800} mb={1} color="primary">
            Multistage Centrifugal Pump — Model Range
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 700 }}
          >
            HS and TS series across 50Hz and 60Hz operation, single and
            three-phase configurations.
          </Typography>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
          <Typography
            variant="caption"
            fontWeight={700}
            color="text.secondary"
            sx={{ display: "block", mb: 1 }}
          >
            {filtered.length} MODELS
          </Typography>
          <MultistageCentrifugalActiveFilters
            filters={filters}
            setFilters={setFilters}
          />
          <MultistageCentrifugalTable models={filtered} />
        </Box>
      </Box>
    </Box>
  );
}
