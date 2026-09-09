import JICProductPage from "../all/page"

import type { Metadata } from "next";
export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/jic-fittings/plugs" },
};

export default function PlugsCapsNuts() {
  return <JICProductPage defaultFittingTypes={['N', 'TC', 'TCA', 'TP']} />
}