'use client'

import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { T, textReset } from "./tokens";
import { Eyebrow } from "./SectionHeader";

// Modelled on the "Join the Conversation" wall on bray.com: two full-width rows of
// 140px tiles drifting slowly in opposite directions, faded towards both edges,
// with one call to action floating over each row.

const BLOB = "https://pblol2.blob.core.windows.net";
// Social posters in blob storage
const SOCIAL = "https://pblol2.blob.core.windows.net/valvenok-images/social";

// Decorative only: the tiles are not links, the two buttons are the calls to action.
type Tile = { src: string; alt: string };

const POSTERS: Tile[] = [
  { src: `${SOCIAL}/pietro-fiorentini-partnership.jpg`, alt: "Pietro Fiorentini and Valvenok partnership" },
  { src: `${SOCIAL}/kosaplus-partnership.jpg`, alt: "Valvenok and KOSAPLUS partnership" },
  { src: `${SOCIAL}/sealflex-cartridge-seals.jpg`, alt: "Valvenok Sealflex cartridge seals" },
  { src: `${SOCIAL}/mars-valve-partnership.jpg`, alt: "Mars Valve Co. and Valvenok partnership" },
  { src: `${SOCIAL}/panam-hp-needle-valve.jpg`, alt: "PANAM HP series needle valve" },
  { src: `${SOCIAL}/value-valves-butterfly-range.jpg`, alt: "Value Valves butterfly range" },
  { src: `${SOCIAL}/butterfly-valve-selection.jpg`, alt: "Butterfly valve selection guide" },
];

// Product and article images already on blob storage, to fill the rows.
const LIBRARY: Tile[] = [
  { src: `${BLOB}/valvenok-images/products/hiflux/needle-valve.png`, alt: "Hiflux high-pressure needle valve" },
  { src: `${BLOB}/mars-valves/mars-stock-coming.jpeg`, alt: "Mars valve stock arriving in the UK" },
  { src: `${BLOB}/valvenok-images/products/cryogenic/YEX-1100.png`, alt: "Cryogenic valve" },
  { src: `${BLOB}/valvenok-images/blogs/vsi.jpeg`, alt: "Valvenok and VSI partnership" },
  { src: `${BLOB}/mars-valves/ball-valves/series-10-10.png`, alt: "MARS ball valve" },
  { src: `${BLOB}/valvenok-images/products/hiflux/manifold-block.png`, alt: "Hiflux manifold block" },
  { src: `${BLOB}/panam-images/products/actuators/ac-hero.jpg`, alt: "Pneumatic valve actuator" },
  { src: `${BLOB}/valvenok-images/products/filters/DFM_Mega_Flow_Rate_Filter.png`, alt: "High flow filter" },
  { src: `${BLOB}/valvenok-images/blogs/blog4.jpg`, alt: "Hydrogen instrumentation fittings" },
  { src: `${BLOB}/valvenok-images/products/hiflux/check-valve.png`, alt: "Hiflux check valve" },
  { src: `${BLOB}/valvenok-images/products/pumps/HQIC.webp`, alt: "Industrial pump" },
  { src: `${BLOB}/valvenok-images/products/valves/butterfly-valves/ptfe_lined_butterfly.png`, alt: "PTFE lined butterfly valve" },
  { src: `${BLOB}/valvenok-images/products/seals/Seals.jpg`, alt: "Mechanical seals" },
  { src: `${BLOB}/valvenok-images/products/actuators/hydraulic/adf.webp`, alt: "Hydraulic actuator" },
  { src: `${BLOB}/panam-images/products/high-pressure/hp-nv.jpg`, alt: "High-pressure needle valve" },
  { src: `${BLOB}/valvenok-images/products/hiflux/relief-valve.png`, alt: "Hiflux relief valve" },
  { src: `${BLOB}/valvenok-images/blogs/pumps-blog-hero.jpg`, alt: "Submersible pumps" },
  { src: `${BLOB}/valvenok-images/products/valves/apollo-valves-88a10a01.webp`, alt: "Flanged ball valve" },
  { src: `${BLOB}/valvenok-images/products/hiflux/trunion-ball-valve.png`, alt: "Hiflux trunnion ball valve" },
  { src: `${BLOB}/valvenok-images/products/hiflux/air-operated-valve.png`, alt: "Hiflux air-operated valve" },
];

// Interleave posters with library images; the second row starts at a different point.
const ROW_A: Tile[] = LIBRARY.slice(0, 13).flatMap((t, i) => (i < POSTERS.length ? [POSTERS[i], t] : [t]));
const ROW_B: Tile[] = [...LIBRARY.slice(7), ...LIBRARY.slice(0, 7)].flatMap((t, i) => (i < POSTERS.length ? [POSTERS[(i + 3) % POSTERS.length], t] : [t]));

