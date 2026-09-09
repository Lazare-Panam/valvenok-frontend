import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/valves/valve-components" },
};

export default function ValvesValveComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
