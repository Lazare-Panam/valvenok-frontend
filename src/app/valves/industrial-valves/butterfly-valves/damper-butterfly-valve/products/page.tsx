'use client';

import { useState } from 'react';
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Collapse, Chip, Typography, Stack, IconButton, Button,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RFQModal from '@/src/app/Common/RFQCard/RFQModal';
import { type ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard';

const BRAND_GREEN = '#61D649';
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';
const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/damper-valve.jpg';

interface VF3DTO {
  id: string;
  model: string;
  valveType: string;
  connectionType: string;
  seatType: string;
  leakage: string;
  sizeRange: string;
  tempRange: string;
  features: string[];
}

const DATA: VF3DTO[] = [
  // ── CENTRIC METAL SEAT 3% ─────────────────────────────────────────────
//   {
//     id: 'vf-350',
//     model: 'VF-350',
//     valveType: 'Centric',
//     connectionType: 'Wafer',
//     seatType: 'Stepping Metal Seat',
//     leakage: '3% Max',
//     sizeRange: '2"–24"',
//     tempRange: '-46°C to +1093°C',
//     features: [
//       'Centric design — wafer end connection, face to face per ISO 5752.',
//       'Stepping metal seat — max 3% leakage, any temperature range, clean service.',
//       'Thin profile disc for maximum Cv in open position.',
//       'Self-lubricating fully adjustable shaft packing.',
//     ],
//   },
//   {
//     id: 'vf-356',
//     model: 'VF-356',
//     valveType: 'Centric',
//     connectionType: 'Short Body Flange',
//     seatType: 'Stepping Metal Seat',
//     leakage: '3% Max',
//     sizeRange: '14"–96"',
//     tempRange: '-46°C to +1093°C',
//     features: [
//       'Centric design — short body flange end connection, custom flange drilling available.',
//       'Stepping metal seat — max 3% leakage, any temperature range, clean service.',
//       'Large bore up to 96\" for industrial duct and chimney damper applications.',
//       'Self-lubricating fully adjustable shaft packing.',
//     ],
//   },
//   {
//     id: 'vf-357',
//     model: 'VF-357',
//     valveType: 'Centric',
//     connectionType: 'Long Body Flange',
//     seatType: 'Stepping Metal Seat',
//     leakage: '3% Max',
//     sizeRange: '14"–96"',
//     tempRange: '-46°C to +1093°C',
//     features: [
//       'Centric design — long body flange end connection, custom flange drilling available.',
//       'Stepping metal seat — max 3% leakage, any temperature range, clean service.',
//       'Large bore up to 96\" for industrial duct and chimney damper applications.',
//       'Self-lubricating fully adjustable shaft packing.',
//     ],
//   },
//   // ── CENTRIC METAL SEAT 1% ─────────────────────────────────────────────
//   {
//     id: 'vf-360',
//     model: 'VF-360',
//     valveType: 'Centric',
//     connectionType: 'Wafer',
//     seatType: 'Angle Metal Seat',
//     leakage: '1% Max',
//     sizeRange: '2"–24"',
//     tempRange: '-46°C to +1093°C',
//     features: [
//       'Centric design — wafer end connection, face to face per ISO 5752.',
//       'Angle metal seat — max 1% leakage, clean service to 1093°C.',
//       'Thin profile disc for maximum Cv in open position.',
//       'Self-lubricating fully adjustable shaft packing.',
//     ],
//   },
//   {
//     id: 'vf-366',
//     model: 'VF-366',
//     valveType: 'Centric',
//     connectionType: 'Short Body Flange',
//     seatType: 'Angle Metal Seat',
//     leakage: '1% Max',
//     sizeRange: '14"–96"',
//     tempRange: '-46°C to +1093°C',
//     features: [
//       'Centric design — short body flange, custom flange drilling available.',
//       'Angle metal seat — max 1% leakage, clean service to 1093°C.',
//       'Large bore up to 96\" for industrial duct and chimney damper applications.',
//       'Self-lubricating fully adjustable shaft packing.',
//     ],
//   },
//   {
//     id: 'vf-367',
//     model: 'VF-367',
//     valveType: 'Centric',
//     connectionType: 'Long Body Flange',
//     seatType: 'Angle Metal Seat',
//     leakage: '1% Max',
//     sizeRange: '14"–96"',
//     tempRange: '-46°C to +1093°C',
//     features: [
//       'Centric design — long body flange, custom flange drilling available.',
//       'Angle metal seat — max 1% leakage, clean service to 1093°C.',
//       'Large bore up to 96\" for industrial duct and chimney damper applications.',
//       'Self-lubricating fully adjustable shaft packing.',
//     ],
//   },
//   // ── DOUBLE ECCENTRIC RUBBER ───────────────────────────────────────────
//   {
//     id: 'vf-376',
//     model: 'VF-376',
//     valveType: 'Double Eccentric',
//     connectionType: 'Short Body Flange',
//     seatType: 'Rubber Seat',
//     leakage: 'Bubble Tight',
//     sizeRange: '14"–96"',
//     tempRange: '-20°C to +120°C',
//     features: [
//       'Double eccentric design — short body flange, custom flange drilling available.',
//       'Rubber seat — bubble tight shutoff, clean service to 120°C.',
//       'HVAC and water treatment damper applications.',
//       'ISO 5211 actuator mounting, extended neck option available.',
//     ],
//   },
//   {
//     id: 'vf-377',
//     model: 'VF-377',
//     valveType: 'Double Eccentric',
//     connectionType: 'Long Body Flange',
//     seatType: 'Rubber Seat',
//     leakage: 'Bubble Tight',
//     sizeRange: '14"–96"',
//     tempRange: '-20°C to +120°C',
//     features: [
//       'Double eccentric design — long body flange, custom flange drilling available.',
//       'Rubber seat — bubble tight shutoff, clean service to 120°C.',
//       'HVAC and water treatment damper applications.',
//       'ISO 5211 actuator mounting, extended neck option available.',
//     ],
//   },
//   // ── DOUBLE ECCENTRIC PTFE ─────────────────────────────────────────────
//   {
//     id: 'vf-386',
//     model: 'VF-386',
//     valveType: 'Double Eccentric',
//     connectionType: 'Short Body Flange',
//     seatType: 'PTFE Seat',
//     leakage: 'Bubble Tight',
//     sizeRange: '14"–48"',
//     tempRange: '-29°C to +210°C',
//     features: [
//       'Double eccentric design — short body flange, custom flange drilling available.',
//       'PTFE seat — bubble tight shutoff, clean service to 210°C.',
//       'Chemical gas and corrosive atmosphere damper applications.',
//       'ISO 5211 actuator mounting, extended neck option available.',
//     ],
//   },
  {
    id: 'vf-387',
    model: 'VF-387',
    valveType: 'Double Eccentric',
    connectionType: 'Long Body Flange',
    seatType: 'PTFE Seat',
    leakage: 'Bubble Tight',
    sizeRange: '14"–48"',
    tempRange: '-29°C to +210°C',
    features: [
      'Double eccentric design — long body flange, custom flange drilling available.',
      'PTFE seat — bubble tight shutoff, clean service to 210°C.',
      'Chemical gas and corrosive atmosphere damper applications.',
      'ISO 5211 actuator mounting, extended neck option available.',
    ],
  },
  // ── TRIPLE ECCENTRIC METAL CLASS IV ──────────────────────────────────
  {
    id: 'vf-396',
    model: 'VF-396',
    valveType: 'Triple Eccentric',
    connectionType: 'Short Body Flange',
    seatType: 'Metal Seat — Class IV',
    leakage: 'Class IV',
    sizeRange: '14"–96"',
    tempRange: '-46°C to +1093°C',
    features: [
      'Triple eccentric design — short body flange, custom flange drilling available.',
      'Metal seat — ANSI FCI leakage Class IV, clean service to 1093°C.',
      'Tightest available shutoff in large bore damper for critical isolation.',
      'ISO 5211 actuator mounting, extended neck option available.',
    ],
  },
  {
    id: 'vf-397',
    model: 'VF-397',
    valveType: 'Triple Eccentric',
    connectionType: 'Long Body Flange',
    seatType: 'Metal Seat — Class IV',
    leakage: 'Class IV',
    sizeRange: '14"–96"',
    tempRange: '-46°C to +1093°C',
    features: [
      'Triple eccentric design — long body flange, custom flange drilling available.',
      'Metal seat — ANSI FCI leakage Class IV, clean service to 1093°C.',
      'Tightest available shutoff in large bore damper for critical isolation.',
      'ISO 5211 actuator mounting, extended neck option available.',
    ],
  },
];

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700}
        sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
    </Box>
  );
}

