import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/pumps-seals/pumps/hot-water-pump/variants" },
  title: { absolute: "Hot Water Pumps — TQCN & HQCN Models to +90°C | Valvenok" },
  description:
    "TQCN and HQCN series pumps across 50Hz and 60Hz operation, single and three-phase configurations, rated for liquid temperatures up to +90°C.",
  openGraph: {
    title: "Hot Water Pumps — TQCN & HQCN Models to +90°C | Valvenok",
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
  return <>{children}<RangeCopy path="/pumps-seals/pumps/hot-water-pump/variants" /></>;
}
