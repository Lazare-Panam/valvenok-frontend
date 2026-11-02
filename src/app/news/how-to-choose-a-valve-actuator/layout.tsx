import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/news/how-to-choose-a-valve-actuator" },
  title: "How to Choose a Valve Actuator",
  description:
    "Electric, pneumatic or hydraulic? Compare torque, speed, fail-safe behaviour and hazardous area rating, with a sizing walkthrough and decision framework.",
  keywords: [
    "how to choose a valve actuator",
    "electric vs pneumatic actuator",
    "hydraulic actuator",
    "actuator sizing",
    "break-out torque",
    "fail-safe actuator",
    "ATEX actuator",
    "ISO 5211 mounting",
    "Valvenok",
  ],
  openGraph: {
    title: "How to Choose a Valve Actuator | Valvenok",
    description:
      "Electric, pneumatic, hydraulic or manual — compare torque, speed, fail-safe behaviour and hazardous area rating, with a sizing walkthrough and decision framework.",
    url: "https://www.valvenok.com/news/how-to-choose-a-valve-actuator",
    siteName: "Valvenok",
    images: [
      {
        url: "https://pblol2.blob.core.windows.net/panam-images/products/actuators/ac-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Valve actuators — electric, pneumatic and hydraulic",
      },
    ],
    locale: "en_GB",
    type: "article",
    authors: ["Valvenok Team"],
    publishedTime: "2026-09-11T00:00:00.000Z",
  },
};

export default function ActuatorGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
