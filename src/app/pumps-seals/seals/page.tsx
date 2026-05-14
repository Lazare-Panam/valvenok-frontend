// src/app/mechanical-seals/page.tsx
'use client'
import { useState, useMemo } from 'react'
import {
  Box, Typography, CircularProgress, useMediaQuery, IconButton, Button
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import FilterListIcon from '@mui/icons-material/FilterList'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import ProductHero from '../../Common/Products_Page/ProductHero'
import TrustStrip from '../../Common/Products_Page/TrustStrip'
import ProductCard from '../../Common/Products_Page/ProductCard'
import { Category } from '../../Common/Products_Page/ProductCard'

import { useMechanicalSealFilters, useMechanicalSeals } from './hooks/useMechanicalSeals'
import { MechanicalSealsActiveFilters } from './components/MechanicalSealsActiveFilters'
import MechanicalSealsTable from './components/MechanicalSealsTable'
import { SealFilters, EMPTY_SEAL_FILTERS } from './hooks/types'

// ---------- Model catalog (drives the grid) ----------
const SEAL_FAMILIES: Category[] = [
  {
    code: 'AS91',
    title: 'AS91',
    subtitle: 'Single Agitator Mechanical Seal',
    description: 'Single mechanical seal for top-entry agitators. Balanced design with a wide metric size range — reliable sealing for standard mixing and reactor service.',
    specs: ['Single Seal', 'Top-Entry Agitators', '25mm – 150mm', 'Balanced Design'],
    applications: 'Chemical Processing, Pharmaceuticals, Mixing & Reactors',
    href: '#AS91',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/mechanical-seals/AS91.jpg',
  },
  {
    code: 'AS92',
    title: 'AS92',
    subtitle: 'Double Agitator Mechanical Seal',
    description: 'Heavy-duty double mechanical seal for demanding agitator service. Pressurised barrier fluid arrangement for safer sealing of hazardous and high-purity fluids.',
    specs: ['Double Seal', 'Pressurised Barrier', '25mm – 150mm', 'Heavy-Duty'],
    applications: 'Hazardous Service, Pharmaceuticals, Fine Chemicals',
    href: '#AS92',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/mechanical-seals/AS92.jpg',
  },
  {
    code: 'AS93',
    title: 'AS93',
    subtitle: 'Bottom-Entry Double Mechanical Seal',
    description: 'Compact double mechanical seal engineered specifically for bottom-entry agitators. Optimised geometry for smaller-bore mixers and reactors.',
    specs: ['Double Seal', 'Bottom-Entry', '19mm – 75mm', 'Compact Design'],
    applications: 'Bottom-Entry Mixers, Reactors, Pilot Plants',
    href: '#AS93',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/mechanical-seals/AS93.png',
  },
  {
    code: 'AS94',
    title: 'AS94',
    subtitle: 'Glass-Lined Reactor Single Mechanical Seal',
    description: 'Single mechanical seal purpose-built for glass-lined reactors. Engineered to suit the geometry and service conditions of GL reactor agitator shafts.',
    specs: ['Single Seal', 'Glass-Lined Reactors', '40mm – 160mm', 'GL Service'],
    applications: 'Pharmaceuticals, Fine Chemicals, Specialty Chemicals',
    href: '#AS94',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/mechanical-seals/AS94.png',
  },
  {
    code: 'AS104',
    title: 'AS104',
    subtitle: 'Glass-Lined Reactor Single Mechanical Seal — AS104',
    description: 'Premium single mechanical seal for glass-lined reactors. Extended size range and upgraded performance envelope for demanding GL reactor service.',
    specs: ['Single Seal', 'Glass-Lined Reactors', '40mm – 160mm', 'Premium'],
    applications: 'Pharmaceuticals, Fine Chemicals, GL Reactor Service',
    href: '#AS104',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/mechanical-seals/AS104.jpg',
  },
  {
    code: 'AS105',
    title: 'AS105',
    subtitle: 'Glass-Lined Reactor Double Mechanical Seal',
    description: 'Double mechanical seal for glass-lined reactors operating under high pressure or with hazardous fluids. Pressurised barrier fluid arrangement.',
    specs: ['Double Seal', 'Glass-Lined Reactors', '40mm – 160mm', 'High Pressure'],
    applications: 'Hazardous GL Service, Pharmaceuticals, Specialty Chemicals',
    href: '#AS105',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/mechanical-seals/AS105.jpg',
  },
  {
    code: 'CS52CX',
    title: 'CS52CX',
    subtitle: 'Single Cartridge Mechanical Seal',
    description: 'Pre-assembled single cartridge seal for drop-in installation. Eliminates installation error and reduces downtime — ideal for general process pump service.',
    specs: ['Single Cartridge', 'Pre-Assembled', '25mm – 90mm', 'Drop-In Install'],
    applications: 'Process Pumps, Water Treatment, General Industry',
    href: '#CS52CX',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/mechanical-seals/CS52CX.jpg',
  },
  {
    code: 'CS53CX',
    title: 'CS53CX',
    subtitle: 'Double Cartridge Mechanical Seal',
    description: 'Pre-assembled double cartridge seal for safer sealing of hazardous, toxic or high-purity fluids. Drop-in installation with pressurised or unpressurised barrier fluid.',
    specs: ['Double Cartridge', 'Pre-Assembled', '25mm – 90mm', 'Hazardous Service'],
    applications: 'Hazardous Service, Chemical Processing, Pharmaceuticals',
    href: '#CS53CX',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/mechanical-seals/CS53CX.png',
  },
  {
    code: 'DS71',
    title: 'DS71',
    subtitle: 'Dry-Running Mechanical Seal',
    description: 'Dry-running mechanical seal engineered to operate without process liquid lubrication. Wide size range from 15mm to 150mm for diverse dry or gas service.',
    specs: ['Dry-Running', 'No Liquid Lubrication', '15mm – 150mm', 'Gas-Compatible'],
    applications: 'Dry Service, Gas Pumps, Specialty Applications',
    href: '#DS71',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/mechanical-seals/DS71.jpg',
  },
  {
    code: 'PS31',
    title: 'PS31',
    subtitle: 'Conical Spring Unbalanced Seal',
    description: 'Conical spring unbalanced component seal in imperial sizes. Versatile pusher seal for general-purpose pump service across the full 0.5" – 3.5" range.',
    specs: ['Conical Spring', 'Unbalanced', '0.5" – 3.5"', 'Component Seal'],
    applications: 'General Pumps, Water, Light Industry',
    href: '#PS31',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/mechanical-seals/PS31.png',
  },
  {
    code: 'PS34',
    title: 'PS34',
    subtitle: 'Single Spring Mechanical Seal',
    description: 'Heavy-duty single spring component seal in imperial sizes. Robust pusher seal for industrial pump service across the full 0.875" – 3.5" range.',
    specs: ['Single Spring', 'Imperial Sizes', '0.875" – 3.5"', 'Heavy-Duty'],
    applications: 'Industrial Pumps, Process Service, General Industry',
    href: '#PS34',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/mechanical-seals/PS34.png',
  },
  {
    code: 'PS35E',
    title: 'PS35E',
    subtitle: 'Elastomer Bellows Mechanical Seal',
    description: 'Elastomer-bellows component seal with broad imperial size range. Bellows construction accommodates shaft movement and thermal expansion.',
    specs: ['Elastomer Bellows', 'Imperial Sizes', '0.5" – 4.0"', 'Wide Range'],
    applications: 'HVAC, Water, Chemical Pumps, General Industry',
    href: '#PS35E',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/mechanical-seals/PS35E.png',
  },
  {
    code: 'PS37',
    title: 'PS37',
    subtitle: 'Reverse Balanced Mechanical Seal',
    description: 'Reverse-balanced multi-spring component seal for high-pressure pump service. Engineered for balanced operation across the 0.75" – 4.0" imperial range.',
    specs: ['Reverse Balanced', 'Multi-Spring', '0.75" – 4.0"', 'High Pressure'],
    applications: 'High-Pressure Pumps, Oil & Gas, Process Service',
    href: '#PS37',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/mechanical-seals/PS37.png',
  },
  {
    code: 'PS38',
    title: 'PS38',
    subtitle: 'Multi-Spring Mechanical Seal',
    description: 'Premium multi-spring component seal with extended imperial size range. Balanced operation and even spring load distribution for demanding service.',
    specs: ['Multi-Spring', 'Premium', '0.625" – 4.0"', 'Balanced'],
    applications: 'Demanding Service, Oil & Gas, Chemical Processing',
    href: '#PS38',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/mechanical-seals/PS38.png',
  },
]

const TRUST_POINTS = [
  { value: '14 Seal Models', label: 'Complete Range' },
  { value: 'Single & Double', label: 'Arrangements' },
  { value: 'Metric & Imperial', label: 'Size Standards' },
  { value: '0.5" – 160mm', label: 'Size Coverage' },
  { value: 'Fast Dispatch', label: 'Availability' },
]

// "AS104 (40mm)" -> "AS104"
const getFamilyCode = (partNumber: string) => partNumber.split(/\s|\(/)[0].trim()

export default function MechanicalSealsPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:1200px)')

  // State
  const [filters, setFilters] = useState<SealFilters>(EMPTY_SEAL_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedModel, setSelectedModel] = useState<Category | null>(null)

  // Data
  const { data: filterOptions, isLoading: filtersLoading } = useMechanicalSealFilters()
  const { data: allModels = [], isLoading, isFetching } = useMechanicalSeals(filters)

  // Scope rows to the selected model's variants
  const visibleModels = useMemo(() => {
    if (!selectedModel) return allModels
    return allModels.filter(s => getFamilyCode(s.partNumber) === selectedModel.code)
  }, [allModels, selectedModel])

  const activeCount =
    filters.shaftSizes.length +
    filters.sealSizesMm.length +
    filters.sealSizesInch.length

  const handleBack = () => {
    setSelectedModel(null)
    setFilters(EMPTY_SEAL_FILTERS)
  }

  // ---------- GRID VIEW (landing) ----------
  if (!selectedModel) {
    return (
      <>
        <ProductHero
          title="Mechanical Seals"
          subtitle="Agitator, Cartridge, Dry-Running & Component Seals"
          description="A complete range of mechanical seals for agitators, glass-lined reactors and process pumps. Engineered for reliable sealing across the most demanding chemical, pharmaceutical and industrial applications."
          imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/mechanical-seals/seals-hero.jpg"
          imageAlt="Valvenok Mechanical Seals"
          breadcrumb="Products / Mechanical Seals"
        />
        <Box sx={{
          maxWidth: 1400,
          mx: 'auto',
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 6 },
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
          gap: 3,
        }}>
          {SEAL_FAMILIES.map(family => (
            <Box
              key={family.code}
              onClick={() => setSelectedModel(family)}
              sx={{ cursor: 'pointer' }}
            >
              <ProductCard category={family} />
            </Box>
          ))}
        </Box>
        <TrustStrip points={TRUST_POINTS} />
      </>
    )
  }

  // ---------- DETAIL VIEW (variants table for selected model) ----------
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>

      {/* Header */}
      <Box sx={{ p: 4, borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'background.paper' }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleBack}
          sx={{ mb: 2, textTransform: 'none', fontWeight: 700 }}
        >
          Back to all models
        </Button>
        <Typography variant="h4" fontWeight={800} mb={1} color="primary" sx={{ fontFamily: 'monospace' }}>
          {selectedModel.code}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
          {selectedModel.subtitle} — filter by shaft size and seal size to find your variant.
        </Typography>
      </Box>

      {/* Body */}
      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && (
          <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
            <FilterListIcon />
          </IconButton>
        )}

        <MechanicalSealsActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          {isFetching && !isLoading ? 'UPDATING...' : isLoading ? 'LOADING...' : `${visibleModels.length} VARIANTS`}
        </Typography>

        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <MechanicalSealsTable
            models={visibleModels}
            isFetching={isFetching}
            filters={filters}
            setFilters={setFilters}
            filterOptions={filterOptions}
            filtersLoading={filtersLoading}
            activeCount={activeCount}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        )}
      </Box>
    </Box>
  )
}