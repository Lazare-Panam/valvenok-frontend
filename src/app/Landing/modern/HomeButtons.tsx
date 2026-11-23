'use client'

import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { T } from "./homeTokens";
import { BRAND, BRAND_GRADIENT, BRAND_GRADIENT_HOVER, LOGO, LOGO_GRADIENT_LIGHT, LOGO_GRADIENT_LIGHT_HOVER, withAlpha } from "@/src/theme/brand";

type Variant = "primary" | "glow" | "secondary" | "ghostDark" | "light";

const styles: Record<Variant, object> = {
  primary: {
    background: BRAND_GRADIENT,
    color: BRAND.white,
    border: "1px solid transparent",
    boxShadow: `0 6px 16px -8px ${withAlpha(BRAND.hover, 0.6)}`,
    "&:hover": { background: BRAND_GRADIENT_HOVER },
  },
  // On dark backgrounds (hero): bright aqua gradient with dark text
  // On dark photos (hero): light version of the logo gradient, logo-navy text
  glow: {
    background: LOGO_GRADIENT_LIGHT,
    color: LOGO.bottom,
    border: "1px solid transparent",
    boxShadow: `0 6px 18px -8px ${withAlpha(LOGO.top, 0.5)}`,
    "&:hover": { background: LOGO_GRADIENT_LIGHT_HOVER },
  },

  secondary: {
    bgcolor: BRAND.white,
    color: T.ink,
    border: `1px solid ${T.border}`,
    "&:hover": { borderColor: T.ink },
  },
  ghostDark: {
    bgcolor: "transparent",
    color: BRAND.white,
    border: `1px solid ${withAlpha(BRAND.white, 0.35)}`,
    "&:hover": { borderColor: BRAND.white, bgcolor: withAlpha(BRAND.white, 0.06) },
  },
  light: {
    bgcolor: BRAND.white,
    color: T.brandDeep,
    border: `1px solid ${BRAND.white}`,
    "&:hover": { bgcolor: BRAND.surface },
  },
};

export default function PillButton({
  href,
  children,
  variant = "primary",
  arrow = true,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  external?: boolean;
}) {
  return (
    <Box
      component={Link}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        px: 2.5,
        py: 1.25,
        borderRadius: 999,
        fontFamily: T.font,
        fontWeight: 600,
        fontSize: "0.95rem",
        textDecoration: "none",
        textTransform: "capitalize",
        whiteSpace: "nowrap",
        transition: "all .2s ease",
        "& svg": { fontSize: 18, transition: "transform .2s ease" },
        "&:hover svg": { transform: "translateX(3px)" },
        ...styles[variant],
      }}
    >
      {children}
      {arrow && <ArrowForwardRoundedIcon />}
    </Box>
  );
}
