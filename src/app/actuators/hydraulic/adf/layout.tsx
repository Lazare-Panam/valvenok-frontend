import type { Metadata } from "next";

const TITLE = "ADF Electro-Hydraulic Actuators, 46–10,000 Nm | Valvenok";
const DESCRIPTION =
  "ADF electro-hydraulic rotary actuators from 46 to 10,000 Nm, ATEX Zone 1/2 and SIL 2/3 certified, for fail-safe quarter-turn valve automation.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/hydraulic/adf.webp";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/adf" },
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

export default function ADFLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