function VF3Row({ row }: { row: VF3DTO }) {
  const [open, setOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null);

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: `Value Valves ${row.model} Damper Butterfly Valve`,
    brand: 'Value Valves',
    category: 'Butterfly Valves',
    categoryId: 'butterfly-valves',
    subCategory: 'Damper',
    thumbnail: IMAGE,
    description: row.features.join(' '),
    keySpecs: [
      { label: 'Model',       value: row.model },
      { label: 'Type',        value: row.valveType },
      { label: 'Connection',  value: row.connectionType },
      { label: 'Seat',        value: row.seatType },
      { label: 'Size Range',  value: row.sizeRange },
      { label: 'Temp Range',  value: row.tempRange },
    ],
    variantInfo: { count: 1, sizeRange: row.sizeRange },
  });

  const typeColor =
    row.valveType === 'Triple Eccentric'
      ? { borderColor: '#e57c00', color: '#e57c00' }
      : row.valveType === 'Double Eccentric'
      ? { borderColor: '#1565c0', color: '#1565c0' }
      : { borderColor: BRAND_GREEN, color: BRAND_GREEN };

  const leakageColor =
    row.leakage === 'Class IV'
      ? { borderColor: '#e57c00', color: '#e57c00' }
      : row.leakage === 'Bubble Tight'
      ? { borderColor: BRAND_GREEN, color: BRAND_GREEN }
      : { borderColor: alpha('#000', 0.4), color: 'text.secondary' };

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)}
        sx={{ cursor: 'pointer', bgcolor: open ? alpha(BRAND_GREEN, 0.04) : 'inherit',
          '&:hover': { bgcolor: `${alpha(BRAND_GREEN, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o); }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT, fontWeight: 700 }}>{row.model}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.valveType} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, ...typeColor }} />
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.connectionType} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: alpha(BRAND_GREEN, 0.5), color: 'text.secondary' }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.seatType}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.leakage} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, ...leakageColor }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.sizeRange}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={e => { e.stopPropagation(); openQuote(); }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px',
              textTransform: 'none', whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff',
              boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={8} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_GREEN, 0.02), borderLeft: `4px solid ${BRAND_GREEN}`,
                borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={IMAGE} alt={row.model}
                      sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Type"        value={row.valveType} />
                      <Spec label="Connection"  value={row.connectionType} />
                      <Spec label="Seat"        value={row.seatType} />
                      <Spec label="Leakage"     value={row.leakage} />
                      <Spec label="Size Range"  value={row.sizeRange} />
                      <Spec label="Temp Range"  value={row.tempRange} />
                    </Stack>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      KEY FEATURES
                    </Typography>
                    <Box component="ul" sx={{ m: 0, pl: 2, mb: 3 }}>
                      {row.features.map((f, i) => (
                        <Box component="li" key={i} sx={{ mb: 1 }}>
                          <Typography variant="body2" color="text.secondary"
                            sx={{ fontFamily: PRIMARY_FONT, lineHeight: 1.6 }}>{f}</Typography>
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
  );
}

const headerSx = {
  bgcolor: alpha(BRAND_GREEN, 0.04),
  borderBottom: `2px solid ${BRAND_GREEN}`,
  fontWeight: 700, fontSize: '0.72rem',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  fontFamily: PRIMARY_FONT,
};

export default function DamperProductsPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Box sx={{ mb: 2 }}>
          <Box component="img"
            src="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg"
            alt="Value Valves"
            sx={{ height: 28, objectFit: 'contain' }}
          />
        </Box>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          VF-3 — Butterfly Damper Valves
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900, fontFamily: PRIMARY_FONT }}>
          Centric, double eccentric and triple eccentric damper valves. Metal, rubber and PTFE seat. 2\"–96\", -46°C to +1093°C. Wafer, short body flange and long body flange. HVAC, water treatment, flue gas and industrial gas applications.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          11 MODELS
        </Typography>
        <Box sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px',
          overflow: 'hidden', bgcolor: 'background.paper' }}>
          <TableContainer>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...headerSx, width: 40 }} />
                  <TableCell sx={headerSx}>Model</TableCell>
                  <TableCell sx={headerSx}>Type</TableCell>
                  <TableCell sx={headerSx}>Connection</TableCell>
                  <TableCell sx={headerSx}>Seat</TableCell>
                  <TableCell sx={headerSx}>Leakage</TableCell>
                  <TableCell sx={headerSx}>Size Range</TableCell>
                  <TableCell sx={headerSx}>Quote</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {DATA.map(row => <VF3Row key={row.id} row={row} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}