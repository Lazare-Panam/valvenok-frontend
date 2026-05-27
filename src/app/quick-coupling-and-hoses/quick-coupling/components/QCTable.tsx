'use client'
import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack,
  IconButton, Button, useMediaQuery, Drawer,
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FilterListIcon from '@mui/icons-material/FilterList'
import { type QuickCouplingDTO, type QuickCouplingFilters } from './types'
import { QCSidebar } from './QCSidebar'
import { type AvailableCountsQC } from './types'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.disabled" fontWeight={700} sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25 }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600}>{value}</Typography>
    </Box>
  )
}

function QCRow({ row }: { row: QuickCouplingDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)
  const theme = useTheme()

  const openQuote = () => setQuoteProduct({
    id: row.partNumber,
    name: `Quick Coupling — ${row.partNumber}`,
  } as unknown as ProductForRFQ)

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
          <Chip label={row.series} size="small" sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(theme.palette.primary.main, 0.12), color: theme.palette.primary.dark }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{row.bodyMaterial}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{row.connectionType}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.type} size="small" sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha('#7B61FF', 0.12), color: '#7B61FF' }} />
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={e => { e.stopPropagation(); openQuote() }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap', boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}>
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={7} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.02), borderLeft: `4px solid ${theme.palette.primary.main}`, borderBottom: `1px solid ${theme.palette.divider}` }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  {row.imageUrl && (
                    <Box sx={{ width: 160, height: 160, flexShrink: 0, border: `1px solid ${theme.palette.divider}`, borderRadius: 1, bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
                      <Box component="img" src={row.imageUrl} alt={row.partNumber} sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </Box>
                  )}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} color="primary" sx={{ display: 'block', mb: 1, letterSpacing: 1 }}>DESCRIPTION</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>{row.description}</Typography>
                    <Typography variant="caption" fontWeight={900} color="primary" sx={{ display: 'block', mb: 2, letterSpacing: 1 }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number" value={row.partNumber} />
                      <Spec label="Series" value={row.series} />
                      <Spec label="Body Material" value={row.bodyMaterial} />
                      <Spec label="Connection Type" value={row.connectionType} />
                      <Spec label="Type" value={row.type} />
                    </Stack>
                    <Button variant="contained" onClick={openQuote}
                      sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px' }}>
                      Request Quote
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}

      {quoteProduct && (
        <RFQModal open={!!quoteProduct} onClose={() => setQuoteProduct(null)} product={quoteProduct} />
      )}
    </>
  )
}

type SortKey = 'partNumber' | 'series' | 'bodyMaterial' | 'connectionType' | 'type'

export default function QCTable({ models, filters, setFilters, availableCounts, activeCount }: {
  models: QuickCouplingDTO[]
  filters: QuickCouplingFilters
  setFilters: React.Dispatch<React.SetStateAction<QuickCouplingFilters>>
  availableCounts: AvailableCountsQC
  activeCount: number
}) {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [sortKey, setSortKey] = useState<SortKey>('partNumber')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const sorted = [...models].sort((a, b) => {
    const av = a[sortKey] ?? '', bv = b[sortKey] ?? ''
    if (av < bv) return sortDir === 'asc' ? -1 : 1
    if (av > bv) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  const headerSx = { bgcolor: alpha(theme.palette.primary.main, 0.04), borderBottom: `2px solid ${theme.palette.primary.main}`, fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }
  const sidebar = <QCSidebar filters={filters} setFilters={setFilters} availableCounts={availableCounts} activeCount={activeCount} />

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`, borderRadius: '8px', bgcolor: 'background.paper' }}>
      {!isMobile && sidebar}
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      <Box sx={{ position: 'relative', flex: 1, minWidth: 0 }}>
        {isMobile && <Box sx={{ p: 1, borderBottom: `1px solid ${theme.palette.divider}` }}><IconButton onClick={() => setMobileOpen(true)}><FilterListIcon /></IconButton></Box>}
        <TableContainer>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...headerSx, width: 40 }} />
                {([
                  { key: 'partNumber' as SortKey,    label: 'Part Number' },
                  { key: 'series' as SortKey,         label: 'Series' },
                  { key: 'bodyMaterial' as SortKey,   label: 'Body Material' },
                  { key: 'connectionType' as SortKey, label: 'Connection Type' },
                  { key: 'type' as SortKey,           label: 'Type' },
                  { key: null,                         label: 'Quote' },
                ]).map((h, i) => (
                  <TableCell key={i} sx={headerSx}>
                    {h.key ? <TableSortLabel active={sortKey === h.key} direction={sortKey === h.key ? sortDir : 'asc'} onClick={() => handleSort(h.key!)}>{h.label}</TableSortLabel> : h.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginated.length === 0
                ? <TableRow><TableCell colSpan={7} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary">No couplings found.</Typography></TableCell></TableRow>
                : paginated.map(row => <QCRow key={row.id} row={row} />)
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination component="div" count={sorted.length} page={page} rowsPerPage={rowsPerPage}
          onPageChange={(_, p) => setPage(p)}
          onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value)); setPage(0) }}
          rowsPerPageOptions={[25, 50, 100]}
          sx={{ borderTop: `1px solid ${theme.palette.divider}`, fontSize: '0.8rem' }}
        />
      </Box>
    </Box>
  )
}