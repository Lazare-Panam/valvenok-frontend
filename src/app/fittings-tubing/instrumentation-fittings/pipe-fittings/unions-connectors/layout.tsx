import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pipe Unions & Connectors — SS316 Instrumentation | Valvenok",
  description:
    "316 stainless steel pipe unions and connectors: bulkhead unions, swivel unions, swivel connectors and union elbows. Filter by size and thread.",
  path: "/fittings-tubing/instrumentation-fittings/pipe-fittings/unions-connectors",
});

export default function FittingsTubingInstrumentationFittingsPipeFittingsUnionsConnectorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
