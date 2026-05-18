'use client'
import {
  Box, Stack, Typography, Chip, Divider, Accordion, AccordionSummary,
  AccordionDetails, FormGroup, FormControlLabel, Checkbox
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useTheme } from "@mui/material/styles"
import { type ESNCCylinderFilters, EMPTY_ESNC_FILTERS } from "../hooks/types"

interface Props {
  filters: ESNCCylinderFilters
  setFilters: React.Dispatch<React.SetStateAction<ESNCCylinderFilters>>
  boreOptions: number[]
  strokeOptions: number[]
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

function NumberCheckbox({ options, selected, onChange, suffix }: {
  options: number[]
  selected: number[]
  onChange: (v: number) => void
  suffix?: string
}) {
  const theme = useTheme()
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

export function ESNCSidebar({ filters, setFilters, boreOptions, strokeOptions, activeCount }: Props) {
  const theme = useTheme()

  const toggleNum = (key: "boreSizes" | "strokes", val: number) =>
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
            onClick={() => setFilters(EMPTY_ESNC_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="BORE SIZE" count={filters.boreSizes.length || undefined}>
        <NumberCheckbox options={boreOptions} selected={filters.boreSizes} onChange={v => toggleNum("boreSizes", v)} suffix="mm" />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="STROKE" count={filters.strokes.length || undefined}>
        <NumberCheckbox options={strokeOptions} selected={filters.strokes} onChange={v => toggleNum("strokes", v)} suffix="mm" />
      </FilterGroup>
    </Box>
  )
}