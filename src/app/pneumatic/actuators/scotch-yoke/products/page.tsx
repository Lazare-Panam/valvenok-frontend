"use client";
import { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Collapse,
  Chip,
  Stack,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  Button,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useMediaQuery, Drawer } from "@mui/material";
import { ACTUATOR_DATA, type ActuatorItem } from "../pneumaticActuatorData";
import { CartItem } from "@/src/app/cart/hooks/useCartStore";
import { useCartStore } from "@/src/app/cart/hooks/useCartStore";
import ProductActionCells from "@/src/app/Common/ProductDetail/ProductActionCells";

interface Filters {
  actuatorTypes: string[];
  actions: string[];
}
const EMPTY_FILTERS: Filters = { actuatorTypes: [], actions: [] };

// ─── MAPPER ─────────────────────────────────────────────────────────────────

function toCartItem(row: ActuatorItem): CartItem {
  const descriptionParts = [
    `Type: ${row.actuatorType}`,
    `Action: ${row.action}`,
    `Size: ${row.size}mm`,
  ];

  return {
    id: row.model,
    name: `${row.model} — ${row.actuatorType} Pneumatic Actuator`,
    description: descriptionParts.join(", "),
    partNumber: row.model,
    price: row.priceGBP,
    quantity: 1,
    cloudinaryId: row.imageUrl,
  };
}

// ─── FILTER PIECES ──────────────────────────────────────────────────────────

