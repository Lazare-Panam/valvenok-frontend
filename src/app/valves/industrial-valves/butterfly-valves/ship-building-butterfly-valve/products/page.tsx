'use client'
import { useState } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Collapse, Chip, Typography, Stack, IconButton, Button,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'

const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/vf-265-ship-building.jpg'

interface VF265ASeriesDTO {
  id: string
  model: string
  pressureRating: string
  pressureCode: string
  sizeRange: string
  flangeStandard: string
  seatOptions: string
  certifications: string[]
  features: string[]
  imageUrl: string
}

const DATA: VF265ASeriesDTO[] = [
  {
    id: 'vf-265a-0',
    model: 'VF-265A (10 Bar)',
    pressureRating: '10 Bar',
    pressureCode: '0',
    sizeRange: 'DN50–DN600 (2"–24")',
    flangeStandard: 'JIS 10K · ASME B16.5 150LB · ISO 7005-1 PN10',
    seatOptions: 'NBR · EPDM · Neoprene · Silicon · FKM',
    certifications: ['ABS', 'LR', 'BV', 'DNV', 'CR', 'CCS'],
    features: [
      'Bi-directional bubble tight shutoff to 10 bar across DN50–DN600 (2"–24").',
      'Closure test pressure 18 bar (260 psi) per ISO 5208.',
      'Shell test pressure 24 bar (340 psi) per ISO 5208.',
      'JIS 10K flanged — flat face or raised face, face to face per JIS F 7480.',
    ],
    imageUrl: IMAGE,
  },
  {
    id: 'vf-265a-6',
    model: 'VF-265A (16 Bar)',
    pressureRating: '16 Bar',
    pressureCode: '6',
    sizeRange: 'DN50–DN600 (2"–24")',
    flangeStandard: 'JIS 10K · ASME B16.5 150LB · ISO 7005-1 PN10',
    seatOptions: 'NBR · EPDM · Neoprene · Silicon · FKM',
    certifications: ['ABS', 'LR', 'BV', 'DNV', 'CR', 'CCS'],
    features: [
      'Bi-directional bubble tight shutoff to 16 bar (230 psi) across DN50–DN600 (2"–24").',
      'Closure test pressure 18 bar (260 psi) per ISO 5208.',
      'Shell test pressure 24 bar (340 psi) per ISO 5208.',
      'JIS 10K flanged — flat face or raised face, face to face per JIS F 7480.',
    ],
    imageUrl: IMAGE,
  },
]

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
    </Box>
  )
}

function VF265ARow({ row }: { row: VF265ASeriesDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: `Value Valves ${row.model} Ship-Building Butterfly Valve`,
    brand: 'Value Valves',
    category: 'Butterfly Valves',
    categoryId: 'butterfly-valves',
    subCategory: 'Ship-Building',
    thumbnail: row.imageUrl,
    description: row.features.join(' '),
    keySpecs: [
      { label: 'Model',           value: row.model },
      { label: 'Pressure Rating', value: row.pressureRating },
      { label: 'Size Range',      value: row.sizeRange },
      { label: 'Flange',          value: row.flangeStandard },
      { label: 'Seat Options',    value: row.seatOptions },
    ],
    variantInfo: { count: 1, sizeRange: row.sizeRange },
  })

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)}
        sx={{ cursor: 'pointer', bgcolor: open ? alpha(BRAND_GREEN, 0.04) : 'inherit', '&:hover': { bgcolor: `${alpha(BRAND_GREEN, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT, fontWeight: 700 }}>{row.model}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.pressureRating} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.sizeRange}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.flangeStandard}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.seatOptions}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={e => { e.stopPropagation(); openQuote() }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'none',
              whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none',
              '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
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
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={row.imageUrl} alt={row.model}
                      sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Pressure Rating" value={row.pressureRating} />
                      <Spec label="Size Range"      value={row.sizeRange} />
                      <Spec label="Flange"          value={row.flangeStandard} />
                      <Spec label="Seat Options"    value={row.seatOptions} />
                    </Stack>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 1, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      CLASS SOCIETY APPROVALS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
                      {row.certifications.map((c) => (
                        <Chip key={c} label={c} size="small" variant="outlined"
                          sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: alpha(BRAND_GREEN, 0.4), color: 'text.secondary' }} />
                      ))}
                    </Stack>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      KEY FEATURES
                    </Typography>
                    <Box component="ul" sx={{ m: 0, pl: 2, mb: 3 }}>
                      {row.features.map((f, i) => (
                        <Box component="li" key={i} sx={{ mb: 1 }}>
                          <Typography variant="body2" color="text.secondary" sx={{ fontFamily: PRIMARY_FONT, lineHeight: 1.6 }}>
                            {f}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Button variant="contained" onClick={openQuote}
                      sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px',
                        bgcolor: BRAND_GREEN, color: '#fff', '&:hover': { bgcolor: '#50c23a' },
                        fontFamily: PRIMARY_FONT }}>
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

const headerSx = {
  bgcolor: alpha(BRAND_GREEN, 0.04),
  borderBottom: `2px solid ${BRAND_GREEN}`,
  fontWeight: 700, fontSize: '0.72rem',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  fontFamily: PRIMARY_FONT,
}

export default function ShipBuildingProductsPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Box sx={{ mb: 2 }}>
          <Box component="img"
            src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg"
            alt="Value Valves"
            sx={{ height: 28, objectFit: "contain" }}
          />
        </Box>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          VF-265A — Ship-Building Butterfly Valves
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          Flanged JIS 10K ship-building butterfly valves. 10 bar and 16 bar. ABS, LR, BV, DNV, CR and CCS certified. Used on over 1,000 ships worldwide since 1980.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          2 PRESSURE RATINGS
        </Typography>
        <Box sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
          <TableContainer>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...headerSx, width: 40 }} />
                  <TableCell sx={headerSx}>Model</TableCell>
                  <TableCell sx={headerSx}>Pressure Rating</TableCell>
                  <TableCell sx={headerSx}>Size Range</TableCell>
                  <TableCell sx={headerSx}>Flange Standard</TableCell>
                  <TableCell sx={headerSx}>Seat Options</TableCell>
                  <TableCell sx={headerSx}>Quote</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {DATA.map(row => <VF265ARow key={row.id} row={row} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  )
}