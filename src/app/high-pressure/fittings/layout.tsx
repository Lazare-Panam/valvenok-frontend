import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure/fittings" },
  title: "High Pressure Fittings | Panam & Hiflux — SS316 Cone & Thread",
  description:
    "Panam and Hiflux high pressure cone & thread fittings in one catalogue — adapters, reducers, connectors, elbows, tees, crosses, hex nipples, unions, caps, plugs and accessories in SS 316 / STS 316 from 10,000 to 150,000 psi.",
};

export default function HighPressureFittingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
