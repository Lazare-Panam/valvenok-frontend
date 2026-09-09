import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/valves/instrumentation-valves/check-valves" },
};

export default function ValvesInstrumentationValvesCheckValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
