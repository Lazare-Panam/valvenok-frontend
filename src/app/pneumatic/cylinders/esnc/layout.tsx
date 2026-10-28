import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/pneumatic/cylinders/esnc" },
  title: { absolute: "ESNC Series ISO 15552 Tie Rod Pneumatic Cylinders | Valvenok" },
  description:
    "Double-acting ISO 15552 tie rod pneumatic cylinders, non-magnetic, 32mm to 200mm bore and 25mm to 1000mm stroke, for heavy-duty industrial automation.",
  openGraph: {
    title: "ESNC Series ISO 15552 Tie Rod Pneumatic Cylinders | Valvenok",
    description:
      "Double-acting ISO 15552 tie rod pneumatic cylinders, non-magnetic, 32mm to 200mm bore and 25mm to 1000mm stroke, for heavy-duty industrial automation.",
    type: "website",
  },
};

export default function ESNCCylinderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/pneumatic/cylinders/esnc" /></>;
}
