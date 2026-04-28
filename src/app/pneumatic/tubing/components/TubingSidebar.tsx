'use client'
import {
  Box, Stack, Typography, Chip, Divider, Accordion, AccordionSummary,
  AccordionDetails, FormGroup, FormControlLabel, Checkbox, Skeleton,
  ToggleButtonGroup, ToggleButton
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useTheme } from "@mui/material/styles"

import { TubingFilterOptions } from "@/src/api/pneumaticApi"
export interface TubingFilters {
  tubingTypes: string[]
  colors: string[]
  rollLengths: number[]
  hasConnector: boolean | null
}

export const EMPTY_TUBING_FILTERS: TubingFilters = {
  tubingTypes: [],
  colors: [],
  rollLengths: [],
  hasConnector: null,
}

export const TUBING_TYPE_LABELS: Record<string, string> = {
  POLYURETHANE: "Polyurethane",
  RECOIL: "Recoil",
  ANTI_SPARK: "Anti-Spark",
  ANTI_SPARK_RECOIL: "Anti-Spark Recoil",
  ACCESSORY: "Accessory",
}

export const COLOR_LABELS: Record<string, string> = {
  BLU: "Blue",
  YEL: "Yellow",
  BLK: "Black",
  GRN: "Green",
  RED: "Red",
  TRP: "Transparent",
  TBU: "Transparent Blue",
  MWH: "Metallic White",
  TRD: "Transparent Red",
  "N/A": "N/A",
}

interface Props {
  filters: TubingFilters
  setFilters: React.Dispatch<React.SetStateAction<TubingFilters>>
  filterOptions?: TubingFilterOptions
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

export function TubingSidebar({ filters, setFilters, filterOptions, filtersLoading, activeCount }: Props) {
  const theme = useTheme()

  const toggleStr = (key: "tubingTypes" | "colors", val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val],
    }))

  const toggleNum = (key: "rollLengths", val: number) =>
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val],
    }))

  const toggleSx = {
    "& .MuiToggleButton-root": { fontSize: "0.7rem", py: 0.5, px: 1, textTransform: "none" },
    "& .Mui-selected": { bgcolor: `${theme.palette.primary.main} !important`, color: "#fff !important" },
  }

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
            onClick={() => setFilters(EMPTY_TUBING_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="TYPE" count={filters.tubingTypes.length || undefined}>
        <StringCheckbox options={filterOptions?.tubingTypes ?? []} selected={filters.tubingTypes} onChange={v => toggleStr("tubingTypes", v)} loading={filtersLoading} labelMap={TUBING_TYPE_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="COLOR" count={filters.colors.length || undefined}>
        <StringCheckbox options={filterOptions?.colors ?? []} selected={filters.colors} onChange={v => toggleStr("colors", v)} loading={filtersLoading} labelMap={COLOR_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="ROLL LENGTH" count={filters.rollLengths.length || undefined}>
        <NumberCheckbox options={filterOptions?.rollLengths ?? []} selected={filters.rollLengths} onChange={v => toggleNum("rollLengths", v)} loading={filtersLoading} suffix="m" />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="CONNECTOR">
        <ToggleButtonGroup exclusive size="small" sx={{ mt: 0.5, ...toggleSx }}
          value={filters.hasConnector === null ? "all" : filters.hasConnector ? "yes" : "no"}
          onChange={(_, val) => {
            if (!val) return
            setFilters(prev => ({ ...prev, hasConnector: val === "all" ? null : val === "yes" }))
          }}>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="no">No Connector</ToggleButton>
          <ToggleButton value="yes">With Connector</ToggleButton>
        </ToggleButtonGroup>
      </FilterGroup>
    </Box>
  )
}