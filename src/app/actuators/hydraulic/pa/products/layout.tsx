import type { Metadata } from "next";

const TITLE = "PA Electro-Hydraulic Actuators — All 9 Models | Valvenok";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/pa/products" },
  title: { absolute: TITLE },
  description:
    "All 9 PA high pressure electro-hydraulic actuators: 5 double acting (D10–D60, 250–4,000 Nm) and 4 spring return (E30–E60), with torques and dimensions.",
  openGraph: { title: TITLE, url: "/actuators/hydraulic/pa/products", type: "website" },
};

export default function PaProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
