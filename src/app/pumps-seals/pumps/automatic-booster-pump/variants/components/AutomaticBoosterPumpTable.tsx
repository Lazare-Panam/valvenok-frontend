// components/AutomaticBoosterPumpTable.tsx
"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import * as XLSX from "xlsx";
import { AUTOMATIC_BOOSTER_PUMP_MODELS } from "./data";

export type AutomaticBoosterPumpModel =
  (typeof AUTOMATIC_BOOSTER_PUMP_MODELS)[number];

interface AutomaticBoosterPumpTableProps {
  models: AutomaticBoosterPumpModel[];
  fileName?: string;
}

// turns e.g. "frequencyHz" -> "Frequency Hz" for headers/export column names
const toLabel = (key: string) =>
  key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (c) => c.toUpperCase());

export default function AutomaticBoosterPumpTable({
  models,
  fileName = "automatic-booster-pump-models.xlsx",
}: AutomaticBoosterPumpTableProps) {
  const [exporting, setExporting] = useState(false);

  const columns =
    models.length > 0
      ? (Object.keys(models[0]) as (keyof AutomaticBoosterPumpModel)[])
      : [];

  const handleExportToExcel = () => {
    setExporting(true);
    try {
      const rows = models.map((m) => {
        const row: Record<string, unknown> = {};
        columns.forEach((col) => {
          const value = m[col];
          row[toLabel(String(col))] =
            typeof value === "boolean" ? (value ? "Yes" : "No") : value;
        });
        return row;
      });

      const worksheet = XLSX.utils.json_to_sheet(rows);
      worksheet["!cols"] = columns.map(() => ({ wch: 18 }));

      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Models");
      XLSX.writeFile(workbook, fileName);
    } finally {
      setExporting(false);
    }
  };

  const renderCell = (
    m: AutomaticBoosterPumpModel,
    col: keyof AutomaticBoosterPumpModel,
  ) => {
    const value = m[col];

    if (col === "antiMicrobial") {
      return value ? (
        <Chip
          label="Anti-Microbial"
          size="small"
          color="primary"
          variant="outlined"
        />
      ) : null;
    }
    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }
    return value as React.ReactNode;
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">Models ({models.length})</Typography>
        <Button
          variant="contained"
          startIcon={<FileDownloadIcon />}
          onClick={handleExportToExcel}
          disabled={exporting || models.length === 0}
        >
          {exporting ? "Exporting..." : "Import as Excel"}
        </Button>
      </Stack>

      <TableContainer component={Paper} sx={{ maxHeight: 640 }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={String(col)}>{toLabel(String(col))}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {models.map((m, i) => (
              <TableRow key={String(m.baseModel) + i} hover>
                {columns.map((col) => (
                  <TableCell key={String(col)}>{renderCell(m, col)}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
