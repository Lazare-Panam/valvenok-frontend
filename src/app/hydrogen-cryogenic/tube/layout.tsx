import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Hiflux High Pressure Tubing & Tooling",
  description:
    "Hiflux high pressure tubes and nipples rated up to 100,000 psi, with coning, threading and reseating tools, HSS dies and 1, 2 and 3 line tube supports.",
  path: "/hydrogen-cryogenic/tube",
});

export default function HydrogenCryogenicTubeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
