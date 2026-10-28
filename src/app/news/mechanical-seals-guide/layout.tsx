import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/news/mechanical-seals-guide" },
  title: { absolute: "Guide to Sealflex Mechanical Seals: Engineering Specs | Valvenok" },
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
    title: "Guide to Sealflex Mechanical Seals: Engineering Specs | Valvenok",
    description: "A technical guide to Sealflex mechanical seals: pressure ratings to 140 bar, PTFE, Viton and metal bellows materials, and API flush plans for pumps.",
    url: 'https://www.valvenok.com/news/mechanical-seals-guide',
    siteName: 'Valvenok Knowledge Base',
    images: [
      {
        url: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1775564688/28788ab3-a6d7-4876-b8a3-8e4afd5ac9da_dyi0qw.jpg', 
        width: 1200,
        height: 630,
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