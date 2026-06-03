export interface TGValveDTO {
  partNumber: string
  description: string
  wayType: '2/2' | '3/2' | '5/2' | '5/3'
  config: string // Single Solenoid, Double Solenoid, High Pressure, etc.
  thread: string
  price: number
}

export const TG_VALVES: TGValveDTO[] = [
  // 2/2 SINGLE SOLENOID
  { partNumber: "TG22-08",      description: "2/2 Way Single Solenoid Valve BSP 1/4\"",                       wayType: "2/2", config: "Single Solenoid", thread: "BSP 1/4\"", price: 20.85 },

  // 3/2 SINGLE SOLENOID
  { partNumber: "TG23-06",      description: "3/2 Way Single Solenoid Valve BSP 1/8\"",                       wayType: "3/2", config: "Single Solenoid", thread: "BSP 1/8\"", price: 21.45 },
  { partNumber: "TG23-06E",     description: "3/2 Way Single Solenoid Valve BSP 1/8\"",                       wayType: "3/2", config: "Single Solenoid", thread: "BSP 1/8\"", price: 21.45 },
  { partNumber: "TG23-08",      description: "3/2 Way Single Solenoid Valve BSP 1/4\"",                       wayType: "3/2", config: "Single Solenoid", thread: "BSP 1/4\"", price: 26.10 },
  { partNumber: "TG2321-08",    description: "3/2 Way Single Solenoid Valve BSP 1/4\"",                       wayType: "3/2", config: "Single Solenoid", thread: "BSP 1/4\"", price: 27.72 },
  { partNumber: "TG2331-10",    description: "3/2 Way Single Solenoid Valve BSP 3/8\"",                       wayType: "3/2", config: "Single Solenoid", thread: "BSP 3/8\"", price: 53.97 },
  { partNumber: "TG2341-15",    description: "3/2 Way Single Solenoid Valve BSP 1/2\"",                       wayType: "3/2", config: "Single Solenoid", thread: "BSP 1/2\"", price: 82.89 },

  // 3/2 HIGH PRESSURE
  { partNumber: "TG23HP-08",    description: "3/2 Way High Pressure Valve BSP 1/4\"",                         wayType: "3/2", config: "High Pressure",   thread: "BSP 1/4\"", price: 118.26 },
  { partNumber: "TG23HP-15",    description: "3/2 Way High Pressure Valve BSP 1/2\"",                         wayType: "3/2", config: "High Pressure",   thread: "BSP 1/2\"", price: 166.50 },

  // 5/2 SINGLE SOLENOID
  { partNumber: "TG2511-06",    description: "5/2 Way Single Solenoid Valve BSP 1/8\"",                       wayType: "5/2", config: "Single Solenoid", thread: "BSP 1/8\"", price: 33.78 },
  { partNumber: "TG2521-06",    description: "5/2 Way Single Solenoid Valve BSP 1/8\"",                       wayType: "5/2", config: "Single Solenoid", thread: "BSP 1/8\"", price: 32.94 },
  { partNumber: "TG2521-08",    description: "5/2 Way Single Solenoid Valve BSP 1/4\"",                       wayType: "5/2", config: "Single Solenoid", thread: "BSP 1/4\"", price: 32.94 },
  { partNumber: "TG2531-08M",   description: "5/2 Way Single Solenoid Valve BSP 1/4\"",                       wayType: "5/2", config: "Single Solenoid", thread: "BSP 1/4\"", price: 70.17 },
  { partNumber: "TG2531-10",    description: "5/2 Way Single Solenoid Valve BSP 3/8\"",                       wayType: "5/2", config: "Single Solenoid", thread: "BSP 3/8\"", price: 56.55 },
  { partNumber: "TG2541-15",    description: "5/2 Way Single Solenoid Valve BSP 1/2\"",                       wayType: "5/2", config: "Single Solenoid", thread: "BSP 1/2\"", price: 77.58 },

  // 5/2 DOUBLE SOLENOID
  { partNumber: "TG2512-06",    description: "5/2 Way Double Solenoid Valve BSP 1/8\"",                       wayType: "5/2", config: "Double Solenoid", thread: "BSP 1/8\"", price: 50.64 },
  { partNumber: "TG2522-08",    description: "5/2 Way Double Solenoid Valve BSP 1/4\"",                       wayType: "5/2", config: "Double Solenoid", thread: "BSP 1/4\"", price: 47.40 },
  { partNumber: "TG2532-10",    description: "5/2 Way Double Solenoid Valve BSP 3/8\"",                       wayType: "5/2", config: "Double Solenoid", thread: "BSP 3/8\"", price: 113.13 },
  { partNumber: "TG2542-15",    description: "5/2 Way Double Solenoid Valve BSP 1/2\"",                       wayType: "5/2", config: "Double Solenoid", thread: "BSP 1/2\"", price: 117.63 },

  // 5/3 DOUBLE SOLENOID CENTER CLOSED
  { partNumber: "TG3522-08C",   description: "5/3 Way Double Solenoid Valve Center Closed BSP 1/4\"",         wayType: "5/3", config: "Center Closed",   thread: "BSP 1/4\"", price: 105.30 },
  { partNumber: "TG3532-10C",   description: "5/3 Way Double Solenoid Valve Center Closed BSP 3/8\"",         wayType: "5/3", config: "Center Closed",   thread: "BSP 3/8\"", price: 118.41 },
  { partNumber: "TG3542-15C",   description: "5/3 Way Double Solenoid Valve Center Closed BSP 1/2\"",         wayType: "5/3", config: "Center Closed",   thread: "BSP 1/2\"", price: 231.36 },
]

export const TG_DESCRIPTION = {
  title: "TG Series — Solenoid Valves",
  description:
    "Pneumatic solenoid valves for industrial automation and process control. 2/2, 3/2, 5/2 and 5/3 way configurations across BSP 1/8\", 1/4\", 3/8\" and 1/2\" port sizes — single solenoid, double solenoid, center closed and high pressure variants.",
  specs: [
    "2/2, 3/2, 5/2, 5/3 Way",
    "BSP 1/8\" – 1/2\"",
    "Single & Double Solenoid",
    "Center Closed Variants",
    "High Pressure Options",
  ],
}