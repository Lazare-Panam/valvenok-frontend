import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/itq/products" },
  title: { absolute: "ITQ Series Electric Actuators — All 11 Models | Valvenok" },
  description:
    "All eleven ITQ series quarter-turn electric actuators, ITQ 0100 to ITQ 9000 (100–9,000 Nm), with operating times, mounting, currents and weights. Request a quote from Valvenok.",
  openGraph: {
    title: "ITQ Series Electric Actuators — All 11 Models | Valvenok",
    description:
      "ITQ 0100 to ITQ 9000 quarter-turn electric actuators, 100–9,000 Nm, with full specifications.",
    url: "/actuators/electric/itq/products",
    type: "website",
  },
};

export default function ITQProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
