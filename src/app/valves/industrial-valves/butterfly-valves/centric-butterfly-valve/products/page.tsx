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
const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/CENTRIC__25C11iulkk.jpg'

interface CentricSeriesDTO {
  id: string
  model: string
  endConnection: string
  sizeRange: string
  flanges: string
  features: string[]
  imageUrl: string
}

const DATA: CentricSeriesDTO[] = [
  {
    id: 'vf-730',
    model: 'VF-730',
    endConnection: 'Wafer',
    sizeRange: 'DN40–DN1000 (1½"–40")',
    flanges: 'ANSI 125/150 · BS Table E · JIS 10K · PN10 · PN16',
    features: [
      'Wafer type with flange positioning holes for accurate pipeline installation.',
      'Size range DN40–DN1000 (1½"–40") — largest wafer centric butterfly valve in the range.',
      'Bi-directional bubble tight shutoff to 10 bar STD / 16 bar OPT (DN40–DN600).',
      'Q-type shaft design available up to DN350 — no special tools for disassembly.',
    ],
    imageUrl: IMAGE,
  },
  {
    id: 'vf-733',
    model: 'VF-733',
    endConnection: 'Lug',
    sizeRange: 'DN40–DN600 (1½"–24")',
    flanges: 'ANSI 125/150 · BS Table E · JIS 10K · PN10 · PN16',
    features: [
      'Lug type for dead-end service and line isolation without downstream flange.',
      'Size range DN40–DN600 (1½"–24") in wafer and lug configurations.',
      'Bi-directional bubble tight shutoff to 10 bar STD / 16 bar OPT.',
      'Same design features as VF-730 with stainless steel investment cast body options.',
    ],
    imageUrl: IMAGE,
  },
  {
    id: 'vf-737',
    model: 'VF-737',
    endConnection: 'Flanged',
    sizeRange: 'DN350–DN1800 (14"–72")',
    flanges: 'ANSI 150 · JIS 10K · PN10 · PN16',
    features: [
      'Flanged type covering large bore DN350–DN1800 (14"–72") — up to 72" available.',
      'Round keyway shaft for DN650+ (26"+) for actuator mounting on large bore sizes.',
      'ISO 5211 mounting flange for direct actuator mounting across all sizes.',
      'Bi-directional bubble tight shutoff to 10 bar across the full flanged size range.',
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

function CentricRow({ row }: { row: CentricSeriesDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: `Value Valves ${row.model} Centric Butterfly Valve`,
    brand: 'Value Valves',
    category: 'Butterfly Valves',
    categoryId: 'butterfly-valves',
    subCategory: 'Centric',
    thumbnail: row.imageUrl,
    description: row.features.join(' '),
    keySpecs: [
      { label: 'Model',          value: row.model },
      { label: 'End Connection', value: row.endConnection },
      { label: 'Size Range',     value: row.sizeRange },
      { label: 'Flanges',        value: row.flanges },
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
          <Chip label={row.endConnection} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.sizeRange}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.flanges}</TableCell>
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
                    <Box component="img" src={row.imageUrl} alt={row.model}
                      sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Model"          value={row.model} />
                      <Spec label="End Connection" value={row.endConnection} />
                      <Spec label="Size Range"     value={row.sizeRange} />
                      <Spec label="Flanges"        value={row.flanges} />
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

export default function CentricProductsPage() {
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
          VF-7 Series — Centric Butterfly Valves
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          Wafer, lug and flanged centric butterfly valves across DN40–DN1800. NSF61 & NSF 372 certified, ATEX approved, ABS ship certified.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          3 MODELS
        </Typography>
        <Box sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
          <TableContainer>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...headerSx, width: 40 }} />
                  <TableCell sx={headerSx}>Model</TableCell>
                  <TableCell sx={headerSx}>End Connection</TableCell>
                  <TableCell sx={headerSx}>Size Range</TableCell>
                  <TableCell sx={headerSx}>Flange Drilling</TableCell>
                  <TableCell sx={headerSx}>Quote</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {DATA.map(row => <CentricRow key={row.id} row={row} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  )
}