import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Hydrogen & Cryogenic Valves, Fittings and Tubing | Valvenok" },
  description:
    "Hiflux high pressure fittings, valves and tubing, plus Youngdo hydrogen, LPG and industrial gas cylinder valves. Certification varies by model.",
};

export default function HydrogenCryogenicIndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
