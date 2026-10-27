'use client'
import { useState, useMemo } from 'react'
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

const YOUNGDO_LOGO = 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/top_logo.png'
const BRAND_GREEN = '#61D649'
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

type GasCategory = 'Tapered Inlet Threads' | 'Unified Inlet Threads' | 'Non Return Valves' | 'Acetylene' | 'Chlorine / Ammonia' | 'Tube Trailers' | 'Piping Connection'

interface IGValve {
  id: string
  model: string
  category: GasCategory
  inletThreads: string
  outletThreads: string
  workingPressure: string
  fuseMetalTemp: string
  burstDiscPressure: string
  standard: string
  certification: string
  image: string
}

const VALVES: IGValve[] = [
  // Tapered Inlet Threads
  { id: 'yoc-2820', model: 'YOC-2820', category: 'Tapered Inlet Threads', inletThreads: 'W28-14th, KS B 6214, V2', outletThreads: 'W23-14th', workingPressure: '14.7 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '16.7 – 19.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS, KS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-2820.png' },
  { id: 'yrc-2820', model: 'YRC-2820', category: 'Tapered Inlet Threads', inletThreads: 'W28-14th, KS B 6214, V2', outletThreads: 'W22-14th', workingPressure: '14.7 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '16.7 – 19.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS, KS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-2820.png' },
  { id: 'yhc-2820', model: 'YHC-2820', category: 'Tapered Inlet Threads', inletThreads: 'W28-14th, KS B 6214, V2', outletThreads: 'W22-14th-LH', workingPressure: '14.7 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '16.7 – 19.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS, KS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-2820.png' },
  { id: 'ycc-2820-1', model: 'YCC-2820-1', category: 'Tapered Inlet Threads', inletThreads: 'W28-14th, KS B 6214, V2', outletThreads: 'W22-14th', workingPressure: '11.8 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '13.4 – 15.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS, KS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-2820.png' },
  { id: 'ycc-2820-2', model: 'YCC-2820-2', category: 'Tapered Inlet Threads', inletThreads: 'W28-14th, KS B 6214, V2', outletThreads: 'W22-14th', workingPressure: '11.8 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '13.4 – 15.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS, KS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-2820.png' },
  { id: 'yoc-2620', model: 'YOC-2620', category: 'Tapered Inlet Threads', inletThreads: '3/4-14 NGT-CL1', outletThreads: 'W23-14th', workingPressure: '14.7 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '16.7 – 19.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-2620.png' },
  { id: 'yrc-2620', model: 'YRC-2620', category: 'Tapered Inlet Threads', inletThreads: '3/4-14 NGT-CL1', outletThreads: 'W22-14th', workingPressure: '14.7 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '16.7 – 19.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-2620.png' },
  { id: 'yhc-2620', model: 'YHC-2620', category: 'Tapered Inlet Threads', inletThreads: '3/4-14 NGT-CL1', outletThreads: 'W22-14th-LH', workingPressure: '14.7 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '16.7 – 19.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-2620.png' },
  { id: 'ycc-2620-1', model: 'YCC-2620-1', category: 'Tapered Inlet Threads', inletThreads: '3/4-14 NGT-CL1', outletThreads: 'W22-14th', workingPressure: '11.8 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '13.4 – 15.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-2620.png' },
  { id: 'ycc-2620-2', model: 'YCC-2620-2', category: 'Tapered Inlet Threads', inletThreads: '3/4-14 NGT-CL1', outletThreads: 'W22-14th', workingPressure: '11.8 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '13.4 – 15.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-2620.png' },
  { id: 'yoc-3420', model: 'YOC-3420', category: 'Tapered Inlet Threads', inletThreads: '1"-11 1/2 NGT', outletThreads: 'W23-14th', workingPressure: '14.7 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '16.7 – 19.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-3420.png' },
  { id: 'yoc-3420-1', model: 'YOC-3420-1', category: 'Tapered Inlet Threads', inletThreads: '1"-11 1/2 NGT', outletThreads: 'W22-14th', workingPressure: '11.8 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '13.4 – 15.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-3420.png' },
  { id: 'ycc-3420-2', model: 'YCC-3420-2', category: 'Tapered Inlet Threads', inletThreads: '1"-11 1/2 NGT', outletThreads: 'W22-14th', workingPressure: '11.8 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '13.4 – 15.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOC-3420.png' },
  { id: 'yoh-2820k21', model: 'YOH-2820K21', category: 'Tapered Inlet Threads', inletThreads: 'W28-14th, KS B 6214, V2', outletThreads: 'W23-14th', workingPressure: '14.7 MPa', fuseMetalTemp: '105°C ±5°C', burstDiscPressure: '14.7 – 19.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS, KS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOH-2820K21.png' },
  { id: 'yrh-2820k21', model: 'YRH-2820K21', category: 'Tapered Inlet Threads', inletThreads: 'W28-14th, KS B 6214, V2', outletThreads: 'W22-14th', workingPressure: '14.7 MPa', fuseMetalTemp: '105°C ±5°C', burstDiscPressure: '14.7 – 19.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS, KS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOH-2820K21.png' },
  { id: 'yhh-2820k21', model: 'YHH-2820K21', category: 'Tapered Inlet Threads', inletThreads: 'W28-14th, KS B 6214, V2', outletThreads: 'W22-14th-LH', workingPressure: '14.7 MPa', fuseMetalTemp: '105°C ±5°C', burstDiscPressure: '14.7 – 19.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS, KS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOH-2820K21.png' },
  { id: 'yoc-2820k26', model: 'YOC-2820K26', category: 'Tapered Inlet Threads', inletThreads: 'W28-14th, KS B 6214, V2', outletThreads: 'W23-14th', workingPressure: '14.7 MPa', fuseMetalTemp: '105°C ±5°C', burstDiscPressure: '14.7 – 19.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOH-2820K21.png' },
  { id: 'yrc-2820k26', model: 'YRC-2820K26', category: 'Tapered Inlet Threads', inletThreads: 'W28-14th, KS B 6214, V2', outletThreads: 'W22-14th', workingPressure: '14.7 MPa', fuseMetalTemp: '105°C ±5°C', burstDiscPressure: '14.7 – 19.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOH-2820K21.png' },
  { id: 'yhc-2820k26', model: 'YHC-2820K26', category: 'Tapered Inlet Threads', inletThreads: 'W28-14th, KS B 6214, V2', outletThreads: 'W22-14th-LH', workingPressure: '14.7 MPa', fuseMetalTemp: '105°C ±5°C', burstDiscPressure: '14.7 – 19.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOH-2820K21.png' },
  { id: 'yrc-2820k27', model: 'YRC-2820K27', category: 'Tapered Inlet Threads', inletThreads: 'W28-14th, KS B 6214, V2', outletThreads: 'W22-14th', workingPressure: '14.7 MPa', fuseMetalTemp: '105°C ±5°C', burstDiscPressure: '14.7 – 19.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOH-2820K21.png' },
  { id: 'yrh-286a', model: 'YRH-286A', category: 'Tapered Inlet Threads', inletThreads: 'W28-14th, KS B 6214, V2', outletThreads: 'W22-14th-RH', workingPressure: '19.6 MPa', fuseMetalTemp: '105°C ±5°C', burstDiscPressure: '22.3 – 26.1 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOH-286A.png' },
  { id: 'yoh-286a', model: 'YOH-286A', category: 'Tapered Inlet Threads', inletThreads: 'W28-14th, KS B 6214, V2', outletThreads: 'W23-14th', workingPressure: '19.6 MPa', fuseMetalTemp: '105°C ±5°C', burstDiscPressure: '22.3 – 26.1 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YOH-286A.png' },

  // Unified Inlet Threads
  { id: 'nh-3203', model: 'NH-3203', category: 'Unified Inlet Threads', inletThreads: '3/4-14 NGT', outletThreads: '0.825-14NGO-RH-EXT (CGA 320)', workingPressure: '1800 – 2400 psi', fuseMetalTemp: 'N/A', burstDiscPressure: '3000 – 4000 psi', standard: 'CGA V-9, CGA V-1, CGA S11, ISO 10297', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH-5403.png' },
  { id: 'nh-3503', model: 'NH-3503', category: 'Unified Inlet Threads', inletThreads: '3/4-14 NGT', outletThreads: '0.825-14NGO-LH-EXT (CGA 350)', workingPressure: '1800 – 2400 psi', fuseMetalTemp: '97.8 – 106.7°C', burstDiscPressure: '3000 – 4000 psi', standard: 'CGA V-9, CGA V-1, CGA S11, ISO 10297', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH-5403.png' },
  { id: 'nh-5403', model: 'NH-5403', category: 'Unified Inlet Threads', inletThreads: '3/4-14 NGT', outletThreads: '0.903-14NGO-RH-EXT (CGA 540)', workingPressure: '1800 – 2400 psi', fuseMetalTemp: 'N/A', burstDiscPressure: '3000 – 4000 psi', standard: 'CGA V-9, CGA V-1, CGA S11, ISO 10297', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH-5403.png' },
  { id: 'nh-5803', model: 'NH-5803', category: 'Unified Inlet Threads', inletThreads: '3/4-14 NGT', outletThreads: '0.965-14NGO-RH-INT (CGA 580)', workingPressure: '1800 – 2400 psi', fuseMetalTemp: 'N/A', burstDiscPressure: '3000 – 4000 psi', standard: 'CGA V-9, CGA V-1, CGA S11, ISO 10297', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH-5403.png' },
  { id: 'nh-02bbn', model: 'NH-02BBN(III)', category: 'Unified Inlet Threads', inletThreads: 'BS 341-1"', outletThreads: 'G5/8-14th-LH (BS 341 NO.2)', workingPressure: '25 MPa', fuseMetalTemp: '105°C ±9°C', burstDiscPressure: 'N/A', standard: 'BS 341', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH-03BBN.png' },
  { id: 'nh-03bbn', model: 'NH-03BBN', category: 'Unified Inlet Threads', inletThreads: 'BS 341-1"', outletThreads: 'G5/8-14th (BS 341 NO.3)', workingPressure: '20 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', standard: 'BS 341', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH-03BBN.png' },
  { id: 'nh-04bbn', model: 'NH-04BBN', category: 'Unified Inlet Threads', inletThreads: 'BS 341-1"', outletThreads: 'G5/8-14th-LH (BS 341 NO.4)', workingPressure: '20 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', standard: 'BS 341', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH-03BBN.png' },
  { id: 'nh-08bbg6', model: 'NH-08BBG6', category: 'Unified Inlet Threads', inletThreads: 'BS 341-1"', outletThreads: '0.860-14T.P.J-RH-EXT (BS 341 NO.8)', workingPressure: '16.8 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '19.1 – 22.5 MPa', standard: 'BS 341', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH-03BBN.png' },
  { id: 'nh-09d25n', model: 'NH-09D25N', category: 'Unified Inlet Threads', inletThreads: 'W28.8-14th (25E)', outletThreads: 'G3/4-14th (DIN477 NO.9)', workingPressure: '20 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', standard: 'DIN477, EN 629-1, KS B ISO', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH-03BBN.png' },
  { id: 'nh-02u25g9', model: 'NH-02U25G9', category: 'Unified Inlet Threads', inletThreads: 'W28.8-14th (25E)', outletThreads: 'W21.7x1/14" (UNI 11144 NO.2)', workingPressure: '15 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '17.1 – 20.9 MPa', standard: 'UNI 11144, EN 629-1, KS B ISO', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH-03BBN.png' },
  { id: 'nh6-3205pc', model: 'NH6-3205PC', category: 'Unified Inlet Threads', inletThreads: '1.125-12 UNF', outletThreads: '0.825-14NGO-RH-EXT (CGA 320)', workingPressure: '1800 – 2400 psi', fuseMetalTemp: 'N/A', burstDiscPressure: '3000 – 4000 psi', standard: 'CGA V-9, CGA V-1, CGA S11, ISO 10297', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH6-3205PC.png' },
  { id: 'nh6-3207pc', model: 'NH6-3207PC', category: 'Unified Inlet Threads', inletThreads: '0.750-16 UNF', outletThreads: '0.825-14NGO-RH-EXT (CGA 320)', workingPressure: '1800 – 2400 psi', fuseMetalTemp: 'N/A', burstDiscPressure: '3000 – 4000 psi', standard: 'CGA V-9, CGA V-1, CGA S11, ISO 10297', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH6-3205PC.png' },
  { id: 'nh6-3265pcd', model: 'NH6-3265PCD', category: 'Unified Inlet Threads', inletThreads: '1.125-12 UNF', outletThreads: '0.825-14NGO-RH-EXT (CGA 326)', workingPressure: '12.4 MPa (1800 psi)', fuseMetalTemp: 'N/A', burstDiscPressure: '14 – 16.5 MPa (2040 – 2400 psi)', standard: 'CGA V-1, KGS, AA311', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH6-3205PC.png' },
  { id: 'nh6-5405pc', model: 'NH6-5405PC', category: 'Unified Inlet Threads', inletThreads: '1.125-12 UNF', outletThreads: '0.903-14NGO-RH-EXT (CGA 540)', workingPressure: '1800 – 2400 psi', fuseMetalTemp: 'N/A', burstDiscPressure: '3000 – 4000 psi', standard: 'CGA V-9, CGA V-1, CGA S11, ISO 10297', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH6-5405PC.png' },
  { id: 'nh6-5805pc', model: 'NH6-5805PC', category: 'Unified Inlet Threads', inletThreads: '1.125-12 UNF', outletThreads: '0.965-14NGO-RH-INT (CGA 580)', workingPressure: '1800 – 2400 psi', fuseMetalTemp: 'N/A', burstDiscPressure: '3000 – 4000 psi', standard: 'CGA V-9, CGA V-1, CGA S11, ISO 10297', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH6-5405PC.png' },
  { id: 'nh6-02u5d1', model: 'NH6-02U5D1', category: 'Unified Inlet Threads', inletThreads: '1.125-12 UNF', outletThreads: 'W21.7x1/14" (UNI 11144 NO.2)', workingPressure: '12.3 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '14.0 – 17.2 MPa', standard: 'UNI 11144, CGA, CGA S-1', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH6-3205PC.png' },
  { id: 'nh6-06d51', model: 'NH6-06D51', category: 'Unified Inlet Threads', inletThreads: '1.125-12 UNF', outletThreads: 'N/A', workingPressure: '1800 psi', fuseMetalTemp: 'N/A', burstDiscPressure: '2070 – 2530 psi', standard: 'DIN47, CGA, CGA S-1, CGA V-1', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH6-3205PC.png' },
  { id: 'nh6-09d5n', model: 'NH6-09D5N', category: 'Unified Inlet Threads', inletThreads: '1.125-12 UNF', outletThreads: 'G3/4-14th (DIN NO.9)', workingPressure: '20 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', standard: 'DIN477, CGA, CGA S-1, CGA V-1', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/NH6-3205PC.png' },
  { id: 'ykc-2820', model: 'YKC-2820', category: 'Unified Inlet Threads', inletThreads: '1 1/8-12 UNF', outletThreads: 'W22-14th', workingPressure: '11.8 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '13.3 – 15.7 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KS, KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YKC-2820.png' },

  // Non Return Valves
  { id: 'rp1-0325bn', model: 'RP1-0325BN', category: 'Non Return Valves', inletThreads: 'W28.8-14th (DIN477, BS341, 25E)', outletThreads: 'G5/8-14th (BS 341 NO.3)', workingPressure: '20 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', standard: 'ISO 15996, ISO 10297, BS 341', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/RP1-5803G11-A.png' },
  { id: 'rp1-3203g6', model: 'RP1-3203G6', category: 'Non Return Valves', inletThreads: '3/4-14 NGT', outletThreads: '0.825-14NGO-RH-EXT (CGA 320)', workingPressure: '2175 psi', fuseMetalTemp: 'N/A', burstDiscPressure: '2936 – 3262 psi', standard: 'ISO 15996, ISO 10297, CGA V-1', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/RP1-5803G11-A.png' },
  { id: 'rp1-5803g11-a', model: 'RP1-5803G11-A', category: 'Non Return Valves', inletThreads: '3/4-14 NGT', outletThreads: '0.965-14NGO-RH-INT (CGA 580)', workingPressure: '15 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '18.0 – 20.0 MPa', standard: 'ISO 15996, ISO 10297, CGA V-1', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/RP1-5803G11-A.png' },
  { id: 'hr-010102', model: 'HR 010102', category: 'Non Return Valves', inletThreads: 'W28-14th (KS B 6214, V2)', outletThreads: 'W22-14th', workingPressure: '11.76 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: '13.3 – 15.68 MPa', standard: 'ISO 15996, KGS AA311', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/RP1-5803G11-A.png' },
  { id: 'hr-020102', model: 'HR 020102', category: 'Non Return Valves', inletThreads: 'W28-14th (KS B 6214, V2)', outletThreads: 'W22-14th', workingPressure: '14.7 MPa', fuseMetalTemp: '105 ±5°C', burstDiscPressure: '14.7 – 19.6 MPa', standard: 'ISO 15996, KS B 6214, KGS AA311', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/RP1-5803G11-A.png' },
  { id: 'hr-020202', model: 'HR 020202', category: 'Non Return Valves', inletThreads: 'W28-14th (KS B 6214, V2)', outletThreads: 'W22-14th-LH', workingPressure: '14.7 MPa', fuseMetalTemp: '105 ±5°C', burstDiscPressure: '14.7 – 19.6 MPa', standard: 'ISO 15996, KS B 6214, KGS AA311', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/RP1-5803G11-A.png' },
  { id: 'hr-020302', model: 'HR 020302', category: 'Non Return Valves', inletThreads: 'W28-14th (KS B 6214, V2)', outletThreads: 'W23-14th', workingPressure: '14.7 MPa', fuseMetalTemp: '105 ±5°C', burstDiscPressure: '14.7 – 19.6 MPa', standard: 'ISO 15996, KS B 6214, KGS AA311', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/RP1-5803G11-A.png' },

  // Acetylene
  { id: 'yac-5238gn', model: 'YAC-5238GN', category: 'Acetylene', inletThreads: '3/8-18 NGT', outletThreads: '0.895-18NGO-RH-EXT (CGA 520)', workingPressure: '500 psi', fuseMetalTemp: '97.8 – 106.7°C', burstDiscPressure: 'N/A', standard: 'CGA V-9, CGA V-1, CGA S11, ISO 10297', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YAC-5238GN.png' },
  { id: 'yac-5238ghn', model: 'YAC-5238GHN', category: 'Acetylene', inletThreads: '3/8-18 NGT', outletThreads: '0.895-18NGO-RH-EXT (CGA 520)', workingPressure: '500 psi', fuseMetalTemp: '97.8 – 106.7°C', burstDiscPressure: 'N/A', standard: 'CGA V-9, CGA V-1, CGA S11, ISO 10297', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YAC-5238GN.png' },
  { id: 'yac-2038gn', model: 'YAC-2038GN', category: 'Acetylene', inletThreads: '3/8-18 NGT', outletThreads: '0.625-20NGO-RH-EXT (CGA 200)', workingPressure: '500 psi', fuseMetalTemp: '97.8 – 106.7°C', burstDiscPressure: 'N/A', standard: 'CGA V-9, CGA V-1, CGA S11, ISO 10297', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YAC-2038GN.png' },
  { id: 'yac-2038ghn', model: 'YAC-2038GHN', category: 'Acetylene', inletThreads: '3/8-18 NGT', outletThreads: '0.625-20NGO-RH-EXT (CGA 200)', workingPressure: '500 psi', fuseMetalTemp: '97.8 – 106.7°C (208.1 – 224.1°F)', burstDiscPressure: 'N/A', standard: 'CGA V-9, CGA V-1, CGA S11, ISO 10297', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YAC-2038GN.png' },
  { id: 'yac-2620', model: 'YAC-2620', category: 'Acetylene', inletThreads: '3/4-14 NGT', outletThreads: '0.885-14NGO-LH-INT (CGA 510)', workingPressure: '420 psi', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', standard: 'CGA V-9, CGA V-1, CGA S11, ISO 10297', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YAC-2620.png' },
  { id: 'yac-3420', model: 'YAC-3420', category: 'Acetylene', inletThreads: '1"-11 1/2 NGT', outletThreads: '0.885-14NGO-LH-INT (CGA 510)', workingPressure: '2.9 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', standard: 'CGA V-9, CGA V-1, CGA S11, ISO 10297', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YAC-3420.png' },
  { id: 'yac-3920', model: 'YAC-3920', category: 'Acetylene', inletThreads: 'W39-12m', outletThreads: 'W22.5-14-LH', workingPressure: '2.9 MPa', fuseMetalTemp: '105°C ±5°C', burstDiscPressure: 'N/A', standard: 'KS B 6215, KS B 6214', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YAC-3920.png' },

  // Chlorine / Ammonia
  { id: 'ycl-2630', model: 'YCL-2630', category: 'Chlorine / Ammonia', inletThreads: 'W28-14th, KS B 6214, V3', outletThreads: 'W26-14th', workingPressure: '1.53 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YCL-2630(B).png' },
  { id: 'ycl-2630b', model: 'YCL-2630(B)', category: 'Chlorine / Ammonia', inletThreads: 'W28-14th, KS B 6214, V3', outletThreads: 'W26-14th', workingPressure: '1.3 MPa', fuseMetalTemp: '48 – 61°C', burstDiscPressure: 'N/A', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YCL-2630(B).png' },
  { id: 'ycl-2631a', model: 'YCL-2631(A)', category: 'Chlorine / Ammonia', inletThreads: '3/4-14 NGT(CL1)', outletThreads: '1030-14NGO-RH-EXT (CGA 820)', workingPressure: '500 psi', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', standard: 'CGA V-9, CGA V-1, Pamphlet#17', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YCL-2631(A).png' },
  { id: 'ycl-2631b', model: 'YCL-2631(B)', category: 'Chlorine / Ammonia', inletThreads: '3/4-14 NGT(CL1)', outletThreads: '1030-14NGO-RH-EXT (CGA 820)', workingPressure: '500 psi', fuseMetalTemp: '70 – 76.7°C (158 – 170°F)', burstDiscPressure: 'N/A', standard: 'CGA V-9, CGA V-1, Pamphlet#17', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YCL-2631(B).png' },
  { id: 'ymc-2820', model: 'YMC-2820', category: 'Chlorine / Ammonia', inletThreads: 'W28-14th, KS B 6214, V3', outletThreads: 'W22-14th', workingPressure: '1.76 MPa', fuseMetalTemp: '48 – 57°C', burstDiscPressure: 'N/A', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YMC-2820.png' },

  // Tube Trailers
  { id: 'yhc-2210', model: 'YHC-2210', category: 'Tube Trailers', inletThreads: 'W39-12th', outletThreads: 'W22-14"-LH', workingPressure: '19.7 MPa', fuseMetalTemp: '124 ±5°C', burstDiscPressure: 'N/A', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YHC-2210.png' },
  { id: 'yht-3950nk', model: 'YHT-3950NK', category: 'Tube Trailers', inletThreads: 'W39-12th', outletThreads: 'W22-14"-LH', workingPressure: '19.7 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YHT-3950.png' },
  { id: 'yht-3950nk1', model: 'YHT-3950NK1', category: 'Tube Trailers', inletThreads: 'W39-12th', outletThreads: 'W22-14"-LH', workingPressure: '25 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YHT-3950.png' },
  { id: 'yht-3950nk2', model: 'YHT-3950NK2', category: 'Tube Trailers', inletThreads: 'W39-12th', outletThreads: 'W22-14"-LH', workingPressure: '18 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YHT-3950.png' },
  { id: 'yht-3950nk3', model: 'YHT-3950NK3', category: 'Tube Trailers', inletThreads: 'W39-12th', outletThreads: 'W22-14"-LH', workingPressure: '20 MPa', fuseMetalTemp: '124 ±5°C', burstDiscPressure: '20 – 26.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YHT-3950.png' },
  { id: 'yht-3950nk4', model: 'YHT-3950NK4', category: 'Tube Trailers', inletThreads: 'W39-12th', outletThreads: 'W22-14"-LH', workingPressure: '20 MPa', fuseMetalTemp: '124 ±5°C', burstDiscPressure: '20 – 26.6 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YHT-3950.png' },
  { id: 'yht-3952', model: 'YHT-3952', category: 'Tube Trailers', inletThreads: 'W39-12th', outletThreads: 'W22-14"-LH', workingPressure: '18 MPa', fuseMetalTemp: '124 ±5°C', burstDiscPressure: '20.4 – 24 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YHT-3950.png' },
  { id: 'yht-3953', model: 'YHT-3953', category: 'Tube Trailers', inletThreads: 'W39-12th', outletThreads: 'W22-14"-LH', workingPressure: '17.2 MPa', fuseMetalTemp: '124 ±5°C', burstDiscPressure: '19.5 – 22.9 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YHT-3950.png' },
  { id: 'yhet-3950nk', model: 'YHET-3950NK', category: 'Tube Trailers', inletThreads: 'W39-12th', outletThreads: 'W22-14th', workingPressure: '19.7 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YHT-3950.png' },
  { id: 'yhet-3951', model: 'YHET-3951', category: 'Tube Trailers', inletThreads: 'W39-12th', outletThreads: 'W22-14th', workingPressure: '19.7 MPa', fuseMetalTemp: '124 ±5°C', burstDiscPressure: '22.4 – 26.3 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YHT-3950.png' },
  { id: 'yhet-3951k6', model: 'YHET-3951K6', category: 'Tube Trailers', inletThreads: 'W39-12th', outletThreads: 'W22-14th', workingPressure: '18 MPa', fuseMetalTemp: '124 ±5°C', burstDiscPressure: '18 – 24 MPa', standard: 'KGS AA311, KS B 6214', certification: 'KGS', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YHT-3950.png' },
  { id: 'yhv-28j', model: 'YHV-28J', category: 'Tube Trailers', inletThreads: '3/4-14 NGT', outletThreads: '3/4-14 NGT', workingPressure: '3625 psi', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', standard: 'N/A', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YHT-3950.png' },

  // Piping Connection
  { id: 'yxg-2220', model: 'YXG-2220', category: 'Piping Connection', inletThreads: 'W22-14th', outletThreads: 'W22-34th', workingPressure: '14.7 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', standard: 'KS B 6214', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YXG-2220.png' },
  { id: 'yxg-2221', model: 'YXG-2221', category: 'Piping Connection', inletThreads: 'W22-14th', outletThreads: 'W22-34th', workingPressure: '14.7 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', standard: 'KS B 6214', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YXG-2220.png' },
  { id: 'yxg-2620', model: 'YXG-2620', category: 'Piping Connection', inletThreads: 'PF 3/4-14th', outletThreads: 'PF 3/4-14th', workingPressure: '19.6 MPa', fuseMetalTemp: 'N/A', burstDiscPressure: 'N/A', standard: 'N/A', certification: 'N/A', image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/cryogenic/YXG-2620.png' },
]

const CATEGORIES: GasCategory[] = [
  'Tapered Inlet Threads',
  'Unified Inlet Threads',
  'Non Return Valves',
  'Acetylene',
  'Chlorine / Ammonia',
  'Tube Trailers',
  'Piping Connection',
]

function IGVRow({ row }: { row: IGValve }) {
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const rfqProduct: ProductForRFQ = {
    id: row.id,
    name: `${row.model} Industrial Gas Valve`,
    brand: 'Youngdo',
    category: 'Industrial Gas Valves',
    categoryId: 'industrial-gas',
    subCategory: row.category,
    thumbnail: row.image,
    description: `Youngdo ${row.model} — ${row.category}. Working pressure ${row.workingPressure}. Inlet: ${row.inletThreads}, Outlet: ${row.outletThreads}. Certified: ${row.certification}.`,
    keySpecs: [
      { label: 'Working Pressure', value: row.workingPressure },
      { label: 'Inlet Threads', value: row.inletThreads },
      { label: 'Outlet Threads', value: row.outletThreads },
      { label: 'Fuse Metal Temp', value: row.fuseMetalTemp },
      { label: 'Burst Disc Pressure', value: row.burstDiscPressure },
      { label: 'Certification', value: row.certification },
    ],
    variantInfo: { count: 1, sizeRange: row.workingPressure },
  }

  const headerSx = {
    bgcolor: alpha(BRAND_GREEN, 0.04),
    borderBottom: `2px solid ${BRAND_GREEN}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontFamily: PRIMARY_FONT,
  }

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{ cursor: 'pointer', bgcolor: open ? alpha(BRAND_GREEN, 0.04) : 'inherit', '&:hover': { bgcolor: `${alpha(BRAND_GREEN, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontWeight: 700, fontSize: '0.82rem', py: 1, fontFamily: PRIMARY_FONT }}>{row.model}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.category} size="small" variant="outlined" sx={{ fontSize: '0.65rem', fontWeight: 700, borderColor: BRAND_GREEN, color: BRAND_GREEN }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.workingPressure}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.inletThreads}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.outletThreads}</TableCell>
        <TableCell sx={{ py: 1, fontSize: '0.82rem', fontFamily: PRIMARY_FONT }}>{row.certification}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained" onClick={e => { e.stopPropagation(); setModalOpen(true) }}
            sx={{ fontSize: '0.7rem', fontWeight: 700, py: 0.5, px: 1.5, borderRadius: '4px', textTransform: 'none', whiteSpace: 'nowrap', bgcolor: BRAND_GREEN, color: '#fff', boxShadow: 'none', '&:hover': { bgcolor: '#50c23a', boxShadow: 'none' } }}>
            Request Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={8} sx={{ p: 0, borderBottom: 'none' }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_GREEN, 0.02), borderLeft: `4px solid ${BRAND_GREEN}`, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 160, height: 160, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', overflow: 'hidden', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box component="img" src={row.image} alt={row.model} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', p: 1 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Box component="img" src={YOUNGDO_LOGO} alt="Youngdo" sx={{ maxHeight: 28, maxWidth: 110, objectFit: 'contain', bgcolor: BRAND_GREEN, p: 1, borderRadius: 1, mb: 2 }} />
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: 'block', mb: 2, color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      {[
                        { label: 'Model', value: row.model },
                        { label: 'Category', value: row.category },
                        { label: 'Working Pressure', value: row.workingPressure },
                        { label: 'Inlet Threads', value: row.inletThreads },
                        { label: 'Outlet Threads', value: row.outletThreads },
                        { label: 'Fuse Metal Temp', value: row.fuseMetalTemp },
                        { label: 'Burst Disc Pressure', value: row.burstDiscPressure },
                        { label: 'Standard', value: row.standard },
                        { label: 'Certification', value: row.certification },
                      ].map(({ label, value }) => (
                        <Box key={label}>
                          <Typography variant="caption" color="text.secondary" fontWeight={700} sx={{ display: 'block', textTransform: 'uppercase', mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
                          <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
                        </Box>
                      ))}
                    </Stack>
                    <Button variant="contained" onClick={() => setModalOpen(true)}
                      sx={{ textTransform: 'none', fontWeight: 700, borderRadius: '6px', bgcolor: BRAND_GREEN, color: '#fff', '&:hover': { bgcolor: '#50c23a' }, fontFamily: PRIMARY_FONT }}>
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

export default function IndustrialGasProductsPage() {
  const isMobile = useMediaQuery('(max-width:1200px)')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [selectedCategories, setSelectedCategories] = useState<GasCategory[]>([])

  const toggleCategory = (c: GasCategory) =>
    setSelectedCategories(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c])

  const filtered = useMemo(() =>
    selectedCategories.length ? VALVES.filter(v => selectedCategories.includes(v.category)) : VALVES,
    [selectedCategories]
  )

  const paginated = filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const headerSx = {
    bgcolor: alpha(BRAND_GREEN, 0.04),
    borderBottom: `2px solid ${BRAND_GREEN}`,
    fontWeight: 700, fontSize: '0.72rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    fontFamily: PRIMARY_FONT,
  }

  const sidebar = (
    <Box sx={{ width: 220, flexShrink: 0, p: 2, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', boxSizing: 'border-box' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary">FILTER</Typography>
        {selectedCategories.length > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: 'pointer', color: BRAND_GREEN }} onClick={() => setSelectedCategories([])}>Clear all</Typography>
        )}
      </Stack>
      <Accordion disableGutters elevation={0} defaultExpanded sx={{ bgcolor: 'transparent', '&:before': { display: 'none' } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="caption" fontWeight={700} color="text.primary">CATEGORY</Typography>
            {selectedCategories.length > 0 && <Chip label={selectedCategories.length} size="small" sx={{ height: 16, fontSize: '0.65rem', bgcolor: BRAND_GREEN, color: '#fff' }} />}
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0, pt: 0 }}>
          <FormGroup>
            {CATEGORIES.map(c => (
              <FormControlLabel key={c}
                control={<Checkbox size="small" checked={selectedCategories.includes(c)} onChange={() => toggleCategory(c)} sx={{ py: 0.25, '&.Mui-checked': { color: BRAND_GREEN } }} />}
                label={
                  <Stack direction="row" alignItems="center" spacing={0.75}>
                    <Typography variant="body2" fontSize="0.78rem">{c}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.68rem', fontWeight: 600 }}>
                      ({VALVES.filter(v => v.category === c).length})
                    </Typography>
                  </Stack>
                }
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
      <Box sx={{ p: 4, borderBottom: '1px solid rgba(0,0,0,0.08)', bgcolor: 'background.paper' }}>
        <Box component="img" src={YOUNGDO_LOGO} alt="Youngdo" sx={{ maxHeight: 32, maxWidth: 120, objectFit: 'contain', bgcolor: BRAND_GREEN, p: 1, borderRadius: 1, mb: 2 }} />
        <Typography variant="h1" fontWeight={800} mb={1} sx={{ color: BRAND_GREEN, fontFamily: PRIMARY_FONT }}>Youngdo Industrial Gas Cylinder Valves | UK Supply by Valvenok</Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800, fontFamily: PRIMARY_FONT }}>
          Youngdo industrial gas cylinder valves — tapered and unified inlet threads, non return valves, acetylene, chlorine/ammonia, tube trailers and piping connection. Certification (KGS, KS) and design standards (e.g. CGA V-1, BS 341, ISO 10297) vary by model — see the table.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {['25 MPa Max (Tube Trailers)', 'KGS · KS by model', 'Standards vary by model', '7 Categories'].map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, bgcolor: alpha(BRAND_GREEN, 0.08), color: '#2d8a1e', border: `1px solid ${alpha(BRAND_GREEN, 0.3)}`, fontFamily: PRIMARY_FONT }}>{s}</Box>
          ))}
        </Box>
      </Box>

      {selectedCategories.length > 0 && (
        <Box sx={{ px: { xs: 2, md: 3 }, pt: 2 }}>
          <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
            <Typography variant="caption" color="text.secondary" fontWeight={700}>ACTIVE FILTERS:</Typography>
            {selectedCategories.map(c => (
              <Chip key={c} label={c} size="small" variant="outlined" sx={{ borderColor: BRAND_GREEN, color: BRAND_GREEN }} onDelete={() => toggleCategory(c)} />
            ))}
          </Stack>
        </Box>
      )}

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: 'block', mb: 1, fontFamily: PRIMARY_FONT }}>{`${filtered.length} MODELS`}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'stretch', border: `1px solid ${alpha(BRAND_GREEN, 0.2)}`, borderRadius: '8px', overflow: 'hidden', bgcolor: 'background.paper' }}>
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
                    <TableCell sx={headerSx}>Model</TableCell>
                    <TableCell sx={headerSx}>Category</TableCell>
                    <TableCell sx={headerSx}>Working Pressure</TableCell>
                    <TableCell sx={headerSx}>Inlet Threads</TableCell>
                    <TableCell sx={headerSx}>Outlet Threads</TableCell>
                    <TableCell sx={headerSx}>Certification</TableCell>
                    <TableCell sx={headerSx}>Quote</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginated.length === 0
                    ? <TableRow><TableCell colSpan={8} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary">No valves found.</Typography></TableCell></TableRow>
                    : paginated.map(row => <IGVRow key={row.id} row={row} />)
                  }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination component="div" count={filtered.length} page={page} rowsPerPage={rowsPerPage}
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