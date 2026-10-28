import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/cylinders/esc" },
  title: { absolute: "ESC Series Tie Rod Pneumatic Cylinders, 32–250mm Bore | Valvenok" },
  description:
    "SPAC ESC tie rod double-acting pneumatic cylinders in standard and through-rod versions, magnetic or non-magnetic, bore sizes 32mm to 250mm.",
  openGraph: {
    title: "ESC Series Tie Rod Pneumatic Cylinders, 32–250mm Bore | Valvenok",
    description:
      "SPAC ESC tie rod double-acting pneumatic cylinders in standard and through-rod versions, magnetic or non-magnetic, bore sizes 32mm to 250mm.",
    type: "website",
  },
};

export default function ESCCylinderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/pneumatic/cylinders/esc" /></>;
}
