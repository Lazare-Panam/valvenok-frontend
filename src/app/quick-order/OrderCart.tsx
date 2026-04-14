'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CheckIcon from '@mui/icons-material/Check';
import { alpha } from '@mui/material/styles';
import { useCartStore } from '../cart/hooks/useCartStore';

export default function OrderCart() {
  const { items, removeItem, updateQuantity, clearCart, getTotalItems } = useCartStore();
  const totalItems   = getTotalItems();
  const totalValue   = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <Box sx={{ width: 340, flexShrink: 0, position: 'sticky', top: 24, display: { xs: 'none', lg: 'block' } }}>
      <Box sx={{ border: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>

        {/* Header */}
        <Box sx={{ px: 2.5, py: 1.5, bgcolor: 'text.primary', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: items.length > 0 ? 'primary.main' : (t) => alpha(t.palette.common.white, 0.2) }} />
            <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: (t) => alpha(t.palette.common.white, 0.6) }}>
              Order Summary
            </Typography>
          </Box>
          {items.length > 0 && (
            <Typography onClick={clearCart} sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: (t) => alpha(t.palette.common.white, 0.3), cursor: 'pointer', '&:hover': { color: (t) => alpha(t.palette.common.white, 0.7) } }}>
              Clear all
            </Typography>
          )}
        </Box>

        {items.length === 0 ? (
          <Box sx={{ px: 3, py: 6, textAlign: 'center' }}>
            <ShoppingCartOutlinedIcon sx={{ fontSize: 32, color: 'divider', mb: 1.5 }} />
            <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'text.secondary' }}>
              No items added yet
            </Typography>
            <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '11px', color: 'text.secondary', mt: 0.5, opacity: 0.6 }}>
              Use the table to add parts
            </Typography>
          </Box>
        ) : (
          <>
            {/* Line items */}
            <Box sx={{ maxHeight: 340, overflowY: 'auto' }}>
              {items.map((item, i) => (
                <Box key={item.id}>
                  <Box sx={{ px: 2.5, py: 2 }}>
                    {/* SKU + delete */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'primary.main' }}>
                        {item.partNumber}
                      </Typography>
                      <IconButton size="small" onClick={() => removeItem(item.id)} sx={{ width: 20, height: 20, p: 0, color: 'text.secondary', '&:hover': { color: 'error.main' } }}>
                        <DeleteOutlineIcon sx={{ fontSize: 13 }} />
                      </IconButton>
                    </Box>
                    {/* Name */}
                    <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '11px', color: 'text.secondary', lineHeight: 1.4, mb: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {item.name}
                    </Typography>
                    {/* Qty + line total */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <IconButton size="small" onClick={() => updateQuantity(item.id, item.quantity - 1)} sx={{ width: 22, height: 22, border: '1px solid', borderColor: 'divider', borderRadius: '3px', p: 0 }}>
                          <RemoveIcon sx={{ fontSize: 12 }} />
                        </IconButton>
                        <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '13px', fontWeight: 800, minWidth: 24, textAlign: 'center', color: 'text.primary' }}>
                          {item.quantity}
                        </Typography>
                        <IconButton size="small" onClick={() => updateQuantity(item.id, item.quantity + 1)} sx={{ width: 22, height: 22, border: '1px solid', borderColor: 'divider', borderRadius: '3px', p: 0 }}>
                          <AddIcon sx={{ fontSize: 12 }} />
                        </IconButton>
                        <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '11px', color: 'text.secondary', ml: 0.5 }}>
                          {`× £${item.price.toFixed(2)}`}
                        </Typography>
                      </Box>
                      <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '13px', fontWeight: 800, color: 'text.primary' }}>
                        {`£${(item.price * item.quantity).toFixed(2)}`}
                      </Typography>
                    </Box>
                  </Box>
                  {i < items.length - 1 && <Divider />}
                </Box>
              ))}
            </Box>

            <Divider />

            {/* Totals + actions */}
            <Box sx={{ px: 2.5, py: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.75 }}>
                <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'text.secondary' }}>
                  Lines / Qty
                </Typography>
                <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '13px', fontWeight: 800, color: 'text.primary' }}>
                  {`${items.length} SKU · ${totalItems} pcs`}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.75 }}>
                <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'text.secondary' }}>
                  Subtotal (ex VAT)
                </Typography>
                <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '15px', fontWeight: 900, color: 'primary.main' }}>
                  {`£${totalValue.toFixed(2)}`}
                </Typography>
              </Box>
              <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '10px', color: 'text.secondary', mb: 2.5, opacity: 0.7 }}>
                VAT calculated at checkout
              </Typography>

              <Button
                fullWidth
                variant="contained"
                color="primary"
                href="/checkout"
                sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', py: 1.5, boxShadow: 'none', borderRadius: '3px', '&:hover': { boxShadow: 'none' } }}
              >
                Go to Cart and Checkout
              </Button>

             
            </Box>

           
          </>
        )}
      </Box>
    </Box>
  );
}