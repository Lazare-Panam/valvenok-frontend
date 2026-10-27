import type { Metadata } from "next";

const TITLE = "ITM Multi-Turn Electric Actuator | Valvenok";
const DESCRIPTION =
  "ITM heavy-duty multi-turn electric actuators, IP68, Hall encoder, Ex d IIC T4 optional.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/electric/itm.webp";

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
