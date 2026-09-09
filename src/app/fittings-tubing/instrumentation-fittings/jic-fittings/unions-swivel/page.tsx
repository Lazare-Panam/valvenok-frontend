import JICProductPage from "../all/page"

import type { Metadata } from "next";
export const metadata: Metadata = {
  alternates: { canonical: "/fittings-tubing/instrumentation-fittings/jic-fittings/unions-swivel" },
};

export default function UnionsSwivel() {
  return <JICProductPage defaultFittingTypes={['U', 'UL', 'SU', 'BU', 'BLN']} />
}
