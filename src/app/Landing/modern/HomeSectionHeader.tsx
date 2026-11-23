"use client";

import { Box, Typography } from "@mui/material";
import { T, accentText } from "./homeTokens";
import { AQUA, BRAND, ACCENT, BRAND_GRADIENT, LOGO, LOGO_GRADIENT_LIGHT, withAlpha } from "@/src/theme/brand";
import { useBand, useDarkZone } from "./PastelZone";

/** Label pills on the homepage bands (23 Nov 2026), the opposite of the band they sit on:
 *  light band → deep logo gradient with white text; dark band → light logo gradient, navy text. */
export const PILL_ON_LIGHT = { color: BRAND.white, background: BRAND_GRADIENT, border: "1px solid transparent", boxShadow: `0 6px 16px -8px ${withAlpha(LOGO.bottom, 0.5)}` } as const;
export const PILL_ON_DARK = { color: LOGO.bottom, background: LOGO_GRADIENT_LIGHT, border: "1px solid transparent", boxShadow: `0 6px 16px -8px ${withAlpha(BRAND.ink, 0.5)}` } as const;

export function Eyebrow({ children, dark: darkProp }: { children: React.ReactNode; dark?: boolean }) {
  // Inside a dark band the pill switches to its dark style unless told otherwise
  const band = useBand();
  const dark = darkProp ?? band === "dark";
  // Outside the homepage bands (About, Contact, News…) the pill keeps its original style
  const pill = dark ? PILL_ON_DARK : band === "light" ? PILL_ON_LIGHT : {
    color: ACCENT.text,
    bgcolor: ACCENT.light,
    border: `1px solid ${withAlpha(ACCENT.soft, 0.7)}`,
  };
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        px: 1.5,
        py: 0.5,
        borderRadius: 999,
        fontSize: "0.72rem",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase !important",
        ...pill,
      }}
    >
      <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: dark ? LOGO.mid : AQUA.glowDeep, boxShadow: `0 0 0 3px ${withAlpha(dark ? LOGO.top : AQUA.glow, 0.25)}` }} />
      {children}
    </Box>
  );
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  action,
  dark: darkProp,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  dark?: boolean;
}) {
  const zoneDark = useDarkZone();
  const dark = darkProp ?? zoneDark;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "flex-end" },
        justifyContent: "space-between",
        gap: 3,
        mb: { xs: 4, md: 6 },
      }}
    >
      <Box sx={{ maxWidth: 680 }}>
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        <Typography
          component="h2"
          sx={{
            mt: 2,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            fontSize: { xs: "2rem", md: "2.75rem" },
            color: dark ? BRAND.white : T.ink,
          }}
        >
          {/* Last word highlighted in the partner accent (light sections only) */}
          {dark || !title.includes(" ") ? title : (
            <>
              {title.slice(0, title.lastIndexOf(" ") + 1)}
              <Box component="span" sx={accentText}>{title.slice(title.lastIndexOf(" ") + 1)}</Box>
            </>
          )}
        </Typography>
        {subtitle && (
          <Typography sx={{ mt: 1.5, fontSize: "1.05rem", lineHeight: 1.65, color: dark ? withAlpha(BRAND.white, 0.72) : T.body }}>
            {subtitle}
          </Typography>
        )}
      </Box>
      {action}
    </Box>
  );
}
