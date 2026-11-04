"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Typography,
  TextField,
  Button,
  Autocomplete,
  CircularProgress,
} from "@mui/material";
import { AuthShell, Field, PasswordField, OrDivider, inputSx, primaryBtnSx, secondaryBtnSx, linkSx } from "@/src/app/Common/AuthShell";
import { T } from "@/src/app/Landing/modern/tokens";

// Hooks and Store
import { useRegister } from "@/src/app/register/hooks/useAuth";
import { useNotificationStore } from "@/src/store/useNotificationStore";

const countries = [
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "US", label: "United States", phone: "1" },
  { code: "DE", label: "Germany", phone: "49" },
  { code: "FR", label: "France", phone: "33" },
  { code: "AE", label: "UAE", phone: "971" },
  { code: "AU", label: "Australia", phone: "61" },
];

export default function RegisterPage() {
  const { mutate: register, isPending } = useRegister();
  const showNotification = useNotificationStore(
    (state) => state.showNotification,
  );

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const fieldSx = inputSx;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    // Basic Validation
    if (!formData.email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      showNotification({ message: "Invalid email address", severity: "error" });
      return;
    }
    if (formData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      showNotification({ message: "Password too short", severity: "error" });
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match.");
      showNotification({
        message: "Passwords do not match",
        severity: "error",
      });
      return;
    }

    // Trigger TanStack Mutation
    register({
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: `+${selectedCountry.phone}${formData.phoneNumber}`,
    });
  };

  return (
    <AuthShell title="Create your account" subtitle="Order by part number, track orders and keep your order history." width={560}>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ position: "relative", display: "grid", gap: 2.25 }}>
        {isPending && (
          <Box sx={{ position: "absolute", inset: -8, bgcolor: "rgba(255,255,255,0.88)", zIndex: 10, borderRadius: "16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
            <CircularProgress sx={{ color: T.greenDark }} />
            <Typography sx={{ fontWeight: 700, color: T.ink }}>Creating your account...</Typography>
          </Box>
        )}

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
          <Field required label="First name" name="firstName" autoComplete="given-name" value={formData.firstName} onChange={handleChange} />
          <Field required label="Last name" name="lastName" autoComplete="family-name" value={formData.lastName} onChange={handleChange} />
        </Box>

        <Field
          required
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="name@company.com"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(emailError)}
          helperText={emailError}
        />

        <Box>
          <Box component="label" sx={{ display: "block", mb: 0.75, fontSize: "0.88rem", fontWeight: 600, color: T.ink }}>
            Phone number<Box component="span" sx={{ color: T.greenDark }}> *</Box>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: "112px 1fr", gap: 1.25 }}>
            <Autocomplete
              options={countries}
              getOptionLabel={(o) => `+${o.phone}`}
              value={selectedCountry}
              onChange={(_, val) => val && setSelectedCountry(val)}
              disableClearable
              sx={fieldSx}
              renderOption={(props, option) => (
                <Box component="li" sx={{ fontSize: "0.85rem" }} {...props} key={option.code}>
                  <img loading="lazy" width="18" src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`} alt="" style={{ marginRight: 8 }} />
                  +{option.phone}
                </Box>
              )}
              renderInput={(params) => <TextField {...params} hiddenLabel inputProps={{ ...params.inputProps, "aria-label": "Country code" }} />}
            />
            <TextField fullWidth hiddenLabel name="phoneNumber" type="tel" autoComplete="tel-national" placeholder="7123 456789" inputProps={{ "aria-label": "Phone number" }} value={formData.phoneNumber} onChange={handleChange} sx={fieldSx} />
          </Box>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
          <PasswordField
            required
            label="Password"
            name="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
            error={Boolean(passwordError)}
            helperText={passwordError || "At least 8 characters"}
          />
          <PasswordField
            required
            label="Confirm password"
            name="confirmPassword"
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={Boolean(passwordError)}
          />
        </Box>

        <Button type="submit" fullWidth variant="contained" disableElevation disabled={isPending} sx={{ ...primaryBtnSx, mt: 0.5 }}>
          {isPending ? "Creating..." : "Create account"}
        </Button>
      </Box>

      <OrDivider label="Already have an account?" />
      <Button component={NextLink} href="/login" fullWidth variant="outlined" sx={secondaryBtnSx}>
        Sign in
      </Button>

      <Typography sx={{ mt: 3, fontSize: "0.78rem", lineHeight: 1.6, color: T.muted, textAlign: "center" }}>
        By creating an account, I agree to Valvenok&apos;s{" "}
        <Box component={NextLink} href="/terms" sx={linkSx}>Terms of Use</Box> and{" "}
        <Box component={NextLink} href="/privacy" sx={linkSx}>Privacy Notice</Box>.
      </Typography>
    </AuthShell>
  );
}
