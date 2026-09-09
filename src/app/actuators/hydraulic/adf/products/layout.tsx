import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/adf/products" },
};

export default function ActuatorsHydraulicAdfProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
