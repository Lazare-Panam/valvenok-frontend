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
const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/butter-val.jpg'

interface TOBVSeriesDTO {
  id: string
  series: string
  pressureClass: string
  sizeRange: string
  endConnections: string[]
  tempRange: string
  features: string[]
  imageUrl: string
}

const DATA: TOBVSeriesDTO[] = [
  {
    id: 'vf-87a',
    series: 'VF-87A',
    pressureClass: 'ANSI 150LB',
    sizeRange: 'DN100–DN1200 (4"–48")',
    endConnections: ['Wafer', 'Lug', 'Flanged Short', 'Flanged Long', 'Flanged Gate'],
    tempRange: '-75°C to +550°C (Laminated) / -100°C to +760°C (Metal Seat)',
    features: [
      'ANSI Class 150LB rated to 19.6 bar at ambient temperature.',
      'Full size range DN100–DN1200 (4"–48") across wafer, lug and flanged end connections.',
      'Bubble tight Class V shutoff — laminated and solid metal seat options available.',
      'API 607 fire safe, ISO 15848 fugitive emission approved, SIL 3 capable.',
    ],
    imageUrl: IMAGE,
  },
  {
    id: 'vf-88a',
    series: 'VF-88A',
    pressureClass: 'ANSI 300LB',
    sizeRange: 'DN100–DN900 (4"–36")',
    endConnections: ['Wafer', 'Lug', 'Flanged Short', 'Flanged Long', 'Flanged Gate'],
    tempRange: '-75°C to +550°C (Laminated) / -100°C to +760°C (Metal Seat)',
    features: [
      'ANSI Class 300LB rated to 51.1 bar at ambient temperature.',
      'Size range DN100–DN900 (4"–36") across wafer, lug and flanged end connections.',
      'Bubble tight Class V shutoff — laminated and solid metal seat options available.',
      'API 607 fire safe, ISO 15848 fugitive emission approved, SIL 3 capable.',
    ],
    imageUrl: IMAGE,
  },
  {
    id: 'vf-89a',
    series: 'VF-89A',
    pressureClass: 'ANSI 600LB',
    sizeRange: 'DN100–DN600 (4"–24")',
    endConnections: ['Wafer', 'Lug', 'Flanged Short', 'Flanged Long', 'Flanged Gate'],
    tempRange: '-75°C to +550°C (Laminated) / -100°C to +760°C (Metal Seat)',
    features: [
      'ANSI Class 600LB rated to 102.1 bar at ambient temperature.',
      'Size range DN100–DN600 (4"–24") across wafer, lug and flanged end connections.',
      'Bubble tight Class V shutoff — laminated and solid metal seat options available.',
      'API 607 fire safe, ISO 15848 fugitive emission approved, SIL 3 capable.',
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

function TOBVRow({ row }: { row: TOBVSeriesDTO }) {
  const [open, setOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null)

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: `Value Valves ${row.series} Triple Offset Butterfly Valve`,
    brand: 'Value Valves',
    category: 'Butterfly Valves',
    categoryId: 'butterfly-valves',
    subCategory: 'Triple Offset',
    thumbnail: row.imageUrl,
    description: row.features.join(' '),
    keySpecs: [
      { label: 'Series',         value: row.series },
      { label: 'Pressure Class', value: row.pressureClass },
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
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT, fontWeight: 700 }}>{row.series}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.pressureClass} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.sizeRange}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>
          {row.endConnections.join(' · ')}
        </TableCell>
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
                    <Box component="img" src={row.imageUrl} alt={row.series}
                      sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Series"          value={row.series} />
                      <Spec label="Pressure Class"  value={row.pressureClass} />
                      <Spec label="Size Range"      value={row.sizeRange} />
                      <Spec label="Temperature"     value={row.tempRange} />
                      <Spec label="End Connections" value={row.endConnections.join(' · ')} />
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

export default function TOBVProductsPage() {
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
          VF-8A Series — Triple Offset Butterfly Valves
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          High performance triple offset butterfly valves across ANSI 150LB, 300LB and 600LB pressure classes. API 609, API 607 fire safe, SIL 3 capable.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${DATA.length} SERIES`}
        </Typography>
        <Box sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
          <TableContainer>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...headerSx, width: 40 }} />
                  <TableCell sx={headerSx}>Series</TableCell>
                  <TableCell sx={headerSx}>Pressure Class</TableCell>
                  <TableCell sx={headerSx}>Size Range</TableCell>
                  <TableCell sx={headerSx}>End Connections</TableCell>
                  <TableCell sx={headerSx}>Quote</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {DATA.map(row => <TOBVRow key={row.id} row={row} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  )
}