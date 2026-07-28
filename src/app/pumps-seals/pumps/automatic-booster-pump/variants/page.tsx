"use client";
import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  AutomaticBoosterPumpSidebar,
  AutomaticBoosterPumpFilterParams,
} from "./components/AutomaticBoosterPumpSidebar";
import { AutomaticBoosterPumpActiveFilters } from "./components/AutomaticBoosterPumpActiveFilters";
import AutomaticBoosterPumpTable from "./components/AutomaticBoosterPumpTable";
import { AUTOMATIC_BOOSTER_PUMP_MODELS } from "./components/data";

const unique = <K extends keyof (typeof AUTOMATIC_BOOSTER_PUMP_MODELS)[number]>(
  key: K,
) => [...new Set(AUTOMATIC_BOOSTER_PUMP_MODELS.map((m) => String(m[key])))];

export default function AutomaticBoosterPumpProductsPage() {
  const theme = useTheme();
  const [filters, setFilters] = useState<AutomaticBoosterPumpFilterParams>({});

  const filterOptions = {
    baseModel: unique("baseModel"),
    frequencyHz: unique("frequencyHz").sort((a, b) => Number(a) - Number(b)),
    antiMicrobial: ["Yes", "No"],
  };

  const filtered = useMemo(
    () =>
      AUTOMATIC_BOOSTER_PUMP_MODELS.filter(
        (m) =>
          (!filters.baseModel || filters.baseModel.includes(m.baseModel)) &&
          (!filters.frequencyHz ||
            filters.frequencyHz.includes(String(m.frequencyHz))) &&
          (!filters.antiMicrobial ||
            filters.antiMicrobial.includes(m.antiMicrobial ? "Yes" : "No")),
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
      <AutomaticBoosterPumpSidebar
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
            Automatic Booster Pump — Model Range
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 700 }}
          >
            TP820P(T) and TP825P(T), each available with (B) or without
            anti-microbial construction, across 50Hz and 60Hz operation.
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
          <AutomaticBoosterPumpActiveFilters
            filters={filters}
            setFilters={setFilters}
          />
          <AutomaticBoosterPumpTable models={filtered} />
        </Box>
      </Box>
    </Box>
  );
}
