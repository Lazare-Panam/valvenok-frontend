"use client";
import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  KESeriesSidebar,
  KESeriesFilterParams,
} from "./components/KESeriesSidebar";
import { KESeriesActiveFilters } from "./components/KESeriesActiveFilters";
import KESeriesTable from "./components/KESeriesTable";
import { KE_SERIES_MODELS } from "./components/data";

const unique = <K extends keyof (typeof KE_SERIES_MODELS)[number]>(key: K) => [
  ...new Set(KE_SERIES_MODELS.map((m) => String(m[key]))),
];

export default function KESeriesProductsPage() {
  const theme = useTheme();
  const [filters, setFilters] = useState<KESeriesFilterParams>({});

  const filterOptions = {
    baseModel: unique("baseModel"),
    variant: unique("variant"),
  };

  const filtered = useMemo(
    () =>
      KE_SERIES_MODELS.filter(
        (m) =>
          (!filters.baseModel || filters.baseModel.includes(m.baseModel)) &&
          (!filters.variant || filters.variant.includes(m.variant)),
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
      <KESeriesSidebar
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
            KE Series — Model Range
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 700 }}
          >
            KE001 through KE120, each available in standard or reduced-torque
            (#) variants, covering 4 – 1200 Nm.
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
          <KESeriesActiveFilters filters={filters} setFilters={setFilters} />
          <KESeriesTable models={filtered} />
        </Box>
      </Box>
    </Box>
  );
}
