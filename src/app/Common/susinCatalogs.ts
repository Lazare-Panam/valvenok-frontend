// Susin catalogue PDFs on blob storage (valvenok-images/catalogs/susin), one per series.
// Use: SUSIN_CATALOG.MHD → link for a "Download catalogue" button.
const BASE = "https://pblol2.blob.core.windows.net/valvenok-images/catalogs/susin/";
const pdf = (name: string) => BASE + encodeURIComponent(name) + ".pdf";

export const SUSIN_CATALOG = {
  // pneumatic
  PDS: pdf("Pneumatic - PDS"),
  HD: pdf("Pneumatic - HD"),
  MHD: pdf("Pneumatic - MHD"),
  PLDS: pdf("Pneumatic - PLDS"),
  PDS_IOM: pdf("Pneumatic - IOM manual"),
  // electric
  ITQ: pdf("Electric - ITQ Heavy Duty"),
  ITQ_MICRO: pdf("Electric - ITQ Micro"),
  IQL: pdf("Electric - IQL"),
  ITL: pdf("Electric - ITL"),
  ITM: pdf("Electric - ITM"),
  QS: pdf("Electric - QS"),
  // hydraulic
  HLP: pdf("Hydraulic - HLP"),
  KTC_HYDRAULIC: pdf("Hydraulic - KTC hydraulic"),
  KTC_ELECTRICAL: pdf("Hydraulic - KTC electrical"),
  // mechanical
  ITG: pdf("Mechanical - ITG"),
  MAB: pdf("Mechanical - MAB"),
  MAW: pdf("Mechanical - MAW"),
  // accessories
  ITS: pdf("Accessories - ITS"),
} as const;
