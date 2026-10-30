"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import NextLink from "next/link";
import { useSearchParams } from "next/navigation";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { EnquiryDto } from "@/src/api/authApi";
import { useSendEnquiry } from "./hooks/useEnquiry";
import { useNotificationStore } from "@/src/store/useNotificationStore";
import { T, textReset } from "../Landing/modern/tokens";
import { Eyebrow } from "../Landing/modern/SectionHeader";
import GroupSites from "../Common/GroupSites";

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
    <Box
      component="section"
      sx={{
        ...textReset,
        position: "relative",
        overflow: "hidden",
        bgcolor: "#fff",
        // Soft brand glow behind the heading, as on the homepage hero cards
        "&::before": {
          content: '""',
          position: "absolute",
          top: -320,
          left: -240,
          width: 900,
          height: 700,
          background: "radial-gradient(closest-side, rgba(97,214,73,0.16), transparent)",
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          boxSizing: "border-box",
          maxWidth: 1240,
          mx: "auto",
          px: { xs: 2, md: 4 },
          py: { xs: 6, md: 11 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1.1fr" },
          gap: { xs: 5, md: 10 },
          alignItems: "start",
        }}
      >
        {/* ── Left: heading + details ── */}
        <Box>
          <Eyebrow>Contact</Eyebrow>
          <Typography
            component="h1"
            sx={{
              mt: 2.5,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              fontSize: { xs: "2.6rem", md: "4rem" },
              color: T.ink,
            }}
          >
            Contact{" "}
            <Box component="span" sx={{ color: T.greenDark }}>
              Valvenok
            </Box>
          </Typography>
          <Typography sx={{ mt: 2.5, maxWidth: 520, fontSize: "1.08rem", lineHeight: 1.75, color: T.body }}>
            Use this form for quotation requests, product availability and
            technical questions on valves, fittings, actuators and
            instrumentation. Include part numbers, quantities and operating
            conditions where you have them, and we&apos;ll get back to you within 24
            hours.
          </Typography>

          <Box component="address" sx={{ fontStyle: "normal", mt: { xs: 4, md: 6 }, maxWidth: 520 }}>
            <DetailRow icon={<EmailOutlinedIcon />} label="Email" href="mailto:sales@valvenok.com">
              sales@valvenok.com
            </DetailRow>
            <DetailRow icon={<PhoneOutlinedIcon />} label="Phone" href="tel:+447368137917">
              +44 7368 137917
            </DetailRow>
            <DetailRow icon={<LocationOnOutlinedIcon />} label="Office">
              Valvenok Ltd., St. Edburgs Hall, Priory Rd, Bicester, OX26 6BL, United Kingdom
            </DetailRow>
          </Box>
        </Box>

        {/* ── Right: form ── */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            bgcolor: "#fff",
            borderRadius: "20px",
            border: `1px solid ${T.border}`,
            boxShadow: "0 1px 2px rgba(14,27,18,0.04), 0 24px 60px -12px rgba(14,27,18,0.12)",
            p: { xs: 3, md: 4.5 },
          }}
        >
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.5 }}>
            <Field id="customerName" label="Name">
              <TextField
                id="customerName"
                fullWidth
                name="customerName"
                required
                placeholder="Your name"
                value={formData.customerName}
                onChange={handleChange}
                sx={inputStyles}
              />
            </Field>
            <Field id="customerEmail" label="Email">
              <TextField
                id="customerEmail"
                fullWidth
                name="customerEmail"
                type="email"
                required
                placeholder="you@company.com"
                value={formData.customerEmail}
                onChange={handleChange}
                sx={inputStyles}
              />
            </Field>
            <Field id="subject" label="Subject" full>
              <TextField
                id="subject"
                fullWidth
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                sx={inputStyles}
              />
            </Field>
            <Field id="message" label="Message" full>
              <TextField
                id="message"
                fullWidth
                name="message"
                multiline
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                sx={inputStyles}
              />
            </Field>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isPending}
            disableElevation
            endIcon={!isPending && <ArrowForwardRoundedIcon />}
            sx={{
              mt: 3.5,
              py: 1.6,
              borderRadius: "12px",
              bgcolor: T.ink,
              color: "#fff",
              fontWeight: 600,
              fontSize: "1rem",
              textTransform: "none",
              transition: "background-color .2s",
              "&:hover": { bgcolor: T.greenDeep },
              "& .MuiButton-endIcon": { transition: "transform .2s" },
              "&:hover .MuiButton-endIcon": { transform: "translateX(3px)" },
            }}
          >
            {isPending ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
          </Button>
          <Typography sx={{ mt: 2, fontSize: "0.85rem", lineHeight: 1.6, color: T.muted, textAlign: "center" }}>
            We use the details you submit to respond to your enquiry. See our{" "}
            <MuiLink component={NextLink} href="/privacy" underline="hover" sx={{ color: T.greenDark, fontWeight: 600 }}>
              Privacy Policy
            </MuiLink>{" "}
            for how we handle personal data.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ position: "relative", borderTop: `1px solid ${T.border}`, bgcolor: T.surface }}>
        <GroupSites compact title="Other group companies" subtitle="Looking for a specific range? These group websites specialise in it." />
      </Box>
    </Box>
  );
}

function Field({ id, label, full, children }: { id: string; label: string; full?: boolean; children: React.ReactNode }) {
  return (
    <Box sx={{ gridColumn: full ? "1 / -1" : undefined }}>
      <Box component="label" htmlFor={id} sx={{ display: "block", mb: 0.75, fontSize: "0.88rem", fontWeight: 600, color: T.ink }}>
        {label} <Box component="span" sx={{ color: T.greenDark }}>*</Box>
      </Box>
      {children}
    </Box>
  );
}

function DetailRow({ icon, label, href, children }: { icon: React.ReactNode; label: string; href?: string; children: React.ReactNode }) {
  return (
    <Box
      component={href ? "a" : "div"}
      href={href}
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        py: 2.25,
        borderTop: `1px solid ${T.border}`,
        "&:last-of-type": { borderBottom: `1px solid ${T.border}` },
        textDecoration: "none",
        color: T.ink,
        "&:hover .dr-icon": href ? { bgcolor: T.green, color: T.greenDeep } : {},
        "&:hover .dr-value": href ? { color: T.greenDark } : {},
      }}
    >
      <Box
        className="dr-icon"
        sx={{
          flexShrink: 0,
          width: 44,
          height: 44,
          borderRadius: "12px",
          display: "grid",
          placeItems: "center",
          bgcolor: T.greenSoft,
          color: T.greenDark,
          transition: "background-color .2s, color .2s",
          "& svg": { fontSize: 21 },
        }}
      >
        {icon}
      </Box>
      <Box>
        <Box component="span" sx={{ display: "block", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase !important", color: T.muted }}>
          {label}
        </Box>
        <Box component="span" className="dr-value" sx={{ display: "block", mt: 0.25, fontSize: "1rem", fontWeight: 500, lineHeight: 1.5, transition: "color .2s" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#fff",
    fontSize: "0.98rem",
    transition: "box-shadow .2s",
    "& input, & textarea": { "&::placeholder": { color: T.muted, opacity: 1 } },
    "& fieldset": { borderColor: "#D9E2DB" },
    "&:hover fieldset": { borderColor: "#B9C7BC" },
    "&.Mui-focused": { boxShadow: "0 0 0 4px rgba(97,214,73,0.18)" },
    "&.Mui-focused fieldset": { borderColor: T.greenDark, borderWidth: "1px" },
  },
};
