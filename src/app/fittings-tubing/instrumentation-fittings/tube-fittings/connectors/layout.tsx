import type { Metadata } from 'next'
import RangeCopy from "@/src/app/Common/RangeCopy/RangeCopy";

export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/tube-fittings/connectors" },
  title: { absolute: "Tube Fitting Connectors, Elbows & Tees — SS316 | Valvenok" },
  description: "Stainless steel male and female connectors, elbows, tees and bulkhead tube fittings in imperial and metric OD, with NPT, BSPT, BSPP and SAE/MS threads.",
  openGraph: {
    title: "Tube Fitting Connectors, Elbows & Tees — SS316 | Valvenok",
    description: "Stainless steel male and female connectors, elbows, tees and bulkhead tube fittings in imperial and metric OD, with NPT, BSPT, BSPP and SAE/MS threads.",
    type: 'website',
  },
}

export default function ConnectorElbowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<RangeCopy path="/fittings-tubing/instrumentation-fittings/tube-fittings/connectors" /></>
}