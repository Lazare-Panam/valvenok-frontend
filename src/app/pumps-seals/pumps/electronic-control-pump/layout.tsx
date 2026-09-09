import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pumps-seals/pumps/electronic-control-pump" },
  title: "WQ_B / HQ_B / TQ_B Series Electronic Control Pumps",
  description:
    "WALRUS all-in-one electronic control pumps — pump, motor, pressure tank and controller in one unit. Automatic constant pressure control, 0.18–3.7 kW, up to 52M head.",
  openGraph: {
    title: "WQ_B / HQ_B / TQ_B Series Electronic Control Pumps | Valvenok",
    description:
      "WALRUS all-in-one electronic control pumps with automatic constant pressure control, dry-run and anti-cycling protection.",
    type: "website",
  },
};

export default function ElectronicControlPumpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
