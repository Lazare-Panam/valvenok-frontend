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
import { type HDActuatorDTO, type HDActuatorFilters, type AvailableCountsHD } from '../hooks/hdActuatorData'
import { HDActuatorSidebar } from './HDActuatorSidebar'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

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

function HDRow({ row }: { row: HDActuatorDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: `HD Pneumatic Actuator — ${row.model}`,
    brand: 'Susin',
    category: 'Pneumatic Actuators',
    categoryId: 'pneumatic-actuators',
    subCategory: 'HD Series',
    thumbnail: row.imageUrl,
    description: row.description,
    keySpecs: [
      { label: 'Model',                   value: row.model },
      { label: 'ISO 5211',                value: row.iso5211 },
      { label: 'Output Torque NM',        value: `${row.torqueNmMin} – ${row.torqueNmMax}` },
      { label: 'Output Torque LB-IN',     value: `${row.torqueLbInMin} – ${row.torqueLbInMax}` },
      { label: 'Spring End Torque NM',    value: `${row.springEndTorqueNmMin} – ${row.springEndTorqueNmMax}` },
      { label: 'Spring End Torque LB-IN', value: `${row.springEndTorqueLbInMin} – ${row.springEndTorqueLbInMax}` },
    ],
    variantInfo: { count: 1, sizeRange: row.iso5211 },
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
          <Chip label="HD" size="small" variant="outlined" sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.iso5211)}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.torqueNmMin)} – {val(row.torqueNmMax)}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.torqueLbInMin)} – {val(row.torqueLbInMax)}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.springEndTorqueNmMin)} – {val(row.springEndTorqueNmMax)}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.springEndTorqueLbInMin)} – {val(row.springEndTorqueLbInMax)}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Stack direction="row" spacing={1}>
            <Button size="small" variant="contained" onClick={e => { e.stopPropagation(); openQuote() }}
              sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'capitalize', whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
              Request Quote
            </Button>
          </Stack>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={9} sx={{ p: 0, borderBottom: 'none' }}>
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
                      <Spec label="Model"                     value={row.model} />
                      <Spec label="ISO 5211"                  value={row.iso5211} />
                      <Spec label="Output Torque Min (NM)"    value={row.torqueNmMin} />
                      <Spec label="Output Torque Max (NM)"    value={row.torqueNmMax} />
                      <Spec label="Output Torque Min (LB-IN)" value={row.torqueLbInMin} />
                      <Spec label="Output Torque Max (LB-IN)" value={row.torqueLbInMax} />
                      <Spec label="Spring End Min (NM)"       value={row.springEndTorqueNmMin} />
                      <Spec label="Spring End Max (NM)"       value={row.springEndTorqueNmMax} />
                      <Spec label="Spring End Min (LB-IN)"    value={row.springEndTorqueLbInMin} />
                      <Spec label="Spring End Max (LB-IN)"    value={row.springEndTorqueLbInMax} />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      <Button variant="outlined" href="/products"
                        sx={{ textTransform: 'capitalize', fontWeight: 700, borderRadius: '6px', borderColor: BRAND_GREEN, color: BRAND_GREEN, '&:hover': { borderColor: '#50c23a', color: '#50c23a', bgcolor: 'transparent' }, fontFamily: PRIMARY_FONT }}>
                        View Product
                      </Button>
                      <Button variant="contained" onClick={openQuote}
                        sx={{ textTransform: 'capitalize', fontWeight: 700, borderRadius: '6px', bgcolor: BRAND_GREEN, color: '#fff', '&:hover': { bgcolor: '#50c23a' }, fontFamily: PRIMARY_FONT }}>
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

type SortKey = 'model' | 'iso5211'

export default function HDActuatorTable({ models, filters, setFilters, availableCounts, activeCount }: {
  models: HDActuatorDTO[]
  filters: HDActuatorFilters
  setFilters: React.Dispatch<React.SetStateAction<HDActuatorFilters>>
  availableCounts: AvailableCountsHD
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

  const sidebar = <HDActuatorSidebar filters={filters} setFilters={setFilters} availableCounts={availableCounts} activeCount={activeCount} />

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
                <TableCell sx={headerSx}>Series</TableCell>
                <TableCell sx={headerSx}><TableSortLabel active={sortKey === 'iso5211'} direction={sortKey === 'iso5211' ? sortDir : 'asc'} onClick={() => handleSort('iso5211')}>ISO 5211</TableSortLabel></TableCell>
                <TableCell sx={headerSx}>Torque NM (Min–Max)</TableCell>
                <TableCell sx={headerSx}>Torque LB-IN (Min–Max)</TableCell>
                <TableCell sx={headerSx}>Spring End NM (Min–Max)</TableCell>
                <TableCell sx={headerSx}>Spring End LB-IN (Min–Max)</TableCell>
                <TableCell sx={headerSx}>Quote</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginated.length === 0
                ? (
                  <TableRow>
                    <TableCell colSpan={9} align="center" sx={{ py: 6 }}>
                      <Typography variant="body2" color="text.secondary" fontFamily={PRIMARY_FONT}>No actuators found.</Typography>
                    </TableCell>
                  </TableRow>
                )
                : paginated.map(row => <HDRow key={row.id} row={row} />)
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