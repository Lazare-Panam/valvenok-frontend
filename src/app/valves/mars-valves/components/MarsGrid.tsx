'use client'
import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack,
  IconButton, Button, useMediaQuery, Drawer,
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/navigation'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FilterListIcon from '@mui/icons-material/FilterList'
import { type MarsSeriesDTO, type MarsFilters } from './types'
import { MarsSidebar, type AvailableCountsMars } from './MarsSidebar'
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

function MarsRow({ row }: { row: MarsSeriesDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)
  const theme = useTheme()
  const router = useRouter()
  const isFireSafe = row.fireSafe === 'API 607 Fire Safe'

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: `Mars ${row.name}`,
  } as unknown as ProductForRFQ)

  const goToDetail = () => router.push(`/valves/mars-ball-valves/${row.slug}`)

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{ cursor: 'pointer', bgcolor: open ? alpha(theme.palette.primary.main, 0.04) : 'inherit', '&:hover': { bgcolor: `${alpha(theme.palette.primary.main, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: theme.palette.primary.main, fontSize: '0.78rem', py: 1 }}>
          {row.seriesCode}
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontWeight: 600 }}>{row.shortName.replace(`Series ${row.seriesCode}`, '').replace(/^—\s*/, '') || row.shortName}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.category} size="small" sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(theme.palette.primary.main, 0.12), color: theme.palette.primary.dark }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{row.portType}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{row.sizeRange}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{row.pressureRating}</TableCell>
        <TableCell sx={{ py: 1 }}>
          {isFireSafe && (
            <Chip label="API 607" size="small" sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha('#FF6B35', 0.12), color: '#FF6B35' }} />
          )}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Stack direction="row" gap={1}>
            <Button size="small" variant="outlined"
              onClick={e => { e.stopPropagation(); goToDetail() }}
              sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap' }}>
              Details
            </Button>
            <Button size="small" variant="contained"
              onClick={e => { e.stopPropagation(); openQuote() }}
              sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap', boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}>
              Request Quote
            </Button>
          </Stack>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={9} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.02), borderLeft: `4px solid ${theme.palette.primary.main}`, borderBottom: `1px solid ${theme.palette.divider}` }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  {row.imageUrl && (
                    <Box sx={{ width: 180, height: 180, flexShrink: 0, border: `1px solid ${theme.palette.divider}`, borderRadius: 1, bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
                      <Box component="img" src={row.imageUrl} alt={row.name} sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </Box>
                  )}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} color="primary" sx={{ display: 'block', mb: 1, letterSpacing: 1 }}>DESCRIPTION</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>{row.description}</Typography>
                    <Typography variant="caption" fontWeight={900} color="primary" sx={{ display: 'block', mb: 2, letterSpacing: 1 }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Series Code" value={row.seriesCode} />
                      <Spec label="Design" value={row.design} />
                      <Spec label="Category" value={row.category} />
                      <Spec label="Port Type" value={row.portType} />
                      <Spec label="Size Range" value={row.sizeRange} />
                      <Spec label="Pressure Rating" value={row.pressureRating} />
                      <Spec label="Body Material" value={row.body} />
                      <Spec label="Seats" value={row.seats} />
                      <Spec label="End Connections" value={row.ends} />
                      <Spec label="Fire Safe" value={row.fireSafe} />
                      <Spec label="Standards" value={row.standards.length ? row.standards.join(', ') : '—'} />
                      <Spec label="Options" value={row.options.length ? row.options.join(', ') : 'Standard'} />
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Button variant="contained" onClick={openQuote}
                        sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px' }}>
                        Request Quote
                      </Button>
                      <Button variant="outlined" onClick={goToDetail}
                        sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px' }}>
                        View Full Details
                      </Button>
                    </Stack>
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

type SortKey = 'seriesCode' | 'shortName' | 'category' | 'portType' | 'sizeRange' | 'pressureRating'

export default function MarsTable({ models, isFetching, filters, setFilters, availableCounts, activeCount }: {
  models: MarsSeriesDTO[]
  isFetching?: boolean
  filters: MarsFilters
  setFilters: React.Dispatch<React.SetStateAction<MarsFilters>>
  availableCounts: AvailableCountsMars
  activeCount: number
}) {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [sortKey, setSortKey] = useState<SortKey>('seriesCode')
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
  const sidebar = <MarsSidebar filters={filters} setFilters={setFilters} availableCounts={availableCounts} activeCount={activeCount} />

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`, borderRadius: '8px', bgcolor: 'background.paper' }}>
      {!isMobile && sidebar}
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      <Box sx={{ position: 'relative', flex: 1, minWidth: 0 }}>
        {isMobile && <Box sx={{ p: 1, borderBottom: `1px solid ${theme.palette.divider}` }}><IconButton onClick={() => setMobileOpen(true)}><FilterListIcon /></IconButton></Box>}
        {isFetching && (
          <Box sx={{ position: 'absolute', inset: 0, backdropFilter: 'blur(2px)', bgcolor: 'rgba(255,255,255,0.4)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ bgcolor: 'background.paper', px: 3, py: 1.5, borderRadius: '20px', boxShadow: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: theme.palette.primary.main, animation: 'pulse 1s ease-in-out infinite', '@keyframes pulse': { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.3 } } }} />
              <Typography variant="caption" fontWeight={700} color="primary">UPDATING</Typography>
            </Box>
          </Box>
        )}
        <TableContainer sx={{ opacity: isFetching ? 0.6 : 1, transition: 'opacity 0.2s ease' }}>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...headerSx, width: 40 }} />
                {([
                  { key: 'seriesCode' as SortKey, label: 'Series' },
                  { key: 'shortName' as SortKey, label: 'Name' },
                  { key: 'category' as SortKey, label: 'Category' },
                  { key: 'portType' as SortKey, label: 'Port Type' },
                  { key: 'sizeRange' as SortKey, label: 'Size Range' },
                  { key: 'pressureRating' as SortKey, label: 'Pressure' },
                  { key: null, label: 'Fire Safe' },
                  { key: null, label: 'Actions' },
                ]).map((h, i) => (
                  <TableCell key={i} sx={headerSx}>
                    {h.key ? <TableSortLabel active={sortKey === h.key} direction={sortKey === h.key ? sortDir : 'asc'} onClick={() => handleSort(h.key!)}>{h.label}</TableSortLabel> : h.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginated.length === 0
                ? <TableRow><TableCell colSpan={9} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary">No series found.</Typography></TableCell></TableRow>
                : paginated.map(row => <MarsRow key={row.id} row={row} />)
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