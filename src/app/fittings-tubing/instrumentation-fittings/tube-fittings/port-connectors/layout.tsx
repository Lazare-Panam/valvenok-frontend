import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tube Fittings — Port Connectors | Valvenok",
  description:
    "Stainless steel port connectors and reducing port connectors for direct tube-to-port connections. Available in Imperial and Metric tube OD.",
  openGraph: {
    title: "Tube Fittings — Port Connectors | Valvenok",
    description:
      "Stainless steel port connectors and reducing port connectors for direct tube-to-port connections.",
    type: "website",
  },
};

export default function PortConnectorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
