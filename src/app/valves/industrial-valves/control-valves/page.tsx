import type { Metadata } from "next";
import ProductHero from "@/src/app/Common/Products_Page/ProductHero";
import TrustStrip from "@/src/app/Common/Products_Page/TrustStrip";
import { Category } from "@/src/app/Common/Products_Page/ProductCard";
import ProcessValvesGrid from "../../ProcessValvesGrid";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  alternates: { canonical: '/valves/industrial-valves/control-valves' },
  title: "Mars Ball Valves",
  description:
    "Valvenok supplies the full Mars ball valve range — 1-piece, 2-piece, 3-piece, multi-way diverter, wafer compact and fire-safe flanged designs in stainless steel 316 with API 607 fire-safe certification.",
};

const CONTROL_VALVE_SERIES: Category[] = [
  {
    code: "VSI-A15",
    title: "Atlas 15 Severe Service Control Valve",
    subtitle: 'Severe Service Control — 2" NPS',
    description:
      'The Atlas 15 delivers the highest flow capacity in a 2" severe service control valve. Built for high-pressure precision control with up to 80:1 rangeability and extended 2+ year maintenance cycles.',
    specs: [
      '2" NPS',
      "Cv Up to 70",
      "0–5,000 psi DP",
      "Rangeability Up to 80:1",
      "< 60 dB Choked Flow",
      "2+ Year Maintenance Cycle",
    ],
    applications:
      "High-Pressure Process Control, Oil & Gas, Petrochemical, Precision Flow Control",
    href: "/valves/industrial-valves/control-valves/vsi-atlas-15",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/Atlas-15.png",
    logoUrl:
      "https://vsillc.com/wp-content/uploads/2026/02/Logo-2026-300x168.png",
  },
  {
    code: "VSI-A21",
    title: "Atlas 21 Severe Service Control Valve",
    subtitle: 'Severe Service Control — 3" NPS',
    description:
      'The Atlas 21 is engineered for pump testing, storage blowdown and severe service control in a 3" body. Delivers up to 130 Cv with ultra-low noise and 700:1 control range at ±3% accuracy.',
    specs: [
      '3" NPS',
      "Cv Up to 130",
      "0–5,000 psi DP",
      "Rangeability Up to 58:1",
      "< 60 dB Choked Flow",
      "2+ Year Maintenance Cycle",
    ],
    applications:
      "Pump Testing, Storage Blowdown, Severe Service Control, Oil & Gas, Petrochemical",
   href: "/valves/industrial-valves/control-valves/vsi-atlas-21",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/Atlas-21.png",
    logoUrl:
      "https://vsillc.com/wp-content/uploads/2026/02/Logo-2026-300x168.png",
  },
  {
    code: "VSI-A32",
    title: "Atlas 32 Severe Service Control Valve",
    subtitle: 'Severe Service Control — 4" NPS',
    description:
      'The Atlas 32 is the maximum capacity severe service control valve in the Atlas range. A 4" body with up to 300 Cv for the most demanding high-flow applications.',
    specs: [
      '4" NPS',
      "Cv Up to 300",
      "0–5,000 psi DP",
      "Rangeability Up to 58:1",
      "< 60 dB Choked Flow",
      "2+ Year Maintenance Cycle",
    ],
    applications:
      "High-Flow Process Control, Oil & Gas, Petrochemical, Severe Service",
   href: "/valves/industrial-valves/control-valves/vsi-atlas-32",
    image:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/gas-regulator/vsi-32.JPG",
    logoUrl:
      "https://vsillc.com/wp-content/uploads/2026/02/Logo-2026-300x168.png",
  },
];
const TRUST_POINTS = [
  { value: "API 607", label: "Fire Safe Certified" },
  { value: "SS316 (CF8M)", label: "Material Standard" },
  { value: '1/8" – 12"', label: "Size Range" },
  { value: "Up to 2000 PSI", label: "Pressure Rating" },
  { value: "11 Series", label: "Ball Valve Range" },
];

export default function MarsValvesIndexPage() {
  return (
    <>
      <ProductHero
        title="VSI Control Valves"
        subtitle="Severe Service Control Valves — Atlas Series"
        description="VSI – Valve Systems International has built a global reputation engineering severe service control valves for the most demanding process conditions. The Atlas Series is designed, engineered and manufactured under proprietary specification with decades of proven application expertise in high-pressure, high-noise and erosive service environments. Precise flow control, extended maintenance cycles and 700:1 control range at ±3% accuracy define the Atlas range — performance that cannot be replicated by imitation."
        imageSrc="https://pblol2.blob.core.windows.net/valvenok-images/products/valves/Atlas-15.png"
        imageAlt="VSI Atlas Severe Service Control Valves"
        breadcrumb="Products / Valves / VSI Control Valves"
      />
        <Box
        sx={{
          '& .MuiCard-root img': {
            transform: 'scale(1.3)',
            transition: 'transform 0.3s ease',
          },
        }}
      > <ProcessValvesGrid families={CONTROL_VALVE_SERIES} /></Box>
       

      <TrustStrip points={TRUST_POINTS} />
    </>
  );
}
