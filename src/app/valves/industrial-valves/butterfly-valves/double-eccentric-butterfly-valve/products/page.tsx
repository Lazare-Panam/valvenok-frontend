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
const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/Double-Offset__25C11bHDDc.jpg'

interface VF9ASeriesDTO {
  id: string
  model: string
  pressureClass: string
  seatType: string
  sizeRange: string
  tempRange: string
  endConnections: string[]
  flangeStandards: string
  features: string[]
  imageUrl: string
}

const DATA: VF9ASeriesDTO[] = [
  {
    id: 'vf-91a',
    model: 'VF-91A',
    pressureClass: 'ANSI 150LB',
    seatType: 'Soft Seat',
    sizeRange: 'DN50–DN1200 (2"–48")',
    tempRange: '-100°C to +260°C (-148°F to +500°F)',
    endConnections: ['Wafer (VF-910A)', 'Lug (VF-913A)', 'Flange Short (VF-916A)', 'Flange Long (VF-917A)'],
    flangeStandards: 'ANSI 150LB · ISO PN10–PN25 · JIS 10K 16K 20K',
    features: [
      'Soft seat design — suitable for petrochemical and food industry applications at ambient temperatures.',
      'Pressure-assisted bi-directional bubble tight shutoff at all pressures.',
      'Patented retainer ring (size below 24") with square thread for uninterrupted sealing face.',
      'PTFE, PTFE+15%Graphite, PTFE+15%Glass Fiber and TFM seat options available.',
    ],
    imageUrl: IMAGE,
  },
  {
    id: 'vf-92a',
    model: 'VF-92A',
    pressureClass: 'ANSI 150LB',
    seatType: 'Metal Seat + PTFE (Fire Safe)',
    sizeRange: 'DN50–DN1200 (2"–48")',
    tempRange: '-100°C to +260°C (-148°F to +500°F)',
    endConnections: ['Wafer (VF-920A)', 'Lug (VF-923A)', 'Flange Short (VF-926A)', 'Flange Long (VF-927A)'],
    flangeStandards: 'ANSI 150LB · ISO PN10–PN25 · JIS 10K 16K 20K',
    features: [
      'Fire safe seat — soft seat for zero leakage in normal operation, Inconel 718 metal-to-metal seal after fire.',
      'Approved per API 607 and ISO 10497 — suitable for petrochemical and refining industries at high temperatures.',
      'Graphite gland packing ensures zero leakage during fire events.',
      'Patented retainer design with twin thread (size below 24") for uninterrupted sealing face.',
    ],
    imageUrl: IMAGE,
  },
  {
    id: 'vf-93a',
    model: 'VF-93A',
    pressureClass: 'ANSI 150LB',
    seatType: 'Metal Seat',
    sizeRange: 'DN50–DN1200 (2"–48")',
    tempRange: '-29°C to +500°C (-20°F to +932°F)',
    endConnections: ['Wafer (VF-930A)', 'Lug (VF-933A)', 'Flange Short (VF-936A)', 'Flange Long (VF-937A)'],
    flangeStandards: 'ANSI 150LB · ISO PN10–PN25 · JIS 10K 16K 20K',
    features: [
      'Full metal seat — Inconel 718 (2"–24") or SS316 bi-directional self-sealing design.',
      'Leakage Class IV per ANSI FCI 70-2 — suitable for petrochemical and oil refining at up to 500°C.',
      'Graphite gland packing for high temperature service.',
      'Retaining ring fixed at upstream for dead end service.',
    ],
    imageUrl: IMAGE,
  },
  {
    id: 'vf-94a',
    model: 'VF-94A',
    pressureClass: 'ANSI 300LB',
    seatType: 'Soft Seat',
    sizeRange: 'DN50–DN600 (2"–24")',
    tempRange: '-100°C to +260°C (-148°F to +500°F)',
    endConnections: ['Wafer (VF-940A)', 'Lug (VF-943A)', 'Flange Short (VF-946A)', 'Flange Long (VF-947A)'],
    flangeStandards: 'ANSI 300LB · ISO PN40–PN50 · JIS 30K 40K',
    features: [
      'ANSI 300LB soft seat — dust proof design prevents ingress of foreign material into shaft area.',
      'Suitable for petrochemical and food industry applications at ambient temperatures.',
      'Splined shaft up to 400mm (16"), keyway shaft for 450mm (18") and above.',
      'Patented retainer design with twin thread (size below 24") for uninterrupted sealing face.',
    ],
    imageUrl: IMAGE,
  },
  {
    id: 'vf-95a',
    model: 'VF-95A',
    pressureClass: 'ANSI 300LB',
    seatType: 'Metal Seat + PTFE (Fire Safe)',
    sizeRange: 'DN50–DN600 (2"–24")',
    tempRange: '-100°C to +260°C (-148°F to +500°F)',
    endConnections: ['Wafer (VF-950A)', 'Lug (VF-953A)', 'Flange Short (VF-956A)', 'Flange Long (VF-957A)'],
    flangeStandards: 'ANSI 300LB · ISO PN40–PN50 · JIS 30K 40K',
    features: [
      'ANSI 300LB fire safe seat — Inconel 718 metal-to-metal seat after fire event per API 607.',
      'Adjustable 2-piece graphite gland packing assembly applies even pressure to packing.',
      'Splined shaft up to 400mm (16"), keyway shaft for 450mm (18") and above.',
      'Leakage Class V per ANSI FCI 70-2 in normal soft seat operation.',
    ],
    imageUrl: IMAGE,
  },
  {
    id: 'vf-96a',
    model: 'VF-96A',
    pressureClass: 'ANSI 300LB',
    seatType: 'Metal Seat',
    sizeRange: 'DN50–DN600 (2"–24")',
    tempRange: '-29°C to +500°C (-20°F to +932°F)',
    endConnections: ['Wafer (VF-960A)', 'Lug (VF-963A)', 'Flange Short (VF-966A)', 'Flange Long (VF-967A)'],
    flangeStandards: 'ANSI 300LB · ISO PN40–PN50 · JIS 30K 40K',
    features: [
      'ANSI 300LB full metal seat — Inconel 718 pressure-assisted bi-directional bubble tight shutoff.',
      'Leakage Class IV / V per ANSI FCI 70-2 — for petrochemical and oil refining at up to 500°C.',
      'Adjustable 2-piece graphite gland packing for high temperature service.',
      'Splined shaft up to 400mm (16"), keyway shaft for 450mm (18") and above.',
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

function VF9ARow({ row }: { row: VF9ASeriesDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: `Value Valves ${row.model} Double Eccentric Butterfly Valve`,
    brand: 'Value Valves',
    category: 'Butterfly Valves',
    categoryId: 'butterfly-valves',
    subCategory: 'Double Eccentric',
    thumbnail: row.imageUrl,
    description: row.features.join(' '),
    keySpecs: [
      { label: 'Model',          value: row.model },
      { label: 'Pressure Class', value: row.pressureClass },
      { label: 'Seat Type',      value: row.seatType },
      { label: 'Size Range',     value: row.sizeRange },
      { label: 'Temperature',    value: row.tempRange },
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
          <Chip label={row.pressureClass} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.seatType} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: 'text.disabled', color: 'text.secondary' }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.sizeRange}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.tempRange}</TableCell>
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
                      <Spec label="Model"           value={row.model} />
                      <Spec label="Pressure Class"  value={row.pressureClass} />
                      <Spec label="Seat Type"       value={row.seatType} />
                      <Spec label="Size Range"      value={row.sizeRange} />
                      <Spec label="Temperature"     value={row.tempRange} />
                      <Spec label="Flange Std"      value={row.flangeStandards} />
                    </Stack>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 1, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      END CONNECTIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
                      {row.endConnections.map((ec) => (
                        <Chip key={ec} label={ec} size="small" variant="outlined"
                          sx={{ fontSize: '0.65rem', fontWeight: 600, borderColor: alpha(BRAND_GREEN, 0.4), color: 'text.secondary' }} />
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

export default function DoubleEccentricProductsPage() {
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
          VF-9A Series — High Performance Double Eccentric Butterfly Valves
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          ANSI 150LB and 300LB double eccentric butterfly valves. Soft seat, fire safe and full metal seat — SIL 2, API 607, ATEX certified.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          6 SERIES
        </Typography>
        <Box sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
          <TableContainer>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...headerSx, width: 40 }} />
                  <TableCell sx={headerSx}>Model</TableCell>
                  <TableCell sx={headerSx}>Pressure Class</TableCell>
                  <TableCell sx={headerSx}>Seat Type</TableCell>
                  <TableCell sx={headerSx}>Size Range</TableCell>
                  <TableCell sx={headerSx}>Temperature</TableCell>
                  <TableCell sx={headerSx}>Quote</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {DATA.map(row => <VF9ARow key={row.id} row={row} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  )
}