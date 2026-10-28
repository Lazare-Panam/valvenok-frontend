import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/tube-fittings/port-connectors" },
  title: { absolute: "Tube Port Connectors & Reducing Port Connectors | Valvenok" },
  description:
    "Stainless steel port connectors and reducing port connectors for direct tube-to-port connections, in imperial and metric tube OD. Request a quote.",
  openGraph: {
    title: "Tube Port Connectors & Reducing Port Connectors | Valvenok",
    description:
      "Stainless steel port connectors and reducing port connectors for direct tube-to-port connections, in imperial and metric tube OD. Request a quote.",
    type: "website",
  },
};

export default function PortConnectorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/fittings-tubing/instrumentation-fittings/tube-fittings/port-connectors" /></>;
}
