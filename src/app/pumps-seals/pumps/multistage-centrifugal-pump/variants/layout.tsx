import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/pumps-seals/pumps/multistage-centrifugal-pump/variants" },
  title: { absolute: "Multistage Centrifugal Pumps — HS & TS Models | Valvenok" },
  description:
    "HS and TS series multistage centrifugal pumps for 50Hz and 60Hz operation, in single and three-phase configurations. Compare models and request a quote.",
  openGraph: {
    title: "Multistage Centrifugal Pumps — HS & TS Models | Valvenok",
    description:
      "HS and TS series multistage centrifugal pumps for 50Hz and 60Hz operation, in single and three-phase configurations. Compare models and request a quote.",
    type: "website",
  },
};

export default function MultistageCentrifugalProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/pumps-seals/pumps/multistage-centrifugal-pump/variants" /></>;
}
