import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HQC / TQC Series Automatic Flow-Controlled Pumps | Valvenok",
  description:
    "WALRUS downward-pressurization pumps for installation below a water tower. Automatic start/stop on demand, compact, quiet and corrosion resistant, up to 4.4 kg/cm² pressure.",
  openGraph: {
    title: "HQC / TQC Series Automatic Flow-Controlled Pumps | Valvenok",
    description:
      "WALRUS downward-pressurization pumps for installation below a water tower, automatic start/stop, corrosion resistant.",
    type: "website",
  },
};

export default function AutomaticFlowControlledPumpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
