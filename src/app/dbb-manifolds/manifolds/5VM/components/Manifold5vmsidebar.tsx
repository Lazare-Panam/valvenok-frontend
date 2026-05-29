import {
  Box, Stack, Typography, Chip, Divider, Accordion, AccordionSummary,
  AccordionDetails, FormGroup, FormControlLabel, Checkbox,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { type Manifold5VMFilters, EMPTY_5VM_FILTERS } from "../hooks/types"

const BRAND_GREEN = "#61D649"

export interface AvailableCounts5VM {
  connectionSizes: Record<string, number>
  connectionTypes: Record<string, number>
  mountings: Record<string, number>
  drainHoleSizes: Record<string, number>
  maxPressures: Record<string, number>
  specialServices: Record<string, number>
}

interface Props {
  filters: Manifold5VMFilters
  setFilters: React.Dispatch<React.SetStateAction<Manifold5VMFilters>>
  connectionSizeOptions: string[]
  connectionTypeOptions: string[]
  mountingOptions: string[]
  drainHoleSizeOptions: string[]
  maxPressureOptions: string[]
  specialServiceOptions: string[]
  availableCounts: AvailableCounts5VM
  activeCount: number
}

function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  return (
    <Accordion defaultExpanded disableGutters elevation={0} sx={{ bgcolor: "transparent", "&:before": { display: "none" }, mb: 0.5 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, "& .MuiAccordionSummary-content": { my: 0.5 } }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
          {count ? <Chip label={count} size="small" sx={{ height: 16, fontSize: "0.65rem", bgcolor: BRAND_GREEN, color: "#fff" }} /> : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

function SmartCheckList({ options, selected, onChange, counts }: {
  options: string[]
  selected: string[]
  onChange: (v: string) => void
  counts: Record<string, number>
}) {
  if (!options.length) return <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options</Typography>
  return (
    <Box sx={{ maxHeight: 260, overflowY: "auto" }}>
      {options.map(opt => {
        const count = counts[opt] ?? 0
        const isSelected = selected.includes(opt)
        const isDisabled = !isSelected && count === 0
        return (
          <FormControlLabel key={opt} disabled={isDisabled}
            control={
              <Checkbox size="small" checked={isSelected} onChange={() => onChange(opt)} disabled={isDisabled}
                sx={{ py: 0.25, "&.Mui-checked": { color: BRAND_GREEN }, "&.Mui-disabled": { color: "rgba(0,0,0,0.18)" } }}
              />
            }
            label={
              <Stack direction="row" alignItems="center" spacing={0.75}>
                <Typography variant="body2" fontSize="0.8rem" sx={{ color: isDisabled ? "text.disabled" : "text.primary" }}>{opt}</Typography>
                <Typography variant="caption" sx={{ color: isDisabled ? "text.disabled" : "text.secondary", fontSize: "0.68rem", fontWeight: 600 }}>({count})</Typography>
              </Stack>
            }
            sx={{ opacity: isDisabled ? 0.45 : 1, mr: 0 }}
          />
        )
      })}
    </Box>
  )
}

export function Manifold5VMSidebar({
  filters, setFilters,
  connectionSizeOptions, connectionTypeOptions, mountingOptions,
  drainHoleSizeOptions, maxPressureOptions, specialServiceOptions,
  availableCounts, activeCount,
}: Props) {
  const toggle = (key: keyof Manifold5VMFilters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(val)
        ? (prev[key] as string[]).filter(v => v !== val)
        : [...(prev[key] as string[]), val],
    }))

  return (
    <Box sx={{ width: 240, flexShrink: 0, p: 2, borderRight: "1px solid", borderColor: "divider", bgcolor: "background.paper", position: "sticky", top: 0, alignSelf: "flex-start", maxHeight: "100vh", overflowY: "auto", boxSizing: "border-box" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: "pointer", color: BRAND_GREEN }}
            onClick={() => setFilters(EMPTY_5VM_FILTERS)}>Clear all</Typography>
        )}
      </Stack>
      <FilterGroup title="CONNECTION SIZE" count={filters.connectionSizes.length || undefined}>
        <SmartCheckList options={connectionSizeOptions} selected={filters.connectionSizes} onChange={v => toggle("connectionSizes", v)} counts={availableCounts.connectionSizes} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="CONNECTION TYPE" count={filters.connectionTypes.length || undefined}>
        <SmartCheckList options={connectionTypeOptions} selected={filters.connectionTypes} onChange={v => toggle("connectionTypes", v)} counts={availableCounts.connectionTypes} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="MOUNTING" count={filters.mountings.length || undefined}>
        <SmartCheckList options={mountingOptions} selected={filters.mountings} onChange={v => toggle("mountings", v)} counts={availableCounts.mountings} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="DRAIN HOLE" count={filters.drainHoleSizes.length || undefined}>
        <SmartCheckList options={drainHoleSizeOptions} selected={filters.drainHoleSizes} onChange={v => toggle("drainHoleSizes", v)} counts={availableCounts.drainHoleSizes} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="MAX PRESSURE" count={filters.maxPressures.length || undefined}>
        <SmartCheckList options={maxPressureOptions} selected={filters.maxPressures} onChange={v => toggle("maxPressures", v)} counts={availableCounts.maxPressures} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="SPECIAL SERVICE" count={filters.specialServices.length || undefined}>
        <SmartCheckList options={specialServiceOptions} selected={filters.specialServices} onChange={v => toggle("specialServices", v)} counts={availableCounts.specialServices} />
      </FilterGroup>
    </Box>
  )
}