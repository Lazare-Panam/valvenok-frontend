'use client';

import { Stack, Button, CircularProgress, Typography, Box, Divider } from "@mui/material";
import { useUserStore } from "@/src/store/useUserStore";
import { useCartStore } from "../hooks/useCartStore";

interface CartFooterProps {
  onSave?: () => void;
  isSaving?: boolean;
  saveLabel?: string;
}

export default function CartFooter({ isSaving, onSave, saveLabel = "Save Cart" }: CartFooterProps) {
  const { isAuthenticated } = useUserStore();
  const items = useCartStore((state) => state.items);

  const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <Box sx={{ mt: 0, mb: 10 }}>
      <Box sx={{ p: 4, border: '1px solid', borderColor: 'divider', borderTop: 'none', bgcolor: '#f9f9f9' }}>
        <Stack direction="row" justifyContent="flex-end" alignItems="baseline" spacing={4} sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 900, textTransform: "uppercase", color: "text.secondary", fontFamily: '"Barlow Condensed"' }}>
            Total Procurement Value:
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 900, color: "primary.main", fontFamily: '"Barlow Condensed"' }}>
            £{totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          <Button
            variant="contained"
            size="large"
            onClick={onSave}
            disabled={isSaving}
            sx={{
              bgcolor: "primary.main",
              borderRadius: 0,
              fontWeight: 900,
              textTransform: "uppercase",
              px: 6,
              py: 2,
              fontSize: "1.1rem",
              letterSpacing: 1,
              boxShadow: "none",
              "&:hover": { bgcolor: "primary.dark", boxShadow: "none" }
            }}
          >
            {isSaving ? <CircularProgress size={24} color="inherit" /> : saveLabel}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}