import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/pumps-seals/pumps/direct-water-pump/variants" },
  title: { absolute: "Direct Water Pumps — TP320 & TP325 Model Range | Valvenok" },
  description:
    "TP320P(T) and TP325P(T) models, each available with or without anti-microbial construction, across 50Hz and 60Hz operation.",
  openGraph: {
    title: "Direct Water Pumps — TP320 & TP325 Model Range | Valvenok",
    description:
      "TP320P(T) and TP325P(T) models, each available with or without anti-microbial construction, across 50Hz and 60Hz operation.",
    type: "website",
  },
};

export default function DirectWaterPumpProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/pumps-seals/pumps/direct-water-pump/variants" /></>;
}
