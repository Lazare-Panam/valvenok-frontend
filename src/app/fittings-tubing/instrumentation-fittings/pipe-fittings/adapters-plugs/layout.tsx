import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pipe Adapters, Bushings & Plugs — SS316",
  description:
    "316 stainless steel instrumentation pipe fittings: reducing adapters, reducing bushings, hex and hollow hex plugs and pipe caps in NPT, ISO and SAE threads.",
  path: "/fittings-tubing/instrumentation-fittings/pipe-fittings/adapters-plugs",
});

export default function FittingsTubingInstrumentationFittingsPipeFittingsAdaptersPlugsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
