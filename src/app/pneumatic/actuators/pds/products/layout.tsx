import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/pds/products" },
  title: { absolute: "PDS Series Scotch Yoke Pneumatic Actuator Models | Valvenok" },
  description:
    "Browse 20 Susin PDS scotch yoke actuator models, double acting and spring return. Filter by action, size and ISO 5211 mounting, then request a quote.",
  openGraph: {
    title: "PDS Series Scotch Yoke Pneumatic Actuator Models | Valvenok",
    description:
      "Browse 20 Susin PDS scotch yoke actuator models, double acting and spring return. Filter by action, size and ISO 5211 mounting, then request a quote.",
    type: "website",
  },
};

export default function PDActuatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
