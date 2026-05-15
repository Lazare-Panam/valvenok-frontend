'use client'
import {
  Box, Stack, Typography, Chip, Divider,
  Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox, Skeleton
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { type PipeFittingFilters, EMPTY_PIPE_FITTING_FILTERS, FITTING_TYPE_LABELS, THREAD_TYPE_LABELS } from './hooks'
import { type PipeFittingFilterOptions } from '@/src/api/fittingsApi'

interface Props {
  filters: PipeFittingFilters
  setFilters: React.Dispatch<React.SetStateAction<PipeFittingFilters>>
  filterOptions?: PipeFittingFilterOptions
  filtersLoading: boolean
  activeCount: number
}

function FilterGroup({ title, count, children }: {
  title: string; count?: number; children: React.ReactNode
}) {
  const theme = useTheme()
  return (
    <Accordion defaultExpanded disableGutters elevation={0}
      sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 1 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />}
        sx={{ px: 0, minHeight: 40, '& .MuiAccordionSummary-content': { my: 1 } }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
          {count ? (
            <Chip label={count} size="small"
              sx={{ height: 16, fontSize: '0.65rem', bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText }} />
          ) : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

function MultiCheckbox({ options, selected, onChange, loading, labelMap }: {
  options: string[]
  selected: string[]
  onChange: (val: string) => void
  loading?: boolean
  labelMap?: Record<string, string>
}) {
  const theme = useTheme()
  if (loading) return <Skeleton height={60} />
  if (!options || options.length === 0) return (
    <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options</Typography>
  )
  return (
    <>
      {options.map(opt => (
        <FormControlLabel key={opt}
          control={
            <Checkbox size="small"
              checked={selected.includes(opt)}
              onChange={() => onChange(opt)}
              sx={{ '&.Mui-checked': { color: theme.palette.primary.main } }}
            />
          }
          label={<Typography variant="body2">{labelMap?.[opt] ?? opt}</Typography>}
        />
      ))}
    </>
  )
}

export function PipeFittingSidebar({ filters, setFilters, filterOptions, filtersLoading, activeCount }: Props) {
  const theme = useTheme()

  const toggle = (key: keyof PipeFittingFilters, val: string) => {
    setFilters(prev => {
      const current = prev[key]
      const updated = current.includes(val)
        ? current.filter(v => v !== val)
        : [...current, val]
      return { ...prev, [key]: updated }
    })
  }

  const hasP2 = (filterOptions?.p2Sizes?.length ?? 0) > 0
  const hasLengthVariants = (filterOptions?.lengthVariants?.length ?? 0) > 0

  return (
    <Box sx={{
      width: 280, minHeight: '100vh', p: 3,
      borderRight: '1px solid', borderColor: 'divider',
      bgcolor: 'background.paper', position: 'sticky', top: 0,
      alignSelf: 'flex-start', maxHeight: '100vh',
      overflowY: 'auto', overflowX: 'hidden',
      flexShrink: 0, boxSizing: 'border-box',
    }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">
          FIND YOUR FITTING
        </Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700}
            sx={{ cursor: 'pointer', color: theme.palette.primary.main }}
            onClick={() => setFilters(EMPTY_PIPE_FITTING_FILTERS)}>
            Clear all
          </Typography>
        )}
      </Stack>

      <FilterGroup title="FITTING TYPE" count={filters.fittingTypes.length || undefined}>
        <MultiCheckbox options={filterOptions?.fittingTypes ?? []} selected={filters.fittingTypes}
          onChange={v => toggle('fittingTypes', v)} loading={filtersLoading} labelMap={FITTING_TYPE_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="P1 SIZE" count={filters.p1Sizes.length || undefined}>
        <MultiCheckbox options={filterOptions?.p1Sizes ?? []} selected={filters.p1Sizes}
          onChange={v => toggle('p1Sizes', v)} loading={filtersLoading} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      <FilterGroup title="P1 THREAD TYPE" count={filters.p1Types.length || undefined}>
        <MultiCheckbox options={filterOptions?.p1Types ?? []} selected={filters.p1Types}
          onChange={v => toggle('p1Types', v)} loading={filtersLoading} labelMap={THREAD_TYPE_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 1 }} />

      {hasP2 && (
        <>
          <FilterGroup title="P2 SIZE" count={filters.p2Sizes.length || undefined}>
            <MultiCheckbox options={filterOptions?.p2Sizes ?? []} selected={filters.p2Sizes}
              onChange={v => toggle('p2Sizes', v)} loading={filtersLoading} />
          </FilterGroup>
          <Divider sx={{ my: 1 }} />

          <FilterGroup title="P2 THREAD TYPE" count={filters.p2Types.length || undefined}>
            <MultiCheckbox options={filterOptions?.p2Types ?? []} selected={filters.p2Types}
              onChange={v => toggle('p2Types', v)} loading={filtersLoading} labelMap={THREAD_TYPE_LABELS} />
          </FilterGroup>
          <Divider sx={{ my: 1 }} />
        </>
      )}

      {hasLengthVariants && (
        <>
          <FilterGroup title="LENGTH" count={filters.lengthVariants.length || undefined}>
            <MultiCheckbox options={filterOptions?.lengthVariants ?? []} selected={filters.lengthVariants}
              onChange={v => toggle('lengthVariants', v)} loading={filtersLoading} />
          </FilterGroup>
          <Divider sx={{ my: 1 }} />
        </>
      )}

      <FilterGroup title="MATERIAL" count={filters.materials.length || undefined}>
        <MultiCheckbox options={filterOptions?.materials ?? []} selected={filters.materials}
          onChange={v => toggle('materials', v)} loading={filtersLoading} />
      </FilterGroup>
    </Box>
  )
}