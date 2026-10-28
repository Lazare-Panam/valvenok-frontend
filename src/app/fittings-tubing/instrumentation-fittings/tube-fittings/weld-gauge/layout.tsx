import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/tube-fittings/weld-gauge" },
  title: { absolute: "Tube Weld & Gauge Connectors — SS316 Fittings | Valvenok" },
  description:
    "Stainless steel male pipe weld connectors and elbows, tube socket weld connectors and elbows, and gauge connectors for instrumentation tubing.",
  openGraph: {
    title: "Tube Weld & Gauge Connectors — SS316 Fittings | Valvenok",
    description:
      "Stainless steel male pipe weld connectors and elbows, tube socket weld connectors and elbows, and gauge connectors for instrumentation tubing.",
    type: "website",
  },
};

export default function WeldGaugeConnectorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
