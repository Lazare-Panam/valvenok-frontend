import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/hydrogen-cryogenic/valves/products" },
  title: { absolute: "Hiflux High Pressure Valve Models — Compare Range | Valvenok" },
  description:
    "Compare Hiflux high pressure check, needle, ball, air-operated, safety and special valve models rated up to 150,000 psi, then request a quote.",
  openGraph: {
    title: "Hiflux High Pressure Valve Models — Compare Range | Valvenok",
    description:
      "Compare Hiflux high pressure check, needle, ball, air-operated, safety and special valve models rated up to 150,000 psi, then request a quote.",
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
