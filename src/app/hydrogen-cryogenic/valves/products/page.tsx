'use client'
import { useState, useMemo, useEffect } from 'react'
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, Collapse, Chip, Typography, Stack, IconButton, Button,
  Accordion, AccordionSummary, AccordionDetails, FormGroup, FormControlLabel,
  Checkbox, Drawer, useMediaQuery,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FilterListIcon from '@mui/icons-material/FilterList'
import RFQModal from '@/src/app/Common/RFQCard/RFQModal'
import { ProductForRFQ } from '@/src/app/Common/RFQCard/RequestForQuoteCard'
import { GroupSiteLinks, groupSitesIn } from '@/src/app/Common/GroupVisitLinks'

const HIFLUX_LOGO = 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/logo.png'
const ACCENT = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const PRESSURE_RANGES = [
  { label: 'All Pressures', min: 0, max: Infinity },
  { label: 'Low (up to ~15,000 psi)', min: 0, max: 17000 },
  { label: 'Medium (~20,000 psi)', min: 17000, max: 25000 },
  { label: 'High (~60,000 psi)', min: 25000, max: 70000 },
  { label: 'Ultra High (100,000+ psi)', min: 70000, max: Infinity },
]

const VALVE_TYPES = ['Check Valve', 'Needle Valve', 'Ball Valve', 'Air Operated Valve', 'Safety Valve', 'Special Valve']

interface HifluxProduct {
  id: string
  name: string
  type: string
  pressurePsi: number
  pressureLabel: string
  description: string
  image: string
  connectionType: string
}

