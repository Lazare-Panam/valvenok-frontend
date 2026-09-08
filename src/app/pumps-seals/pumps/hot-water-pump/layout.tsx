import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TQCN / HQCN Series Hot Water Pumps",
  description:
    "WALRUS all-in-one electronic control pumps rated for hot water up to +90°C. Automatic relief valve, anti-cycling protection, corrosion resistant construction.",
  openGraph: {
    title: "TQCN / HQCN Series Hot Water Pumps | Valvenok",
    description:
      "WALRUS all-in-one electronic control pumps rated for hot water up to +90°C, automatic relief valve, anti-cycling protection.",
    type: "website",
  },
};

export default function HotWaterPumpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
