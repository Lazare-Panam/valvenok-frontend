'use client';

import React from 'react';
import { Box, Typography, IconButton, TextField, Stack, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { CartItem as CartItemType } from '../hooks/useCartStore';

interface Props {
  item: CartItemType;
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: Props) {
  const imageUrl = item.cloudinaryId;
  const subtotal = item.price * item.quantity;

  return (
    <Box
      sx={{
        p: 3,
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: 'white',
        '&:hover': { bgcolor: 'rgba(0,0,0,0.01)' },
      }}
    >
      <Grid container spacing={3} alignItems="center">

        {/* ── IMAGE & DESCRIPTION ── */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack direction="row" spacing={3} alignItems="flex-start">
            <Avatar
              src={imageUrl}
              variant="square"
              sx={{
                width: 110,
                height: 110,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: '#f5f5f5',
                borderRadius: 0,
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'primary.main', 
                  fontWeight: 900, 
                  letterSpacing: 1,
                  display: 'block',
                  mb: 0.5 
                }}
              >
                SKU: {item.partNumber}
              </Typography>
              
              {/* Product Description replacing the old notes section */}
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 700, 
                  lineHeight: 1.3,
                  color: 'text.primary',
                  // Ensures long descriptions don't break the layout
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Stack>
        </Grid>

        {/* ── UNIT PRICE ── */}
        <Grid size={{ xs: 4, md: 2 }}>
          <Typography variant="caption" sx={{ display: { md: 'none' }, fontWeight: 900, color: 'text.secondary' }}>
            UNIT PRICE
          </Typography>
          <Typography sx={{ fontWeight: 800, fontSize: '1.1rem' }}>
            £{item.price.toFixed(2)}
          </Typography>
        </Grid>

        {/* ── QUANTITY ── */}
        <Grid size={{ xs: 8, md: 3 }}>
          <Stack direction="row" alignItems="center" justifyContent={{ xs: 'flex-start', md: 'center' }} spacing={1}>
            <Box sx={{ display: 'flex', alignItems: 'center', border: '2px solid', borderColor: 'divider' }}>
              <IconButton
                size="small"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                sx={{ borderRadius: 0, p: 1 }}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>

              <TextField
                value={item.quantity}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  if (!isNaN(val) && val > 0) onUpdateQuantity(item.id, val);
                }}
                inputProps={{
                  min: 1,
                  style: {
                    textAlign: 'center',
                    fontWeight: 900,
                    fontSize: '1.1rem',
                    padding: '4px 0',
                    width: 45,
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                  '& .MuiInputBase-root': { borderRadius: 0 },
                }}
              />

              <IconButton
                size="small"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                sx={{ borderRadius: 0, p: 1 }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>

            <IconButton color="error" onClick={() => onRemove(item.id)} sx={{ ml: 1 }}>
              <DeleteOutlineIcon />
            </IconButton>
          </Stack>
        </Grid>

        {/* ── SUBTOTAL ── */}
        <Grid size={{ xs: 12, md: 2 }}>
          <Box sx={{ textAlign: { xs: 'left', md: 'right' }, pr: { md: 2 } }}>
            <Typography variant="caption" sx={{ display: { md: 'none' }, fontWeight: 900, color: 'text.secondary' }}>
              SUBTOTAL
            </Typography>
            <Typography sx={{ fontWeight: 900, color: 'primary.main', fontSize: '1.2rem', fontFamily: '"Barlow Condensed"' }}>
              £{subtotal.toFixed(2)}
            </Typography>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}