const PRODUCTS: HifluxProduct[] = [
  { id: 'chk-npt-15k', name: 'High Pressure Check Valve - NPT Female', type: 'Check Valve', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'NPT Female', description: 'NPT female threaded high pressure check valve for general industrial use.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/check-valve.png' },
  { id: 'chk-ultra-100k', name: 'High Pressure Check Valve - Ultra High Pressure', type: 'Check Valve', pressurePsi: 100000, pressureLabel: '~100,000 psi', connectionType: 'UNF', description: 'Ultra high pressure check valve rated to 100,000 psi for extreme applications.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/check-valve.png' },
  { id: 'chk-high-60k', name: 'High Pressure Check Valve - High Pressure (60,000 psi)', type: 'Check Valve', pressurePsi: 60000, pressureLabel: '~60,000 psi', connectionType: 'UNF', description: 'High pressure check valve rated to 60,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/check-valve.png' },
  { id: 'chk-high-30k', name: 'High Pressure Check Valve - High Pressure (30,000 psi)', type: 'Check Valve', pressurePsi: 30000, pressureLabel: '~30,000 psi', connectionType: 'UNF', description: 'High pressure check valve rated to 30,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/check-valve.png' },
  { id: 'chk-med-20k', name: 'High Pressure Check Valve - Medium Pressure', type: 'Check Valve', pressurePsi: 20000, pressureLabel: '~20,000 psi', connectionType: 'UNF', description: 'Medium pressure check valve for standard high-pressure systems.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/check-valve.png' },
  { id: 'chk-low-15k', name: 'High Pressure Check Valve - Low Pressure', type: 'Check Valve', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'PT Female', description: 'Low pressure check valve with PT female connection.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/check-valve.png' },
  { id: 'ndl-ultra-100k', name: 'High Pressure Needle Valve - Ultra High Pressure (100,000 psi)', type: 'Needle Valve', pressurePsi: 100000, pressureLabel: '~100,000 psi', connectionType: 'UNF', description: 'Ultra high pressure needle valve rated to 100,000 psi for extreme environments.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/needle-valve.webp' },
  { id: 'ndl-high-60k', name: 'High Pressure Needle Valve - High Pressure (60,000 psi)', type: 'Needle Valve', pressurePsi: 60000, pressureLabel: '~60,000 psi', connectionType: 'UNF', description: 'Precision needle valve rated to 60,000 psi.', image: 'https://pblol2.blob.core.windows.net/hiflux/Needle-valve/needle-valve-60k.jpg' },
  { id: 'ndl-high-30k', name: 'High Pressure Needle Valve - High Pressure (30,000 psi)', type: 'Needle Valve', pressurePsi: 30000, pressureLabel: '~30,000 psi', connectionType: 'UNF', description: 'Precision needle valve rated to 30,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/needle-valve.webp' },
  { id: 'ndl-med-20k', name: 'High Pressure Needle Valve - Medium Pressure', type: 'Needle Valve', pressurePsi: 20000, pressureLabel: '~20,000 psi', connectionType: 'UNF', description: 'Medium pressure needle valve for flow control applications.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/needle-valve.webp' },
  { id: 'ndl-low-15k', name: 'High Pressure Needle Valve - Low Pressure', type: 'Needle Valve', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'UNF', description: 'Low pressure needle valve for standard applications.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/needle-valve.webp' },
  { id: 'ndl-h2-20k', name: 'Hydrogen Refueling System Needle Valve', type: 'Needle Valve', pressurePsi: 20000, pressureLabel: '~20,000 psi', connectionType: 'UNF', description: 'KGS-certified needle valve designed specifically for hydrogen refueling stations.', image: 'https://pblol2.blob.core.windows.net/hiflux/Needle-valve/needle-valve-h2-refuelling-ks.jpg' },
  { id: 'ndl-pt-15k', name: 'High Pressure Needle Valve - PT Female', type: 'Needle Valve', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'PT Female', description: 'PT female high pressure needle valve, 3/4 and 1 inch available.', image: 'https://pblol2.blob.core.windows.net/hiflux/Needle-valve/needle-valve-pt-15k.jpg' },
  { id: 'ndl-npt-15k', name: 'High Pressure Needle Valve - NPT Female', type: 'Needle Valve', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'NPT Female', description: 'NPT female high pressure needle valve for North American standard systems.', image: 'https://pblol2.blob.core.windows.net/hiflux/Needle-valve/needle-valve-npt-15k.jpg' },
  { id: 'ndl-ultra-150k', name: 'High Pressure Needle Valve - Ultra High Pressure (150,000 psi)', type: 'Needle Valve', pressurePsi: 150000, pressureLabel: '~150,000 psi', connectionType: 'UNF', description: 'Extreme duty needle valve rated to 150,000 psi for research and test applications.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/needle-valve.webp' },
  { id: 'ndl-pipe-75k', name: 'High Pressure Pipe Needle Valve - Low Pressure (7,500 psi)', type: 'Needle Valve', pressurePsi: 7500, pressureLabel: '~7,500 psi', connectionType: 'Pipe', description: 'Pipe-style needle valve for low pressure systems up to 7,500 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/needle-valve.webp' },
  { id: 'ndl-pipe-3k', name: 'High Pressure Pipe Needle Valve - Low Pressure (3,000 psi)', type: 'Needle Valve', pressurePsi: 3000, pressureLabel: '~3,000 psi', connectionType: 'Pipe', description: 'Pipe-style needle valve for low pressure systems up to 3,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/needle-valve.webp' },
  { id: 'ndl-3way-60k', name: 'High Pressure 3-Way 2-Stem Needle Valve (60,000 psi)', type: 'Needle Valve', pressurePsi: 60000, pressureLabel: '60,000 psi', connectionType: 'UNF', description: '3-way 2-stem needle valve for multi-port flow control at 60,000 psi.', image: 'https://pblol2.blob.core.windows.net/hiflux/Needle-valve/needle-valve-60k.jpg' },
  { id: 'ndl-3way-30k', name: 'High Pressure 3-Way 2-Stem Needle Valve (30,000 psi)', type: 'Needle Valve', pressurePsi: 30000, pressureLabel: '30,000 psi', connectionType: 'UNF', description: '3-way 2-stem needle valve for multi-port flow control at 30,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/needle-valve.webp' },
  { id: 'ndl-3way-20k', name: 'High Pressure 3-Way 2-Stem Needle Valve (20,000 psi)', type: 'Needle Valve', pressurePsi: 20000, pressureLabel: '20,000 psi', connectionType: 'UNF', description: '3-way 2-stem needle valve for multi-port flow control at 20,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/needle-valve.webp' },
  { id: 'ndl-3way-15k', name: 'High Pressure 3-Way 2-Stem Needle Valve (15,000 psi)', type: 'Needle Valve', pressurePsi: 15000, pressureLabel: '15,000 psi', connectionType: 'UNF', description: '3-way 2-stem needle valve for multi-port flow control at 15,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/compressed-images/needle-valve.webp' },
  { id: 'ball-pt-15k', name: 'High Pressure Ball Valve - PT Female', type: 'Ball Valve', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'PT Female', description: 'PT female high pressure ball valve for quick shut-off applications.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/trunion-ball-valve.png' },
  { id: 'ball-npt-15k', name: 'High Pressure Ball Valve - NPT Female', type: 'Ball Valve', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'NPT Female', description: 'NPT female high pressure ball valve for North American installations.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/trunion-ball-valve.png' },
  { id: 'ball-med-20k', name: 'High Pressure Ball Valve - Medium Pressure', type: 'Ball Valve', pressurePsi: 20000, pressureLabel: '~20,000 psi', connectionType: 'UNF', description: 'Medium pressure ball valve for demanding shut-off requirements.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/trunion-ball-valve.png' },
  { id: 'ball-low-15k', name: 'High Pressure Ball Valve - Low Pressure', type: 'Ball Valve', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'UNF', description: 'Low pressure ball valve for standard high-pressure systems.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/trunion-ball-valve.png' },
  { id: 'ball-pneu-pt-15k', name: 'Pneumatic Actuator Ball Valve - PT Female', type: 'Ball Valve', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'PT Female', description: 'Pneumatically actuated ball valve with PT female connection.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/trunion-ball-valve.png' },
  { id: 'ball-pneu-npt-15k', name: 'Pneumatic Actuator Ball Valve - NPT Female', type: 'Ball Valve', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'NPT Female', description: 'Pneumatically actuated ball valve with NPT female connection.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/trunion-ball-valve.png' },
  { id: 'ball-pneu-med-20k', name: 'Pneumatic Actuator Ball Valve - Medium Pressure', type: 'Ball Valve', pressurePsi: 20000, pressureLabel: '~20,000 psi', connectionType: 'UNF', description: 'Pneumatic actuator ball valve for medium pressure automation.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/trunion-ball-valve.png' },
  { id: 'ball-pneu-low-15k', name: 'Pneumatic Actuator Ball Valve - Low Pressure', type: 'Ball Valve', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'UNF', description: 'Low pressure pneumatic actuator ball valve for automated systems.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/trunion-ball-valve.png' },
  { id: 'aov-nc-60k', name: 'Air Operated Valve - Normal Close (60,000 psi)', type: 'Air Operated Valve', pressurePsi: 60000, pressureLabel: '~60,000 psi', connectionType: 'UNF', description: 'Normally closed air operated valve rated to 60,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/air-operated-valve.png' },
  { id: 'aov-nc-20k', name: 'Air Operated Valve - Normal Close (20,000 psi)', type: 'Air Operated Valve', pressurePsi: 20000, pressureLabel: '~20,000 psi', connectionType: 'UNF', description: 'Normally closed air operated valve rated to 20,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/air-operated-valve.png' },
  { id: 'aov-nc-15k', name: 'Air Operated Valve - Normal Close (15,000 psi)', type: 'Air Operated Valve', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'UNF', description: 'Normally closed air operated valve rated to 15,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/air-operated-valve.png' },
  { id: 'aov-no-60k', name: 'Air Operated Valve - Normal Open (60,000 psi)', type: 'Air Operated Valve', pressurePsi: 60000, pressureLabel: '~60,000 psi', connectionType: 'UNF', description: 'Normally open air operated valve rated to 60,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/air-operated-valve.png' },
  { id: 'aov-no-20k', name: 'Air Operated Valve - Normal Open (20,000 psi)', type: 'Air Operated Valve', pressurePsi: 20000, pressureLabel: '~20,000 psi', connectionType: 'UNF', description: 'Normally open air operated valve rated to 20,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/air-operated-valve.png' },
  { id: 'aov-no-15k', name: 'Air Operated Valve - Normal Open (15,000 psi)', type: 'Air Operated Valve', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'UNF', description: 'Normally open air operated valve rated to 15,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/air-operated-valve.png' },
  { id: 'saf-rel-prop-20k', name: 'High Pressure Relief Valve - Proportional Type (1,000–20,000 psi)', type: 'Safety Valve', pressurePsi: 20000, pressureLabel: '1,000~20,000 psi', connectionType: 'UNF', description: 'Proportional type pressure relief valve for water service, 1,000–20,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/relief-valve.png' },
  { id: 'saf-rel-prop-15k', name: 'High Pressure Relief Valve - Proportional Type (1,000–15,000 psi)', type: 'Safety Valve', pressurePsi: 15000, pressureLabel: '1,000~15,000 psi', connectionType: 'UNF', description: 'Proportional type pressure relief valve for water service, 1,000–15,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/relief-valve.png' },
  { id: 'saf-rel-adj-20k', name: 'High Pressure Relief Valve - Field Adjustable (10,000–20,000 psi)', type: 'Safety Valve', pressurePsi: 20000, pressureLabel: '10,000~20,000 psi', connectionType: 'UNF', description: 'Field adjustable relief valve for liquid service, 10,000–20,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/relief-valve.png' },
  { id: 'saf-rel-adj-10k', name: 'High Pressure Relief Valve - Field Adjustable (1,000–10,000 psi)', type: 'Safety Valve', pressurePsi: 10000, pressureLabel: '1,000~10,000 psi', connectionType: 'UNF', description: 'Field adjustable relief valve for liquid service, 1,000–10,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/relief-valve.png' },
  { id: 'saf-rel-factory-60k', name: 'High Pressure Relief Valve - Factory Set', type: 'Safety Valve', pressurePsi: 60000, pressureLabel: '3,000~60,000 psi', connectionType: 'UNF', description: 'Factory-set relief valve for liquid service, 3,000–60,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/relief-valve.png' },
  { id: 'saf-kc-29k', name: 'KC Certified Proportional Gas Relief Valve (1,000–29,000 psi)', type: 'Safety Valve', pressurePsi: 29000, pressureLabel: '1,000~29,000 psi', connectionType: 'UNF', description: 'KC certified proportional gas relief valve, rated 1,000–29,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/relief-valve.png' },
  { id: 'saf-kc-18k', name: 'KC Certified Proportional Gas Relief Valve (1,000–18,000 psi)', type: 'Safety Valve', pressurePsi: 18000, pressureLabel: '1,000~18,000 psi', connectionType: 'UNF', description: 'KC certified proportional gas relief valve, rated 1,000–18,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/relief-valve.png' },
  { id: 'saf-rupt-60k', name: 'High Pressure Rupture Disc - High Pressure', type: 'Safety Valve', pressurePsi: 60000, pressureLabel: '~60,000 psi', connectionType: 'UNF', description: 'High pressure rupture disc for burst protection at 60,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/rupture-disc.png' },
  { id: 'saf-rupt-20k', name: 'High Pressure Rupture Disc - Medium Pressure', type: 'Safety Valve', pressurePsi: 20000, pressureLabel: '~20,000 psi', connectionType: 'UNF', description: 'Medium pressure rupture disc for burst protection at 20,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/rupture-disc.png' },
  { id: 'saf-rupt-115k', name: 'High Pressure Rupture Disc - Low Pressure', type: 'Safety Valve', pressurePsi: 11500, pressureLabel: '~11,500 psi', connectionType: 'UNF', description: 'Low pressure rupture disc for burst protection at 11,500 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/rupture-disc.png' },
  { id: 'saf-head-60k', name: 'High Pressure Safety Head - High Pressure', type: 'Safety Valve', pressurePsi: 60000, pressureLabel: '~60,000 psi', connectionType: 'UNF', description: 'Safety head assembly for rupture disc systems at 60,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/safety-head.png' },
  { id: 'saf-head-20k', name: 'High Pressure Safety Head - Medium Pressure', type: 'Safety Valve', pressurePsi: 20000, pressureLabel: '~20,000 psi', connectionType: 'UNF', description: 'Safety head assembly for rupture disc systems at 20,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/safety-head.png' },
  { id: 'saf-head-15k', name: 'High Pressure Safety Head - Low Pressure', type: 'Safety Valve', pressurePsi: 15000, pressureLabel: '~15,000 psi', connectionType: 'UNF', description: 'Safety head assembly for rupture disc systems at 15,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/safety-head.png' },
  { id: 'spc-ctrl-75k', name: 'High Pressure Control Valve - Low Pressure (7,500 psi)', type: 'Special Valve', pressurePsi: 7500, pressureLabel: '~7,500 psi', connectionType: 'UNF', description: 'High pressure control valve for precise flow regulation at 7,500 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/Speical-valve.png' },
  { id: 'spc-ctrl-3k', name: 'High Pressure Control Valve - Low Pressure (3,000 psi)', type: 'Special Valve', pressurePsi: 3000, pressureLabel: '~3,000 psi', connectionType: 'UNF', description: 'High pressure control valve for precise flow regulation at 3,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/Speical-valve.png' },
  { id: 'spc-dbb-20k', name: 'High Pressure Double Block and Bleed Valve', type: 'Special Valve', pressurePsi: 20000, pressureLabel: '~20,000 psi', connectionType: 'UNF', description: 'Double block and bleed valve for isolation and pressure relief at 20,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/Speical-valve.png' },
  { id: 'spc-bleed-30k', name: 'High Pressure Bleed Valve - Medium Pressure', type: 'Special Valve', pressurePsi: 30000, pressureLabel: '20,000~30,000 psi', connectionType: 'UNF', description: 'High pressure bleed valve for venting and isolation at 20,000–30,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/Speical-valve.png' },
  { id: 'spc-gauge-30k', name: 'High Pressure Wellhead Gauge Valve', type: 'Special Valve', pressurePsi: 30000, pressureLabel: '20,000~30,000 psi', connectionType: 'UNF', description: 'Wellhead gauge valve for pressure measurement at 20,000–30,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/Speical-valve.png' },
  { id: 'spc-temp-20k', name: 'High Temperature Valve - Medium Pressure', type: 'Special Valve', pressurePsi: 20000, pressureLabel: '~20,000 psi', connectionType: 'UNF', description: 'High temperature rated valve for elevated temperature service at 20,000 psi.', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/hiflux/Speical-valve.png' },
]

function HifluxRow({ row }: { row: HifluxProduct }) {
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const rfqProduct: ProductForRFQ = {
    id: row.id,
    name: row.name,
    brand: 'Hiflux',
    category: 'High Pressure Valves',
    categoryId: 'high-pressure',
    subCategory: row.type,
    thumbnail: row.image,
    description: row.description,
    keySpecs: [
      { label: 'Type', value: row.type },
      { label: 'Max Pressure', value: row.pressureLabel },
      { label: 'Connection', value: row.connectionType },
    ],
    variantInfo: { count: 1, sizeRange: row.pressureLabel },
  }

  const headerSx = {
    bgcolor: alpha(ACCENT, 0.04),
    borderBottom: `2px solid ${ACCENT}`,
    fontWeight: 700,
    fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontFamily: PRIMARY_FONT,
  }

  return (
    <>
      <TableRow
        hover
        onClick={() => setOpen(o => !o)}
        sx={{
          cursor: 'pointer',
          bgcolor: open ? alpha(ACCENT, 0.04) : 'inherit',
          '&:hover': { bgcolor: `${alpha(ACCENT, 0.03)} !important` },
        }}
      >
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontWeight: 700, fontSize: '0.82rem', py: 1, fontFamily: PRIMARY_FONT }}>{row.name}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.type} size="small" variant="outlined" sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: ACCENT, color: ACCENT }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.pressureLabel}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.connectionType}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button
            size="small"
            variant="contained"
            onClick={e => { e.stopPropagation(); setModalOpen(true) }}
            sx={{
              fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5,
              borderRadius: '4px', textTransform: 'capitalize', whiteSpace: 'nowrap',
              bgcolor: ACCENT, color: '#fff', boxShadow: 'none',
              '&:hover': { bgcolor: '#4ab534', boxShadow: 'none' },
            }}
          >
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={6} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(ACCENT, 0.02), borderLeft: `4px solid ${ACCENT}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={row.image} alt={row.name} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', p: 1 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Box component="img" src={HIFLUX_LOGO} alt="Hiflux" sx={{ maxHeight: 28, maxWidth: 110, objectFit: 'contain', bgcolor: ACCENT, p: 1, borderRadius: 1, mb: 2 }} />
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: ACCENT, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      {[
                        { label: 'Name', value: row.name },
                        { label: 'Type', value: row.type },
                        { label: 'Max Pressure', value: row.pressureLabel },
                        { label: 'Connection', value: row.connectionType },
                      ].map(({ label, value }) => (
                        <Box key={label}>
                          <Typography variant="caption" color="text.secondary" fontWeight={700} sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
                          <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
                        </Box>
                      ))}
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontFamily: PRIMARY_FONT }}>{row.description}</Typography>
                    <Button
                      variant="contained"
                      onClick={() => setModalOpen(true)}
                      sx={{ textTransform: 'capitalize', fontWeight: 700, borderRadius: '6px', bgcolor: ACCENT, color: '#fff', '&:hover': { bgcolor: '#4ab534' }, fontFamily: PRIMARY_FONT }}
                    >
                      Request Quote
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={rfqProduct} />
    </>
  )
}

export default function HifluxProductsPage() {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  // Links such as ?type=Safety%20Valve open the table already filtered
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get('type')
    if (t && PRODUCTS.some(p => p.type === t)) setSelectedTypes([t])
  }, [])
  const [activePressure, setActivePressure] = useState(0)

  const toggleType = (t: string) =>
    setSelectedTypes(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])

  const filtered = useMemo(() => {
    const pressureRange = PRESSURE_RANGES[activePressure]
    return PRODUCTS.filter(p => {
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(p.type)
      const pressureMatch = p.pressurePsi >= pressureRange.min && p.pressurePsi <= pressureRange.max
      return typeMatch && pressureMatch
    })
  }, [selectedTypes, activePressure])

  const paginated = filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const headerSx = {
    bgcolor: alpha(ACCENT, 0.04),
    borderBottom: `2px solid ${ACCENT}`,
    fontWeight: 700,
    fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontFamily: PRIMARY_FONT,
  }

  const sidebar = (
    <Box sx={{ width: 200, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', boxSizing: 'border-box' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {(selectedTypes.length > 0 || activePressure !== 0) && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: ACCENT }} onClick={() => { setSelectedTypes([]); setActivePressure(0) }}>
            Clear all
          </Typography>
        )}
      </Stack>

      <Accordion disableGutters elevation={0} defaultExpanded sx={{ bgcolor: 'transparent', '&:before': { display: 'none' } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="caption" fontWeight={700} color="text.primary">VALVE TYPE</Typography>
            {selectedTypes.length > 0 && <Chip label={selectedTypes.length} size="small" sx={{ height: 16, fontSize: '0.65rem', bgcolor: ACCENT, color: '#fff' }} />}
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, pt: 0 }}>
          <FormGroup>
            {VALVE_TYPES.map(t => (
              <FormControlLabel
                key={t}
                control={
                  <Checkbox
                    size="small"
                    checked={selectedTypes.includes(t)}
                    onChange={() => toggleType(t)}
                    sx={{ py: 0.25, '&.Mui-checked': { color: ACCENT } }}
                  />
                }
                label={
                  <Stack direction="row" alignItems="center" spacing={0.75}>
                    <Typography variant="body2" fontSize="0.8rem">{t}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.68rem', fontWeight: 600 }}>
                      ({PRODUCTS.filter(p => p.type === t).length})
                    </Typography>
                  </Stack>
                }
                sx={{ mr: 0 }}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters elevation={0} defaultExpanded sx={{ bgcolor: 'transparent', '&:before': { display: 'none' } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
          <Typography variant="caption" fontWeight={700} color="text.primary">PRESSURE RANGE</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, pt: 0 }}>
          <FormGroup>
            {PRESSURE_RANGES.map((r, i) => (
              <FormControlLabel
                key={r.label}
                control={
                  <Checkbox
                    size="small"
                    checked={activePressure === i}
                    onChange={() => setActivePressure(prev => prev === i ? 0 : i)}
                    sx={{ py: 0.25, '&.Mui-checked': { color: ACCENT } }}
                  />
                }
                label={<Typography variant="body2" fontSize="0.8rem">{r.label}</Typography>}
                sx={{ mr: 0 }}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      {/* Header */}
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Box component="img" src={HIFLUX_LOGO} alt="Hiflux" sx={{ maxHeight: 32, maxWidth: 120, objectFit: 'contain', bgcolor: ACCENT, p: 1, borderRadius: 1, mb: 2 }} />
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: ACCENT, fontFamily: PRIMARY_FONT }}>
          High Pressure Valves
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          Hiflux high pressure valves rated up to 150,000 psi — check, needle, ball, air operated, safety and special valves for industrial, hydrogen and wellhead applications.
        </Typography>
        <GroupSiteLinks variant="inline" sites={groupSitesIn("Hiflux")} />
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['Up to 150,000 psi', `${PRODUCTS.length} Models`, 'KC / KGS on selected models', 'H₂ refuelling needle valve'].map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(ACCENT, 0.08), color: ACCENT, border: `1px solid ${alpha(ACCENT, 0.3)}`, fontFamily: PRIMARY_FONT }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Active filters */}
      {(selectedTypes.length > 0 || activePressure !== 0) && (
        <Box sx={{ px: { xs: 2, md: 3 }, pt: 2 }}>
          <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
            <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
            {selectedTypes.map(t => (
              <Chip key={t} label={`Type: ${t}`} size="small" variant="outlined" sx={{ borderColor: ACCENT, color: ACCENT }} onDelete={() => toggleType(t)} />
            ))}
            {activePressure !== 0 && (
              <Chip label={`Pressure: ${PRESSURE_RANGES[activePressure].label}`} size="small" variant="outlined" sx={{ borderColor: ACCENT, color: ACCENT }} onDelete={() => setActivePressure(0)} />
            )}
          </Stack>
        </Box>
      )}

      {/* Table */}
      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>
          {`${filtered.length} PRODUCTS`}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(ACCENT, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
          {!isMobile && sidebar}
          <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
          <Box sx={{ position: 'relative', flex: 1, minWidth: 0 }}>
            {isMobile && (
              <Box sx={{ p: 1, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <IconButton onClick={() => setMobileOpen(true)}><FilterListIcon /></IconButton>
              </Box>
            )}
            <TableContainer>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ ...headerSx, width: 40 }} />
                    <TableCell sx={headerSx}>Name</TableCell>
                    <TableCell sx={headerSx}>Type</TableCell>
                    <TableCell sx={headerSx}>Pressure</TableCell>
                    <TableCell sx={headerSx}>Connection</TableCell>
                    <TableCell sx={headerSx}>Quote</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginated.length === 0
                    ? <TableRow><TableCell colSpan={6} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary">No products found.</Typography></TableCell></TableRow>
                    : paginated.map(row => <HifluxRow key={row.id} row={row} />)
                  }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              count={filtered.length}
              page={page}
              rowsPerPage={rowsPerPage}
              onPageChange={(_, p) => setPage(p)}
              onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value)); setPage(0) }}
              rowsPerPageOptions={[25, 50, 100]}
              sx={{ borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.8rem' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}