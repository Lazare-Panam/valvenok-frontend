import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tube Socket Weld Elbows — SS316",
  description:
    "SS316 male and female weld elbows with a tube socket weld (TSW) end and an NPT threaded end, for permanent changes of direction in instrumentation tubing.",
  path: "/fittings-tubing/instrumentation-fittings/weld-fittings/elbows",
});

export default function WeldFittingElbowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
