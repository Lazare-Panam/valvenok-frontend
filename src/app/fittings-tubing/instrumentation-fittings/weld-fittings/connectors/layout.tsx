import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tube Socket Weld Connectors — SS316",
  description:
    "SS316 male and female weld connectors with a tube socket weld (TSW) end and an NPT threaded end, for joining instrumentation tubing to threaded ports.",
  path: "/fittings-tubing/instrumentation-fittings/weld-fittings/connectors",
});

export default function WeldFittingConnectorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
