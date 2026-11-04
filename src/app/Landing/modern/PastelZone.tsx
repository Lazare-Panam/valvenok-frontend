"use client";

import { Box } from "@mui/material";
import { MotionRoot, Blob, L } from "../../Common/LightMotion";

// Soft pastel background behind a group of homepage sections: a gentle
// colour wash, a few slowly drifting blurred blobs and a faint dot grid.
// Same palette as the About and Contact pages.
const WASH = {
  mint: `linear-gradient(180deg, #fff 0%, ${L.cream} 18%, #F1FAEC 60%, #fff 100%)`,
  sky: "linear-gradient(180deg, #fff 0%, #F3F9FE 25%, #EEF7FD 65%, #fff 100%)",
  butter: "linear-gradient(180deg, #fff 0%, #FFFCF1 25%, #FFF8E4 65%, #fff 100%)",
  lilac: "linear-gradient(180deg, #fff 0%, #F8F5FD 25%, #F4F0FC 65%, #fff 100%)",
} as const;

const BLOBS = {
  mint: [
    { color: L.lime, sx: { top: "4%", left: -180 } },
    { color: L.sky, sx: { top: "40%", right: -200 }, dur: 22, delay: 2 },
    { color: L.sun, sx: { bottom: "2%", left: "30%", width: 360, height: 360 }, dur: 26, delay: 4 },
  ],
  sky: [
    { color: L.sky, sx: { top: "6%", right: -180 } },
    { color: L.lime, sx: { bottom: "10%", left: -200 }, dur: 24, delay: 3 },
  ],
  butter: [
    { color: L.sun, sx: { top: "8%", left: -160 } },
    { color: "rgba(201,185,242,0.28)", sx: { bottom: "6%", right: -180 }, dur: 23, delay: 2 },
  ],
  lilac: [
    { color: "rgba(201,185,242,0.30)", sx: { top: "5%", right: -160 } },
    { color: L.lime, sx: { bottom: "8%", left: -180 }, dur: 25, delay: 3 },
  ],
} as const;

export default function PastelZone({ tone = "mint", children }: { tone?: keyof typeof WASH; children: React.ReactNode }) {
  return (
    <MotionRoot sx={{ position: "relative", background: WASH[tone], isolation: "isolate" }}>
      <Box aria-hidden sx={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: -1, pointerEvents: "none" }}>
        {BLOBS[tone].map((b, i) => (
          <Blob key={i} color={b.color} sx={b.sx} dur={"dur" in b ? b.dur : 18} delay={"delay" in b ? b.delay : 0} />
        ))}
        <Box sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(46,139,30,0.10) 1px, transparent 1px)", backgroundSize: "22px 22px", maskImage: "linear-gradient(180deg, transparent, black 15%, black 85%, transparent)" }} />
      </Box>
      {children}
    </MotionRoot>
  );
}
