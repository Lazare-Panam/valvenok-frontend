import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/brands" },
  title: "Partners & Brands", // Becomes "Authorized Partners & Brands | Valvenok"
  description: "Valvenok supplies 25+ industrial brands including PANAM, Hiflux, Mars Valves, Pietro Fiorentini and Youngdo.",
  openGraph: {
    title: "Partners & Brands | Valvenok",
    description: "Valvenok supplies 25+ industrial brands including PANAM, Hiflux, Mars Valves, Pietro Fiorentini and Youngdo.",
    url: "/brands",
    siteName: "Valvenok",
    type: "website",
  },
};

export default function BrandsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>; 
}