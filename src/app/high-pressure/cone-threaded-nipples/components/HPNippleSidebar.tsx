import {
  Box, Stack, Typography, Chip, Divider,
  Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { type HPNippleFilters, type AvailableCountsNipple, EMPTY_NIPPLE_FILTERS, HP_NIPPLE_DATA } from '../hooks/hpNippleData'

const BRAND_GREEN = '#61D649'

interface Props {
  filters: HPNippleFilters
  setFilters: React.Dispatch<React.SetStateAction<HPNippleFilters>>
  availableCounts: AvailableCountsNipple
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
  if (!options.length) return null
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

export function HPNippleSidebar({ filters, setFilters, availableCounts, activeCount }: Props) {
  const toggle = (key: keyof HPNippleFilters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(val)
        ? (prev[key] as string[]).filter(v => v !== val)
        : [...(prev[key] as string[]), val],
    }))

  const connTypeOptions = Array.from(new Set(HP_NIPPLE_DATA.map(c => c.connectionType)))
  const odOptions       = Array.from(new Set(HP_NIPPLE_DATA.map(c => c.tubeOD)))
  const lengthOptions   = Array.from(new Set(HP_NIPPLE_DATA.map(c => c.length)))
  const pressureOptions = Array.from(new Set(HP_NIPPLE_DATA.map(c => c.pressureRating)))

  return (
    <Box sx={{ width: 240, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', boxSizing: 'border-box' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: BRAND_GREEN }}
            onClick={() => setFilters(EMPTY_NIPPLE_FILTERS)}>Clear all</Typography>
        )}
      </Stack>
      <FilterGroup title="PRESSURE" count={filters.pressureRatings.length || undefined}>
        <SmartCheckList options={pressureOptions} selected={filters.pressureRatings} onChange={v => toggle('pressureRatings', v)} counts={availableCounts.pressureRatings} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="CONNECTION TYPE" count={filters.connectionTypes.length || undefined}>
        <SmartCheckList options={connTypeOptions} selected={filters.connectionTypes} onChange={v => toggle('connectionTypes', v)} counts={availableCounts.connectionTypes} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="TUBE OD" count={filters.tubeODs.length || undefined}>
        <SmartCheckList options={odOptions} selected={filters.tubeODs} onChange={v => toggle('tubeODs', v)} counts={availableCounts.tubeODs} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="LENGTH" count={filters.lengths.length || undefined}>
        <SmartCheckList options={lengthOptions} selected={filters.lengths} onChange={v => toggle('lengths', v)} counts={availableCounts.lengths} />
      </FilterGroup>
    </Box>
  )
}