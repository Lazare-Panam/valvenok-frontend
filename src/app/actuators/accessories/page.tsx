import type { Metadata } from "next";
import AccessoriesView from "./AccessoriesView";

const TITLE = "Actuator Accessories: Limit Switch Boxes | Valvenok";
const DESCRIPTION =
  "Limit switch boxes for valve actuators: KOSAPLUS KLS and Susin ITS, weatherproof IP67 / IP68, explosion-proof IIC T6 and stainless versions, with mechanical switches or proximity sensors.";

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
    images: ["https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/limit-switches/ks-limit-switch.jpg"],
  },
};

export default function AccessoriesPage() {
  return <AccessoriesView />;
}
