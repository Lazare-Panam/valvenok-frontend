import type { Metadata } from "next";

const TITLE = "PA Electro-Hydraulic Actuators, High Pressure, 250–10,000 Nm | Valvenok";
const DESCRIPTION =
  "PA compact electro-hydraulic part-turn actuators up to 180 bar: double acting 250–4,000 Nm, spring return models, up to 10,000 Nm on request, ATEX Zone 1 & 2. Request a quote.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/ktc-panda-pa.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/pa" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/actuators/hydraulic/pa", type: "website", images: [IMAGE] },
};

export default function PaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
