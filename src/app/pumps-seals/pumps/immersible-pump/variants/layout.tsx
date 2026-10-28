import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/pumps-seals/pumps/immersible-pump/variants" },
  title: { absolute: "Immersible Pumps — TPRK, TPHK & TPK Model Range | Valvenok" },
  description:
    "Browse immersible pump models across the TPRK_E, TPHK and TPK series for 50Hz and 60Hz operation. Compare specifications and request a quote from Valvenok.",
  openGraph: {
    title: "Immersible Pumps — TPRK, TPHK & TPK Model Range | Valvenok",
    description:
      "Browse immersible pump models across the TPRK_E, TPHK and TPK series for 50Hz and 60Hz operation. Compare specifications and request a quote from Valvenok.",
    type: "website",
  },
};

export default function ImmersiblePumpProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/pumps-seals/pumps/immersible-pump/variants" /></>;
}
