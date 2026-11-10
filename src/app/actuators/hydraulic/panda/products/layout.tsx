import type { Metadata } from "next";

const TITLE = "PANDA Electro-Hydraulic Actuators — All 27 Models | Valvenok";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/panda/products" },
  title: { absolute: TITLE },
  description:
    "All 27 PANDA low pressure electro-hydraulic actuators: 14 double acting (D10–D130, 46–7,207 Nm) and 13 spring return (E10–E120), with torques and dimensions.",
  openGraph: { title: TITLE, url: "/actuators/hydraulic/panda/products", type: "website" },
};

export default function PandaProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
