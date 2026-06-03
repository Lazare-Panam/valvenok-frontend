import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack,
  IconButton, Button, useMediaQuery, Drawer,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FilterListIcon from '@mui/icons-material/FilterList'
import { type ITGGearboxDTO, type ITGGearboxFilters, type AvailableCountsITG } from '../hooks/itgGearboxData'
import { ITGGearboxSidebar } from './ITGGearboxSidebar'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const SERIES_COLORS: Record<string, string> = {
  'Standard': '#61D649',
  '1S':       '#2db82d',
  '2S':       '#FF6B35',
}

const val = (v?: string | number) =>
  (v !== undefined && v !== null && v !== '') ? v : '—'

function Spec({ label, value }: { label: string; value?: string | number }) {
  if (value === undefined || value === null) return null
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
    </Box>
  )
}

function ITGRow({ row }: { row: ITGGearboxDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)
  const color = SERIES_COLORS[row.subSeries] ?? BRAND_GREEN

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: `ITG Gearbox — ${row.model}`,
    brand: 'Panam',
    category: 'Mechanical Actuators',
    categoryId: 'mechanical-actuators',
    subCategory: `ITG ${row.subSeries}`,
    thumbnail: row.imageUrl,
    description: row.description,
    keySpecs: [
      { label: 'Model',              value: row.model },
      { label: 'Output Torque (Nm)', value: String(row.outputTorqueNm) },
      { label: 'Gear Ratio',         value: row.gearRatio },
      { label: 'Valve Mounting',     value: row.valveMountingStd },
      { label: 'No. of Turns',       value: String(row.noOfTurns) },
      { label: 'Weight (kg)',        value: String(row.weightKg) },
    ],
    variantInfo: { count: 1, sizeRange: row.valveMountingStd },
  })

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{ cursor: 'pointer', bgcolor: open ? alpha(BRAND_GREEN, 0.04) : 'inherit', '&:hover': { bgcolor: `${alpha(BRAND_GREEN, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontWeight: 700, fontSize: '0.82rem', py: 1, fontFamily: PRIMARY_FONT }}>{row.model}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.subSeries} size="small" variant="outlined" sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: color, color }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.outputTorqueNm)} Nm</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.gearRatio)}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.valveMountingStd)}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.noOfTurns)}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.rimPullEffortKg)} kg</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.weightKg)} kg</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Stack direction="row" spacing={1}>
            <Button size="small" variant="contained" onClick={e => { e.stopPropagation(); openQuote() }}
              sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
              Request Quote
            </Button>
          </Stack>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={10} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_GREEN, 0.02), borderLeft: `4px solid ${BRAND_GREEN}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={row.imageUrl} alt={row.model} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 1, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>DESCRIPTION</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, fontFamily: PRIMARY_FONT }}>{row.description}</Typography>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Model"                    value={row.model} />
                      <Spec label="Series"                   value={row.subSeries} />
                      <Spec label="Output Torque (Nm)"       value={row.outputTorqueNm} />
                      <Spec label="Output Torque (Ft-lbs)"   value={row.outputTorqueFtLbs} />
                      <Spec label="M.A ±10%"                 value={row.maPercent} />
                      <Spec label="Gear Ratio"               value={row.gearRatio} />
                      <Spec label="Valve Mounting (Std)"     value={row.valveMountingStd} />
                      <Spec label="Valve Mounting (Opt)"     value={row.valveMountingOpt} />
                      <Spec label="Actuator Mounting (Std)"  value={row.actuatorMountingStd} />
                      <Spec label="Actuator Mounting (Opt)"  value={row.actuatorMountingOpt} />
                      <Spec label="No. of Turns"             value={row.noOfTurns} />
                      <Spec label="Handwheel Dia"            value={row.handWheelDiaMm} />
                      <Spec label="Rim Pull Effort (kg)"     value={row.rimPullEffortKg} />
                      <Spec label="Weight (kg)"              value={row.weightKg} />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" onClick={openQuote}
                        sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px', bgcolor: BRAND_GREEN, color: '#fff', '&:hover': { bgcolor: '#50c23a' }, fontFamily: PRIMARY_FONT }}>
                        Request Quote
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
      {quoteProduct && <RFQModal open={!!quoteProduct} onClose={() => setQuoteProduct(null)} product={quoteProduct} />}
    </>
  )
}

