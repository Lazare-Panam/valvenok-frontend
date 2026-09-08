import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High Pressure Valves",
  description:
    "Hiflux high pressure valves rated up to 150,000 psi — check, needle, ball, air operated, safety and special valves for industrial, hydrogen and wellhead applications.",
  openGraph: {
    title: "High Pressure Valves | Valvenok",
    description:
      "Hiflux high pressure valves rated up to 150,000 psi across 56 models, KC and KGS certified.",
    type: "website",
  },
};

export default function HifluxProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
