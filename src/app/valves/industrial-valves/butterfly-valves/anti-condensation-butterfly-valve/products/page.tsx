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
const IMAGE = 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/dpi-anti-condensation.jpg';

interface VF9ASeriesDTO {
  id: string;
  model: string;
  pressureClass: string;
  connectionType: string;
  seatType: string;
  sizeRange: string;
  tempRange: string;
  flangeStandard: string;
  certifications: string[];
  features: string[];
}

const DATA: VF9ASeriesDTO[] = [
  // ── 150LB WAFER ──────────────────────────────────────────────────────────
  {
    id: 'vf-910a',
    model: 'VF-910A',
    pressureClass: 'ANSI 150LB',
    connectionType: 'Wafer',
    seatType: 'Soft Seat (PTFE / RTFE / TFM)',
    sizeRange: 'DN50–DN1200 (2"–48")',
    tempRange: '-100°C to +260°C',
    flangeStandard: 'ANSI 150LB · ISO PN10–PN25 · JIS 10K 16K 20K',
    certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'ABS', 'LR', 'CR'],
    features: [
      'Soft seat (PTFE/RTFE/TFM) — bubble tight shutoff, rated to 260°C.',
      'Wafer (對夾式) end connection, face to face per API 609 / ISO 5752.',
      'Anti-condensation jacket option (code J) available.',
      'Fugitive emission compliant: ANSI/ISA-SP-93, TA-Luft, ISO 15848-1.',
    ],
  },
  {
    id: 'vf-920a',
    model: 'VF-920A',
    pressureClass: 'ANSI 150LB',
    connectionType: 'Wafer',
    seatType: 'Fire Safe — Metal Seat + PTFE',
    sizeRange: 'DN50–DN1200 (2"–48")',
    tempRange: '-100°C to +260°C',
    flangeStandard: 'ANSI 150LB · ISO PN10–PN25 · JIS 10K 16K 20K',
    certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'API 607', 'ABS', 'LR'],
    features: [
      'Fire safe metal seat + PTFE — API 607 & ISO 10497 fire tested.',
      'Maintains positive shutoff after fire event in oil, gas and petrochemical service.',
      'Wafer (對夾式) end connection, face to face per API 609 / ISO 5752.',
      'Anti-condensation jacket option (code J) available.',
    ],
  },
  {
    id: 'vf-930a',
    model: 'VF-930A',
    pressureClass: 'ANSI 150LB',
    connectionType: 'Wafer',
    seatType: 'Full Metal Seat (INCONEL 718 / SS316)',
    sizeRange: 'DN50–DN1200 (2"–48")',
    tempRange: '-100°C to +500°C',
    flangeStandard: 'ANSI 150LB · ISO PN10–PN25 · JIS 10K 16K 20K',
    certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'API 607', 'ABS'],
    features: [
      'Full metal seat (INCONEL 718) — leakage class ANSI FCI 70-2 Class IV/V.',
      'High temperature service to +500°C (+932°F) and cryogenic to -100°C (-148°F).',
      'Wafer (對夾式) end connection, face to face per API 609 / ISO 5752.',
      'Anti-condensation jacket and cryogenic special requirement options available.',
    ],
  },
  // ── 150LB LUGGED ─────────────────────────────────────────────────────────
  {
    id: 'vf-913a',
    model: 'VF-913A',
    pressureClass: 'ANSI 150LB',
    connectionType: 'Lugged',
    seatType: 'Soft Seat (PTFE / RTFE / TFM)',
    sizeRange: 'DN50–DN1200 (2"–48")',
    tempRange: '-100°C to +260°C',
    flangeStandard: 'ANSI 150LB · ISO PN10–PN25 · JIS 10K 16K 20K',
    certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'ABS', 'LR', 'CR'],
    features: [
      'Soft seat (PTFE/RTFE/TFM) — bubble tight shutoff, rated to 260°C.',
      'Lugged (多耳式) end connection — suitable for dead-end service.',
      'Anti-condensation jacket option (code J) available.',
      'Fugitive emission compliant: ANSI/ISA-SP-93, TA-Luft, ISO 15848-1.',
    ],
  },
  {
    id: 'vf-923a',
    model: 'VF-923A',
    pressureClass: 'ANSI 150LB',
    connectionType: 'Lugged',
    seatType: 'Fire Safe — Metal Seat + PTFE',
    sizeRange: 'DN50–DN1200 (2"–48")',
    tempRange: '-100°C to +260°C',
    flangeStandard: 'ANSI 150LB · ISO PN10–PN25 · JIS 10K 16K 20K',
    certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'API 607', 'ABS', 'LR'],
    features: [
      'Fire safe metal seat + PTFE — API 607 & ISO 10497 fire tested.',
      'Lugged (多耳式) end connection — suitable for dead-end service.',
      'Anti-condensation jacket option (code J) available.',
      'Maintains positive shutoff after fire event in high-temperature service.',
    ],
  },
  {
    id: 'vf-933a',
    model: 'VF-933A',
    pressureClass: 'ANSI 150LB',
    connectionType: 'Lugged',
    seatType: 'Full Metal Seat (INCONEL 718 / SS316)',
    sizeRange: 'DN50–DN1200 (2"–48")',
    tempRange: '-100°C to +500°C',
    flangeStandard: 'ANSI 150LB · ISO PN10–PN25 · JIS 10K 16K 20K',
    certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'API 607'],
    features: [
      'Full metal seat (INCONEL 718) — leakage class ANSI FCI 70-2 Class IV/V.',
      'High temperature to +500°C and cryogenic to -100°C.',
      'Lugged (多耳式) end connection — suitable for dead-end service.',
      'Anti-condensation jacket and cryogenic options available.',
    ],
  },
  // ── 150LB FLANGED ────────────────────────────────────────────────────────
  {
    id: 'vf-916a',
    model: 'VF-916A',
    pressureClass: 'ANSI 150LB',
    connectionType: 'Flanged',
    seatType: 'Soft Seat (PTFE / RTFE / TFM)',
    sizeRange: 'DN50–DN1200 (2"–48")',
    tempRange: '-100°C to +260°C',
    flangeStandard: 'ANSI 150LB · ISO PN10–PN25 · JIS 10K 16K 20K',
    certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'ABS', 'LR', 'CR'],
    features: [
      'Soft seat (PTFE/RTFE/TFM) — bubble tight shutoff, rated to 260°C.',
      'Flanged (法蘭式) single shaft end connection per ASME B16.5 / B16.47.',
      'Anti-condensation jacket option (code J) available.',
      'Fugitive emission compliant: ANSI/ISA-SP-93, TA-Luft, ISO 15848-1.',
    ],
  },
  {
    id: 'vf-917a',
    model: 'VF-917A',
    pressureClass: 'ANSI 150LB',
    connectionType: 'Flanged',
    seatType: 'Soft Seat (PTFE / RTFE / TFM)',
    sizeRange: 'DN50–DN1200 (2"–48")',
    tempRange: '-100°C to +260°C',
    flangeStandard: 'ANSI 150LB · ISO PN10–PN25 · JIS 10K 16K 20K',
    certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'ABS', 'LR', 'CR'],
    features: [
      'Soft seat (PTFE/RTFE/TFM) — bubble tight shutoff, rated to 260°C.',
      'Flanged (法蘭式) double shaft end connection per ASME B16.5 / B16.47.',
      'Anti-condensation jacket option (code J) available.',
      'Fugitive emission compliant: ANSI/ISA-SP-93, TA-Luft, ISO 15848-1.',
    ],
  },
  {
    id: 'vf-926a',
    model: 'VF-926A',
    pressureClass: 'ANSI 150LB',
    connectionType: 'Flanged',
    seatType: 'Fire Safe — Metal Seat + PTFE',
    sizeRange: 'DN50–DN1200 (2"–48")',
    tempRange: '-100°C to +260°C',
    flangeStandard: 'ANSI 150LB · ISO PN10–PN25 · JIS 10K 16K 20K',
    certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'API 607', 'ABS', 'LR'],
    features: [
      'Fire safe metal seat + PTFE — API 607 & ISO 10497 fire tested.',
      'Flanged (法蘭式) single shaft end connection per ASME B16.5 / B16.47.',
      'Anti-condensation jacket option (code J) available.',
      'Maintains positive shutoff after fire event.',
    ],
  },
  {
    id: 'vf-927a',
    model: 'VF-927A',
    pressureClass: 'ANSI 150LB',
    connectionType: 'Flanged',
    seatType: 'Fire Safe — Metal Seat + PTFE',
    sizeRange: 'DN50–DN1200 (2"–48")',
    tempRange: '-100°C to +260°C',
    flangeStandard: 'ANSI 150LB · ISO PN10–PN25 · JIS 10K 16K 20K',
    certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'API 607', 'ABS', 'LR'],
    features: [
      'Fire safe metal seat + PTFE — API 607 & ISO 10497 fire tested.',
      'Flanged (法蘭式) double shaft end connection per ASME B16.5 / B16.47.',
      'Anti-condensation jacket option (code J) available.',
      'Maintains positive shutoff after fire event.',
    ],
  },
  {
    id: 'vf-936a',
    model: 'VF-936A',
    pressureClass: 'ANSI 150LB',
    connectionType: 'Flanged',
    seatType: 'Full Metal Seat (INCONEL 718 / SS316)',
    sizeRange: 'DN50–DN1200 (2"–48")',
    tempRange: '-100°C to +500°C',
    flangeStandard: 'ANSI 150LB · ISO PN10–PN25 · JIS 10K 16K 20K',
    certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'API 607'],
    features: [
      'Full metal seat (INCONEL 718) — leakage class ANSI FCI 70-2 Class IV/V.',
      'High temperature to +500°C and cryogenic to -100°C.',
      'Flanged (法蘭式) single shaft end connection per ASME B16.5 / B16.47.',
      'Anti-condensation jacket and cryogenic options available.',
    ],
  },
  {
    id: 'vf-937a',
    model: 'VF-937A',
    pressureClass: 'ANSI 150LB',
    connectionType: 'Flanged',
    seatType: 'Full Metal Seat (INCONEL 718 / SS316)',
    sizeRange: 'DN50–DN1200 (2"–48")',
    tempRange: '-100°C to +500°C',
    flangeStandard: 'ANSI 150LB · ISO PN10–PN25 · JIS 10K 16K 20K',
    certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'API 607'],
    features: [
      'Full metal seat (INCONEL 718) — leakage class ANSI FCI 70-2 Class IV/V.',
      'High temperature to +500°C and cryogenic to -100°C.',
      'Flanged (法蘭式) double shaft end connection per ASME B16.5 / B16.47.',
      'Anti-condensation jacket and cryogenic options available.',
    ],
  },
  // ── 300LB WAFER ──────────────────────────────────────────────────────────
