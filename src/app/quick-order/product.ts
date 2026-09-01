export interface ProductQuickOrder {
  sku: string;
  name: string;
  category: string;
  meta: string;
  price: number; // GBP sell price (supplier $ × 0.77 × 3)
  cloudinaryId: string;
  specs?: Record<string, string>;
}

export const PRODUCTS: ProductQuickOrder[] = [
  {
    sku: "TEST",
    name: 'Adapters, 1/4" F ISO Parallel x 1/4" M NPT, SS316',
    meta: "Panam Adapter, Pipe Fitting",
    category: "Adapter",
    price: 0.5,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/adaptor",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Parallel x NPT",
      sizeA: '1/4" BSPP F',
      sizeB: '1/4" NPT M',
    },
  },
  {
    sku: "PA-4G-4N-SS",
    name: 'Adapters, 1/4" F ISO Parallel x 1/4" M NPT, SS316',
    meta: "Panam Adapter, Pipe Fitting",
    category: "Adapter",
    price: 7.97,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/adaptor",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Parallel x NPT",
      sizeA: '1/4" BSPP F',
      sizeB: '1/4" NPT M',
    },
  },
  {
    sku: "PA-4G-SS-FSWL",
    name: 'Female Swivel Adaptor, 1/4" (6mm) BSPP, SS316',
    meta: "Panam Adapter, Pipe Fitting",
    category: "Adapter",
    price: 19.64,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/adaptor",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      pipeSize: '1/4"',
      swivel: "Yes",
    },
  },
  //back ferrule
  {
    sku: "PBF-04-SS",
    name: 'Back Ferrule, 1/4" OD, SS316',
    meta: "Panam Back Ferrule, Tube Fitting",
    category: "Back Ferrule",
    price: 1.23,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/BACK-FERRULE.png",
    specs: {
      material: "SS316",
      tubeOD: '1/4"',
      type: "Imperial",
      ferruleType: "Back",
    },
  },
  {
    sku: "PBF-06-SS",
    name: 'Back Ferrule, 3/8" OD, SS316',
    meta: "Panam Back Ferrule, Tube Fitting",
    category: "Back Ferrule",
    price: 1.32,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/BACK-FERRULE.png",
    specs: {
      material: "SS316",
      tubeOD: '3/8"',
      type: "Imperial",
      ferruleType: "Back",
    },
  },
  {
    sku: "PBF-08-SS",
    name: 'Back Ferrule, 1/2" OD, SS316',
    meta: "Panam Back Ferrule, Tube Fitting",
    category: "Back Ferrule",
    price: 2.08,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/BACK-FERRULE.png",
    specs: {
      material: "SS316",
      tubeOD: '1/2"',
      type: "Imperial",
      ferruleType: "Back",
    },
  },
  {
    sku: "PBF-M06-SS",
    name: "Back Ferrule, 6mm OD, SS316",
    meta: "Panam Back Ferrule, Tube Fitting",
    category: "Back Ferrule",
    price: 1.23,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/BACK-FERRULE.png",
    specs: {
      material: "SS316",
      tubeOD: "6mm",
      type: "Metric",
      ferruleType: "Back",
    },
  },
  {
    sku: "PBF-M08-SS",
    name: "Back Ferrule, 8mm OD, SS316",
    meta: "Panam Back Ferrule, Tube Fitting",
    category: "Back Ferrule",
    price: 1.23,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/BACK-FERRULE.png",
    specs: {
      material: "SS316",
      tubeOD: "8mm",
      type: "Metric",
      ferruleType: "Back",
    },
  },
  {
    sku: "PBF-M10-SS",
    name: "Back Ferrule, 10mm OD, SS316",
    meta: "Panam Back Ferrule, Tube Fitting",
    category: "Back Ferrule",
    price: 1.32,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/BACK-FERRULE.png",
    specs: {
      material: "SS316",
      tubeOD: "10mm",
      type: "Metric",
      ferruleType: "Back",
    },
  },

  {
    sku: "PBU-12G-SS",
    name: 'Bulkhead Union, 3/4" M x 3/4" M BSPP, SS316',
    meta: "Panam Bulkhead Union, Pipe Fitting",
    category: "Bulkhead Union",
    price: 44.47,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/BULK-HEAD-UNION-IMPERIAL-PBU-04-SS.png",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      pipeSize: '3/4"',
    },
  },
  {
    sku: "PBU-4G-SS",
    name: 'Bulkhead Union, 1/4" M x 1/4" M BSPP, SS316',
    meta: "Panam Bulkhead Union, Pipe Fitting",
    category: "Bulkhead Union",
    price: 11.43,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/BULK-HEAD-UNION-IMPERIAL-PBU-04-SS.png",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      pipeSize: '1/4"',
    },
  },
  {
    sku: "PBU-6G-SS",
    name: 'Bulkhead Union, 3/8" M x 3/8" M BSPP, SS316',
    meta: "Panam Bulkhead Union, Pipe Fitting",
    category: "Bulkhead Union",
    price: 17.21,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/BULK-HEAD-UNION-IMPERIAL-PBU-04-SS.png",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      pipeSize: '3/8"',
    },
  },
  {
    sku: "PBU-8G-SS",
    name: 'Bulkhead Union, 1/2" M x 1/2" M BSPP, SS316',
    meta: "Panam Bulkhead Union, Pipe Fitting",
    category: "Bulkhead Union",
    price: 28.99,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/BULK-HEAD-UNION-IMPERIAL-PBU-04-SS.png",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      pipeSize: '1/2"',
    },
  },
  {
    sku: "PBU-M08-SS",
    name: "Bulkhead Union, 8mm OD, SS316",
    meta: "Panam Bulkhead Union, Tube Fitting",
    category: "Bulkhead Union",
    price: 17.72,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/BULK-HEAD-UNION-IMPERIAL-PBU-04-SS.png",
    specs: {
      material: "SS316",
      type: "Metric",
      threadType: "ISO Parallel (BSPP)",
      tubeOD: "8mm",
    },
  },

  {
    sku: "PFC-04-4N-SS",
    name: 'Female Connector, 1/4" OD x 1/4" NPT, SS316',
    meta: "Panam Female Connector, Tube Fitting",
    category: "Female Connector",
    price: 9.96,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/FEMALE CONNECTOR - TUBE OD X NPT - JPG (1).jpg",
    specs: {
      material: "SS316",
      tubeOD: '1/4"',
      type: "Imperial",
      threadType: "NPT",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PFC-08-8G-SS",
    name: 'Female Connector, 1/2" OD x 1/2" ISO Parallel, SS316',
    meta: "Panam Female Connector, Tube Fitting",
    category: "Female Connector",
    price: 19.75,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/FEMALE CONNECTOR - TUBE OD X NPT - JPG (1).jpg",
    specs: {
      material: "SS316",
      tubeOD: '1/2"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      threadSize: '1/2"',
    },
  },
  {
    sku: "PFC-M06-4G-SS",
    name: 'Female Connector, 6mm OD x 1/4" ISO Parallel, SS316',
    meta: "Panam Female Connector, Tube Fitting",
    category: "Female Connector",
    price: 10.95,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/FEMALE CONNECTOR - TUBE OD X NPT - JPG (1).jpg",
    specs: {
      material: "SS316",
      tubeOD: "6mm",
      type: "Metric",
      threadType: "ISO Parallel (BSPP)",
      threadSize: '1/4"',
    },
  },

  {
    sku: "PFF-04-SS",
    name: 'Front Ferrule, 1/4" OD, SS316',
    meta: "Panam Front Ferrule, Tube Fitting",
    category: "Front Ferrule",
    price: 1.23,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/FRONT-FERRULE.png",
    specs: {
      material: "SS316",
      tubeOD: '1/4"',
      type: "Imperial",
      ferruleType: "Front",
    },
  },
  {
    sku: "PFF-06-SS",
    name: 'Front Ferrule, 3/8" OD, SS316',
    meta: "Panam Front Ferrule, Tube Fitting",
    category: "Front Ferrule",
    price: 1.32,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/FRONT-FERRULE.png",
    specs: {
      material: "SS316",
      tubeOD: '3/8"',
      type: "Imperial",
      ferruleType: "Front",
    },
  },
  {
    sku: "PFF-08-SS",
    name: 'Front Ferrule, 1/2" OD, SS316',
    meta: "Panam Front Ferrule, Tube Fitting",
    category: "Front Ferrule",
    price: 2.08,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/FRONT-FERRULE.png",
    specs: {
      material: "SS316",
      tubeOD: '1/2"',
      type: "Imperial",
      ferruleType: "Front",
    },
  },
  {
    sku: "PFF-M06-SS",
    name: "Front Ferrule, 6mm OD, SS316",
    meta: "Panam Front Ferrule, Tube Fitting",
    category: "Front Ferrule",
    price: 1.23,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/FRONT-FERRULE.png",
    specs: {
      material: "SS316",
      tubeOD: "6mm",
      type: "Metric",
      ferruleType: "Front",
    },
  },
  {
    sku: "PFF-M08-SS",
    name: "Front Ferrule, 8mm OD, SS316",
    meta: "Panam Front Ferrule, Tube Fitting",
    category: "Front Ferrule",
    price: 1.23,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/FRONT-FERRULE.png",
    specs: {
      material: "SS316",
      tubeOD: "8mm",
      type: "Metric",
      ferruleType: "Front",
    },
  },
  {
    sku: "PFF-M10-SS",
    name: "Front Ferrule, 10mm OD, SS316",
    meta: "Panam Front Ferrule, Tube Fitting",
    category: "Front Ferrule",
    price: 1.32,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/FRONT-FERRULE.png",
    specs: {
      material: "SS316",
      tubeOD: "10mm",
      type: "Metric",
      ferruleType: "Front",
    },
  },
  {
    sku: "PFF-M12-SS",
    name: "Front Ferrule, 12mm OD, SS316",
    meta: "Panam Front Ferrule, Tube Fitting",
    category: "Front Ferrule",
    price: 2.08,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/FRONT-FERRULE.png",
    specs: {
      material: "SS316",
      tubeOD: "12mm",
      type: "Metric",
      ferruleType: "Front",
    },
  },

  {
    sku: "PFT-4N-SS",
    name: 'Female Tee, 1/4" x 1/4" x 1/4" NPT, SS316',
    meta: "Panam Female Tee, Pipe Fitting",
    category: "Female Tee",
    price: 20.05,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/FRONT-FERRULE.png",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "NPT",
      pipeSize: '1/4"',
    },
  },

  {
    sku: "PHC-4G-SS",
    name: 'Hex Coupling, 1/4" F x 1/4" F ISO Parallel, SS316',
    meta: "Panam Hex Coupling, Pipe Fitting",
    category: "Hex Coupling",
    price: 6.65,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hex-couplings.jpg",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      pipeSize: '1/4"',
    },
  },

  {
    sku: "PHC-6G-SS",
    name: 'Hex Coupling, 3/8" F x 3/8" F ISO Parallel, SS316',
    meta: "Panam Hex Coupling, Pipe Fitting",
    category: "Hex Coupling",
    price: 9.03,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hex-couplings.jpg",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      pipeSize: '3/8"',
    },
  },
  {
    sku: "PHC-8G-SS",
    name: 'Hex Coupling, 1/2" F x 1/2" F ISO Parallel, SS316',
    meta: "Panam Hex Coupling, Pipe Fitting",
    category: "Hex Coupling",
    price: 16.86,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hex-couplings.jpg",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      pipeSize: '1/2"',
    },
  },

  {
    sku: "PHN-12G-SS",
    name: 'Hex Nipple, 3/4" M x 3/4" M ISO Parallel, SS316',
    meta: "Panam Hex Nipple, Pipe Fitting",
    category: "Hex Nipple",
    price: 25.99,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      pipeSize: '3/4"',
    },
  },
  {
    sku: "PHN-12R-12G-SS",
    name: 'Hex Nipple, 3/4" M ISO Tapered x 3/4" M ISO Parallel, SS316',
    meta: "Panam Hex Nipple, Pipe Fitting",
    category: "Hex Nipple",
    price: 25.99,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Tapered x Parallel",
      sizeA: '3/4" BSPT',
      sizeB: '3/4" BSPP',
    },
  },
  {
    sku: "PHN-16G-SS",
    name: 'Hex Nipple, 1" M x 1" M ISO Parallel, SS316',
    meta: "Panam Hex Nipple, Pipe Fitting",
    category: "Hex Nipple",
    price: 48.86,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      pipeSize: '1"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      endA: '1" BSPP',
      endB: '1" BSPP',
    },
  },
  {
    sku: "PHN-16R-16G-SS",
    name: 'Hex Nipple, 1" M ISO Tapered x 1" M ISO Parallel, SS316',
    meta: "Panam Hex Nipple, Pipe Fitting",
    category: "Hex Nipple",
    price: 48.86,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      pipeSize: '1"',
      type: "Imperial",
      threadType: "ISO Tapered x Parallel",
      endA: '1" BSPT',
      endB: '1" BSPP',
    },
  },
  {
    sku: "PHN-2G-SS",
    name: 'Hex Nipple, 1/8" M x 1/8" M ISO Parallel, SS316',
    meta: "Panam Hex Nipple, Pipe Fitting",
    category: "Hex Nipple",
    price: 2.66,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      pipeSize: '1/8"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      endA: '1/8" BSPP',
      endB: '1/8" BSPP',
    },
  },
  {
    sku: "PHN-4G-SS",
    name: 'Hex Nipple, 1/4" M x 1/4" M ISO Parallel, SS316',
    meta: "Panam Hex Nipple, Pipe Fitting",
    category: "Hex Nipple",
    price: 6.35,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      pipeSize: '1/4"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      endA: '1/4" BSPP',
      endB: '1/4" BSPP',
    },
  },
  {
    sku: "PHN-4G-SS-10K",
    name: 'Hex Nipple, 1/4" BSPP, 10,000 PSI, SS316',
    meta: "Panam Hex Nipple, High Pressure Pipe Fitting",
    category: "Hex Nipple",
    price: 7.65,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      pipeSize: '1/4"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      endA: '1/4" BSPP',
      endB: '1/4" BSPP',
      maxPressure: "10000 PSI",
    },
  },
  {
    sku: "PHN-4J-4G-SS-10K",
    name: 'Hex Nipple, 1/4" JIC x 1/4" BSPP, 10,000 PSI, SS316',
    meta: "Panam Hex Nipple, High Pressure Pipe Fitting",
    category: "Hex Nipple",
    price: 13.75,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      pipeSize: '1/4"',
      type: "Imperial",
      threadType: "JIC x ISO Parallel",
      endA: '1/4" JIC',
      endB: '1/4" BSPP',
      maxPressure: "10000 PSI",
    },
  },
  {
    sku: "PHN-4N-4G-SS-10K",
    name: 'Hex Nipple, 1/4" NPT x 1/4" BSPP, 10,000 PSI, SS316',
    meta: "Panam Hex Nipple, High Pressure Pipe Fitting",
    category: "Hex Nipple",
    price: 6.82,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      pipeSize: '1/4"',
      type: "Imperial",
      threadType: "NPT x ISO Parallel",
      endA: '1/4" NPT',
      endB: '1/4" BSPP',
      maxPressure: "10000 PSI",
    },
  },
  {
    sku: "PHN-4R-4G-SS",
    name: 'Hex Nipple, 1/4" M ISO Tapered x 1/4" M ISO Parallel, SS316',
    meta: "Panam Hex Nipple, Pipe Fitting",
    category: "Hex Nipple",
    price: 9.36,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      pipeSize: '1/4"',
      type: "Imperial",
      threadType: "ISO Tapered x Parallel",
      endA: '1/4" BSPT',
      endB: '1/4" BSPP',
    },
  },
  {
    sku: "PHN-4R-SS",
    name: 'Hex Nipple, 1/4" M x 1/4" M ISO Tapered, SS316',
    meta: "Panam Hex Nipple, Pipe Fitting",
    category: "Hex Nipple",
    price: 4.51,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      pipeSize: '1/4"',
      type: "Imperial",
      threadType: "ISO Tapered (BSPT)",
      endA: '1/4" BSPT',
      endB: '1/4" BSPT',
    },
  },
  {
    sku: "PHN-6G-SS",
    name: 'Hex Nipple, 3/8" M x 3/8" M ISO Parallel, SS316',
    meta: "Panam Hex Nipple, Pipe Fitting",
    category: "Hex Nipple",
    price: 9.36,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      pipeSize: '3/8"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      endA: '3/8" BSPP',
      endB: '3/8" BSPP',
    },
  },
  {
    sku: "PHN-6R-6G-SS",
    name: 'Hex Nipple, 3/8" M ISO Tapered x 3/8" M ISO Parallel, SS316',
    meta: "Panam Hex Nipple, Pipe Fitting",
    category: "Hex Nipple",
    price: 16.63,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      pipeSize: '3/8"',
      type: "Imperial",
      threadType: "ISO Tapered x Parallel",
      endA: '3/8" BSPT',
      endB: '3/8" BSPP',
    },
  },
  {
    sku: "PHN-8G-SS",
    name: 'Hex Nipple, 1/2" M x 1/2" M ISO Parallel, SS316',
    meta: "Panam Hex Nipple, Pipe Fitting",
    category: "Hex Nipple",
    price: 16.63,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      pipeSize: '1/2"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      endA: '1/2" BSPP',
      endB: '1/2" BSPP',
    },
  },
  {
    sku: "PHN-8G-SS-10K",
    name: 'Hex Nipple, 1/2" BSPP, 10,000 PSI, SS316',
    meta: "Panam Hex Nipple, High Pressure Pipe Fitting",
    category: "Hex Nipple",
    price: 19.86,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      pipeSize: '1/2"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      endA: '1/2" BSPP',
      endB: '1/2" BSPP',
      maxPressure: "10000 PSI",
    },
  },
  {
    sku: "PHN-8N-8G-SS",
    name: 'Hex Nipple, 1/2" M NPT x 1/2" M ISO Parallel, SS316',
    meta: "Panam Hex Nipple, Pipe Fitting",
    category: "Hex Nipple",
    price: 22.75,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      pipeSize: '1/2"',
      type: "Imperial",
      threadType: "NPT x ISO Parallel",
      endA: '1/2" NPT',
      endB: '1/2" BSPP',
    },
  },
  {
    sku: "PHN-8N-SS",
    name: 'Hex Nipple, 1/2" M x 1/2" M NPT, SS316',
    meta: "Panam Hex Nipple, Pipe Fitting",
    category: "Hex Nipple",
    price: 12.08,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      pipeSize: '1/2"',
      type: "Imperial",
      threadType: "NPT",
      endA: '1/2" NPT',
      endB: '1/2" NPT',
    },
  },
  {
    sku: "PHN-8R-8G-SS",
    name: 'Hex Nipple, 1/2" M ISO Tapered x 1/2" M ISO Parallel, SS316',
    meta: "Panam Hex Nipple, Pipe Fitting",
    category: "Hex Nipple",
    price: 22.75,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      pipeSize: '1/2"',
      type: "Imperial",
      threadType: "ISO Tapered x Parallel",
      endA: '1/2" BSPT',
      endB: '1/2" BSPP',
    },
  },
  {
    sku: "PHN-8R-SS",
    name: 'Hex Nipple, 1/2" M x 1/2" M ISO Tapered, SS316',
    meta: "Panam Hex Nipple, Pipe Fitting",
    category: "Hex Nipple",
    price: 12.08,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      pipeSize: '1/2"',
      type: "Imperial",
      threadType: "ISO Tapered (BSPT)",
      endA: '1/2" BSPT',
      endB: '1/2" BSPT',
    },
  },

  {
    sku: "PHP-12G-SS",
    name: 'Hex Plug, 3/4" M ISO Parallel, SS316',
    meta: "Panam Hex Plug, Pipe Fitting",
    category: "Hex Plug",
    price: 15.25,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hex-p.jpg",
    specs: {
      material: "SS316",
      pipeSize: '3/4"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
    },
  },
  {
    sku: "PHP-4R-SS",
    name: 'Hex Plug, 1/4" M ISO Tapered, SS316',
    meta: "Panam Hex Plug, Pipe Fitting",
    category: "Hex Plug",
    price: 4.64,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hex-p.jpg",
    specs: {
      material: "SS316",
      pipeSize: '1/4"',
      type: "Imperial",
      threadType: "ISO Tapered (BSPT)",
    },
  },
  {
    sku: "PHP-6G-SS",
    name: 'Hex Plug, 3/8" M ISO Parallel, SS316',
    meta: "Panam Hex Plug, Pipe Fitting",
    category: "Hex Plug",
    price: 6.82,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hex-p.jpg",
    specs: {
      material: "SS316",
      pipeSize: '3/8"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
    },
  },
  {
    sku: "PHP-6G-SS-10K",
    name: 'Pipe Hex Plug, 3/8" BSPP, 10,000 PSI, SS316',
    meta: "Panam Hex Plug, High Pressure Pipe Fitting",
    category: "Hex Plug",
    price: 6.47,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hex-p.jpg",
    specs: {
      material: "SS316",
      pipeSize: '3/8"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      maxPressure: "10000 PSI",
    },
  },
  {
    sku: "PHP-6N-SS-10K",
    name: 'Pipe Hex Plug, 3/8" NPT, 10,000 PSI, SS316',
    meta: "Panam Hex Plug, High Pressure Pipe Fitting",
    category: "Hex Plug",
    price: 5.54,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hex-p.jpg",
    specs: {
      material: "SS316",
      pipeSize: '3/8"',
      type: "Imperial",
      threadType: "NPT",
      maxPressure: "10000 PSI",
    },
  },
  {
    sku: "PHP-6R-SS",
    name: 'Hex Plug, 3/8" BSPT Male, SS316',
    meta: "Panam Hex Plug, Pipe Fitting",
    category: "Hex Plug",
    price: 5.17,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hex-p.jpg",
    specs: {
      material: "SS316",
      pipeSize: '3/8"',
      type: "Imperial",
      threadType: "ISO Tapered (BSPT)",
    },
  },
  {
    sku: "PHP-8G-SS",
    name: 'Hex Plug, 1/2" M ISO Parallel, SS316',
    meta: "Panam Hex Plug, Pipe Fitting",
    category: "Hex Plug",
    price: 9.82,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hex-p.jpg",
    specs: {
      material: "SS316",
      pipeSize: '1/2"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
    },
  },
  {
    sku: "PHRN-12N-8N-SS",
    name: 'Hex Reducing Nipple, 3/4" M NPT x 1/2" M NPT, SS316',
    meta: "Panam Hex Reducing Nipple, Pipe Fitting",
    category: "Hex Reducing Nipple",
    price: 27.1,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hex-couplings.jpg",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "NPT",
      endA: '3/4" NPT',
      endB: '1/2" NPT',
    },
  },
  {
    sku: "PHRN-6R-4R-SS",
    name: 'Hex Reducing Nipple, 3/8" M ISO Tapered x 1/4" M ISO Tapered, SS316',
    meta: "Panam Hex Reducing Nipple, Pipe Fitting",
    category: "Hex Reducing Nipple",
    price: 6.77,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hex-couplings.jpg",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Tapered (BSPT)",
      endA: '3/8" BSPT',
      endB: '1/4" BSPT',
    },
  },
  {
    sku: "PHRN-8G-4G-SS",
    name: 'Hex Reducing Nipple, 1/2" M ISO Parallel x 1/4" M ISO Parallel, SS316',
    meta: "Panam Hex Reducing Nipple, Pipe Fitting",
    category: "Hex Reducing Nipple",
    price: 14.9,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hex-couplings.jpg",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      endA: '1/2" BSPP',
      endB: '1/4" BSPP',
    },
  },
  {
    sku: "PMC-04-2G-SS",
    name: 'Male Connector, 1/4" OD x 1/8" ISO Parallel, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 6.93,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: '1/4"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      threadSize: '1/8"',
    },
  },
  {
    sku: "PMC-04-4G-SS",
    name: 'Male Connector, 1/4" OD x 1/4" ISO Parallel, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 8.23,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: '1/4"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PMC-04-4N-SS",
    name: 'Male Connector, 1/4" OD x 1/4" NPT, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 6.93,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: '1/4"',
      type: "Imperial",
      threadType: "NPT",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PMC-04-4R-SS",
    name: 'Male Connector, 1/4" OD x 1/4" ISO Tapered, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 6.93,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: '1/4"',
      type: "Imperial",
      threadType: "ISO Tapered (BSPT)",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PMC-06-4N-SS",
    name: 'Male Connector, 3/8" OD x 1/4" NPT, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 9.31,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: '3/8"',
      type: "Imperial",
      threadType: "NPT",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PMC-06-6G-SS",
    name: 'Male Connector, 3/8" OD x 3/8" ISO Parallel, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 12.13,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: '3/8"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      threadSize: '3/8"',
    },
  },
  {
    sku: "PMC-06-6N-SS",
    name: 'Male Connector, 3/8" OD x 3/8" NPT, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 9.31,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: '3/8"',
      type: "Imperial",
      threadType: "NPT",
      threadSize: '3/8"',
    },
  },
  {
    sku: "PMC-06-6R-SS",
    name: 'Male Connector, 3/8" OD x 3/8" ISO Tapered, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 9.31,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: '3/8"',
      type: "Imperial",
      threadType: "ISO Tapered (BSPT)",
      threadSize: '3/8"',
    },
  },
  {
    sku: "PMC-08-8G-SS",
    name: 'Male Connector, 1/2" OD x 1/2" ISO Parallel, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 22.49,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: '1/2"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      threadSize: '1/2"',
    },
  },
  {
    sku: "PMC-08-8N-SS",
    name: 'Male Connector, 1/2" OD x 1/2" NPT, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 15.59,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: '1/2"',
      type: "Imperial",
      threadType: "NPT",
      threadSize: '1/2"',
    },
  },
  {
    sku: "PMC-08-8R-SS",
    name: 'Male Connector, 1/2" OD x 1/2" ISO Tapered, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 15.59,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: '1/2"',
      type: "Imperial",
      threadType: "ISO Tapered (BSPT)",
      threadSize: '1/2"',
    },
  },
  {
    sku: "PMC-M06-2R-SS",
    name: 'Male Connector, 6mm OD x 1/8" ISO Tapered, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 6.7,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "6mm",
      type: "Metric",
      threadType: "ISO Tapered (BSPT)",
      threadSize: '1/8"',
    },
  },
  {
    sku: "PMC-M06-4G-SS",
    name: 'Male Connector, 6mm OD x 1/4" ISO Parallel, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 8.23,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "6mm",
      type: "Metric",
      threadType: "ISO Parallel (BSPP)",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PMC-M06-4R-SS",
    name: 'Male Connector, 6mm OD x 1/4" ISO Tapered, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 6.93,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "6mm",
      type: "Metric",
      threadType: "ISO Tapered (BSPT)",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PMC-M08-4G-SS",
    name: 'Male Connector, 8mm OD x 1/4" ISO Parallel, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 8.87,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "8mm",
      type: "Metric",
      threadType: "ISO Parallel (BSPP)",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PMC-M08-4N-SS",
    name: 'Male Connector, 8mm OD x 1/4" NPT, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 7.78,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "8mm",
      type: "Metric",
      threadType: "NPT",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PMC-M08-4R-SS",
    name: 'Male Connector, 8mm OD x 1/4" ISO Tapered, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 7.78,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "8mm",
      type: "Metric",
      threadType: "ISO Tapered (BSPT)",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PMC-M08-6R-SS",
    name: 'Male Connector, 8mm OD x 3/8" ISO Tapered, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 8.87,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "8mm",
      type: "Metric",
      threadType: "ISO Tapered (BSPT)",
      threadSize: '3/8"',
    },
  },
  {
    sku: "PMC-M10-4N-SS",
    name: 'Male Connector, 10mm OD x 1/4" NPT, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 9.31,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "10mm",
      type: "Metric",
      threadType: "NPT",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PMC-M10-4R-SS",
    name: 'Male Connector, 10mm OD x 1/4" ISO Tapered, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 9.31,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "10mm",
      type: "Metric",
      threadType: "ISO Tapered (BSPT)",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PMC-M10-6G-SS",
    name: 'Male Connector, 10mm OD x 3/8" ISO Parallel, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 12.13,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "10mm",
      type: "Metric",
      threadType: "ISO Parallel (BSPP)",
      threadSize: '3/8"',
    },
  },
  {
    sku: "PMC-M10-6R-SS",
    name: 'Male Connector, 10mm OD x 3/8" ISO Tapered, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 9.31,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "10mm",
      type: "Metric",
      threadType: "ISO Tapered (BSPT)",
      threadSize: '3/8"',
    },
  },
  {
    sku: "PMC-M10-8G-SS",
    name: 'Male Connector, 10mm OD x 1/2" ISO Parallel, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 20.79,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "10mm",
      type: "Metric",
      threadType: "ISO Parallel (BSPP)",
      threadSize: '1/2"',
    },
  },
  {
    sku: "PMC-M10-8N-SS",
    name: 'Male Connector, 10mm OD x 1/2" NPT, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 12.13,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "10mm",
      type: "Metric",
      threadType: "NPT",
      threadSize: '1/2"',
    },
  },
  {
    sku: "PMC-M10-8R-SS",
    name: 'Male Connector, 10mm OD x 1/2" ISO Tapered, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 12.13,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "10mm",
      type: "Metric",
      threadType: "ISO Tapered (BSPT)",
      threadSize: '1/2"',
    },
  },
  {
    sku: "PMC-M12-2G-SS",
    name: 'Male Connector, 12mm OD x 1/8" ISO Parallel, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 13.4,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "12mm",
      type: "Metric",
      threadType: "ISO Parallel (BSPP)",
      threadSize: '1/8"',
    },
  },
  {
    sku: "PMC-M12-4R-SS",
    name: 'Male Connector, 12mm OD x 1/4" ISO Tapered, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 13.4,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "12mm",
      type: "Metric",
      threadType: "ISO Tapered (BSPT)",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PMC-M12-8N-SS",
    name: 'Male Connector, 12mm OD x 1/2" NPT, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 15.59,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "12mm",
      type: "Metric",
      threadType: "NPT",
      threadSize: '1/2"',
    },
  },
  {
    sku: "PMC-M12-8R-SS",
    name: 'Male Connector, 12mm OD x 1/2" ISO Tapered, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 15.59,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "12mm",
      type: "Metric",
      threadType: "ISO Tapered (BSPT)",
      threadSize: '1/2"',
    },
  },
  {
    sku: "PMC-M15-8R-SS",
    name: 'Male Connector, 15mm OD x 1/2" NPT, SS316',
    meta: "Panam Male Connector, Tube Fitting",
    category: "Male Connector",
    price: 19.92,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/valvenok-images/products/fittings/mc-tube-fittings.jpg",
    specs: {
      material: "SS316",
      tubeOD: "15mm",
      type: "Metric",
      threadType: "NPT",
      threadSize: '1/2"',
    },
  },

  {
    sku: "PME-04-4R-SS",
    name: 'Male Elbow, 1/4" OD x 1/4" ISO Tapered, SS316',
    meta: "Panam Male Elbow, Tube Fitting",
    category: "Male Elbow",
    price: 13.37,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-elbow",
    specs: {
      material: "SS316",
      tubeOD: '1/4"',
      type: "Imperial",
      threadType: "ISO Tapered (BSPT)",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PME-4G-SWL-SS",
    name: 'Male Elbow, 1/4" M x 1/4" F SWL ISO Parallel, SS316',
    meta: "Panam Male Elbow, Tube Fitting",
    category: "Male Elbow",
    price: 22.18,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-elbow",
    specs: {
      material: "SS316",
      tubeOD: '1/4"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      threadSize: '1/4"',
      swivel: "Yes",
    },
  },
  {
    sku: "PME-6G-SWL-SS",
    name: 'Male Elbow, 3/8" M x 3/8" F SWL ISO Parallel, SS316',
    meta: "Panam Male Elbow, Tube Fitting",
    category: "Male Elbow",
    price: 29.92,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-elbow",
    specs: {
      material: "SS316",
      tubeOD: '3/8"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      threadSize: '3/8"',
      swivel: "Yes",
    },
  },
  {
    sku: "PME-M06-4R-SS",
    name: 'Male Elbow, 6mm OD x 1/4" ISO Tapered, SS316',
    meta: "Panam Male Elbow, Tube Fitting",
    category: "Male Elbow",
    price: 13.37,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-elbow",
    specs: {
      material: "SS316",
      tubeOD: "6mm",
      type: "Metric",
      threadType: "ISO Tapered (BSPT)",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PME-M08-4R-SS",
    name: 'Male Elbow, 8mm OD x 1/4" ISO Tapered, SS316',
    meta: "Panam Male Elbow, Tube Fitting",
    category: "Male Elbow",
    price: 15.38,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-elbow",
    specs: {
      material: "SS316",
      tubeOD: "8mm",
      type: "Metric",
      threadType: "ISO Tapered (BSPT)",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PME-M08-6R-SS",
    name: 'Male Elbow, 8mm OD x 3/8" ISO Tapered, SS316',
    meta: "Panam Male Elbow, Tube Fitting",
    category: "Male Elbow",
    price: 17.85,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-elbow",
    specs: {
      material: "SS316",
      tubeOD: "8mm",
      type: "Metric",
      threadType: "ISO Tapered (BSPT)",
      threadSize: '3/8"',
    },
  },
  {
    sku: "PME-M10-4R-SS",
    name: 'Male Elbow, 10mm OD x 1/4" ISO Tapered, SS316',
    meta: "Panam Male Elbow, Tube Fitting",
    category: "Male Elbow",
    price: 18.27,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-elbow",
    specs: {
      material: "SS316",
      tubeOD: "10mm",
      type: "Metric",
      threadType: "ISO Tapered (BSPT)",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PN-04-SS",
    name: 'Nut, 1/4" OD, SS316',
    meta: "Panam Nut, Tube Fitting",
    category: "Nut",
    price: 2.45,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/NUTjpg",
    specs: { material: "SS316", tubeOD: '1/4"', type: "Imperial" },
  },
  {
    sku: "PN-M08-SS",
    name: "Nut, 8mm OD, SS316",
    meta: "Panam Nut, Tube Fitting",
    category: "Nut",
    price: 2.45,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/NUTjpg",
    specs: { material: "SS316", tubeOD: "8mm", type: "Metric" },
  },
  {
    sku: "PN-M12-SS",
    name: "Nut, 12mm OD, SS316",
    meta: "Panam Nut, Tube Fitting",
    category: "Nut",
    price: 4.13,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/NUTjpg",
    specs: { material: "SS316", tubeOD: "12mm", type: "Metric" },
  },

  {
    sku: "PNV-IB-S-04G-FF",
    name: 'Needle Valve IB, 1/4" BSPP Female In/Out, PTFE, Straight, SS316',
    meta: "Panam Needle Valve, Valve",
    category: "Needle Valve",
    price: 36.15,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/PNV-IB-S-02-OD.jpg",
    specs: {
      material: "SS316",
      type: "Imperial",
      series: "IB",
      threadType: "ISO Parallel (BSPP)",
      pipeSize: '1/4"',
      endConnection: "Female In/Out",
      stemSeal: "PTFE",
      configuration: "Straight",
    },
  },
  {
    sku: "PNV-IB-S-06G-FF",
    name: 'Needle Valve IB, 3/8" BSPP Female In/Out, PTFE, Straight, SS316',
    meta: "Panam Needle Valve, Valve",
    category: "Needle Valve",
    price: 50.58,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/PNV-IB-S-02-OD.jpg",
    specs: {
      material: "SS316",
      type: "Imperial",
      series: "IB",
      threadType: "ISO Parallel (BSPP)",
      pipeSize: '3/8"',
      endConnection: "Female In/Out",
      stemSeal: "PTFE",
      configuration: "Straight",
    },
  },
  {
    sku: "PNV-IB-S-08G-FF",
    name: 'Needle Valve IB, 1/2" BSPP Female In/Out, PTFE, Straight, SS316',
    meta: "Panam Needle Valve, Valve",
    category: "Needle Valve",
    price: 60.64,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/PNV-IB-S-02-OD.jpg",
    specs: {
      material: "SS316",
      type: "Imperial",
      series: "IB",
      threadType: "ISO Parallel (BSPP)",
      pipeSize: '1/2"',
      endConnection: "Female In/Out",
      stemSeal: "PTFE",
      configuration: "Straight",
    },
  },
  {
    sku: "PRB-4N-2N-SS",
    name: 'Reducing Bushing, 1/4" M x 1/8" F NPT, SS316',
    meta: "Panam Reducing Bushing, Pipe Fitting",
    category: "Reducing Bushing",
    price: 3.37,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/reducing-bushing.jpg",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "NPT",
      sizeA: '1/4"',
      sizeB: '1/8"',
    },
  },
  {
    sku: "PRB-8G-6G-SS",
    name: 'Reducing Bushing, 1/2" M x 3/8" F ISO Parallel, SS316',
    meta: "Panam Reducing Bushing, Pipe Fitting",
    category: "Reducing Bushing",
    price: 14.71,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/reducing-bushing.jpg",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      sizeA: '1/2"',
      sizeB: '3/8"',
    },
  },
  {
    sku: "PRB-8N-4N-SS",
    name: 'Reducing Bushing, 1/2" M x 1/4" F NPT, SS316',
    meta: "Panam Reducing Bushing, Pipe Fitting",
    category: "Reducing Bushing",
    price: 7.58,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/reducing-bushing.jpg",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "NPT",
      sizeA: '1/2"',
      sizeB: '1/4"',
    },
  },

  {
    sku: "PSC-4G-6G-SWL-SS",
    name: 'Swivel Connector, 1/4" x 3/8" BSP Male x BSP Female Swivel, SS316',
    meta: "Panam Swivel Connector, Pipe Fitting",
    category: "Swivel Connector",
    price: 15.59,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/swivel-connector.png",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      sizeA: '1/4"',
      sizeB: '3/8"',
      swivel: "Yes",
    },
  },
  {
    sku: "PSC-6G-6G-SWL-SS",
    name: 'Swivel Connector, 3/8" x 3/8" BSP Male x BSP Female Swivel, SS316',
    meta: "Panam Swivel Connector, Pipe Fitting",
    category: "Swivel Connector",
    price: 16.75,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/swivel-connector.png",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      sizeA: '3/8"',
      sizeB: '3/8"',
      swivel: "Yes",
    },
  },
  {
    sku: "PSE-4N-SS",
    name: 'Street Elbow, 1/4" M x 1/4" F NPT, SS316',
    meta: "Panam Street Elbow, Pipe Fitting",
    category: "Street Elbow",
    price: 10.74,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/street-elbow-45°.png",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "NPT",
      pipeSize: '1/4"',
    },
  },
  {
    sku: "PSE-6N-SS",
    name: 'Street Elbow, 3/8" M x 3/8" F NPT, SS316',
    meta: "Panam Street Elbow, Pipe Fitting",
    category: "Street Elbow",
    price: 14.46,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/street-elbow-45°.png",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "NPT",
      pipeSize: '3/8"',
    },
  },

  {
    sku: "PTC-03-SS",
    name: 'Tube Cap, 3/16" OD, SS316',
    meta: "Panam Tube Cap, Tube Fitting",
    category: "Tube Cap",
    price: 6.95,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/TUBE_CAP.jpg",
    specs: { material: "SS316", tubeOD: '3/16"', type: "Imperial" },
  },
  {
    sku: "PTC-06-SS",
    name: 'Tube Cap, 3/8" OD, SS316',
    meta: "Panam Tube Cap, Tube Fitting",
    category: "Tube Cap",
    price: 8.09,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/TUBE_CAP.jpg",
    specs: { material: "SS316", tubeOD: '3/8"', type: "Imperial" },
  },
  {
    sku: "PTC-M06-SS",
    name: "Tube Cap, 6mm OD, SS316",
    meta: "Panam Tube Cap, Tube Fitting",
    category: "Tube Cap",
    price: 6.95,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/TUBE_CAP.jpg",
    specs: { material: "SS316", tubeOD: "6mm", type: "Metric" },
  },
  {
    sku: "PTC-M08-SS",
    name: "Tube Cap, 8mm OD, SS316",
    meta: "Panam Tube Cap, Tube Fitting",
    category: "Tube Cap",
    price: 7.71,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/TUBE_CAP.jpg",
    specs: { material: "SS316", tubeOD: "8mm", type: "Metric" },
  },
  {
    sku: "PTP-M08-SS",
    name: "Tube Plug, 8mm OD, SS316",
    meta: "Panam Tube Plug, Tube Fitting",
    category: "Tube Plug",
    price: 6.51,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/TUBE_PLUG.jpg",
    specs: { material: "SS316", tubeOD: "8mm", type: "Metric" },
  },

  {
    sku: "PU-04-SS",
    name: 'Union, 1/4" OD, SS316',
    meta: "Panam Union, Tube Fitting",
    category: "Union",
    price: 11.48,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/union-tube-fittings.jpg",
    specs: { material: "SS316", tubeOD: '1/4"', type: "Imperial" },
  },
  {
    sku: "PU-06-SS",
    name: 'Union, 3/8" OD, SS316',
    meta: "Panam Union, Tube Fitting",
    category: "Union",
    price: 13.4,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/union-tube-fittings.jpg",
    specs: { material: "SS316", tubeOD: '3/8"', type: "Imperial" },
  },
  {
    sku: "PU-08-SS",
    name: 'Union, 1/2" OD, SS316',
    meta: "Panam Union, Tube Fitting",
    category: "Union",
    price: 19.7,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/union-tube-fittings.jpg",
    specs: { material: "SS316", tubeOD: '1/2"', type: "Imperial" },
  },
  {
    sku: "PU-M06-SS",
    name: "Union, 6mm OD, SS316",
    meta: "Panam Union, Tube Fitting",
    category: "Union",
    price: 11.48,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/union-tube-fittings.jpg",
    specs: { material: "SS316", tubeOD: "6mm", type: "Metric" },
  },
  {
    sku: "PU-M08-SS",
    name: "Union, 8mm OD, SS316",
    meta: "Panam Union, Tube Fitting",
    category: "Union",
    price: 12.78,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/union-tube-fittings.jpg",
    specs: { material: "SS316", tubeOD: "8mm", type: "Metric" },
  },
  {
    sku: "PU-M10-SS",
    name: "Union, 10mm OD, SS316",
    meta: "Panam Union, Tube Fitting",
    category: "Union",
    price: 13.4,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/union-tube-fittings.jpg",
    specs: { material: "SS316", tubeOD: "10mm", type: "Metric" },
  },
  {
    sku: "PU-M15-SS",
    name: "Union, 15mm, SS316",
    meta: "Panam Union, Tube Fitting",
    category: "Union",
    price: 27.93,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/union-tube-fittings.jpg",
    specs: { material: "SS316", tubeOD: "15mm", type: "Metric" },
  },

  {
    sku: "PUE-04-SS",
    name: 'Union Elbow, 1/4" OD, SS316',
    meta: "Panam Union Elbow, Tube Fitting",
    category: "Union Elbow",
    price: 13.61,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/union-elbowjpg",
    specs: { material: "SS316", tubeOD: '1/4"', type: "Imperial" },
  },
  {
    sku: "PUE-06-SS",
    name: 'Union Elbow, 3/8" OD, SS316',
    meta: "Panam Union Elbow, Tube Fitting",
    category: "Union Elbow",
    price: 18.07,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/union-elbowjpg",
    specs: { material: "SS316", tubeOD: '3/8"', type: "Imperial" },
  },
  {
    sku: "PUE-12-SS",
    name: 'Union Elbow, 3/4" OD, SS316',
    meta: "Panam Union Elbow, Tube Fitting",
    category: "Union Elbow",
    price: 47.59,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/union-elbowjpg",
    specs: { material: "SS316", tubeOD: '3/4"', type: "Imperial" },
  },
  {
    sku: "PUE-M08-SS",
    name: "Union Elbow, 8mm OD, SS316",
    meta: "Panam Union Elbow, Tube Fitting",
    category: "Union Elbow",
    price: 16.79,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/union-elbowjpg",
    specs: { material: "SS316", tubeOD: "8mm", type: "Metric" },
  },
  {
    sku: "PUE-M10-SS",
    name: "Union Elbow, 10mm OD, SS316",
    meta: "Panam Union Elbow, Tube Fitting",
    category: "Union Elbow",
    price: 18.07,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/union-elbowjpg",
    specs: { material: "SS316", tubeOD: "10mm", type: "Metric" },
  },
  {
    sku: "PUE-M12-SS",
    name: "Union Elbow, 12mm OD, SS316",
    meta: "Panam Union Elbow, Tube Fitting",
    category: "Union Elbow",
    price: 25.71,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/union-elbowjpg",
    specs: { material: "SS316", tubeOD: "12mm", type: "Metric" },
  },
  {
    sku: "PUE-M15-SS",
    name: "Union Elbow, 15mm, SS316",
    meta: "Panam Union Elbow, Tube Fitting",
    category: "Union Elbow",
    price: 36.96,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/union-elbowjpg",
    specs: { material: "SS316", tubeOD: "15mm", type: "Metric" },
  },
  {
    sku: "PUT-04-SS",
    name: 'Union Tee, 1/4" OD, SS316',
    meta: "Panam Union Tee, Tube Fitting",
    category: "Union Tee",
    price: 18.53,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/UNION_Tee.jpg",
    specs: { material: "SS316", tubeOD: '1/4"', type: "Imperial" },
  },
  {
    sku: "PUT-06-SS",
    name: 'Union Tee, 3/8" OD, SS316',
    meta: "Panam Union Tee, Tube Fitting",
    category: "Union Tee",
    price: 25.57,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/UNION_Tee.jpg",
    specs: { material: "SS316", tubeOD: '3/8"', type: "Imperial" },
  },
  {
    sku: "PUT-08-SS",
    name: 'Union Tee, 1/2" OD, SS316',
    meta: "Panam Union Tee, Tube Fitting",
    category: "Union Tee",
    price: 36.43,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/UNION_Tee.jpg",
    specs: { material: "SS316", tubeOD: '1/2"', type: "Imperial" },
  },
  {
    sku: "PUT-4G-SWL-SS",
    name: 'Swivel Union Tee, 1/4" x 1/4" x 1/4" BSP, SS316',
    meta: "Panam Swivel Union Tee, Tube Fitting",
    category: "Union Tee",
    price: 32.23,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/UNION_Tee.jpg",
    specs: {
      material: "SS316",
      tubeOD: '1/4"',
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      threadSize: '1/4"',
      swivel: "Yes",
    },
  },
  {
    sku: "PUT-M08-SS",
    name: "Union Tee, 8mm OD, SS316",
    meta: "Panam Union Tee, Tube Fitting",
    category: "Union Tee",
    price: 23.08,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/UNION_Tee.jpg",
    specs: { material: "SS316", tubeOD: "8mm", type: "Metric" },
  },
  {
    sku: "PUT-M10-SS",
    name: "Union Tee, 10mm OD, SS316",
    meta: "Panam Union Tee, Tube Fitting",
    category: "Union Tee",
    price: 25.57,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/UNION_Tee.jpg",
    specs: { material: "SS316", tubeOD: "10mm", type: "Metric" },
  },
  {
    sku: "PA-4G-7S-SS",
    name: 'Adapters, 1/4" M ISO Parallel x 7/16-20 F SAE/MS, SS316',
    meta: "Panam Adapter, Pipe Fitting",
    category: "Adapter",
    price: 10.63,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/adaptor",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Parallel x SAE/MS",
      sizeA: '1/4" BSPP M',
      sizeB: "7/16-20 F SAE/MS",
    },
  },
  {
    sku: "PBV-HB-S-08-OD",
    name: 'Ball Valve, Hex Body, 1/2" OD, 2000 PSI, SS316, Straight',
    meta: "Panam Ball Valve, Tube Fitting",
    category: "Ball Valve",
    price: 100.69,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-HB-S-08-FF.png",
    specs: {
      material: "SS316",
      tubeOD: '1/2"',
      type: "Imperial",
      maxPressure: "2000 PSI",
      configuration: "Straight",
    },
  },
  {
    sku: "PCN-4G-SS",
    name: 'Close Nipple, 1/4" M x 1/4" M ISO Parallel, SS316',
    meta: "Panam Close Nipple, Pipe Fitting",
    category: "Close Nipple",
    price: 5.08,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/hn-new.png",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "ISO Parallel (BSPP)",
      pipeSize: '1/4"',
    },
  },
  {
    sku: "PCV-08-SS-FF",
    name: 'Check Valve, 1/2" Female NPT x Female NPT, SS316',
    meta: "Panam Check Valve, Valve",
    category: "Check Valve",
    price: 75.28,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/check-valves/c1.png",
    specs: {
      material: "SS316",
      type: "Imperial",
      threadType: "NPT",
      pipeSize: '1/2"',
      endConnection: "Female x Female",
    },
  },
  {
    sku: "PFC-12-12N-SS",
    name: 'Female Connector, 3/4" OD x 3/4" NPT, SS316',
    meta: "Panam Female Connector, Tube Fitting",
    category: "Female Connector",
    price: 37.79,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/female-connector.jpg",
    specs: {
      material: "SS316",
      tubeOD: '3/4"',
      type: "Imperial",
      threadType: "NPT",
      threadSize: '3/4"',
    },
  },
  {
    sku: "PFC-16J-16R-SS",
    name: 'Female Connector, 1" (1 5/16-12 JIC) M x 1" F ISO Tapered, SS316',
    meta: "Panam Female Connector, Tube Fitting",
    category: "Female Connector",
    price: 50.82,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/female-connector.jpg",
    specs: {
      material: "SS316",
      tubeOD: '1"',
      type: "Imperial",
      threadType: "37° Flare x ISO Tapered",
      threadSize: '1"',
    },
  },
  {
    sku: "PLME-32J-32N-SS",
    name: '45° Male Elbow, 2" (2 1/2-12 JIC) x 2" NPT, 37° Flare x NPT, SS316',
    meta: "Panam 45° Male Elbow, Tube Fitting",
    category: "Male Elbow",
    price: 452.18,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-elbow",
    specs: {
      material: "SS316",
      tubeOD: '2"',
      type: "Imperial",
      threadType: "37° Flare x NPT",
      threadSize: '2"',
    },
  },
  {
    sku: "PME-M08-4N-SS",
    name: 'Male Elbow, 8mm OD x 1/4" NPT, SS316',
    meta: "Panam Male Elbow, Tube Fitting",
    category: "Male Elbow",
    price: 19.56,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-elbow",
    specs: {
      material: "SS316",
      tubeOD: "8mm",
      type: "Metric",
      threadType: "NPT",
      threadSize: '1/4"',
    },
  },
  {
    sku: "PRUT-M15-M15-M10-SS",
    name: "Reducing Union Tee, 15mm OD x 15mm OD x 10mm OD, SS316",
    meta: "Panam Reducing Union Tee, Tube Fitting",
    category: "Union Tee",
    price: 53.62,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/union-tee.jpg",
    specs: { material: "SS316", tubeOD: "15mm", type: "Metric" },
  },
  {
    sku: "PTC-M15-SS",
    name: "Tube Cap, 15mm OD, SS316",
    meta: "Panam Tube Cap, Tube Fitting",
    category: "Tube Cap",
    price: 27.35,
    cloudinaryId:
      "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/TUBE_CAP.jpg",
    specs: { material: "SS316", tubeOD: "15mm", type: "Metric" },
  },
];

export const CATEGORIES = [
  "All",
  ...Array.from(new Set(PRODUCTS.map((p) => p.category))).sort(),
];
