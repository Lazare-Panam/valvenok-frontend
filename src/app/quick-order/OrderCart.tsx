'use client';

import Link from 'next/link';
import { Box } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { T } from '@/src/app/Landing/modern/tokens';
import { useCartStore } from '../cart/hooks/useCartStore';

const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';
const FREE_DELIVERY = 150;

const step = { display: 'grid', placeItems: 'center', width: 26, height: 26, borderRadius: '50%', border: `1px solid ${T.border}`, bgcolor: '#fff', color: T.ink, cursor: 'pointer', '&:hover': { borderColor: T.greenDark } } as const;

export default function OrderCart() {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();
  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const toFree = Math.max(0, FREE_DELIVERY - total);

  return (
    <Box sx={{ width: 360, flexShrink: 0, position: 'sticky', top: 140, display: { xs: 'none', lg: 'block' } }}>
      <Box sx={{ borderRadius: '20px', bgcolor: '#fff', border: `1px solid ${T.border}`, boxShadow: T.shadow, overflow: 'hidden' }}>
        <Box sx={{ px: 2.5, py: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${T.border}` }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 34, height: 34, borderRadius: '10px', display: 'grid', placeItems: 'center', bgcolor: T.greenSoft, color: T.greenDark }}>
              <ShoppingCartOutlinedIcon sx={{ fontSize: 19 }} />
            </Box>
            <Box>
              <Box component="h2" sx={{ m: 0, fontSize: '1.02rem', fontWeight: 800, color: T.ink }}>Your order</Box>
              <Box sx={{ fontSize: '0.78rem', color: T.muted }}>{items.length ? `${items.length} ${items.length === 1 ? 'line' : 'lines'} · ${totalItems} pcs` : 'Nothing added yet'}</Box>
            </Box>
          </Box>
          {items.length > 0 && (
            <Box component="button" type="button" onClick={clearCart}
              sx={{ border: 0, bgcolor: 'transparent', font: 'inherit', fontSize: '0.8rem', fontWeight: 600, color: T.muted, cursor: 'pointer', '&:hover': { color: '#C62828' } }}>
              Clear all
            </Box>
          )}
        </Box>

        {items.length === 0 ? (
          <Box sx={{ px: 3, py: 5, textAlign: 'center' }}>
            <Box sx={{ width: 56, height: 56, mx: 'auto', borderRadius: '50%', display: 'grid', placeItems: 'center', bgcolor: T.surface, color: T.muted }}>
              <ShoppingCartOutlinedIcon sx={{ fontSize: 26 }} />
            </Box>
            <Box sx={{ mt: 1.5, fontSize: '0.95rem', fontWeight: 700, color: T.ink }}>Your basket is empty</Box>
            <Box sx={{ mt: 0.5, fontSize: '0.85rem', color: T.body }}>Add parts from the list to build your order.</Box>
          </Box>
        ) : (
          <>
            <Box sx={{ maxHeight: 360, overflowY: 'auto' }}>
              {items.map((it, i) => (
                <Box key={it.id} sx={{ px: 2.5, py: 1.75, borderTop: i ? `1px solid ${T.border}` : 0 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 1 }}>
                    <Box sx={{ minWidth: 0 }}>
                      <Box className="nocap" sx={{ fontFamily: mono, fontSize: '0.84rem', fontWeight: 800, color: T.greenDark, textTransform: 'none !important' }}>{it.partNumber}</Box>
                      <Box sx={{ mt: 0.25, fontSize: '0.8rem', color: T.body, lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.name}</Box>
                    </Box>
                    <Box component="button" type="button" aria-label={`Remove ${it.partNumber}`} onClick={() => removeItem(it.id)}
                      sx={{ display: 'grid', placeItems: 'center', width: 28, height: 28, flexShrink: 0, borderRadius: '8px', border: 0, bgcolor: 'transparent', color: T.muted, cursor: 'pointer', '&:hover': { bgcolor: '#FDECEC', color: '#C62828' } }}>
                      <DeleteOutlineRoundedIcon sx={{ fontSize: 17 }} />
                    </Box>
                  </Box>
                  <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                      <Box component="button" type="button" aria-label="One fewer" onClick={() => updateQuantity(it.id, it.quantity - 1)} sx={step}><RemoveRoundedIcon sx={{ fontSize: 15 }} /></Box>
                      <Box sx={{ minWidth: 22, textAlign: 'center', fontSize: '0.9rem', fontWeight: 800, color: T.ink }}>{it.quantity}</Box>
                      <Box component="button" type="button" aria-label="One more" onClick={() => updateQuantity(it.id, it.quantity + 1)} sx={step}><AddRoundedIcon sx={{ fontSize: 15 }} /></Box>
                      <Box sx={{ ml: 0.5, fontSize: '0.78rem', color: T.muted }}>× £{it.price.toFixed(2)}</Box>
                    </Box>
                    <Box sx={{ fontSize: '0.95rem', fontWeight: 800, color: T.ink }}>£{(it.price * it.quantity).toFixed(2)}</Box>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box sx={{ px: 2.5, py: 2, bgcolor: '#FAFCFA', borderTop: `1px solid ${T.border}` }}>
              {/* Free delivery progress */}
              <Box sx={{ mb: 1.75 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, fontSize: '0.8rem', fontWeight: 600, color: toFree ? T.body : T.greenDark }}>
                  <LocalShippingOutlinedIcon sx={{ fontSize: 17 }} />
                  {toFree ? <>£{toFree.toFixed(2)} more for free UK delivery</> : 'Free UK delivery unlocked'}
                </Box>
                <Box sx={{ mt: 0.75, height: 6, borderRadius: 999, bgcolor: T.border, overflow: 'hidden' }}>
                  <Box sx={{ height: '100%', width: `${Math.min(100, (total / FREE_DELIVERY) * 100)}%`, bgcolor: T.green, borderRadius: 999, transition: 'width .3s' }} />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <Box sx={{ fontSize: '0.88rem', color: T.body }}>Subtotal (ex VAT)</Box>
                <Box sx={{ fontSize: '1.35rem', fontWeight: 800, color: T.ink, letterSpacing: '-0.02em' }}>£{total.toFixed(2)}</Box>
              </Box>
              <Box sx={{ fontSize: '0.76rem', color: T.muted, mb: 2 }}>VAT is calculated at checkout</Box>
              <Link href="/cart" style={{ textDecoration: 'none' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.75, height: 48, borderRadius: 999, bgcolor: T.green, color: T.greenDeep, fontWeight: 700, fontSize: '0.95rem', '&:hover': { bgcolor: '#55C93E' } }}>
                  Go to cart and checkout <ArrowForwardRoundedIcon sx={{ fontSize: 19 }} />
                </Box>
              </Link>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
