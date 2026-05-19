'use client'
import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack,
  IconButton, Button, useMediaQuery, Drawer
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FilterListIcon from '@mui/icons-material/FilterList'
import { type BallValveDTO, type BallValveFilterOptions } from '@/src/api/ballValveApi'

import { SERIES_LABELS, BODY_MATERIAL_LABELS, type BallValveFilters } from './types'
import { BallValveSidebar } from './BallValveSidebar'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

function Spec({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.disabled" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25 }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600}>{value}</Typography>
    </Box>
  )
}

function Row({ model }: { model: BallValveDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)
  const theme = useTheme()

  const openQuote = () => setQuoteProduct({
    id: model.partNumber,
    name: `${SERIES_LABELS[model.series] ?? model.series} Ball Valve — ${model.partNumber}`,
  } as unknown as ProductForRFQ)

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{
        cursor: 'pointer',
        bgcolor: open ? alpha(theme.palette.primary.main, 0.04) : 'inherit',
        '&:hover': { bgcolor: `${alpha(theme.palette.primary.main, 0.03)} !important` },
      }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: theme.palette.primary.main, fontSize: '0.8rem', py: 1 }}>
          {model.partNumber}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={SERIES_LABELS[model.series] ?? model.series} size="small"
            sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(theme.palette.primary.main, 0.12), color: theme.palette.primary.dark }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{BODY_MATERIAL_LABELS[model.bodyMaterial] ?? model.bodyMaterial}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.threadType}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.endConnectionType}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.connectionSize}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.configuration}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.seatMaterial}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.handle}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.pressureRating ?? '—'}</TableCell>
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
          <TableCell colSpan={12} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.02), borderLeft: `4px solid ${theme.palette.primary.main}`, borderBottom: `1px solid ${theme.palette.divider}` }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  {model.imageUrl && (
                    <Box sx={{ width: 140, height: 140, flexShrink: 0, border: `1px solid ${theme.palette.divider}`, borderRadius: 1, bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
                      <Box component="img" src={model.imageUrl} alt={model.partNumber}
                        sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </Box>
                  )}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} color="primary"
                      sx={{ display: 'block', mb: 2, letterSpacing: 1 }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number" value={model.partNumber} />
                      <Spec label="Series" value={SERIES_LABELS[model.series] ?? model.series} />
                      <Spec label="Body Material" value={BODY_MATERIAL_LABELS[model.bodyMaterial] ?? model.bodyMaterial} />
                      <Spec label="Thread Type" value={model.threadType} />
                      <Spec label="End Connection" value={model.endConnectionType} />
                      <Spec label="Connection Size" value={model.connectionSize} />
                      <Spec label="Configuration" value={model.configuration} />
                      <Spec label="Seat Material" value={model.seatMaterial} />
                      <Spec label="Handle" value={model.handle} />
                      {model.pressureRating && <Spec label="Pressure Rating" value={model.pressureRating} />}
                      {model.options && <Spec label="Options" value={model.options} />}
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

type SortKey = 'partNumber' | 'series' | 'bodyMaterial' | 'threadType' | 'endConnectionType' | 'connectionSize' | 'configuration' | 'seatMaterial' | 'handle' | 'pressureRating'

export default function BallValveTable({
  models,
  isFetching,
  filters,
  setFilters,
  filterOptions,
  filtersLoading,
  activeCount,
}: {
  models: BallValveDTO[]
  isFetching?: boolean
  filters: BallValveFilters
  setFilters: React.Dispatch<React.SetStateAction<BallValveFilters>>
  filterOptions?: BallValveFilterOptions
  filtersLoading: boolean
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
    const av = (a[sortKey] ?? '') as string
    const bv = (b[sortKey] ?? '') as string
    if (av < bv) return sortDir === 'asc' ? -1 : 1
    if (av > bv) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const headerSx = {
    bgcolor: alpha(theme.palette.primary.main, 0.04),
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  }

  const sidebar = (
    <BallValveSidebar
      filters={filters}
      setFilters={setFilters}
      filterOptions={filterOptions}
      filtersLoading={filtersLoading}
      activeCount={activeCount}
    />
  )

  return (
    <Box sx={{
      display: 'flex', alignItems: 'flex-start',
      border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
      borderRadius: '8px', bgcolor: 'background.paper',
    }}>
      {!isMobile && sidebar}
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>

      <Box sx={{ position: 'relative', flex: 1, minWidth: 0 }}>
        {isMobile && (
          <Box sx={{ p: 1, borderBottom: `1px solid ${theme.palette.divider}` }}>
            <IconButton onClick={() => setMobileOpen(true)}><FilterListIcon /></IconButton>
          </Box>
        )}
        {isFetching && (
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backdropFilter: 'blur(2px)', bgcolor: 'rgba(255,255,255,0.4)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ bgcolor: 'background.paper', px: 3, py: 1.5, borderRadius: '20px', boxShadow: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: theme.palette.primary.main, animation: 'pulse 1s ease-in-out infinite', '@keyframes pulse': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.3 } } }} />
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
                  { key: 'partNumber' as SortKey,       label: 'Part Number' },
                  { key: 'series' as SortKey,            label: 'Series' },
                  { key: 'bodyMaterial' as SortKey,      label: 'Material' },
                  { key: 'threadType' as SortKey,        label: 'Thread' },
                  { key: 'endConnectionType' as SortKey, label: 'End Connection' },
                  { key: 'connectionSize' as SortKey,    label: 'Size' },
                  { key: 'configuration' as SortKey,     label: 'Config' },
                  { key: 'seatMaterial' as SortKey,      label: 'Seat' },
                  { key: 'handle' as SortKey,            label: 'Handle' },
                  { key: 'pressureRating' as SortKey,    label: 'Pressure' },
                  { key: null,                            label: 'Quote' },
                ]).map((h, i) => (
                  <TableCell key={i} sx={headerSx}>
                    {h.key ? (
                      <TableSortLabel active={sortKey === h.key} direction={sortKey === h.key ? sortDir : 'asc'} onClick={() => handleSort(h.key!)}>
                        {h.label}
                      </TableSortLabel>
                    ) : h.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginated.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={12} align="center" sx={{ py: 6 }}>
                    <Typography variant="body2" color="text.secondary">No valves found.</Typography>
                  </TableCell>
                </TableRow>
              ) : paginated.map((model, i) => <Row key={`${model.partNumber}-${i}`} model={model} />)}
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
          sx={{ borderTop: `1px solid ${theme.palette.divider}`, fontSize: '0.8rem' }}
        />
      </Box>
    </Box>
  )
}