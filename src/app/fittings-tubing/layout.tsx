import type { Metadata } from "next";
import { pageMetadata } from "@/src/app/Common/seo";

export const metadata: Metadata = pageMetadata({
  title: "Instrumentation Fittings & Stainless Steel Tubing",
  description:
    "PANAM twin-ferrule instrumentation fittings and seamless stainless steel tubing for leak-tight fluid, gas and instrumentation systems. Supplied by Valvenok, UK.",
  path: "/fittings-tubing",
});

export default function FittingsTubingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
