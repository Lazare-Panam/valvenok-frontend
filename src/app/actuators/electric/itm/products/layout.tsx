import type { Metadata } from "next";

const TITLE = "ITM Multi-Turn Electric Actuator Models, 177–2,942 Nm | Valvenok";
const DESCRIPTION =
  "All five Susin I-Tork ITM multi-turn electric actuators, ITM 0180 to ITM 3000: torque, thrust, stem, ISO 5210 flange, weight and speed torque tables. Request a quote.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itm-multi-turn.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/itm/products" },
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
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

export default function ITMActuatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
