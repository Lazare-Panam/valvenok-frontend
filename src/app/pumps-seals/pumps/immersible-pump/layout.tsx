import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TPRK_E / TPHK / TPK Series Immersible Pumps | Valvenok",
  description:
    "WALRUS vertical multistage centrifugal immersible pumps for industrial use, especially machine tools. Self-priming, stainless steel construction, power 0.22–18.5 kW, head up to 267M.",
  openGraph: {
    title: "TPRK_E / TPHK / TPK Series Immersible Pumps | Valvenok",
    description:
      "WALRUS vertical multistage centrifugal immersible pumps for industrial use, self-priming, stainless steel construction, up to 267M head.",
    type: "website",
  },
};

export default function ImmersiblePumpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
