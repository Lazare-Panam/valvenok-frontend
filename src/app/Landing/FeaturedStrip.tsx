'use client';

import { useState } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { PRODUCTS } from '../quick-order/product';
import { useCartStore } from '../cart/hooks/useCartStore';
import RelatedProductCard from '@/src/components/RelatedProductCard';

const FILTER_TABS = ['Male Connector', 'Union Elbow', 'Hex Nipple', 'Bulkhead Union', 'Male Elbow'];

const TAB_MAP: Record<string, string[]> = {
  'Male Connector': ['Male Connector'],
  'Union Elbow':    ['Union Elbow'],
  'Hex Nipple':     ['Hex Nipple'],
  'Bulkhead Union': ['Bulkhead Union'],
  'Male Elbow':     ['Male Elbow'],
};

const PICKS: Array<{
  sku: string;
  wasPrice: number;
  badge: { label: string; color: 'green' | 'blue' | 'dark' };
}> = [
  // Male Connector
  { sku: 'PMC-04-4G-SS',  wasPrice: 10.70, badge: { label: '-23%', color: 'green' } },
  { sku: 'PMC-06-6G-SS',  wasPrice: 15.76, badge: { label: '-23%', color: 'green' } },
  { sku: 'PMC-08-8G-SS',  wasPrice: 29.21, badge: { label: '-23%', color: 'green' } },
  { sku: 'PMC-M08-4G-SS', wasPrice: 11.52, badge: { label: '-23%', color: 'green' } },
  // Union Elbow
  { sku: 'PUE-04-SS',     wasPrice: 17.69, badge: { label: '-23%', color: 'green' } },
  { sku: 'PUE-06-SS',     wasPrice: 23.49, badge: { label: '-23%', color: 'green' } },
  { sku: 'PUE-M08-SS',    wasPrice: 21.81, badge: { label: '-23%', color: 'green' } },
  { sku: 'PUE-M10-SS',    wasPrice: 23.49, badge: { label: '-23%', color: 'green' } },
  // Hex Nipple
  { sku: 'PHN-4G-SS',     wasPrice: 8.25,  badge: { label: '-23%', color: 'green' } },
  { sku: 'PHN-4G-SS-10K', wasPrice: 9.94,  badge: { label: 'H2',   color: 'blue'  } },
  { sku: 'PHN-8G-SS',     wasPrice: 21.59, badge: { label: '-23%', color: 'green' } },
  { sku: 'PHN-8G-SS-10K', wasPrice: 25.80, badge: { label: 'H2',   color: 'blue'  } },
  // Bulkhead Union
  { sku: 'PBU-4G-SS',     wasPrice: 14.85, badge: { label: '-23%', color: 'green' } },
  { sku: 'PBU-6G-SS',     wasPrice: 22.37, badge: { label: '-23%', color: 'green' } },
  { sku: 'PBU-8G-SS',     wasPrice: 37.65, badge: { label: '-23%', color: 'green' } },
  { sku: 'PBU-M08-SS',    wasPrice: 23.02, badge: { label: 'New',  color: 'dark'  } },
  // Male Elbow
  { sku: 'PME-04-4R-SS',  wasPrice: 17.37, badge: { label: '-23%', color: 'green' } },
  { sku: 'PME-M06-4R-SS', wasPrice: 17.37, badge: { label: '-23%', color: 'green' } },
  { sku: 'PME-M08-4R-SS', wasPrice: 19.97, badge: { label: '-23%', color: 'green' } },
  { sku: 'PME-M10-4R-SS', wasPrice: 23.73, badge: { label: '-23%', color: 'green' } },
];

const BADGE_SX = {
  green: { bgcolor: '#166534', color: '#bbf7d0' },
  blue:  { bgcolor: '#1e3a5f', color: '#93c5fd' },
  dark:  { bgcolor: 'rgba(0,0,0,0.55)', color: '#ffffff' },
};

