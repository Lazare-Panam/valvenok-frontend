import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/actuators/electric/qs" },
  title: { absolute: "QS Series Fail-Safe Spring Return Electric Actuators | Valvenok" },
  description:
    "QS series fail-safe electric actuators with an independent spring return: 50–300 Nm, 1.8 s spring stroke, IP67, ISO 5211 mounting. Request a quote.",
  openGraph: {
    title: "QS Series Fail-Safe Spring Return Electric Actuators | Valvenok",
    description:
      "Fail-safe electric actuators with an independent spring return: 50–300 Nm, 1.8 s spring stroke, IP67.",
    url: "/actuators/electric/qs",
    type: "website",
    images: ["https://pblol2.blob.core.windows.net/valvenok-images/brands/susin/qs.jpg"],
  },
};

export default function QSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
