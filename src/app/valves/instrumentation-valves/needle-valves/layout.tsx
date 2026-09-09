import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/valves/instrumentation-valves/needle-valves" },
};

export default function ValvesInstrumentationValvesNeedleValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
