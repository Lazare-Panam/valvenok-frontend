import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/gate-valves" },
  title: "Gate Valves for Industrial & Process Applications",
  description:
    "Gate valves and brass gate valves for industrial and instrumentation projects — with engineering support and international shipping from Bicester-based Valvenok. 24-hour response on specifications and bills of materials.",
  keywords: [
    "gate valves",
    "brass gate valves",
    "gate valve supplier UK",
    "stainless steel gate valves",
    "industrial gate valves",
    "isolation valves",
    "gate valves Bicester",
    "gate valve specification support",
    "process gate valves",
    "Valvenok",
  ],
  openGraph: {
    title: "Gate Valves for Industrial & Process Applications | Valvenok",
    description:
      "Gate valves for industrial and instrumentation projects with engineering support and international shipping from Bicester-based Valvenok.",
    url: "https://www.valvenok.com/gate-valves",
    siteName: "Valvenok",
    images: [
      {
        url: "https://pblol2.blob.core.windows.net/valvenok-images/banner-images/ben-kupke-ew-p24CVLR0-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "Gate valves for industrial and process applications",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function GateValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
