import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = pageMetadata({
  title: "Tube Socket Weld Connectors — SS316, NPT Ends | Valvenok",
  description:
    "SS316 male and female weld connectors with a tube socket weld (TSW) end and an NPT threaded end, for joining instrumentation tubing to threaded ports.",
  path: "/fittings-tubing/instrumentation-fittings/weld-fittings/connectors",
});

export default function WeldFittingConnectorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/fittings-tubing/instrumentation-fittings/weld-fittings/connectors" /></>;
}
