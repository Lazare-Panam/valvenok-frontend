'use client';

import React from 'react';
import { Box, Container, Typography, Stack, CircularProgress, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Store Imports
import { useCartStore } from './hooks/useCartStore';
import { useUserStore } from "@/src/store/useUserStore";
import { useNotificationStore } from "@/src/store/useNotificationStore";

// Component Imports
import CartHeader from "./components/CartHeader";
import CartItem from "./components/CartItem";
import CartFooter from "./components/CartFooter";
import EmptyCartView from "./components/EmptyCart";

export default function CartPage() {
  const router = useRouter();
  
  // Store state
  const { items, removeItem, updateQuantity, updateNotes } = useCartStore();
  const { isAuthenticated } = useUserStore();
  const showNotification = useNotificationStore(state => state.showNotification);
  
  // Wait for hydration (prevents hydration mismatch errors)
 
  const handleAction = () => {
    if (!isAuthenticated) {
      router.push("/login?redirect=/cart");
    } else {
      // Logic for submitting the inquiry or saving to DB
      showNotification({ 
        message: "Inventory Inquiry Submitted Successfully.", 
        severity: "success" 
      });
    }
  };

 

  if (items.length === 0) {
    return <EmptyCartView />;
  }

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      
      {/* ── TOP NAV ── */}
      <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mb: 4 }}>
        <Box>
          <Button 
            variant="text"
            startIcon={<ArrowBackIcon />} 
            onClick={() => router.push('/products')}
            sx={{ fontWeight: 800, mb: 1, color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
          >
            Return to Catalog
          </Button>
          <Typography variant="h2" sx={{ fontWeight: 900, textTransform: "uppercase", letterSpacing: -1, fontFamily: '"Barlow Condensed"' }}>
            Procurement List
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: 800, color: 'primary.main', textTransform: 'uppercase', borderBottom: '2px solid', borderColor: 'primary.main', pb: 0.5 }}>
          {items.length} Items Selected
        </Typography>
      </Stack>

      {/* ── CART TABLE ── */}
      <Box sx={{ border: '1px solid', borderColor: 'divider' }}>
        <CartHeader />
        <Box>
          {items.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              onUpdateQuantity={updateQuantity} 
              onRemove={removeItem}
              onUpdateNotes={updateNotes}
            />
          ))}
        </Box>
      </Box>
      
      {/* ── SUMMARY & SUBMIT ── */}
      <CartFooter 
        onSave={handleAction}
        saveLabel={isAuthenticated ? "Submit Quotation Request" : "Login to Request Quote"}
      />
    </Container>
  );
}