import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Under Indexing",
  description: "We are currently updating our industrial catalog with high-pressure instrumentation and engineered solutions. Contact our team for immediate technical specifications.",
  // Robots instruction: We tell search engines not to prioritize this page,
  // but if they see it, show the proper branding.
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}