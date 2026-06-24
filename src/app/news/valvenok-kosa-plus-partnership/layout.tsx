import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valvenok Announces Strategic Partnership with Kosa Plus | Valve Automation",
  description: "Valvenok partners with Kosa Plus, a leading South Korean manufacturer of valve automation products. Expanding our portfolio with pneumatic actuators, electric actuators, positioners, solenoid valves, and more.",
  keywords: [
    "Kosa Plus Partnership",
    "Valve Automation Products",
    "Pneumatic Actuators UK",
    "Electric Actuators",
    "Valve Positioners",
    "Solenoid Valves",
    "Valvenok News",
    "Valve Automation Accessories"
  ],
  openGraph: {
    title: "Valvenok × Kosa Plus | Strategic Partnership Announcement",
    description: "British engineering expertise meets South Korean manufacturing excellence — a new collaboration built around reliability, innovation, and long-term customer success.",
    url: "https://www.valvenok.com/news/valvenok-kosa-plus-partnership",
    siteName: "Valvenok",
    images: [
      {
        url: "https://pblol2.blob.core.windows.net/valvenok-images/blogs/kosa_plus.jpeg",
        width: 1200,
        height: 630,
        alt: "Valvenok and Kosa Plus Partnership Announcement",
      },
    ],
    locale: "en_GB",
    type: "article",
    authors: ["Valvenok Team"],
    publishedTime: "2026-06-01T00:00:00.000Z",
  },
};

export default function KosaPartnershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}