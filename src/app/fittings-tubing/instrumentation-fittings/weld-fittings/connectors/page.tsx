import WeldFittingPage from "../all/page"

import type { Metadata } from "next";
export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/weld-fittings/connectors" },
};

export default function WeldFittingConnectors() {
  return <WeldFittingPage defaultFittingTypes={['MC', 'FC']} />
}