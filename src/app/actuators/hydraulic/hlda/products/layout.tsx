import type { Metadata } from "next";
import { HLDA_IMAGE } from "../hldaData";

const TITLE = "HLDA Linear Piston Hydraulic Actuator Models | Valvenok";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/hlda/products" },
  title: { absolute: TITLE },
  description:
    "All eleven HLDA / EHLDA linear piston hydraulic actuators, HLDA-030 to HLDA-200 (32–200 mm bore), with close and open thrust at 100, 130 and 160 bar. Request a quote from Valvenok.",
  openGraph: {
    title: TITLE,
    description: "HLDA-030 to HLDA-200 linear piston hydraulic actuators, 6–402 kN, with full thrust tables.",
    url: "/actuators/hydraulic/hlda/products",
    type: "website",
    images: [HLDA_IMAGE],
  },
};

export default function HLDAProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
