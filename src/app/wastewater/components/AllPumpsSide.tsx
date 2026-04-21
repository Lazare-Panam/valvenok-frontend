import {
  Box, Stack, Typography, Chip, Divider,
  Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox,
  MenuItem, Select, FormControl, InputLabel
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Filters, EMPTY_FILTERS, POWER_RANGES } from './types'

interface Props {
  filters: Filters
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
  availableVoltages: number[]
  availableRpms: number[]
  availableDeliverySizes: number[]
  availableMaxSolidSizes: number[]
  activeCount: number
}

function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  return (
    <Accordion defaultExpanded disableGutters elevation={0}
      sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 1 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />}
        sx={{ px: 0, minHeight: 40, '& .MuiAccordionSummary-content': { my: 1 } }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
          {count ? <Chip label={count} size="small" color="primary" sx={{ height: 16, fontSize: '0.65rem' }} /> : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

function MultiCheckbox<T extends string | number>({
  options, selected, onChange, labelFn
}: {
  options: T[]
  selected: T[]
  onChange: (val: T) => void
  labelFn?: (v: T) => string
}) {
  if (options.length === 0)
    return <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options available</Typography>
  return (
    <>
      {options.map(opt => (
        <FormControlLabel key={String(opt)}
          control={
            <Checkbox size="small"
              checked={selected.includes(opt)}
              onChange={() => onChange(opt)}
            />
          }
          label={<Typography variant="body2">{labelFn ? labelFn(opt) : String(opt)}</Typography>}
        />
      ))}
    </>
  )
}

export function AllPumpsSidebar({
  filters, setFilters,
  availableVoltages, availableRpms,
  availableDeliverySizes, availableMaxSolidSizes,
  activeCount
}: Props) {

  const toggle = <T extends string | number>(key: keyof Filters, val: T) => {
    setFilters(prev => {
      const current = (prev[key] as T[]) ?? []
      const updated = current.includes(val)
        ? current.filter(v => v !== val)
        : [...current, val]
      return { ...prev, [key]: updated }
    })
  }

  return (
 <Box sx={{
  width: 280,
  minHeight: '100vh',        // ← minHeight not height
  p: 3,
  borderRight: '1px solid',
  borderColor: 'divider',
  bgcolor: 'background.paper',
  position: 'sticky',
  top: 0,
  alignSelf: 'flex-start',   // ← key: sticks to top without stretching
  maxHeight: '100vh',        // ← caps it at viewport
  overflowY: 'auto',
  overflowX: 'hidden',
  flexShrink: 0,
  boxSizing: 'border-box',
}}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">
          FIND YOUR PUMP
        </Typography>
        {activeCount > 0 && (
          <Typography variant="caption" color="primary" fontWeight={700}
            sx={{ cursor: 'pointer' }} onClick={() => setFilters(EMPTY_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>

      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" fontWeight={700} color="text.primary" display="block" mb={1}>
          POWER REQUIREMENT
        </Typography>
        <FormControl fullWidth size="small">
          <InputLabel>Select power range</InputLabel>
          <Select
            value={filters.powerRange}
            label="Select power range"
            onChange={e => setFilters({ ...EMPTY_FILTERS, powerRange: e.target.value })}
          >
            <MenuItem value=""><em>Any power</em></MenuItem>
            {POWER_RANGES.map(r => (
              <MenuItem key={r.label} value={r.label}>{r.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="VOLTAGE" count={filters.voltage.length || undefined}>
        <MultiCheckbox
          options={availableVoltages}
          selected={filters.voltage}
          onChange={v => toggle('voltage', v)}
          labelFn={v => `${v}V`}
        />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="RPM" count={filters.rpm.length || undefined}>
        <MultiCheckbox
          options={availableRpms}
          selected={filters.rpm}
          onChange={v => toggle('rpm', v)}
          labelFn={v => `${v} rpm`}
        />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="DELIVERY SIZE (mm)" count={filters.deliverySizeMm.length || undefined}>
        <MultiCheckbox
          options={availableDeliverySizes}
          selected={filters.deliverySizeMm}
          onChange={v => toggle('deliverySizeMm', v)}
          labelFn={v => `${v}mm`}
        />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="MAX SOLID SIZE (mm)" count={filters.maxSolidSizeMm.length || undefined}>
        <MultiCheckbox
          options={availableMaxSolidSizes}
          selected={filters.maxSolidSizeMm}
          onChange={v => toggle('maxSolidSizeMm', v)}
          labelFn={v => `${v}mm`}
        />
      </FilterGroup>
    </Box>
  )
}