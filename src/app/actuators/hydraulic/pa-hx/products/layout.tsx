import type { Metadata } from "next";

const TITLE = "PA-HX Hydraulic Rack & Pinion Actuators — All 26 Models | Valvenok";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/pa-hx/products" },
  title: { absolute: TITLE },
  description:
    "All 26 PA-HX hydraulic rack & pinion actuators: double acting D005–D110, spring-to-close and spring-to-open models, with torque, dimensions, weight and oil volume.",
  openGraph: { title: TITLE, url: "/actuators/hydraulic/pa-hx/products", type: "website" },
};

export default function PaHxProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