//   {
//     id: 'vf-940a',
//     model: 'VF-940A',
//     pressureClass: 'ANSI 300LB',
//     connectionType: 'Wafer',
//     seatType: 'Soft Seat (PTFE / RTFE / TFM)',
//     sizeRange: 'DN50–DN600 (2"–24")',
//     tempRange: '-100°C to +260°C',
//     flangeStandard: 'ANSI 300LB · ISO PN40–PN50 · JIS 30K 40K',
//     certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'ABS', 'LR'],
//     features: [
//       'Soft seat (PTFE/RTFE/TFM) — bubble tight shutoff at 300LB rated pressure.',
//       'Special anti-blowout shaft design per 300LB corrosion protection requirements.',
//       'Wafer (對夾式) end connection, face to face per API 609 / ISO 5752.',
//       'Anti-condensation jacket option (code J) available.',
//     ],
//   },
//   {
//     id: 'vf-950a',
//     model: 'VF-950A',
//     pressureClass: 'ANSI 300LB',
//     connectionType: 'Wafer',
//     seatType: 'Fire Safe — Metal Seat + PTFE',
//     sizeRange: 'DN50–DN600 (2"–24")',
//     tempRange: '-100°C to +260°C',
//     flangeStandard: 'ANSI 300LB · ISO PN40–PN50 · JIS 30K 40K',
//     certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'API 607', 'ABS', 'LR'],
//     features: [
//       'Fire safe metal seat + PTFE — API 607 & ISO 10497 fire tested.',
//       '300LB anti-blowout shaft with corrosion protection design.',
//       'Wafer (對夾式) end connection, face to face per API 609 / ISO 5752.',
//       'Anti-condensation jacket option (code J) available.',
//     ],
//   },
//   {
//     id: 'vf-960a',
//     model: 'VF-960A',
//     pressureClass: 'ANSI 300LB',
//     connectionType: 'Wafer',
//     seatType: 'Full Metal Seat (INCONEL 718 / SS316)',
//     sizeRange: 'DN50–DN600 (2"–24")',
//     tempRange: '-100°C to +500°C',
//     flangeStandard: 'ANSI 300LB · ISO PN40–PN50 · JIS 30K 40K',
//     certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'API 607'],
//     features: [
//       'Full metal seat (INCONEL 718) — leakage class ANSI FCI 70-2 Class IV/V.',
//       'High temperature to +500°C and cryogenic to -100°C.',
//       'Wafer (對夾式) end connection, face to face per API 609 / ISO 5752.',
//       'Anti-condensation jacket and cryogenic options available.',
//     ],
//   },
//   // ── 300LB LUGGED ─────────────────────────────────────────────────────────
//   {
//     id: 'vf-943a',
//     model: 'VF-943A',
//     pressureClass: 'ANSI 300LB',
//     connectionType: 'Lugged',
//     seatType: 'Soft Seat (PTFE / RTFE / TFM)',
//     sizeRange: 'DN50–DN600 (2"–24")',
//     tempRange: '-100°C to +260°C',
//     flangeStandard: 'ANSI 300LB · ISO PN40–PN50 · JIS 30K 40K',
//     certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'ABS', 'LR'],
//     features: [
//       'Soft seat (PTFE/RTFE/TFM) — bubble tight shutoff at 300LB rated pressure.',
//       'Lugged (多耳式) end connection — suitable for dead-end service.',
//       'Anti-condensation jacket option (code J) available.',
//       '300LB anti-blowout shaft with corrosion protection design.',
//     ],
//   },
//   {
//     id: 'vf-953a',
//     model: 'VF-953A',
//     pressureClass: 'ANSI 300LB',
//     connectionType: 'Lugged',
//     seatType: 'Fire Safe — Metal Seat + PTFE',
//     sizeRange: 'DN50–DN600 (2"–24")',
//     tempRange: '-100°C to +260°C',
//     flangeStandard: 'ANSI 300LB · ISO PN40–PN50 · JIS 30K 40K',
//     certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'API 607', 'ABS', 'LR'],
//     features: [
//       'Fire safe metal seat + PTFE — API 607 & ISO 10497 fire tested.',
//       'Lugged (多耳式) end connection — suitable for dead-end service.',
//       'Anti-condensation jacket option (code J) available.',
//       '300LB anti-blowout shaft with corrosion protection design.',
//     ],
//   },
//   {
//     id: 'vf-963a',
//     model: 'VF-963A',
//     pressureClass: 'ANSI 300LB',
//     connectionType: 'Lugged',
//     seatType: 'Full Metal Seat (INCONEL 718 / SS316)',
//     sizeRange: 'DN50–DN600 (2"–24")',
//     tempRange: '-100°C to +500°C',
//     flangeStandard: 'ANSI 300LB · ISO PN40–PN50 · JIS 30K 40K',
//     certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'API 607'],
//     features: [
//       'Full metal seat (INCONEL 718) — leakage class ANSI FCI 70-2 Class IV/V.',
//       'High temperature to +500°C and cryogenic to -100°C.',
//       'Lugged (多耳式) end connection — suitable for dead-end service.',
//       'Anti-condensation jacket and cryogenic options available.',
//     ],
//   },
  // ── 300LB FLANGED ────────────────────────────────────────────────────────
