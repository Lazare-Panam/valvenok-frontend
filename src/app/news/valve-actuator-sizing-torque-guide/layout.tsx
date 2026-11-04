import { Metadata } from "next";

const TITLE = "Valve Actuator Sizing: Torque, Safety Factors, Spring Return";
const DESCRIPTION =
  "How to size a pneumatic valve actuator: breakaway, running and seating torque, safety factors, minimum air supply, spring-return checks and common mistakes.";

export const metadata: Metadata = {
  alternates: { canonical: "/news/valve-actuator-sizing-torque-guide" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "valve actuator sizing",
    "how to size a pneumatic actuator",
    "breakaway torque",
    "spring return actuator sizing",
    "scotch yoke vs rack and pinion torque",
    "maximum allowable stem torque",
    "actuator safety factor",
    "ISO 5211",
  ],
  openGraph: {
    title: `${TITLE} | Valvenok`,
    description: DESCRIPTION,
    url: "https://www.valvenok.com/news/valve-actuator-sizing-torque-guide",
    siteName: "Valvenok",
    images: [
      {
        url: "https://pblol2.blob.core.windows.net/valvenok-images/blogs/valve-actuator-sizing-torque-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Valve actuator sizing explained: blueprint of a rack and pinion actuator on a valve",
      },
    ],
    locale: "en_GB",
    type: "article",
    authors: ["Valvenok Team"],
    publishedTime: "2026-10-29T00:00:00.000Z",
  },
};

export default function ActuatorSizingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
