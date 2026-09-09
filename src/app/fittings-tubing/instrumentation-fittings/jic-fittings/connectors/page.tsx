import JICProductPage from "../all/page"

import type { Metadata } from "next";
export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/jic-fittings/connectors" },
};


export default function Connectors() {
  return <JICProductPage defaultFittingTypes={['MC', 'FC']} />
}
