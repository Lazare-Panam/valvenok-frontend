'use client';

import React from 'react';
import { Box, Container, Typography, Stack, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// Store Imports
import { useCartStore } from './hooks/useCartStore';
import { useUserStore } from "@/src/store/useUserStore";
import { useNotificationStore } from "@/src/store/useNotificationStore";

// API Import
import { addToCartApi } from '@/src/api/cartApi';

// Component Imports
import CartHeader from "./components/CartHeader";
import CartItem from "./components/CartItem";
import CartFooter from "./components/CartFooter";
import EmptyCartView from "./components/EmptyCart";

export default function CartPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  
  // Store state - removed updateNotes
  const { items, removeItem, updateQuantity } = useCartStore();
  const { isAuthenticated } = useUserStore();
  const showNotification = useNotificationStore(state => state.showNotification);

  // ── TANSTACK MUTATION ──
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const promises = items.map(item => 
         addToCartApi({
            productCode: item.partNumber, // Usually partNumber is the code the backend expects
            productDescription: item.description, // Updated to use item.description
            quantity: item.quantity,
            unitPrice: item.price,
            cloudinaryImageId: item.cloudinaryId
        })
      );
      return Promise.all(promises);
    },
    onSuccess: () => {
      showNotification({ 
        message: "Procurement list saved successfully.", 
        severity: "success" 
      });
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (error: any) => {
      showNotification({ 
        message: error.response?.data?.title || "Failed to save cart.", 
        severity: "error" 
      });
    }
  });

  const handleAction = () => {
    if (!isAuthenticated) {
      router.push("/login?redirect=/cart");
    } else {
      mutate();
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
            onClick={() => router.push('/categories')}
            sx={{ 
              fontWeight: 800, 
              mb: 1, 
              color: 'text.secondary', 
              '&:hover': { color: 'primary.main' } 
            }}
          >
            Return to Catalog
          </Button>
          <Typography variant="h2" sx={{ 
            fontWeight: 900, 
            textTransform: "uppercase", 
            letterSpacing: -1, 
            fontFamily: '"Barlow Condensed"' 
          }}>
            Procurement List
          </Typography>
        </Box>
        <Typography sx={{ 
          fontWeight: 800, 
          color: 'primary.main', 
          textTransform: 'uppercase', 
          borderBottom: '2px solid', 
          borderColor: 'primary.main', 
          pb: 0.5 
        }}>
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
              // Removed onUpdateNotes prop
            />
          ))}
        </Box>
      </Box>
      
      {/* ── SUMMARY & SUBMIT ── */}
      <CartFooter 
        onSave={handleAction}
        isSaving={isPending} 
        saveLabel={isAuthenticated ? "Save Cart" : "Login to Save Cart"}
      />
    </Container>
  );
}