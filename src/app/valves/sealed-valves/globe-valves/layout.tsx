import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/valves/sealed-valves/globe-valves" },
};

export default function ValvesSealedValvesGlobeValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
