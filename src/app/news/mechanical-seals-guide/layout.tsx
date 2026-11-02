import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/news/mechanical-seals-guide" },
  title: { absolute: "Sealflex Mechanical Seals: Engineering Guide | Valvenok" },
  description: "A technical guide to Sealflex mechanical seals: pressure ratings to 140 bar, PTFE, Viton and metal bellows materials, and API flush plans for pumps.",
  keywords: [
    "Mechanical Seals Guide", 
    "Sealflex BS11", 
    "Cartridge Seals Specification", 
    "API Flush Plans", 
    "Industrial Pump Sealing", 
    "Valvenok Engineering"
  ],
  openGraph: {
    title: "Sealflex Mechanical Seals: Engineering Guide | Valvenok",
    description: "A technical guide to Sealflex mechanical seals: pressure ratings to 140 bar, PTFE, Viton and metal bellows materials, and API flush plans for pumps.",
    url: 'https://www.valvenok.com/news/mechanical-seals-guide',
    siteName: 'Valvenok Knowledge Base',
    images: [
      {
        url: 'https://pblol2.blob.core.windows.net/valvenok-images/products/seals/Seals.jpg', 
        width: 583,
        height: 389,
        alt: 'Sealflex Mechanical Seals Engineering Guide',
      },
    ],
    locale: 'en_GB',
    type: 'article',
    authors: ['Sejal Raina'],
    publishedTime: '2026-04-04T00:00:00.000Z',
  },
};

export default function MechanicalSealArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}