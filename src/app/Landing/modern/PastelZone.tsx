"use client";

import { MotionRoot } from "../../Common/LightMotion";
import { AQUA, BRAND } from "@/src/theme/brand";

// One full-width band of the homepage (23 Nov 2026). Bands alternate white and
// pale aqua (#E4FFFF) down the page, so each section is clearly separated.
// Cards inside stay white. Colours from src/theme/brand.ts.
export type BandTone = "white" | "aqua";

export default function PastelZone({ tone = "white", children }: { tone?: BandTone; children: React.ReactNode }) {
  return (
    <MotionRoot sx={{ position: "relative", bgcolor: tone === "aqua" ? AQUA.mistFaint : BRAND.white }}>
      {children}
    </MotionRoot>
  );
}
