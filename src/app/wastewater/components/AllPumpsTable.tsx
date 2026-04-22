import { useMemo, useState, useCallback } from "react";
import { Box, Stack, Typography, Button, Chip } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { AgGridReact } from "ag-grid-react";
import {
  ColDef,
  ICellRendererParams,
  IsFullWidthRowParams,
} from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { PumpsItemDTO } from "@/src/api/pumpsApi";
import RFQModal from "@/src/app/Common/RFQCard/RFQModal";
import { ProductForRFQ } from "@/src/app/Common/RFQCard/RequestForQuoteCard";

const FAMILY_COLORS: Record<string, "primary" | "success"> = {
  Borewell: "primary",
  Wastewater: "success",
};

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography
        variant="caption"
        color="text.disabled"
        fontWeight={700}
        sx={{ display: "block", textTransform: "uppercase", mb: 0.25 }}
      >
        {label}
      </Typography>
      <Typography variant="body2" fontWeight={600}>
        {value}
      </Typography>
    </Box>
  );
}

function FamilyCellRenderer({ data }: ICellRendererParams) {
  if (data?._isDetail) return null;
  const family = data?.productFamily;
  return (
    <Chip
      label={family}
      size="small"
      color={FAMILY_COLORS[family] ?? "default"}
      sx={{ fontSize: "0.7rem", fontWeight: 700 }}
    />
  );
}

