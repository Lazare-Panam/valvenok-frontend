import type { Metadata } from "next";
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/returns-policy" },
  title: { absolute: "Returns Policy & Refunds — 30-Day Return Window | Valvenok" },
  description:
    "Learn about our 30-day return window, non-returnable items, faulty or damaged goods process, and how to start a return with Valvenok.",
  openGraph: {
    title: "Returns Policy & Refunds — 30-Day Return Window | Valvenok",
    description:
      "Learn about our 30-day return window, non-returnable items, and how to start a return with Valvenok.",
    type: "website",
  },
};

export default function ReturnsPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}<RangeCopy path="/returns-policy" /></>;
}
