import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = pageMetadata({
  title: "Pipe Adapters, Bushings & Plugs — SS316 Instrumentation | Valvenok",
  description:
    "316 stainless steel pipe fittings: reducing adapters, reducing bushings, hex and hollow hex plugs and pipe caps in NPT, ISO and SAE threads.",
  path: "/fittings-tubing/instrumentation-fittings/pipe-fittings/adapters-plugs",
});

export default function FittingsTubingInstrumentationFittingsPipeFittingsAdaptersPlugsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/fittings-tubing/instrumentation-fittings/pipe-fittings/adapters-plugs" /></>;
}
