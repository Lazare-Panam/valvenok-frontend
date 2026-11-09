import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/mhd/products" },
  title: "MHD (Micro) Series Models",
  description:
    "All 12 Susin MHD (Micro) scotch yoke actuator models: symmetric and canted yokes, double acting and spring return, 63 to 1,474 Nm. Filter and request a quote.",
  openGraph: {
    title: "MHD (Micro) Series Actuators | Valvenok",
    description: "All 12 Susin MHD (Micro) scotch yoke actuator models, 63 to 1,474 Nm.",
    type: "website",
  },
};

export default function MHDActuatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
