import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/brands" },
  title: { absolute: "26 Valve Brands & Manufacturers We Supply | Valvenok" },
  description: "Valve brands and manufacturers supplied by Valvenok: PANAM, Hiflux, Mars Valves, Pietro Fiorentini, Susin, Kosaplus, Youngdo and more. Browse each brand.",
  openGraph: {
    title: "26 Valve Brands & Manufacturers We Supply | Valvenok",
    description: "Valve brands and manufacturers supplied by Valvenok: PANAM, Hiflux, Mars Valves, Pietro Fiorentini, Susin, Kosaplus, Youngdo and more. Browse each brand.",
    url: "/brands",
    siteName: "Valvenok",
    type: "website",
  },
};

export default function BrandsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>; 
}