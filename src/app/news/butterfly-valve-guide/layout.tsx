import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/news/butterfly-valve-guide" },
  title: { absolute: "Butterfly Valve Instrumentation & Connection Packages | Valvenok" },
  description: "Instrumentation valves, manifolds, fittings and auxiliaries for triple offset, actuated and process butterfly valve installations, with UK support.",
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
    title: "Butterfly Valve Instrumentation & Connection Packages | Valvenok",
    description: "Instrumentation valves, manifolds, fittings and auxiliaries for triple offset, actuated and process butterfly valve installations, with UK support.",
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