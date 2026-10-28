import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/news" },
  title: { absolute: "Engineering Insights, Technical Guides & News | Valvenok" },
  description: "Technical guides and news from Valvenok: valve actuators, butterfly, ball and gate valves, hydrogen fittings, pumps, seals and supplier partnerships.",
  openGraph: {
    title: "Engineering Insights, Technical Guides & News | Valvenok",
    description: "Technical guides and news from Valvenok: valve actuators, butterfly, ball and gate valves, hydrogen fittings, pumps, seals and supplier partnerships.",
    url: 'https://www.valvenok.com/news',
    siteName: 'Valvenok',
    images: [
      {
        url: 'https://res.cloudinary.com/dm9rmmemx/image/upload/v1775564688/28788ab3-a6d7-4876-b8a3-8e4afd5ac9da_dyi0qw.jpg', 
        width: 1200,
        height: 630,
        alt: 'Valvenok Engineering Insights',
      },
    ],
    locale: 'en_GB',
    type: 'website', 
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}