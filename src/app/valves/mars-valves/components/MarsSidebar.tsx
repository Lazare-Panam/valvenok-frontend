'use client'
import {
  Box, Stack, Typography, Chip, Divider,
  Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { type MarsFilters, EMPTY_MARS_FILTERS, CATEGORY_SORT_ORDER } from './types'
import { MARS_BALL_VALVES_DATA, getPortTypes, getEndConnections, getOptionTags } from './data'

export interface AvailableCountsMars {
  series: Record<string, number>
  categories: Record<string, number>
  portTypes: Record<string, number>
  endConnections: Record<string, number>
  fireSafe: Record<string, number>
  options: Record<string, number>
}

interface Props {
  filters: MarsFilters
  setFilters: React.Dispatch<React.SetStateAction<MarsFilters>>
  availableCounts: AvailableCountsMars
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

function SmartCheckList({ options, selected, onChange, counts }: { options: string[]; selected: string[]; onChange: (v: string) => void; counts: Record<string, number> }) {
  const theme = useTheme()
  if (!options.length) return <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options</Typography>
  return (
    <Box sx={{ maxHeight: 260, overflowY: 'auto' }}>
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

export function MarsSidebar({ filters, setFilters, availableCounts, activeCount }: Props) {
  const theme = useTheme()
  const toggle = (key: keyof MarsFilters, val: string) =>
    setFilters(prev => ({ ...prev, [key]: (prev[key] as string[]).includes(val) ? (prev[key] as string[]).filter(v => v !== val) : [...(prev[key] as string[]), val] }))

  const seriesOptions = MARS_BALL_VALVES_DATA.map(s => s.seriesCode)
  const categoryOptions = CATEGORY_SORT_ORDER.filter(c => MARS_BALL_VALVES_DATA.some(s => s.category === c))
  const portTypeOptions = Array.from(new Set(MARS_BALL_VALVES_DATA.flatMap(getPortTypes))).sort()
  const endConnectionOptions = Array.from(new Set(MARS_BALL_VALVES_DATA.flatMap(getEndConnections))).sort()
  const fireSafeOptions = Array.from(new Set(MARS_BALL_VALVES_DATA.map(s => s.fireSafe))).sort()
  const optionOptions = Array.from(new Set(MARS_BALL_VALVES_DATA.flatMap(getOptionTags))).sort()

  return (
    <Box sx={{ width: 240, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', boxSizing: 'border-box' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FIND YOUR VALVE</Typography>
        {activeCount > 0 && <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: theme.palette.primary.main }} onClick={() => setFilters(EMPTY_MARS_FILTERS)}>Clear all</Typography>}
      </Stack>
      <FilterGroup title="SERIES" count={filters.series.length || undefined}><SmartCheckList options={seriesOptions} selected={filters.series} onChange={v => toggle('series', v)} counts={availableCounts.series} /></FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="CATEGORY" count={filters.categories.length || undefined}><SmartCheckList options={categoryOptions} selected={filters.categories} onChange={v => toggle('categories', v)} counts={availableCounts.categories} /></FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="PORT TYPE" count={filters.portTypes.length || undefined}><SmartCheckList options={portTypeOptions} selected={filters.portTypes} onChange={v => toggle('portTypes', v)} counts={availableCounts.portTypes} /></FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="END CONNECTION" count={filters.endConnections.length || undefined}><SmartCheckList options={endConnectionOptions} selected={filters.endConnections} onChange={v => toggle('endConnections', v)} counts={availableCounts.endConnections} /></FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="FIRE SAFE" count={filters.fireSafe.length || undefined}><SmartCheckList options={fireSafeOptions} selected={filters.fireSafe} onChange={v => toggle('fireSafe', v)} counts={availableCounts.fireSafe} /></FilterGroup>
      <Divider sx={{ my: 1 }} />
      <FilterGroup title="OPTIONS" count={filters.options.length || undefined}><SmartCheckList options={optionOptions} selected={filters.options} onChange={v => toggle('options', v)} counts={availableCounts.options} /></FilterGroup>
    </Box>
  )
}