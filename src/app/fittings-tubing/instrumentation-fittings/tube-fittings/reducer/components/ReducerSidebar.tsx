'use client'
import {
  Box, Stack, Typography, Chip, Divider, Accordion, AccordionSummary,
  AccordionDetails, FormGroup, FormControlLabel, Checkbox, Skeleton,
  ToggleButtonGroup, ToggleButton
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useTheme } from "@mui/material/styles"
import {
  type ReducerFilters,
  EMPTY_REDUCER_FILTERS,
  FITTING_TYPE_LABELS,
  IMPERIAL_ODS,
  METRIC_ODS,
} from "../hooks/reducerTypes"
import { type ReducerFilterOptions } from "@/src/api/reducerApi"

interface Props {
  filters: ReducerFilters
  setFilters: React.Dispatch<React.SetStateAction<ReducerFilters>>
  filterOptions?: ReducerFilterOptions
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
          control={<Checkbox size="small" checked={selected.includes(opt)} onChange={() => onChange(opt)}
            sx={{ py: 0.25, "&.Mui-checked": { color: theme.palette.primary.main } }} />}
          label={<Typography variant="body2" fontSize="0.78rem">{labelMap?.[opt] ?? opt}</Typography>}
        />
      ))}
    </>
  )
}

export function ReducerSidebar({ filters, setFilters, filterOptions, filtersLoading, activeCount }: Props) {
  const theme = useTheme()

  const toggle = (key: keyof ReducerFilters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(val)
        ? (prev[key] as string[]).filter(v => v !== val)
        : [...(prev[key] as string[]), val],
    }))

  const toggleSx = {
    "& .MuiToggleButton-root": { fontSize: "0.7rem", py: 0.5, px: 1, textTransform: "capitalize" },
    "& .Mui-selected": { bgcolor: `${theme.palette.primary.main} !important`, color: "#fff !important" },
  }

  const selectedUnit = filters.tubeODUnits[0] ?? "all"

  const visibleODs = selectedUnit === "Imperial"
    ? IMPERIAL_ODS
    : selectedUnit === "Metric"
    ? METRIC_ODS
    : [...IMPERIAL_ODS, ...METRIC_ODS]

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
            onClick={() => setFilters(EMPTY_REDUCER_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="FITTING TYPE" count={filters.fittingTypes.length || undefined}>
        <StringCheckbox
          options={filterOptions?.fittingTypes ?? []}
          selected={filters.fittingTypes}
          onChange={v => toggle("fittingTypes", v)}
          loading={filtersLoading}
          labelMap={FITTING_TYPE_LABELS}
        />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="TUBE OD (Primary)" count={filters.tubeODs.length || undefined}>
        <ToggleButtonGroup exclusive size="small" sx={{ mt: 0.5, mb: 1.5, ...toggleSx }}
          value={selectedUnit}
          onChange={(_, val) => {
            if (!val) return
            setFilters(prev => ({ ...prev, tubeODUnits: val === "all" ? [] : [val], tubeODs: [] }))
          }}>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="Imperial">Imperial</ToggleButton>
          <ToggleButton value="Metric">Metric</ToggleButton>
        </ToggleButtonGroup>
        <StringCheckbox
          options={visibleODs}
          selected={filters.tubeODs}
          onChange={v => toggle("tubeODs", v)}
          loading={filtersLoading}
        />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="TUBE OD 2 (Secondary)" count={filters.tubeOD2s.length || undefined}>
        <StringCheckbox
          options={filterOptions?.tubeOD2s ?? []}
          selected={filters.tubeOD2s}
          onChange={v => toggle("tubeOD2s", v)}
          loading={filtersLoading}
        />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="OD 2 UNIT" count={filters.tubeOD2Units.length || undefined}>
        <ToggleButtonGroup exclusive size="small" sx={{ mt: 0.5, ...toggleSx }}
          value={filters.tubeOD2Units[0] ?? "all"}
          onChange={(_, val) => {
            if (!val) return
            setFilters(prev => ({ ...prev, tubeOD2Units: val === "all" ? [] : [val] }))
          }}>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="Imperial">Imperial</ToggleButton>
          <ToggleButton value="Metric">Metric</ToggleButton>
        </ToggleButtonGroup>
      </FilterGroup>
    </Box>
  )
}