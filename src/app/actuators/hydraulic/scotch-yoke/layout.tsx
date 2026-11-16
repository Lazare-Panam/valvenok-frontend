import type { Metadata } from "next";

const TITLE = "Hydraulic Scotch Yoke Actuators HRSDA / HRSSA, up to 112,595 Nm | Valvenok";
const DESCRIPTION =
  "HRSDA double acting and HRSSA spring return hydraulic scotch yoke actuators, hydraulic or electro-hydraulic, up to 200 bar: 208–112,595 Nm double acting, 52 spring return models, IP66M / IP67M. Request a quote.";
const IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/ktc-hrsda.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/hydraulic/scotch-yoke" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/actuators/hydraulic/scotch-yoke", type: "website", images: [IMAGE] },
};

export default function ScotchYokeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
