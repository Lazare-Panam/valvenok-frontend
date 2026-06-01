'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  Box, Container, Typography, Button, Chip, Divider,
  Card, CardContent, useTheme, alpha, Breadcrumbs,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { VALVES, DUMMY_RFQ_PRODUCTS } from '../page';
import RFQModal from '../../../Common/RFQCard/RFQModal';
import { ProductForRFQ } from '../../../Common/RFQCard/RequestForQuoteCard';

function SimilarProductCard({ product }: { product: ProductForRFQ }) {
  const theme = useTheme();
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Card
        elevation={0}
        onClick={() => router.push(`/valves/industrial-valves/${product.id}`)}
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

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  const valve = VALVES.find((v) => v.id === id);
  const product = DUMMY_RFQ_PRODUCTS.find((p) => p.id === id);
  const similarProducts = DUMMY_RFQ_PRODUCTS.filter(
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

        {/* Top bar */}
        <Box sx={{ bgcolor: 'text.primary', color: 'white', py: 4, borderBottom: '4px solid', borderColor: 'primary.main' }}>
          <Container maxWidth="lg">
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" sx={{ color: alpha('#fff', 0.4) }} />}
              sx={{ mb: 2 }}
            >
              <Typography
                onClick={() => router.push('/valves/industrial-valves')}
                sx={{ color: alpha('#fff', 0.5), fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', '&:hover': { color: '#fff' } }}
              >
                INDUSTRIAL VALVES
              </Typography>
              <Typography
                onClick={() => router.push('/valves/industrial-valves')}
                sx={{ color: alpha('#fff', 0.5), fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', '&:hover': { color: '#fff' } }}
              >
                {valve.category.toUpperCase()}
              </Typography>
              <Typography sx={{ color: 'primary.main', fontSize: '0.75rem', fontWeight: 700 }}>
                {valve.name.toUpperCase()}
              </Typography>
            </Breadcrumbs>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => router.back()}
              sx={{ color: alpha('#fff', 0.6), fontWeight: 700, fontSize: '0.75rem', px: 0, '&:hover': { color: '#fff', bgcolor: 'transparent' } }}
            >
              BACK
            </Button>
          </Container>
        </Box>

        {/* Hero */}
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
      px: 1.5,
      height: 24,
      bgcolor: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
    }}
  >
    <img
      src={valve.brandLogo}
      alt={valve.brand}
      style={{ maxHeight: 14, maxWidth: 100, objectFit: 'contain' }}
    />
  </Box>
  <Chip
    label={valve.category}
    size="small"
    variant="outlined"
    sx={{ borderRadius: 0, fontWeight: 700, fontSize: '0.7rem', height: 24 }}
  />
</Box>

              <Typography
                variant="h3"
                sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, mb: 1 }}
              >
                {valve.name}
              </Typography>

              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
                {product.description}
              </Typography>

              <Divider sx={{ mb: 3 }} />

              {/* Spec table */}
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

              {/* Benefits */}
              <Typography
                variant="overline"
                sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, letterSpacing: 2, color: 'text.secondary', display: 'block', mb: 1.5 }}
              >
                Key Benefits
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 4 }}>
                {[
                  'Engineered for demanding industrial environments',
                  'Precision flow control across full operating range',
                  'Backed by leading manufacturers & global support',
                  'Available for RFQ with fast lead times',
                ].map((benefit, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleOutlineIcon sx={{ color: 'primary.main', fontSize: 18 }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{benefit}</Typography>
                  </Box>
                ))}
              </Box>

              {/* CTAs */}
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
                  onClick={() => router.push('/valves/industrial-valves')}
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

        {/* Similar products */}
        {similarProducts.length > 0 && (
          <Container maxWidth="lg" sx={{ mt: 10 }}>
            <Divider sx={{ mb: 6 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 4 }}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{ fontFamily: '"Barlow Condensed"', color: 'primary.main', fontWeight: 800, letterSpacing: 2 }}
                >
                  {valve.category}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1 }}
                >
                  Similar Products
                </Typography>
              </Box>
              <Button
                variant="text"
                onClick={() => router.push('/valves/industrial-valves')}
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