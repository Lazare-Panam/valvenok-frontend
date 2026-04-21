import {
  Box, Stack, Typography, Accordion, AccordionSummary,
  AccordionDetails, FormGroup, FormControlLabel, Checkbox,
  Divider, Skeleton, TextField, Switch
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { TDLFilterParams, TDLFilterOptions } from '@/src/api/pumpsApi'


interface Props {
  filters: TDLFilterParams
  setFilters: (fn: (prev: TDLFilterParams) => TDLFilterParams) => void
  filterOptions?: TDLFilterOptions
  loading: boolean
  onClear: () => void
}

function FilterGroup({ title, children }: { title: string, children: React.ReactNode }) {
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

function MultiCheckbox<T extends string | number>({
  options, selected, onChange, labelFn
}: {
  options: T[]
  selected?: T[]
  onChange: (val: T) => void
  labelFn?: (v: T) => string
}) {
  return (
    <>
      {options.map(opt => (
        <FormControlLabel key={String(opt)}
          control={
            <Checkbox size="small"
              checked={selected?.includes(opt) ?? false}
              onChange={() => onChange(opt)}
            />
          }
          label={<Typography variant="body2">{labelFn ? labelFn(opt) : String(opt)}</Typography>}
        />
      ))}
    </>
  )
}

export function TDLSidebar({ filters, setFilters, filterOptions, loading, onClear }: Props) {
  const activeCount = Object.values(filters).filter(v =>
    v !== undefined && (!Array.isArray(v) || v.length > 0)
  ).length

  const toggle = <T extends string | number>(key: keyof TDLFilterParams, val: T) => {
    setFilters(prev => {
      const current = (prev[key] as T[] | undefined) ?? []
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

      <FilterGroup title="VOLTAGE">
        {loading ? <Skeleton height={60} /> :
          <MultiCheckbox
            options={filterOptions?.voltages ?? []}
            selected={filters.voltage}
            onChange={v => toggle('voltage', v)}
            labelFn={v => `${v}V`}
          />
        }
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="PHASE">
        {loading ? <Skeleton height={60} /> :
          <MultiCheckbox
            options={filterOptions?.phases ?? []}
            selected={filters.phase}
            onChange={v => toggle('phase', v)}
          />
        }
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="OUTLET SIZE">
        {loading ? <Skeleton height={60} /> :
          <MultiCheckbox
            options={filterOptions?.outletSizes ?? []}
            selected={filters.outletSizeInches}
            onChange={v => toggle('outletSizeInches', v)}
          />
        }
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="POWER (kW)">
        <Stack direction="row" spacing={1} mt={1}>
          <TextField size="small" label="Min" type="number"
            value={filters.minPowerKw ?? ''}
            onChange={e => setFilters(prev => ({ ...prev, minPowerKw: e.target.value ? +e.target.value : undefined }))}
          />
          <TextField size="small" label="Max" type="number"
            value={filters.maxPowerKw ?? ''}
            onChange={e => setFilters(prev => ({ ...prev, maxPowerKw: e.target.value ? +e.target.value : undefined }))}
          />
        </Stack>
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <Box sx={{ py: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.primary" display="block" mb={1}>
          INBUILT CAPACITOR
        </Typography>
        <FormControlLabel
          control={
            <Switch size="small"
              checked={!!filters.inbuiltCapacitor}
              onChange={e => setFilters(prev => ({ ...prev, inbuiltCapacitor: e.target.checked ? true : undefined }))}
              color="primary"
            />
          }
          label={<Typography variant="body2">With inbuilt capacitor only</Typography>}
        />
      </Box>
    </Box>
  )
}