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
import { type ITMActuatorDTO, type ITMActuatorFilters, type AvailableCountsITM } from '../hooks/itmActuatorData'
import { ITMActuatorSidebar } from './ITMActuatorSidebar'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const val = (v?: string) => (v !== undefined && v !== null && v !== '') ? v : '—'

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
    </Box>
  )
}

function ITMRow({ row }: { row: ITMActuatorDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: `ITM Electric Actuator — ${row.model}`,
    brand: 'Panam',
    category: 'Electric Actuators',
    categoryId: 'electric-actuators',
    subCategory: 'ITM Series',
    thumbnail: row.imageUrl,
    description: row.description,
    keySpecs: [
      { label: 'Model',          value: row.model },
      { label: 'Max Torque (Nm)', value: row.maxTorqueNm },
      { label: 'Body Type',      value: row.bodyType },
      { label: 'Flange',         value: row.flangeIso },
      { label: 'Enclosure',      value: row.enclosure },
      { label: 'Stem',           value: row.stemDiameterMm },
    ],
    variantInfo: { count: 1, sizeRange: row.flangeIso },
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
          <Chip label="ITM" size="small" variant="outlined" sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.maxTorqueNm)} Nm</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.bodyType)}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.flangeIso)}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.stemDiameterMm)}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{val(row.enclosure)}</TableCell>
        <TableCell sx={{ py: 1 }}>
            <Button size="small" variant="contained" onClick={e => { e.stopPropagation(); openQuote() }}
              sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
              Request Quote
            </Button>
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
                      <Spec label="Model"              value={row.model} />
                      <Spec label="Body Type"          value={row.bodyType} />
                      <Spec label="Gearing"            value={row.gearing} />
                      <Spec label="Enclosure"          value={row.enclosure} />
                      <Spec label="Explosion Proof"    value={row.explosionProof} />
                      <Spec label="Max Torque (Nm)"    value={row.maxTorqueNm} />
                      <Spec label="Max Torque (kg.m)"  value={row.maxTorqueKgM} />
                      <Spec label="RPM 50/60Hz"        value={row.rpmHz} />
                      <Spec label="Stem Ø Key"         value={row.stemDiameterMm} />
                      <Spec label="Stem Screw"         value={row.stemScrew} />
                      <Spec label="Flange (ISO 5210)"  value={row.flangeIso} />
                      <Spec label="Declutching"        value={row.declutching} />
                      <Spec label="Torque Switches"    value={row.torqueSwitches} />
                      <Spec label="Limit Switches"     value={row.limitSwitches} />
                      <Spec label="Display"            value={row.display} />
                      <Spec label="Duty Cycle"         value={row.dutyCycle} />
                      <Spec label="Motor Class"        value={row.motorClass} />
                      <Spec label="Main Power"         value={row.mainPower} />
                      <Spec label="Ambient Temp"       value={row.ambientTemp} />
                      <Spec label="Terminal"           value={row.terminal} />
                      <Spec label="Cable Entries"      value={row.cableEntries} />
                      <Spec label="Body Material"      value={row.bodyMaterial} />
                      <Spec label="Lubrication"        value={row.lubrication} />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      <Button variant="outlined" href="/products"
                        sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px', borderColor: BRAND_GREEN, color: BRAND_GREEN, '&:hover': { borderColor: '#50c23a', color: '#50c23a', bgcolor: 'transparent' }, fontFamily: PRIMARY_FONT }}>
                        View Product
                      </Button>
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

type SortKey = 'model' | 'maxTorqueNm' | 'bodyType' | 'flangeIso'

export default function ITMActuatorTable({ models, filters, setFilters, availableCounts, activeCount }: {
  models: ITMActuatorDTO[]
  filters: ITMActuatorFilters
  setFilters: React.Dispatch<React.SetStateAction<ITMActuatorFilters>>
  availableCounts: AvailableCountsITM
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

  const sidebar = <ITMActuatorSidebar filters={filters} setFilters={setFilters} availableCounts={availableCounts} activeCount={activeCount} />

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
                <TableCell sx={headerSx}><TableSortLabel active={sortKey === 'maxTorqueNm'} direction={sortKey === 'maxTorqueNm' ? sortDir : 'asc'} onClick={() => handleSort('maxTorqueNm')}>Max Torque (Nm)</TableSortLabel></TableCell>
                <TableCell sx={headerSx}><TableSortLabel active={sortKey === 'bodyType'} direction={sortKey === 'bodyType' ? sortDir : 'asc'} onClick={() => handleSort('bodyType')}>Body Type</TableSortLabel></TableCell>
                <TableCell sx={headerSx}><TableSortLabel active={sortKey === 'flangeIso'} direction={sortKey === 'flangeIso' ? sortDir : 'asc'} onClick={() => handleSort('flangeIso')}>Flange</TableSortLabel></TableCell>
                <TableCell sx={headerSx}>Stem Ø</TableCell>
                <TableCell sx={headerSx}>Enclosure</TableCell>
                <TableCell sx={headerSx}>Quote</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginated.length === 0
                ? <TableRow><TableCell colSpan={9} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary" fontFamily={PRIMARY_FONT}>No actuators found.</Typography></TableCell></TableRow>
                : paginated.map(row => <ITMRow key={row.id} row={row} />)
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