//   {
//     id: 'vf-946a',
//     model: 'VF-946A',
//     pressureClass: 'ANSI 300LB',
//     connectionType: 'Flanged',
//     seatType: 'Soft Seat (PTFE / RTFE / TFM)',
//     sizeRange: 'DN50–DN600 (2"–24")',
//     tempRange: '-100°C to +260°C',
//     flangeStandard: 'ANSI 300LB · ISO PN40–PN50 · JIS 30K 40K',
//     certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'ABS', 'LR'],
//     features: [
//       'Soft seat (PTFE/RTFE/TFM) — bubble tight shutoff at 300LB rated pressure.',
//       'Flanged (法蘭式) single shaft end connection per ASME B16.5 / B16.47.',
//       'Anti-condensation jacket option (code J) available.',
//       '300LB anti-blowout shaft with corrosion protection design.',
//     ],
//   },
//   {
//     id: 'vf-947a',
//     model: 'VF-947A',
//     pressureClass: 'ANSI 300LB',
//     connectionType: 'Flanged',
//     seatType: 'Soft Seat (PTFE / RTFE / TFM)',
//     sizeRange: 'DN50–DN600 (2"–24")',
//     tempRange: '-100°C to +260°C',
//     flangeStandard: 'ANSI 300LB · ISO PN40–PN50 · JIS 30K 40K',
//     certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'ABS', 'LR'],
//     features: [
//       'Soft seat (PTFE/RTFE/TFM) — bubble tight shutoff at 300LB rated pressure.',
//       'Flanged (法蘭式) double shaft end connection per ASME B16.5 / B16.47.',
//       'Anti-condensation jacket option (code J) available.',
//       '300LB anti-blowout shaft with corrosion protection design.',
//     ],
//   },
//   {
//     id: 'vf-956a',
//     model: 'VF-956A',
//     pressureClass: 'ANSI 300LB',
//     connectionType: 'Flanged',
//     seatType: 'Fire Safe — Metal Seat + PTFE',
//     sizeRange: 'DN50–DN600 (2"–24")',
//     tempRange: '-100°C to +260°C',
//     flangeStandard: 'ANSI 300LB · ISO PN40–PN50 · JIS 30K 40K',
//     certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'API 607', 'ABS', 'LR'],
//     features: [
//       'Fire safe metal seat + PTFE — API 607 & ISO 10497 fire tested.',
//       'Flanged (法蘭式) single shaft end connection per ASME B16.5 / B16.47.',
//       'Anti-condensation jacket option (code J) available.',
//       '300LB anti-blowout shaft with corrosion protection design.',
//     ],
//   },
//   {
//     id: 'vf-957a',
//     model: 'VF-957A',
//     pressureClass: 'ANSI 300LB',
//     connectionType: 'Flanged',
//     seatType: 'Fire Safe — Metal Seat + PTFE',
//     sizeRange: 'DN50–DN600 (2"–24")',
//     tempRange: '-100°C to +260°C',
//     flangeStandard: 'ANSI 300LB · ISO PN40–PN50 · JIS 30K 40K',
//     certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'API 607', 'ABS', 'LR'],
//     features: [
//       'Fire safe metal seat + PTFE — API 607 & ISO 10497 fire tested.',
//       'Flanged (法蘭式) double shaft end connection per ASME B16.5 / B16.47.',
//       'Anti-condensation jacket option (code J) available.',
//       '300LB anti-blowout shaft with corrosion protection design.',
//     ],
//   },
//   {
//     id: 'vf-966a',
//     model: 'VF-966A',
//     pressureClass: 'ANSI 300LB',
//     connectionType: 'Flanged',
//     seatType: 'Full Metal Seat (INCONEL 718 / SS316)',
//     sizeRange: 'DN50–DN600 (2"–24")',
//     tempRange: '-100°C to +500°C',
//     flangeStandard: 'ANSI 300LB · ISO PN40–PN50 · JIS 30K 40K',
//     certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'API 607'],
//     features: [
//       'Full metal seat (INCONEL 718) — leakage class ANSI FCI 70-2 Class IV/V.',
//       'High temperature to +500°C and cryogenic to -100°C.',
//       'Flanged (法蘭式) single shaft end connection per ASME B16.5 / B16.47.',
//       'Anti-condensation jacket and cryogenic options available.',
//     ],
//   },
//   {
//     id: 'vf-967a',
//     model: 'VF-967A',
//     pressureClass: 'ANSI 300LB',
//     connectionType: 'Flanged',
//     seatType: 'Full Metal Seat (INCONEL 718 / SS316)',
//     sizeRange: 'DN50–DN600 (2"–24")',
//     tempRange: '-100°C to +500°C',
//     flangeStandard: 'ANSI 300LB · ISO PN40–PN50 · JIS 30K 40K',
//     certifications: ['TUV PED(H)', 'ATEX', 'SIL2', 'API 607'],
//     features: [
//       'Full metal seat (INCONEL 718) — leakage class ANSI FCI 70-2 Class IV/V.',
//       'High temperature to +500°C and cryogenic to -100°C.',
//       'Flanged (法蘭式) double shaft end connection per ASME B16.5 / B16.47.',
//       'Anti-condensation jacket and cryogenic options available.',
//     ],
//   },
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

