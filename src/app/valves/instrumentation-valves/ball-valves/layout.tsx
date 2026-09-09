import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/valves/instrumentation-valves/ball-valves" },
};

export default function ValvesInstrumentationValvesBallValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
