'use client';

import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Chip,
  Button,
  Stack,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const categories = [
  {
    slug: 'fittings-valves',
    href: '/fittings',
    name: 'Fittings & Valves',
    tagline: 'Ball, gate, check & butterfly',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/hex_couplings.png',
    count: 120,
  },
  {
    slug: 'pneumatic',
    href: '/pneumatic',
    name: 'Pneumatic',
    tagline: 'Cylinders, FRLs & solenoids',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/pneumatic-cylinder/DSC_7050_ESNC-100x100.png',
    count: 84,
  },
  {
    slug: 'filters',
    href: '/filters',
    name: 'Filters',
    tagline: 'Strainers & inline filtration',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/filters/DFM_Mega_Flow_Rate_Filter.png',
    count: 46,
  },
  {
    slug: 'actuators',
    href: '/actuators',
    name: 'Actuators',
    tagline: 'Pneumatic & electric drives',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/actuator_no-bg.png',
    count: 58,
  },
  {
    slug: 'industrial-valves',
    href: '/flow-control',
    name: 'Industrial Valves',
    tagline: 'Heavy-duty process valves',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/industrial-valves/industrial-valves.jpg',
    count: 96,
  },
  {
    slug: 'pumps-seals',
    href: '/pumps-seals',
    name: 'Pumps & Seals',
    tagline: 'Centrifugal pumps & gaskets',
    image: 'https://pblol2.blob.core.windows.net/valvenok-images/products/mechanical-seals/CS53CX.png',
    count: 72,
  },
];

export default function ProductsPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* Banner */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 8, md: 12 },
          color: '#fff',
          overflow: 'hidden',
          backgroundImage: `
            linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.4) 100%),
            url('https://pblol2.blob.core.windows.net/valvenok-images/products/category-banner.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ maxWidth: 720 }}>
            <Chip
              label="Our catalogue"
              sx={{
                alignSelf: 'flex-start',
                bgcolor: 'rgba(255,255,255,0.2)',
                color: '#fff',
                fontWeight: 500,
              }}
            />
            <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: 36, md: 52 } }}>
              Products & solutions
            </Typography>
            <Typography sx={{ fontSize: { xs: 16, md: 18 }, opacity: 0.95, maxWidth: 600 }}>
              Industrial fittings, valves, actuators and flow-control equipment trusted by engineers across oil & gas, water treatment and manufacturing.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#fff',
                  color: '#4a9a3a',
                  fontWeight: 600,
                  '&:hover': { bgcolor: '#f0f0f0' },
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Request a quote
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'rgba(255,255,255,0.6)',
                  color: '#fff',
                  fontWeight: 500,
                  '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                Download catalog
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Categories grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Stack spacing={1} sx={{ mb: 5 }}>
          <Typography variant="overline" sx={{ color: 'primary.dark', fontWeight: 600, letterSpacing: 1.2 }}>
            Browse by category
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary' }}>
            Explore the full range
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 600 }}>
            Six core categories covering every stage of your flow-control system.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {categories.map((cat) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cat.slug}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'rgba(0,0,0,0.08)',
                  boxShadow: 'none',
                  overflow: 'hidden',
                  bgcolor: '#fff',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 16px 40px rgba(74,154,58,0.12)',
                    borderColor: 'rgba(74,154,58,0.25)',
                    '& .cat-image': { transform: 'scale(1.06)' },
                    '& .view-link': { transform: 'translateX(4px)' },
                  },
                }}
              >
                <CardActionArea
                  component={Link}
                  href={cat.href}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                >

                  {/* Image area — pure white background */}
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      height: 240,
                      bgcolor: '#ffffff',
                      borderBottom: '1px solid',
                      borderColor: 'rgba(0,0,0,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 3,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={cat.image}
                      alt={cat.name}
                      className="cat-image"
                      sx={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                    <Chip
                      label={`${cat.count} products`}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 14,
                        right: 14,
                        height: 24,
                        bgcolor: '#f5f7f4',
                        color: 'primary.dark',
                        fontWeight: 600,
                        fontSize: 11,
                        letterSpacing: 0.3,
                        border: '1px solid rgba(74,154,58,0.15)',
                      }}
                    />
                  </Box>

                  {/* Content area — slight tint to separate from image */}
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      p: 3,
                      bgcolor: '#fafbf9',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 0.5,
                        color: 'text.primary',
                        fontSize: 18,
                      }}
                    >
                      {cat.name}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: 14, mb: 2 }}>
                      {cat.tagline}
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={0.5}
                      className="view-link"
                      sx={{
                        color: 'primary.dark',
                        fontWeight: 600,
                        fontSize: 14,
                        transition: 'transform 0.25s ease',
                      }}
                    >
                      <span>View products</span>
                      <ArrowForwardIcon sx={{ fontSize: 16 }} />
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA strip */}
        <Box
          sx={{
            mt: 8,
            p: { xs: 4, md: 6 },
            borderRadius: 3,
            bgcolor: '#fff',
            border: '1px solid rgba(74,154,58,0.15)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              Can't find what you're looking for?
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Our team sources custom and hard-to-find parts. Tell us what you need.
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ fontWeight: 600, whiteSpace: 'nowrap' }}
          >
            Contact sales
          </Button>
        </Box>
      </Container>
    </Box>
  );
}