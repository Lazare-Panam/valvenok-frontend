"use client";

import { useState } from "react";
import {
  Stack,
  Button,
  CircularProgress,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@/src/store/useUserStore";
import { useNotificationStore } from "@/src/store/useNotificationStore";
import { useCartStore } from "../hooks/useCartStore";
import { createGuestCheckoutSessionApi, GuestCheckoutDetails } from "@/src/api/paymentApi";
import QuickCheckoutModal from "./QuickCheckoutModal";

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
  const { isAuthenticated } = useUserStore();
  const items = useCartStore((state) => state.items);
  const showNotification = useNotificationStore((state) => state.showNotification);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const { mutate: quickCheckout, isPending: isQuickCheckingOut } = useMutation({
    mutationFn: (details: GuestCheckoutDetails) =>
      createGuestCheckoutSessionApi({
        ...details,
        items: items.map((item) => ({
          productCode: item.partNumber,
          productDescription: item.description,
          quantity: item.quantity,
          unitPrice: item.price,
          cloudinaryImageId: item.cloudinaryId,
        })),
      }),
    onSuccess: (url) => {
      window.location.href = url;
    },
    onError: () => {
      showNotification({
        message: "Failed to start checkout. Please try again.",
        severity: "error",
      });
    },
  });

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
            Total Procurement Value:
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
            disabled={isQuickCheckingOut || items.length === 0}
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
            {isQuickCheckingOut ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Quick Checkout"
            )}
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

      <QuickCheckoutModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={(details) => quickCheckout(details)}
        isSubmitting={isQuickCheckingOut}
      />
    </Box>
  );
}
