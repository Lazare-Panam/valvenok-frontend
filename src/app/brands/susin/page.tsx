import type { Metadata } from "next";
import SusinBrandView from "./SusinBrandView";

const TITLE = "Susin I-Tork Valve Actuators: Pneumatic, Electric, Hydraulic & Gearboxes | Valvenok";
const DESCRIPTION =
  "Every Susin I-Tork actuator range on Valvenok: PDS, HD and MHD scotch yoke, ITQ, QS, ITM, ITL and IQL electric, PANDA, PA and scotch yoke hydraulic, MAW, ITG and MAB gearboxes and ITS limit switch boxes, with catalogues.";

export const metadata: Metadata = {
  alternates: { canonical: "/brands/susin" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/brands/susin",
    siteName: "Valvenok",
    type: "website",
    images: ["https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/hd.webp"],
  },
};

export default function SusinBrandPage() {
  return <SusinBrandView />;
}
