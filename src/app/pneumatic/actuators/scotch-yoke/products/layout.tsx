import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pneumatic Actuators",
  description:
    "Scotch-Yoke and Rack & Pinion pneumatic actuators for industrial valve automation. Double acting and spring return configurations with CE, ATEX, and SIL certifications.",
  openGraph: {
    title: "Pneumatic Actuators | Valvenok",
    description:
      "Scotch-Yoke and Rack & Pinion pneumatic actuators for industrial valve automation, CE, ATEX, and SIL certified.",
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
