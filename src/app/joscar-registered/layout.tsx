import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/joscar-registered" },
  // `absolute` bypasses the root layout's "%s | Valvenok" template so the brand
  // token is not duplicated (the audit flagged "... | Valvenok | Valvenok").
  title: {
    absolute: "JOSCAR Registered Valve Supplier | What It Means | Valvenok",
  },
  description:
    "Valvenok is a JOSCAR registered supplier. What JOSCAR covers, who recognises it, and what it means for defence and aerospace procurement teams.",
  keywords: [
    "JOSCAR registered valve supplier",
    "what is a JOSCAR registered supplier",
    "JOSCAR registration",
    "Joint Supply Chain Accreditation Register",
    "defence supply chain accreditation",
    "aerospace supplier pre-qualification",
    "Hellios JOSCAR",
    "Valvenok",
  ],
  openGraph: {
    title: "JOSCAR Registered Supplier | Valvenok",
    description:
      "What JOSCAR registration covers, who recognises it, and what it means for defence and aerospace procurement teams sourcing valves and fittings.",
    url: "https://www.valvenok.com/joscar-registered",
    siteName: "Valvenok",
    images: [
      {
        url: "https://pblol2.blob.core.windows.net/valvenok-images/valvenok-new-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Valvenok — JOSCAR Registered Supplier",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function JoscarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
