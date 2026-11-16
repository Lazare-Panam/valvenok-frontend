import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Typography, IconButton, Collapse, Stack, Chip, Button,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { FGValveProduct } from '../hooks/fgValveData'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const PORT_SIZE_LABELS: Record<string, string> = {
  'M5': 'M5', '06': '1/8"', '08': '1/4"',
  '10': '3/8"', '15': '1/2"', '20': '3/4"', '25': '1"'
}

const IMAGE = 'https://pblol2.blob.core.windows.net/spac-images/products/pneumatic-valves/pneumatic-valves2.png'

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

function FGValveRow({ p }: { p: FGValveProduct }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)

  const valveTypeLabel = p.valveType === '25' ? '5/2 Way' : '5/3 Way'
  const workingModeLabel = p.workingMode === 'CL' ? '3 Position Center Closed' : '2 Position'
  const portSizeLabel = PORT_SIZE_LABELS[p.portSize] ?? p.portSize

  const openQuote = () => setQuoteProduct({
    id: String(p.id),
    name: `FG Series Pneumatic Valve — ${p.partNumber}`,
    brand: 'Valvenok',
    category: 'Pneumatic Valves',
    categoryId: 'pneumatic-valves',
    subCategory: `${valveTypeLabel} ${p.control} Solenoid`,
    thumbnail: IMAGE,
    description: p.description,
    keySpecs: [
      { label: 'Part Number',  value: p.partNumber },
      { label: 'Type',         value: valveTypeLabel },
      { label: 'Port Size',    value: portSizeLabel },
      { label: 'Solenoid',     value: `${p.control} Solenoid` },
      { label: 'Working Mode', value: workingModeLabel },
      { label: 'Body Size',    value: String(p.bodySize) },
    ],
    variantInfo: { count: 1, sizeRange: portSizeLabel },
  })

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{
        cursor: 'pointer',
        bgcolor: open ? alpha(BRAND_GREEN, 0.04) : 'inherit',
        '&:hover': { bgcolor: `${alpha(BRAND_GREEN, 0.03)} !important` },
      }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: 'monospace', fontWeight: 700, color: BRAND_GREEN, fontSize: '0.75rem', py: 1 }}>
          {p.partNumber}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={valveTypeLabel} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{portSizeLabel}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={`${p.control} Solenoid`} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700,
              borderColor: p.control === 'Double' ? '#FF6B35' : BRAND_GREEN,
              color: p.control === 'Double' ? '#FF6B35' : BRAND_GREEN,
            }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{workingModeLabel}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained" onClick={e => { e.stopPropagation(); openQuote() }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'capitalize', whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={7} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_GREEN, 0.02), borderLeft: `4px solid ${BRAND_GREEN}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={IMAGE} alt={p.partNumber} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 1, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>DESCRIPTION</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, fontFamily: PRIMARY_FONT }}>{p.description}</Typography>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number"  value={p.partNumber} />
                      <Spec label="Type"         value={valveTypeLabel} />
                      <Spec label="Body Size"    value={String(p.bodySize)} />
                      <Spec label="Port Size"    value={portSizeLabel} />
                      <Spec label="Solenoid"     value={`${p.control} Solenoid`} />
                      <Spec label="Working Mode" value={workingModeLabel} />
                      {p.coilVoltage && <Spec label="Coil Voltage" value={p.coilVoltage} />}
                    </Stack>
                    <Button variant="contained" onClick={openQuote}
                      sx={{ textTransform: 'capitalize', fontWeight: 700, borderRadius: '6px', bgcolor: BRAND_GREEN, color: '#fff', '&:hover': { bgcolor: '#50c23a' }, fontFamily: PRIMARY_FONT }}>
                      Request Quote
                    </Button>
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

export default function FGValveTable({ products }: { products: FGValveProduct[] }) {
  const headerSx = {
    bgcolor: alpha(BRAND_GREEN, 0.04),
    borderBottom: `2px solid ${BRAND_GREEN}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontFamily: PRIMARY_FONT,
  }

  return (
    <Box sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
      <TableContainer>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...headerSx, width: 40 }} />
              <TableCell sx={headerSx}>Part Number</TableCell>
              <TableCell sx={headerSx}>Type</TableCell>
              <TableCell sx={headerSx}>Port Size</TableCell>
              <TableCell sx={headerSx}>Solenoid</TableCell>
              <TableCell sx={headerSx}>Working Mode</TableCell>
              <TableCell sx={headerSx}>Quote</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.length === 0
              ? <TableRow><TableCell colSpan={7} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary" fontFamily={PRIMARY_FONT}>No valves found.</Typography></TableCell></TableRow>
              : products.map(p => <FGValveRow key={p.id} p={p} />)
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}