import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESC Series Cylinders | Valvenok",
  description:
    "SPAC Standard Tie Rod Profile double acting pneumatic cylinders. Available in standard and through rod configurations, magnetic and non-magnetic variants across bore sizes 32mm to 250mm.",
  openGraph: {
    title: "ESC Series Cylinders | Valvenok",
    description:
      "SPAC Standard Tie Rod Profile double acting pneumatic cylinders. Standard and through rod configurations, magnetic and non-magnetic variants.",
    type: "website",
  },
};

export default function ESCCylinderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
