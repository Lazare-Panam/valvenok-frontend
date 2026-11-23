import { Box, Typography } from "@mui/material";
import { T } from "./homeTokens";
import { AQUA, BRAND, withAlpha } from "@/src/theme/brand";

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
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
        color: dark ? BRAND.hoverBorder : T.brandDark,
        bgcolor: dark ? withAlpha(BRAND.main, 0.14) : AQUA.mistFaint,
        border: `1px solid ${dark ? withAlpha(BRAND.main, 0.3) : AQUA.soft}`,
      }}
    >
      <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: AQUA.glowDeep, boxShadow: `0 0 0 3px ${withAlpha(AQUA.glow, 0.25)}` }} />
      {children}
    </Box>
  );
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  action,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  dark?: boolean;
}) {
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
          {title}
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
