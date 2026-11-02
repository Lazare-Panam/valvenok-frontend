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
        url: 'https://pblol2.blob.core.windows.net/valvenok-images/blogs/blog4.jpg', 
        width: 5184,
        height: 3456,
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