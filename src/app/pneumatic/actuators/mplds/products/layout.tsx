import type { Metadata } from "next";

const title = "MPLDS Micro Linear Actuator Models, MPLD & MPLS | Valvenok";
const description = "All 8 Susin I-Tork MPLDS micro linear actuator models: MPLD double acting (1.9–20.8 kN) and MPLS spring return (50–300 mm stroke), 100–200 mm bore. Filter, compare and request a quote.";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/mplds/products" },
  title: { absolute: title },
  description,
  openGraph: { title, description, type: "website" },
};

export default function MPLDSProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
