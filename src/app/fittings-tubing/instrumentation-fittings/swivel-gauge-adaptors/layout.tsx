import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/swivel-gauge-adaptors" },
  title: { absolute: "Swivel Gauge Adaptors (PSGA) — SS316 Fittings | Valvenok" },
  description:
    "PSGA swivel gauge adaptors for mounting pressure gauges without twisting the line. Filter by type, inlet and outlet thread, then request a quote.",
  openGraph: {
    title: "Swivel Gauge Adaptors (PSGA) — SS316 Fittings | Valvenok",
    description:
      "PSGA swivel gauge adaptors for mounting pressure gauges without twisting the line. Filter by type, inlet and outlet thread, then request a quote.",
    type: "website",
  },
};

export default function SGALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
