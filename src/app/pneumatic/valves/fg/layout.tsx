import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FG Series Pneumatic Solenoid Valves | Valvenok",
  description:
    '5/2 and 5/3 way pneumatic solenoid valves. Single and double solenoid configurations, BSP port sizes 1/8" to 1", center closed options available.',
  openGraph: {
    title: "FG Series Pneumatic Solenoid Valves | Valvenok",
    description:
      '5/2 and 5/3 way pneumatic solenoid valves, single and double solenoid configurations, BSP port sizes 1/8" to 1".',
    type: "website",
  },
};

export default function FGValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
