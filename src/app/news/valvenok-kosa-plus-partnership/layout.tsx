import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/news/valvenok-kosa-plus-partnership" },
  title: { absolute: "Valvenok Announces Partnership with Kosa Plus | Valvenok" },
  description: "Valvenok partners with Kosa Plus, a South Korean maker of valve automation products: pneumatic and electric actuators, positioners and solenoid valves.",
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
    title: "Valvenok Announces Partnership with Kosa Plus | Valvenok",
    description: "Valvenok partners with Kosa Plus, a South Korean maker of valve automation products: pneumatic and electric actuators, positioners and solenoid valves.",
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