function FilterGroup({
  title,
  count,
  children,
}: {
  title: string;
  count?: number;
  children: React.ReactNode;
}) {
  const theme = useTheme();
  return (
    <Accordion
      defaultExpanded
      disableGutters
      elevation={0}
      sx={{ bgcolor: "transparent", "&:before": { display: "none" }, mb: 0.5 }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />}
        sx={{
          px: 0,
          minHeight: 36,
          "& .MuiAccordionSummary-content": { my: 0.5 },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">
            {title}
          </Typography>
          {count ? (
            <Chip
              label={count}
              size="small"
              sx={{
                height: 16,
                fontSize: "0.65rem",
                bgcolor: theme.palette.primary.main,
                color: "#fff",
              }}
            />
          ) : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  );
}

function Sidebar({
  filters,
  setFilters,
  activeCount,
}: {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  activeCount: number;
}) {
  const theme = useTheme();
  const toggle = (key: keyof Filters, val: string) =>
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(val)
        ? prev[key].filter((v) => v !== val)
        : [...prev[key], val],
    }));

  return (
    <Box
      sx={{
        width: 220,
        flexShrink: 0,
        p: 2,
        borderRight: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        overflowY: "auto",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography
          variant="caption"
          fontWeight={900}
          letterSpacing={1}
          color="text.secondary"
        >
          FILTER
        </Typography>
        {activeCount > 0 && (
          <Typography
            variant="caption"
            fontWeight={700}
            sx={{ cursor: "pointer", color: theme.palette.primary.main }}
            onClick={() => setFilters(EMPTY_FILTERS)}
          >
            Clear all
          </Typography>
        )}
      </Stack>
      <FilterGroup
        title="ACTUATOR TYPE"
        count={filters.actuatorTypes.length || undefined}
      >
        {(["Scotch-Yoke", "Rack & Pinion"] as const).map((opt) => (
          <FormControlLabel
            key={opt}
            control={
              <Checkbox
                size="small"
                checked={filters.actuatorTypes.includes(opt)}
                onChange={() => toggle("actuatorTypes", opt)}
                sx={{
                  py: 0.25,
                  "&.Mui-checked": { color: theme.palette.primary.main },
                }}
              />
            }
            label={
              <Typography variant="body2" fontSize="0.78rem">
                {opt}
              </Typography>
            }
          />
        ))}
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup
        title="ACTION TYPE"
        count={filters.actions.length || undefined}
      >
        {(["Double Acting", "Spring Return"] as const).map((opt) => (
          <FormControlLabel
            key={opt}
            control={
              <Checkbox
                size="small"
                checked={filters.actions.includes(opt)}
                onChange={() => toggle("actions", opt)}
                sx={{
                  py: 0.25,
                  "&.Mui-checked": { color: theme.palette.primary.main },
                }}
              />
            }
            label={
              <Typography variant="body2" fontSize="0.78rem">
                {opt}
              </Typography>
            }
          />
        ))}
      </FilterGroup>
    </Box>
  );
}

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
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

// ─── ROW ────────────────────────────────────────────────────────────────────

function ActuatorRow({ row }: { row: ActuatorItem }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(toCartItem(row));
  };

  const seriesColor =
    row.actuatorType === "Scotch-Yoke"
      ? { bg: alpha("#1565C0", 0.1), text: "#0D47A1" }
      : { bg: alpha("#2E7D32", 0.1), text: "#1B5E20" };

  const actionColor =
    row.action === "Double Acting"
      ? {
          bg: alpha(theme.palette.primary.main, 0.08),
          text: theme.palette.primary.dark,
        }
      : { bg: alpha("#E65100", 0.08), text: "#BF360C" };

  const cartBtnSx = {
    fontSize: "0.7rem",
    fontWeight: 700,
    py: 0.5,
    px: 1.5,
    borderRadius: "4px",
    textTransform: "capitalize" as const,
    whiteSpace: "nowrap" as const,
    boxShadow: "none",
    backgroundColor: "#2e7d32",
    "&:hover": { boxShadow: "none", backgroundColor: "#1b5e20" },
  };

  return (
    <>
      <TableRow
        hover
        onClick={() => setOpen((o) => !o)}
        sx={{
          cursor: "pointer",
          bgcolor: open ? alpha(theme.palette.primary.main, 0.04) : "inherit",
          "&:hover": {
            bgcolor: `${alpha(theme.palette.primary.main, 0.03)} !important`,
          },
        }}
      >
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((o) => !o);
            }}
          >
            {open ? (
              <KeyboardArrowUpIcon fontSize="small" />
            ) : (
              <KeyboardArrowDownIcon fontSize="small" />
            )}
          </IconButton>
        </TableCell>
        <TableCell
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: theme.palette.primary.main,
            fontSize: "0.8rem",
            py: 1,
          }}
        >
          {row.model}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip
            label={row.actuatorType}
            size="small"
            sx={{
              fontSize: "0.65rem",
              fontWeight: 700,
              bgcolor: seriesColor.bg,
              color: seriesColor.text,
            }}
          />
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip
            label={row.action}
            size="small"
            sx={{
              fontSize: "0.65rem",
              fontWeight: 700,
              bgcolor: actionColor.bg,
              color: actionColor.text,
            }}
          />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontWeight: 600 }}>
          {row.size} mm
        </TableCell>
        <TableCell
          sx={{
            py: 1,
            fontSize: "0.82rem",
            fontFamily: "monospace",
            fontWeight: 700,
            color: theme.palette.primary.dark,
          }}
        >
          £
          {row.priceGBP.toLocaleString("en-GB", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </TableCell>
        <ProductActionCells
          detailHref={`/pneumatic/actuators/scotch-yoke/products/${encodeURIComponent(row.model)}`}
          secondaryLabel="Add to Cart"
          onSecondary={handleAddToCart}
          secondaryBg="#2e7d32"
          secondaryHoverBg="#1b5e20"
        />
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={8} sx={{ p: 0, borderBottom: "none" }}>
            <Collapse in unmountOnExit>
              <Box
                sx={{
                  p: 3,
                  bgcolor: alpha(theme.palette.primary.main, 0.02),
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={4}
                  alignItems="flex-start"
                >
                  <Box
                    sx={{
                      width: 140,
                      height: 140,
                      flexShrink: 0,
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 1,
                      bgcolor: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src={row.imageUrl}
                      alt={row.model}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="caption"
                      fontWeight={900}
                      color="primary"
                      sx={{ display: "block", mb: 2, letterSpacing: 1 }}
                    >
                      SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Model" value={row.model} />
                      <Spec label="Series" value={row.series} />
                      <Spec label="Actuator Type" value={row.actuatorType} />
                      <Spec label="Action" value={row.action} />
                      <Spec label="Size" value={`${row.size} mm`} />
                      <Spec
                        label="Price (GBP)"
                        value={`£${row.priceGBP.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                      />
                      <Spec label="Certifications" value="CE · ATEX · SIL" />
                    </Stack>
                    <Button
                      variant="contained"
                      onClick={handleAddToCart}
                      sx={cartBtnSx}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}

// ─── PAGE ───────────────────────────────────────────────────────────────────

export default function PneumaticActuatorPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:1200px)");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
  const [sortKey, setSortKey] = useState("size");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const filtered = useMemo(
    () =>
      ACTUATOR_DATA.filter((r) => {
        if (
          filters.actuatorTypes.length &&
          !filters.actuatorTypes.includes(r.actuatorType)
        )
          return false;
        if (filters.actions.length && !filters.actions.includes(r.action))
          return false;
        return true;
      }),
    [filters],
  );

  const sorted = [...filtered].sort((a, b) => {
    const av = (a as any)[sortKey] ?? 0;
    const bv = (b as any)[sortKey] ?? 0;
    if (av < bv) return sortDir === "asc" ? -1 : 1;
    if (av > bv) return sortDir === "asc" ? 1 : -1;
    return 0;
  });

  const activeCount = filters.actuatorTypes.length + filters.actions.length;

  const headerSx = {
    bgcolor: alpha(theme.palette.primary.main, 0.04),
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    fontWeight: 700,
    fontSize: "0.72rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
  };

  const handleSort = (key: string) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const sidebar = (
    <Sidebar
      filters={filters}
      setFilters={setFilters}
      activeCount={activeCount}
    />
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "#f8f9fa",
      }}
    >
      <Box
        sx={{
          p: 4,
          borderBottom: `1px solid ${theme.palette.divider}`,
          bgcolor: "background.paper",
        }}
      >
        <Typography
          variant="h1"
          fontWeight={800}
          mb={1}
          sx={{ color: theme.palette.primary.main }}
        >
          Pneumatic Actuators for Industrial Valve Automation
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          mb={2}
          sx={{ maxWidth: 700 }}
        >
          Scotch-Yoke and Rack &amp; Pinion pneumatic actuators for industrial
          valve automation. Available in double acting and spring return
          configurations with CE, ATEX, and SIL certifications.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {[
            "CE Certified",
            "ATEX",
            "SIL",
            "Scotch-Yoke",
            "Rack & Pinion",
            "Double Acting",
            "Spring Return",
          ].map((s) => (
            <Box
              key={s}
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: "20px",
                fontSize: "0.75rem",
                fontWeight: 600,
                bgcolor: alpha(theme.palette.primary.main, 0.08),
                color: theme.palette.primary.dark,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              }}
            >
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

        {activeCount > 0 && (
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            flexWrap="wrap"
            mb={2}
          >
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={700}
            >
              ACTIVE FILTERS:
            </Typography>
            {filters.actuatorTypes.map((v) => (
              <Chip
                key={v}
                label={v}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                }}
                onDelete={() =>
                  setFilters((p) => ({
                    ...p,
                    actuatorTypes: p.actuatorTypes.filter((x) => x !== v),
                  }))
                }
              />
            ))}
            {filters.actions.map((v) => (
              <Chip
                key={v}
                label={v}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                }}
                onDelete={() =>
                  setFilters((p) => ({
                    ...p,
                    actions: p.actions.filter((x) => x !== v),
                  }))
                }
              />
            ))}
          </Stack>
        )}

        <Typography
          variant="caption"
          fontWeight={700}
          color="text.secondary"
          sx={{ display: "block", mb: 1 }}
        >
          {filtered.length} CONFIGURATIONS
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "stretch",
            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            borderRadius: "8px",
            overflow: "hidden",
            bgcolor: "background.paper",
          }}
        >
          {!isMobile && sidebar}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <TableContainer>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ ...headerSx, width: 40 }} />
                    {[
                      { key: "model", label: "Model" },
                      { key: "actuatorType", label: "Actuator Type" },
                      { key: "action", label: "Action" },
                      { key: "size", label: "Size (mm)" },
                      { key: "priceGBP", label: "Price (GBP)" },
                      { key: null, label: "Details" },
                      { key: null, label: "Cart" },
                    ].map((h, i) => (
                      <TableCell key={i} sx={headerSx}>
                        {h.key ? (
                          <TableSortLabel
                            active={sortKey === h.key}
                            direction={sortKey === h.key ? sortDir : "asc"}
                            onClick={() => handleSort(h.key!)}
                          >
                            {h.label}
                          </TableSortLabel>
                        ) : (
                          h.label
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sorted.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} align="center" sx={{ py: 6 }}>
                        <Typography variant="body2" color="text.secondary">
                          No actuators match the selected filters.
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ) : (
                    sorted.map((row) => <ActuatorRow key={row.id} row={row} />)
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
          {sidebar}
        </Drawer>
      </Box>
    </Box>
  );
}
