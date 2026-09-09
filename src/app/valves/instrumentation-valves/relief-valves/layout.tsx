import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/valves/instrumentation-valves/relief-valves" },
};

export default function ValvesInstrumentationValvesReliefValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
