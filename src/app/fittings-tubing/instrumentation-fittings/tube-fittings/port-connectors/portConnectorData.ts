export interface PortConnectorItem {
  id: number
  partNumber: string
  fittingType: string
  tubeOD: string
  tubeODUnit: string
  tubeOD2?: string
  imageUrl?: string
}

const IMAGES: Record<string, string> = {
  "Port Connector": "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/port-connector.jpg",
  "Reducing Port Connector": "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/port-connector.jpg",
}

export const PORT_CONNECTOR_DATA: PortConnectorItem[] = [
  { id: 1, partNumber: "PPC-02-SS", fittingType: "Port Connector", tubeOD: "1/8", tubeODUnit: "Imperial", imageUrl: IMAGES["Port Connector"] },
  { id: 2, partNumber: "PPC-04-SS", fittingType: "Port Connector", tubeOD: "1/4", tubeODUnit: "Imperial", imageUrl: IMAGES["Port Connector"] },
  { id: 3, partNumber: "PPC-05-SS", fittingType: "Port Connector", tubeOD: "5/16", tubeODUnit: "Imperial", imageUrl: IMAGES["Port Connector"] },
  { id: 4, partNumber: "PPC-06-SS", fittingType: "Port Connector", tubeOD: "3/8", tubeODUnit: "Imperial", imageUrl: IMAGES["Port Connector"] },
  { id: 5, partNumber: "PPC-08-SS", fittingType: "Port Connector", tubeOD: "1/2", tubeODUnit: "Imperial", imageUrl: IMAGES["Port Connector"] },
  { id: 6, partNumber: "PPC-12-SS", fittingType: "Port Connector", tubeOD: "3/4", tubeODUnit: "Imperial", imageUrl: IMAGES["Port Connector"] },
  { id: 7, partNumber: "PPC-16-SS", fittingType: "Port Connector", tubeOD: "1", tubeODUnit: "Imperial", imageUrl: IMAGES["Port Connector"] },
  { id: 8, partNumber: "PPC-M03-SS", fittingType: "Port Connector", tubeOD: "3", tubeODUnit: "Metric", imageUrl: IMAGES["Port Connector"] },
  { id: 9, partNumber: "PPC-M06-SS", fittingType: "Port Connector", tubeOD: "6", tubeODUnit: "Metric", imageUrl: IMAGES["Port Connector"] },
  { id: 10, partNumber: "PPC-M08-SS", fittingType: "Port Connector", tubeOD: "8", tubeODUnit: "Metric", imageUrl: IMAGES["Port Connector"] },
  { id: 11, partNumber: "PPC-M10-SS", fittingType: "Port Connector", tubeOD: "10", tubeODUnit: "Metric", imageUrl: IMAGES["Port Connector"] },
  { id: 12, partNumber: "PPC-M12-SS", fittingType: "Port Connector", tubeOD: "12", tubeODUnit: "Metric", imageUrl: IMAGES["Port Connector"] },
  { id: 13, partNumber: "PPC-M16-SS", fittingType: "Port Connector", tubeOD: "16", tubeODUnit: "Metric", imageUrl: IMAGES["Port Connector"] },
  { id: 14, partNumber: "PPC-M18-SS", fittingType: "Port Connector", tubeOD: "18", tubeODUnit: "Metric", imageUrl: IMAGES["Port Connector"] },
  { id: 15, partNumber: "PPC-M20-SS", fittingType: "Port Connector", tubeOD: "20", tubeODUnit: "Metric", imageUrl: IMAGES["Port Connector"] },
  { id: 16, partNumber: "PPC-M22-SS", fittingType: "Port Connector", tubeOD: "22", tubeODUnit: "Metric", imageUrl: IMAGES["Port Connector"] },
  { id: 17, partNumber: "PPC-M25-SS", fittingType: "Port Connector", tubeOD: "25", tubeODUnit: "Metric", imageUrl: IMAGES["Port Connector"] },
  { id: 18, partNumber: "PPC-M28-SS", fittingType: "Port Connector", tubeOD: "28", tubeODUnit: "Metric", imageUrl: IMAGES["Port Connector"] },
  { id: 19, partNumber: "PPC-M32-SS", fittingType: "Port Connector", tubeOD: "32", tubeODUnit: "Metric", imageUrl: IMAGES["Port Connector"] },
  { id: 20, partNumber: "PPC-M38-SS", fittingType: "Port Connector", tubeOD: "38", tubeODUnit: "Metric", imageUrl: IMAGES["Port Connector"] },
  { id: 21, partNumber: "PRPC-02-01-SS", fittingType: "Reducing Port Connector", tubeOD: "1/8", tubeODUnit: "Imperial", tubeOD2: "1/16", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 22, partNumber: "PRPC-04-02-SS", fittingType: "Reducing Port Connector", tubeOD: "1/4", tubeODUnit: "Imperial", tubeOD2: "1/8", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 23, partNumber: "PRPC-06-02-SS", fittingType: "Reducing Port Connector", tubeOD: "3/8", tubeODUnit: "Imperial", tubeOD2: "1/8", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 24, partNumber: "PRPC-06-04-SS", fittingType: "Reducing Port Connector", tubeOD: "3/8", tubeODUnit: "Imperial", tubeOD2: "1/4", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 25, partNumber: "PRPC-08-04-SS", fittingType: "Reducing Port Connector", tubeOD: "1/2", tubeODUnit: "Imperial", tubeOD2: "1/4", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 26, partNumber: "PRPC-08-06-SS", fittingType: "Reducing Port Connector", tubeOD: "1/2", tubeODUnit: "Imperial", tubeOD2: "3/8", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 27, partNumber: "PRPC-12-08-SS", fittingType: "Reducing Port Connector", tubeOD: "3/4", tubeODUnit: "Imperial", tubeOD2: "1/2", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 28, partNumber: "PRPC-16-08-SS", fittingType: "Reducing Port Connector", tubeOD: "1", tubeODUnit: "Imperial", tubeOD2: "1/2", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 29, partNumber: "PRPC-16-12-SS", fittingType: "Reducing Port Connector", tubeOD: "1", tubeODUnit: "Imperial", tubeOD2: "3/4", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 30, partNumber: "PRPC-M06-M03-SS", fittingType: "Reducing Port Connector", tubeOD: "6", tubeODUnit: "Metric", tubeOD2: "3", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 31, partNumber: "PRPC-M08-M06-SS", fittingType: "Reducing Port Connector", tubeOD: "8", tubeODUnit: "Metric", tubeOD2: "6", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 32, partNumber: "PRPC-M10-M06-SS", fittingType: "Reducing Port Connector", tubeOD: "10", tubeODUnit: "Metric", tubeOD2: "6", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 33, partNumber: "PRPC-M10-M08-SS", fittingType: "Reducing Port Connector", tubeOD: "10", tubeODUnit: "Metric", tubeOD2: "8", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 34, partNumber: "PRPC-M12-M06-SS", fittingType: "Reducing Port Connector", tubeOD: "12", tubeODUnit: "Metric", tubeOD2: "6", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 35, partNumber: "PRPC-M12-M08-SS", fittingType: "Reducing Port Connector", tubeOD: "12", tubeODUnit: "Metric", tubeOD2: "8", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 36, partNumber: "PRPC-M12-M10-SS", fittingType: "Reducing Port Connector", tubeOD: "12", tubeODUnit: "Metric", tubeOD2: "10", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 37, partNumber: "PRPC-M16-M12-SS", fittingType: "Reducing Port Connector", tubeOD: "16", tubeODUnit: "Metric", tubeOD2: "12", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 38, partNumber: "PRPC-M28-M25-SS", fittingType: "Reducing Port Connector", tubeOD: "28", tubeODUnit: "Metric", tubeOD2: "25", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 39, partNumber: "PRPC-M32-M25-SS", fittingType: "Reducing Port Connector", tubeOD: "32", tubeODUnit: "Metric", tubeOD2: "25", imageUrl: IMAGES["Reducing Port Connector"] },
  { id: 40, partNumber: "PRPC-M38-M25-SS", fittingType: "Reducing Port Connector", tubeOD: "38", tubeODUnit: "Metric", tubeOD2: "25", imageUrl: IMAGES["Reducing Port Connector"] },
]