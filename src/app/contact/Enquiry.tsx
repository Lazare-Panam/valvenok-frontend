"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Container,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import NextLink from "next/link";
import { useSearchParams } from "next/navigation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { EnquiryDto } from "@/src/api/authApi";
import { useSendEnquiry } from "./hooks/useEnquiry";
import { useNotificationStore } from "@/src/store/useNotificationStore";

export default function EnquiryForm() {
  // "Request a Quote" links pass ?product_id=... — carry it into the subject
  // so the enquiry arrives with the part reference.
  const productId = useSearchParams().get("product_id");
  const [formData, setFormData] = useState<EnquiryDto>({
    customerName: "",
    customerEmail: "",
    subject: productId ? `Quote request: ${productId}` : "",
    message: "",
  });

  const { showNotification } = useNotificationStore();
  const { mutate, isPending } = useSendEnquiry();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        setFormData({
          customerName: "",
          customerEmail: "",
          subject: "",
          message: "",
        });
        showNotification({
          message: "Enquiry Sent Successfully",
          severity: "success",
        });
      },
      onError: (err: any) => {
        showNotification({
          message: err.response?.data?.message || "Failed to send enquiry",
          severity: "error",
        });
      },
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ maxWidth: 1100, mx: "auto", mb: 6 }}>
        <Typography
          component="h1"
          variant="h1"
          sx={{
            fontWeight: 900,
            mb: 1,
            color: "primary.main",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontFamily: '"Barlow Condensed"',
          }}
        >
          Contact Valvenok
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "text.secondary", maxWidth: 800, lineHeight: 1.7 }}
        >
          Use this form for quotation requests, product availability and
          technical questions on valves, fittings, actuators and
          instrumentation. Include part numbers, quantities and operating
          conditions where you have them, and we'll get back to you within 24
          hours.
        </Typography>
      </Box>

      <Grid container spacing={6} sx={{ maxWidth: 1100, mx: "auto" }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Name"
                  name="customerName"
                  required
                  value={formData.customerName}
                  onChange={handleChange}
                  sx={inputStyles}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Email"
                  name="customerEmail"
                  type="email"
                  required
                  value={formData.customerEmail}
                  onChange={handleChange}
                  sx={inputStyles}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  sx={inputStyles}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  sx={inputStyles}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  We use the details you submit to respond to your enquiry. See
                  our{" "}
                  <MuiLink component={NextLink} href="/privacy">
                    Privacy Policy
                  </MuiLink>{" "}
                  for how we handle personal data.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isPending}
                  sx={{
                    bgcolor: "#1c2e1a",
                    color: "#fff",
                    px: 8,
                    py: 2,
                    borderRadius: 0,
                    fontWeight: 900,
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    "&:hover": { bgcolor: "#4a9a3a" },
                  }}
                >
                  {isPending ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            component="address"
            sx={{
              fontStyle: "normal",
              p: 4,
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "#fff",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Barlow Condensed"',
                fontWeight: 800,
                fontSize: "1.5rem",
                textTransform: "uppercase",
                mb: 3,
              }}
            >
              Contact Details
            </Typography>
            <Stack spacing={2.5}>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <LocationOnIcon sx={{ fontSize: 20, color: "primary.main", mt: 0.3 }} />
                <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                  <strong>Valvenok Ltd.</strong>
                  <br />
                  St. Edburgs Hall, Priory Rd
                  <br />
                  Bicester, OX26 6BL
                  <br />
                  United Kingdom
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneIcon sx={{ fontSize: 20, color: "primary.main" }} />
                <MuiLink href="tel:+447368137917" variant="body2" underline="hover">
                  +44 7368 137917
                </MuiLink>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailIcon sx={{ fontSize: 20, color: "primary.main" }} />
                <MuiLink
                  href="mailto:sales@valvenok.com"
                  variant="body2"
                  underline="hover"
                >
                  sales@valvenok.com
                </MuiLink>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 0,
    backgroundColor: "#fff",
    "& fieldset": { borderColor: "#e0e0e0" },
    "&:hover fieldset": { borderColor: "#61D649" },
    "&.Mui-focused fieldset": { borderColor: "#1c2e1a", borderWidth: "1px" },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "#1c2e1a" },
};
