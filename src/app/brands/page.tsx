'use client';

import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardActionArea, 
  alpha, 
  Stack 
} from '@mui/material';
import Grid from '@mui/material/Grid';
import LaunchIcon from '@mui/icons-material/Launch';

const BRANDS = [
  { name: 'PANAM', logo: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769097040/1_jdvwbk.png", link: 'https://www.panamvalve.com/', desc: 'Instrumentation valves and fittings for global process industries.' },
  { name: 'Batu', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1774530741/logo_i2lhxi.png', link: 'https://www.batuvalve.com/', desc: 'Specialized flow control and boiler valve solutions.' },
  { name: 'Spac', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1774530706/SPAC-Without-Baseline-Logo-1-2_ii1dai_wsutjm.webp', link: 'https://spacpneumatic.co.uk/', desc: 'Pneumatic components and industrial automation systems.' },
  { name: 'Tormac', logo: 'https://tormacpumps.com/wp-content/uploads/2025/06/tormac_logo.svg', link: 'https://tormacpumps.com/', desc: 'High-efficiency submersible and peripheral pumping systems.' },
  { name: 'Emerson', logo: 'https://www.emerson.com/resource/blob/emerson-logo-compressed--data-5970556.png', link: '#', desc: 'Process automation and instrumentation engineering.' },
  { name: 'Siemens', logo: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1774531009/download_1_lwfn54.png', link: '#', desc: 'Power generation and industrial control technology.' },
  { name: 'Endress Hausser', logo: 'https://www.uk.endress.com/images/logo/EH_Logo-d9672165.svg', link: '#', desc: 'Laboratory and process automation instrumentation.' },
];

export default function BrandsPage() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      
      {/* --- HERO SECTION --- */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', pt: 15, pb: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontWeight: 800,
              letterSpacing: '0.4em',
              opacity: 0.8,
            }}
          >
            Our Ecosystem
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Barlow Condensed"',
              fontSize: { xs: '3.5rem', md: '5.5rem' },
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 0.9,
              mt: 1,
            }}
          >
            Authorized <br /> Partners
          </Typography>
          <Typography sx={{ mt: 3, maxWidth: 600, fontSize: '1.2rem', opacity: 0.9 }}>
            We distribute high-performance components from the world's most 
            trusted engineering brands, ensuring reliability in every installation.
          </Typography>
        </Container>
      </Box>

      {/* --- BRANDS GRID --- */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={3}>
          {BRANDS.map((brand) => (
            <Grid key={brand.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 0,
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                  },
                }}
              >
                <CardActionArea 
                  href={brand.link} 
                  target="_blank" 
                  sx={{ height: '100%', p: 4 }}
                >
                  <Stack spacing={3} alignItems="center" textAlign="center">
                    {/* Logo Container */}
                    <Box
                      sx={{
                        height: 80,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                       
                        opacity: 0.8,
                        transition: 'all 0.3s ease',
                        '.MuiCard-root:hover &': {
                          filter: 'grayscale(0%)',
                          opacity: 1,
                        },
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
                        }}
                      >
                        {brand.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ color: 'text.secondary', minHeight: '3em', px: 2 }}
                      >
                        {brand.desc}
                      </Typography>
                    </Box>

                    <Stack 
                      direction="row" 
                      spacing={1} 
                      alignItems="center" 
                      sx={{ 
                        color: 'primary.main', 
                        fontSize: '0.75rem', 
                        fontWeight: 900,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase'
                      }}
                    >
                      <span>Visit Website</span>
                      <LaunchIcon sx={{ fontSize: 14 }} />
                    </Stack>
                  </Stack>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* --- CONTACT CTA --- */}
        <Box 
          sx={{ 
            mt: 15, 
            p: 6, 
            bgcolor: alpha('#61D649', 0.05), 
            border: '1px dashed', 
            borderColor: 'primary.main',
            textAlign: 'center' 
          }}
        >
          <Typography variant="h4" sx={{ fontFamily: '"Barlow Condensed"', fontWeight: 800, mb: 1 }}>
            LOOKING FOR A SPECIFIC MANUFACTURER?
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 3 }}>
            We have access to an extensive global supply chain beyond what is listed here.
          </Typography>
          <Typography 
            component="a" 
            href="/contact"
            sx={{ 
              color: 'primary.main', 
              fontWeight: 900, 
              textDecoration: 'none',
              borderBottom: '2px solid'
            }}
          >
            INQUIRE ABOUT BULK SUPPLY
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}