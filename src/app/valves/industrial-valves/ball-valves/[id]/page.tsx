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

export const BALL_VALVES: FeaturedValve[] = [
  {
    id: 'cameron-wkm-370d',
    name: 'WKM 370D Flanged Ball Valve',
    category: 'Ball Valves',
    categoryId: 'ball-valves',
    brand: 'Cameron',
    brandLogo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/cameron-logo.png',
    thumbnail: 'https://pblol2.blob.core.windows.net/valvenok-images/products/featured/wkm-370d.jpg',
    specs: [
      { label: 'Size Range', value: '2"–16" | 50–400 mm' },
      { label: 'Pressure Class', value: 'ASME CL 150–2500' },
      { label: 'End Connections', value: 'Flanged' },
      { label: 'Service', value: 'High-Integrity Isolation' },
      { label: 'Standard', value: 'API Rated' },
      { label: 'Applications', value: 'Oil & Gas, Petrochemical, Refining' },
    ],
  },
  {
    id: 'bettis-rpx',
    name: 'RPX Actuated Ball Valve',
    category: 'Ball Valves',
    categoryId: 'ball-valves',
    brand: 'Bettis',
    brandLogo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/bettis-logo.png',
    thumbnail: 'https://pblol2.blob.core.windows.net/valvenok-images/products/featured/rps-actuated-ss.webp',
    specs: [
      { label: 'Size Range', value: 'NPS 1/2–8 | DN 15–200' },
      { label: 'Pressure Class', value: 'ANSI 150' },
      { label: 'End Connections', value: 'Flanged' },
      { label: 'Body Material', value: 'Stainless Steel' },
      { label: 'Operation', value: 'Actuated' },
      { label: 'Service', value: 'Automated Flow Control' },
    ],
  },
  {
  id: 'pf-deltaflux',
  name: 'Deltaflux Trunnion Mounted Control Ball Valve',
  category: 'Ball Valves',
  categoryId: 'ball-valves',
  brand: 'Pietro Fiorentini',
  brandLogo: 'https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/logo.svg',
  thumbnail: 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/ball-valves/deltaflux.jpg',
  specs: [
    { label: 'Size Range', value: '2"–48" | NPS 50–1200' },
    { label: 'Pressure Rating', value: 'ANSI Class 150–2500' },
    { label: 'Design Temperature', value: '-196°C to +425°C (-321°F to +800°F)' },
    { label: 'Connections', value: 'RF & RTJ Flanged (ASME B16.5 / B16.47) / Butt Weld (ASME B16.25)' },
    { label: 'Construction', value: 'Side Entry Bolted / Welded / Top Entry Bolted' },
    { label: 'Seat Configuration', value: 'Unidirectional / DIB-1 / DIB-2 / DBB per API 6D' },
    { label: 'Metallic Materials', value: 'Carbon Steel, Stainless Steel, Duplex, Super-Duplex, Exotic Alloys' },
    { label: 'Soft Parts', value: 'RPTFE, PEEK, FKM, FFKM, HNBR, Graphite' },
    { label: 'Coatings', value: 'ENP, Weld Overlay (316SS / N06625), HVOF (TCC / CCC)' },
    { label: 'Certifications', value: 'API 6D, API 6A, API 6DSS, IEC 61508 SIL 2, PED 2014/68/EU' },
    { label: 'Fire Safe', value: 'API 607 / API 6FA' },
    { label: 'Fugitive Emissions', value: 'ISO 15848-1' },
    { label: 'Operator', value: 'Bare Stem / Pneumatic / Hydraulic / Electric Actuator' },
  ],
},
];

export const BALL_VALVE_RFQ: ProductForRFQ[] = BALL_VALVES.map((valve) => ({
  id: valve.id,
  name: valve.name,
  brand: valve.brand,
  category: valve.category,
  categoryId: valve.categoryId,
  subCategory: valve.category,
  thumbnail: valve.thumbnail,
  description: `${valve.name} by ${valve.brand} — engineered for reliable, leak-tight isolation and flow control in demanding industrial process conditions.`,
  keySpecs: valve.specs,
  variantInfo: {
    count: 1,
    sizeRange: valve.specs.find(s => s.label === 'Size Range')?.value ?? 'Contact for details',
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
        onClick={() => router.push(`/valves/ball-valves/${product.id}`)}
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

export default function BallValveDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  const valve = BALL_VALVES.find((v) => v.id === id);
  const product = BALL_VALVE_RFQ.find((p) => p.id === id);
  const similarProducts = BALL_VALVE_RFQ.filter(
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

            {/* Image */}
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

            {/* Details */}
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
                  'Engineered for demanding industrial environments',
                  'Reliable leak-tight isolation across full pressure range',
                  'Sourced from trusted global manufacturers',
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
                  onClick={() => router.push('/valves/industrial-valves/ball-valves')}
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
                onClick={() => router.push('/valves/industrial-valves/ball-valves')}
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