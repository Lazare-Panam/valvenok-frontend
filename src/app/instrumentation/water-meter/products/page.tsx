"use client";

import { useState, useMemo } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
  Typography,
  Stack,
  IconButton,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Chip,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterListIcon from "@mui/icons-material/FilterList";

const BRAND_GREEN = "#61D649";
const QUOTE_EMAIL = "sales@spacuk.co.uk";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

// ─── DATA ─────────────────────────────────────────────────────────────────────

interface WaterMeterDTO {
  id: string;
  model: string;
  name: string;
  type: string;
  size: string;
  standard: string;
  maxTemp: string;
  maxPressure: string;
  features: string;
  note: string;
  image: string;
  description: string;
  badges: string[];
}

const WATER_METERS: WaterMeterDTO[] = [
  {
    id: "upc-mjtc-112",
    model: "UPC-MJTC-112",
    name: "Multijet Cold Water Meter",
    type: "Multijet",
    size: "15mm – 50mm",
    standard: "ISO 4064 / ISI",
    maxTemp: "< 50°C",
    maxPressure: "< 1.6 MPa (Class B)",
    features: "Lower Transmission Resistance, Low Pressure Loss, Long Working Life",
    note: "15mm ISI Marked",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/water-meter/mj-cold.webp",
    description:
      "Multijet Cold Water Meters designed for accurate and long-lasting water flow measurement. Featuring a durable design, corrosion resistance, and smooth operation, these meters ensure precise readings in residential, commercial, and industrial applications.",
    badges: ["Multijet", "Cold", "ISO 4064", "ISI Marked", "Class B", "Brass Body"],
  },
  {
    id: "upc-mjth-112",
    model: "UPC-MJTH-112",
    name: "Multijet Hot Water Meter",
    type: "Multijet",
    size: "15mm – 50mm",
    standard: "ISO 4064",
    maxTemp: "< 90°C",
    maxPressure: "< 1.6 MPa (Class B)",
    features: "Lower Transmission Resistance, Low Pressure Loss, Long Working Life",
    note: "—",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/water-meter/mj-hot.webp",
    description:
      "Multijet Hot Water Meters designed for accurate and efficient measurement of high-temperature water flow. Built for durability and long-term performance, these meters ensure precise readings, corrosion resistance, and smooth operation in residential, commercial, and industrial systems.",
    badges: ["Multijet", "Hot", "ISO 4064", "Class B", "Brass Body"],
  },
  {
    id: "upc-wmc-110",
    model: "UPC-WMC-110",
    name: "Woltman Cold Water Meter",
    type: "Woltman",
    size: "40mm – 400mm",
    standard: "ISO 4064:1993 Class B",
    maxTemp: "Up to 50°C",
    maxPressure: "< 1.6 MPa",
    features: "Magnetic Drive, Lower Transmission Resistance, Low Pressure Loss, Long Working Life, Not Affected by External Magnetic Field, Register Rotatable 360°, Dry Dial Register",
    note: "—",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/water-meter/w-cold.webp",
    description:
      "Woltman Type Cold Water Meters for precise and durable cold water flow measurement. Magnetic drive design not affected by external magnetic fields. Register may be rotated through 360° and dry dial register ensures clear reading. Ideal for industrial, commercial, and municipal water supply systems.",
    badges: ["Woltman", "Cold", "ISO 4064", "Class B", "Magnetic Drive", "360° Register"],
  },
  {
    id: "upc-wmh-110",
    model: "UPC-WMH-110",
    name: "Woltman Hot Water Meter",
    type: "Woltman",
    size: "40mm – 400mm",
    standard: "ISO 4064:1993 Class B",
    maxTemp: "Up to 90°C",
    maxPressure: "< 1.6 MPa",
    features: "Magnetic Drive, Lower Transmission Resistance, Low Pressure Loss, Long Working Life, Not Affected by External Magnetic Field, Register Rotatable 360°, Dry Dial Register",
    note: "—",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/water-meter/w-hot.webp",
    description:
      "Woltman Type Hot Water Meters for accurate and reliable high-temperature water flow measurement. Magnetic drive with 360° rotatable register and dry dial for clear reading. Ideal for industrial and commercial heating systems.",
    badges: ["Woltman", "Hot", "ISO 4064", "Class B", "Magnetic Drive", "360° Register"],
  },
  {
    id: "upc-wmsh-110",
    model: "UPC-WMSH-110",
    name: "Woltman Superhot Water Meter",
    type: "Woltman",
    size: "40mm – 200mm",
    standard: "ISO 4064:1993 Class B",
    maxTemp: "Up to 130°C",
    maxPressure: "< 1.6 MPa",
    features: "Magnetic Drive, Lower Transmission Resistance, Low Pressure Loss, Long Working Life, Not Affected by External Magnetic Field, Register Rotatable 360°, Dry Dial Register",
    note: "—",
    image: "https://pblol2.blob.core.windows.net/valvenok-images/products/water-meter/w-superhot.png",
    description:
      "Woltman Superhot Water Meters for accurate hot water flow measurement at extreme temperatures up to 130°C. Built for durability and efficiency, ideal for industrial and commercial high-temperature applications. Magnetic drive with 360° rotatable dry dial register.",
    badges: ["Woltman", "Superhot", "ISO 4064", "Class B", "Magnetic Drive", "130°C"],
  },
];

