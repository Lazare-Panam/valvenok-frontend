import type { Metadata } from "next";

const TITLE = "HLDA Linear Piston Hydraulic Actuators, 6–402 kN | Valvenok";
const DESCRIPTION =
  "HLDA and electro-hydraulic EHLDA double acting linear piston actuators: 32–200 mm bore, 6–402 kN thrust at 100–160 bar, up to 200 bar, IP66M / IP67M. Request a quote.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/ktc-hlda.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/hlda" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/actuators/hydraulic/hlda", type: "website", images: [IMAGE] },
};

export default function HLDALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
