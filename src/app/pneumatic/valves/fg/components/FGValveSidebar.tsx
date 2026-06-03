import {
  Box, Stack, Typography, Chip, Divider, Skeleton,
  Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { FGValveProduct, FGValveFilterParams, FGValveFilterOptions } from '../hooks/fgValveData'

const BRAND_GREEN = '#61D649'

const PORT_SIZE_LABELS: Record<string, string> = {
  'M5': 'M5', '06': 'BSP 1/8"', '08': 'BSP 1/4"',
  '10': 'BSP 3/8"', '15': 'BSP 1/2"', '20': 'BSP 3/4"', '25': 'BSP 1"'
}

const VALVE_TYPE_LABELS: Record<string, string> = {
  '25': '5/2 Way', '35': '5/3 Way'
}

const WORKING_MODE_LABELS: Record<string, string> = {
  'L': '2 Position', 'CL': '3 Position Center Closed'
}

interface Props {
  filters: FGValveFilterParams
  setFilters: (fn: (prev: FGValveFilterParams) => FGValveFilterParams) => void
  filterOptions?: FGValveFilterOptions
  loading: boolean
  onClear: () => void
   activeCount: number
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Accordion disableGutters elevation={0} sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 0.5 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
        <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}><FormGroup>{children}</FormGroup></AccordionDetails>
    </Accordion>
  )
}

export function FGValveSidebar({ filters, setFilters, filterOptions, loading, onClear }: Props) {
  const update = (key: keyof FGValveFilterParams, value: any) =>
    setFilters(prev => ({ ...prev, [key]: value }))

  const activeCount = Object.values(filters).filter(v => v !== undefined).length

  return (
    <Box sx={{ width: 220, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', boxSizing: 'border-box' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: BRAND_GREEN }} onClick={onClear}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="VALVE TYPE">
        {loading ? <Skeleton height={60} /> : filterOptions?.valveTypes.map(vt => (
          <FormControlLabel key={vt}
            control={<Checkbox size="small" checked={filters.valveType === vt}
              onChange={e => update('valveType', e.target.checked ? vt : undefined)}
              sx={{ py: 0.25, '&.Mui-checked': { color: BRAND_GREEN } }} />}
            label={<Typography variant="body2" fontSize="0.8rem">{VALVE_TYPE_LABELS[vt] ?? vt}</Typography>}
            sx={{ mr: 0 }}
          />
        ))}
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="PORT SIZE">
        {loading ? <Skeleton height={120} /> : filterOptions?.portSizes.map(ps => (
          <FormControlLabel key={ps}
            control={<Checkbox size="small" checked={filters.portSize === ps}
              onChange={e => update('portSize', e.target.checked ? ps : undefined)}
              sx={{ py: 0.25, '&.Mui-checked': { color: BRAND_GREEN } }} />}
            label={<Typography variant="body2" fontSize="0.8rem">{PORT_SIZE_LABELS[ps] ?? ps}</Typography>}
            sx={{ mr: 0 }}
          />
        ))}
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="SOLENOID">
        {loading ? <Skeleton height={60} /> : filterOptions?.controls.map(c => (
          <FormControlLabel key={c}
            control={<Checkbox size="small" checked={filters.control === c}
              onChange={e => update('control', e.target.checked ? c : undefined)}
              sx={{ py: 0.25, '&.Mui-checked': { color: BRAND_GREEN } }} />}
            label={<Typography variant="body2" fontSize="0.8rem">{c} Solenoid</Typography>}
            sx={{ mr: 0 }}
          />
        ))}
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="WORKING MODE">
        {loading ? <Skeleton height={60} /> : filterOptions?.workingModes.map(wm => (
          <FormControlLabel key={wm}
            control={<Checkbox size="small" checked={filters.workingMode === wm}
              onChange={e => update('workingMode', e.target.checked ? wm : undefined)}
              sx={{ py: 0.25, '&.Mui-checked': { color: BRAND_GREEN } }} />}
            label={<Typography variant="body2" fontSize="0.8rem">{WORKING_MODE_LABELS[wm] ?? wm}</Typography>}
            sx={{ mr: 0 }}
          />
        ))}
      </FilterGroup>
    </Box>
  )
}