function DetailPanelRenderer({ data }: ICellRendererParams) {
  const theme = useTheme();
  const pump: PumpsItemDTO = data;
  return (
    <Box
      sx={{
        p: 3,
         minHeight: 300,
        bgcolor: alpha(theme.palette.primary.main, 0.02),
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        width: "100%",
      }}
    >
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
       <Box sx={{
  width: 250,        // ← was 140
  height: 250,       // ← was 140
  flexShrink: 0,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 2,   // ← slightly more rounded
  bgcolor: '#fff',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  p: 2    ,
  overflow: 'visible',          // ← was 1
}}>
<Box component="img" src={pump.imageUrl} alt={pump.modelCode}
  sx={{ 
    width: '100%', 
    height: '100%', 
    objectFit: 'contain',
    transform: 'scale(1.25)',   // ← 125%
    transformOrigin: 'center',
  }} 
/>
</Box>
        <Box sx={{ flex: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <Typography
              variant="caption"
              fontWeight={900}
              color="primary"
              sx={{ letterSpacing: 1 }}
            >
              TECHNICAL SPECIFICATIONS
            </Typography>
            <Chip
              label={pump.productFamily}
              size="small"
              color={FAMILY_COLORS[pump.productFamily] ?? "default"}
              sx={{ fontSize: "0.7rem", fontWeight: 700 }}
            />
          </Stack>
          <Stack direction="row" flexWrap="wrap" gap={3}>
            <Spec label="Model Code" value={pump.modelCode} />
            <Spec label="P2" value={`${pump.p2Kw} kW`} />
            {pump.voltage != null && (
              <Spec label="Voltage" value={`${pump.voltage}V`} />
            )}
            {pump.rpm != null && <Spec label="RPM" value={`${pump.rpm}`} />}
            {pump.deliverySizeMm != null && (
              <Spec label="Delivery Size" value={`${pump.deliverySizeMm}mm`} />
            )}
            {pump.maxSolidSizeMm != null && (
              <Spec label="Max Solid" value={`${pump.maxSolidSizeMm}mm`} />
            )}
            {pump.weightKg != null && (
              <Spec label="Weight" value={`${pump.weightKg}kg`} />
            )}
            {pump.diameterMm != null && (
              <Spec label="Diameter" value={`${pump.diameterMm}mm`} />
            )}
            {pump.phase != null && <Spec label="Phase" value={pump.phase} />}
            {pump.autoCouplingCode != null && (
              <Spec label="Auto Coupling" value={pump.autoCouplingCode} />
            )}
            {pump.inbuiltTop != null && (
              <Spec
                label="Inbuilt TOP"
                value={pump.inbuiltTop ? "Yes" : "No"}
              />
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

function ExpandCellRenderer({ data, context }: ICellRendererParams) {
  const theme = useTheme();
  if (data?._isDetail) return null;
  const isOpen = context?.openRows?.has(data?._rowId);
  return (
    <Box
      onClick={(e) => {
        e.stopPropagation();
        context?.toggleRow(data?._rowId);
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 24,
        cursor: "pointer",
        border: `1px solid ${isOpen ? theme.palette.primary.main : theme.palette.divider}`,
        borderRadius: "4px",
        color: isOpen ? "primary.main" : "text.disabled",
        "&:hover": { borderColor: "primary.main", color: "primary.main" },
      }}
    >
      {isOpen ? (
        <RemoveIcon sx={{ fontSize: 12 }} />
      ) : (
        <AddIcon sx={{ fontSize: 12 }} />
      )}
    </Box>
  );
}

function QuoteCellRenderer({ data, context }: ICellRendererParams) {
  if (data?._isDetail) return null;
  return (
    <Button
      size="small"
      variant="contained"
      onClick={(e) => {
        e.stopPropagation();
        context?.openQuote({
          id: data?.modelCode,
          name: `${data?.modelCode} — ${data?.productFamily} Pump`,
        });
      }}
      sx={{
        fontSize: "0.7rem",
        fontWeight: 700,
        py: 0.5,
        px: 1.5,
        borderRadius: "4px",
        textTransform: "none",
        whiteSpace: "nowrap",
        bgcolor: "primary.main",
        color: "#fff",
        boxShadow: "none",
        "&:hover": { bgcolor: "primary.dark", boxShadow: "none" },
      }}
    >
      Request Quote
    </Button>
  );
}

export default function AllPumpsTable({
  models,
  isFetching,
}: {
  models: PumpsItemDTO[];
  isFetching: boolean;
}) {
  const theme = useTheme();
  const [openRows, setOpenRows] = useState<Set<string>>(new Set());
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null);

  const toggleRow = useCallback((rowId: string) => {
    setOpenRows((prev) => {
      const next = new Set(prev);
      next.has(rowId) ? next.delete(rowId) : next.add(rowId);
      return next;
    });
  }, []);

  const openQuote = useCallback(
    (product: ProductForRFQ) => setQuoteProduct(product),
    [],
  );

  const rowData = useMemo(() => {
    const rows: any[] = [];
    models.forEach((p, i) => {
      const rowId = `${p.modelCode}-${i}`;
      rows.push({ ...p, _rowId: rowId, _isDetail: false });
      if (openRows.has(rowId))
        rows.push({ ...p, _rowId: rowId, _isDetail: true });
    });
    return rows;
  }, [models, openRows]);

  const colDefs: ColDef[] = useMemo(
    () => [
      {
        headerName: "",
        width: 40,
        pinned: "left" as const,
        sortable: false,
        cellRenderer: "expandCellRenderer",
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        } as any,
      },
      {
        field: "productFamily",
        headerName: "Category",
        width: 130,
        pinned: "left" as const,
        cellRenderer: "familyCellRenderer",
        cellStyle: { display: "flex", alignItems: "center" } as any,
      },
      {
        field: "modelCode",
        headerName: "Model Code",
        width: 170,
        pinned: "left" as const,
        cellStyle: {
          fontFamily: "monospace",
          fontWeight: "700",
          color: theme.palette.primary.main,
          fontSize: "0.8rem",
        } as any,
      },
      {
        field: "p2Kw",
        headerName: "P2 (kW)",
        width: 90,
        type: "numericColumn",
      },
      {
        field: "voltage",
        headerName: "Voltage (V)",
        width: 100,
        type: "numericColumn",
        valueFormatter: (p: any) => p.value ?? "—",
      },
      {
        field: "rpm",
        headerName: "RPM",
        width: 90,
        type: "numericColumn",
        valueFormatter: (p: any) => p.value ?? "—",
      },
      {
        field: "deliverySizeMm",
        headerName: "Delivery (mm)",
        width: 120,
        type: "numericColumn",
        valueFormatter: (p: any) => (p.value ? `${p.value}mm` : "—"),
      },
      {
        field: "maxSolidSizeMm",
        headerName: "Max Solid (mm)",
        width: 125,
        type: "numericColumn",
        valueFormatter: (p: any) => (p.value ? `${p.value}mm` : "—"),
      },
      {
        field: "weightKg",
        headerName: "Weight (kg)",
        width: 100,
        type: "numericColumn",
        valueFormatter: (p: any) => (p.value ? `${p.value}kg` : "—"),
      },
      {
        field: "diameterMm",
        headerName: "Diameter (mm)",
        width: 120,
        type: "numericColumn",
        valueFormatter: (p: any) => (p.value ? `${p.value}mm` : "—"),
      },
      {
        field: "phase",
        headerName: "Phase",
        width: 80,
        valueFormatter: (p: any) => p.value ?? "—",
      },
      {
        field: "autoCouplingCode",
        headerName: "Coupling",
        width: 100,
        valueFormatter: (p: any) => p.value ?? "—",
      },
      {
        headerName: "Quote",
        width: 140,
        sortable: false,
        pinned: "right" as const,
        cellRenderer: "quoteCellRenderer",
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        } as any,
      },
    ],
    [theme],
  );

  const defaultColDef: ColDef = useMemo(
    () => ({ sortable: true, resizable: true, filter: false }),
    [],
  );
  const isFullWidthRow = useCallback(
    (params: IsFullWidthRowParams) => params.rowNode.data?._isDetail === true,
    [],
  );
  const gridContext = useMemo(
    () => ({ openRows, toggleRow, openQuote }),
    [openRows, toggleRow, openQuote],
  );

  return (
    <>
      <Box sx={{ position: "relative" }}>
        {isFetching && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backdropFilter: "blur(2px)",
              bgcolor: "rgba(255,255,255,0.4)",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{
                bgcolor: "background.paper",
                px: 3,
                py: 1.5,
                borderRadius: "20px",
                boxShadow: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  animation: "pulse 1s ease-in-out infinite",
                  "@keyframes pulse": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.3 },
                  },
                }}
              />
              <Typography
                variant="caption"
                fontWeight={700}
                color="primary.main"
              >
                UPDATING
              </Typography>
            </Box>
          </Box>
        )}

        <Box
          className="ag-theme-alpine"
          sx={{
            width: "100%",
            opacity: isFetching ? 0.6 : 1,
            transition: "opacity 0.2s ease",
            "& .ag-root-wrapper": {
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: "8px",
            },
            "& .ag-header": {
              bgcolor: alpha(theme.palette.primary.main, 0.04),
              borderBottom: `2px solid ${theme.palette.primary.main}`,
            },
            "& .ag-header-cell-text": {
              fontSize: "0.72rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            },
            "& .ag-row": { borderBottom: `1px solid ${theme.palette.divider}` },
            "& .ag-row:hover": {
              bgcolor: `${alpha(theme.palette.primary.main, 0.03)} !important`,
            },
            "& .ag-row-even": { bgcolor: "background.paper" },
            "& .ag-row-odd": {
              bgcolor: alpha(theme.palette.primary.main, 0.01),
            },
            "& .ag-cell": { fontSize: "0.82rem" },
            "& .ag-paging-panel": {
              borderTop: `1px solid ${theme.palette.divider}`,
              fontSize: "0.8rem",
            },
           
            "& .ag-full-width-row": { 
  bgcolor: "transparent !important",
  overflow: "visible !important",  // ← ADD
},
"& .ag-full-width-container": {
  overflow: "visible !important",  // ← ADD
},
          }}
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            suppressColumnVirtualisation
            components={{
              expandCellRenderer: ExpandCellRenderer,
              detailPanelRenderer: DetailPanelRenderer,
              quoteCellRenderer: QuoteCellRenderer,
              familyCellRenderer: FamilyCellRenderer,
            }}
            context={gridContext}
            isFullWidthRow={isFullWidthRow}
            fullWidthCellRenderer="detailPanelRenderer"
            getRowHeight={(params) => (params.data?._isDetail ? 500 : 44)}
            pagination
            paginationPageSize={20}
            domLayout="autoHeight"
          />
        </Box>
      </Box>

      {quoteProduct && (
        <RFQModal
          open={!!quoteProduct}
          onClose={() => setQuoteProduct(null)}
          product={quoteProduct}
        />
      )}
    </>
  );
}
