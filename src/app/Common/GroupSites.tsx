'use client'

import { Box, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { GROUP_SITES } from "./group";
import { T, textReset } from "../Landing/modern/tokens";
import { Eyebrow } from "../Landing/modern/SectionHeader";

const host = (url: string) => new URL(url).hostname.replace(/^www\./, "");

// "Our group" section: one card per live group website, each with a sentence on
// what it does. `compact` drops the heading block for use inside other pages.
export default function GroupSites({
  title = "Our group",
  subtitle,
  compact = false,
}: {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}) {
  return (
    <Box
      component="section"
      sx={{ ...textReset, width: "100%", boxSizing: "border-box", maxWidth: compact ? 1240 : T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, py: compact ? { xs: 5, md: 7 } : { xs: 8, md: 11 } }}
    >
      <Box sx={{ mb: { xs: 3, md: 4 }, maxWidth: 720 }}>
        <Eyebrow>Group companies</Eyebrow>
        <Typography component="h2" sx={{ mt: 2, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, fontSize: compact ? { xs: "1.6rem", md: "2rem" } : { xs: "2rem", md: "2.75rem" }, color: T.ink }}>
          {title}
        </Typography>
        {subtitle && <Typography sx={{ mt: 1.5, fontSize: "1.02rem", lineHeight: 1.7, color: T.body }}>{subtitle}</Typography>}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: compact ? "repeat(5, 1fr)" : "repeat(3, 1fr)" },
          gap: 2,
        }}
      >
        {GROUP_SITES.map((g) => (
          <Box
            key={g.url}
            component="a"
            href={g.url}
            target="_blank"
            rel="noopener"
            sx={{
              display: "flex",
              flexDirection: "column",
              p: compact ? 2.5 : 3,
              borderRadius: "18px",
              bgcolor: "#fff",
              border: `1px solid ${T.border}`,
              textDecoration: "none",
              transition: "transform .25s ease, box-shadow .25s ease, border-color .25s",
              "&:hover": { transform: "translateY(-3px)", boxShadow: T.shadowHover, borderColor: "#BFE3B4" },
              "&:hover .go": { bgcolor: T.green, color: T.greenDeep, transform: "rotate(45deg)" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, mb: 2.5 }}>
              <Box sx={{ height: compact ? 40 : 48, width: compact ? 120 : 150, display: "flex", alignItems: "center", overflow: "hidden" }}>
                <Box
                  component="img"
                  src={g.logo}
                  alt={`${g.name} logo`}
                  loading="lazy"
                  sx={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain", objectPosition: "left center", transform: g.logoScale ? `scale(${g.logoScale})` : undefined, transformOrigin: "left center" }}
                />
              </Box>
              <Box className="go" sx={{ flexShrink: 0, width: 32, height: 32, borderRadius: "50%", display: "grid", placeItems: "center", bgcolor: T.greenSoft, color: T.greenDark, transition: "all .25s" }}>
                <ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
              <Typography component="h3" sx={{ fontWeight: 700, fontSize: compact ? "1rem" : "1.15rem", color: T.ink }}>
                {g.name}
              </Typography>
            </Box>
            <Typography sx={{ mt: 1, flex: 1, fontSize: compact ? "0.86rem" : "0.95rem", lineHeight: 1.6, color: T.body }}>{g.desc}</Typography>
            <Box component="span" sx={{ mt: 2, fontSize: "0.82rem", fontWeight: 600, color: T.greenDark }}>
              {host(g.url)}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
