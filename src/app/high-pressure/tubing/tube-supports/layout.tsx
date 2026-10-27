import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure/tubing/tube-supports" },
  title: "High Pressure Tube Supports | Hiflux STS 316",
  description:
    "Hiflux high-pressure tube supports in STS 316 — 1, 2 and 3-line configurations for 1/4\" to 9/16\" tube, securing tube runs in high-pressure installations.",
  openGraph: {
    title: "High Pressure Tube Supports | Hiflux STS 316 | Valvenok",
    description: "Hiflux high-pressure tube supports in STS 316 — 1, 2 and 3-line configurations for 1/4\\\" to 9/16\\\" tube, securing tube runs in high-pressure installations.",
    url: "/high-pressure/tubing/tube-supports",
    siteName: "Valvenok",
    type: "website",
  },
};

export default function TubeSupportsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
