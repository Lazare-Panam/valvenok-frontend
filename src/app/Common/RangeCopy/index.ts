import type { RangeCopyEntry, RangeCopyMap } from "./types";
import { ACTUATOR_COPY } from "./copy-actuators";
import { FITTINGS_COPY } from "./copy-fittings";
import { HIGH_PRESSURE_COPY } from "./copy-highpressure";
import { VALVES_COPY } from "./copy-valves";

const ALL_COPY: RangeCopyMap = {
  ...ACTUATOR_COPY,
  ...FITTINGS_COPY,
  ...HIGH_PRESSURE_COPY,
  ...VALVES_COPY,
};

export function getRangeCopy(path: string): RangeCopyEntry | undefined {
  return ALL_COPY[path];
}