type SortKey = 'model' | 'subSeries' | 'outputTorqueNm' | 'gearRatio' | 'weightKg'

export default function ITGGearboxTable({ models, filters, setFilters, availableCounts, activeCount }: {
  models: ITGGearboxDTO[]
  filters: ITGGearboxFilters
  setFilters: React.Dispatch<React.SetStateAction<ITGGearboxFilters>>
  availableCounts: AvailableCountsITG
  activeCount: number
}) {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [sortKey, setSortKey] = useState<SortKey>('model')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const sorted = [...models].sort((a, b) => {
    const av = String(a[sortKey] ?? ''), bv = String(b[sortKey] ?? '')
    if (av < bv) return sortDir === 'asc' ? -1 : 1
    if (av > bv) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const headerSx = {
    bgcolor: alpha(BRAND_GREEN, 0.04),
    borderBottom: `2px solid ${BRAND_GREEN}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontFamily: PRIMARY_FONT,
  }

  const sidebar = <ITGGearboxSidebar filters={filters} setFilters={setFilters} availableCounts={availableCounts} activeCount={activeCount} />

  return (
    <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
      {!isMobile && sidebar}
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      <Box sx={{ position: 'relative', flex: 1, minWidth: 0 }}>
        {isMobile && (
          <Box sx={{ p: 1, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
            <IconButton onClick={() => setMobileOpen(true)}><FilterListIcon /></IconButton>
          </Box>
        )}
        <TableContainer>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...headerSx, width: 40 }} />
                <TableCell sx={headerSx}><TableSortLabel active={sortKey === 'model'} direction={sortKey === 'model' ? sortDir : 'asc'} onClick={() => handleSort('model')}>Model</TableSortLabel></TableCell>
                <TableCell sx={headerSx}><TableSortLabel active={sortKey === 'subSeries'} direction={sortKey === 'subSeries' ? sortDir : 'asc'} onClick={() => handleSort('subSeries')}>Series</TableSortLabel></TableCell>
                <TableCell sx={headerSx}><TableSortLabel active={sortKey === 'outputTorqueNm'} direction={sortKey === 'outputTorqueNm' ? sortDir : 'asc'} onClick={() => handleSort('outputTorqueNm')}>Output Torque (Nm)</TableSortLabel></TableCell>
                <TableCell sx={headerSx}><TableSortLabel active={sortKey === 'gearRatio'} direction={sortKey === 'gearRatio' ? sortDir : 'asc'} onClick={() => handleSort('gearRatio')}>Gear Ratio</TableSortLabel></TableCell>
                <TableCell sx={headerSx}>Valve Mounting</TableCell>
                <TableCell sx={headerSx}>No. of Turns</TableCell>
                <TableCell sx={headerSx}>Rim Pull (kg)</TableCell>
                <TableCell sx={headerSx}><TableSortLabel active={sortKey === 'weightKg'} direction={sortKey === 'weightKg' ? sortDir : 'asc'} onClick={() => handleSort('weightKg')}>Weight (kg)</TableSortLabel></TableCell>
                <TableCell sx={headerSx}>Quote</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginated.length === 0
                ? <TableRow><TableCell colSpan={10} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary" fontFamily={PRIMARY_FONT}>No gearboxes found.</Typography></TableCell></TableRow>
                : paginated.map(row => <ITGRow key={row.id} row={row} />)
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={sorted.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={(_, p) => setPage(p)}
          onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value)); setPage(0) }}
          rowsPerPageOptions={[25, 50, 100]}
          sx={{ borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.8rem' }}
        />
      </Box>
    </Box>
  )
}