export type RangeCopyEntry = {
  /** H2 for the section, e.g. "About JIC 37° Flare Elbows". */
  heading: string;
  /** 2–3 short paragraphs of plain text. */
  paragraphs: string[];
  /** Optional bullet points (selection tips, typical uses). */
  points?: string[];
};

export type RangeCopyMap = Record<string, RangeCopyEntry>;
