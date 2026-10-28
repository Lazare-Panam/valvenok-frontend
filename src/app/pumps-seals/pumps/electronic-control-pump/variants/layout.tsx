import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/pumps-seals/pumps/electronic-control-pump/variants" },
  title: { absolute: "Electronic Control Pumps — TQ_B & HQ_B Models | Valvenok" },
  description:
    "TQ_B and HQ_B series electronic control pumps, each available with or without anti-microbial construction, for 50Hz and 60Hz operation. Request a quote.",
  openGraph: {
    title: "Electronic Control Pumps — TQ_B & HQ_B Models | Valvenok",
    description:
      "TQ_B and HQ_B series electronic control pumps, each available with or without anti-microbial construction, for 50Hz and 60Hz operation. Request a quote.",
    type: "website",
  },
};

export default function ElectronicControlPumpProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/pumps-seals/pumps/electronic-control-pump/variants" /></>;
}
