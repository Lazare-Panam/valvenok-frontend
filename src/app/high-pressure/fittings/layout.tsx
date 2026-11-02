import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/high-pressure/fittings" },
  title: { absolute: "High Pressure Cone & Thread Fittings | Valvenok" },
  description:
    "Panam and Hiflux cone and thread fittings: adapters, connectors, elbows, tees, crosses, nipples, unions and plugs in SS316 from 10,000 to 150,000 psi.",
  openGraph: {
    title: "High Pressure Cone & Thread Fittings | Valvenok",
    description: "Panam and Hiflux cone and thread fittings: adapters, connectors, elbows, tees, crosses, nipples, unions and plugs in SS316 from 10,000 to 150,000 psi.",
    url: "/high-pressure/fittings",
    siteName: "Valvenok",
    type: "website",
  },
};

export default function HighPressureFittingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
