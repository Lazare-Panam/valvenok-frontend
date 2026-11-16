'use client'
import {
  Box, Stack, Typography, Chip, Divider, Accordion, AccordionSummary,
  AccordionDetails, FormGroup, FormControlLabel, Checkbox, Skeleton,
  ToggleButtonGroup, ToggleButton
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useTheme } from "@mui/material/styles"
import { ESCCylinderFilterOptions } from "@/src/api/pneumaticApi"
export interface ESCFilters {
  boreSizes: number[]
  strokes: number[]
  throughRod: boolean | null
  magnetic: boolean | null
}

export const EMPTY_ESC_FILTERS: ESCFilters = {
  boreSizes: [],
  strokes: [],
  throughRod: null,
  magnetic: null,
}

interface Props {
  filters: ESCFilters
  setFilters: React.Dispatch<React.SetStateAction<ESCFilters>>
  filterOptions?: ESCCylinderFilterOptions
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

export function ESCSidebar({ filters, setFilters, filterOptions, filtersLoading, activeCount }: Props) {
  const theme = useTheme()

  const toggleNum = (key: "boreSizes" | "strokes", val: number) =>
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val],
    }))

  const toggleSx = {
    "& .MuiToggleButton-root": { fontSize: "0.7rem", py: 0.5, px: 1, textTransform: "capitalize" },
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
            onClick={() => setFilters(EMPTY_ESC_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="BORE SIZE" count={filters.boreSizes.length || undefined}>
        <NumberCheckbox options={filterOptions?.boreSizes ?? []} selected={filters.boreSizes} onChange={v => toggleNum("boreSizes", v)} loading={filtersLoading} suffix="mm" />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="STROKE" count={filters.strokes.length || undefined}>
        <NumberCheckbox options={filterOptions?.strokes ?? []} selected={filters.strokes} onChange={v => toggleNum("strokes", v)} loading={filtersLoading} suffix="mm" />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="ROD TYPE">
        <ToggleButtonGroup exclusive size="small" sx={{ mt: 0.5, ...toggleSx }}
          value={filters.throughRod === null ? "all" : filters.throughRod ? "through" : "standard"}
          onChange={(_, val) => {
            if (!val) return
            setFilters(prev => ({ ...prev, throughRod: val === "all" ? null : val === "through" }))
          }}>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="standard">Standard</ToggleButton>
          <ToggleButton value="through">Through Rod</ToggleButton>
        </ToggleButtonGroup>
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="MAGNETIC">
        <ToggleButtonGroup exclusive size="small" sx={{ mt: 0.5, ...toggleSx }}
          value={filters.magnetic === null ? "all" : filters.magnetic ? "yes" : "no"}
          onChange={(_, val) => {
            if (!val) return
            setFilters(prev => ({ ...prev, magnetic: val === "all" ? null : val === "yes" }))
          }}>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="no">Non-Magnetic</ToggleButton>
          <ToggleButton value="yes">Magnetic</ToggleButton>
        </ToggleButtonGroup>
      </FilterGroup>
    </Box>
  )
}