import {
  Box, Stack, Typography, Accordion, AccordionSummary,
  AccordionDetails, FormGroup, FormControlLabel, Checkbox, Divider
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export interface ElectronicControlPumpFilterParams {
  series?: string[]
  frequencyHz?: string[]
  antiMicrobial?: string[]
  phase?: string[]
}

interface Props {
  filters: ElectronicControlPumpFilterParams
  setFilters: (fn: (prev: ElectronicControlPumpFilterParams) => ElectronicControlPumpFilterParams) => void
  filterOptions: Record<keyof ElectronicControlPumpFilterParams, string[]>
  onClear: () => void
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Accordion defaultExpanded disableGutters elevation={0}
      sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 1 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />}
        sx={{ px: 0, minHeight: 40, '& .MuiAccordionSummary-content': { my: 1 } }}
      >
        <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

function MultiCheckbox({
  options, selected, onChange
}: {
  options: string[]
  selected?: string[]
  onChange: (val: string) => void
}) {
  return (
    <>
      {options.map(opt => (
        <FormControlLabel key={opt}
          control={
            <Checkbox size="small"
              checked={selected?.includes(opt) ?? false}
              onChange={() => onChange(opt)}
            />
          }
          label={<Typography variant="body2">{opt}</Typography>}
        />
      ))}
    </>
  )
}

export function ElectronicControlPumpSidebar({ filters, setFilters, filterOptions, onClear }: Props) {
  const activeCount = Object.values(filters).filter(v =>
    v !== undefined && (!Array.isArray(v) || v.length > 0)
  ).length

  const toggle = (key: keyof ElectronicControlPumpFilterParams, val: string) => {
    setFilters(prev => {
      const current = (prev[key] as string[] | undefined) ?? []
      const updated = current.includes(val) ? current.filter(v => v !== val) : [...current, val]
      return { ...prev, [key]: updated.length > 0 ? updated : undefined }
    })
  }

  return (
    <Box sx={{
      width: 280, height: '100vh', p: 3,
      borderRight: '1px solid', borderColor: 'divider',
      bgcolor: 'background.paper', position: 'sticky', top: 0,
      overflowY: 'auto', flexShrink: 0
    }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">
          SPECIFICATIONS
        </Typography>
        {activeCount > 0 && (
          <Typography variant="caption" color="primary" fontWeight={700}
            sx={{ cursor: 'pointer' }} onClick={onClear}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="ANTI-MICROBIAL (B)">
        <MultiCheckbox options={filterOptions.antiMicrobial} selected={filters.antiMicrobial} onChange={v => toggle('antiMicrobial', v)} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="FREQUENCY (HZ)">
        <MultiCheckbox options={filterOptions.frequencyHz} selected={filters.frequencyHz} onChange={v => toggle('frequencyHz', v)} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="SERIES">
        <MultiCheckbox options={filterOptions.series} selected={filters.series} onChange={v => toggle('series', v)} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="PHASE">
        <MultiCheckbox options={filterOptions.phase} selected={filters.phase} onChange={v => toggle('phase', v)} />
      </FilterGroup>
    </Box>
  )
}