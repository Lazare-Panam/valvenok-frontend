'use client'
import { useState, useMemo } from 'react'
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, TablePagination, TableSortLabel, Collapse, Chip, Stack,
  IconButton, Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox, Divider, Tabs, Tab
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FilterListIcon from '@mui/icons-material/FilterList'
import { useMediaQuery, Drawer } from '@mui/material'
import { DIELECTRIC_DATA, GASKET_DATA, type DielectricItem, type GasketItem } from './dielectricGasketData'

const GASKET_TYPES = [
  'PRS — ISO Parallel (G)',
  'PRS — Metric Parallel',
  'PRP — ISO Parallel (RP)',
  'PRP — Metric Parallel',
  'PRG — ISO Internal (G)',
  'PRG — Metric Internal',
]

function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  const theme = useTheme()
  return (
    <Accordion defaultExpanded disableGutters elevation={0} sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, mb: 0.5 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary">{title}</Typography>
          {count ? <Chip label={count} size="small" sx={{ height: 16, fontSize: '0.65rem', bgcolor: theme.palette.primary.main, color: '#fff' }} /> : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.disabled" fontWeight={700} sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25 }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600}>{value}</Typography>
    </Box>
  )
}

interface DielectricFilters { fittingTypes: string[]; tubeODUnits: string[] }
const EMPTY_DFILTERS: DielectricFilters = { fittingTypes: [], tubeODUnits: [] }

interface GasketFilters { gasketTypes: string[]; threadUnits: string[] }
const EMPTY_GFILTERS: GasketFilters = { gasketTypes: [], threadUnits: [] }

function DielectricSidebar({ filters, setFilters, activeCount }: { filters: DielectricFilters; setFilters: React.Dispatch<React.SetStateAction<DielectricFilters>>; activeCount: number }) {
  const theme = useTheme()
  const toggle = (key: keyof DielectricFilters, val: string) =>
    setFilters(prev => ({ ...prev, [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val] }))

  return (
    <Box sx={{ width: 240, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', overflowY: 'auto' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {activeCount > 0 && <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: theme.palette.primary.main }} onClick={() => setFilters(EMPTY_DFILTERS)}>Clear all</Typography>}
      </Stack>
      <FilterGroup title="FITTING TYPE" count={filters.fittingTypes.length || undefined}>
        {(['Union', 'Male Connector'] as const).map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.fittingTypes.includes(opt)} onChange={() => toggle('fittingTypes', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: theme.palette.primary.main } }} />}
            label={<Typography variant="body2" fontSize="0.78rem">{opt}</Typography>}
          />
        ))}
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="UNIT SYSTEM" count={filters.tubeODUnits.length || undefined}>
        {(['Imperial', 'Metric'] as const).map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.tubeODUnits.includes(opt)} onChange={() => toggle('tubeODUnits', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: theme.palette.primary.main } }} />}
            label={<Typography variant="body2" fontSize="0.78rem">{opt}</Typography>}
          />
        ))}
      </FilterGroup>
    </Box>
  )
}

function GasketSidebar({ filters, setFilters, activeCount }: { filters: GasketFilters; setFilters: React.Dispatch<React.SetStateAction<GasketFilters>>; activeCount: number }) {
  const theme = useTheme()
  const toggle = (key: keyof GasketFilters, val: string) =>
    setFilters(prev => ({ ...prev, [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val] }))

  return (
    <Box sx={{ width: 240, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', overflowY: 'auto' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {activeCount > 0 && <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: theme.palette.primary.main }} onClick={() => setFilters(EMPTY_GFILTERS)}>Clear all</Typography>}
      </Stack>
      <FilterGroup title="GASKET TYPE" count={filters.gasketTypes.length || undefined}>
        {GASKET_TYPES.map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.gasketTypes.includes(opt)} onChange={() => toggle('gasketTypes', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: theme.palette.primary.main } }} />}
            label={<Typography variant="body2" fontSize="0.75rem">{opt}</Typography>}
          />
        ))}
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="THREAD UNIT" count={filters.threadUnits.length || undefined}>
        {(['Imperial', 'Metric'] as const).map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.threadUnits.includes(opt)} onChange={() => toggle('threadUnits', opt)} sx={{ py: 0.25, '&.Mui-checked': { color: theme.palette.primary.main } }} />}
            label={<Typography variant="body2" fontSize="0.78rem">{opt}</Typography>}
          />
        ))}
      </FilterGroup>
    </Box>
  )
}

