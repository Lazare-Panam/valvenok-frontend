'use client';

import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import RFQModal from '../Common/RFQCard/RFQModal';
import { ProductForRFQ } from '../Common/RFQCard/RequestForQuoteCard';
import { FeaturedValve } from './FeaturedValvesData';

export default function FeaturedValveCard({ valve }: { valve: FeaturedValve }) {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const rfqProduct: ProductForRFQ = {
    id: valve.id,
    name: valve.name,
    brand: valve.brand,
    category: valve.category,
    categoryId: valve.categoryId,
    thumbnail: valve.thumbnail,
    description: valve.specs.map(s => `${s.label}: ${s.value}`).join(' | '),
    keySpecs: valve.specs,
    variantInfo: { count: 0, sizeRange: '' },
  };

  return (
    <>
      {/* Outer reserves layout space — inner scales freely */}
      <Box
        sx={{
          flexShrink: 0,
          width: { xs: '280px', md: '300px' },
          position: 'relative',
          zIndex: hovered ? 10 : 1,
        }}
      >
        <Box
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          sx={{
            position: 'relative',
            bgcolor: '#fff',
            border: '1px solid',
            borderColor: hovered ? 'primary.main' : 'divider',
            display: 'flex',
            flexDirection: 'column',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
            boxShadow: hovered ? '0 20px 48px rgba(0,0,0,0.14)' : 'none',
          }}
        >
          {/* Brand logo — top right */}
          <Box sx={{
            position: 'absolute', top: 10, right: 12, zIndex: 3,
            maxWidth: 80, height: 26,
            display: 'flex', alignItems: 'center',
            bgcolor: '#fff', px: 0.5,
          }}>
            <Box
              component="img"
              src={valve.brandLogo}
              alt={valve.brand}
              sx={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', opacity: 0.7 }}
            />
          </Box>

          {/* Product image */}
          <Box sx={{
            height: 200,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            bgcolor: '#ffffff',
            borderBottom: '1px solid', borderColor: 'divider',
            p: 3, overflow: 'hidden',
          }}>
            <Box
              component="img"
              src={valve.thumbnail}
              alt={valve.name}
              sx={{ maxHeight: 130, maxWidth: '100%', objectFit: 'contain' }}
            />
          </Box>

          {/* Text content */}
          <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column' }}>

            <Typography sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 900, fontSize: '1.05rem',
              textTransform: 'uppercase', lineHeight: 1.15,
              color: 'text.primary', mb: 1.5,
            }}>
              {valve.name}
            </Typography>

            {/* Specs — only visible on hover */}
            <Box sx={{
              maxHeight: hovered ? '200px' : 0,
              opacity: hovered ? 1 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.3s ease, opacity 0.3s ease, margin-bottom 0.3s ease',
              mb: hovered ? 2 : 0,
            }}>
              {valve.specs.map((s, i) => (
                <Box key={i} sx={{ display: 'flex', gap: 0.5, mb: 0.5 }}>
                  <Typography sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '11px', fontWeight: 700,
                    color: 'text.secondary', whiteSpace: 'nowrap',
                  }}>
                    {s.label}:
                  </Typography>
                  <Typography sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '11px', fontWeight: 600,
                    color: 'text.primary',
                  }}>
                    {s.value}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              fullWidth
              size="small"
              startIcon={<ContactSupportIcon sx={{ fontSize: '14px !important' }} />}
              onClick={() => setModalOpen(true)}
              sx={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800, fontSize: '11px',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                borderRadius: 0, py: 1.2,
                bgcolor: hovered ? '#61D649' : 'primary.main',
                color: hovered ? '#000' : '#fff',
                boxShadow: 'none',
                transition: 'all 0.25s ease',
                '&:hover': { bgcolor: '#61D649', color: '#000', boxShadow: 'none' },
              }}
            >
              Request for Quote
            </Button>
          </Box>
        </Box>
      </Box>

      <RFQModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={rfqProduct}
      />
    </>
  );
}