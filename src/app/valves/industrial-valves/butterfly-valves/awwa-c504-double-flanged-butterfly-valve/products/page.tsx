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
const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/awwaa.jpg'

interface AWWASeriesDTO {
  id: string
  pressureClass: string
  awwaStandard: string
  sizeRange: string
  bodyMaterials: string
  discMaterials: string
  seatOptions: string
  features: string[]
  imageUrl: string
}

const DATA: AWWASeriesDTO[] = [
  {
    id: 'vf-264-25b',
    pressureClass: 'AWWA Class 25B',
    awwaStandard: 'AWWA C504 / C516',
    sizeRange: 'DN350–DN2600 (14"–104")',
    bodyMaterials: 'Cast Iron (A126-B) · Ductile Iron (A536-65-45-12)',
    discMaterials: 'Ductile Iron · Stainless Steel CF8 / CF8M · WCB',
    seatOptions: 'NBR · EPDM · Neoprene · FKM',
    features: [
      'AWWA Class 25B — rated to 25 psi working pressure across the full size range.',
      'Double eccentric disc geometry — 360° continuous sealing, disc leaves seat on opening for long service life.',
      'Full size range DN350–DN2600 (14"–104") to AWWA C504 and C516 short type.',
      'Hard rubber lining for body and disc available on request for seawater service.',
    ],
    imageUrl: IMAGE,
  },
  {
    id: 'vf-264-75b',
    pressureClass: 'AWWA Class 75B',
    awwaStandard: 'AWWA C504 / C516',
    sizeRange: 'DN350–DN2600 (14"–104")',
    bodyMaterials: 'Cast Iron (A126-B) · Ductile Iron (A536-65-45-12)',
    discMaterials: 'Ductile Iron · Stainless Steel CF8 / CF8M · WCB',
    seatOptions: 'NBR · EPDM · Neoprene · FKM',
    features: [
      'AWWA Class 75B — rated to 75 psi working pressure across the full size range.',
      'Double eccentric disc geometry — 360° continuous sealing, disc leaves seat on opening for long service life.',
      'Full size range DN350–DN2600 (14"–104") to AWWA C504 and C516 short type.',
      'In-line seat ring replacement for DN750 (30") and above without removing valve from pipeline.',
    ],
    imageUrl: IMAGE,
  },
  {
    id: 'vf-264-150b',
    pressureClass: 'AWWA Class 150B',
    awwaStandard: 'AWWA C504 / C516',
    sizeRange: 'DN350–DN2600 (14"–104")',
    bodyMaterials: 'Cast Iron (A126-B) · Ductile Iron (A536-65-45-12)',
    discMaterials: 'Ductile Iron · Stainless Steel CF8 / CF8M · WCB',
    seatOptions: 'NBR · EPDM · Neoprene · FKM',
    features: [
      'AWWA Class 150B — rated to 150 psi working pressure across the full size range.',
      'Double eccentric disc geometry — 360° continuous sealing, disc leaves seat on opening for long service life.',
      'Full size range DN350–DN2600 (14"–104") to AWWA C504 and C516 short type.',
      'Bi-directional tight shutoff — suitable for high pressure water works and water treatment service.',
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

function AWWARow({ row }: { row: AWWASeriesDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: `Value Valves VF-264 ${row.pressureClass} AWWA Double Flanged Butterfly Valve`,
    brand: 'Value Valves',
    category: 'Butterfly Valves',
    categoryId: 'butterfly-valves',
    subCategory: 'AWWA Double Flanged',
    thumbnail: row.imageUrl,
    description: row.features.join(' '),
    keySpecs: [
      { label: 'Pressure Class', value: row.pressureClass },
      { label: 'Standard',       value: row.awwaStandard },
      { label: 'Size Range',     value: row.sizeRange },
      { label: 'Seat Options',   value: row.seatOptions },
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
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.pressureClass} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.awwaStandard}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.sizeRange}</TableCell>
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
          <TableCell colSpan={6} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_GREEN, 0.02), borderLeft: `4px solid ${BRAND_GREEN}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={row.imageUrl} alt={row.pressureClass}
                      sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Pressure Class"  value={row.pressureClass} />
                      <Spec label="Standard"        value={row.awwaStandard} />
                      <Spec label="Size Range"      value={row.sizeRange} />
                      <Spec label="Body Materials"  value={row.bodyMaterials} />
                      <Spec label="Disc Materials"  value={row.discMaterials} />
                      <Spec label="Seat Options"    value={row.seatOptions} />
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

export default function AWWAProductsPage() {
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
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          VF-264 — AWWA Double Flanged Butterfly Valves
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          AWWA C504 and C516 double flanged butterfly valves across pressure classes 25B, 75B and 150B. DN350–DN2600 (14"–104").
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          3 PRESSURE CLASSES
        </Typography>
        <Box sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
          <TableContainer>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...headerSx, width: 40 }} />
                  <TableCell sx={headerSx}>Pressure Class</TableCell>
                  <TableCell sx={headerSx}>Standard</TableCell>
                  <TableCell sx={headerSx}>Size Range</TableCell>
                  <TableCell sx={headerSx}>Seat Options</TableCell>
                  <TableCell sx={headerSx}>Quote</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {DATA.map(row => <AWWARow key={row.id} row={row} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  )
}