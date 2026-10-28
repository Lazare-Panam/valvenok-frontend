// app/quality/layout.tsx

import { Suspense } from 'react';

export const metadata = {
  title: { absolute: "Quality & Standards — JOSCAR Registered Supplier | Valvenok" },
  description: "Valvenok is a JOSCAR-registered valve supplier. Products are available to PED, ATEX and NACE MR0175; certification and traceability vary by product.",
  openGraph: {
    title: "Quality & Standards — JOSCAR Registered Supplier | Valvenok",
    description: "Valvenok is a JOSCAR-registered valve supplier. Products are available to PED, ATEX and NACE MR0175; certification and traceability vary by product.",
    url: 'https://www.valvenok.com/quality',
    siteName: 'Valvenok',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Quality & Standards — JOSCAR Registered Supplier | Valvenok",
    description: "Valvenok is a JOSCAR-registered valve supplier. Products are available to PED, ATEX and NACE MR0175; certification and traceability vary by product.",
  },
  alternates: {
    canonical: 'https://www.valvenok.com/quality',
  }
};

export default function QualityLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
}