// ─── FILTERS ──────────────────────────────────────────────────────────────────

interface Filters {
  types: string[];
  temps: string[];
}

const EMPTY_FILTERS: Filters = { types: [], temps: [] };

function getTempCategory(meter: WaterMeterDTO): string {
  if (meter.maxTemp.includes("130")) return "Superhot (≤ 130°C)";
  if (meter.maxTemp.includes("90")) return "Hot (≤ 90°C)";
  return "Cold (≤ 50°C)";
}

function applyFilters(data: WaterMeterDTO[], filters: Filters): WaterMeterDTO[] {
  return data.filter((v) => {
    if (filters.types.length && !filters.types.includes(v.type)) return false;
    if (filters.temps.length && !filters.temps.includes(getTempCategory(v))) return false;
    return true;
  });
}

// ─── MAILTO ───────────────────────────────────────────────────────────────────

function buildMailto(v: WaterMeterDTO) {
  const subject = encodeURIComponent(`Quote Request — ${v.name} (${v.model})`);
  const body = encodeURIComponent(
    [
      `Hello,`,
      ``,
      `I would like to request a quote for the following water meter:`,
      ``,
      `Model:          ${v.model}`,
      `Name:           ${v.name}`,
      `Type:           ${v.type}`,
      `Size:           ${v.size}`,
      `Standard:       ${v.standard}`,
      `Max Temp:       ${v.maxTemp}`,
      `Max Pressure:   ${v.maxPressure}`,
      ``,
      `Please provide availability and lead time.`,
      ``,
      `Kind regards`,
    ].join("\n"),
  );
  return `mailto:${QUOTE_EMAIL}?subject=${subject}&body=${body}`;
}

// ─── SPEC CELL ────────────────────────────────────────────────────────────────

function Spec({ label, value }: { label: string; value: string }) {
  if (!value || value === "—") return null;
  return (
    <Box sx={{ minWidth: 140 }}>
      <Typography
        variant="caption"
        color="text.disabled"
        fontWeight={700}
        sx={{ display: "block", textTransform: "uppercase", mb: 0.25, fontSize: "0.65rem", letterSpacing: "0.05em" }}
      >
        {label}
      </Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>
        {value}
      </Typography>
    </Box>
  );
}

// ─── TABLE ROW ────────────────────────────────────────────────────────────────

