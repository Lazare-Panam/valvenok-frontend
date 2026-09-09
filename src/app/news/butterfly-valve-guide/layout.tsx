import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/news/butterfly-valve-guide" },
  title: "Butterfly Valve Instrumentation Packages",
  description: "Valvenok supplies precision instrumentation valves, manifolds, fittings, and auxiliaries around butterfly valve installations — triple offset, pneumatically actuated, and process butterfly valves, with UK stock and 24-hour engineering response.",
  keywords: [
    "Butterfly Valve",
    "Triple Offset Butterfly Valve",
    "Pneumatic Actuator Butterfly Valve",
    "Butterfly Valve Instrumentation",
    "Valve Packages UK",
    "Valvenok",
    "Industrial Valves UK",
    "PTFE Lined Butterfly Valve",
  ],
  openGraph: {
    title: "Butterfly Valve Instrumentation Packages | Valvenok",
    description: "Triple offset, pneumatically actuated, and process butterfly valves — fully engineered from the primary isolation to the instrumentation layer.",
    url: "https://www.valvenok.com/news/butterfly-valve-guide",
    siteName: "Valvenok",
    images: [
      {
        url: "https://pblol2.blob.core.windows.net/valvenok-images/products/valves/butterfly-valves/ptfe_lined_butterfly.png",
        width: 1200,
        height: 630,
        alt: "Butterfly Valve — PTFE Lined",
      },
    ],
    locale: "en_GB",
    type: "article",
    authors: ["Valvenok Team"],
    publishedTime: "2026-06-29T00:00:00.000Z",
  },
};

export default function ButterflyValveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}