const LINKEDIN = "https://uk.linkedin.com/company/valvenok-ltd";

const TILE = 140;
const GAP = 25;

const scroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

function Row({ items, reverse = false, cta }: { items: Tile[]; reverse?: boolean; cta: React.ReactNode }) {
  // Two copies of the set; moving by half the width brings the second copy exactly
  // where the first started, so the loop has no visible seam.
  const loop = [...items, ...items];
  return (
    <Box sx={{ position: "relative", width: "100%", minWidth: 0 }}>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          // Fades out at both edges, strongest in the centre
          maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,.15) 10%, rgba(0,0,0,.4) 50%, rgba(0,0,0,.15) 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,.15) 10%, rgba(0,0,0,.4) 50%, rgba(0,0,0,.15) 90%, transparent 100%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: `${GAP}px`,
            width: "max-content",
            willChange: "transform",
            animation: `${scroll} 75s linear infinite`,
            animationDirection: reverse ? "reverse" : "normal",
            "@media (prefers-reduced-motion: reduce)": { animation: "none" },
            // The gap after the last tile keeps the halfway point exact
            pr: `${GAP}px`,
          }}
        >
          {loop.map((p, i) => {
            const copy = i >= items.length;
            return (
              <Box
                key={i}
                aria-hidden
                sx={{ position: "relative", flexShrink: 0, width: { xs: 121, md: TILE }, height: { xs: 121, md: TILE }, bgcolor: "#DCE5DE", overflow: "hidden" }}
              >
                <Image src={p.src} alt="" fill sizes={`${TILE}px`} quality={75} loading="eager" style={{ objectFit: "cover", objectPosition: "top" }} />
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", pointerEvents: "none", "& > *": { pointerEvents: "auto" } }}>{cta}</Box>
    </Box>
  );
}

function CtaButton({ href, external, icon, children, color }: { href: string; external?: boolean; icon: React.ReactNode; children: React.ReactNode; color: string }) {
  return (
    <Box
      component={external ? "a" : Link}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1.25,
        width: { xs: 220, md: 250 },
        height: { xs: 48, md: 75 },
        borderRadius: "10px",
        border: "1px solid rgba(255,255,255,0.9)",
        bgcolor: color,
        color: "#fff",
        fontWeight: 600,
        fontSize: { xs: "0.92rem", md: "1rem" },
        textDecoration: "none",
        boxShadow: "4px 4px 8px rgba(57,57,56,0.25)",
        transition: "transform .2s, filter .2s",
        "&:hover": { transform: "translateY(-2px)", filter: "brightness(1.08)" },
      }}
    >
      {icon}
      {children}
    </Box>
  );
}

export default function SocialWall() {
  return (
    <Box component="section" sx={{ ...textReset, width: "100%", boxSizing: "border-box", pt: { xs: 6, md: 8 }, pb: { xs: 5, md: 7.5 }, overflow: "hidden" }}>
      <Box sx={{ maxWidth: T.maxWidth, mx: "auto", px: { xs: 2, md: 4 } }}>
        <Eyebrow>Join the conversation</Eyebrow>
        <Typography component="h2" sx={{ mt: 2, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, fontSize: { xs: "2rem", md: "2.75rem" }, color: T.ink, maxWidth: 560 }}>
          Stay informed, stay inspired
        </Typography>
        <Typography sx={{ mt: 1.5, maxWidth: 560, fontSize: "1.05rem", lineHeight: 1.65, color: T.body }}>
          New partnerships, product ranges and technical guides from Valvenok. Follow us to see them first.
        </Typography>
      </Box>

      {/* Rows stay inside the same frame as the heading, fading out at its edges */}
      <Box
        sx={{
          mt: { xs: 5, md: 5 },
          width: "100%",
          boxSizing: "border-box",
          maxWidth: T.maxWidth,
          mx: "auto",
          px: { xs: 2, md: 4 },
          display: "flex",
          flexDirection: "column",
          gap: `${GAP}px`,
        }}
      >
        <Row
          items={ROW_A}
          cta={
            <CtaButton href={LINKEDIN} external color="#0E76A8" icon={<LinkedInIcon />}>
              Follow us on LinkedIn
            </CtaButton>
          }
        />
        <Row
          items={ROW_B}
          reverse
          cta={
            <CtaButton href="/news" color={T.greenDark} icon={<ArticleOutlinedIcon />}>
              Read our latest news
            </CtaButton>
          }
        />
      </Box>
    </Box>
  );
}
