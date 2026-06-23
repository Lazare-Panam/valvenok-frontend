'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  Box, Container, Typography, Button, Divider,
  Card, CardContent, useTheme, alpha,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RFQModal from '../../../../Common/RFQCard/RFQModal';
import { ProductForRFQ } from '../../../../Common/RFQCard/RequestForQuoteCard';
import { FeaturedValve } from '../../page';

export const VSI_VALVES: FeaturedValve[] = [
  {
    id: 'vsi-atlas-15',
    name: 'Atlas 15 Severe Service Control Valve',
    category: 'Control Valves',
    categoryId: 'control-valves',
    brand: 'VSI – Valve Systems International',
    brandLogo: 'https://vsillc.com/wp-content/uploads/2026/02/Logo-2026-300x168.png',
    thumbnail: 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/Atlas-15.png',
    specs: [
      { label: 'NPS', value: '2"' },
      { label: 'Flow Capacity (Cv)', value: 'Up to 70' },
      { label: 'Rangeability', value: 'Up to 80:1 (ISA 75.11)' },
      { label: 'Operating Pressure', value: '0–5,000 psi DP (up to 10,000 psi with reduced trim)' },
      { label: 'Control Range', value: 'Up to 700:1 at ±3% accuracy' },
      { label: 'Noise Level', value: '< 60 dB in choked flow' },
      { label: 'Maintenance Cycle', value: '2+ years (vs. 3–6 months standard)' },
      { label: 'Ideal For', value: 'Highest capacity, high pressure, precision control in a 2" valve' },
    ],
  },
  {
    id: 'vsi-atlas-21',
    name: 'Atlas 21 Severe Service Control Valve',
    category: 'Control Valves',
    categoryId: 'control-valves',
    brand: 'VSI – Valve Systems International',
    brandLogo: 'https://vsillc.com/wp-content/uploads/2026/02/Logo-2026-300x168.png',
    thumbnail: 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/Atlas-21.png',
    specs: [
      { label: 'NPS', value: '3"' },
      { label: 'Flow Capacity (Cv)', value: 'Up to 130' },
      { label: 'Rangeability', value: 'Up to 58:1 (ISA 75.11)' },
      { label: 'Operating Pressure', value: '0–5,000 psi DP (up to 10,000 psi with reduced trim)' },
      { label: 'Control Range', value: 'Up to 700:1 at ±3% accuracy' },
      { label: 'Noise Level', value: '< 60 dB in choked flow' },
      { label: 'Maintenance Cycle', value: '2+ years (vs. 3–6 months standard)' },
      { label: 'Ideal For', value: 'Pump testing, storage blowdown, severe service control' },
    ],
  },
  {
    id: 'vsi-atlas-32',
    name: 'Atlas 32 Severe Service Control Valve',
    category: 'Control Valves',
    categoryId: 'control-valves',
    brand: 'VSI – Valve Systems International',
    brandLogo: 'https://vsillc.com/wp-content/uploads/2026/02/Logo-2026-300x168.png',
    thumbnail: 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/Atlas-21.png',
    specs: [
      { label: 'NPS', value: '4"' },
      { label: 'Flow Capacity (Cv)', value: 'Up to 300' },
      { label: 'Rangeability', value: 'Up to 58:1 (ISA 75.11)' },
      { label: 'Operating Pressure', value: '0–5,000 psi DP (up to 10,000 psi with reduced trim)' },
      { label: 'Control Range', value: 'Up to 700:1 at ±3% accuracy' },
      { label: 'Noise Level', value: '< 60 dB in choked flow' },
      { label: 'Maintenance Cycle', value: '2+ years (vs. 3–6 months standard)' },
      { label: 'Ideal For', value: 'Maximum capacity, high-flow severe service applications' },
    ],
  },
];

export const VSI_VALVE_RFQ: ProductForRFQ[] = VSI_VALVES.map((valve) => ({
  id: valve.id,
  name: valve.name,
  brand: valve.brand,
  category: valve.category,
  categoryId: valve.categoryId,
  subCategory: valve.category,
  thumbnail: valve.thumbnail,
  description: `${valve.name} by ${valve.brand} — engineered for severe service process control in the most demanding high-pressure, high-noise and erosive industrial environments.`,
  keySpecs: valve.specs,
  variantInfo: {
    count: 1,
    sizeRange: valve.specs.find(s => s.label === 'NPS')?.value ?? 'Contact for details',
  },
}));

