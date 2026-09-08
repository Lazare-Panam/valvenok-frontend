import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hydrogen & Cryogenic",
  description:
    "Valvenok supplies Youngdo hydrogen cylinder valves and LPG valves — high-pressure hydrogen service up to 70 MPa, LPG cylinder valves, OPD devices and piping connection valves. KGS, EC79, IECEx and CGA certified.",
};

export default function HydrogenCryogenicIndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
