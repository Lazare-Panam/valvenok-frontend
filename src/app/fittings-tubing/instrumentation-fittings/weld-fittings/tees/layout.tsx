import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tube Socket Weld Tees — SS316",
  description:
    "SS316 male run tees and male branch tees with tube socket weld (TSW) and NPT male ends, for permanent three-way connections in instrumentation tubing.",
  path: "/fittings-tubing/instrumentation-fittings/weld-fittings/tees",
});

export default function WeldFittingTeesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
