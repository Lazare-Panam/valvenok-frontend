import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITL Series Compact Linear Electric Actuators",
  description:
    "Compact linear electric actuators with 100% duty cycle motor. 1–10 kN thrust, IP66/67, universal power supply, 4–20mA / 0–10V control.",
  openGraph: {
    title: "ITL Series Compact Linear Electric Actuators | Valvenok",
    description:
      "Compact linear electric actuators with 100% continuous duty cycle, 1–10 kN thrust, IP66/67 protection.",
    type: "website",
  },
};

export default function ITLLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
