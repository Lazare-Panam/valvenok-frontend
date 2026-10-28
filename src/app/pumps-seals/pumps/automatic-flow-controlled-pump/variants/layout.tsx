import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/pumps-seals/pumps/automatic-flow-controlled-pump/variants" },
  title: { absolute: "Automatic Flow-Controlled Pumps — HQC & TQC Models | Valvenok" },
  description:
    "HQC and TQC series automatic flow-controlled pumps for 50Hz and 60Hz operation, for downward pressurisation installations below a water tower.",
  openGraph: {
    title: "Automatic Flow-Controlled Pumps — HQC & TQC Models | Valvenok",
    description:
      "HQC and TQC series automatic flow-controlled pumps for 50Hz and 60Hz operation, for downward pressurisation installations below a water tower.",
    type: "website",
  },
};

export default function FlowControlledPumpProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/pumps-seals/pumps/automatic-flow-controlled-pump/variants" /></>;
}
