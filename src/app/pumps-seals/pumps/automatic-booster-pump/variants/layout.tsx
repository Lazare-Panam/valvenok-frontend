import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/pumps-seals/pumps/automatic-booster-pump/variants" },
  title: { absolute: "Automatic Booster Pumps — TP820 & TP825 Models | Valvenok" },
  description:
    "TP820P(T) and TP825P(T) models, each available with or without anti-microbial construction, across 50Hz and 60Hz operation.",
  openGraph: {
    title: "Automatic Booster Pumps — TP820 & TP825 Models | Valvenok",
    description:
      "TP820P(T) and TP825P(T) models, each available with or without anti-microbial construction, across 50Hz and 60Hz operation.",
    type: "website",
  },
};

export default function AutomaticBoosterPumpProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/pumps-seals/pumps/automatic-booster-pump/variants" /></>;
}
