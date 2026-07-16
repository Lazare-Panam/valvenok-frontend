'use client'
import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack,
  IconButton, Button, Snackbar
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { VF9AModel } from './data'
import { useCartStore } from '@/src/app/cart/hooks/useCartStore'

function Spec({ label, value }: { label: string; value: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.disabled" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25 }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600}>{value}</Typography>
    </Box>
  )
}

function Row({ model }: { model: VF9AModel }) {
  const [open, setOpen] = useState(false)
  const [qty, setQty] = useState(1)
  const [snackOpen, setSnackOpen] = useState(false)
  const theme = useTheme()
  const addItem = useCartStore(state => state.addItem)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addItem({
      id: model.modelCode,
      name: model.modelCode,
      description: `Double Offset Butterfly Valve - Size ${model.sizeInches} - ${model.endType} Ends - Flange ${model.flange} - Rating ${model.ratingBar} bar - Body ${model.body} / Disc ${model.disc} / Stem ${model.stem} / Seat ${model.seat} / Yoke ${model.yoke} - Leakage Rate ${model.leakageRate} - Operator ${model.operator}`,
      partNumber: model.modelCode,
      price: model.priceGbp,
      quantity: qty,
      cloudinaryId: model.imageUrl,
    })
    setSnackOpen(true)
  }

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
          {model.modelCode}
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.sizeInches}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.endType}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.flange}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.ratingBar} bar</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.body}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.disc}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.stem}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.seat}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.yoke}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.leakageRate}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem' }}>{model.operator}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={model.stockStatus} size="small"
            sx={{ fontSize: '0.65rem', fontWeight: 700, bgcolor: alpha(theme.palette.warning.main, 0.12), color: theme.palette.warning.dark }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontWeight: 700, fontSize: '0.85rem' }}>£{model.priceGbp.toFixed(2)}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={handleAddToCart}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap', boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}>
            Add to Cart
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={15} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(theme.palette.primary.main, 0.02), borderLeft: `4px solid ${theme.palette.primary.main}`, borderBottom: `1px solid ${theme.palette.divider}` }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  {model.imageUrl && (
                    <Box sx={{ width: 140, height: 140, flexShrink: 0, border: `1px solid ${theme.palette.divider}`, borderRadius: 1, bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
                      <Box component="img" src={model.imageUrl} alt={model.modelCode}
                        sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </Box>
                  )}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} color="primary"
                      sx={{ display: 'block', mb: 2, letterSpacing: 1 }}>TECHNICAL SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Model Code" value={model.modelCode} />
                      <Spec label="Size" value={model.sizeInches} />
                      <Spec label="End Type" value={model.endType} />
                      <Spec label="Flange" value={model.flange} />
                      <Spec label="Rating" value={`${model.ratingBar} bar`} />
                      <Spec label="Body" value={model.body} />
                      <Spec label="Disc" value={model.disc} />
                      <Spec label="Stem" value={model.stem} />
                      <Spec label="Seat" value={model.seat} />
                      <Spec label="Yoke" value={model.yoke} />
                      <Spec label="Leakage Rate" value={model.leakageRate} />
                      <Spec label="Operator" value={model.operator} />
                      <Spec label="Price" value={`£${model.priceGbp.toFixed(2)}`} />
                    </Stack>
                    <Stack direction="row" gap={1} mb={3}>
                      <Chip label={model.stockStatus} size="small" color="warning" variant="outlined" />
                    </Stack>
                    <Stack direction="row" alignItems="center" gap={2}>
                      <Stack direction="row" alignItems="center" gap={0.5}>
                        <IconButton size="small" onClick={() => setQty(q => Math.max(1, q - 1))}>
                          <RemoveIcon fontSize="inherit" />
                        </IconButton>
                        <Typography variant="body2" sx={{ width: 24, textAlign: 'center' }}>{qty}</Typography>
                        <IconButton size="small" onClick={() => setQty(q => q + 1)}>
                          <AddIcon fontSize="inherit" />
                        </IconButton>
                      </Stack>
                      <Button variant="contained" onClick={handleAddToCart}
                        sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px' }}>
                        Add to Cart
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}

      <Snackbar
        open={snackOpen}
        autoHideDuration={2000}
        onClose={() => setSnackOpen(false)}
        message={`Added ${qty} × ${model.modelCode} to cart`}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
    </>
  )
}

type SortKey = 'modelCode' | 'sizeInches' | 'ratingBar' | 'priceGbp'

export default function VF9ATable({ models, isFetching }: { models: VF9AModel[]; isFetching?: boolean }) {
  const theme = useTheme()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(50)
  const [sortKey, setSortKey] = useState<SortKey>('modelCode')
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

  const headerSx = {
    bgcolor: alpha(theme.palette.primary.main, 0.04),
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  }

  return (
    <Box sx={{ position: 'relative', flex: 1, minWidth: 0 }}>
      {isFetching && (
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backdropFilter: 'blur(2px)', bgcolor: 'rgba(255,255,255,0.4)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ bgcolor: 'background.paper', px: 3, py: 1.5, borderRadius: '20px', boxShadow: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: theme.palette.primary.main, animation: 'pulse 1s ease-in-out infinite', '@keyframes pulse': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.3 } } }} />
            <Typography variant="caption" fontWeight={700} sx={{ color: theme.palette.primary.main }}>UPDATING</Typography>
          </Box>
        </Box>
      )}
      <TableContainer sx={{ opacity: isFetching ? 0.6 : 1, transition: 'opacity 0.2s ease' }}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...headerSx, width: 40 }} />
              {([
                { key: 'modelCode' as SortKey, label: 'Model Code' },
                { key: 'sizeInches' as SortKey, label: 'Size' },
                { key: null, label: 'Ends' },
                { key: null, label: 'Flange' },
                { key: 'ratingBar' as SortKey, label: 'Rating (bar)' },
                { key: null, label: 'Body' },
                { key: null, label: 'Disc' },
                { key: null, label: 'Stem' },
                { key: null, label: 'Seat' },
                { key: null, label: 'Yoke' },
                { key: null, label: 'Leakage' },
                { key: null, label: 'Operator' },
                { key: null, label: 'Stock' },
                { key: 'priceGbp' as SortKey, label: 'Price' },
                { key: null, label: 'Cart' },
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
                <TableCell colSpan={15} align="center" sx={{ py: 6 }}>
                  <Typography variant="body2" color="text.secondary">No models found.</Typography>
                </TableCell>
              </TableRow>
            ) : paginated.map((model, i) => <Row key={`${model.modelCode}-${i}`} model={model} />)}
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
  )
}