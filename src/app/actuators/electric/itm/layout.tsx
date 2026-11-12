import type { Metadata } from "next";

const TITLE = "ITM Multi-Turn Electric Actuators, 177–2,942 Nm | Valvenok";
const DESCRIPTION =
  "Susin ITM multi-turn electric actuators for gate, globe and sluice valves: 177 to 2,942 Nm, up to 686 kN thrust, IP68, ISO 5210, Ex d IIC T4 option.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itm-multi-turn.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/itm" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: [IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [IMAGE],
  },
};

export default function ITMLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
