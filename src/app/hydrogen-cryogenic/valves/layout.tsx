import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic/valves" },
  title: { absolute: "Hiflux High Pressure Valves, Rated to 150,000 psi | Valvenok" },
  description:
    "Hiflux high pressure check, needle, ball, air-operated, safety and special valves rated up to 150,000 psi for industrial, hydrogen and wellhead use.",
  openGraph: {
    title: "Hiflux High Pressure Valves, Rated to 150,000 psi | Valvenok",
    description:
      "Hiflux high pressure check, needle, ball, air-operated, safety and special valves rated up to 150,000 psi for industrial, hydrogen and wellhead use.",
    type: "website",
  },
};

export default function HifluxValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
