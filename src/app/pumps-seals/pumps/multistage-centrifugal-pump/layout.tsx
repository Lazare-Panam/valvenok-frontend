import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HS / TS Series Multistage Centrifugal Pumps | Valvenok",
  description:
    "WALRUS multistage centrifugal pumps for pressure boosting from city mains or private water systems. Close-coupled design, corrosion resistant, thermostat dry-run protection.",
  openGraph: {
    title: "HS / TS Series Multistage Centrifugal Pumps | Valvenok",
    description:
      "WALRUS multistage centrifugal pumps for pressure boosting, close-coupled design, corrosion resistant wetted parts.",
    type: "website",
  },
};

export default function MultistageCentrifugalPumpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
