// MPLDS micro linear actuators, Susin I-Tork. Figures from susingroup.com:
// MPLD series thrust data sheet (double acting) and MPLS series dimension table (spring return).

export type MPLDSize = {
  bore: number; // mm
  rod: number; // mm
  // thrust kN [close, open] at 2.8 / 3.5 / 4.2 / 5 / 5.5 / 7 bar
  thrust: [number, number][];
  mplsStroke: [number, number]; // mm
  mplsDims: { A: number; B: number; C: number; D: number; E: number };
};

export const MPLDS_BARS = [2.8, 3.5, 4.2, 5, 5.5, 7];

export const MPLDS_SIZES: MPLDSize[] = [
  { bore: 100, rod: 25, thrust: [[2.0, 1.9], [2.6, 2.4], [3.1, 2.9], [3.7, 3.4], [4.1, 3.8], [5.2, 4.8]], mplsStroke: [50, 250], mplsDims: { A: 292, B: 185, C: 25, D: 130, E: 86 } },
  { bore: 125, rod: 25, thrust: [[3.2, 3.1], [4.0, 3.9], [4.8, 4.6], [5.8, 5.5], [6.4, 6.1], [8.1, 7.8]], mplsStroke: [50, 250], mplsDims: { A: 374, B: 247, C: 25, D: 160, E: 108 } },
  { bore: 160, rod: 25, thrust: [[5.3, 5.2], [6.6, 6.5], [8.0, 7.8], [9.5, 9.3], [10.5, 10.2], [13.3, 13.0]], mplsStroke: [50, 275], mplsDims: { A: 522, B: 307, C: 25, D: 195, E: 135 } },
  { bore: 200, rod: 32, thrust: [[8.3, 8.1], [10.4, 10.1], [12.5, 12.2], [14.9, 14.5], [16.4, 15.9], [20.8, 20.3]], mplsStroke: [50, 300], mplsDims: { A: 765, B: 445, C: 25, D: 245, E: 175 } },
];

export const MPLDS_IMAGE = "https://pblol2.blob.core.windows.net/valvenok-images/products/actuators/pneumatic/mplds.webp";
