import { SDNUCylinderDTO } from "./types"

const DESC_STD = "Double Acting ISO-6432 SS Round Body SDNU Series Magnetic Cylinder"
const DESC_CUSHION = "Double Acting ISO-6432 SS Round Body SDNU Series Magnetic Cylinder With Adjustable Cushion"

export const SDNU_CYLINDERS: SDNUCylinderDTO[] = [
  // ===== STANDARD (NO CUSHION) =====
  { partNumber: "SDNU12X25S",  series: "SDNU", description: DESC_STD, boreSize: 12, stroke: 25,  magnetic: true, cushion: false, price: 47.37 },
  { partNumber: "SDNU12X50S",  series: "SDNU", description: DESC_STD, boreSize: 12, stroke: 50,  magnetic: true, cushion: false, price: 49.62 },
  { partNumber: "SDNU12X75S",  series: "SDNU", description: DESC_STD, boreSize: 12, stroke: 75,  magnetic: true, cushion: false, price: 53.49 },
  { partNumber: "SDNU12X100S", series: "SDNU", description: DESC_STD, boreSize: 12, stroke: 100, magnetic: true, cushion: false, price: 53.97 },
  { partNumber: "SDNU12X125S", series: "SDNU", description: DESC_STD, boreSize: 12, stroke: 125, magnetic: true, cushion: false, price: 54.60 },
  { partNumber: "SDNU12X150S", series: "SDNU", description: DESC_STD, boreSize: 12, stroke: 150, magnetic: true, cushion: false, price: 57.09 },
  { partNumber: "SDNU12X175S", series: "SDNU", description: DESC_STD, boreSize: 12, stroke: 175, magnetic: true, cushion: false, price: 59.79 },
  { partNumber: "SDNU12X200S", series: "SDNU", description: DESC_STD, boreSize: 12, stroke: 200, magnetic: true, cushion: false, price: 62.10 },

  { partNumber: "SDNU16X25S",  series: "SDNU", description: DESC_STD, boreSize: 16, stroke: 25,  magnetic: true, cushion: false, price: 53.91 },
  { partNumber: "SDNU16X50S",  series: "SDNU", description: DESC_STD, boreSize: 16, stroke: 50,  magnetic: true, cushion: false, price: 56.79 },
  { partNumber: "SDNU16X75S",  series: "SDNU", description: DESC_STD, boreSize: 16, stroke: 75,  magnetic: true, cushion: false, price: 58.62 },
  { partNumber: "SDNU16X100S", series: "SDNU", description: DESC_STD, boreSize: 16, stroke: 100, magnetic: true, cushion: false, price: 60.51 },
  { partNumber: "SDNU16X125S", series: "SDNU", description: DESC_STD, boreSize: 16, stroke: 125, magnetic: true, cushion: false, price: 61.41 },
  { partNumber: "SDNU16X150S", series: "SDNU", description: DESC_STD, boreSize: 16, stroke: 150, magnetic: true, cushion: false, price: 62.70 },
  { partNumber: "SDNU16X175S", series: "SDNU", description: DESC_STD, boreSize: 16, stroke: 175, magnetic: true, cushion: false, price: 64.86 },
  { partNumber: "SDNU16X200S", series: "SDNU", description: DESC_STD, boreSize: 16, stroke: 200, magnetic: true, cushion: false, price: 66.15 },

  { partNumber: "SDNU20X25S",  series: "SDNU", description: DESC_STD, boreSize: 20, stroke: 25,  magnetic: true, cushion: false, price: 62.01 },
  { partNumber: "SDNU20X50S",  series: "SDNU", description: DESC_STD, boreSize: 20, stroke: 50,  magnetic: true, cushion: false, price: 63.66 },
  { partNumber: "SDNU20X75S",  series: "SDNU", description: DESC_STD, boreSize: 20, stroke: 75,  magnetic: true, cushion: false, price: 65.28 },
  { partNumber: "SDNU20X100S", series: "SDNU", description: DESC_STD, boreSize: 20, stroke: 100, magnetic: true, cushion: false, price: 66.15 },
  { partNumber: "SDNU20X125S", series: "SDNU", description: DESC_STD, boreSize: 20, stroke: 125, magnetic: true, cushion: false, price: 67.05 },
  { partNumber: "SDNU20X150S", series: "SDNU", description: DESC_STD, boreSize: 20, stroke: 150, magnetic: true, cushion: false, price: 67.95 },
  { partNumber: "SDNU20X175S", series: "SDNU", description: DESC_STD, boreSize: 20, stroke: 175, magnetic: true, cushion: false, price: 69.30 },
  { partNumber: "SDNU20X200S", series: "SDNU", description: DESC_STD, boreSize: 20, stroke: 200, magnetic: true, cushion: false, price: 71.76 },

  { partNumber: "SDNU25X25S",  series: "SDNU", description: DESC_STD, boreSize: 25, stroke: 25,  magnetic: true, cushion: false, price: 65.46 },
  { partNumber: "SDNU25X50S",  series: "SDNU", description: DESC_STD, boreSize: 25, stroke: 50,  magnetic: true, cushion: false, price: 68.61 },
  { partNumber: "SDNU25X75S",  series: "SDNU", description: DESC_STD, boreSize: 25, stroke: 75,  magnetic: true, cushion: false, price: 70.83 },
  { partNumber: "SDNU25X100S", series: "SDNU", description: DESC_STD, boreSize: 25, stroke: 100, magnetic: true, cushion: false, price: 72.72 },
  { partNumber: "SDNU25X125S", series: "SDNU", description: DESC_STD, boreSize: 25, stroke: 125, magnetic: true, cushion: false, price: 74.25 },
  { partNumber: "SDNU25X150S", series: "SDNU", description: DESC_STD, boreSize: 25, stroke: 150, magnetic: true, cushion: false, price: 75.12 },
  { partNumber: "SDNU25X175S", series: "SDNU", description: DESC_STD, boreSize: 25, stroke: 175, magnetic: true, cushion: false, price: 77.10 },
  { partNumber: "SDNU25X200S", series: "SDNU", description: DESC_STD, boreSize: 25, stroke: 200, magnetic: true, cushion: false, price: 78.60 },

  // ===== WITH ADJUSTABLE CUSHION =====
  { partNumber: "SDNU16X25-S-C",  series: "SDNU", description: DESC_CUSHION, boreSize: 16, stroke: 25,  magnetic: true, cushion: true, price: 63.99 },
  { partNumber: "SDNU16X50-S-C",  series: "SDNU", description: DESC_CUSHION, boreSize: 16, stroke: 50,  magnetic: true, cushion: true, price: 66.84 },
  { partNumber: "SDNU16X75-S-C",  series: "SDNU", description: DESC_CUSHION, boreSize: 16, stroke: 75,  magnetic: true, cushion: true, price: 68.79 },
  { partNumber: "SDNU16X100-S-C", series: "SDNU", description: DESC_CUSHION, boreSize: 16, stroke: 100, magnetic: true, cushion: true, price: 70.65 },
  { partNumber: "SDNU16X125-S-C", series: "SDNU", description: DESC_CUSHION, boreSize: 16, stroke: 125, magnetic: true, cushion: true, price: 71.55 },
  { partNumber: "SDNU16X150-S-C", series: "SDNU", description: DESC_CUSHION, boreSize: 16, stroke: 150, magnetic: true, cushion: true, price: 72.72 },
  { partNumber: "SDNU16X175-S-C", series: "SDNU", description: DESC_CUSHION, boreSize: 16, stroke: 175, magnetic: true, cushion: true, price: 74.88 },
  { partNumber: "SDNU16X200-S-C", series: "SDNU", description: DESC_CUSHION, boreSize: 16, stroke: 200, magnetic: true, cushion: true, price: 76.23 },

  { partNumber: "SDNU20X25-S-C",  series: "SDNU", description: DESC_CUSHION, boreSize: 20, stroke: 25,  magnetic: true, cushion: true, price: 74.88 },
  { partNumber: "SDNU20X50-S-C",  series: "SDNU", description: DESC_CUSHION, boreSize: 20, stroke: 50,  magnetic: true, cushion: true, price: 76.74 },
  { partNumber: "SDNU20X75-S-C",  series: "SDNU", description: DESC_CUSHION, boreSize: 20, stroke: 75,  magnetic: true, cushion: true, price: 78.21 },
  { partNumber: "SDNU20X100-S-C", series: "SDNU", description: DESC_CUSHION, boreSize: 20, stroke: 100, magnetic: true, cushion: true, price: 79.20 },
  { partNumber: "SDNU20X125-S-C", series: "SDNU", description: DESC_CUSHION, boreSize: 20, stroke: 125, magnetic: true, cushion: true, price: 80.07 },
  { partNumber: "SDNU20X150-S-C", series: "SDNU", description: DESC_CUSHION, boreSize: 20, stroke: 150, magnetic: true, cushion: true, price: 81.18 },
  { partNumber: "SDNU20X175-S-C", series: "SDNU", description: DESC_CUSHION, boreSize: 20, stroke: 175, magnetic: true, cushion: true, price: 82.32 },
  { partNumber: "SDNU20X200-S-C", series: "SDNU", description: DESC_CUSHION, boreSize: 20, stroke: 200, magnetic: true, cushion: true, price: 84.81 },

  { partNumber: "SDNU25X25-S-C",  series: "SDNU", description: DESC_CUSHION, boreSize: 25, stroke: 25,  magnetic: true, cushion: true, price: 82.50 },
  { partNumber: "SDNU25X50-S-C",  series: "SDNU", description: DESC_CUSHION, boreSize: 25, stroke: 50,  magnetic: true, cushion: true, price: 85.62 },
  { partNumber: "SDNU25X75-S-C",  series: "SDNU", description: DESC_CUSHION, boreSize: 25, stroke: 75,  magnetic: true, cushion: true, price: 87.72 },
  { partNumber: "SDNU25X100-S-C", series: "SDNU", description: DESC_CUSHION, boreSize: 25, stroke: 100, magnetic: true, cushion: true, price: 89.73 },
  { partNumber: "SDNU25X125-S-C", series: "SDNU", description: DESC_CUSHION, boreSize: 25, stroke: 125, magnetic: true, cushion: true, price: 91.20 },
  { partNumber: "SDNU25X150-S-C", series: "SDNU", description: DESC_CUSHION, boreSize: 25, stroke: 150, magnetic: true, cushion: true, price: 92.13 },
  { partNumber: "SDNU25X175-S-C", series: "SDNU", description: DESC_CUSHION, boreSize: 25, stroke: 175, magnetic: true, cushion: true, price: 94.02 },
  { partNumber: "SDNU25X200-S-C", series: "SDNU", description: DESC_CUSHION, boreSize: 25, stroke: 200, magnetic: true, cushion: true, price: 95.58 },
]