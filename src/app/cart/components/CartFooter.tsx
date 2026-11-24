"use client";

import { useState } from "react";
import {
  Stack,
  Button,
  CircularProgress,
  Typography,
  Box,
} from "@mui/material";
import { useCartStore } from "../hooks/useCartStore";
// Stripe checkout is switched off (24 Nov 2026): the cart is sent as an enquiry instead
import EnquiryModal from "../../quick-order/EnquiryModal";

interface CartFooterProps {
  onSave?: () => void;
  isSaving?: boolean;
  saveLabel?: string;
}

export default function CartFooter({
  isSaving,
  onSave,
  saveLabel = "Save Cart",
}: CartFooterProps) {
  const items = useCartStore((state) => state.items);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <Box sx={{ mt: 0, mb: 10 }}>
      <Box
        sx={{
          p: 4,
          border: "1px solid",
          borderColor: "divider",
          borderTop: "none",
          bgcolor: "#f9f9f9",
        }}
      >
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="baseline"
          spacing={4}
          sx={{ mb: 4 }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 900,
              textTransform: "uppercase",
              color: "text.secondary",
              fontFamily: '"Barlow Condensed"',
            }}
          >
            Guide Total (ex VAT):
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              color: "primary.main",
              fontFamily: '"Barlow Condensed"',
            }}
          >
            £
            {totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => setIsModalOpen(true)}
            disabled={items.length === 0}
            sx={{
              borderRadius: 0,
              fontWeight: 900,
              textTransform: "uppercase",
              px: 6,
              py: 2,
              fontSize: "1.1rem",
              letterSpacing: 1,
            }}
          >
            Send enquiry
          </Button>
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
              "&:hover": { bgcolor: "primary.dark", boxShadow: "none" },
            }}
          >
            {isSaving ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              saveLabel
            )}
          </Button>
        </Stack>
      </Box>

      <EnquiryModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Box>
  );
}
