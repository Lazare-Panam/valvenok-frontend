'use client';

import { Box, Container, Typography, Card, Stack } from '@mui/material';
import Link from 'next/link';
import Reveal from '@/src/app/Common/Reveal';

const BRAND_TILES = [
  {
    name: 'Panam',
    logo: 'https://pblol2.blob.core.windows.net/panam-images/panam-resize_smallest.jpg',
    desc: 'Instrumentation valves and fittings for global process industries.',
    href: '/quick-order',
    external: false,
  },
  {
    name: 'Value Valves',
    logo: 'https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/logo.svg',
    desc: 'Butterfly valves and flow control solutions for industrial piping systems.',
    href: '/valves/industrial-valves/butterfly-valves/centric-butterfly-valve/products',
    external: false,
  },
  {
    name: 'Mars Valves',
    logo: 'https://pblol2.blob.core.windows.net/valvenok-images/brands/mars.png',
    desc: 'Industrial valve solutions for a wide range of flow control applications.',
    href: 'https://www.marsvalveuk.com/products/one-piece-ball-valves/variants',
    external: true,
  },
];

export default function BestSellers() {
  return (
    <Box component="section" sx={{ bgcolor: 'primary.main', py: { xs: 5, md: 8 } }}>
      <Container maxWidth="xl">

        {/* ── Header row ── */}
        <Reveal>
        <Box sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
          mb: 4,
        }}>
          <Box>
            <Typography sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: 'primary.contrastText',
              opacity: 0.55,
              display: 'block',
              mb: 0.5,
            }}>
              Featured Brands ——
            </Typography>
            <Typography sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 900,
              fontSize: { xs: 40, md: 56 },
              lineHeight: 0.88,
              textTransform: 'uppercase',
              color: 'primary.contrastText',
            }}>
              Best<br />Sellers
            </Typography>
          </Box>

          {/* ── Stock/lead time note ── */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            mb: 3,
          }}>
            <Box sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: 'primary.contrastText',
              flexShrink: 0,
            }} />
            <Typography sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: '#ffffff',
              opacity: 0.75,
            }}>
              All products stocked in the UK — extremely low lead times, ready to ship
            </Typography>
          </Box>
        </Box>
        </Reveal>

        {/* ── Brand tiles ── */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
          gap: 2,
        }}>
          {BRAND_TILES.map((brand, i) => (
            <Reveal key={brand.name} delay={i * 100}>
            <Box
              component={brand.external ? 'a' : Link}
              href={brand.href}
              target={brand.external ? '_blank' : undefined}
              rel={brand.external ? 'noopener noreferrer' : undefined}
              sx={{
                display: 'block',
                height: '100%',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 0,
                  border: '1px solid rgba(255,255,255,0.25)',
                  bgcolor: '#ffffff',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    borderColor: 'primary.contrastText',
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                  },
                }}
              >
                <Box sx={{ height: '100%', p: 4 }}>
                  <Stack spacing={3} alignItems="center" textAlign="center">
                    <Box
                      sx={{
                        height: 80,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.8,
                        transition: 'all 0.3s ease',
                        '.MuiCard-root:hover &': { opacity: 1 },
                      }}
                    >
                      <Box
                        component="img"
                        src={brand.logo}
                        alt={brand.name}
                        sx={{
                          maxHeight: '100%',
                          maxWidth: '180px',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: '"Barlow Condensed"',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          mb: 1,
                          color: 'text.primary',
                        }}
                      >
                        {brand.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          px: 2,
                        }}
                      >
                        {brand.desc}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Card>
            </Box>
            </Reveal>
          ))}
        </Box>

        {/* ── View all CTA ── */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Box
            component={Link}
            href="/brands"
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '.15em',
              textTransform: 'uppercase',
              px: 5,
              py: 1.2,
              display: 'inline-block',
              border: '1px solid rgba(255,255,255,0.35)',
              color: 'rgba(255,255,255,0.65)',
              textDecoration: 'none',
              '&:hover': {
                border: '1px solid',
                borderColor: 'primary.contrastText',
                color: 'primary.contrastText',
              },
            }}
          >
            View All Brands →
          </Box>
        </Box>

      </Container>
    </Box>
  );
}