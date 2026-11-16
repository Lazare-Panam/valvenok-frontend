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
import { useSearchParams, useRouter } from "next/navigation";
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
import { L, MotionRoot, Reveal, Words, Squiggle, LightBackdrop, gradientText } from "../Common/LightMotion";

// Pastel, slowly shifting gradient frame used for both columns
const FRAME = {
  p: "2px",
  height: "100%",
  boxSizing: "border-box",
  borderRadius: "26px",
  background: "linear-gradient(120deg, #9BE38A, #A9DCF7, #FFE08A, #C9B9F2, #9BE38A)",
  backgroundSize: "300% 300%",
  animation: "bgShift 8s ease infinite",
  boxShadow: "0 30px 70px -20px rgba(46,139,30,0.25)",
} as const;
const FRAME_INNER = { height: "100%", boxSizing: "border-box", bgcolor: "rgba(255,255,255,0.97)", borderRadius: "24px", p: { xs: 3, md: 4.5 } } as const;

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

  const router = useRouter();
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
        // A page of its own after sending, so the enquiry can be tracked as a conversion
        router.push("/contact/thank-you");
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
    <MotionRoot sx={{ ...textReset }}>
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(180deg, ${L.cream} 0%, #F2FAEE 65%, #fff 100%)`,
      }}
    >
      <LightBackdrop />
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
          gap: { xs: 6, md: 10 },
          alignItems: "stretch",
        }}
      >
        {/* ── Left: heading + details ── */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexWrap: "wrap", animation: "wordIn .7s ease both" }}>
            <Eyebrow>Contact</Eyebrow>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, px: 1.5, py: 0.5, borderRadius: 999, bgcolor: "#fff", border: `1px solid ${T.border}`, fontSize: "0.78rem", fontWeight: 600, color: T.body }}>
              <Box component="span" sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: T.green, animation: "pulseRing 1.8s ease-out infinite" }} />
              Replies within 24 hours
            </Box>
          </Box>
          <Typography
            component="h1"
            sx={{
              mt: 2.5,
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              fontSize: { xs: "2.7rem", md: "4.3rem" },
              color: T.ink,
            }}
          >
            <Words text="Contact" />
            <Box component="span" sx={{ position: "relative", display: "inline-block" }}>
              <Words text="Valvenok" start={180} sx={gradientText} />
              <Squiggle delay={0.6} />
            </Box>
          </Typography>
          <Typography sx={{ mt: 4, maxWidth: 520, fontSize: "1.08rem", lineHeight: 1.75, color: T.body, animation: "wordIn .9s ease .45s both" }}>
            Use this form for quotation requests, product availability and
            technical questions on valves, fittings, actuators and
            instrumentation. Include part numbers, quantities and operating
            conditions where you have them, and we&apos;ll get back to you within 24
            hours.
          </Typography>

          <Box component="address" sx={{ fontStyle: "normal", mt: { xs: 4, md: 5 }, maxWidth: 520, display: "grid", gap: 1.5 }}>
            <Reveal from="left" delay={100}>
              <DetailRow icon={<EmailOutlinedIcon />} label="Email" href="mailto:sales@valvenok.com" tint="#EAF8E4">
                sales@valvenok.com
              </DetailRow>
            </Reveal>
            <Reveal from="left" delay={220}>
              <DetailRow icon={<PhoneOutlinedIcon />} label="Phone" href="tel:+447368137917" tint="#E6F4FD">
                +44 7368 137917
              </DetailRow>
            </Reveal>
            <Reveal from="left" delay={340}>
              <DetailRow icon={<LocationOnOutlinedIcon />} label="Office" tint="#FFF6DA">
                Valvenok Ltd., St. Edburgs Hall, Priory Rd, Bicester, OX26 6BL, United Kingdom
              </DetailRow>
            </Reveal>
          </Box>
        </Box>

        {/* ── Right: form ── */}
        <Box sx={{ position: "relative", height: "100%", animation: "wordIn 1s ease .3s both" }}>
          <Box sx={FRAME}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ ...FRAME_INNER, display: "flex", flexDirection: "column", justifyContent: "center" }}
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
              position: "relative",
              overflow: "hidden",
              background: `linear-gradient(90deg, ${T.green}, #7FDB6A)`,
              color: T.greenDeep,
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "capitalize",
              transition: "transform .2s, box-shadow .2s",
              "&::after": { content: '""', position: "absolute", top: 0, bottom: 0, width: "40%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)", animation: "sweep 2.8s ease-in-out infinite" },
              "&:hover": { transform: "translateY(-2px)", boxShadow: "0 12px 28px -8px rgba(97,214,73,0.6)", background: `linear-gradient(90deg, ${T.green}, #7FDB6A)` },
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
        </Box>
      </Box>
    </Box>
      <Box sx={{ position: "relative", borderTop: `1px solid ${T.border}`, bgcolor: "#fff" }}>
        <Reveal>
          <GroupSites compact title="Other group companies" subtitle="Looking for a specific range? These group websites specialise in it." />
        </Reveal>
      </Box>
    </MotionRoot>
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

function DetailRow({ icon, label, href, tint, children }: { icon: React.ReactNode; label: string; href?: string; tint: string; children: React.ReactNode }) {
  return (
    <Box
      component={href ? "a" : "div"}
      href={href}
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        p: 2,
        borderRadius: "18px",
        bgcolor: tint,
        border: `1px solid ${T.border}`,
        textDecoration: "none",
        color: T.ink,
        transition: "transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s",
        "&:hover": { transform: "translateX(6px)", boxShadow: T.shadowHover },
        "&:hover .dr-icon": { animation: "wiggle .5s ease" },
        "&:hover .dr-value": href ? { color: T.greenDark } : {},
      }}
    >
      <Box
        className="dr-icon"
        sx={{
          flexShrink: 0,
          width: 48,
          height: 48,
          borderRadius: "14px",
          display: "grid",
          placeItems: "center",
          bgcolor: "#fff",
          color: T.greenDark,
          boxShadow: T.shadow,
          "& svg": { fontSize: 22 },
        }}
      >
        {icon}
      </Box>
      <Box>
        <Box component="span" sx={{ display: "block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase !important", color: T.muted }}>
          {label}
        </Box>
        <Box component="span" className="dr-value" sx={{ display: "block", mt: 0.25, fontSize: "1rem", fontWeight: 600, lineHeight: 1.5, transition: "color .2s" }}>
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
    transition: "box-shadow .2s, transform .2s",
    "& input, & textarea": { "&::placeholder": { color: T.muted, opacity: 1 } },
    "& fieldset": { borderColor: "#D9E2DB" },
    "&:hover fieldset": { borderColor: "#B9C7BC" },
    "&:hover": { transform: "translateY(-1px)" },
    "&.Mui-focused": { boxShadow: "0 0 0 4px rgba(97,214,73,0.22)", transform: "translateY(-1px)" },
    "&.Mui-focused fieldset": { borderColor: T.greenDark, borderWidth: "1px" },
  },
};
