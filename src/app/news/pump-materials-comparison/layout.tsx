import { Metadata } from "next";

const TITLE = "Pump Materials Compared: Cast Iron to Stainless";
const DESCRIPTION =
  "Compare cast iron, bronze, 304, 316 and 904L stainless and PPS plastic for pump casings and impellers: corrosion, abrasion, cost, and which WALRUS pumps use each.";

export const metadata: Metadata = {
  alternates: { canonical: "/news/pump-materials-comparison" },
  title: { absolute: `${TITLE} | Valvenok` },
  description: DESCRIPTION,
  keywords: [
    "pump materials",
    "cast iron vs stainless steel pump",
    "bronze pump seawater",
    "PREN stainless steel",
    "904L pump",
    "plastic pump casing",
  ],
  openGraph: {
    title: `${TITLE} | Valvenok`,
    description: DESCRIPTION,
    url: "https://www.valvenok.com/news/pump-materials-comparison",
    siteName: "Valvenok",
    locale: "en_GB",
    type: "article",
    authors: ["Valvenok Team"],
    publishedTime: "2026-11-02T00:00:00.000Z",
    images: [{ url: "https://pblol2.blob.core.windows.net/valvenok-images/blogs/pump-materials-comparison.jpg", width: 1200, height: 630, alt: "Pump materials compared: WALRUS booster, multistage, immersible and submersible pumps" }],
  },
};

export default function PumpMaterialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
