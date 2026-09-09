import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pumps-seals/pumps/direct-water-pump" },
  title: "TP3_PTB Series Direct Water Pumps",
  description:
    "WALRUS compact direct water pumps with brass impeller for high temperature and friction resistance, hygienic plastic pump body, built-in thermal overload protection.",
  openGraph: {
    title: "TP3_PTB Series Direct Water Pumps | Valvenok",
    description:
      "WALRUS compact direct water pumps with brass impeller, hygienic plastic pump body, and thermal overload protection.",
    type: "website",
  },
};

export default function DirectWaterPumpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
