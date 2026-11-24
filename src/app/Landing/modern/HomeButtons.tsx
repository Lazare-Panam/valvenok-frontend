'use client'

import Link from "next/link";
import { Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { T } from "./homeTokens";
import { useDarkZone } from "./PastelZone";
import { BRAND, withAlpha, PILL } from "@/src/theme/brand";

type Variant = "primary" | "glow" | "secondary" | "ghostDark" | "light";

/** The hero's button (23 Nov 2026): light logo gradient, logo-navy text. Used for every
 *  button that sits directly on a dark band or photo. */
// 24 Nov 2026: back to the original flat bright-green pill everywhere
export const GLOW_PILL = PILL.solid;

const styles: Record<Variant, object> = {
  primary: PILL.solid,
  // On dark backgrounds (hero): bright aqua gradient with dark text
  // On dark photos (hero): light version of the logo gradient, logo-navy text
  glow: GLOW_PILL,

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
  // On a dark band, normal buttons switch to the hero's glow pill
  const dark = useDarkZone();
  const look = dark && (variant === "primary" || variant === "secondary") ? "glow" : variant;
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
        ...styles[look],
      }}
    >
      {children}
      {arrow && <ArrowForwardRoundedIcon />}
    </Box>
  );
}