export default function BestSellers() {
  const [activeTab, setActiveTab] = useState('Male Connector');
  const { addItem } = useCartStore();

  const enriched = PICKS
    .map(p => ({ ...p, product: PRODUCTS.find(x => x.sku === p.sku) }))
    .filter(p => p.product);

  const visible = enriched.filter(p =>
    TAB_MAP[activeTab]?.some(c => p.product!.category.includes(c)) ?? false
  );

  const handleAddToCart = (e: React.MouseEvent, product: typeof PRODUCTS[0]) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.sku,
      name: product.name,
      description: product.meta,
      partNumber: product.sku,
      price: product.price,
      quantity: 1,
      cloudinaryId: product.cloudinaryId,
    });
  };

  return (
    <Box component="section" sx={{ bgcolor: 'primary.main', py: { xs: 5, md: 8 } }}>
      <Container maxWidth="xl">

        {/* ── Header row ── */}
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
              Featured Products ——
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
    
    flexShrink: 0,
  }} />
  <Typography sx={{
    fontFamily: '"Barlow Condensed", sans-serif',
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '.1em',
    textTransform: 'uppercase',
    color: '#ffff',
    opacity: 0.75,
  }}>
    All products stocked in the UK — extremely low lead times, ready to ship
  </Typography>
</Box>

          {/* Filter tabs */}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
            {FILTER_TABS.map(tab => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                sx={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  px: 2,
                  py: 0.75,
                  borderRadius: 0,
                  minWidth: 0,
                  border: '1px solid',
                  borderColor: activeTab === tab ? 'primary.contrastText' : 'rgba(255,255,255,0.3)',
                  bgcolor:     activeTab === tab ? 'rgba(255,255,255,0.15)' : 'transparent',
                  color:       activeTab === tab ? 'primary.contrastText'   : 'rgba(255,255,255,0.55)',
                  '&:hover': {
                    bgcolor:     'rgba(255,255,255,0.1)',
                    borderColor: 'primary.contrastText',
                    color:       'primary.contrastText',
                  },
                }}
              >
                {tab}
              </Button>
            ))}
          </Box>
        </Box>

        {/* ── Cards grid ── */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 2,
        }}>
          {visible.map(({ product, wasPrice, badge }) => (
            <Box
              key={product!.sku}
              sx={{ position: 'relative', display: 'flex', flexDirection: 'column' }}
            >
              {/* Badge — floats over the card */}
              <Box sx={{
                position: 'absolute',
                top: 10,
                left: 10,
                zIndex: 10,
                px: 1,
                py: 0.4,
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                ...BADGE_SX[badge.color],
              }}>
                {badge.label}
              </Box>

              {/* Was price — floats top right */}
              <Box sx={{
                position: 'absolute',
                top: 10,
                right: 10,
                zIndex: 10,
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: 11,
                color: 'rgba(0,0,0,0.35)',
                textDecoration: 'line-through',
              }}>
                £{wasPrice.toFixed(2)}
              </Box>

              {/* The actual card — unchanged RelatedProductCard */}
              <RelatedProductCard product={product!} />

              {/* Add to Cart — sits below the card, full width */}
             <Button
  fullWidth
  size="small"
  startIcon={<ShoppingCartIcon sx={{ fontSize: '14px !important' }} />}
  onClick={(e) => handleAddToCart(e, product!)}
  sx={{
    fontFamily: '"Barlow Condensed", sans-serif',
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: '.1em',
    textTransform: 'uppercase',
    borderRadius: 0,
    py: 1,
    bgcolor: '#ffffff',
    color: 'primary.main',
    border: '1px solid rgba(255,255,255,0.25)',
    '&:hover': { bgcolor: 'rgba(255,255,255,0.85)' },
  }}
>
  Add to Cart
</Button>
            </Box>
          ))}
        </Box>

        {/* ── View all CTA ── */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            href="/quick-order"
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '.15em',
              textTransform: 'uppercase',
              px: 5,
              py: 1.2,
              borderRadius: 0,
              border: '1px solid rgba(255,255,255,0.35)',
              color: 'rgba(255,255,255,0.65)',
              '&:hover': {
                border: '1px solid',
                borderColor: 'primary.contrastText',
                color: 'primary.contrastText',
                bgcolor: 'transparent',
              },
            }}
          >
            View All Products →
          </Button>
        </Box>

      </Container>
    </Box>
  );
}