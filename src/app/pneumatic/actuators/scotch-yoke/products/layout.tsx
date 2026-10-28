import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/scotch-yoke/products" },
  title: { absolute: "Scotch Yoke & Rack and Pinion Pneumatic Actuators | Valvenok" },
  description:
    "Scotch yoke and rack and pinion pneumatic actuators for valve automation, double acting or spring return. CE, ATEX and SIL certification varies by model.",
  openGraph: {
    title: "Scotch Yoke & Rack and Pinion Pneumatic Actuators | Valvenok",
    description:
      "Scotch yoke and rack and pinion pneumatic actuators for valve automation, double acting or spring return. CE, ATEX and SIL certification varies by model.",
    type: "website",
  },
};

export default function PneumaticActuatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
