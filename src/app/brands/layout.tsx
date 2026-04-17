import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners & Brands", // Becomes "Authorized Partners & Brands | Valvenok"
  description: "Official distributor for PANAM, Emerson, and 40+ Global Brands.",
};

export default function BrandsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>; 
}