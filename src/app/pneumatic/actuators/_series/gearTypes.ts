// Shared by the manual gear actuator pages (MAB, MAW, ITG): server and client.
export type GearStage = "Standard" | "1S" | "2S";
export type GearModel = { model: string; stage: GearStage; torqueNm: number; ma: number; handwheel: number; ratio: string };
export const STAGE_LABEL: Record<GearStage, string> = {
  Standard: "Standard",
  "1S": "Single stage reduction (1S)",
  "2S": "Double stage reduction (2S)",
};
export const RIM_LIMIT_N = 360;
export const rimEffort = (m: GearModel, outNm: number, wheelMm = m.handwheel) => outNm / m.ma / (wheelMm / 2000);
