import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/brands" },
  title: { absolute: "Our Brands & Manufacturer Partners — 25+ Brands | Valvenok" }, // Becomes "Authorized Partners & Brands | Valvenok"
  description: "Valvenok supplies 25+ industrial brands including PANAM, Hiflux, Mars Valves, Pietro Fiorentini, Susin, Kosaplus and Youngdo. Browse each brand's range.",
  openGraph: {
    title: "Our Brands & Manufacturer Partners — 25+ Brands | Valvenok",
    description: "Valvenok supplies 25+ industrial brands including PANAM, Hiflux, Mars Valves, Pietro Fiorentini, Susin, Kosaplus and Youngdo. Browse each brand's range.",
    url: "/brands",
    siteName: "Valvenok",
    type: "website",
  },
};

export default function BrandsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>; 
}