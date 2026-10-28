import type { Metadata } from "next";

const TITLE = "Hydrogen Instrumentation Fittings: Leak-Tight Threads | Valvenok";
const DESCRIPTION =
  "Thread identification, sealant choice and ferrule best practice for leak-tight instrumentation fittings in hydrogen and high-integrity service.";
const IMAGE =
  "https://pblol2.blob.core.windows.net/valvenok-images/blogs/blog4.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/news/instrumentation-fittings-hydrogen-leak-tight-threads" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: [IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

export default function InstrumentationFittingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
