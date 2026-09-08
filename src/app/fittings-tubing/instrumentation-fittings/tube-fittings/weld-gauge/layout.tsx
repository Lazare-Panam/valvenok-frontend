import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tube Fittings — Weld & Gauge Connectors",
  description:
    "Stainless steel weld and gauge connector fittings including male pipe weld connectors, male pipe weld elbows, tube socket weld connectors, tube socket weld elbows and gauge connectors.",
  openGraph: {
    title: "Tube Fittings — Weld & Gauge Connectors | Valvenok",
    description:
      "Stainless steel weld and gauge connector fittings for pipe butt weld, socket weld, and gauge connections.",
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
