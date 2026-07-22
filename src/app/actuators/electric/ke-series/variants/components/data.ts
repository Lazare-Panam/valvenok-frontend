export interface KESeriesActuatorModel {
  id: string
  modelCode: string
  baseModel: string
  variant: 'Standard' | 'Reduced Torque'
  maxTorque0: string
  maxTorque45: string
  maxTorque90: string
  opTime5060Sec: string
  amps110V: string
  amps220V: string
  amps380V: string
  amps440V: string
  ampsDC24V: string
  motorSpec: string
  manualTurns: string
  weightKg: string
  isoStandard: string
  isoOption: string
}

export const KE_SERIES_MODELS: KESeriesActuatorModel[] = [
  // KE001 (from base datasheet, single-torque only)
  { id: 'ke001', modelCode: 'KE001', baseModel: 'KE001', variant: 'Standard', maxTorque0: '—', maxTorque45: '—', maxTorque90: '8', opTime5060Sec: '14.5/12', amps110V: '0.1/0.09', amps220V: '0.07/0.06', amps380V: 'N/A', amps440V: 'N/A', ampsDC24V: 'N/A', motorSpec: 'E/2W', manualTurns: 'N/A', weightKg: '0.7', isoStandard: 'F03/05, 9x9', isoOption: '—' },
  { id: 'ke001-4n', modelCode: 'KE001-4N', baseModel: 'KE001', variant: 'Reduced Torque', maxTorque0: '—', maxTorque45: '—', maxTorque90: '4', opTime5060Sec: '7/6', amps110V: '0.1/0.09', amps220V: '0.07/0.06', amps380V: 'N/A', amps440V: 'N/A', ampsDC24V: 'N/A', motorSpec: 'E/2W', manualTurns: 'N/A', weightKg: '0.7', isoStandard: 'F03/05, 9x9', isoOption: '—' },

  // KE002
  { id: 'ke002', modelCode: 'KE002', baseModel: 'KE002', variant: 'Standard', maxTorque0: '—', maxTorque45: '—', maxTorque90: '20', opTime5060Sec: '17.5/14.5', amps110V: '0.29/0.25', amps220V: '0.12/0.1', amps380V: 'N/A', amps440V: 'N/A', ampsDC24V: '1.5', motorSpec: 'E-B/10W-10W', manualTurns: '3', weightKg: '0.9', isoStandard: 'F03/05, 11x11', isoOption: '—' },
  { id: 'ke002-10n', modelCode: '#KE002-10N', baseModel: 'KE002', variant: 'Reduced Torque', maxTorque0: '—', maxTorque45: '—', maxTorque90: '10', opTime5060Sec: '7/6', amps110V: '0.29/0.25', amps220V: '0.12/0.1', amps380V: 'N/A', amps440V: 'N/A', ampsDC24V: '1.5', motorSpec: 'E-B/10W-10W', manualTurns: '3', weightKg: '0.9', isoStandard: 'F03/05, 11x11', isoOption: '—' },

  // KE004
  { id: 'ke004', modelCode: 'KE004', baseModel: 'KE004', variant: 'Standard', maxTorque0: '—', maxTorque45: '—', maxTorque90: '40', opTime5060Sec: '12/10', amps110V: '0.67/0.6', amps220V: '0.23/0.2', amps380V: 'N/A', amps440V: 'N/A', ampsDC24V: '2', motorSpec: 'E-B/10W-10W', manualTurns: '3', weightKg: '1.5', isoStandard: 'F03/05/07, 11x11', isoOption: '14x14' },
  { id: 'ke004-15n', modelCode: '#KE004-15N', baseModel: 'KE004', variant: 'Reduced Torque', maxTorque0: '—', maxTorque45: '—', maxTorque90: '15', opTime5060Sec: '8.5/7', amps110V: '0.67/0.6', amps220V: '0.23/0.2', amps380V: 'N/A', amps440V: 'N/A', ampsDC24V: '2', motorSpec: 'E-B/10W-10W', manualTurns: '3', weightKg: '1.5', isoStandard: 'F03/05/07, 11x11', isoOption: '14x14' },

  // KE005
  { id: 'ke005', modelCode: 'KE005', baseModel: 'KE005', variant: 'Standard', maxTorque0: '—', maxTorque45: '—', maxTorque90: '50', opTime5060Sec: '13', amps110V: '(100-250V AC) 0.1-0.25', amps220V: '(100-250V AC) 0.1-0.25', amps380V: 'N/A', amps440V: 'N/A', ampsDC24V: '2', motorSpec: 'B-B/10W-10W', manualTurns: '18', weightKg: '1.3', isoStandard: 'F03/05/07, 14x14', isoOption: '11x11' },
  { id: 'ke005-20n', modelCode: '#KE005-20N', baseModel: 'KE005', variant: 'Reduced Torque', maxTorque0: '—', maxTorque45: '—', maxTorque90: '20', opTime5060Sec: '6', amps110V: '(100-250V AC) 0.1-0.25', amps220V: '(100-250V AC) 0.1-0.25', amps380V: 'N/A', amps440V: 'N/A', ampsDC24V: '2', motorSpec: 'B-B/10W-10W', manualTurns: '18', weightKg: '1.3', isoStandard: 'F03/05/07, 14x14', isoOption: '11x11' },

  // KE006
  { id: 'ke006', modelCode: 'KE006', baseModel: 'KE006', variant: 'Standard', maxTorque0: '—', maxTorque45: '—', maxTorque90: '60', opTime5060Sec: '18/15', amps110V: '0.67/0.6', amps220V: '0.23/0.2', amps380V: 'N/A', amps440V: 'N/A', ampsDC24V: '2', motorSpec: 'E-B/10W-10W', manualTurns: '3', weightKg: '1.9', isoStandard: 'F03/05/07, 14x14', isoOption: '—' },
  { id: 'ke006-25n', modelCode: '#KE006-25N', baseModel: 'KE006', variant: 'Reduced Torque', maxTorque0: '—', maxTorque45: '—', maxTorque90: '25', opTime5060Sec: '8/6.5', amps110V: '0.67/0.6', amps220V: '0.23/0.2', amps380V: 'N/A', amps440V: 'N/A', ampsDC24V: '2', motorSpec: 'E-B/10W-10W', manualTurns: '3', weightKg: '1.9', isoStandard: 'F03/05/07, 14x14', isoOption: '—' },

  // KE008
  { id: 'ke008', modelCode: 'KE008', baseModel: 'KE008', variant: 'Standard', maxTorque0: '—', maxTorque45: '—', maxTorque90: '80', opTime5060Sec: '17/14', amps110V: '0.53/0.50', amps220V: '0.33/0.29', amps380V: 'N/A', amps440V: 'N/A', ampsDC24V: '2.5', motorSpec: 'F-B/10W-10W', manualTurns: '20', weightKg: '2.6', isoStandard: 'F03/05/07, 14x14', isoOption: 'F05/07, 17x17' },
  { id: 'ke008-40n', modelCode: '#KE008-40N', baseModel: 'KE008', variant: 'Reduced Torque', maxTorque0: '—', maxTorque45: '—', maxTorque90: '40', opTime5060Sec: '8/6', amps110V: '0.53/0.50', amps220V: '0.33/0.29', amps380V: 'N/A', amps440V: 'N/A', ampsDC24V: '2.5', motorSpec: 'F-B/10W-10W', manualTurns: '20', weightKg: '2.6', isoStandard: 'F03/05/07, 14x14', isoOption: 'F05/07, 17x17' },

  // KE010
  { id: 'ke010', modelCode: 'KE010', baseModel: 'KE010', variant: 'Standard', maxTorque0: '100', maxTorque45: '65', maxTorque90: '100', opTime5060Sec: '22/18', amps110V: '0.82/0.75', amps220V: '0.42/0.40', amps380V: 'N/A', amps440V: 'N/A', ampsDC24V: '2.5', motorSpec: 'F-B/10W-15W', manualTurns: '15', weightKg: '3.0', isoStandard: 'F05/07, 14x14', isoOption: '17x17' },
  { id: 'ke010-80n', modelCode: '#KE010-80N', baseModel: 'KE010', variant: 'Reduced Torque', maxTorque0: '80', maxTorque45: '50', maxTorque90: '80', opTime5060Sec: '18/14', amps110V: '0.82/0.75', amps220V: '0.42/0.40', amps380V: 'N/A', amps440V: 'N/A', ampsDC24V: '2.5', motorSpec: 'F-B/10W-15W', manualTurns: '11', weightKg: '3.0', isoStandard: 'F05/07, 14x14', isoOption: '17x17' },
  { id: 'ke010-60n', modelCode: '#KE010-60N', baseModel: 'KE010', variant: 'Reduced Torque', maxTorque0: '60', maxTorque45: '40', maxTorque90: '60', opTime5060Sec: '14/11', amps110V: '0.82/0.75', amps220V: '0.42/0.40', amps380V: 'N/A', amps440V: 'N/A', ampsDC24V: '2.5', motorSpec: 'F-B/10W-15W', manualTurns: '9', weightKg: '3.0', isoStandard: 'F05/07, 14x14', isoOption: '17x17' },

  // KE016 (source lists these as "#KE160-..." — likely a typo for KE016, grouped here; flag for verification)
  { id: 'ke016', modelCode: 'KE016', baseModel: 'KE016', variant: 'Standard', maxTorque0: '160', maxTorque45: '107', maxTorque90: '160', opTime5060Sec: '28/23', amps110V: '0.94/0.85', amps220V: '0.50/0.46', amps380V: '0.47/0.37', amps440V: '0.62/0.49', ampsDC24V: '4', motorSpec: 'F-B/15W-15W', manualTurns: '19', weightKg: '6.2', isoStandard: 'F05/07/10, 17x17', isoOption: '—' },
  { id: 'ke016-130n', modelCode: '#KE016-130N', baseModel: 'KE016', variant: 'Reduced Torque', maxTorque0: '130', maxTorque45: '85', maxTorque90: '130', opTime5060Sec: '22/18', amps110V: '0.94/0.85', amps220V: '0.50/0.46', amps380V: '0.47/0.37', amps440V: '0.62/0.49', ampsDC24V: '4', motorSpec: 'F-B/15W-15W', manualTurns: '16', weightKg: '6.2', isoStandard: 'F05/07/10, 17x17', isoOption: '—' },
  { id: 'ke016-100n', modelCode: '#KE016-100N', baseModel: 'KE016', variant: 'Reduced Torque', maxTorque0: '100', maxTorque45: '65', maxTorque90: '100', opTime5060Sec: '18/14', amps110V: '0.94/0.85', amps220V: '0.50/0.46', amps380V: '0.47/0.37', amps440V: '0.62/0.49', ampsDC24V: '4', motorSpec: 'F-B/15W-15W', manualTurns: '13', weightKg: '6.2', isoStandard: 'F05/07/10, 17x17', isoOption: '—' },

  // KE028
  { id: 'ke028', modelCode: 'KE028', baseModel: 'KE028', variant: 'Standard', maxTorque0: '280', maxTorque45: '190', maxTorque90: '280', opTime5060Sec: '40/33', amps110V: '0.94/0.85', amps220V: '0.50/0.46', amps380V: '0.47/0.37', amps440V: '0.62/0.49', ampsDC24V: '4', motorSpec: 'F-B/15W-15W', manualTurns: '23', weightKg: '8.9', isoStandard: 'F07/10, 22x22', isoOption: 'F07/10/12, 27x27' },
  { id: 'ke028-240n', modelCode: '#KE028-240N', baseModel: 'KE028', variant: 'Reduced Torque', maxTorque0: '240', maxTorque45: '160', maxTorque90: '240', opTime5060Sec: '30/25', amps110V: '0.94/0.85', amps220V: '0.50/0.46', amps380V: '0.47/0.37', amps440V: '0.62/0.49', ampsDC24V: '4', motorSpec: 'F-B/15W-15W', manualTurns: '19', weightKg: '8.9', isoStandard: 'F07/10, 22x22', isoOption: 'F07/10/12, 27x27' },
  { id: 'ke028-190n', modelCode: '#KE028-190N', baseModel: 'KE028', variant: 'Reduced Torque', maxTorque0: '190', maxTorque45: '125', maxTorque90: '190', opTime5060Sec: '24/20', amps110V: '0.94/0.85', amps220V: '0.50/0.46', amps380V: '0.47/0.37', amps440V: '0.62/0.49', ampsDC24V: '4', motorSpec: 'F-B/15W-15W', manualTurns: '15', weightKg: '8.9', isoStandard: 'F07/10, 22x22', isoOption: 'F07/10/12, 27x27' },

  // KE040
  { id: 'ke040', modelCode: 'KE040', baseModel: 'KE040', variant: 'Standard', maxTorque0: '400', maxTorque45: '270', maxTorque90: '400', opTime5060Sec: '40/33', amps110V: '1.09/1.23', amps220V: '0.54/0.58', amps380V: '0.16/0.15', amps440V: '0.18/0.16', ampsDC24V: '5.5', motorSpec: 'F-B/25W-40W', manualTurns: '23', weightKg: '9.4', isoStandard: 'F07/10, 22x22', isoOption: 'F07/10/12, 27x27' },
  { id: 'ke040-350n', modelCode: '#KE040-350N', baseModel: 'KE040', variant: 'Reduced Torque', maxTorque0: '350', maxTorque45: '240', maxTorque90: '350', opTime5060Sec: '30/25', amps110V: '1.09/1.23', amps220V: '0.54/0.58', amps380V: '0.16/0.15', amps440V: '0.18/0.16', ampsDC24V: '5.5', motorSpec: 'F-B/25W-40W', manualTurns: '19', weightKg: '9.4', isoStandard: 'F07/10, 22x22', isoOption: 'F07/10/12, 27x27' },
  { id: 'ke040-300n', modelCode: '#KE040-300N', baseModel: 'KE040', variant: 'Reduced Torque', maxTorque0: '300', maxTorque45: '220', maxTorque90: '300', opTime5060Sec: '24/20', amps110V: '1.09/1.23', amps220V: '0.54/0.58', amps380V: '0.16/0.15', amps440V: '0.18/0.16', ampsDC24V: '5.5', motorSpec: 'F-B/25W-40W', manualTurns: '15', weightKg: '9.4', isoStandard: 'F07/10, 22x22', isoOption: 'F07/10/12, 27x27' },

  // KE050
  { id: 'ke050', modelCode: 'KE050', baseModel: 'KE050', variant: 'Standard', maxTorque0: '500', maxTorque45: '350', maxTorque90: '500', opTime5060Sec: '40/33', amps110V: '1.55/1.75', amps220V: '0.72/0.90', amps380V: '0.30/0.28', amps440V: '0.40/0.30', ampsDC24V: 'N/A', motorSpec: 'F/40W', manualTurns: '23', weightKg: '9.4', isoStandard: 'F07/10, 22x22', isoOption: 'F07/10/12, 27x27' },
  { id: 'ke050-450n', modelCode: '#KE050-450N', baseModel: 'KE050', variant: 'Reduced Torque', maxTorque0: '450', maxTorque45: '310', maxTorque90: '450', opTime5060Sec: '30/25', amps110V: '1.55/1.75', amps220V: '0.72/0.90', amps380V: '0.30/0.28', amps440V: '0.40/0.30', ampsDC24V: 'N/A', motorSpec: 'F/40W', manualTurns: '19', weightKg: '9.4', isoStandard: 'F07/10, 22x22', isoOption: 'F07/10/12, 27x27' },
  { id: 'ke050-400n', modelCode: '#KE050-400N', baseModel: 'KE050', variant: 'Reduced Torque', maxTorque0: '400', maxTorque45: '280', maxTorque90: '400', opTime5060Sec: '24/20', amps110V: '1.55/1.75', amps220V: '0.72/0.90', amps380V: '0.30/0.28', amps440V: '0.40/0.30', ampsDC24V: 'N/A', motorSpec: 'F/40W', manualTurns: '15', weightKg: '9.4', isoStandard: 'F07/10, 22x22', isoOption: 'F07/10/12, 27x27' },

  // KE080 / KE120 (no option variants)
  { id: 'ke080', modelCode: 'KE080', baseModel: 'KE080', variant: 'Standard', maxTorque0: '800', maxTorque45: '540', maxTorque90: '800', opTime5060Sec: '51/42', amps110V: '1.97/2.83', amps220V: '1.09/1.46', amps380V: '0.5/0.54', amps440V: '0.57/0.55', ampsDC24V: 'N/A', motorSpec: 'F/60W', manualTurns: '77', weightKg: '26.0', isoStandard: 'F10/12, 36x36', isoOption: 'F10/14, 36x36' },
  { id: 'ke120', modelCode: 'KE120', baseModel: 'KE120', variant: 'Standard', maxTorque0: '1200', maxTorque45: '800', maxTorque90: '1200', opTime5060Sec: '51/42', amps110V: '1.97/2.83', amps220V: '1.09/1.46', amps380V: '0.5/0.54', amps440V: '0.57/0.55', ampsDC24V: 'N/A', motorSpec: 'F/90W', manualTurns: '77', weightKg: '26.0', isoStandard: 'F10/12, 36x36', isoOption: 'F10/14, 36x36' },
]