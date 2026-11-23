'use client'

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import { T, textReset } from "./homeTokens";
import { Eyebrow } from "./HomeSectionHeader";
import PillButton from "./HomeButtons";
import { BRAND, withAlpha } from "@/src/theme/brand";

// Same copy as the original AboutContact (JOSCAR) section.
const sweep = keyframes`
  0% { transform: translateX(-120%) skewX(-18deg); }
  55%, 100% { transform: translateX(220%) skewX(-18deg); }
`;
const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(-1.5deg); }
  50% { transform: translateY(-10px) rotate(-1.5deg); }
`;

const CERT_IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/certfiicates/Joscar_Cert";

export default function JoscarModern() {
  return (
    <Box component="section" sx={{ ...textReset, width: "100%", boxSizing: "border-box", maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 }, py: { xs: 8, md: 11 } }}>
      <Box
        sx={{
          borderRadius: "26px",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
          border: `1px solid ${T.border}`,
          background: `radial-gradient(600px 300px at 100% 100%, ${withAlpha(BRAND.main, 0.18)}, transparent 60%), ${T.brandSoft}`,
        }}
      >
        <Box sx={{ p: { xs: 3.5, md: 6 } }}>
          <Eyebrow>JOSCAR Registered</Eyebrow>
          <Typography component="h2" sx={{ mt: 2, fontWeight: 700, fontSize: { xs: "1.8rem", md: "2.4rem" }, letterSpacing: "-0.03em", lineHeight: 1.15, color: T.ink }}>
            Why JOSCAR Matters for Your Supply Chain ?
          </Typography>
          <Typography sx={{ mt: 2, fontSize: "1.02rem", lineHeight: 1.75, color: T.body }}>
            JOSCAR — the Joint Supply Chain Accreditation Register — is the defence and aerospace industry&apos;s single pre-qualification
            standard. It exists so that contractors don&apos;t have to run separate due diligence processes for every supplier they work with.
          </Typography>
          <Typography sx={{ mt: 1.5, fontSize: "1.02rem", lineHeight: 1.75, color: T.body }}>
            By sourcing from a JOSCAR-registered supplier like Valvenok, your procurement team can move faster, reduce audit overhead, and
            demonstrate compliance throughout your supply chain — from frame contracts to urgent spares.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <PillButton href="/contact">Request JOSCAR Documentation</PillButton>
          </Box>
        </Box>
        <Box sx={{ position: "relative", minHeight: { xs: 340, md: 480 }, display: "grid", placeItems: "center", p: { xs: 3, md: 5 } }}>
          {/* Soft glow behind the certificate */}
          <Box sx={{ position: "absolute", width: "70%", height: "70%", borderRadius: "50%", background: `radial-gradient(circle, ${withAlpha(BRAND.main, 0.35)}, transparent 70%)`, filter: "blur(20px)" }} />
          <Box
            sx={{
              position: "relative",
              width: { xs: 240, md: 320 },
              aspectRatio: "1 / 1",
              animation: `${float} 6s ease-in-out infinite`,
              "@media (prefers-reduced-motion: reduce)": { animation: "none" },
            }}
          >
            <Image src={CERT_IMAGE} alt="Valvenok JOSCAR Accreditation Certificate" fill sizes="(max-width: 900px) 70vw, 30vw" style={{ objectFit: "contain", transform: "scale(1.55)" }} />
            {/* Shine: a light band that sweeps across the framed certificate */}
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                inset: "14% 22%",
                overflow: "hidden",
                pointerEvents: "none",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: "-20%",
                  bottom: "-20%",
                  width: "35%",
                  background: `linear-gradient(90deg, transparent, ${withAlpha(BRAND.white, 0.75)}, transparent)`,
                  animation: `${sweep} 3.6s ease-in-out infinite`,
                  "@media (prefers-reduced-motion: reduce)": { animation: "none" },
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
