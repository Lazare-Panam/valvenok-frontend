'use client'
import {
  Box, Stack, Typography, Chip, Divider, Accordion, AccordionSummary,
  AccordionDetails, FormGroup, FormControlLabel, Checkbox, Skeleton
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useTheme } from "@mui/material/styles"

import { APFittingFilterOptions } from "@/src/api/pneumaticApi"
export interface APFittingFilters {
  series: string[]
  fittingTypes: string[]
  tubeSizes: number[]
  threadSizes: string[]
}

export const EMPTY_AP_FITTING_FILTERS: APFittingFilters = {
  series: [],
  fittingTypes: [],
  tubeSizes: [],
  threadSizes: [],
}

export const AP_FITTING_TYPE_LABELS: Record<string, string> = {
  C: "Male Connector",
  L: "Male Elbow",
  B: "Male Branch TEE",
  D: "Male Run TEE",
  X: "Male Branch Y",
  KB: "Equal Male Multi TEE",
  H: "Banjo Elbow",
  LF: "Female Elbow",
  E: "Equal TEE",
  CF: "Female Connector",
  P: "Blanking Plug",
  ZA: "Equal Cross",
  Y: "Equal Y",
  K: "Equal Multi TEE",
  V: "Equal Elbow",
  M: "Bulkhead Connector",
  EG: "Unequal TEE (2B-1S)",
  U: "Equal Tube To Tube",
  W: "Unequal Y",
  G: "Unequal Tube Connector",
  UB: "Dead Plug",
  EW: "Unequal TEE (2S-1B)",
  Z: "Male Branch Cross",
}

export const AP_THREAD_SIZE_LABELS: Record<string, string> = {
  "01": "G1/8",
  "02": "G1/4",
  "03": "G3/8",
  "04": "G1/2",
  M5: "M5x0.8",
  "N/A": "—",
}

export const AP_SERIES_LABELS: Record<string, string> = {
  AP: "A-Series (Grey)",
  EP: "E-Series (Black)",
}

interface Props {
  filters: APFittingFilters
  setFilters: React.Dispatch<React.SetStateAction<APFittingFilters>>
  filterOptions?: APFittingFilterOptions
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
          label={<Typography variant="body2" fontSize="0.8rem">{labelMap?.[opt] ?? opt}</Typography>}
        />
      ))}
    </>
  )
}

function NumberCheckbox({ options, selected, onChange, loading, suffix }: {
  options: number[]
  selected: number[]
  onChange: (v: number) => void
  loading?: boolean
  suffix?: string
}) {
  const theme = useTheme()
  if (loading) return <Skeleton height={50} />
  if (!options?.length) return <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options</Typography>
  return (
    <>
      {options.map(opt => (
        <FormControlLabel key={opt}
          control={<Checkbox size="small" checked={selected.includes(opt)} onChange={() => onChange(opt)} sx={{ py: 0.25, "&.Mui-checked": { color: theme.palette.primary.main } }} />}
          label={<Typography variant="body2" fontSize="0.8rem">{opt}{suffix}</Typography>}
        />
      ))}
    </>
  )
}

export function APFittingSidebar({ filters, setFilters, filterOptions, filtersLoading, activeCount }: Props) {
  const theme = useTheme()

  const toggleStr = (key: "series" | "fittingTypes" | "threadSizes", val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val],
    }))

  const toggleNum = (key: "tubeSizes", val: number) =>
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val],
    }))

  return (
    <Box sx={{
      width: 240, flexShrink: 0, p: 2,
      borderRight: "1px solid", borderColor: "divider",
      bgcolor: "background.paper",
      overflowY: "auto", boxSizing: "border-box",
    }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: "pointer", color: theme.palette.primary.main }}
            onClick={() => setFilters(EMPTY_AP_FITTING_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="SERIES" count={filters.series.length || undefined}>
        <StringCheckbox options={filterOptions?.series ?? []} selected={filters.series} onChange={v => toggleStr("series", v)} loading={filtersLoading} labelMap={AP_SERIES_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="FITTING TYPE" count={filters.fittingTypes.length || undefined}>
        <StringCheckbox options={filterOptions?.fittingTypes ?? []} selected={filters.fittingTypes} onChange={v => toggleStr("fittingTypes", v)} loading={filtersLoading} labelMap={AP_FITTING_TYPE_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="TUBE SIZE" count={filters.tubeSizes.length || undefined}>
        <NumberCheckbox options={filterOptions?.tubeSizes ?? []} selected={filters.tubeSizes} onChange={v => toggleNum("tubeSizes", v)} loading={filtersLoading} suffix="mm" />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="THREAD SIZE" count={filters.threadSizes.length || undefined}>
        <StringCheckbox options={filterOptions?.threadSizes ?? []} selected={filters.threadSizes} onChange={v => toggleStr("threadSizes", v)} loading={filtersLoading} labelMap={AP_THREAD_SIZE_LABELS} />
      </FilterGroup>
    </Box>
  )
}