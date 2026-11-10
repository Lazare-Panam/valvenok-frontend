import type { Metadata } from "next";

const TITLE = "PA-HX Hydraulic Rack & Pinion Actuators, 35–10,000 Nm | Valvenok";
const DESCRIPTION =
  "PA-HX hydraulic rack & pinion part-turn actuators, 80–160 bar: double acting 90–10,000 Nm, spring to close and spring to open models, ISO 5211, ATEX. Request a quote.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/pa-hx.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/pa-hx" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/actuators/hydraulic/pa-hx", type: "website", images: [IMAGE] },
};

export default function PaHxLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
