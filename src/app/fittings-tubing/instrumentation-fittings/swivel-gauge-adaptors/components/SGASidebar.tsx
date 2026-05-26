'use client'
import {
  Box, Stack, Typography, Chip, Divider,
  Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { type SGAFilters, EMPTY_SGA_FILTERS } from './types'
import { SGA_DATA } from './data'

export interface AvailableCountsSGA {
  types: Record<string, number>
  inlets: Record<string, number>
  outlets: Record<string, number>
}

interface Props {
  filters: SGAFilters
  setFilters: React.Dispatch<React.SetStateAction<SGAFilters>>
  availableCounts: AvailableCountsSGA
  activeCount: number
}

function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  const theme = useTheme()
  return (
    <Accordion disableGutters elevation={0} sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 1 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 40, '& .MuiAccordionSummary-content': { my: 1 } }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
          {count ? <Chip label={count} size="small" sx={{ height: 16, fontSize: '0.65rem', bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText }} /> : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}><FormGroup>{children}</FormGroup></AccordionDetails>
    </Accordion>
  )
}

function SmartCheckList({ options, selected, onChange, counts }: {
  options: string[]
  selected: string[]
  onChange: (v: string) => void
  counts: Record<string, number>
}) {
  const theme = useTheme()
  if (!options.length) return <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options</Typography>
  return (
    <Box>
      {options.map(opt => {
        const count = counts[opt] ?? 0
        const isSelected = selected.includes(opt)
        const isDisabled = !isSelected && count === 0
        return (
          <FormControlLabel key={opt} disabled={isDisabled}
            control={<Checkbox size="small" checked={isSelected} onChange={() => onChange(opt)} disabled={isDisabled} sx={{ py: 0.25, '&.Mui-checked': { color: theme.palette.primary.main }, '&.Mui-disabled': { color: 'rgba(0,0,0,0.18)' } }} />}
            label={
              <Stack direction="row" alignItems="center" spacing={0.75}>
                <Typography variant="body2" fontSize="0.8rem" sx={{ color: isDisabled ? 'text.disabled' : 'text.primary' }}>{opt}</Typography>
                <Typography variant="caption" sx={{ color: isDisabled ? 'text.disabled' : 'text.secondary', fontSize: '0.68rem', fontWeight: 600 }}>({count})</Typography>
              </Stack>
            }
            sx={{ opacity: isDisabled ? 0.45 : 1, mr: 0 }}
          />
        )
      })}
    </Box>
  )
}

export function SGASidebar({ filters, setFilters, availableCounts, activeCount }: Props) {
  const theme = useTheme()
  const toggle = (key: keyof SGAFilters, val: string) =>
    setFilters(prev => ({ ...prev, [key]: (prev[key] as string[]).includes(val) ? (prev[key] as string[]).filter(v => v !== val) : [...(prev[key] as string[]), val] }))

  const typeOptions = Array.from(new Set(SGA_DATA.map(c => c.type)))
  const inletOptions = Array.from(new Set(SGA_DATA.map(c => c.inlet))).sort()
  const outletOptions = Array.from(new Set(SGA_DATA.map(c => c.outlet))).sort()

  return (
    <Box sx={{ width: 240, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', boxSizing: 'border-box' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FIND YOUR ADAPTOR</Typography>
        {activeCount > 0 && <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: theme.palette.primary.main }} onClick={() => setFilters(EMPTY_SGA_FILTERS)}>Clear all</Typography>}
      </Stack>

      <FilterGroup title="TYPE" count={filters.types.length || undefined}>
        <SmartCheckList options={typeOptions} selected={filters.types} onChange={v => toggle('types', v)} counts={availableCounts.types} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="INLET" count={filters.inlets.length || undefined}>
        <SmartCheckList options={inletOptions} selected={filters.inlets} onChange={v => toggle('inlets', v)} counts={availableCounts.inlets} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="OUTLET" count={filters.outlets.length || undefined}>
        <SmartCheckList options={outletOptions} selected={filters.outlets} onChange={v => toggle('outlets', v)} counts={availableCounts.outlets} />
      </FilterGroup>
    </Box>
  )
}