function SimilarProductCard({ product }: { product: ProductForRFQ }) {
  const theme = useTheme();
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Card
        elevation={0}
        onClick={() => router.push(`/valves/industrial-valves/control-valves/${product.id}`)}
        sx={{
          borderRadius: 0,
          border: '1px solid',
          borderColor: 'divider',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 4px 16px ${alpha(theme.palette.common.black, 0.08)}`,
          },
        }}
      >
        <Box sx={{ bgcolor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 140, p: 2 }}>
          <img src={product.thumbnail} alt={product.name} style={{ maxHeight: 110, maxWidth: '100%', objectFit: 'contain' }} />
        </Box>
        <CardContent sx={{ p: 2 }}>
          <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
            {product.brand}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.2, mt: 0.5, mb: 1.5 }}
          >
            {product.name}
          </Typography>
          {product.keySpecs[0] && (
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
              {product.keySpecs[0].label}: {product.keySpecs[0].value}
            </Typography>
          )}
          <Button
            variant="outlined"
            size="small"
            fullWidth
            onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
            sx={{
              mt: 1.5, borderRadius: 0, fontWeight: 700, fontSize: '0.7rem',
              borderColor: 'primary.main', color: 'primary.main',
              '&:hover': { bgcolor: 'primary.main', color: '#fff' },
            }}
          >
            Request Quote
          </Button>
        </CardContent>
      </Card>
      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={product} />
    </>
  );
}

export default function VSIValveDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  const valve = VSI_VALVES.find((v) => v.id === id);
  const product = VSI_VALVE_RFQ.find((p) => p.id === id);
  const similarProducts = VSI_VALVE_RFQ.filter(
    (p) => p.categoryId === valve?.categoryId && p.id !== id
  ).slice(0, 3);

  if (!valve || !product) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        <Typography variant="h4" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 900 }}>PRODUCT NOT FOUND</Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.back()} sx={{ fontWeight: 700 }}>Go Back</Button>
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pb: 12 }}>
        <Container maxWidth="lg" sx={{ mt: 6 }}>
          <Grid container spacing={6}>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  bgcolor: '#fff',
                  border: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: 380,
                  p: 4,
                  position: 'sticky',
                  top: 24,
                }}
              >
                <img src={valve.thumbnail} alt={valve.name} style={{ maxHeight: 320, maxWidth: '100%', objectFit: 'contain' }} />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ display: 'flex', gap: 1, mb: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                <Box
                  sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    px: 2.5,
                    height: 48,
                    bgcolor: '#fff',
                    display: 'inline-flex',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={valve.brandLogo}
                    alt={valve.brand}
                    style={{ maxHeight: 36, maxWidth: 160, objectFit: 'contain' }}
                  />
                </Box>
              </Box>

              <Typography
                variant="h3"
                sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 100, textTransform: 'uppercase', lineHeight: 1, mb: 1 }}
              >
                {valve.name}
              </Typography>

              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
                {product.description}
              </Typography>

              <Divider sx={{ mb: 3 }} />

              <Typography
                variant="overline"
                sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, letterSpacing: 2, color: 'text.secondary', display: 'block', mb: 1.5 }}
              >
                Technical Specifications
              </Typography>
              <Box sx={{ border: '1px solid', borderColor: 'divider', mb: 4 }}>
                {valve.specs.map((spec, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      borderBottom: i < valve.specs.length - 1 ? '1px solid' : 'none',
                      borderColor: 'divider',
                    }}
                  >
                    <Box
                      sx={{
                        width: '40%', px: 2, py: 1.5,
                        bgcolor: alpha(theme.palette.primary.main, 0.04),
                        borderRight: '1px solid', borderColor: 'divider',
                        display: 'flex', alignItems: 'center',
                      }}
                    >
                      <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                        {spec.label}
                      </Typography>
                    </Box>
                    <Box sx={{ px: 2, py: 1.5, display: 'flex', alignItems: 'center' }}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>{spec.value}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Typography
                variant="overline"
                sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, letterSpacing: 2, color: 'text.secondary', display: 'block', mb: 1.5 }}
              >
                Key Benefits
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 4 }}>
                {[
                  'Engineered for severe service and high-pressure environments',
                  'Extended 2+ year maintenance cycles vs. industry standard',
                  'Ultra-low noise — under 60 dB in choked flow',
                  'Available for RFQ with fast lead times',
                ].map((benefit, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleOutlineIcon sx={{ color: 'primary.main', fontSize: 18 }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{benefit}</Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ContactSupportIcon />}
                  onClick={() => setModalOpen(true)}
                  sx={{
                    borderRadius: 0, fontWeight: 800, py: 1.75, px: 4, fontSize: '1rem',
                    boxShadow: 'none', '&:hover': { bgcolor: 'primary.dark', boxShadow: 'none' },
                  }}
                >
                  Request for Quote / Lead Time
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => router.push('/valves/industrial-valves/control-valves')}
                  sx={{
                    borderRadius: 0, fontWeight: 700, py: 1.75, px: 3, fontSize: '0.9rem',
                    borderColor: 'divider', color: 'text.primary',
                    '&:hover': { borderColor: 'text.primary' },
                  }}
                >
                  Browse {valve.category}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {similarProducts.length > 0 && (
          <Container maxWidth="lg" sx={{ mt: 10 }}>
            <Divider sx={{ mb: 6 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 4 }}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{ fontFamily: '"Barlow Condensed"', color: 'primary.main', fontWeight: 100, letterSpacing: 2 }}
                >
                  {valve.category}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 100, textTransform: 'uppercase', lineHeight: 1 }}
                >
                  Similar Products
                </Typography>
              </Box>
              <Button
                variant="text"
                onClick={() => router.push('/valves/industrial-valves/control-valves')}
                sx={{ fontWeight: 700, fontSize: '0.8rem', color: 'primary.main', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}
              >
                VIEW ALL →
              </Button>
            </Box>
            <Grid container spacing={3}>
              {similarProducts.map((similar) => (
                <Grid key={similar.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <SimilarProductCard product={similar} />
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </Box>

      <RFQModal open={modalOpen} onClose={() => setModalOpen(false)} product={product} />
    </>
  );
}