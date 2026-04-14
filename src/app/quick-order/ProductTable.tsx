'use client';

import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/material/Chip';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { alpha } from '@mui/material/styles';
import { PRODUCTS, CATEGORIES } from './product';
import { useCartStore } from '../cart/hooks/useCartStore';

export default function ProductTable() {
  const [search, setSearch]                 = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const { items, addItem }                  = useCartStore();

  const isInCart = (sku: string) => items.some((i) => i.id === sku);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const matchQ   = !q || p.sku.toLowerCase().includes(q) || p.name.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [search, activeCategory]);

  const handleAdd = (product: typeof PRODUCTS[0]) => {
    addItem({
      id:           product.sku,
      name:         product.name,
      description:  product.category,
      partNumber:   product.sku,
      price:        product.price,
      quantity:     1,
      cloudinaryId: product.cloudinaryId,
    });
  };

  return (
    <Box sx={{ flex: 1, minWidth: 0 }}>

      {/* Search */}
      <TextField
        fullWidth
        placeholder="Search by part number or description..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
            </InputAdornment>
          ),
          endAdornment: search ? (
            <InputAdornment position="end">
              <IconButton size="small" onClick={() => setSearch('')}>
                <CloseIcon sx={{ fontSize: 15 }} />
              </IconButton>
            </InputAdornment>
          ) : null,
          sx: {
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: '14px',
            bgcolor: 'background.default',
            '& fieldset': { borderColor: 'divider' },
            '&:hover fieldset': { borderColor: 'primary.main !important' },
            '&.Mui-focused fieldset': { borderColor: 'primary.main !important', borderWidth: '1px !important' },
          },
        }}
        sx={{ mb: 2.5 }}
      />

      {/* Category chips */}
      <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mb: 3 }}>
        {CATEGORIES.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            size="small"
            onClick={() => setActiveCategory(cat)}
            sx={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              borderRadius: '3px',
              height: '26px',
              bgcolor: activeCategory === cat ? 'primary.main' : (t) => alpha(t.palette.text.primary, 0.06),
              color: activeCategory === cat ? 'text.primary' : 'text.secondary',
              border: '1px solid',
              borderColor: activeCategory === cat ? 'primary.main' : 'divider',
              '&:hover': { bgcolor: activeCategory === cat ? 'primary.dark' : (t) => alpha(t.palette.primary.main, 0.08) },
            }}
          />
        ))}
      </Box>

      {/* Count */}
      <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'text.secondary', mb: 1.5 }}>
        {`${filtered.length} Result${filtered.length !== 1 ? 's' : ''}`}
      </Typography>

      {/* Table */}
      <Box sx={{ border: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>

        {/* Header */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '48px 160px 1fr 80px 100px', px: 2.5, py: 1.25, bgcolor: 'text.primary', gap: 2 }}>
          {['', 'Part Number', 'Description', 'Price', ''].map((h, i) => (
            <Typography key={i} sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: (t) => alpha(t.palette.common.white, 0.5) }}>
              {h}
            </Typography>
          ))}
        </Box>

        {filtered.length === 0 ? (
          <Box sx={{ px: 3, py: 5, textAlign: 'center' }}>
            <Typography sx={{ color: 'text.secondary', fontFamily: '"Barlow Condensed", sans-serif', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              No parts found
            </Typography>
          </Box>
        ) : (
          filtered.map((product, i) => {
            const inCart = isInCart(product.sku);
            return (
              <Box
                key={product.sku}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '48px 160px 1fr 80px 100px',
                  px: 2.5,
                  py: 1.5,
                  gap: 2,
                  alignItems: 'center',
                  bgcolor: inCart
                    ? (t) => alpha(t.palette.primary.main, 0.06)
                    : i % 2 === 0 ? 'background.default' : (t) => alpha(t.palette.text.primary, 0.02),
                  borderBottom: i < filtered.length - 1 ? '1px solid' : 'none',
                  borderColor: 'divider',
                  borderLeft: '3px solid',
                  borderLeftColor: inCart ? 'primary.main' : 'transparent',
                  transition: 'all 0.15s',
                  '&:hover': { bgcolor: (t) => alpha(t.palette.primary.main, 0.05) },
                }}
              >
                {/* ── IMAGE ── */}
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    flexShrink: 0,
                    border: '1px solid',
                    borderColor: 'divider',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: (t) => alpha(t.palette.text.primary, 0.03),
                  }}
                >
                  {product.cloudinaryId ? (
                    <img
                      src={product.cloudinaryId}
                      alt={product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  ) : (
                    <Typography sx={{ fontSize: '8px', fontWeight: 700, fontFamily: '"Barlow Condensed", sans-serif', color: 'text.secondary', opacity: 0.4, letterSpacing: '0.05em' }}>
                      IMG
                    </Typography>
                  )}
                </Box>

                {/* ── SKU ── */}
                <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'primary.main' }}>
                  {product.sku}
                </Typography>

                {/* ── NAME + CATEGORY ── */}
                <Box>
                  <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '13px', fontWeight: 600, color: 'text.primary', lineHeight: 1.4 }}>
                    {product.name}
                  </Typography>
                  <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'text.secondary', mt: 0.25 }}>
                    {product.category}
                  </Typography>
                </Box>

                {/* ── PRICE ── */}
                <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '13px', fontWeight: 700, color: 'text.primary' }}>
                  {`£${product.price.toFixed(2)}`}
                </Typography>

                {/* ── ADD BUTTON ── */}
                <Button
                  size="small"
                  variant={inCart ? 'contained' : 'outlined'}
                  onClick={() => !inCart && handleAdd(product)}
                  sx={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    minWidth: 0,
                    px: 1.5,
                    py: 0.6,
                    borderWidth: '1px',
                    bgcolor: inCart ? 'primary.main' : 'transparent',
                    borderColor: inCart ? 'primary.main' : 'divider',
                    color: inCart ? 'text.primary' : 'text.secondary',
                    boxShadow: 'none',
                    '&:hover': { boxShadow: 'none', borderWidth: '1px' },
                  }}
                >
                  {inCart ? 'Added' : 'Add'}
                </Button>
              </Box>
            );
          })
        )}
      </Box>
    </Box>
  );
}