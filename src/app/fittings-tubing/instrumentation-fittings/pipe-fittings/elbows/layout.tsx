import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pipe Elbows — Male & Street Elbows, 316 Stainless | Valvenok",
  description:
    "316 stainless steel instrumentation pipe elbows, including male elbows and street elbows, in NPT, ISO and SAE/MS threads. Filter by size, then request a quote.",
  path: "/fittings-tubing/instrumentation-fittings/pipe-fittings/elbows",
});

export default function FittingsTubingInstrumentationFittingsPipeFittingsElbowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
