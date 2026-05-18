export interface ActuatorItem {
  id: number
  series: 'AD' | 'AS' | 'RD'
  actuatorType: 'Scotch-Yoke' | 'Rack & Pinion'
  action: 'Double Acting' | 'Spring Return'
  model: string
  size: number
  priceGBP: number
  imageUrl: string
}

const AD_IMG = 'https://pblol2.blob.core.windows.net/panam-images/products/actuators/AD-Series.jpeg'
const RS_IMG = 'https://pblol2.blob.core.windows.net/panam-images/products/actuators/RS-Series.jpeg'

export const ACTUATOR_DATA: ActuatorItem[] = [
  // AD — Scotch-Yoke Double Acting
  { id: 1,  series: 'AD', actuatorType: 'Scotch-Yoke', action: 'Double Acting', model: 'AD50',  size: 50,  priceGBP: 94.71,   imageUrl: AD_IMG },
  { id: 2,  series: 'AD', actuatorType: 'Scotch-Yoke', action: 'Double Acting', model: 'AD65',  size: 65,  priceGBP: 123.59,  imageUrl: AD_IMG },
  { id: 3,  series: 'AD', actuatorType: 'Scotch-Yoke', action: 'Double Acting', model: 'AD80',  size: 80,  priceGBP: 179.03,  imageUrl: AD_IMG },
  { id: 4,  series: 'AD', actuatorType: 'Scotch-Yoke', action: 'Double Acting', model: 'AD100', size: 100, priceGBP: 258.72,  imageUrl: AD_IMG },
  { id: 5,  series: 'AD', actuatorType: 'Scotch-Yoke', action: 'Double Acting', model: 'AD125', size: 125, priceGBP: 405.41,  imageUrl: AD_IMG },
  { id: 6,  series: 'AD', actuatorType: 'Scotch-Yoke', action: 'Double Acting', model: 'AD140', size: 140, priceGBP: 562.49,  imageUrl: AD_IMG },
  { id: 7,  series: 'AD', actuatorType: 'Scotch-Yoke', action: 'Double Acting', model: 'AD160', size: 160, priceGBP: 785.40,  imageUrl: AD_IMG },
  { id: 8,  series: 'AD', actuatorType: 'Scotch-Yoke', action: 'Double Acting', model: 'AD185', size: 185, priceGBP: 1092.63, imageUrl: AD_IMG },
  { id: 9,  series: 'AD', actuatorType: 'Scotch-Yoke', action: 'Double Acting', model: 'AD210', size: 210, priceGBP: 1397.55, imageUrl: AD_IMG },
  { id: 10, series: 'AD', actuatorType: 'Scotch-Yoke', action: 'Double Acting', model: 'AD250', size: 250, priceGBP: 3153.15, imageUrl: AD_IMG },
  { id: 11, series: 'AD', actuatorType: 'Scotch-Yoke', action: 'Double Acting', model: 'AD300', size: 300, priceGBP: 5082.00, imageUrl: AD_IMG },
  // AS — Scotch-Yoke Spring Return
  { id: 12, series: 'AS', actuatorType: 'Scotch-Yoke', action: 'Spring Return', model: 'AS50',  size: 50,  priceGBP: 125.90,  imageUrl: AD_IMG },
  { id: 13, series: 'AS', actuatorType: 'Scotch-Yoke', action: 'Spring Return', model: 'AS65',  size: 65,  priceGBP: 181.34,  imageUrl: AD_IMG },
  { id: 14, series: 'AS', actuatorType: 'Scotch-Yoke', action: 'Spring Return', model: 'AS80',  size: 80,  priceGBP: 249.48,  imageUrl: AD_IMG },
  { id: 15, series: 'AS', actuatorType: 'Scotch-Yoke', action: 'Spring Return', model: 'AS100', size: 100, priceGBP: 339.57,  imageUrl: AD_IMG },
  { id: 16, series: 'AS', actuatorType: 'Scotch-Yoke', action: 'Spring Return', model: 'AS125', size: 125, priceGBP: 564.80,  imageUrl: AD_IMG },
  { id: 17, series: 'AS', actuatorType: 'Scotch-Yoke', action: 'Spring Return', model: 'AS140', size: 140, priceGBP: 787.71,  imageUrl: AD_IMG },
  { id: 18, series: 'AS', actuatorType: 'Scotch-Yoke', action: 'Spring Return', model: 'AS160', size: 160, priceGBP: 1011.78, imageUrl: AD_IMG },
  { id: 19, series: 'AS', actuatorType: 'Scotch-Yoke', action: 'Spring Return', model: 'AS185', size: 185, priceGBP: 1566.18, imageUrl: AD_IMG },
  { id: 20, series: 'AS', actuatorType: 'Scotch-Yoke', action: 'Spring Return', model: 'AS210', size: 210, priceGBP: 2095.63, imageUrl: AD_IMG },
  { id: 21, series: 'AS', actuatorType: 'Scotch-Yoke', action: 'Spring Return', model: 'AS250', size: 250, priceGBP: 4365.90, imageUrl: AD_IMG },
  { id: 22, series: 'AS', actuatorType: 'Scotch-Yoke', action: 'Spring Return', model: 'AS300', size: 300, priceGBP: 6930.00, imageUrl: AD_IMG },
  // RD — Rack & Pinion Double Acting
  { id: 23, series: 'RD', actuatorType: 'Rack & Pinion', action: 'Double Acting', model: 'RD32',  size: 32,  priceGBP: 46.20,  imageUrl: RS_IMG },
  { id: 24, series: 'RD', actuatorType: 'Rack & Pinion', action: 'Double Acting', model: 'RD40',  size: 40,  priceGBP: 50.82,  imageUrl: RS_IMG },
  { id: 25, series: 'RD', actuatorType: 'Rack & Pinion', action: 'Double Acting', model: 'RD50',  size: 50,  priceGBP: 68.16,  imageUrl: RS_IMG },
  { id: 26, series: 'RD', actuatorType: 'Rack & Pinion', action: 'Double Acting', model: 'RD65',  size: 65,  priceGBP: 79.70,  imageUrl: RS_IMG },
  { id: 27, series: 'RD', actuatorType: 'Rack & Pinion', action: 'Double Acting', model: 'RD80',  size: 80,  priceGBP: 106.26, imageUrl: RS_IMG },
  { id: 28, series: 'RD', actuatorType: 'Rack & Pinion', action: 'Double Acting', model: 'RD90',  size: 90,  priceGBP: 138.60, imageUrl: RS_IMG },
  { id: 29, series: 'RD', actuatorType: 'Rack & Pinion', action: 'Double Acting', model: 'RD100', size: 100, priceGBP: 194.04, imageUrl: RS_IMG },
  { id: 30, series: 'RD', actuatorType: 'Rack & Pinion', action: 'Double Acting', model: 'RD115', size: 115, priceGBP: 247.17, imageUrl: RS_IMG },
  { id: 31, series: 'RD', actuatorType: 'Rack & Pinion', action: 'Double Acting', model: 'RD125', size: 125, priceGBP: 297.99, imageUrl: RS_IMG },
  { id: 32, series: 'RD', actuatorType: 'Rack & Pinion', action: 'Double Acting', model: 'RD140', size: 140, priceGBP: 410.03, imageUrl: RS_IMG },
  { id: 33, series: 'RD', actuatorType: 'Rack & Pinion', action: 'Double Acting', model: 'RD160', size: 160, priceGBP: 485.10, imageUrl: RS_IMG },
  { id: 34, series: 'RD', actuatorType: 'Rack & Pinion', action: 'Double Acting', model: 'RD185', size: 185, priceGBP: 727.65, imageUrl: RS_IMG },
  { id: 35, series: 'RD', actuatorType: 'Rack & Pinion', action: 'Double Acting', model: 'RD210', size: 210, priceGBP: 958.65, imageUrl: RS_IMG },
]