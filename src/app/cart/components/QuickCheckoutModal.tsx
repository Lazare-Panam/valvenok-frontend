"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Stack,
  CircularProgress,
} from "@mui/material";
import { GuestCheckoutDetails } from "@/src/api/paymentApi";

interface QuickCheckoutModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (details: GuestCheckoutDetails) => void;
  isSubmitting?: boolean;
}

const EMPTY_DETAILS: GuestCheckoutDetails = {
  name: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  postalCode: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function QuickCheckoutModal({
  open,
  onClose,
  onConfirm,
  isSubmitting,
}: QuickCheckoutModalProps) {
  const [details, setDetails] = useState<GuestCheckoutDetails>(EMPTY_DETAILS);
  const [emailTouched, setEmailTouched] = useState(false);

  const handleChange =
    (field: keyof GuestCheckoutDetails) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDetails((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const isEmailValid = EMAIL_REGEX.test(details.email.trim());
  const emailHasError = emailTouched && !isEmailValid;

  const isValid =
    details.name.trim() !== "" &&
    isEmailValid &&
    details.phone.trim() !== "" &&
    details.addressLine1.trim() !== "" &&
    details.city.trim() !== "" &&
    details.postalCode.trim() !== "";

  const handleConfirm = () => {
    setEmailTouched(true);
    if (!isValid) return;
    onConfirm(details);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ fontWeight: 900, textTransform: "uppercase" }}>
        Quick Checkout
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2 }}>
          Enter your details to check out as a guest, no account needed.
        </DialogContentText>
        <Stack spacing={2}>
          <TextField
            label="Full Name"
            value={details.name}
            onChange={handleChange("name")}
            required
            fullWidth
          />
          <TextField
            label="Email"
            type="email"
            value={details.email}
            onChange={handleChange("email")}
            onBlur={() => setEmailTouched(true)}
            error={emailHasError}
            helperText={emailHasError ? "Enter a valid email address." : " "}
            required
            fullWidth
          />
          <TextField
            label="Phone"
            value={details.phone}
            onChange={handleChange("phone")}
            required
            fullWidth
          />
          <TextField
            label="Address Line 1"
            value={details.addressLine1}
            onChange={handleChange("addressLine1")}
            required
            fullWidth
          />
          <TextField
            label="Address Line 2 (optional)"
            value={details.addressLine2}
            onChange={handleChange("addressLine2")}
            fullWidth
          />
          <Stack direction="row" spacing={2}>
            <TextField
              label="City"
              value={details.city}
              onChange={handleChange("city")}
              required
              fullWidth
            />
            <TextField
              label="Postal Code"
              value={details.postalCode}
              onChange={handleChange("postalCode")}
              required
              fullWidth
            />
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          onClick={onClose}
          disabled={isSubmitting}
          sx={{ fontWeight: 800, textTransform: "uppercase" }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleConfirm}
          disabled={isSubmitting || !isValid}
          sx={{ borderRadius: 0, fontWeight: 900, textTransform: "uppercase" }}
        >
          {isSubmitting ? (
            <CircularProgress size={22} color="inherit" />
          ) : (
            "Continue to Payment"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
