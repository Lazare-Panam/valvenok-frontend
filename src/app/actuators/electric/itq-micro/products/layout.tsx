import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/itq-micro/products" },
  title: { absolute: "ITQ Micro Series Electric Actuators — Models | Valvenok" },
  description:
    "ITQ 0020, ITQ 0040 and ITQ 0080 compact electric actuators (25–80 Nm): compare torque, time, mounting and supply, then request a quote from Valvenok.",
  openGraph: {
    title: "ITQ Micro Series Electric Actuators — Models | Valvenok",
    description: "ITQ 0020, 0040 and 0080 compact electric actuators, 25–80 Nm, with full specifications.",
    url: "/actuators/electric/itq-micro/products",
    type: "website",
  },
};

export default function ITQMicroProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
