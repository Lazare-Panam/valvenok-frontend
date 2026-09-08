import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TG Series Pneumatic Solenoid Valves",
  description:
    "Browse TG series pneumatic solenoid valves — 2/2, 3/2, 5/2 and 5/3 way configurations to find the exact valve you need.",
  openGraph: {
    title: "TG Series Pneumatic Solenoid Valves | Valvenok",
    description:
      "Browse TG series pneumatic solenoid valves across 2/2, 3/2, 5/2 and 5/3 way configurations.",
    type: "website",
  },
};

export default function TGValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
