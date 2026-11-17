// Headings are capitalised word by word (site convention). Units and similar
// short words must keep their case, so this wraps them in a .nocap span:
// <KeepUnits text="Dimensions, mm" /> → "Dimensions, mm", not "Dimensions, Mm".
import * as React from "react";

const UNITS = /(\b(?:mm|cm|kN|psi|bar|barg|kg|lbf|lb·in|lb-in|rpm|kW|mA|kΩ|vs|e\.g\.|i\.e\.)(?![\w-])|µm|(?<=\d ?)s(?![\w-]))/g;

export function KeepUnits({ text }: { text: string }) {
  const parts = text.split(UNITS);
  return (
    <>
      {parts.map((p, i) => (i % 2 ? <span key={i} className="nocap">{p}</span> : <React.Fragment key={i}>{p}</React.Fragment>))}
    </>
  );
}