function MeterRow({ row }: { row: WaterMeterDTO }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow
        hover
        onClick={() => setOpen((o) => !o)}
        sx={{
          cursor: "pointer",
          bgcolor: open ? alpha(BRAND_GREEN, 0.03) : "inherit",
          "&:hover": { bgcolor: `${alpha(BRAND_GREEN, 0.03)} !important` },
        }}
      >
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton
            size="small"
            onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
            sx={{
              border: "1px solid",
              borderColor: open ? BRAND_GREEN : "rgba(0,0,0,0.2)",
              borderRadius: "4px",
              color: open ? BRAND_GREEN : "text.disabled",
            }}
          >
            {open ? <KeyboardArrowUpIcon sx={{ fontSize: 12 }} /> : <KeyboardArrowDownIcon sx={{ fontSize: 12 }} />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontWeight: 700, fontSize: "0.82rem", py: 1, fontFamily: "monospace", color: BRAND_GREEN }}>
          {row.model}
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT, fontWeight: 600 }}>
          {row.name}
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>
          {row.size}
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>
          {row.maxTemp}
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>
          {row.maxPressure}
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>
          {row.standard}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button
            size="small"
            variant="contained"
            startIcon={<EmailIcon sx={{ fontSize: 13 }} />}
            component="a"
            href={buildMailto(row)}
            onClick={(e) => e.stopPropagation()}
            sx={{
              fontSize: "0.7rem",
              fontWeight: 700,
              py: 0.5,
              px: 1.5,
              borderRadius: "4px",
              textTransform: "capitalize",
              whiteSpace: "nowrap",
              bgcolor: BRAND_GREEN,
              color: "#fff",
              boxShadow: "none",
              "&:hover": { bgcolor: "#50c23a", boxShadow: "none" },
            }}
          >
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell
          colSpan={8}
          sx={{ p: 0, borderBottom: open ? "1px solid rgba(0,0,0,0.06)" : "none" }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{
                p: 3,
                bgcolor: alpha(BRAND_GREEN, 0.02),
                borderLeft: `4px solid ${BRAND_GREEN}`,
                borderBottom: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="flex-start">
                <Box
                  sx={{
                    width: 180,
                    height: 180,
                    flexShrink: 0,
                    border: `1px solid ${alpha(BRAND_GREEN, 0.15)}`,
                    borderRadius: 2,
                    bgcolor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={row.image}
                    alt={row.name}
                    sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="caption"
                    fontWeight={900}
                    sx={{ letterSpacing: 1, display: "block", mb: 1, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}
                  >
                    DESCRIPTION
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, fontFamily: PRIMARY_FONT }}>
                    {row.description}
                  </Typography>

                  <Typography
                    variant="caption"
                    fontWeight={900}
                    sx={{ letterSpacing: 1, display: "block", mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}
                  >
                    SPECIFICATIONS
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={3} mb={2}>
                    <Spec label="Model" value={row.model} />
                    <Spec label="Type" value={row.type} />
                    <Spec label="Size" value={row.size} />
                    <Spec label="Standard" value={row.standard} />
                    <Spec label="Max Temperature" value={row.maxTemp} />
                    <Spec label="Max Pressure" value={row.maxPressure} />
                    {row.note !== "—" && <Spec label="Note" value={row.note} />}
                  </Stack>

                  <Typography
                    variant="caption"
                    fontWeight={900}
                    sx={{ letterSpacing: 1, display: "block", mb: 1, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}
                  >
                    FEATURES
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, fontFamily: PRIMARY_FONT }}>
                    {row.features}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 3 }}>
                    {row.badges.map((b) => (
                      <Chip
                        key={b}
                        label={b}
                        size="small"
                        sx={{ fontSize: "0.68rem", fontWeight: 700, bgcolor: alpha(BRAND_GREEN, 0.1), color: "#2d8a1e" }}
                      />
                    ))}
                  </Box>

                  <Button
                    variant="contained"
                    startIcon={<EmailIcon />}
                    component="a"
                    href={buildMailto(row)}
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 700,
                      borderRadius: "6px",
                      bgcolor: BRAND_GREEN,
                      color: "#fff",
                      boxShadow: "none",
                      "&:hover": { bgcolor: "#50c23a", boxShadow: "none" },
                      fontFamily: PRIMARY_FONT,
                    }}
                  >
                    Request Quote
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

// ─── TABLE ────────────────────────────────────────────────────────────────────

