import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/pvae32/products" },
  title: { absolute: "Danfoss PVE Series Electrohydraulic Actuators | Valvenok" },
  description:
    "Danfoss PVE electrohydraulic actuators for proportional directional control valves. Available in PVEA, PVEH, PVEM, PVEO, PVES, PVG and PVHC series.",
  openGraph: {
    title: "Danfoss PVE Series Electrohydraulic Actuators | Valvenok",
    description:
      "Danfoss PVE electrohydraulic actuators for proportional directional control valves. Available in PVEA, PVEH, PVEM, PVEO, PVES, PVG and PVHC series.",
    type: "website",
  },
};

export default function DanfossActuatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
