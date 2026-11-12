import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/itq-micro" },
  title: { absolute: "ITQ Micro Series Compact Electric Actuators for Small Valves | Valvenok" },
  description:
    "ITQ Micro economic electric actuators for small ball and plug valves and dampers: ITQ 0020, 0040 and 0080, 25–80 Nm, IP66/IP67, ISO 5211. Request a quote.",
  openGraph: {
    title: "ITQ Micro Series Compact Electric Actuators | Valvenok",
    description:
      "Economic quarter-turn electric actuators for small valves: 25–80 Nm, IP66/IP67, ISO 5211 F03–F07 mounting.",
    url: "/actuators/electric/itq-micro",
    type: "website",
    images: ["https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/itq-micro.jpg"],
  },
};

export default function ITQMicroLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
