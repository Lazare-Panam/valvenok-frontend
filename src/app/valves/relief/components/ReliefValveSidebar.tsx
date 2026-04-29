'use client'
import {
  Box, Stack, Typography, Chip, Divider, Accordion, AccordionSummary,
  AccordionDetails, FormGroup, FormControlLabel, Checkbox, Skeleton
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useTheme } from "@mui/material/styles"
import { ReliefValveFilterOptions } from "@/src/api/reliefValveApi"
export interface ReliefValveFilters {
  series: string[]
  bodyMaterials: string[]
  connectionSizes: string[]
  threadTypes: string[]
  connectionTypes: string[]
  springs: string[]
  sealMaterials: string[]
}

export const EMPTY_RELIEF_VALVE_FILTERS: ReliefValveFilters = {
  series: [],
  bodyMaterials: [],
  connectionSizes: [],
  threadTypes: [],
  connectionTypes: [],
  springs: [],
  sealMaterials: [],
}

export const SERIES_LABELS: Record<string, string> = {
  RVL: "RVL — Low Pressure",
  RVH: "RVH — High Pressure",
  "PRVH-10K": "PRVH-10K (10,000 psi)",
  "PRVH-15K": "PRVH-15K (15,000 psi)",
}

export const BODY_MATERIAL_LABELS: Record<string, string> = {
  SS: "SS 316",
  SSL: "SS 316L",
  B: "Brass",
}

export const CONNECTION_TYPE_LABELS: Record<string, string> = {
  OD: "OD — Tube Fitting",
  FF: "FF — Female x Female",
  MF: "MF — Male x Female",
  MM: "MM — Male x Male",
  MOD: "MOD — Male x OD",
}

export const THREAD_TYPE_LABELS: Record<string, string> = {
  NPT: "NPT",
  BSPT: "BSPT",
  BSPP: "BSPP",
}

export const SEAL_MATERIAL_LABELS: Record<string, string> = {
  FKM: "FKM (Fluorocarbon)",
  NBR: "NBR (Buna-N)",
  EPDM: "EPDM (Ethylene Propylene)",
  KZ: "KZ (Kalrez FFKM)",
}

export const SPRING_LABELS: Record<string, string> = {
  L: "L — Purple (10–225 psi)",
  A: "A — White (50–350 psi)",
  B: "B — Blue (350–750 psi)",
  C: "C — Gold (750–1500 psi)",
  D: "D — Black (1500–2250 psi)",
  E: "E — Green (2250–3000 psi)",
  F: "F — Yellow (3000–4000 psi)",
  G: "G — Brown (4000–5000 psi)",
  H: "H — Orange (5000–6000 psi)",
  I: "I — Pink (5000–10000 psi)",
  J: "J — Red (7500–15000 psi)",
}

export const CONNECTION_SIZE_LABELS: Record<string, string> = {
  "04": '1/4"',
  "06": '3/8"',
  "08": '1/2"',
  "10": '5/8"',
  "12": '3/4"',
  "16": '1"',
  M06: "6mm",
  M08: "8mm",
  M10: "10mm",
  M12: "12mm",
  "20M": "M20x1.5",
}

interface Props {
  filters: ReliefValveFilters
  setFilters: React.Dispatch<React.SetStateAction<ReliefValveFilters>>
  filterOptions?: ReliefValveFilterOptions
  filtersLoading: boolean
  activeCount: number
}

function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  const theme = useTheme()
  return (
    <Accordion defaultExpanded disableGutters elevation={0} sx={{ bgcolor: "transparent", "&:before": { display: "none" }, mb: 0.5 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, "& .MuiAccordionSummary-content": { my: 0.5 } }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
          {count ? <Chip label={count} size="small" sx={{ height: 16, fontSize: "0.65rem", bgcolor: theme.palette.primary.main, color: "#fff" }} /> : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

function StringCheckbox({ options, selected, onChange, loading, labelMap }: {
  options: string[]
  selected: string[]
  onChange: (v: string) => void
  loading?: boolean
  labelMap?: Record<string, string>
}) {
  const theme = useTheme()
  if (loading) return <Skeleton height={50} />
  if (!options?.length) return <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options</Typography>
  return (
    <>
      {options.map(opt => (
        <FormControlLabel key={opt}
          control={<Checkbox size="small" checked={selected.includes(opt)} onChange={() => onChange(opt)} sx={{ py: 0.25, "&.Mui-checked": { color: theme.palette.primary.main } }} />}
          label={<Typography variant="body2" fontSize="0.78rem">{labelMap?.[opt] ?? opt}</Typography>}
        />
      ))}
    </>
  )
}

export function ReliefValveSidebar({ filters, setFilters, filterOptions, filtersLoading, activeCount }: Props) {
  const theme = useTheme()

  const toggle = (key: keyof ReliefValveFilters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(val)
        ? (prev[key] as string[]).filter(v => v !== val)
        : [...(prev[key] as string[]), val],
    }))

  return (
    <Box sx={{
      width: 260, flexShrink: 0, p: 2,
      borderRight: "1px solid", borderColor: "divider",
      bgcolor: "background.paper",
      overflowY: "auto", boxSizing: "border-box",
    }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: "pointer", color: theme.palette.primary.main }}
            onClick={() => setFilters(EMPTY_RELIEF_VALVE_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="SERIES" count={filters.series.length || undefined}>
        <StringCheckbox options={filterOptions?.series ?? []} selected={filters.series} onChange={v => toggle("series", v)} loading={filtersLoading} labelMap={SERIES_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="BODY MATERIAL" count={filters.bodyMaterials.length || undefined}>
        <StringCheckbox options={filterOptions?.bodyMaterials ?? []} selected={filters.bodyMaterials} onChange={v => toggle("bodyMaterials", v)} loading={filtersLoading} labelMap={BODY_MATERIAL_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="CONNECTION SIZE" count={filters.connectionSizes.length || undefined}>
        <StringCheckbox options={filterOptions?.connectionSizes ?? []} selected={filters.connectionSizes} onChange={v => toggle("connectionSizes", v)} loading={filtersLoading} labelMap={CONNECTION_SIZE_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="THREAD TYPE" count={filters.threadTypes.length || undefined}>
        <StringCheckbox options={filterOptions?.threadTypes ?? []} selected={filters.threadTypes} onChange={v => toggle("threadTypes", v)} loading={filtersLoading} labelMap={THREAD_TYPE_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="CONNECTION TYPE" count={filters.connectionTypes.length || undefined}>
        <StringCheckbox options={filterOptions?.connectionTypes ?? []} selected={filters.connectionTypes} onChange={v => toggle("connectionTypes", v)} loading={filtersLoading} labelMap={CONNECTION_TYPE_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="SPRING" count={filters.springs.length || undefined}>
        <StringCheckbox options={filterOptions?.springs ?? []} selected={filters.springs} onChange={v => toggle("springs", v)} loading={filtersLoading} labelMap={SPRING_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="SEAL MATERIAL" count={filters.sealMaterials.length || undefined}>
        <StringCheckbox options={filterOptions?.sealMaterials ?? []} selected={filters.sealMaterials} onChange={v => toggle("sealMaterials", v)} loading={filtersLoading} labelMap={SEAL_MATERIAL_LABELS} />
      </FilterGroup>
    </Box>
  )
}