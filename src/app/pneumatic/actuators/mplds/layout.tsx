import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/actuators/mplds" },
  title: { absolute: "MPLDS Micro Linear Pneumatic Actuators, MPLD & MPLS | Valvenok" },
  description:
    "Susin MPLDS micro linear actuators: MPLD double acting, 1.9–20.8 kN, and MPLS spring return with 50–300 mm stroke. 100–200 mm bore, hard anodised aluminium.",
  openGraph: {
    title: "MPLDS Micro Linear Pneumatic Actuators, MPLD & MPLS | Valvenok",
    description:
      "Susin MPLDS micro linear actuators: MPLD double acting, 1.9–20.8 kN, and MPLS spring return with 50–300 mm stroke. 100–200 mm bore, hard anodised aluminium.",
    type: "website",
  },
};

export default function MPLDSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