function VF9ARow({ row }: { row: VF9ASeriesDTO }) {
  const [open, setOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<ProductForRFQ | null>(null);

  const openQuote = () => setQuoteProduct({
    id: row.id,
    name: `Value Valves ${row.model} Anti-Condensation Double Eccentric Butterfly Valve`,
    brand: 'Value Valves',
    category: 'Butterfly Valves',
    categoryId: 'butterfly-valves',
    subCategory: 'Anti-Condensation',
    thumbnail: IMAGE,
    description: row.features.join(' '),
    keySpecs: [
      { label: 'Model',           value: row.model },
      { label: 'Pressure Class',  value: row.pressureClass },
      { label: 'Connection',      value: row.connectionType },
      { label: 'Seat Type',       value: row.seatType },
      { label: 'Size Range',      value: row.sizeRange },
      { label: 'Temp Range',      value: row.tempRange },
    ],
    variantInfo: { count: 1, sizeRange: row.sizeRange },
  });

  const seatColor = row.seatType.startsWith('Full Metal')
    ? { borderColor: '#e57c00', color: '#e57c00' }
    : row.seatType.startsWith('Fire Safe')
    ? { borderColor: '#c62828', color: '#c62828' }
    : { borderColor: BRAND_GREEN, color: BRAND_GREEN };

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
          <Chip label={row.pressureClass} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.connectionType} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: alpha(BRAND_GREEN, 0.5), color: 'text.secondary' }} />
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.seatType.split(' (')[0]} size="small" variant="outlined"
            sx={{ fontSize: '0.65rem', fontWeight: 700, ...seatColor }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.sizeRange}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.tempRange}</TableCell>
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
                      <Spec label="Pressure Class"  value={row.pressureClass} />
                      <Spec label="Connection"      value={row.connectionType} />
                      <Spec label="Seat Type"       value={row.seatType} />
                      <Spec label="Size Range"      value={row.sizeRange} />
                      <Spec label="Temp Range"      value={row.tempRange} />
                      <Spec label="Flange Standard" value={row.flangeStandard} />
                    </Stack>
                    <Typography variant="caption" fontWeight={900}
                      sx={{ letterSpacing: 1, display: 'block', mb: 1, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
                      CERTIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
                      {row.certifications.map((c) => (
                        <Chip key={c} label={c} size="small" variant="outlined"
                          sx={{ fontSize: '0.65rem', fontWeight: 700,
                            borderColor: alpha(BRAND_GREEN, 0.4), color: 'text.secondary' }} />
                      ))}
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

export default function AntiCondensationProductsPage() {
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
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>
          VF-9A — Anti-Condensation Double Eccentric Butterfly Valves
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900, fontFamily: PRIMARY_FONT }}>
          High-performance double eccentric butterfly valves with anti-condensation jacket option. ANSI 150LB & 300LB, DN50–DN1200. Wafer, lugged and flanged. Soft seat, fire safe and full metal seat. SIL2, TUV PED(H) and ATEX certified.
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled"
          sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {DATA.length} MODELS
        </Typography>
        <Box sx={{ border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px',
          overflow: 'hidden', bgcolor: 'background.paper' }}>
          <TableContainer>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ ...headerSx, width: 40 }} />
                  <TableCell sx={headerSx}>Model</TableCell>
                  <TableCell sx={headerSx}>Pressure Class</TableCell>
                  <TableCell sx={headerSx}>Connection</TableCell>
                  <TableCell sx={headerSx}>Seat Type</TableCell>
                  <TableCell sx={headerSx}>Size Range</TableCell>
                  <TableCell sx={headerSx}>Temp Range</TableCell>
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
  );
}