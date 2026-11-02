import type { Metadata } from "next";

const TITLE = "ITQ Electric Rotary Actuators, 100–9,000 Nm | Valvenok";
const DESCRIPTION =
  "ITQ series quarter-turn electric rotary actuators from 100 to 9,000 Nm, IP67 / NEMA 4X, ISO 5211 mounting, for on-off and modulating valve service.";
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
