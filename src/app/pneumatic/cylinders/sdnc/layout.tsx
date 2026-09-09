import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/cylinders/sdnc" },
  title: "SDNC Series Cylinders",
  description:
    "Double-acting ISO-15552 profile pneumatic cylinders. Standard and magnetic piston variants across a full bore and stroke range, suitable for industrial automation, packaging, and process machinery.",
  openGraph: {
    title: "SDNC Series Cylinders | Valvenok",
    description:
      "Double-acting ISO-15552 profile pneumatic cylinders. Standard and magnetic piston variants across a full bore and stroke range.",
    type: "website",
  },
};

export default function SDNCCylinderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
