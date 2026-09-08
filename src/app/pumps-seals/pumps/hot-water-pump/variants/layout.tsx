import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hot Water Pumps",
  description:
    "TQCN and HQCN series pumps across 50Hz and 60Hz operation, single and three-phase configurations, rated for liquid temperatures up to +90°C.",
  openGraph: {
    title: "Hot Water Pumps | Valvenok",
    description:
      "TQCN and HQCN series pumps across 50Hz and 60Hz operation, single and three-phase configurations, rated for liquid temperatures up to +90°C.",
    type: "website",
  },
};

export default function HotWaterPumpProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
