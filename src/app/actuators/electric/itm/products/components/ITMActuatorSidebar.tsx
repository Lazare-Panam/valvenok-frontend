import {
  Box, Stack, Typography, Chip, Divider,
  Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  type ITMActuatorFilters,
  type AvailableCountsITM,
  EMPTY_ITM_FILTERS,
  ITM_ACTUATOR_DATA,
} from '../hooks/itmActuatorData'

const BRAND_GREEN = '#61D649'

interface Props {
  filters: ITMActuatorFilters
  setFilters: React.Dispatch<React.SetStateAction<ITMActuatorFilters>>
  availableCounts: AvailableCountsITM
  activeCount: number
}

function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  return (
    <Accordion disableGutters elevation={0} sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 0.5 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
          {count ? <Chip label={count} size="small" sx={{ height: 16, fontSize: '0.65rem', bgcolor: BRAND_GREEN, color: '#fff' }} /> : null}
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
  if (!options.length) return <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options</Typography>
  return (
    <Box sx={{ maxHeight: 260, overflowY: 'auto' }}>
      {options.map(opt => {
        const count = counts[opt] ?? 0
        const isSelected = selected.includes(opt)
        const isDisabled = !isSelected && count === 0
        return (
          <FormControlLabel key={opt} disabled={isDisabled}
            control={<Checkbox size="small" checked={isSelected} onChange={() => onChange(opt)} disabled={isDisabled}
              sx={{ py: 0.25, '&.Mui-checked': { color: BRAND_GREEN }, '&.Mui-disabled': { color: 'rgba(0,0,0,0.18)' } }} />}
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

export function ITMActuatorSidebar({ filters, setFilters, availableCounts, activeCount }: Props) {
  const toggle = (key: keyof ITMActuatorFilters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(val)
        ? (prev[key] as string[]).filter(v => v !== val)
        : [...(prev[key] as string[]), val],
    }))

  const modelOptions    = Array.from(new Set(ITM_ACTUATOR_DATA.map(c => c.model)))
  const bodyTypeOptions = Array.from(new Set(ITM_ACTUATOR_DATA.map(c => c.bodyType)))

  return (
    <Box sx={{ width: 220, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', boxSizing: 'border-box' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: BRAND_GREEN }}
            onClick={() => setFilters(EMPTY_ITM_FILTERS)}>Clear all</Typography>
        )}
      </Stack>
      <FilterGroup title="MODEL" count={filters.models.length || undefined}>
        <SmartCheckList options={modelOptions} selected={filters.models} onChange={v => toggle('models', v)} counts={availableCounts.models} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="BODY TYPE" count={filters.bodyTypes.length || undefined}>
        <SmartCheckList options={bodyTypeOptions} selected={filters.bodyTypes} onChange={v => toggle('bodyTypes', v)} counts={availableCounts.bodyTypes} />
      </FilterGroup>
    </Box>
  )
}