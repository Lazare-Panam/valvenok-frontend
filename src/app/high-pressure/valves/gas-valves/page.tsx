'use client'
import { useState, useMemo } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, Collapse, Chip, Typography, Stack, IconButton, Button, Divider,
  Accordion, AccordionSummary, AccordionDetails, FormGroup, FormControlLabel,
  Checkbox, Drawer, useMediaQuery,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FilterListIcon from '@mui/icons-material/FilterList'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'
import {
  GAS_VALVE_DATA, GAS_VALVE_DESCRIPTION, certTokens,
  applyFilters, countBy, EMPTY_GAS_FILTERS,
  type GasValve, type GasFilters, type GasCounts,
} from './data'

const GREEN = '#61D649'
const FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const YOUNGDO_LOGO = 'https://pblol2.blob.core.windows.net/valvenok-images/brands/youngdo-logo.png'

function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  return (
    <Accordion disableGutters elevation={0} sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 0.5 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
          {count ? <Chip label={count} size="small" sx={{ height: 16, fontSize: '0.65rem', bgcolor: GREEN, color: '#fff' }} /> : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}><FormGroup>{children}</FormGroup></AccordionDetails>
    </Accordion>
  )
}

function CheckList({ options, selected, counts, onToggle }: {
  options: string[]; selected: string[]; counts: Record<string, number>; onToggle: (v: string) => void
}) {
  if (!options.length) return <Typography variant="caption" color="text.disabled" sx={{ pl: 1 }}>No options</Typography>
  return (
    <Box sx={{ maxHeight: 240, overflowY: 'auto' }}>
      {options.map(opt => {
        const count = counts[opt] ?? 0
        const isSelected = selected.includes(opt)
        const isDisabled = !isSelected && count === 0
        return (
          <FormControlLabel key={opt} disabled={isDisabled}
            control={<Checkbox size="small" checked={isSelected} onChange={() => onToggle(opt)} disabled={isDisabled}
              sx={{ py: 0.25, '&.Mui-checked': { color: GREEN } }} />}
            label={
              <Stack direction="row" alignItems="center" spacing={0.75}>
                <Typography variant="body2" fontSize="0.78rem" sx={{ color: isDisabled ? 'text.disabled' : 'text.primary' }}>{opt}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.66rem', fontWeight: 600 }}>({count})</Typography>
              </Stack>
            }
            sx={{ mr: 0, opacity: isDisabled ? 0.45 : 1 }}
          />
        )
      })}
    </Box>
  )
}

function GasRow({ row }: { row: GasValve }) {
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const rfq: ProductForRFQ = {
    id: row.id,
    name: `${row.model} ${row.gasType} Valve`,
    brand: 'Youngdo',
    category: 'Youngdo Gas & Cylinder Valves',
    categoryId: 'gas-valves',
    subCategory: row.category,
    thumbnail: row.image,
    description: `Youngdo ${row.model} — ${row.gasType} (${row.category}). Working pressure ${row.workingPressure}. Inlet: ${row.inletThreads}, Outlet: ${row.outletThreads}. Certified: ${row.certification}.`,
    keySpecs: [
      { label: 'Gas Type', value: row.gasType },
      { label: 'Category', value: row.category },
      { label: 'Series', value: row.series || '—' },
      { label: 'Working Pressure', value: row.workingPressure },
      { label: 'Inlet Threads', value: row.inletThreads },
      { label: 'Outlet Threads', value: row.outletThreads },
      { label: 'Certification', value: row.certification },
    ],
    variantInfo: { count: 1, sizeRange: row.workingPressure },
  }

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{ cursor: 'pointer', bgcolor: open ? alpha(GREEN, 0.04) : 'inherit', '&:hover': { bgcolor: `${alpha(GREEN, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontWeight: 700, fontSize: '0.82rem', py: 1, fontFamily: FONT }}>{row.model}</TableCell>
        <TableCell sx={{ py: 1 }}><Chip label={row.gasType} size="small" sx={{ fontSize: '0.62rem', fontWeight: 700, bgcolor: alpha(GREEN, 0.12), color: '#2d8a1e' }} /></TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.8rem', fontFamily: FONT }}>{row.category}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.8rem', fontFamily: FONT }}>{row.series || '—'}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.8rem', fontFamily: FONT }}>{row.workingPressure}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.8rem', fontFamily: FONT }}>{row.certification}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained" onClick={e => { e.stopPropagation(); setModalOpen(true) }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'capitalize', whiteSpace: 'nowrap', bgcolor: GREEN, color: '#fff', boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={8} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(GREEN, 0.02), borderLeft: `4px solid ${GREEN}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 150, height: 150, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={row.image} alt={row.model} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', p: 1 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      {[
                        { label: 'Model', value: row.model },
                        { label: 'Gas Type', value: row.gasType },
                        { label: 'Category', value: row.category },
                        { label: 'Series', value: row.series || '—' },
                        { label: 'Working Pressure', value: row.workingPressure },
                        { label: 'Inlet Threads', value: row.inletThreads },
                        { label: 'Outlet Threads', value: row.outletThreads },
                        { label: 'Standard', value: row.standard },
                        { label: 'Certification', value: row.certification },
                      ].map(({ label, value }) => (
                        <Box key={label}>
                          <Typography variant="caption" color="text.secondary" fontWeight={700} sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: FONT }}>{label}</Typography>
                          <Typography variant="body2" fontWeight={600} sx={{ fontFamily: FONT }}>{value}</Typography>
                        </Box>
                      ))}
                    </Stack>
                    <Button variant="contained" onClick={() => setModalOpen(true)}
                      sx={{ textTransform: 'capitalize', fontWeight: 700, borderRadius: '6px', bgcolor: GREEN, color: '#fff', '&:hover': { bgcolor: '#50c23a' }, fontFamily: FONT }}>
                      Request Quote
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={rfq} />
    </>
  )
}

