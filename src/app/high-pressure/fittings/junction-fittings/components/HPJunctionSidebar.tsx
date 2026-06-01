import {
  Box, Stack, Typography, Chip, Divider,
  Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { type HPJunctionFilters, type AvailableCountsJunction, EMPTY_JUNCTION_FILTERS, HP_JUNCTION_DATA } from '../hooks/hpFittingsJunctionData'

const BRAND_GREEN = '#61D649'

interface Props {
  filters: HPJunctionFilters
  setFilters: React.Dispatch<React.SetStateAction<HPJunctionFilters>>
  availableCounts: AvailableCountsJunction
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
    <Box sx={{ maxHeight: 220, overflowY: 'auto' }}>
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

export function HPJunctionSidebar({ filters, setFilters, availableCounts, activeCount }: Props) {
  const toggle = (key: keyof HPJunctionFilters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(val)
        ? (prev[key] as string[]).filter(v => v !== val)
        : [...(prev[key] as string[]), val],
    }))

  const fittingTypeOptions = Array.from(new Set(HP_JUNCTION_DATA.map(c => c.fittingType)))
  const pressureOptions    = Array.from(new Set(HP_JUNCTION_DATA.map(c => c.pressureRating)))
  const p1ThreadOptions    = Array.from(new Set(HP_JUNCTION_DATA.map(c => c.p1Thread)))
  const p1SizeOptions      = Array.from(new Set(HP_JUNCTION_DATA.map(c => c.p1Size)))
  const p2ThreadOptions    = Array.from(new Set(HP_JUNCTION_DATA.map(c => c.p2Thread)))
  const p2SizeOptions      = Array.from(new Set(HP_JUNCTION_DATA.map(c => c.p2Size)))

  return (
    <Box sx={{ width: 240, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', boxSizing: 'border-box' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: BRAND_GREEN }}
            onClick={() => setFilters(EMPTY_JUNCTION_FILTERS)}>Clear all</Typography>
        )}
      </Stack>
      <FilterGroup title="FITTING TYPE" count={filters.fittingTypes.length || undefined}>
        <SmartCheckList options={fittingTypeOptions} selected={filters.fittingTypes} onChange={v => toggle('fittingTypes', v)} counts={availableCounts.fittingTypes} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="PRESSURE" count={filters.pressureRatings.length || undefined}>
        <SmartCheckList options={pressureOptions} selected={filters.pressureRatings} onChange={v => toggle('pressureRatings', v)} counts={availableCounts.pressureRatings} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="P1 THREAD" count={filters.p1Threads.length || undefined}>
        <SmartCheckList options={p1ThreadOptions} selected={filters.p1Threads} onChange={v => toggle('p1Threads', v)} counts={availableCounts.p1Threads} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="P1 SIZE" count={filters.p1Sizes.length || undefined}>
        <SmartCheckList options={p1SizeOptions} selected={filters.p1Sizes} onChange={v => toggle('p1Sizes', v)} counts={availableCounts.p1Sizes} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="P2 THREAD" count={filters.p2Threads.length || undefined}>
        <SmartCheckList options={p2ThreadOptions} selected={filters.p2Threads} onChange={v => toggle('p2Threads', v)} counts={availableCounts.p2Threads} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="P2 SIZE" count={filters.p2Sizes.length || undefined}>
        <SmartCheckList options={p2SizeOptions} selected={filters.p2Sizes} onChange={v => toggle('p2Sizes', v)} counts={availableCounts.p2Sizes} />
      </FilterGroup>
    </Box>
  )
}