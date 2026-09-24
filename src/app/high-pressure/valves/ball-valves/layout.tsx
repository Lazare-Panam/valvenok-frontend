import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure/valves/ball-valves" },
};

export default function HighPressureNeedleValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
