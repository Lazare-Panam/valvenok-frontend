import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "All Instrumentation Pipe Fittings — SS316 Range | Valvenok",
  description:
    "The full range of 316 stainless steel instrumentation pipe fittings in NPT, ISO tapered, ISO parallel, metric and SAE/MS threads. Filter by type and size.",
  path: "/fittings-tubing/instrumentation-fittings/pipe-fittings/all",
});

export default function FittingsTubingInstrumentationFittingsPipeFittingsAllLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
