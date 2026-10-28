import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/cylinders/sdnc" },
  title: { absolute: "SDNC Series ISO 15552 Profile Pneumatic Cylinders | Valvenok" },
  description:
    "Double-acting ISO 15552 profile pneumatic cylinders with standard or magnetic pistons across a full bore and stroke range, for automation and packaging.",
  openGraph: {
    title: "SDNC Series ISO 15552 Profile Pneumatic Cylinders | Valvenok",
    description:
      "Double-acting ISO 15552 profile pneumatic cylinders with standard or magnetic pistons across a full bore and stroke range, for automation and packaging.",
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
