import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = pageMetadata({
  title: "Tube Socket Weld Tees — SS316 Run & Branch Tees | Valvenok",
  description:
    "SS316 male run tees and male branch tees with tube socket weld (TSW) and NPT male ends, for permanent three-way connections in instrumentation tubing.",
  path: "/fittings-tubing/instrumentation-fittings/weld-fittings/tees",
});

export default function WeldFittingTeesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/fittings-tubing/instrumentation-fittings/weld-fittings/tees" /></>;
}
