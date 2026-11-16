import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/limit-switches/its" },
  title: { absolute: "ITS Limit Switch Boxes for Valve Position | Valvenok" },
  description:
    "Susin I-Tork ITS position monitoring switch boxes: ITS 200 weatherproof IP67, ITS 400 explosion proof Ex d IIC T6 (Zone 1 & 2), ITS 500 316L / Duplex stainless. Request a quote.",
  openGraph: {
    title: "ITS Limit Switch Boxes for Valve Position | Valvenok",
    description:
      "Susin I-Tork ITS position monitoring switch boxes: ITS 200 weatherproof IP67, ITS 400 explosion proof Ex d IIC T6 (Zone 1 & 2), ITS 500 316L / Duplex stainless. Request a quote.",
    type: "website",
    images: ["https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/limit-switches/susin-limit-switch.webp"],
  },
};

export default function ITSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
