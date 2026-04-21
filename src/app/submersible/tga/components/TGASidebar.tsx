import {
  Box, Stack, Typography, Accordion, AccordionSummary,
  AccordionDetails, FormGroup, FormControlLabel, Checkbox,
  Divider, Skeleton, TextField, Switch
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { TGAFilterParams, TGAFilterOptions } from '@/src/api/pumpsApi'

interface Props {
  filters: TGAFilterParams
  setFilters: (fn: (prev: TGAFilterParams) => TGAFilterParams) => void
  filterOptions?: TGAFilterOptions
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

export function TGASidebar({ filters, setFilters, filterOptions, loading, onClear }: Props) {
  const activeCount = Object.values(filters).filter(v =>
    v !== undefined && (!Array.isArray(v) || v.length > 0)
  ).length

  const toggle = <T extends string | number>(key: keyof TGAFilterParams, val: T) => {
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

      <FilterGroup title="DELIVERY SIZE (mm)">
        {loading ? <Skeleton height={80} /> :
          <MultiCheckbox
            options={filterOptions?.deliverySizes ?? []}
            selected={filters.deliverySizeMm}
            onChange={v => toggle('deliverySizeMm', v)}
            labelFn={v => `${v}mm`}
          />
        }
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="MAX SOLID SIZE (mm)">
        {loading ? <Skeleton height={80} /> :
          <MultiCheckbox
            options={filterOptions?.maxSolidSizes ?? []}
            selected={filters.maxSolidSizeMm}
            onChange={v => toggle('maxSolidSizeMm', v)}
            labelFn={v => `${v}mm`}
          />
        }
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="OUTLET FLANGE">
        {loading ? <Skeleton height={80} /> :
          <MultiCheckbox
            options={filterOptions?.outletFlanges ?? []}
            selected={filters.outletFlange}
            onChange={v => toggle('outletFlange', v)}
          />
        }
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="P2 POWER (kW)">
        <Stack direction="row" spacing={1} mt={1}>
          <TextField size="small" label="Min" type="number"
            value={filters.minP2Kw ?? ''}
            onChange={e => setFilters(prev => ({ ...prev, minP2Kw: e.target.value ? +e.target.value : undefined }))}
          />
          <TextField size="small" label="Max" type="number"
            value={filters.maxP2Kw ?? ''}
            onChange={e => setFilters(prev => ({ ...prev, maxP2Kw: e.target.value ? +e.target.value : undefined }))}
          />
        </Stack>
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <Box sx={{ py: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.primary" display="block" mb={1}>
          INBUILT TOP
        </Typography>
        <FormControlLabel
          control={
            <Switch size="small"
              checked={!!filters.inbuiltTop}
              onChange={e => setFilters(prev => ({ ...prev, inbuiltTop: e.target.checked ? true : undefined }))}
              color="primary"
            />
          }
          label={<Typography variant="body2">With inbuilt top only</Typography>}
        />
      </Box>
    </Box>
  )
}