function DielectricRow({ row }: { row: DielectricItem }) {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const unitFull = row.tubeODUnit === 'Imperial' ? 'inch' : 'mm'
  const unitShort = row.tubeODUnit === 'Imperial' ? 'in' : 'mm'

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{ cursor: 'pointer', bgcolor: open ? alpha(theme.palette.primary.main, 0.04) : 'inherit', '&:hover': { bgcolor: `${alpha(theme.palette.primary.main, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: theme.palette.primary.main, fontSize: '0.8rem', py: 1 }}>{row.partNumber}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.fittingType} size="small" sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.dark }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>
          {row.tubeOD}<Typography component="span" variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>({unitShort})</Typography>
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{row.pipeNPT ?? '—'}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.tubeODUnit} size="small" sx={{ fontSize: '0.65rem', fontWeight: 600, bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark }} />
        </TableCell>
      </TableRow>
      {open && (
        <TableRow>
          <TableCell colSpan={6} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.02), borderLeft: `4px solid ${theme.palette.primary.main}`, borderBottom: `1px solid ${theme.palette.divider}` }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 140, height: 140, flexShrink: 0, border: `1px solid ${theme.palette.divider}`, borderRadius: 1, bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
                    <Box component="img" src={row.imageUrl} alt={row.partNumber} sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} color="primary" sx={{ display: 'block', mb: 2, letterSpacing: 1 }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3}>
                      <Spec label="Part Number" value={row.partNumber} />
                      <Spec label="Fitting Type" value={row.fittingType} />
                      <Spec label="Tube OD" value={`${row.tubeOD} ${unitFull}`} />
                      {row.pipeNPT && <Spec label="NPT Thread" value={row.pipeNPT} />}
                      <Spec label="Material" value="SS316 + Polyamideimide Insulator" />
                      <Spec label="Pressure Rating" value="34.47 MPa (5000 PSI)" />
                      <Spec label="Temp Rating" value="-40°C to 93°C" />
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

function GasketRow({ row }: { row: GasketItem }) {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{ cursor: 'pointer', bgcolor: open ? alpha(theme.palette.primary.main, 0.04) : 'inherit', '&:hover': { bgcolor: `${alpha(theme.palette.primary.main, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: theme.palette.primary.main, fontSize: '0.8rem', py: 1 }}>{row.partNumber}</TableCell>
        <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.78rem', py: 1, color: 'text.secondary' }}>{row.carbonSteelPN ?? '—'}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.gasketType} size="small" sx={{ fontSize: '0.62rem', fontWeight: 700, bgcolor: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.dark }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: 'monospace', fontWeight: 600 }}>{row.threadSize}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.threadUnit} size="small" sx={{ fontSize: '0.65rem', fontWeight: 600, bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark }} />
        </TableCell>
      </TableRow>
      {open && (
        <TableRow>
          <TableCell colSpan={6} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.02), borderLeft: `4px solid ${theme.palette.primary.main}`, borderBottom: `1px solid ${theme.palette.divider}` }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 140, height: 140, flexShrink: 0, border: `1px solid ${theme.palette.divider}`, borderRadius: 1, bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
                    <Box component="img" src={row.imageUrl} alt={row.partNumber} sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} color="primary" sx={{ display: 'block', mb: 2, letterSpacing: 1 }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3}>
                      <Spec label="Part Number (SS316)" value={row.partNumber} />
                      {row.carbonSteelPN && <Spec label="Part Number (Carbon Steel)" value={row.carbonSteelPN} />}
                      <Spec label="Gasket Type" value={row.gasketType} />
                      <Spec label="Thread Size" value={row.threadSize} />
                      <Spec label="Material" value="SS316 / Carbon Steel / Copper" />
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

export default function DielectricGasketPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [tab, setTab] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  const [dFilters, setDFilters] = useState<DielectricFilters>(EMPTY_DFILTERS)
  const [dPage, setDPage] = useState(0)
  const [dRowsPerPage, setDRowsPerPage] = useState(25)
  const [dSortKey, setDSortKey] = useState('partNumber')
  const [dSortDir, setDSortDir] = useState<'asc' | 'desc'>('asc')

  const [gFilters, setGFilters] = useState<GasketFilters>(EMPTY_GFILTERS)
  const [gPage, setGPage] = useState(0)
  const [gRowsPerPage, setGRowsPerPage] = useState(25)
  const [gSortKey, setGSortKey] = useState('partNumber')
  const [gSortDir, setGSortDir] = useState<'asc' | 'desc'>('asc')

  const filteredD = useMemo(() => DIELECTRIC_DATA.filter(r => {
    if (dFilters.fittingTypes.length && !dFilters.fittingTypes.includes(r.fittingType)) return false
    if (dFilters.tubeODUnits.length && !dFilters.tubeODUnits.includes(r.tubeODUnit)) return false
    return true
  }), [dFilters])

  const sortedD = [...filteredD].sort((a, b) => {
    const av = (a as any)[dSortKey] ?? '', bv = (b as any)[dSortKey] ?? ''
    if (av < bv) return dSortDir === 'asc' ? -1 : 1
    if (av > bv) return dSortDir === 'asc' ? 1 : -1
    return 0
  })

  const filteredG = useMemo(() => GASKET_DATA.filter(r => {
    if (gFilters.gasketTypes.length && !gFilters.gasketTypes.includes(r.gasketType)) return false
    if (gFilters.threadUnits.length && !gFilters.threadUnits.includes(r.threadUnit)) return false
    return true
  }), [gFilters])

  const sortedG = [...filteredG].sort((a, b) => {
    const av = (a as any)[gSortKey] ?? '', bv = (b as any)[gSortKey] ?? ''
    if (av < bv) return gSortDir === 'asc' ? -1 : 1
    if (av > bv) return gSortDir === 'asc' ? 1 : -1
    return 0
  })

  const paginatedD = sortedD.slice(dPage * dRowsPerPage, dPage * dRowsPerPage + dRowsPerPage)
  const paginatedG = sortedG.slice(gPage * gRowsPerPage, gPage * gRowsPerPage + gRowsPerPage)
  const dActiveCount = dFilters.fittingTypes.length + dFilters.tubeODUnits.length
  const gActiveCount = gFilters.gasketTypes.length + gFilters.threadUnits.length

  const headerSx = { bgcolor: alpha(theme.palette.primary.main, 0.04), borderBottom: `2px solid ${theme.palette.primary.main}`, fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }
  const dSidebar = <DielectricSidebar filters={dFilters} setFilters={setDFilters} activeCount={dActiveCount} />
  const gSidebar = <GasketSidebar filters={gFilters} setFilters={setGFilters} activeCount={gActiveCount} />

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: theme.palette.primary.main }}>Dielectric Fittings & Gaskets</Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          Stainless steel dielectric tube fittings for electrical isolation, and precision thread sealing gaskets for parallel and internal threads.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['SS316', '5000 PSI', 'Polyamideimide Insulator', 'ISO Parallel', 'Metric Thread', 'Copper Gaskets'].map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(theme.palette.primary.main, 0.08), color: theme.palette.primary.dark, border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}` }}>{s}</Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ bgcolor: 'background.paper', borderBottom: `1px solid ${theme.palette.divider}`, px: 4 }}>
        <Tabs value={tab} onChange={(_, v) => { setTab(v); setMobileOpen(false) }}
          sx={{ '& .MuiTab-root': { fontWeight: 700, textTransform: 'none', fontSize: '0.9rem' }, '& .Mui-selected': { color: `${theme.palette.primary.main} !important` }, '& .MuiTabs-indicator': { bgcolor: theme.palette.primary.main } }}>
          <Tab label={`Dielectric Fittings (${filteredD.length})`} />
          <Tab label={`Gaskets (${filteredG.length})`} />
        </Tabs>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}><FilterListIcon /></IconButton>}

        {tab === 0 && (
          <>
            {dActiveCount > 0 && (
              <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
                <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
                {dFilters.fittingTypes.map(v => <Chip key={v} label={v} size="small" variant="outlined" sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }} onDelete={() => setDFilters(p => ({ ...p, fittingTypes: p.fittingTypes.filter(x => x !== v) }))} />)}
                {dFilters.tubeODUnits.map(v => <Chip key={v} label={v} size="small" variant="outlined" sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }} onDelete={() => setDFilters(p => ({ ...p, tubeODUnits: p.tubeODUnits.filter(x => x !== v) }))} />)}
              </Stack>
            )}
            <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>{filteredD.length} CONFIGURATIONS</Typography>
            <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
              {!isMobile && dSidebar}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <TableContainer>
                  <Table size="small" stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ ...headerSx, width: 40 }} />
                        {[
                          { key: 'partNumber', label: 'Part Number' },
                          { key: 'fittingType', label: 'Type' },
                          { key: 'tubeOD', label: 'Tube OD' },
                          { key: null, label: 'NPT Thread' },
                          { key: 'tubeODUnit', label: 'Unit' },
                        ].map((h, i) => (
                          <TableCell key={i} sx={headerSx}>
                            {h.key ? <TableSortLabel active={dSortKey === h.key} direction={dSortKey === h.key ? dSortDir : 'asc'} onClick={() => { if (dSortKey === h.key) setDSortDir(d => d === 'asc' ? 'desc' : 'asc'); else { setDSortKey(h.key!); setDSortDir('asc') } }}>{h.label}</TableSortLabel> : h.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {paginatedD.length === 0
                        ? <TableRow><TableCell colSpan={6} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary">No dielectric fittings found.</Typography></TableCell></TableRow>
                        : paginatedD.map(row => <DielectricRow key={row.id} row={row} />)
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination component="div" count={sortedD.length} page={dPage} rowsPerPage={dRowsPerPage}
                  onPageChange={(_, p) => setDPage(p)} onRowsPerPageChange={e => { setDRowsPerPage(parseInt(e.target.value)); setDPage(0) }}
                  rowsPerPageOptions={[25, 50, 100]} sx={{ borderTop: `1px solid ${theme.palette.divider}` }} />
              </Box>
            </Box>
            <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{dSidebar}</Drawer>
          </>
        )}

        {tab === 1 && (
          <>
            {gActiveCount > 0 && (
              <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
                <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
                {gFilters.gasketTypes.map(v => <Chip key={v} label={v} size="small" variant="outlined" sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }} onDelete={() => setGFilters(p => ({ ...p, gasketTypes: p.gasketTypes.filter(x => x !== v) }))} />)}
                {gFilters.threadUnits.map(v => <Chip key={v} label={v} size="small" variant="outlined" sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }} onDelete={() => setGFilters(p => ({ ...p, threadUnits: p.threadUnits.filter(x => x !== v) }))} />)}
              </Stack>
            )}
            <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>{filteredG.length} CONFIGURATIONS</Typography>
            <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
              {!isMobile && gSidebar}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <TableContainer>
                  <Table size="small" stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ ...headerSx, width: 40 }} />
                        {[
                          { key: 'partNumber', label: 'Part No. (SS316)' },
                          { key: 'carbonSteelPN', label: 'Part No. (Carbon Steel)' },
                          { key: 'gasketType', label: 'Gasket Type' },
                          { key: 'threadSize', label: 'Thread Size' },
                          { key: 'threadUnit', label: 'Unit' },
                        ].map((h, i) => (
                          <TableCell key={i} sx={headerSx}>
                            {h.key ? <TableSortLabel active={gSortKey === h.key} direction={gSortKey === h.key ? gSortDir : 'asc'} onClick={() => { if (gSortKey === h.key) setGSortDir(d => d === 'asc' ? 'desc' : 'asc'); else { setGSortKey(h.key!); setGSortDir('asc') } }}>{h.label}</TableSortLabel> : h.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {paginatedG.length === 0
                        ? <TableRow><TableCell colSpan={6} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary">No gaskets found.</Typography></TableCell></TableRow>
                        : paginatedG.map(row => <GasketRow key={row.id} row={row} />)
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination component="div" count={sortedG.length} page={gPage} rowsPerPage={gRowsPerPage}
                  onPageChange={(_, p) => setGPage(p)} onRowsPerPageChange={e => { setGRowsPerPage(parseInt(e.target.value)); setGPage(0) }}
                  rowsPerPageOptions={[25, 50, 100]} sx={{ borderTop: `1px solid ${theme.palette.divider}` }} />
              </Box>
            </Box>
            <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{gSidebar}</Drawer>
          </>
        )}
      </Box>
    </Box>
  )
}