export default function GasValvesPage() {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [filters, setFilters] = useState<GasFilters>(EMPTY_GAS_FILTERS)

  const toggle = (key: keyof GasFilters, val: string) =>
    setFilters(prev => ({ ...prev, [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val] }))

  const models = useMemo(() => applyFilters(GAS_VALVE_DATA, filters, ''), [filters])

  const counts = useMemo<GasCounts>(() => ({
    gasTypes:       countBy(applyFilters(GAS_VALVE_DATA, filters, 'gasTypes'),       v => [v.gasType]),
    categories:     countBy(applyFilters(GAS_VALVE_DATA, filters, 'categories'),     v => [v.category]),
    series:         countBy(applyFilters(GAS_VALVE_DATA, filters, 'series'),         v => v.series ? [v.series] : []),
    certifications: countBy(applyFilters(GAS_VALVE_DATA, filters, 'certifications'), v => certTokens(v.certification)),
  }), [filters])

  const gasTypeOptions = useMemo(() => Array.from(new Set(GAS_VALVE_DATA.map(v => v.gasType))), [])
  const categoryOptions = useMemo(() => Array.from(new Set(GAS_VALVE_DATA.map(v => v.category))), [])
  const seriesOptions = useMemo(() => Array.from(new Set(GAS_VALVE_DATA.map(v => v.series).filter(Boolean))), [])
  const certOptions = useMemo(() => Array.from(new Set(GAS_VALVE_DATA.flatMap(v => certTokens(v.certification)))).sort(), [])

  const activeCount = Object.values(filters).reduce((a, v) => a + v.length, 0)
  const paginated = models.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const headerSx = {
    bgcolor: alpha(GREEN, 0.04), borderBottom: `2px solid ${GREEN}`, fontWeight: 700,
    fontSize: '0.72rem', textTransform: 'uppercase' as const, letterSpacing: '0.05em', fontFamily: FONT,
  }

  const sidebar = (
    <Box sx={{ width: 240, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', boxSizing: 'border-box' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {activeCount > 0 && <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: GREEN }} onClick={() => setFilters(EMPTY_GAS_FILTERS)}>Clear all</Typography>}
      </Stack>
      <FilterGroup title="GAS TYPE" count={filters.gasTypes.length || undefined}>
        <CheckList options={gasTypeOptions} selected={filters.gasTypes} counts={counts.gasTypes} onToggle={v => toggle('gasTypes', v)} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="CATEGORY" count={filters.categories.length || undefined}>
        <CheckList options={categoryOptions} selected={filters.categories} counts={counts.categories} onToggle={v => toggle('categories', v)} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="SERIES" count={filters.series.length || undefined}>
        <CheckList options={seriesOptions} selected={filters.series} counts={counts.series} onToggle={v => toggle('series', v)} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="CERTIFICATION" count={filters.certifications.length || undefined}>
        <CheckList options={certOptions} selected={filters.certifications} counts={counts.certifications} onToggle={v => toggle('certifications', v)} />
      </FilterGroup>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Box component="img" src={YOUNGDO_LOGO} alt="Youngdo" sx={{ maxHeight: 32, maxWidth: 120, objectFit: 'contain', bgcolor: GREEN, p: 1, borderRadius: 1, mb: 2 }} />
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: GREEN, fontFamily: FONT, fontSize: '1.9rem' }}>{GAS_VALVE_DESCRIPTION.title}</Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 820, fontFamily: FONT }}>{GAS_VALVE_DESCRIPTION.description}</Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {GAS_VALVE_DESCRIPTION.specs.map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(GREEN, 0.08), color: '#2d8a1e', border: `1px solid ${alpha(GREEN, 0.3)}`, fontFamily: FONT }}>{s}</Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 1, fontFamily: FONT }}>{`${models.length} MODELS`}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
          {!isMobile && sidebar}
          <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
          <Box sx={{ position: 'relative', flex: 1, minWidth: 0 }}>
            {isMobile && <Box sx={{ p: 1, borderBottom: '1px solid rgba(0,0,0,0.08)' }}><IconButton onClick={() => setMobileOpen(true)}><FilterListIcon /></IconButton></Box>}
            <TableContainer>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ ...headerSx, width: 40 }} />
                    <TableCell sx={headerSx}>Model</TableCell>
                    <TableCell sx={headerSx}>Gas Type</TableCell>
                    <TableCell sx={headerSx}>Category</TableCell>
                    <TableCell sx={headerSx}>Series</TableCell>
                    <TableCell sx={headerSx}>Working Pressure</TableCell>
                    <TableCell sx={headerSx}>Certification</TableCell>
                    <TableCell sx={headerSx}>Quote</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginated.length === 0
                    ? <TableRow><TableCell colSpan={8} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary">No valves found.</Typography></TableCell></TableRow>
                    : paginated.map(row => <GasRow key={row.id} row={row} />)
                  }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination component="div" count={models.length} page={page} rowsPerPage={rowsPerPage}
              onPageChange={(_, p) => setPage(p)}
              onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value)); setPage(0) }}
              rowsPerPageOptions={[25, 50, 100]} sx={{ borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.8rem' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
