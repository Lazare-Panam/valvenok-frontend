import type { Metadata } from "next";

const TITLE = "PANDA Electro-Hydraulic Actuators, Low Pressure, 46–9,274 Nm | Valvenok";
const DESCRIPTION =
  "PANDA compact electro-hydraulic part-turn actuators: max 8 bar on board, only power needed. Double acting 46–7,207 Nm and spring return models, ATEX Zone 1 & 2. Request a quote.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/ktc-panda-pa.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/panda" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: [IMAGE] },
};

export default function PandaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
