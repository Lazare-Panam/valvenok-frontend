import type { Metadata } from "next";

const TITLE = "High Pressure Hex Couplings & Reducing Couplings | Valvenok";
const DESCRIPTION =
  "SS316 high pressure hex couplings and reducing hex couplings across pressure ratings and thread configurations for instrumentation and process lines.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/logo.png";

export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure/pipe-fittings/hex-coupling" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: [IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

export default function PipeCouplingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
