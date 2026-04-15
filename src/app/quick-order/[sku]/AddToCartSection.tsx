import { Box, Button, IconButton, Typography } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import { ProductQuickOrder } from "../product";
import { useCartStore } from "../../cart/hooks/useCartStore";
import { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import { alpha } from '@mui/material/styles';
export default function AddToCartSection({ product }: { product: ProductQuickOrder }) {
  const { items, addItem } = useCartStore();
  const [qty, setQty] = useState(1);
  const inCart = items.some((i) => i.id === product.sku);

  const handleAdd = () => {
    addItem({
      id:           product.sku,
      name:         product.name,
      description:  product.category,
      partNumber:   product.sku,
      price:        product.price,
      quantity:     qty,
      cloudinaryId: product.cloudinaryId,
    });
  };

  return (
    <Box>
      <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'text.secondary', mb: 1.5 }}>
        Quantity
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid', borderColor: 'divider', overflow: 'hidden' }}>
          <IconButton size="small" onClick={() => setQty((q) => Math.max(1, q - 1))} disabled={qty <= 1 || inCart} sx={{ borderRadius: 0, px: 1.5, py: 1, '&:hover': { bgcolor: (t) => alpha(t.palette.text.primary, 0.05) } }}>
            <RemoveIcon sx={{ fontSize: 14 }} />
          </IconButton>
          <Box
            component="input"
            type="number"
            value={qty}
            onChange={(e) => { const v = parseInt(e.target.value); if (!isNaN(v) && v >= 1) setQty(v); }}
            disabled={inCart}
            sx={{ width: 52, textAlign: 'center', border: 'none', borderLeft: '1px solid', borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.default', fontFamily: '"Barlow Condensed", sans-serif', fontSize: '15px', fontWeight: 800, color: 'text.primary', py: 1, outline: 'none', '&::-webkit-inner-spin-button': { display: 'none' }, '&::-webkit-outer-spin-button': { display: 'none' } }}
          />
          <IconButton size="small" onClick={() => setQty((q) => q + 1)} disabled={inCart} sx={{ borderRadius: 0, px: 1.5, py: 1, '&:hover': { bgcolor: (t) => alpha(t.palette.text.primary, 0.05) } }}>
            <AddIcon sx={{ fontSize: 14 }} />
          </IconButton>
        </Box>
        <Button
          onClick={() => !inCart && handleAdd()}
          startIcon={inCart ? <CheckIcon sx={{ fontSize: 15 }} /> : <AddShoppingCartIcon sx={{ fontSize: 15 }} />}
          sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', px: 3, py: 1.25, boxShadow: 'none', borderRadius: '3px', bgcolor: inCart ? (t) => alpha(t.palette.primary.main, 0.15) : 'primary.main', color: inCart ? 'primary.main' : 'text.primary', border: '1px solid', borderColor: 'primary.main', cursor: inCart ? 'default' : 'pointer', '&:hover': { boxShadow: 'none', bgcolor: inCart ? (t) => alpha(t.palette.primary.main, 0.15) : 'primary.dark' } }}
        >
          {inCart ? 'Added to Cart' : `Add ${qty} to Cart`}
        </Button>
        {!inCart && (
          <Typography sx={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '13px', fontWeight: 700, color: 'text.secondary' }}>
            {`£${(product.price * qty).toFixed(2)} ex VAT`}
          </Typography>
        )}
      </Box>
    </Box>
  );
}