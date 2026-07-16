import {
  Box, Stack, Typography, Accordion, AccordionSummary,
  AccordionDetails, FormGroup, FormControlLabel, Checkbox, Divider
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export interface VF9AFilterParams {
  sizeInches?: string[]
  endType?: string[]
  flange?: string[]
  body?: string[]
  disc?: string[]
  stem?: string[]
  seat?: string[]
  yoke?: string[]
  leakageRate?: string[]
  operator?: string[]
}

interface Props {
  filters: VF9AFilterParams
  setFilters: (fn: (prev: VF9AFilterParams) => VF9AFilterParams) => void
  filterOptions: Record<keyof VF9AFilterParams, string[]>
  onClear: () => void
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Accordion defaultExpanded={false} disableGutters elevation={0}
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

export function VF9ASidebar({ filters, setFilters, filterOptions, onClear }: Props) {
  const activeCount = Object.values(filters).filter(v =>
    v !== undefined && (!Array.isArray(v) || v.length > 0)
  ).length

  const toggle = (key: keyof VF9AFilterParams, val: string) => {
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

      <FilterGroup title="SIZE">
        <MultiCheckbox options={filterOptions.sizeInches} selected={filters.sizeInches} onChange={v => toggle('sizeInches', v)} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="END TYPE">
        <MultiCheckbox options={filterOptions.endType} selected={filters.endType} onChange={v => toggle('endType', v)} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="FLANGE">
        <MultiCheckbox options={filterOptions.flange} selected={filters.flange} onChange={v => toggle('flange', v)} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="BODY MATERIAL">
        <MultiCheckbox options={filterOptions.body} selected={filters.body} onChange={v => toggle('body', v)} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="DISC MATERIAL">
        <MultiCheckbox options={filterOptions.disc} selected={filters.disc} onChange={v => toggle('disc', v)} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="STEM MATERIAL">
        <MultiCheckbox options={filterOptions.stem} selected={filters.stem} onChange={v => toggle('stem', v)} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="SEAT MATERIAL">
        <MultiCheckbox options={filterOptions.seat} selected={filters.seat} onChange={v => toggle('seat', v)} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="YOKE MATERIAL">
        <MultiCheckbox options={filterOptions.yoke} selected={filters.yoke} onChange={v => toggle('yoke', v)} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="LEAKAGE RATE">
        <MultiCheckbox options={filterOptions.leakageRate} selected={filters.leakageRate} onChange={v => toggle('leakageRate', v)} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="OPERATOR">
        <MultiCheckbox options={filterOptions.operator} selected={filters.operator} onChange={v => toggle('operator', v)} />
      </FilterGroup>
    </Box>
  )
}