function MeterTable({ models }: { models: WaterMeterDTO[] }) {
  const headerSx = {
    bgcolor: alpha(BRAND_GREEN, 0.04),
    borderBottom: `2px solid ${BRAND_GREEN}`,
    fontSize: "0.72rem",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    color: "text.primary",
    py: 1.5,
  };
  return (
    <Box sx={{ flex: 1, minWidth: 0 }}>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={headerSx} />
              <TableCell sx={headerSx}>Model</TableCell>
              <TableCell sx={headerSx}>Name</TableCell>
              <TableCell sx={headerSx}>Size</TableCell>
              <TableCell sx={headerSx}>Max Temp</TableCell>
              <TableCell sx={headerSx}>Max Pressure</TableCell>
              <TableCell sx={headerSx}>Standard</TableCell>
              <TableCell sx={headerSx} align="center">Quote</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {models.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} sx={{ py: 6, textAlign: "center" }}>
                  <Typography variant="body2" color="text.secondary">
                    No meters match the current filters.
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              models.map((row) => <MeterRow key={row.id} row={row} />)
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────

function Sidebar({
  filters,
  setFilters,
  activeCount,
}: {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  activeCount: number;
}) {
  const toggleType = (v: string) =>
    setFilters((prev) => ({
      ...prev,
      types: prev.types.includes(v) ? prev.types.filter((x) => x !== v) : [...prev.types, v],
    }));
  const toggleTemp = (v: string) =>
    setFilters((prev) => ({
      ...prev,
      temps: prev.temps.includes(v) ? prev.temps.filter((x) => x !== v) : [...prev.temps, v],
    }));

  const typeOptions = Array.from(new Set(WATER_METERS.map((v) => v.type)));
  const tempOptions = Array.from(new Set(WATER_METERS.map(getTempCategory)));

  return (
    <Box
      sx={{
        width: 200,
        flexShrink: 0,
        p: 2,
        borderRight: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        boxSizing: "border-box",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">
          FILTER
        </Typography>
        {activeCount > 0 && (
          <Typography
            variant="caption"
            fontWeight={700}
            sx={{ cursor: "pointer", color: BRAND_GREEN }}
            onClick={() => setFilters(EMPTY_FILTERS)}
          >
            Clear all
          </Typography>
        )}
      </Stack>

      <Accordion disableGutters elevation={0} defaultExpanded sx={{ bgcolor: "transparent", "&:before": { display: "none" } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, "& .MuiAccordionSummary-content": { my: 0.5 } }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="caption" fontWeight={700} color="text.primary">TYPE</Typography>
            {filters.types.length > 0 && (
              <Chip label={filters.types.length} size="small" sx={{ height: 16, fontSize: "0.65rem", bgcolor: BRAND_GREEN, color: "#fff" }} />
            )}
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, pt: 0 }}>
          <FormGroup>
            {typeOptions.map((opt) => (
              <FormControlLabel
                key={opt}
                control={<Checkbox size="small" checked={filters.types.includes(opt)} onChange={() => toggleType(opt)} sx={{ py: 0.25, "&.Mui-checked": { color: BRAND_GREEN } }} />}
                label={<Typography variant="body2" fontSize="0.8rem">{opt}</Typography>}
                sx={{ mr: 0 }}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters elevation={0} defaultExpanded sx={{ bgcolor: "transparent", "&:before": { display: "none" } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, "& .MuiAccordionSummary-content": { my: 0.5 } }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="caption" fontWeight={700} color="text.primary">TEMPERATURE</Typography>
            {filters.temps.length > 0 && (
              <Chip label={filters.temps.length} size="small" sx={{ height: 16, fontSize: "0.65rem", bgcolor: BRAND_GREEN, color: "#fff" }} />
            )}
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, pt: 0 }}>
          <FormGroup>
            {tempOptions.map((opt) => (
              <FormControlLabel
                key={opt}
                control={<Checkbox size="small" checked={filters.temps.includes(opt)} onChange={() => toggleTemp(opt)} sx={{ py: 0.25, "&.Mui-checked": { color: BRAND_GREEN } }} />}
                label={<Typography variant="body2" fontSize="0.8rem">{opt}</Typography>}
                sx={{ mr: 0 }}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

// ─── ACTIVE FILTERS ───────────────────────────────────────────────────────────

function ActiveFilters({ filters, setFilters }: { filters: Filters; setFilters: React.Dispatch<React.SetStateAction<Filters>> }) {
  const chips: { label: string; onDelete: () => void }[] = [];
  filters.types.forEach((v) => chips.push({ label: `Type: ${v}`, onDelete: () => setFilters((p) => ({ ...p, types: p.types.filter((x) => x !== v) })) }));
  filters.temps.forEach((v) => chips.push({ label: `Temp: ${v}`, onDelete: () => setFilters((p) => ({ ...p, temps: p.temps.filter((x) => x !== v) })) }));
  if (!chips.length) return null;
  return (
    <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
      <Typography variant="caption" color="text.disabled" fontWeight={700}>ACTIVE FILTERS:</Typography>
      {chips.map((c) => (
        <Chip key={c.label} label={c.label} size="small" variant="outlined" sx={{ borderColor: BRAND_GREEN, color: BRAND_GREEN }} onDelete={c.onDelete} />
      ))}
    </Stack>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function WaterMeterProductsPage() {
  const isMobile = useMediaQuery("(max-width:1200px)");
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
  const [mobileOpen, setMobileOpen] = useState(false);

  const models = useMemo(() => applyFilters(WATER_METERS, filters), [filters]);
  const activeCount = filters.types.length + filters.temps.length;

  const sidebar = <Sidebar filters={filters} setFilters={setFilters} activeCount={activeCount} />;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          Water Meters
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700, fontFamily: PRIMARY_FONT }}>
          UPC Instruments water meters for accurate and reliable flow measurement across residential, commercial, and industrial applications.
          Available in Multijet and Woltman types for cold, hot, and superhot water service.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["Multijet · Woltman", "Cold · Hot · Superhot", "ISO 4064", "15mm – 400mm", "Up to 130°C"].map((s) => (
            <Box
              key={s}
              sx={{
                px: 1.5, py: 0.5, borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600,
                bgcolor: alpha(BRAND_GREEN, 0.08), color: "#2d8a1e",
                border: `1px solid ${alpha(BRAND_GREEN, 0.3)}`, fontFamily: PRIMARY_FONT,
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
        <ActiveFilters filters={filters} setFilters={setFilters} />
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${models.length} MODELS`}
        </Typography>
        <Box
          sx={{
            display: "flex", alignItems: "stretch",
            border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`,
            borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper",
          }}
        >
          {!isMobile && sidebar}
          <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
          <MeterTable models={models} />
        </Box>
      </Box>
    </Box>
  );
}