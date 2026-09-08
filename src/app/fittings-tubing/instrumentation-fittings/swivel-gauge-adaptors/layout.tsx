import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swivel Gauge Adaptors",
  description:
    "Browse swivel gauge adaptors — filter by type, inlet, and outlet to find the exact configuration you need.",
  openGraph: {
    title: "Swivel Gauge Adaptors | Valvenok",
    description:
      "Browse swivel gauge adaptors — filter by type, inlet, and outlet.",
    type: "website",
  },
};

export default function SGALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
