import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/cryogenic-valves" },
  title: "Cryogenic Valves for Low-Temperature Service",
  description:
    "Cryogenic valves for LNG, hydrogen and liquefied gases — with engineering support, full documentation and integration with instrumentation, manifold and fitting packages. 24-hour response from Bicester, Oxfordshire.",
  keywords: [
    "cryogenic valves",
    "cryogenic valve supplier UK",
    "LNG valves",
    "liquid hydrogen valves",
    "low temperature valves",
    "cryogenic ball valve",
    "cryogenic service valves",
    "NACE MR0175 valves",
    "cryogenic instrumentation valves",
    "Valvenok",
  ],
  openGraph: {
    title: "Cryogenic Valves for Low-Temperature Service | Valvenok",
    description:
      "Cryogenic valves for LNG, hydrogen and liquefied gases, with engineering support, documentation and integration with instrumentation packages.",
    url: "https://www.valvenok.com/cryogenic-valves",
    siteName: "Valvenok",
    images: [
      {
        url: "https://pblol2.blob.core.windows.net/valvenok-images/banner-images/ben-kupke-ew-p24CVLR0-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "Cryogenic valves for low-temperature service",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function CryogenicValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
