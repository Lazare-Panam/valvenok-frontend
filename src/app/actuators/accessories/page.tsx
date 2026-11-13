import type { Metadata } from "next";
import AccessoriesView from "./AccessoriesView";

const TITLE = "Actuator Accessories: Limit Switch Boxes | Valvenok";
const DESCRIPTION =
  "Susin I-Tork ITS limit switch boxes for valve actuators: ITS 200 weatherproof IP67, ITS 400 explosion proof Ex d IIC T6 and ITS 500 316L / Duplex stainless, with mechanical switches or proximity sensors.";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/accessories" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/actuators/accessories",
    siteName: "Valvenok",
    type: "website",
    images: ["https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/limit-switches/susin-limit-switch.webp"],
  },
};

export default function AccessoriesPage() {
  return <AccessoriesView />;
}
