import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/limit-switches/its" },
  title: { absolute: "ITS Limit Switch Boxes for Valve Position | Valvenok" },
  description:
    "Susin ITS position monitoring switch boxes: ITS 200 weatherproof IP67, ITS 400 explosion proof Ex d IIC T6 (Zone 1 & 2), ITS 500 316L / Duplex stainless. Request a quote.",
  openGraph: {
    title: "ITS Limit Switch Boxes for Valve Position | Valvenok",
    description:
      "Susin ITS position monitoring switch boxes: ITS 200 weatherproof IP67, ITS 400 explosion proof Ex d IIC T6 (Zone 1 & 2), ITS 500 316L / Duplex stainless. Request a quote.",
    type: "website",
  },
};

export default function ITSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
