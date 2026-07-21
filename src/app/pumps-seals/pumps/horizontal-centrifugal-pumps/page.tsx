"use client";
import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  HorizontalCentrifugalSidebar,
  HorizontalCentrifugalFilterParams,
} from "./components/HorizontalCentrifugalSidebar";
import { HorizontalCentrifugalActiveFilters } from "./components/HorizontalCentrifugalActiveFilters";
import HorizontalCentrifugalTable from "./components/HorizontalCentrifugalTable";
import { HORIZONTAL_CENTRIFUGAL_MODELS } from "./components/data";

const unique = <K extends keyof (typeof HORIZONTAL_CENTRIFUGAL_MODELS)[number]>(
  key: K,
) => [...new Set(HORIZONTAL_CENTRIFUGAL_MODELS.map((m) => String(m[key])))];

const uniqueApplications = () => [
  ...new Set(HORIZONTAL_CENTRIFUGAL_MODELS.flatMap((m) => m.applications)),
];

export default function HorizontalCentrifugalPage() {
  const theme = useTheme();
  const [filters, setFilters] = useState<HorizontalCentrifugalFilterParams>({});

  const filterOptions = {
    series: unique("series"),
    frequencyHz: unique("frequencyHz").sort((a, b) => Number(a) - Number(b)),
    applications: uniqueApplications(),
  };

  const filtered = useMemo(
    () =>
      HORIZONTAL_CENTRIFUGAL_MODELS.filter(
        (m) =>
          (!filters.series || filters.series.includes(m.series)) &&
          (!filters.frequencyHz ||
            filters.frequencyHz.includes(m.frequencyHz)) &&
          (!filters.applications ||
            filters.applications.some((a) => m.applications.includes(a))),
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
      <HorizontalCentrifugalSidebar
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
          <Typography variant="h4" fontWeight={800} mb={1} color="primary">
            Horizontal Centrifugal Pumps
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 700 }}
          >
            WQ_B · HQ_B · TQ_B · TPH_Q · HQCN_B · TQCN_B Series. Stainless steel
            impellers, dual outlet configurations, 50Hz and 60Hz operation.
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
          <HorizontalCentrifugalActiveFilters
            filters={filters}
            setFilters={setFilters}
          />
          <HorizontalCentrifugalTable models={filtered} />
        </Box>
      </Box>
    </Box>
  );
}
