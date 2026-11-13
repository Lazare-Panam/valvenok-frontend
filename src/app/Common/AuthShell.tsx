"use client";

// Shared look for Sign In and Create Account: a classic centred login card
// (logo, title, labelled fields, main button, switch link) in the light,
// pastel style used on About and Contact.

import * as React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Box, Typography, TextField, IconButton, InputAdornment } from "@mui/material";
import type { TextFieldProps } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { T, textReset } from "@/src/app/Landing/modern/tokens";
import { MotionRoot, LightBackdrop, Reveal } from "./LightMotion";

const LOGO = "https://pblol2.blob.core.windows.net/valvenok-images/logo.png";

export const FRAME = {
  p: "2px",
  borderRadius: "26px",
  background: "linear-gradient(120deg, #9BE38A, #A9DCF7, #FFE08A, #C9B9F2, #9BE38A)",
  backgroundSize: "300% 300%",
  animation: "bgShift 8s ease infinite",
  boxShadow: "0 30px 70px -20px rgba(46,139,30,0.25)",
} as const;

export const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#fff",
    fontSize: "0.98rem",
    transition: "box-shadow .2s",
    "& input::placeholder": { color: "#9AA69E", opacity: 1 },
    "& fieldset": { borderColor: "#D9E2DB" },
    "&:hover fieldset": { borderColor: "#B9C7BC" },
    "&.Mui-focused": { boxShadow: "0 0 0 4px rgba(97,214,73,0.22)" },
    "&.Mui-focused fieldset": { borderColor: T.greenDark, borderWidth: "1px" },
    "&.Mui-error fieldset": { borderColor: "#D14343" },
  },
  "& .MuiInputLabel-root": { textTransform: "none" },
  "& .MuiInputLabel-root.Mui-focused": { color: T.greenDark },
  "& .MuiFormHelperText-root": { ml: 0.5, fontWeight: 600, textTransform: "none" },
} as const;

export const primaryBtnSx = {
  py: 1.5,
  borderRadius: "12px",
  position: "relative",
  overflow: "hidden",
  background: `linear-gradient(90deg, ${T.green}, #7FDB6A)`,
  color: T.greenDeep,
  fontWeight: 700,
  fontSize: "1rem",
  textTransform: "none",
  boxShadow: "none",
  transition: "transform .2s, box-shadow .2s",
  "&::after": { content: '""', position: "absolute", top: 0, bottom: 0, width: "40%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)", animation: "sweep 2.8s ease-in-out infinite" },
  "&:hover": { transform: "translateY(-1px)", boxShadow: "0 12px 28px -8px rgba(97,214,73,0.6)", background: `linear-gradient(90deg, ${T.green}, #7FDB6A)` },
  "&.Mui-disabled": { background: "#CFEBC6", color: T.greenDeep },
} as const;

export const secondaryBtnSx = {
  py: 1.4,
  borderRadius: "12px",
  border: `1px solid ${T.border}`,
  bgcolor: "#fff",
  color: T.ink,
  fontWeight: 700,
  fontSize: "0.98rem",
  textTransform: "none",
  "&:hover": { borderColor: T.greenDark, color: T.greenDark, bgcolor: T.greenSoft },
} as const;

export const linkSx = { color: T.greenDark, fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } } as const;

/** Label above the input, as on a usual login form */
export function Field({ label, extra, ...props }: TextFieldProps & { label: string; extra?: React.ReactNode }) {
  const id = React.useId();
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 0.75 }}>
        <Box component="label" htmlFor={id} sx={{ fontSize: "0.88rem", fontWeight: 600, color: T.ink }}>
          {label}
          {props.required && <Box component="span" sx={{ color: T.greenDark }}> *</Box>}
        </Box>
        {extra}
      </Box>
      <TextField {...props} id={id} fullWidth hiddenLabel required={false} aria-required={props.required} sx={{ ...inputSx, ...(props.sx as object) }} />
    </Box>
  );
}

/** Password field with a show / hide eye */
export function PasswordField(props: TextFieldProps & { label: string; extra?: React.ReactNode }) {
  const [show, setShow] = React.useState(false);
  return (
    <Field
      {...props}
      type={show ? "text" : "password"}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label={show ? "Hide password" : "Show password"} onClick={() => setShow((v) => !v)} edge="end" size="small" sx={{ color: T.muted }}>
                {show ? <VisibilityOffOutlinedIcon fontSize="small" /> : <VisibilityOutlinedIcon fontSize="small" />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}

/** "or" divider */
export function OrDivider({ label = "or" }: { label?: string }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, my: 2.5, color: T.muted, fontSize: "0.82rem", "&::before, &::after": { content: '""', flex: 1, height: "1px", bgcolor: T.border } }}>
      {label}
    </Box>
  );
}

const TRUST = [
  { icon: <LockOutlinedIcon />, text: "Secure sign-in" },
  { icon: <VerifiedUserOutlinedIcon />, text: "JOSCAR-registered supplier" },
  { icon: <VerifiedUserOutlinedIcon />, text: "BVAA member" },
  { icon: <SupportAgentOutlinedIcon />, text: "UK support team" },
];

export function AuthShell({
  title,
  subtitle,
  width = 460,
  children,
}: {
  title: string;
  subtitle: string;
  width?: number;
  children: React.ReactNode;
}) {
  return (
    <MotionRoot sx={{ ...textReset }}>
      <Box component="section" sx={{ position: "relative", overflow: "hidden", bgcolor: "#FBFDF8", py: { xs: 5, md: 9 }, px: 2 }}>
        <LightBackdrop />
        <Box sx={{ position: "relative", maxWidth: width, mx: "auto" }}>
          <Reveal>
            <Box sx={FRAME}>
              <Box sx={{ bgcolor: "rgba(255,255,255,0.98)", borderRadius: "24px", px: { xs: 3, sm: 4.5 }, py: { xs: 4, sm: 5 } }}>
                <Box sx={{ textAlign: "center", mb: 3.5 }}>
                  <Box component={NextLink} href="/" aria-label="Valvenok home" sx={{ display: "inline-flex", width: 64, height: 64, borderRadius: "18px", bgcolor: T.greenSoft, border: "1px solid #D6EDCE", alignItems: "center", justifyContent: "center", mb: 2 }}>
                    <Image src={LOGO} alt="Valvenok" width={40} height={40} style={{ objectFit: "contain" }} />
                  </Box>
                  <Typography component="h1" sx={{ fontWeight: 800, fontSize: { xs: "1.6rem", sm: "1.85rem" }, letterSpacing: "-0.025em", color: T.ink, lineHeight: 1.15 }}>
                    {title}
                  </Typography>
                  <Typography sx={{ mt: 1, fontSize: "0.95rem", color: T.body }}>{subtitle}</Typography>
                </Box>
                {children}
              </Box>
            </Box>
          </Reveal>
          <Box sx={{ mt: 3, mx: { sm: -10 }, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: { xs: 1.5, sm: 2.5 } }}>
            {TRUST.map((t) => (
              <Box key={t.text} sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, fontSize: "0.8rem", fontWeight: 600, color: T.body, "& svg": { fontSize: 16, color: T.greenDark } }}>
                {t.icon}
                {t.text}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </MotionRoot>
  );
}
