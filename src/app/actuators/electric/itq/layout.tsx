import type { Metadata } from "next";

const TITLE = "ITQ Electric Rotary Actuator | Valvenok";
const DESCRIPTION =
  "ITQ rotary electric actuators, 100-9,000 Nm, IP67/NEMA 4X, ISO 5211 mount.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itq.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/itq" },
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

export default function ITQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
