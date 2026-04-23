'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Typography, Stack, Chip, Button, Divider, Grid } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import VerifiedIcon from '@mui/icons-material/Verified'
import { MechanicalSealDTO } from '@/src/api/sealApi'
import { useCartStore } from '../../cart/hooks/useCartStore'
import { useNotificationStore } from '@/src/store/useNotificationStore'

const SEAL_TYPE_LABELS: Record<string, { name: string; application: string }> = {
  'PS31': { name: 'PS31', application: 'Canonical Spring' },
  'PS34': { name: 'PS34', application: 'Single Spring' },
  'PS35E': { name: 'PS35E', application: 'Multispring Unbalanced' },
  'PS37': { name: 'PS37', application: 'Multispring Reverse Balance' },
  'PS38': { name: 'PS38', application: 'Multispring Balanced' },
}

function SpecCard({ label, value }: { label: string; value: string }) {
  const theme = useTheme()
  return (
    <Box sx={{
      p: 2, bgcolor: alpha(theme.palette.primary.main, 0.03),
      border: '1px solid', borderColor: alpha(theme.palette.primary.main, 0.12),
      borderRadius: 2, minWidth: 140, flex: '1 1 140px'
    }}>
      <Typography variant="caption" fontWeight={700} color="text.disabled"
        sx={{ display: 'block', textTransform: 'uppercase', letterSpacing: '0.07em', mb: 0.5, fontSize: '0.65rem' }}>
        {label}
      </Typography>
      <Typography variant="body1" fontWeight={700} color="text.primary">
        {value}
      </Typography>
    </Box>
  )
}

function FeatureRow({ label, value }: { label: string; value: string }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center"
      sx={{ py: 1.5, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Typography variant="body2" color="text.secondary">{label}</Typography>
      <Typography variant="body2" fontWeight={600}>{value}</Typography>
    </Stack>
  )
}

export default function SealDetailPage() {
  const router = useRouter()
  const theme = useTheme()
  const [seal, setSeal] = useState<MechanicalSealDTO | null>(null)
  const addItem = useCartStore(s => s.addItem)
  const showNotification = useNotificationStore(s => s.showNotification)

  useEffect(() => {
    const raw = sessionStorage.getItem('seal-detail')
    if (raw) setSeal(JSON.parse(raw))
  }, [])

  if (!seal) return (
    <Box sx={{ p: 4 }}>
      <Typography color="text.secondary">No seal data available.</Typography>
      <Button onClick={() => router.back()} sx={{ mt: 2 }}>Go Back</Button>
    </Box>
  )

  const sealType = seal.partNumber.split(' ')[0]
  const sealInfo = SEAL_TYPE_LABELS[sealType]

  const addToCart = () => {
    addItem({
      id: String(seal.id),
      name: seal.partNumber,
      description: `Mechanical Seal — ${seal.sealSizeMm ?? seal.shaftSizeMm ?? ''}`,
      partNumber: seal.partNumber,
      price: seal.price,
      quantity: 1,
      cloudinaryId: seal.imageUrl,
    })
    showNotification({
      message: 'Added to cart',
      severity: 'success',
      partNumber: seal.partNumber,
    })
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8f9fa' }}>

      {/* Header */}
      <Box sx={{
        px: { xs: 2, md: 4 }, py: 3,
        bgcolor: 'background.paper',
        borderBottom: '1px solid', borderColor: 'divider'
      }}>
        <Button
          startIcon={<ArrowBackIcon sx={{ fontSize: 16 }} />}
          onClick={() => router.back()}
          sx={{ mb: 2, textTransform: 'none', color: 'text.secondary', fontSize: '0.82rem' }}
        >
          Mechanical Seals
        </Button>
        <Stack direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          justifyContent="space-between" spacing={2}>
          <Box>
            <Stack direction="row" alignItems="center" spacing={1.5} flexWrap="wrap">
              <Typography variant="h4" fontWeight={800} color="text.primary">
                {seal.partNumber}
              </Typography>
              {sealInfo && (
                <Chip
                  label={sealInfo.application}
                  size="small"
                  color="primary"
                  sx={{ fontWeight: 700, fontSize: '0.72rem' }}
                />
              )}
            </Stack>
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              Sealflex {sealType} Series — Industrial Mechanical Seal
            </Typography>
          </Box>
          <Typography variant="h5" fontWeight={800} color="primary.main">
            £{seal.price.toFixed(2)}
          </Typography>
        </Stack>
      </Box>

      {/* Body */}
      <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, mx: 'auto' }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">

          {/* Image */}
          <Box sx={{
            flexShrink: 0,
            width: { xs: '100%', md: 340 },
            bgcolor: '#fff',
            border: '1px solid', borderColor: 'divider',
            borderRadius: 3,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            p: 5,
            aspectRatio: '1',
          }}>
            <Box component="img" src={seal.imageUrl} alt={seal.partNumber}
              sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </Box>

          {/* Right side */}
          <Box sx={{ flex: 1, width: '100%' }}>

            {/* Specs */}
            <Typography variant="caption" fontWeight={900} color="primary"
              sx={{ letterSpacing: 1, display: 'block', mb: 1.5, textTransform: 'uppercase', fontSize: '0.7rem' }}>
              Specifications
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1.5} mb={4}>
              <SpecCard label="Part Number" value={seal.partNumber} />
              <SpecCard label="Unit Price" value={`£${seal.price.toFixed(2)}`} />
              {seal.sealSizeMm && <SpecCard label="Seal Size (MM)" value={seal.sealSizeMm} />}
              {seal.sealSizeInch && <SpecCard label='Seal Size (")' value={seal.sealSizeInch} />}
              {seal.shaftSizeMm && <SpecCard label="Shaft Size" value={seal.shaftSizeMm} />}
            </Stack>

            <Divider sx={{ mb: 3 }} />

            {/* Product Details */}
            <Typography variant="caption" fontWeight={900} color="primary"
              sx={{ letterSpacing: 1, display: 'block', mb: 1.5, textTransform: 'uppercase', fontSize: '0.7rem' }}>
              Product Details
            </Typography>
            <Box mb={4}>
              <FeatureRow label="Brand" value="Sealflex" />
              <FeatureRow label="Series" value={sealType} />
              {sealInfo && <FeatureRow label="Application" value={sealInfo.application} />}
              <FeatureRow label="Material" value="Silicon Carbide / Carbon" />
              <FeatureRow label="Seal Face" value="Lapped & Polished" />
              <FeatureRow label="O-Ring Material" value="NBR (Standard)" />
              <FeatureRow label="Temperature Range" value="-20°C to +120°C" />
              <FeatureRow label="Max Pressure" value="16 bar" />
              <FeatureRow label="Standard" value="DIN 24960 / EN 12756" />
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Trust badges */}
            <Stack direction="row" flexWrap="wrap" gap={2} mb={4}>
              {['OEM Compatible', 'Quality Assured', 'In Stock'].map(badge => (
                <Stack key={badge} direction="row" alignItems="center" spacing={0.5}>
                  <VerifiedIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                  <Typography variant="caption" fontWeight={600} color="text.secondary">{badge}</Typography>
                </Stack>
              ))}
            </Stack>

            {/* CTA */}
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCartIcon />}
                onClick={addToCart}
                sx={{
                  textTransform: 'none', fontWeight: 700,
                  borderRadius: '8px', px: 4, py: 1.5,
                  fontSize: '0.95rem'
                }}
              >
                Add to Cart
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  textTransform: 'none', fontWeight: 700,
                  borderRadius: '8px', px: 3, py: 1.5,
                  fontSize: '0.95rem'
                }}
              >
                Request Quote
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}