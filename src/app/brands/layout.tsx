import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/brands" },
  title: { absolute: "Valve Brands & Manufacturers We Supply — 25+ Brands | Valvenok" }, // Becomes "Authorized Partners & Brands | Valvenok"
  description: "Valve brands and manufacturers supplied by Valvenok: PANAM, Hiflux, Mars Valves, Pietro Fiorentini, Susin, Kosaplus, Youngdo and more. Browse each brand.",
  openGraph: {
    title: "Valve Brands & Manufacturers We Supply — 25+ Brands | Valvenok",
    description: "Valve brands and manufacturers supplied by Valvenok: PANAM, Hiflux, Mars Valves, Pietro Fiorentini, Susin, Kosaplus, Youngdo and more. Browse each brand.",
    url: "/brands",
    siteName: "Valvenok",
    type: "website",
  },
};

export default function BrandsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>; 
}