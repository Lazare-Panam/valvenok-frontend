'use client'
import {
  Box, Stack, Typography, Chip, Divider, Accordion, AccordionSummary,
  AccordionDetails, FormGroup, FormControlLabel, Checkbox
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useTheme } from "@mui/material/styles"
import { EFittingFilters,EMPTY_E_FILTERS } from "../hooks/types"

interface Props {
  filters: EFittingFilters
  setFilters: React.Dispatch<React.SetStateAction<EFittingFilters>>
  typeOptions: string[]
  tubeOptions: number[]
  threadOptions: string[]
  activeCount: number
}

function FilterGroup({ title, count, children, defaultExpanded = true }: { title: string; count?: number; children: React.ReactNode; defaultExpanded?: boolean }) {
  const theme = useTheme()
  return (
    <Accordion defaultExpanded={defaultExpanded} disableGutters elevation={0} sx={{ bgcolor: "transparent", "&:before": { display: "none" }, mb: 0.5 }}>
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

function CheckboxList<T extends string | number>({ options, selected, onChange, formatter }: {
  options: T[]
  selected: T[]
  onChange: (v: T) => void
  formatter?: (v: T) => string
}) {
  const theme = useTheme()
  if (!options.length) return <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options</Typography>
  return (
    <Box sx={{ maxHeight: 240, overflowY: "auto" }}>
      {options.map(opt => (
        <FormControlLabel
          key={String(opt)}
          control={<Checkbox size="small" checked={selected.includes(opt)} onChange={() => onChange(opt)} sx={{ py: 0.25, "&.Mui-checked": { color: theme.palette.primary.main } }} />}
          label={<Typography variant="body2" fontSize="0.8rem">{formatter ? formatter(opt) : String(opt)}</Typography>}
        />
      ))}
    </Box>
  )
}

export function EFittingsSidebar({ filters, setFilters, typeOptions, tubeOptions, threadOptions, activeCount }: Props) {
  const theme = useTheme()

  const toggle = <K extends keyof EFittingFilters>(key: K, val: any) =>
    setFilters(prev => ({
      ...prev,
      [key]: (prev[key] as any[]).includes(val)
        ? (prev[key] as any[]).filter(v => v !== val)
        : [...(prev[key] as any[]), val],
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
          <Typography variant="caption" fontWeight={700} sx={{ cursor: "pointer", color: theme.palette.primary.main }} onClick={() => setFilters(EMPTY_E_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="FITTING TYPE" count={filters.fittingTypes.length || undefined}>
        <CheckboxList<string> options={typeOptions} selected={filters.fittingTypes} onChange={v => toggle("fittingTypes", v)} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="TUBE SIZE" count={filters.tubeSizes.length || undefined}>
        <CheckboxList<number> options={tubeOptions} selected={filters.tubeSizes} onChange={v => toggle("tubeSizes", v)} formatter={(v) => `${v}mm`} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="THREAD" count={filters.threadSizes.length || undefined}>
        <CheckboxList<string> options={threadOptions} selected={filters.threadSizes} onChange={v => toggle("threadSizes", v)} />
      </FilterGroup>
    </Box>
  )
}